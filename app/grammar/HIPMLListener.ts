// Generated from HIPML.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PolicyContext } from "./HIPMLParser";
import { PolicySectionContext } from "./HIPMLParser";
import { AttributesSectionContext } from "./HIPMLParser";
import { AttributesBodyContext } from "./HIPMLParser";
import { AttributeContext } from "./HIPMLParser";
import { AttributeStringContext } from "./HIPMLParser";
import { AttributeDateContext } from "./HIPMLParser";
import { AttributeNumberContext } from "./HIPMLParser";
import { CoverageSectionContext } from "./HIPMLParser";
import { CoverageBodyContext } from "./HIPMLParser";
import { CoverageItemContext } from "./HIPMLParser";
import { CoverageItemNameContext } from "./HIPMLParser";
import { CoverageItemDetailsContext } from "./HIPMLParser";
import { CoverageItemLimitContext } from "./HIPMLParser";
import { CoverageItemConditionContext } from "./HIPMLParser";
import { ExclusionsSectionContext } from "./HIPMLParser";
import { ExclusionBodyContext } from "./HIPMLParser";
import { ExclusionItemContext } from "./HIPMLParser";
import { ExclusionItemConditionContext } from "./HIPMLParser";
import { ConditionsSectionContext } from "./HIPMLParser";
import { ConditionsBodyContext } from "./HIPMLParser";
import { ConditionsItemContext } from "./HIPMLParser";
import { DefinitionsSectionContext } from "./HIPMLParser";
import { ContactSectionContext } from "./HIPMLParser";
import { SwitchStmtContext } from "./HIPMLParser";
import { SwitchExprContext } from "./HIPMLParser";
import { SwitchDefaultExprContext } from "./HIPMLParser";
import { BooleanExprContext } from "./HIPMLParser";
import { BooleanGroupExprStmtContext } from "./HIPMLParser";
import { ComparatorExprContext } from "./HIPMLParser";
import { GroupFnExprContext } from "./HIPMLParser";
import { NumberExprContext } from "./HIPMLParser";
import { ListOpExprContext } from "./HIPMLParser";
import { SingleValueContext } from "./HIPMLParser";
import { ListContext } from "./HIPMLParser";
import { ListExprContext } from "./HIPMLParser";
import { DateExprContext } from "./HIPMLParser";
import { VariableContext } from "./HIPMLParser";
import { DiagnosisContext } from "./HIPMLParser";
import { ProcedureContext } from "./HIPMLParser";
import { ServiceContext } from "./HIPMLParser";
import { AmountContext } from "./HIPMLParser";
import { DateContext } from "./HIPMLParser";
import { NumberContext } from "./HIPMLParser";
import { StringContext } from "./HIPMLParser";
import { BoolContext } from "./HIPMLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HIPMLParser`.
 */
