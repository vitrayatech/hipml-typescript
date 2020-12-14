// import * as moment from 'moment';
import moment from 'moment';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ParseTreeProperty } from 'antlr4ts/tree/ParseTreeProperty';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

import {
    DateExprContext, DateContext, VariableContext, BoolContext, StringContext,
    NumberContext, AmountContext, ServiceContext, DiagnosisContext, ProcedureContext,
    ListExprContext, ListContext, ListOpExprContext, NumberExprContext, GroupFnExprContext,
    ComparatorExprContext, BooleanExprContext, SwitchDefaultExprContext, SwitchExprContext,
    SwitchStmtContext, ExclusionItemConditionContext, ExclusionItemContext, CoverageItemNameContext,
    CoverageItemConditionContext, CoverageItemLimitContext, CoverageItemDetailsContext,
    ExclusionBodyContext, ExclusionsSectionContext, CoverageItemContext, CoverageBodyContext,
    CoverageSectionContext, PolicySectionContext, PolicyContext, AttributeNumberContext,
    AttributeDateContext, AttributeStringContext, AttributeContext, AttributesBodyContext,
    AttributesSectionContext, BooleanGroupExprStmtContext, ConditionsSectionContext, ConditionsBodyContext,
    ConditionsItemContext, SingleValueContext
} from '../grammar/HIPMLParser';

import { HIPMLListener } from '../grammar/HIPMLListener';
import { SectionName, CoverageItemType } from './HIPMLEnums';

export class HIPMLCoverageDeterminator implements HIPMLListener {
    private policy = new ParseTreeProperty<any>();
    private policyVariables = {};
    private errorList = [];

    constructor(private inputVars) {}

    private setValue = (ctx: ParseTree, value: any) => this.policy.set(ctx, value);

    private getValue = (ctx: ParseTree) => this.policy.get(ctx);

    public getErrors = () => this.errorList;

    public getPolicyDetails = (ctx: PolicyContext) => this.getValue(ctx);

    // Override

    exitPolicy = (ctx: PolicyContext) => {
        let policy = {};
        ctx.policySection().map(this.getValue).forEach(section => {
            for (let key in section) {
                if (key == SectionName.Exclusions) {
                    policy[SectionName.Coverage] = {...policy[SectionName.Coverage], ...section[key]};
                } else {
                    policy[key] = section[key];
                }
            }
        });

        this.setValue(ctx, policy);
    }

    exitPolicySection = (ctx: PolicySectionContext) => this.setValue(ctx, this.getValue(ctx.getChild(0)));

    exitAttributesSection = (ctx: AttributesSectionContext) => {
        let attributesSection = {};
        attributesSection[SectionName["Policy Attributes"]] = this.getValue(ctx.attributesBody());
        this.setValue(ctx, attributesSection);
    }

    exitAttributesBody = (ctx: AttributesBodyContext) => {
        let attributes = [];

        ctx.attribute().forEach(attr => {
            let value = this.getValue(attr);
            attributes.push([value[0], value[1]]);
        });

        this.setValue(ctx, attributes);
    }

    exitAttribute = (ctx: AttributeContext) => {
        let attributePair = this.getValue(ctx.getChild(0));
        this.policyVariables[attributePair[0]] = attributePair[1];
        this.setValue(ctx, attributePair);
    }

    exitAttributeString = (ctx: AttributeStringContext) =>
        this.setValue(ctx, [ctx.ATTRIBUTES_KEY_WITH_STRING_VALUES().text, this.getValue(ctx.string())]);

    exitAttributeDate = (ctx: AttributeDateContext) =>
        this.setValue(ctx, [ctx.ATTRIBUTES_KEY_WITH_DATE_VALUES().text, this.getValue(ctx.date())]);

    exitAttributeNumber = (ctx: AttributeNumberContext) =>
        this.setValue(ctx, [ctx.ATTRIBUTES_KEY_WITH_NUMBER_VALUES().text, this.getValue(ctx.getChild(2))]);

    exitCoverageSection = (ctx: CoverageSectionContext) => {
        let coverage = {};
        coverage[SectionName.Coverage] = this.getValue(ctx.coverageBody());

        this.setValue(ctx, coverage);
    }

    exitCoverageBody = (ctx: CoverageBodyContext) => {
        let coverageItems = {};
        ctx.coverageItem().map(this.getValue).forEach(item => coverageItems = { ...coverageItems, ...item });
        this.setValue(ctx, coverageItems);
    }

