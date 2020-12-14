import {
    CoverageItemContext, VariableContext, ProcedureContext, DiagnosisContext,
    ServiceContext, ExclusionItemContext, AttributeStringContext, AttributeDateContext, AttributeNumberContext,
    ConditionsSectionContext, ConditionsItemContext, CoverageItemNameContext
} from '../grammar/HIPMLParser'
import {HIPMLListener} from '../grammar/HIPMLListener';
import {ParseTree} from 'antlr4ts/tree/ParseTree';
import {ParseTreeProperty} from 'antlr4ts/tree/ParseTreeProperty';

export class HIPMLPolicyVariablesDeterminator implements HIPMLListener {
    private policy = new ParseTreeProperty<any>();
    private policyVariablesMap = new Map<string, string[]>();
    private policyAttributes = [];

    public getPolicyVars(coverageItem: string) {
        let policyVars: string[] = [];

        if (this.policyVariablesMap.has(coverageItem)) {
            policyVars = this.policyVariablesMap.get(coverageItem);
        }

        return policyVars;
    }

    public getAllPolicyVars() {
        return this.policyVariablesMap;
    }

    private sections: string[] = [];
    private sectionInputVars: string[] = [];

    private resetSectionsAndVars = () => {
        this.sections = [];
        this.sectionInputVars = [];
    }

    private setSectionVars = () =>
        this.sections.forEach(item => this.policyVariablesMap.set(item, this.sectionInputVars));

    private pushPolicyAttribute = (attr: string) => {
        if (this.policyAttributes.indexOf(attr) == -1)
            this.policyAttributes.push(attr);
    }

    private setValue = (ctx: ParseTree, value: any) => this.policy.set(ctx, value);

    private getValue = (ctx: ParseTree) => this.policy.get(ctx);

    exitAttributeString = (ctx: AttributeStringContext) => this.pushPolicyAttribute(ctx.ATTRIBUTES_KEY_WITH_STRING_VALUES().text);

    exitAttributeDate = (ctx: AttributeDateContext) => this.pushPolicyAttribute(ctx.ATTRIBUTES_KEY_WITH_DATE_VALUES().text);

    enterAttributeNumber = (ctx: AttributeNumberContext) => {
        this.resetSectionsAndVars();
        this.pushPolicyAttribute(ctx.ATTRIBUTES_KEY_WITH_NUMBER_VALUES().text);
    }

    exitAttributeNumber = (ctx: AttributeNumberContext) => {
        this.sections.push(ctx.ATTRIBUTES_KEY_WITH_NUMBER_VALUES().text);
        this.setSectionVars();
    }

    enterCoverageItem = (ctx: CoverageItemContext) => this.resetSectionsAndVars();

    exitCoverageItem = (ctx: CoverageItemContext) => {
        ctx.coverageItemName().forEach(item => this.sections.push(this.getValue(item)));
        this.setSectionVars();
    }

    exitCoverageItemName = (ctx: CoverageItemNameContext) => this.setValue(ctx, this.getValue(ctx.getChild(0)));

    enterExclusionItem = (ctx: ExclusionItemContext) => this.resetSectionsAndVars();

    exitExclusionItem = (ctx: ExclusionItemContext) => {
        ctx.coverageItemName().forEach(item => this.sections.push(this.getValue(item)));
        this.setSectionVars();
    }

    enterConditionsItem = (ctx: ConditionsItemContext) => this.resetSectionsAndVars();

    exitConditionsItem = (ctx: ConditionsItemContext) => {
        this.sections.push(ctx.CONDITIONS_ITEM_KEY().text);
        this.setSectionVars();
    }

    exitVariable = (ctx: VariableContext) => {
        let variable = ctx.VARIABLE().text.slice(4, -1).trim();
        if (this.sectionInputVars.indexOf(variable) == -1 && this.policyAttributes.indexOf(variable) == -1) {
            this.sectionInputVars.push(variable);
        }
    }

    exitProcedure = (ctx: ProcedureContext) => this.setValue(ctx, ctx.PROCEDURE().text.slice(4, -1));

    exitDiagnosis = (ctx: DiagnosisContext) => this.setValue(ctx, ctx.DIAGNOSIS().text.slice(4, -1));

    exitService = (ctx: ServiceContext) => this.setValue(ctx, ctx.SERVICE().text.slice(4, -1));

}