export interface HIPMLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HIPMLParser.policy`.
	 * @param ctx the parse tree
	 */
	enterPolicy?: (ctx: PolicyContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.policy`.
	 * @param ctx the parse tree
	 */
	exitPolicy?: (ctx: PolicyContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.policySection`.
	 * @param ctx the parse tree
	 */
	enterPolicySection?: (ctx: PolicySectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.policySection`.
	 * @param ctx the parse tree
	 */
	exitPolicySection?: (ctx: PolicySectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.attributesSection`.
	 * @param ctx the parse tree
	 */
	enterAttributesSection?: (ctx: AttributesSectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.attributesSection`.
	 * @param ctx the parse tree
	 */
	exitAttributesSection?: (ctx: AttributesSectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.attributesBody`.
	 * @param ctx the parse tree
	 */
	enterAttributesBody?: (ctx: AttributesBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.attributesBody`.
	 * @param ctx the parse tree
	 */
	exitAttributesBody?: (ctx: AttributesBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.attributeString`.
	 * @param ctx the parse tree
	 */
	enterAttributeString?: (ctx: AttributeStringContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.attributeString`.
	 * @param ctx the parse tree
	 */
	exitAttributeString?: (ctx: AttributeStringContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.attributeDate`.
	 * @param ctx the parse tree
	 */
	enterAttributeDate?: (ctx: AttributeDateContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.attributeDate`.
	 * @param ctx the parse tree
	 */
	exitAttributeDate?: (ctx: AttributeDateContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.attributeNumber`.
	 * @param ctx the parse tree
	 */
	enterAttributeNumber?: (ctx: AttributeNumberContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.attributeNumber`.
	 * @param ctx the parse tree
	 */
	exitAttributeNumber?: (ctx: AttributeNumberContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageSection`.
	 * @param ctx the parse tree
	 */
	enterCoverageSection?: (ctx: CoverageSectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageSection`.
	 * @param ctx the parse tree
	 */
	exitCoverageSection?: (ctx: CoverageSectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageBody`.
	 * @param ctx the parse tree
	 */
	enterCoverageBody?: (ctx: CoverageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageBody`.
	 * @param ctx the parse tree
	 */
	exitCoverageBody?: (ctx: CoverageBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageItem`.
	 * @param ctx the parse tree
	 */
	enterCoverageItem?: (ctx: CoverageItemContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageItem`.
	 * @param ctx the parse tree
	 */
	exitCoverageItem?: (ctx: CoverageItemContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageItemName`.
	 * @param ctx the parse tree
	 */
	enterCoverageItemName?: (ctx: CoverageItemNameContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageItemName`.
	 * @param ctx the parse tree
	 */
	exitCoverageItemName?: (ctx: CoverageItemNameContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageItemDetails`.
	 * @param ctx the parse tree
	 */
	enterCoverageItemDetails?: (ctx: CoverageItemDetailsContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageItemDetails`.
	 * @param ctx the parse tree
	 */
	exitCoverageItemDetails?: (ctx: CoverageItemDetailsContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageItemLimit`.
	 * @param ctx the parse tree
	 */
	enterCoverageItemLimit?: (ctx: CoverageItemLimitContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageItemLimit`.
	 * @param ctx the parse tree
	 */
	exitCoverageItemLimit?: (ctx: CoverageItemLimitContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.coverageItemCondition`.
	 * @param ctx the parse tree
	 */
	enterCoverageItemCondition?: (ctx: CoverageItemConditionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.coverageItemCondition`.
	 * @param ctx the parse tree
	 */
	exitCoverageItemCondition?: (ctx: CoverageItemConditionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.exclusionsSection`.
	 * @param ctx the parse tree
	 */
	enterExclusionsSection?: (ctx: ExclusionsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.exclusionsSection`.
	 * @param ctx the parse tree
	 */
	exitExclusionsSection?: (ctx: ExclusionsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.exclusionBody`.
	 * @param ctx the parse tree
	 */
	enterExclusionBody?: (ctx: ExclusionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.exclusionBody`.
	 * @param ctx the parse tree
	 */
	exitExclusionBody?: (ctx: ExclusionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.exclusionItem`.
	 * @param ctx the parse tree
	 */
	enterExclusionItem?: (ctx: ExclusionItemContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.exclusionItem`.
	 * @param ctx the parse tree
	 */
	exitExclusionItem?: (ctx: ExclusionItemContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.exclusionItemCondition`.
	 * @param ctx the parse tree
	 */
	enterExclusionItemCondition?: (ctx: ExclusionItemConditionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.exclusionItemCondition`.
	 * @param ctx the parse tree
	 */
	exitExclusionItemCondition?: (ctx: ExclusionItemConditionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.conditionsSection`.
	 * @param ctx the parse tree
	 */
	enterConditionsSection?: (ctx: ConditionsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.conditionsSection`.
	 * @param ctx the parse tree
	 */
	exitConditionsSection?: (ctx: ConditionsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.conditionsBody`.
	 * @param ctx the parse tree
	 */
	enterConditionsBody?: (ctx: ConditionsBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.conditionsBody`.
	 * @param ctx the parse tree
	 */
	exitConditionsBody?: (ctx: ConditionsBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.conditionsItem`.
	 * @param ctx the parse tree
	 */
	enterConditionsItem?: (ctx: ConditionsItemContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.conditionsItem`.
	 * @param ctx the parse tree
	 */
	exitConditionsItem?: (ctx: ConditionsItemContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.definitionsSection`.
	 * @param ctx the parse tree
	 */
	enterDefinitionsSection?: (ctx: DefinitionsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.definitionsSection`.
	 * @param ctx the parse tree
	 */
	exitDefinitionsSection?: (ctx: DefinitionsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.contactSection`.
	 * @param ctx the parse tree
	 */
	enterContactSection?: (ctx: ContactSectionContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.contactSection`.
	 * @param ctx the parse tree
	 */
	exitContactSection?: (ctx: ContactSectionContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.switchStmt`.
	 * @param ctx the parse tree
	 */
	enterSwitchStmt?: (ctx: SwitchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.switchStmt`.
	 * @param ctx the parse tree
	 */
	exitSwitchStmt?: (ctx: SwitchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.switchExpr`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpr?: (ctx: SwitchExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.switchExpr`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpr?: (ctx: SwitchExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.switchDefaultExpr`.
	 * @param ctx the parse tree
	 */
	enterSwitchDefaultExpr?: (ctx: SwitchDefaultExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.switchDefaultExpr`.
	 * @param ctx the parse tree
	 */
	exitSwitchDefaultExpr?: (ctx: SwitchDefaultExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.booleanExpr`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpr?: (ctx: BooleanExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.booleanExpr`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpr?: (ctx: BooleanExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.booleanGroupExprStmt`.
	 * @param ctx the parse tree
	 */
	enterBooleanGroupExprStmt?: (ctx: BooleanGroupExprStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.booleanGroupExprStmt`.
	 * @param ctx the parse tree
	 */
	exitBooleanGroupExprStmt?: (ctx: BooleanGroupExprStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.comparatorExpr`.
	 * @param ctx the parse tree
	 */
	enterComparatorExpr?: (ctx: ComparatorExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.comparatorExpr`.
	 * @param ctx the parse tree
	 */
	exitComparatorExpr?: (ctx: ComparatorExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.groupFnExpr`.
	 * @param ctx the parse tree
	 */
	enterGroupFnExpr?: (ctx: GroupFnExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.groupFnExpr`.
	 * @param ctx the parse tree
	 */
	exitGroupFnExpr?: (ctx: GroupFnExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.numberExpr`.
	 * @param ctx the parse tree
	 */
	enterNumberExpr?: (ctx: NumberExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.numberExpr`.
	 * @param ctx the parse tree
	 */
	exitNumberExpr?: (ctx: NumberExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.listOpExpr`.
	 * @param ctx the parse tree
	 */
	enterListOpExpr?: (ctx: ListOpExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.listOpExpr`.
	 * @param ctx the parse tree
	 */
	exitListOpExpr?: (ctx: ListOpExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.singleValue`.
	 * @param ctx the parse tree
	 */
	enterSingleValue?: (ctx: SingleValueContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.singleValue`.
	 * @param ctx the parse tree
	 */
	exitSingleValue?: (ctx: SingleValueContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.listExpr`.
	 * @param ctx the parse tree
	 */
	enterListExpr?: (ctx: ListExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.listExpr`.
	 * @param ctx the parse tree
	 */
	exitListExpr?: (ctx: ListExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.dateExpr`.
	 * @param ctx the parse tree
	 */
	enterDateExpr?: (ctx: DateExprContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.dateExpr`.
	 * @param ctx the parse tree
	 */
	exitDateExpr?: (ctx: DateExprContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.diagnosis`.
	 * @param ctx the parse tree
	 */
	enterDiagnosis?: (ctx: DiagnosisContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.diagnosis`.
	 * @param ctx the parse tree
	 */
	exitDiagnosis?: (ctx: DiagnosisContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.procedure`.
	 * @param ctx the parse tree
	 */
	enterProcedure?: (ctx: ProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.procedure`.
	 * @param ctx the parse tree
	 */
	exitProcedure?: (ctx: ProcedureContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.service`.
	 * @param ctx the parse tree
	 */
	enterService?: (ctx: ServiceContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.service`.
	 * @param ctx the parse tree
	 */
	exitService?: (ctx: ServiceContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.amount`.
	 * @param ctx the parse tree
	 */
	enterAmount?: (ctx: AmountContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.amount`.
	 * @param ctx the parse tree
	 */
	exitAmount?: (ctx: AmountContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `HIPMLParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `HIPMLParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;
}