    exitCoverageItem = (ctx: CoverageItemContext) => {
        let coverageItemDetails = {
            included: true
        };

        let coveredItems = {};

        if(ctx.coverageItemDetails()) {
            coverageItemDetails = this.getValue(ctx.coverageItemDetails());
        }

        ctx.coverageItemName().map(this.getValue).forEach(item => {
            coverageItemDetails["type"] = item.type;
            coveredItems[item.name] = coverageItemDetails
        });

        this.setValue(ctx, coveredItems);
    }

    exitCoverageItemName = (ctx: CoverageItemNameContext) => this.setValue(ctx, {
        type: (ctx.procedure() ? CoverageItemType.Procedure : (ctx.diagnosis() ? CoverageItemType.Diagnosis : CoverageItemType.Service)),
        name: this.getValue(ctx.getChild(0))
    });

    exitCoverageItemDetails = (ctx: CoverageItemDetailsContext) => {
        let coverageitemdetails = {
            included: true
        };

        if (ctx.coverageItemCondition()) {
            coverageitemdetails["included"] = this.getValue(ctx.coverageItemCondition());
        }

        if (ctx.coverageItemLimit().length > 0) {
            ctx.coverageItemLimit().map(this.getValue).forEach(limit => coverageitemdetails[limit[0]] = limit[1]);
        }

        this.setValue(ctx, coverageitemdetails);
    }

    exitCoverageItemLimit = (ctx: CoverageItemLimitContext) => {
        let limitValue = null;

        if(ctx.switchStmt() && !isNaN(this.getValue(ctx.switchStmt()))) {
            limitValue = Number(this.getValue(ctx.switchStmt()));
        } else if (ctx.numberExpr()) {
            limitValue = this.getValue(ctx.numberExpr());
        }

        if (limitValue != null) {
            this.setValue(ctx, [ctx.COVERAGE_ITEM_LIMIT_KEY().text, limitValue]);
        }
    }

    exitCoverageItemCondition = (ctx: CoverageItemConditionContext) => this.setValue(ctx, this.getValue(ctx.booleanExpr()));

    exitExclusionsSection = (ctx: ExclusionsSectionContext) => {
        let exclusions = {};
        exclusions[SectionName.Exclusions] = this.getValue(ctx.exclusionBody());

        this.setValue(ctx, exclusions);
    }

    exitExclusionBody = (ctx: ExclusionBodyContext) => {
        let exclusions = {};
        ctx.exclusionItem().map(this.getValue).forEach(item => exclusions = {...exclusions, ...item});
        this.setValue(ctx, exclusions);
    }

    exitExclusionItem = (ctx: ExclusionItemContext) => {
        let exclusionitemValue = {
            included: false
        };
        let exclusionItems = {};

        if (ctx.exclusionItemCondition()) {
            exclusionitemValue.included = this.getValue(ctx.exclusionItemCondition());
        }

        ctx.coverageItemName().map(this.getValue).forEach(item => {
            exclusionItems[item.name] = {
                ...exclusionitemValue,
                type: item.type
            };
        });

        this.setValue(ctx, exclusionItems)
    }

    exitExclusionItemCondition = (ctx: ExclusionItemConditionContext) => this.setValue(ctx, this.getValue(ctx.booleanExpr()));

    exitConditionsSection = (ctx: ConditionsSectionContext) => {
        let conditions = {};
        conditions[SectionName.Conditions] = this.getValue(ctx.conditionsBody());

        this.setValue(ctx, conditions);
    }

    exitConditionsBody = (ctx: ConditionsBodyContext) => {
        let conditionsItems = {};
        ctx.conditionsItem().map(this.getValue).forEach(item => conditionsItems = {...conditionsItems, ...item});
        this.setValue(ctx, conditionsItems);
    }

    exitConditionsItem = (ctx: ConditionsItemContext) => {
        let conditionsItem = {};

        conditionsItem[ctx.CONDITIONS_ITEM_KEY().text] = this.getValue(ctx.booleanExpr())

        this.setValue(ctx, conditionsItem)
    }

    exitSwitchStmt = (ctx: SwitchStmtContext) => {
        let stmtResult = null;

        for(let expr of ctx.switchExpr()) {
            if (this.getValue(expr) != null) {
                stmtResult = this.getValue(expr);
                break;
            }
        }

        if (stmtResult == null) {
            stmtResult = this.getValue(ctx.switchDefaultExpr());
        }

        this.setValue(ctx, stmtResult);
    }

    exitSwitchExpr = (ctx: SwitchExprContext) => {
        let exprVal = null;
        if(this.getValue(ctx.booleanExpr())) {
            exprVal = this.getValue(ctx.getChild(1));
        }

        this.setValue(ctx, exprVal);
    }

    exitSwitchDefaultExpr = (ctx: SwitchDefaultExprContext) => this.setValue(ctx, this.getValue(ctx.getChild(1)));

	exitBooleanExpr = (ctx: BooleanExprContext) => {
        let boolResult: Boolean = null;

        if (ctx.ALL_ARE_TRUE()) {
            boolResult = true;
            for(let expr of ctx.booleanGroupExprStmt()) {
                if (!this.getValue(expr)) {
                    boolResult = false;
                    break;
                }
            }
        } else if (ctx.ALL_ARE_FALSE()) {
            boolResult = true;
            for(let expr of ctx.booleanGroupExprStmt()) {
                if (this.getValue(expr)) {
                    boolResult = false;
                    break;
                }
            }
        } else if (ctx.AT_LEAST_ONE_IS_TRUE()) {
            boolResult = false;
            for(let expr of ctx.booleanGroupExprStmt()) {
                if (this.getValue(expr)) {
                    boolResult = true;
                    break;
                }
            }
        } else if (ctx.AT_LEAST_ONE_IS_FALSE()) {
            boolResult = false;
            for(let expr of ctx.booleanGroupExprStmt()) {
                if (!this.getValue(expr)) {
                    boolResult = true;
                    break;
                }
            }
        } else if (ctx.AND()) {
            boolResult = this.getValue(ctx.booleanExpr()[0]) && this.getValue(ctx.booleanExpr()[1]);
        } else if (ctx.OR()) {
            boolResult = this.getValue(ctx.booleanExpr()[0]) || this.getValue(ctx.booleanExpr()[1]);
        } else if (ctx.comparatorExpr()) {
            boolResult = this.getValue(ctx.comparatorExpr());
        } else if (ctx.listOpExpr()) {
            boolResult = this.getValue(ctx.listOpExpr());
        } else if (ctx.booleanExpr().length == 1) {
            boolResult = this.getValue(ctx.booleanExpr()[0]);
        }

        this.setValue(ctx, boolResult);
    }

    exitBooleanGroupExprStmt = (ctx: BooleanGroupExprStmtContext) => this.setValue(ctx, this.getValue(ctx.booleanExpr()));

    exitComparatorExpr = (ctx: ComparatorExprContext) => {
        let boolResult: Boolean = null;

        if (ctx.numberExpr().length > 0) {
            let firstNumExprVal = this.getValue(ctx.numberExpr()[0]);
            let secondNumExprVal = this.getValue(ctx.numberExpr()[1]);
            if (ctx.LT()) {
                boolResult = firstNumExprVal < secondNumExprVal;
            } else if (ctx.LTE()) {
                boolResult = firstNumExprVal <= secondNumExprVal;
            } else if (ctx.GT()) {
                boolResult = firstNumExprVal > secondNumExprVal;
            } else if (ctx.GTE()) {
                boolResult = firstNumExprVal >= secondNumExprVal;
            } else if (ctx.EQ()) {
                boolResult = firstNumExprVal == secondNumExprVal;
            } else if (ctx.NE()) {
                boolResult = firstNumExprVal != secondNumExprVal;
            }
        } else if (ctx.EQ()) {
            boolResult = this.getValue(ctx.getChild(0)) == this.getValue(ctx.getChild(2));
        } else if (ctx.NE()) {
            boolResult = this.getValue(ctx.getChild(0)) != this.getValue(ctx.getChild(2));
        }

        this.setValue(ctx, boolResult);
    }

    exitGroupFnExpr = (ctx: GroupFnExprContext) => {
        let numValue: number = null;
        let evaluatedNumExprArray = ctx.numberExpr().map(n => this.getValue(n));

        if (ctx.MIN() || ctx.LOW_OF()) {
            numValue = Math.min(...evaluatedNumExprArray);
        }
        else if (ctx.MAX() || ctx.HIGH_OF()) {
            numValue = Math.max(...evaluatedNumExprArray);
        }

        this.setValue(ctx, numValue);
    }

    exitNumberExpr = (ctx: NumberExprContext) => {
        let numValue: number = null;

        if (ctx.ADD()) {
            numValue = this.getValue(ctx.getChild(0)) + this.getValue(ctx.getChild(2));
        } else if (ctx.SUB()) {
            numValue = this.getValue(ctx.getChild(0)) - this.getValue(ctx.getChild(2));
        } else if (ctx.MUL()) {
            numValue = this.getValue(ctx.getChild(0)) * this.getValue(ctx.getChild(2));
        } else if (ctx.DIV()) {
            numValue = this.getValue(ctx.getChild(0)) / this.getValue(ctx.getChild(2));
        } else if (ctx.PER()) {
            numValue = this.getValue(ctx.getChild(2)) * this.getValue(ctx.getChild(0)) / 100;
        } else if (ctx.dateExpr() || ctx.groupFnExpr() || ctx.amount() || ctx.number()) {
            numValue = this.getValue(ctx.getChild(0));
        } else if (ctx.variable()) {
            let variable = this.getValue(ctx.variable());
            numValue = typeof variable === 'number' ? variable
                : typeof variable === 'string' ? Number(variable.replace(/,/g,''))
                : null;
        } else {
            numValue = this.getValue(ctx.getChild(1));
        }

        this.setValue(ctx, numValue);
    }

    exitListOpExpr = (ctx: ListOpExprContext) => {
        let list1 = [];
        let list2 = [];
        let exprResult: boolean;

        if(ctx.variable()) {
            list1 = this.getValue(ctx.variable()).split(",").map(s => s.trim());
            if (!ctx.singleValue())
                list2 = this.getValue(ctx.list()[0]);

        } else {
            list1 = this.getValue(ctx.list()[0])
            list2 = this.getValue(ctx.list()[1]);
        }

        if (ctx.singleValue()) {
            let singleValue = this.getValue(ctx.singleValue());
            exprResult = list1.includes(singleValue);
        }
        else {
            for (let val of list2) {
                exprResult = list1.includes(val);

                if (ctx.LIST_MATCH_ANY_ONE()) {
                    if (exprResult) break;
                }
                else {
                    // Match all by default
                    if (!exprResult) break;
                }
            }
        }

        this.setValue(ctx, ctx.CONTAINS() ? exprResult : !exprResult);
    }

    exitSingleValue = (ctx: SingleValueContext) => this.setValue(ctx, this.getValue(ctx.getChild(0)));

    exitList = (ctx: ListContext) => this.setValue(ctx, this.getValue(ctx.listExpr()));

    exitListExpr = (ctx: ListExprContext) => {
        let listValues: ParserRuleContext[]
            = ctx.string().length > 0 ? ctx.string()
            : ctx.date().length > 0 ? ctx.date()
            : ctx.variable().length > 0 ? ctx.variable()
            : ctx.procedure().length > 0 ? ctx.procedure()
            : ctx.diagnosis().length > 0 ? ctx.diagnosis()
            : ctx.service().length > 0 ? ctx.service()
            : [];

        this.setValue(ctx, listValues.map(i => this.getValue(i)));
    }

    exitDateExpr = (ctx: DateExprContext) => {
        let date1 = moment(this.getValue(ctx.children[1]));
        let date2 = moment(this.getValue(ctx.children[3]));

        let durationString: moment.unitOfTime.Diff =
            ctx.DIFF_DAYS() ? 'days' : ctx.DIFF_MONTHS() ? 'months' : 'years';

        this.setValue(ctx, date2.diff(date1, durationString, true));
    }

    exitDate = (ctx: DateContext) => this.setValue(ctx, ctx.DATE().text);

    exitVariable = (ctx: VariableContext) => {
        let variableName = ctx.VARIABLE().text.trim().slice(4, -1);
        this.setValue(ctx, this.policyVariables.hasOwnProperty(variableName)
            ? this.policyVariables[variableName] :  this.inputVars[variableName]);
    }

    exitProcedure = (ctx: ProcedureContext) => this.setValue(ctx, ctx.PROCEDURE().text.slice(4, -1));

    exitDiagnosis = (ctx: DiagnosisContext) => this.setValue(ctx, ctx.DIAGNOSIS().text.slice(4, -1));

    exitService = (ctx: ServiceContext) => this.setValue(ctx, ctx.SERVICE().text.slice(4, -1));

    exitAmount = (ctx: AmountContext) => this.setValue(ctx, Number(ctx.AMOUNT().text.slice(4, -1).replace(/,/g, '')));

    exitNumber = (ctx: NumberContext) => this.setValue(ctx, Number(ctx.NUMBER().text.replace(/,/g, '')));

    exitString = (ctx: StringContext) => this.setValue(ctx, ctx.STRING().text.slice(1, -1));

    exitBool = (ctx: BoolContext) => this.setValue(ctx, ctx.BOOLEAN().text.toLowerCase() === 'true');
}
