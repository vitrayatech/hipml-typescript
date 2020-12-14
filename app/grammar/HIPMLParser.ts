// Generated from HIPML.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HIPMLListener } from "./HIPMLListener";

export class HIPMLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly METADATA_SECTION_NAME = 7;
	public static readonly ATTRIBUTES_SECTION_NAME = 8;
	public static readonly COVERAGE_SECTION_NAME = 9;
	public static readonly EXCLUSIONS_SECTION_NAME = 10;
	public static readonly CONDITIONS_SECTION_NAME = 11;
	public static readonly DEFINITIONS_SECTION_NAME = 12;
	public static readonly CONTACT_SECTION_NAME = 13;
	public static readonly METADATA_KEY = 14;
	public static readonly ATTRIBUTES_KEY_WITH_STRING_VALUES = 15;
	public static readonly ATTRIBUTES_KEY_WITH_DATE_VALUES = 16;
	public static readonly ATTRIBUTES_KEY_WITH_NUMBER_VALUES = 17;
	public static readonly COVERAGE_ITEM_LIMIT_KEY = 18;
	public static readonly COVERAGE_ITEM_CONDITION_KEY = 19;
	public static readonly EXCLUSIONS_ITEM_CONDITION_KEY = 20;
	public static readonly CONDITIONS_ITEM_KEY = 21;
	public static readonly VARIABLE = 22;
	public static readonly PROCEDURE = 23;
	public static readonly DIAGNOSIS = 24;
	public static readonly SERVICE = 25;
	public static readonly AMOUNT = 26;
	public static readonly SWITCH_PREFIX = 27;
	public static readonly GROUP_EXPR_STMT_PREFIX = 28;
	public static readonly SWITCH_DEFAULT_SUFFIX = 29;
	public static readonly ALL_ARE_TRUE = 30;
	public static readonly ALL_ARE_FALSE = 31;
	public static readonly AT_LEAST_ONE_IS_TRUE = 32;
	public static readonly AT_LEAST_ONE_IS_FALSE = 33;
	public static readonly IF = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly CONTAINS = 37;
	public static readonly DOES_NOT_CONTAIN = 38;
	public static readonly ADD = 39;
	public static readonly SUB = 40;
	public static readonly MUL = 41;
	public static readonly DIV = 42;
	public static readonly PER = 43;
	public static readonly LT = 44;
	public static readonly LTE = 45;
	public static readonly GT = 46;
	public static readonly GTE = 47;
	public static readonly NE = 48;
	public static readonly EQ = 49;
	public static readonly MIN = 50;
	public static readonly MAX = 51;
	public static readonly LOW_OF = 52;
	public static readonly HIGH_OF = 53;
	public static readonly DIFF_DAYS = 54;
	public static readonly DIFF_MONTHS = 55;
	public static readonly DIFF_YEARS = 56;
	public static readonly LIST_MATCH_ANY_ONE = 57;
	public static readonly LIST_MATCH_ALL = 58;
	public static readonly DATE = 59;
	public static readonly BOOLEAN = 60;
	public static readonly NUMBER = 61;
	public static readonly STRING = 62;
	public static readonly MULTILINE_STRING = 63;
	public static readonly HYPHEN = 64;
	public static readonly LINE_COMMENT = 65;
	public static readonly COMMENT = 66;
	public static readonly WS = 67;
	public static readonly RULE_policy = 0;
	public static readonly RULE_policySection = 1;
	public static readonly RULE_attributesSection = 2;
	public static readonly RULE_attributesBody = 3;
	public static readonly RULE_attribute = 4;
	public static readonly RULE_attributeString = 5;
	public static readonly RULE_attributeDate = 6;
	public static readonly RULE_attributeNumber = 7;
	public static readonly RULE_coverageSection = 8;
	public static readonly RULE_coverageBody = 9;
	public static readonly RULE_coverageItem = 10;
	public static readonly RULE_coverageItemName = 11;
	public static readonly RULE_coverageItemDetails = 12;
	public static readonly RULE_coverageItemLimit = 13;
	public static readonly RULE_coverageItemCondition = 14;
	public static readonly RULE_exclusionsSection = 15;
	public static readonly RULE_exclusionBody = 16;
	public static readonly RULE_exclusionItem = 17;
	public static readonly RULE_exclusionItemCondition = 18;
	public static readonly RULE_conditionsSection = 19;
	public static readonly RULE_conditionsBody = 20;
	public static readonly RULE_conditionsItem = 21;
	public static readonly RULE_definitionsSection = 22;
	public static readonly RULE_contactSection = 23;
	public static readonly RULE_switchStmt = 24;
	public static readonly RULE_switchExpr = 25;
	public static readonly RULE_switchDefaultExpr = 26;
	public static readonly RULE_booleanExpr = 27;
	public static readonly RULE_booleanGroupExprStmt = 28;
	public static readonly RULE_comparatorExpr = 29;
	public static readonly RULE_groupFnExpr = 30;
	public static readonly RULE_numberExpr = 31;
	public static readonly RULE_listOpExpr = 32;
	public static readonly RULE_singleValue = 33;
	public static readonly RULE_list = 34;
	public static readonly RULE_listExpr = 35;
	public static readonly RULE_dateExpr = 36;
	public static readonly RULE_variable = 37;
	public static readonly RULE_diagnosis = 38;
	public static readonly RULE_procedure = 39;
	public static readonly RULE_service = 40;
	public static readonly RULE_amount = 41;
	public static readonly RULE_date = 42;
	public static readonly RULE_number = 43;
	public static readonly RULE_string = 44;
	public static readonly RULE_bool = 45;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"policy", "policySection", "attributesSection", "attributesBody", "attribute",
		"attributeString", "attributeDate", "attributeNumber", "coverageSection",
		"coverageBody", "coverageItem", "coverageItemName", "coverageItemDetails",
		"coverageItemLimit", "coverageItemCondition", "exclusionsSection", "exclusionBody",
		"exclusionItem", "exclusionItemCondition", "conditionsSection", "conditionsBody",
		"conditionsItem", "definitionsSection", "contactSection", "switchStmt",
		"switchExpr", "switchDefaultExpr", "booleanExpr", "booleanGroupExprStmt",
		"comparatorExpr", "groupFnExpr", "numberExpr", "listOpExpr", "singleValue",
		"list", "listExpr", "dateExpr", "variable", "diagnosis", "procedure",
		"service", "amount", "date", "number", "string", "bool",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "','", "'('", "')'", "'['", "']'", "'Policy Metadata'",
		"'Policy Attributes'", "'Coverage'", "'Exclusions'", "'Conditions'", "'Definitions'",
		"'Contact'", undefined, undefined, undefined, undefined, undefined, "'Included only if'",
		"'Excluded unless'", undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "'- '", undefined, undefined, undefined, undefined,
		undefined, "'if'", "'and'", "'or'", "'contains'", "'does not contain'",
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, "'any of'", "'all of'", undefined,
		undefined, undefined, undefined, undefined, "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		"METADATA_SECTION_NAME", "ATTRIBUTES_SECTION_NAME", "COVERAGE_SECTION_NAME",
		"EXCLUSIONS_SECTION_NAME", "CONDITIONS_SECTION_NAME", "DEFINITIONS_SECTION_NAME",
		"CONTACT_SECTION_NAME", "METADATA_KEY", "ATTRIBUTES_KEY_WITH_STRING_VALUES",
		"ATTRIBUTES_KEY_WITH_DATE_VALUES", "ATTRIBUTES_KEY_WITH_NUMBER_VALUES",
		"COVERAGE_ITEM_LIMIT_KEY", "COVERAGE_ITEM_CONDITION_KEY", "EXCLUSIONS_ITEM_CONDITION_KEY",
		"CONDITIONS_ITEM_KEY", "VARIABLE", "PROCEDURE", "DIAGNOSIS", "SERVICE",
		"AMOUNT", "SWITCH_PREFIX", "GROUP_EXPR_STMT_PREFIX", "SWITCH_DEFAULT_SUFFIX",
		"ALL_ARE_TRUE", "ALL_ARE_FALSE", "AT_LEAST_ONE_IS_TRUE", "AT_LEAST_ONE_IS_FALSE",
		"IF", "AND", "OR", "CONTAINS", "DOES_NOT_CONTAIN", "ADD", "SUB", "MUL",
		"DIV", "PER", "LT", "LTE", "GT", "GTE", "NE", "EQ", "MIN", "MAX", "LOW_OF",
		"HIGH_OF", "DIFF_DAYS", "DIFF_MONTHS", "DIFF_YEARS", "LIST_MATCH_ANY_ONE",
		"LIST_MATCH_ALL", "DATE", "BOOLEAN", "NUMBER", "STRING", "MULTILINE_STRING",
		"HYPHEN", "LINE_COMMENT", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HIPMLParser._LITERAL_NAMES, HIPMLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HIPMLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "HIPML.g4"; }

	// @Override
	public get ruleNames(): string[] { return HIPMLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HIPMLParser._serializedATN; }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(HIPMLParser._ATN, this);
  }
	// @RuleVersion(0)
	public policy(): PolicyContext {
		let _localctx: PolicyContext = new PolicyContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HIPMLParser.RULE_policy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 92;
				this.policySection();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HIPMLParser.ATTRIBUTES_SECTION_NAME) | (1 << HIPMLParser.COVERAGE_SECTION_NAME) | (1 << HIPMLParser.EXCLUSIONS_SECTION_NAME) | (1 << HIPMLParser.CONDITIONS_SECTION_NAME) | (1 << HIPMLParser.DEFINITIONS_SECTION_NAME) | (1 << HIPMLParser.CONTACT_SECTION_NAME))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public policySection(): PolicySectionContext {
		let _localctx: PolicySectionContext = new PolicySectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HIPMLParser.RULE_policySection);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.ATTRIBUTES_SECTION_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.attributesSection();
				}
				break;
			case HIPMLParser.COVERAGE_SECTION_NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.coverageSection();
				}
				break;
			case HIPMLParser.EXCLUSIONS_SECTION_NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.exclusionsSection();
				}
				break;
			case HIPMLParser.CONDITIONS_SECTION_NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 100;
				this.conditionsSection();
				}
				break;
			case HIPMLParser.DEFINITIONS_SECTION_NAME:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 101;
				this.definitionsSection();
				}
				break;
			case HIPMLParser.CONTACT_SECTION_NAME:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 102;
				this.contactSection();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributesSection(): AttributesSectionContext {
		let _localctx: AttributesSectionContext = new AttributesSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HIPMLParser.RULE_attributesSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(HIPMLParser.ATTRIBUTES_SECTION_NAME);
			this.state = 106;
			this.match(HIPMLParser.T__0);
			this.state = 107;
			this.attributesBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributesBody(): AttributesBodyContext {
		let _localctx: AttributesBodyContext = new AttributesBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HIPMLParser.RULE_attributesBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 109;
				this.attribute();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES) | (1 << HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES) | (1 << HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HIPMLParser.RULE_attribute);
		try {
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
				this.attributeString();
				}
				break;
			case HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 115;
				this.attributeDate();
				}
				break;
			case HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 116;
				this.attributeNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeString(): AttributeStringContext {
		let _localctx: AttributeStringContext = new AttributeStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HIPMLParser.RULE_attributeString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES);
			this.state = 120;
			this.match(HIPMLParser.T__0);
			this.state = 121;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeDate(): AttributeDateContext {
		let _localctx: AttributeDateContext = new AttributeDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HIPMLParser.RULE_attributeDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES);
			this.state = 124;
			this.match(HIPMLParser.T__0);
			this.state = 125;
			this.date();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeNumber(): AttributeNumberContext {
		let _localctx: AttributeNumberContext = new AttributeNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HIPMLParser.RULE_attributeNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES);
			this.state = 128;
			this.match(HIPMLParser.T__0);
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.T__2:
			case HIPMLParser.VARIABLE:
			case HIPMLParser.AMOUNT:
			case HIPMLParser.MIN:
			case HIPMLParser.MAX:
			case HIPMLParser.LOW_OF:
			case HIPMLParser.HIGH_OF:
			case HIPMLParser.DIFF_DAYS:
			case HIPMLParser.DIFF_MONTHS:
			case HIPMLParser.DIFF_YEARS:
			case HIPMLParser.NUMBER:
				{
				this.state = 129;
				this.numberExpr(0);
				}
				break;
			case HIPMLParser.SWITCH_PREFIX:
				{
				this.state = 130;
				this.switchStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageSection(): CoverageSectionContext {
		let _localctx: CoverageSectionContext = new CoverageSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HIPMLParser.RULE_coverageSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(HIPMLParser.COVERAGE_SECTION_NAME);
			this.state = 134;
			this.match(HIPMLParser.T__0);
			this.state = 135;
			this.coverageBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageBody(): CoverageBodyContext {
		let _localctx: CoverageBodyContext = new CoverageBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HIPMLParser.RULE_coverageBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.coverageItem();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HIPMLParser.PROCEDURE) | (1 << HIPMLParser.DIAGNOSIS) | (1 << HIPMLParser.SERVICE))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageItem(): CoverageItemContext {
		let _localctx: CoverageItemContext = new CoverageItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HIPMLParser.RULE_coverageItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.coverageItemName();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HIPMLParser.T__1) {
				{
				{
				this.state = 143;
				this.match(HIPMLParser.T__1);
				this.state = 144;
				this.coverageItemName();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HIPMLParser.T__0) {
				{
				this.state = 150;
				this.match(HIPMLParser.T__0);
				this.state = 151;
				this.coverageItemDetails();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageItemName(): CoverageItemNameContext {
		let _localctx: CoverageItemNameContext = new CoverageItemNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HIPMLParser.RULE_coverageItemName);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.PROCEDURE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.procedure();
				}
				break;
			case HIPMLParser.DIAGNOSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.diagnosis();
				}
				break;
			case HIPMLParser.SERVICE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.service();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageItemDetails(): CoverageItemDetailsContext {
		let _localctx: CoverageItemDetailsContext = new CoverageItemDetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HIPMLParser.RULE_coverageItemDetails);
		let _la: number;
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 159;
					this.coverageItemLimit();
					}
					}
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === HIPMLParser.COVERAGE_ITEM_LIMIT_KEY);
				this.state = 164;
				this.coverageItemCondition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 166;
					this.coverageItemLimit();
					}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === HIPMLParser.COVERAGE_ITEM_LIMIT_KEY);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
				this.coverageItemCondition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageItemLimit(): CoverageItemLimitContext {
		let _localctx: CoverageItemLimitContext = new CoverageItemLimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, HIPMLParser.RULE_coverageItemLimit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(HIPMLParser.COVERAGE_ITEM_LIMIT_KEY);
			this.state = 175;
			this.match(HIPMLParser.T__0);
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.T__2:
			case HIPMLParser.VARIABLE:
			case HIPMLParser.AMOUNT:
			case HIPMLParser.MIN:
			case HIPMLParser.MAX:
			case HIPMLParser.LOW_OF:
			case HIPMLParser.HIGH_OF:
			case HIPMLParser.DIFF_DAYS:
			case HIPMLParser.DIFF_MONTHS:
			case HIPMLParser.DIFF_YEARS:
			case HIPMLParser.NUMBER:
				{
				this.state = 176;
				this.numberExpr(0);
				}
				break;
			case HIPMLParser.SWITCH_PREFIX:
				{
				this.state = 177;
				this.switchStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageItemCondition(): CoverageItemConditionContext {
		let _localctx: CoverageItemConditionContext = new CoverageItemConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, HIPMLParser.RULE_coverageItemCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(HIPMLParser.COVERAGE_ITEM_CONDITION_KEY);
			this.state = 181;
			this.match(HIPMLParser.T__0);
			this.state = 182;
			this.booleanExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusionsSection(): ExclusionsSectionContext {
		let _localctx: ExclusionsSectionContext = new ExclusionsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, HIPMLParser.RULE_exclusionsSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(HIPMLParser.EXCLUSIONS_SECTION_NAME);
			this.state = 185;
			this.match(HIPMLParser.T__0);
			this.state = 186;
			this.exclusionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusionBody(): ExclusionBodyContext {
		let _localctx: ExclusionBodyContext = new ExclusionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HIPMLParser.RULE_exclusionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 188;
				this.exclusionItem();
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HIPMLParser.PROCEDURE) | (1 << HIPMLParser.DIAGNOSIS) | (1 << HIPMLParser.SERVICE))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusionItem(): ExclusionItemContext {
		let _localctx: ExclusionItemContext = new ExclusionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, HIPMLParser.RULE_exclusionItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.coverageItemName();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HIPMLParser.T__1) {
				{
				{
				this.state = 194;
				this.match(HIPMLParser.T__1);
				this.state = 195;
				this.coverageItemName();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HIPMLParser.T__0) {
				{
				this.state = 201;
				this.match(HIPMLParser.T__0);
				this.state = 202;
				this.exclusionItemCondition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusionItemCondition(): ExclusionItemConditionContext {
		let _localctx: ExclusionItemConditionContext = new ExclusionItemConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, HIPMLParser.RULE_exclusionItemCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(HIPMLParser.EXCLUSIONS_ITEM_CONDITION_KEY);
			this.state = 206;
			this.match(HIPMLParser.T__0);
			this.state = 207;
			this.booleanExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionsSection(): ConditionsSectionContext {
		let _localctx: ConditionsSectionContext = new ConditionsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, HIPMLParser.RULE_conditionsSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(HIPMLParser.CONDITIONS_SECTION_NAME);
			this.state = 210;
			this.match(HIPMLParser.T__0);
			this.state = 211;
			this.conditionsBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionsBody(): ConditionsBodyContext {
		let _localctx: ConditionsBodyContext = new ConditionsBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, HIPMLParser.RULE_conditionsBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 213;
				this.conditionsItem();
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === HIPMLParser.CONDITIONS_ITEM_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionsItem(): ConditionsItemContext {
		let _localctx: ConditionsItemContext = new ConditionsItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, HIPMLParser.RULE_conditionsItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(HIPMLParser.CONDITIONS_ITEM_KEY);
			this.state = 219;
			this.match(HIPMLParser.T__0);
			this.state = 220;
			this.booleanExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionsSection(): DefinitionsSectionContext {
		let _localctx: DefinitionsSectionContext = new DefinitionsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, HIPMLParser.RULE_definitionsSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(HIPMLParser.DEFINITIONS_SECTION_NAME);
			this.state = 223;
			this.match(HIPMLParser.T__0);
			this.state = 224;
			this.match(HIPMLParser.MULTILINE_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contactSection(): ContactSectionContext {
		let _localctx: ContactSectionContext = new ContactSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, HIPMLParser.RULE_contactSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(HIPMLParser.CONTACT_SECTION_NAME);
			this.state = 227;
			this.match(HIPMLParser.T__0);
			this.state = 228;
			this.match(HIPMLParser.MULTILINE_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStmt(): SwitchStmtContext {
		let _localctx: SwitchStmtContext = new SwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, HIPMLParser.RULE_switchStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(HIPMLParser.SWITCH_PREFIX);
			this.state = 232;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 231;
					this.switchExpr();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 236;
			this.switchDefaultExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchExpr(): SwitchExprContext {
		let _localctx: SwitchExprContext = new SwitchExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, HIPMLParser.RULE_switchExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(HIPMLParser.GROUP_EXPR_STMT_PREFIX);
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.T__2:
			case HIPMLParser.VARIABLE:
			case HIPMLParser.AMOUNT:
			case HIPMLParser.MIN:
			case HIPMLParser.MAX:
			case HIPMLParser.LOW_OF:
			case HIPMLParser.HIGH_OF:
			case HIPMLParser.DIFF_DAYS:
			case HIPMLParser.DIFF_MONTHS:
			case HIPMLParser.DIFF_YEARS:
			case HIPMLParser.NUMBER:
				{
				this.state = 239;
				this.numberExpr(0);
				}
				break;
			case HIPMLParser.STRING:
				{
				this.state = 240;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 243;
			this.match(HIPMLParser.IF);
			this.state = 244;
			this.booleanExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchDefaultExpr(): SwitchDefaultExprContext {
		let _localctx: SwitchDefaultExprContext = new SwitchDefaultExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, HIPMLParser.RULE_switchDefaultExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(HIPMLParser.GROUP_EXPR_STMT_PREFIX);
			this.state = 249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.T__2:
			case HIPMLParser.VARIABLE:
			case HIPMLParser.AMOUNT:
			case HIPMLParser.MIN:
			case HIPMLParser.MAX:
			case HIPMLParser.LOW_OF:
			case HIPMLParser.HIGH_OF:
			case HIPMLParser.DIFF_DAYS:
			case HIPMLParser.DIFF_MONTHS:
			case HIPMLParser.DIFF_YEARS:
			case HIPMLParser.NUMBER:
				{
				this.state = 247;
				this.numberExpr(0);
				}
				break;
			case HIPMLParser.STRING:
				{
				this.state = 248;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 251;
			this.match(HIPMLParser.SWITCH_DEFAULT_SUFFIX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpr(): BooleanExprContext;
	public booleanExpr(_p: number): BooleanExprContext;
	// @RuleVersion(0)
	public booleanExpr(_p?: number): BooleanExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExprContext = new BooleanExprContext(this._ctx, _parentState);
		let _prevctx: BooleanExprContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, HIPMLParser.RULE_booleanExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 254;
				this.match(HIPMLParser.ALL_ARE_TRUE);
				this.state = 256;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 255;
						this.booleanGroupExprStmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 258;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				{
				this.state = 260;
				this.match(HIPMLParser.ALL_ARE_FALSE);
				this.state = 262;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 261;
						this.booleanGroupExprStmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 264;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 3:
				{
				this.state = 266;
				this.match(HIPMLParser.AT_LEAST_ONE_IS_TRUE);
				this.state = 268;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 267;
						this.booleanGroupExprStmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 270;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				{
				this.state = 272;
				this.match(HIPMLParser.AT_LEAST_ONE_IS_FALSE);
				this.state = 274;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 273;
						this.booleanGroupExprStmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 276;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 5:
				{
				this.state = 278;
				this.comparatorExpr();
				}
				break;

			case 6:
				{
				this.state = 279;
				this.listOpExpr();
				}
				break;

			case 7:
				{
				this.state = 280;
				this.match(HIPMLParser.T__2);
				this.state = 281;
				this.booleanExpr(0);
				this.state = 282;
				this.match(HIPMLParser.T__3);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 292;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						_localctx = new BooleanExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_booleanExpr);
						this.state = 286;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 287;
						this.match(HIPMLParser.AND);
						this.state = 288;
						this.booleanExpr(6);
						}
						break;

					case 2:
						{
						_localctx = new BooleanExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_booleanExpr);
						this.state = 289;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 290;
						this.match(HIPMLParser.OR);
						this.state = 291;
						this.booleanExpr(5);
						}
						break;
					}
					}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanGroupExprStmt(): BooleanGroupExprStmtContext {
		let _localctx: BooleanGroupExprStmtContext = new BooleanGroupExprStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, HIPMLParser.RULE_booleanGroupExprStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(HIPMLParser.GROUP_EXPR_STMT_PREFIX);
			this.state = 298;
			this.booleanExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparatorExpr(): ComparatorExprContext {
		let _localctx: ComparatorExprContext = new ComparatorExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, HIPMLParser.RULE_comparatorExpr);
		try {
			this.state = 342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.numberExpr(0);
				this.state = 301;
				this.match(HIPMLParser.LT);
				this.state = 302;
				this.numberExpr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.numberExpr(0);
				this.state = 305;
				this.match(HIPMLParser.LTE);
				this.state = 306;
				this.numberExpr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 308;
				this.numberExpr(0);
				this.state = 309;
				this.match(HIPMLParser.GT);
				this.state = 310;
				this.numberExpr(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 312;
				this.numberExpr(0);
				this.state = 313;
				this.match(HIPMLParser.GTE);
				this.state = 314;
				this.numberExpr(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 316;
				this.numberExpr(0);
				this.state = 317;
				this.match(HIPMLParser.EQ);
				this.state = 318;
				this.numberExpr(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 320;
				this.numberExpr(0);
				this.state = 321;
				this.match(HIPMLParser.NE);
				this.state = 322;
				this.numberExpr(0);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 326;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 324;
					this.variable();
					}
					break;
				case HIPMLParser.STRING:
					{
					this.state = 325;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 328;
				this.match(HIPMLParser.EQ);
				this.state = 331;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 329;
					this.variable();
					}
					break;
				case HIPMLParser.STRING:
					{
					this.state = 330;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 335;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 333;
					this.variable();
					}
					break;
				case HIPMLParser.STRING:
					{
					this.state = 334;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 337;
				this.match(HIPMLParser.NE);
				this.state = 340;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 338;
					this.variable();
					}
					break;
				case HIPMLParser.STRING:
					{
					this.state = 339;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupFnExpr(): GroupFnExprContext {
		let _localctx: GroupFnExprContext = new GroupFnExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, HIPMLParser.RULE_groupFnExpr);
		let _la: number;
		try {
			this.state = 368;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.MIN:
			case HIPMLParser.LOW_OF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 344;
				_la = this._input.LA(1);
				if (!(_la === HIPMLParser.MIN || _la === HIPMLParser.LOW_OF)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 345;
				this.numberExpr(0);
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 346;
					this.match(HIPMLParser.T__1);
					this.state = 347;
					this.numberExpr(0);
					}
					}
					this.state = 352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 353;
				this.match(HIPMLParser.AND);
				this.state = 354;
				this.numberExpr(0);
				}
				break;
			case HIPMLParser.MAX:
			case HIPMLParser.HIGH_OF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 356;
				_la = this._input.LA(1);
				if (!(_la === HIPMLParser.MAX || _la === HIPMLParser.HIGH_OF)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 357;
				this.numberExpr(0);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 358;
					this.match(HIPMLParser.T__1);
					this.state = 359;
					this.numberExpr(0);
					}
					}
					this.state = 364;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 365;
				this.match(HIPMLParser.AND);
				this.state = 366;
				this.numberExpr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public numberExpr(): NumberExprContext;
	public numberExpr(_p: number): NumberExprContext;
	// @RuleVersion(0)
	public numberExpr(_p?: number): NumberExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NumberExprContext = new NumberExprContext(this._ctx, _parentState);
		let _prevctx: NumberExprContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, HIPMLParser.RULE_numberExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.DIFF_DAYS:
			case HIPMLParser.DIFF_MONTHS:
			case HIPMLParser.DIFF_YEARS:
				{
				this.state = 371;
				this.dateExpr();
				}
				break;
			case HIPMLParser.MIN:
			case HIPMLParser.MAX:
			case HIPMLParser.LOW_OF:
			case HIPMLParser.HIGH_OF:
				{
				this.state = 372;
				this.groupFnExpr();
				}
				break;
			case HIPMLParser.VARIABLE:
				{
				this.state = 373;
				this.variable();
				}
				break;
			case HIPMLParser.AMOUNT:
				{
				this.state = 374;
				this.amount();
				}
				break;
			case HIPMLParser.NUMBER:
				{
				this.state = 375;
				this.number();
				}
				break;
			case HIPMLParser.T__2:
				{
				this.state = 376;
				this.match(HIPMLParser.T__2);
				this.state = 377;
				this.numberExpr(0);
				this.state = 378;
				this.match(HIPMLParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 399;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 397;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new NumberExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_numberExpr);
						this.state = 382;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 383;
						this.match(HIPMLParser.MUL);
						this.state = 384;
						this.numberExpr(12);
						}
						break;

					case 2:
						{
						_localctx = new NumberExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_numberExpr);
						this.state = 385;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 386;
						this.match(HIPMLParser.DIV);
						this.state = 387;
						this.numberExpr(11);
						}
						break;

					case 3:
						{
						_localctx = new NumberExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_numberExpr);
						this.state = 388;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 389;
						this.match(HIPMLParser.PER);
						this.state = 390;
						this.numberExpr(10);
						}
						break;

					case 4:
						{
						_localctx = new NumberExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_numberExpr);
						this.state = 391;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 392;
						this.match(HIPMLParser.ADD);
						this.state = 393;
						this.numberExpr(9);
						}
						break;

					case 5:
						{
						_localctx = new NumberExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HIPMLParser.RULE_numberExpr);
						this.state = 394;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 395;
						this.match(HIPMLParser.SUB);
						this.state = 396;
						this.numberExpr(8);
						}
						break;
					}
					}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listOpExpr(): ListOpExprContext {
		let _localctx: ListOpExprContext = new ListOpExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, HIPMLParser.RULE_listOpExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.T__4:
				{
				this.state = 402;
				this.list();
				}
				break;
			case HIPMLParser.VARIABLE:
				{
				this.state = 403;
				this.variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 406;
			_la = this._input.LA(1);
			if (!(_la === HIPMLParser.CONTAINS || _la === HIPMLParser.DOES_NOT_CONTAIN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HIPMLParser.LIST_MATCH_ANY_ONE || _la === HIPMLParser.LIST_MATCH_ALL) {
				{
				this.state = 407;
				_la = this._input.LA(1);
				if (!(_la === HIPMLParser.LIST_MATCH_ANY_ONE || _la === HIPMLParser.LIST_MATCH_ALL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 412;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.VARIABLE:
			case HIPMLParser.PROCEDURE:
			case HIPMLParser.DIAGNOSIS:
			case HIPMLParser.SERVICE:
			case HIPMLParser.AMOUNT:
			case HIPMLParser.DATE:
			case HIPMLParser.NUMBER:
			case HIPMLParser.STRING:
				{
				this.state = 410;
				this.singleValue();
				}
				break;
			case HIPMLParser.T__4:
				{
				this.state = 411;
				this.list();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleValue(): SingleValueContext {
		let _localctx: SingleValueContext = new SingleValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, HIPMLParser.RULE_singleValue);
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 414;
				this.number();
				}
				break;
			case HIPMLParser.AMOUNT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 415;
				this.amount();
				}
				break;
			case HIPMLParser.VARIABLE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 416;
				this.variable();
				}
				break;
			case HIPMLParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 417;
				this.date();
				}
				break;
			case HIPMLParser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 418;
				this.string();
				}
				break;
			case HIPMLParser.PROCEDURE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 419;
				this.procedure();
				}
				break;
			case HIPMLParser.DIAGNOSIS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 420;
				this.diagnosis();
				}
				break;
			case HIPMLParser.SERVICE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 421;
				this.service();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, HIPMLParser.RULE_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(HIPMLParser.T__4);
			this.state = 425;
			this.listExpr();
			this.state = 426;
			this.match(HIPMLParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listExpr(): ListExprContext {
		let _localctx: ListExprContext = new ListExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, HIPMLParser.RULE_listExpr);
		let _la: number;
		try {
			this.state = 484;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.AMOUNT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.amount();
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 429;
					this.match(HIPMLParser.T__1);
					this.state = 430;
					this.amount();
					}
					}
					this.state = 435;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HIPMLParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 436;
				this.variable();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 437;
					this.match(HIPMLParser.T__1);
					this.state = 438;
					this.variable();
					}
					}
					this.state = 443;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HIPMLParser.DATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 444;
				this.date();
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 445;
					this.match(HIPMLParser.T__1);
					this.state = 446;
					this.date();
					}
					}
					this.state = 451;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HIPMLParser.STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 452;
				this.string();
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 453;
					this.match(HIPMLParser.T__1);
					this.state = 454;
					this.string();
					}
					}
					this.state = 459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HIPMLParser.PROCEDURE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 460;
				this.procedure();
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 461;
					this.match(HIPMLParser.T__1);
					this.state = 462;
					this.procedure();
					}
					}
					this.state = 467;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HIPMLParser.DIAGNOSIS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 468;
				this.diagnosis();
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 469;
					this.match(HIPMLParser.T__1);
					this.state = 470;
					this.diagnosis();
					}
					}
					this.state = 475;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HIPMLParser.SERVICE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 476;
				this.service();
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HIPMLParser.T__1) {
					{
					{
					this.state = 477;
					this.match(HIPMLParser.T__1);
					this.state = 478;
					this.service();
					}
					}
					this.state = 483;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateExpr(): DateExprContext {
		let _localctx: DateExprContext = new DateExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, HIPMLParser.RULE_dateExpr);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HIPMLParser.DIFF_DAYS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this.match(HIPMLParser.DIFF_DAYS);
				this.state = 489;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 487;
					this.variable();
					}
					break;
				case HIPMLParser.DATE:
					{
					this.state = 488;
					this.date();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 491;
				this.match(HIPMLParser.AND);
				this.state = 494;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 492;
					this.variable();
					}
					break;
				case HIPMLParser.DATE:
					{
					this.state = 493;
					this.date();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case HIPMLParser.DIFF_MONTHS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.match(HIPMLParser.DIFF_MONTHS);
				this.state = 499;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 497;
					this.variable();
					}
					break;
				case HIPMLParser.DATE:
					{
					this.state = 498;
					this.date();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 501;
				this.match(HIPMLParser.AND);
				this.state = 504;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 502;
					this.variable();
					}
					break;
				case HIPMLParser.DATE:
					{
					this.state = 503;
					this.date();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case HIPMLParser.DIFF_YEARS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 506;
				this.match(HIPMLParser.DIFF_YEARS);
				this.state = 509;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 507;
					this.variable();
					}
					break;
				case HIPMLParser.DATE:
					{
					this.state = 508;
					this.date();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 511;
				this.match(HIPMLParser.AND);
				this.state = 514;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HIPMLParser.VARIABLE:
					{
					this.state = 512;
					this.variable();
					}
					break;
				case HIPMLParser.DATE:
					{
					this.state = 513;
					this.date();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, HIPMLParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(HIPMLParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public diagnosis(): DiagnosisContext {
		let _localctx: DiagnosisContext = new DiagnosisContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, HIPMLParser.RULE_diagnosis);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.match(HIPMLParser.DIAGNOSIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedure(): ProcedureContext {
		let _localctx: ProcedureContext = new ProcedureContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, HIPMLParser.RULE_procedure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(HIPMLParser.PROCEDURE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public service(): ServiceContext {
		let _localctx: ServiceContext = new ServiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, HIPMLParser.RULE_service);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(HIPMLParser.SERVICE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public amount(): AmountContext {
		let _localctx: AmountContext = new AmountContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, HIPMLParser.RULE_amount);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(HIPMLParser.AMOUNT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, HIPMLParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.match(HIPMLParser.DATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, HIPMLParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(HIPMLParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, HIPMLParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(HIPMLParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, HIPMLParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(HIPMLParser.BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 27:
			return this.booleanExpr_sempred(_localctx as BooleanExprContext, predIndex);

		case 31:
			return this.numberExpr_sempred(_localctx as NumberExprContext, predIndex);
		}
		return true;
	}
	private booleanExpr_sempred(_localctx: BooleanExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private numberExpr_sempred(_localctx: NumberExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u021B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x06\x02`\n\x02\r\x02\x0E\x02" +
		"a\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03j\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x06\x05q\n\x05\r\x05\x0E\x05r\x03\x06" +
		"\x03\x06\x03\x06\x05\x06x\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\x86\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x06\v\x8D\n\v\r\v\x0E\v\x8E\x03\f\x03\f\x03\f\x07\f\x94" +
		"\n\f\f\f\x0E\f\x97\v\f\x03\f\x03\f\x05\f\x9B\n\f\x03\r\x03\r\x03\r\x05" +
		"\r\xA0\n\r\x03\x0E\x06\x0E\xA3\n\x0E\r\x0E\x0E\x0E\xA4\x03\x0E\x03\x0E" +
		"\x03\x0E\x06\x0E\xAA\n\x0E\r\x0E\x0E\x0E\xAB\x03\x0E\x05\x0E\xAF\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB5\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x06\x12\xC0\n\x12" +
		"\r\x12\x0E\x12\xC1\x03\x13\x03\x13\x03\x13\x07\x13\xC7\n\x13\f\x13\x0E" +
		"\x13\xCA\v\x13\x03\x13\x03\x13\x05\x13\xCE\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x06\x16\xD9\n\x16\r\x16" +
		"\x0E\x16\xDA\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x06\x1A\xEB\n\x1A" +
		"\r\x1A\x0E\x1A\xEC\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xF4" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\xFC\n\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u0103\n\x1D\r\x1D\x0E" +
		"\x1D\u0104\x03\x1D\x03\x1D\x06\x1D\u0109\n\x1D\r\x1D\x0E\x1D\u010A\x03" +
		"\x1D\x03\x1D\x06\x1D\u010F\n\x1D\r\x1D\x0E\x1D\u0110\x03\x1D\x03\x1D\x06" +
		"\x1D\u0115\n\x1D\r\x1D\x0E\x1D\u0116\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u011F\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u0127\n\x1D\f\x1D\x0E\x1D\u012A\v\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u0149\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u014E\n\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u0152\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0157\n\x1F" +
		"\x05\x1F\u0159\n\x1F\x03 \x03 \x03 \x03 \x07 \u015F\n \f \x0E \u0162\v" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u016B\n \f \x0E \u016E\v \x03" +
		" \x03 \x03 \x05 \u0173\n \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x05!\u017F\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x07!\u0190\n!\f!\x0E!\u0193\v!\x03\"\x03\"" +
		"\x05\"\u0197\n\"\x03\"\x03\"\x05\"\u019B\n\"\x03\"\x03\"\x05\"\u019F\n" +
		"\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01A9\n#\x03$\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x07%\u01B2\n%\f%\x0E%\u01B5\v%\x03%\x03%\x03%\x07" +
		"%\u01BA\n%\f%\x0E%\u01BD\v%\x03%\x03%\x03%\x07%\u01C2\n%\f%\x0E%\u01C5" +
		"\v%\x03%\x03%\x03%\x07%\u01CA\n%\f%\x0E%\u01CD\v%\x03%\x03%\x03%\x07%" +
		"\u01D2\n%\f%\x0E%\u01D5\v%\x03%\x03%\x03%\x07%\u01DA\n%\f%\x0E%\u01DD" +
		"\v%\x03%\x03%\x03%\x07%\u01E2\n%\f%\x0E%\u01E5\v%\x05%\u01E7\n%\x03&\x03" +
		"&\x03&\x05&\u01EC\n&\x03&\x03&\x03&\x05&\u01F1\n&\x03&\x03&\x03&\x05&" +
		"\u01F6\n&\x03&\x03&\x03&\x05&\u01FB\n&\x03&\x03&\x03&\x05&\u0200\n&\x03" +
		"&\x03&\x03&\x05&\u0205\n&\x05&\u0207\n&\x03\'\x03\'\x03(\x03(\x03)\x03" +
		")\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x02" +
		"\x02\x048@0\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"\x02\x06\x04\x024466\x04\x025577\x03\x02\'(\x03\x02;<\x02\u024A\x02_\x03" +
		"\x02\x02\x02\x04i\x03\x02\x02\x02\x06k\x03\x02\x02\x02\bp\x03\x02\x02" +
		"\x02\nw\x03\x02\x02\x02\fy\x03\x02\x02\x02\x0E}\x03\x02\x02\x02\x10\x81" +
		"\x03\x02\x02\x02\x12\x87\x03\x02\x02\x02\x14\x8C\x03\x02\x02\x02\x16\x90" +
		"\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xAE\x03\x02\x02\x02\x1C\xB0" +
		"\x03\x02\x02\x02\x1E\xB6\x03\x02\x02\x02 \xBA\x03\x02\x02\x02\"\xBF\x03" +
		"\x02\x02\x02$\xC3\x03\x02\x02\x02&\xCF\x03\x02\x02\x02(\xD3\x03\x02\x02" +
		"\x02*\xD8\x03\x02\x02\x02,\xDC\x03\x02\x02\x02.\xE0\x03\x02\x02\x020\xE4" +
		"\x03\x02\x02\x022\xE8\x03\x02\x02\x024\xF0\x03\x02\x02\x026\xF8\x03\x02" +
		"\x02\x028\u011E\x03\x02\x02\x02:\u012B\x03\x02\x02\x02<\u0158\x03\x02" +
		"\x02\x02>\u0172\x03\x02\x02\x02@\u017E\x03\x02\x02\x02B\u0196\x03\x02" +
		"\x02\x02D\u01A8\x03\x02\x02\x02F\u01AA\x03\x02\x02\x02H\u01E6\x03\x02" +
		"\x02\x02J\u0206\x03\x02\x02\x02L\u0208\x03\x02\x02\x02N\u020A\x03\x02" +
		"\x02\x02P\u020C\x03\x02\x02\x02R\u020E\x03\x02\x02\x02T\u0210\x03\x02" +
		"\x02\x02V\u0212\x03\x02\x02\x02X\u0214\x03\x02\x02\x02Z\u0216\x03\x02" +
		"\x02\x02\\\u0218\x03\x02\x02\x02^`\x05\x04\x03\x02_^\x03\x02\x02\x02`" +
		"a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\x03\x03\x02\x02" +
		"\x02cj\x05\x06\x04\x02dj\x05\x12\n\x02ej\x05 \x11\x02fj\x05(\x15\x02g" +
		"j\x05.\x18\x02hj\x050\x19\x02ic\x03\x02\x02\x02id\x03\x02\x02\x02ie\x03" +
		"\x02\x02\x02if\x03\x02\x02\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j\x05" +
		"\x03\x02\x02\x02kl\x07\n\x02\x02lm\x07\x03\x02\x02mn\x05\b\x05\x02n\x07" +
		"\x03\x02\x02\x02oq\x05\n\x06\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02r" +
		"p\x03\x02\x02\x02rs\x03\x02\x02\x02s\t\x03\x02\x02\x02tx\x05\f\x07\x02" +
		"ux\x05\x0E\b\x02vx\x05\x10\t\x02wt\x03\x02\x02\x02wu\x03\x02\x02\x02w" +
		"v\x03\x02\x02\x02x\v\x03\x02\x02\x02yz\x07\x11\x02\x02z{\x07\x03\x02\x02" +
		"{|\x05Z.\x02|\r\x03\x02\x02\x02}~\x07\x12\x02\x02~\x7F\x07\x03\x02\x02" +
		"\x7F\x80\x05V,\x02\x80\x0F\x03\x02\x02\x02\x81\x82\x07\x13\x02\x02\x82" +
		"\x85\x07\x03\x02\x02\x83\x86\x05@!\x02\x84\x86\x052\x1A\x02\x85\x83\x03" +
		"\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86\x11\x03\x02\x02\x02\x87\x88\x07" +
		"\v\x02\x02\x88\x89\x07\x03\x02\x02\x89\x8A\x05\x14\v\x02\x8A\x13\x03\x02" +
		"\x02\x02\x8B\x8D\x05\x16\f\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x15\x03\x02" +
		"\x02\x02\x90\x95\x05\x18\r\x02\x91\x92\x07\x04\x02\x02\x92\x94\x05\x18" +
		"\r\x02\x93\x91\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02" +
		"\x02\x02\x95\x96\x03\x02\x02\x02\x96\x9A\x03\x02\x02\x02\x97\x95\x03\x02" +
		"\x02\x02\x98\x99\x07\x03\x02\x02\x99\x9B\x05\x1A\x0E\x02\x9A\x98\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x17\x03\x02\x02\x02\x9C\xA0\x05P" +
		")\x02\x9D\xA0\x05N(\x02\x9E\xA0\x05R*\x02\x9F\x9C\x03\x02\x02\x02\x9F" +
		"\x9D\x03\x02\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\x19\x03\x02\x02\x02\xA1" +
		"\xA3\x05\x1C\x0F\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4" +
		"\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6" +
		"\xA7\x05\x1E\x10\x02\xA7\xAF\x03\x02\x02\x02\xA8\xAA\x05\x1C\x0F\x02\xA9" +
		"\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB" +
		"\xAC\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAF\x05\x1E\x10\x02\xAE" +
		"\xA2\x03\x02\x02\x02\xAE\xA9\x03\x02\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF" +
		"\x1B\x03\x02\x02\x02\xB0\xB1\x07\x14\x02\x02\xB1\xB4\x07\x03\x02\x02\xB2" +
		"\xB5\x05@!\x02\xB3\xB5\x052\x1A\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3\x03" +
		"\x02\x02\x02\xB5\x1D\x03\x02\x02\x02\xB6\xB7\x07\x15\x02\x02\xB7\xB8\x07" +
		"\x03\x02\x02\xB8\xB9\x058\x1D\x02\xB9\x1F\x03\x02\x02\x02\xBA\xBB\x07" +
		"\f\x02\x02\xBB\xBC\x07\x03\x02\x02\xBC\xBD\x05\"\x12\x02\xBD!\x03\x02" +
		"\x02\x02\xBE\xC0\x05$\x13\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2#\x03\x02" +
		"\x02\x02\xC3\xC8\x05\x18\r\x02\xC4\xC5\x07\x04\x02\x02\xC5\xC7\x05\x18" +
		"\r\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02" +
		"\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCD\x03\x02\x02\x02\xCA\xC8\x03\x02" +
		"\x02\x02\xCB\xCC\x07\x03\x02\x02\xCC\xCE\x05&\x14\x02\xCD\xCB\x03\x02" +
		"\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE%\x03\x02\x02\x02\xCF\xD0\x07\x16" +
		"\x02\x02\xD0\xD1\x07\x03\x02\x02\xD1\xD2\x058\x1D\x02\xD2\'\x03\x02\x02" +
		"\x02\xD3\xD4\x07\r\x02\x02\xD4\xD5\x07\x03\x02\x02\xD5\xD6\x05*\x16\x02" +
		"\xD6)\x03\x02\x02\x02\xD7\xD9\x05,\x17\x02\xD8\xD7\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB" +
		"+\x03\x02\x02\x02\xDC\xDD\x07\x17\x02\x02\xDD\xDE\x07\x03\x02\x02\xDE" +
		"\xDF\x058\x1D\x02\xDF-\x03\x02\x02\x02\xE0\xE1\x07\x0E\x02\x02\xE1\xE2" +
		"\x07\x03\x02\x02\xE2\xE3\x07A\x02\x02\xE3/\x03\x02\x02\x02\xE4\xE5\x07" +
		"\x0F\x02\x02\xE5\xE6\x07\x03\x02\x02\xE6\xE7\x07A\x02\x02\xE71\x03\x02" +
		"\x02\x02\xE8\xEA\x07\x1D\x02\x02\xE9\xEB\x054\x1B\x02\xEA\xE9\x03\x02" +
		"\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x056\x1C\x02\xEF3\x03\x02\x02" +
		"\x02\xF0\xF3\x07\x1E\x02\x02\xF1\xF4\x05@!\x02\xF2\xF4\x05Z.\x02\xF3\xF1" +
		"\x03\x02\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6" +
		"\x07$\x02\x02\xF6\xF7\x058\x1D\x02\xF75\x03\x02\x02\x02\xF8\xFB\x07\x1E" +
		"\x02\x02\xF9\xFC\x05@!\x02\xFA\xFC\x05Z.\x02\xFB\xF9\x03\x02\x02\x02\xFB" +
		"\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07\x1F\x02\x02\xFE" +
		"7\x03\x02\x02\x02\xFF\u0100\b\x1D\x01\x02\u0100\u0102\x07 \x02\x02\u0101" +
		"\u0103\x05:\x1E\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u011F" +
		"\x03\x02\x02\x02\u0106\u0108\x07!\x02\x02\u0107\u0109\x05:\x1E\x02\u0108" +
		"\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u0108\x03\x02" +
		"\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u011F\x03\x02\x02\x02\u010C" +
		"\u010E\x07\"\x02\x02\u010D\u010F\x05:\x1E\x02\u010E\u010D\x03\x02\x02" +
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111" +
		"\x03\x02\x02\x02\u0111\u011F\x03\x02\x02\x02\u0112\u0114\x07#\x02\x02" +
		"\u0113\u0115\x05:\x1E\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0116\x03" +
		"\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"\u011F\x03\x02\x02\x02\u0118\u011F\x05<\x1F\x02\u0119\u011F\x05B\"\x02" +
		"\u011A\u011B\x07\x05\x02\x02\u011B\u011C\x058\x1D\x02\u011C\u011D\x07" +
		"\x06\x02\x02\u011D\u011F\x03\x02\x02\x02\u011E\xFF\x03\x02\x02\x02\u011E" +
		"\u0106\x03\x02\x02\x02\u011E\u010C\x03\x02\x02\x02\u011E\u0112\x03\x02" +
		"\x02\x02\u011E\u0118\x03\x02\x02\x02\u011E\u0119\x03\x02\x02\x02\u011E" +
		"\u011A\x03\x02\x02\x02\u011F\u0128\x03\x02\x02\x02\u0120\u0121\f\x07\x02" +
		"\x02\u0121\u0122\x07%\x02\x02\u0122\u0127\x058\x1D\b\u0123\u0124\f\x06" +
		"\x02\x02\u0124\u0125\x07&\x02\x02\u0125\u0127\x058\x1D\x07\u0126\u0120" +
		"\x03\x02\x02\x02\u0126\u0123\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02" +
		"\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u01299\x03\x02" +
		"\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012C\x07\x1E\x02\x02\u012C" +
		"\u012D\x058\x1D\x02\u012D;\x03\x02\x02\x02\u012E\u012F\x05@!\x02\u012F" +
		"\u0130\x07.\x02\x02\u0130\u0131\x05@!\x02\u0131\u0159\x03\x02\x02\x02" +
		"\u0132\u0133\x05@!\x02\u0133\u0134\x07/\x02\x02\u0134\u0135\x05@!\x02" +
		"\u0135\u0159\x03\x02\x02\x02\u0136\u0137\x05@!\x02\u0137\u0138\x070\x02" +
		"\x02\u0138\u0139\x05@!\x02\u0139\u0159\x03\x02\x02\x02\u013A\u013B\x05" +
		"@!\x02\u013B\u013C\x071\x02\x02\u013C\u013D\x05@!\x02\u013D\u0159\x03" +
		"\x02\x02\x02\u013E\u013F\x05@!\x02\u013F\u0140\x073\x02\x02\u0140\u0141" +
		"\x05@!\x02\u0141\u0159\x03\x02\x02\x02\u0142\u0143\x05@!\x02\u0143\u0144" +
		"\x072\x02\x02\u0144\u0145\x05@!\x02\u0145\u0159\x03\x02\x02\x02\u0146" +
		"\u0149\x05L\'\x02\u0147\u0149\x05Z.\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014D\x073\x02" +
		"\x02\u014B\u014E\x05L\'\x02\u014C\u014E\x05Z.\x02\u014D\u014B\x03\x02" +
		"\x02\x02\u014D\u014C\x03\x02\x02\x02\u014E\u0159\x03\x02\x02\x02\u014F" +
		"\u0152\x05L\'\x02\u0150\u0152\x05Z.\x02\u0151\u014F\x03\x02\x02\x02\u0151" +
		"\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0156\x072\x02" +
		"\x02\u0154\u0157\x05L\'\x02\u0155\u0157\x05Z.\x02\u0156\u0154\x03\x02" +
		"\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158" +
		"\u012E\x03\x02\x02\x02\u0158\u0132\x03\x02\x02\x02\u0158\u0136\x03\x02" +
		"\x02\x02\u0158\u013A\x03\x02\x02\x02\u0158\u013E\x03\x02\x02\x02\u0158" +
		"\u0142\x03\x02\x02\x02\u0158\u0148\x03\x02\x02\x02\u0158\u0151\x03\x02" +
		"\x02\x02\u0159=\x03\x02\x02\x02\u015A\u015B\t\x02\x02\x02\u015B\u0160" +
		"\x05@!\x02\u015C\u015D\x07\x04\x02\x02\u015D\u015F\x05@!\x02\u015E\u015C" +
		"\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02" +
		"\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0160\x03" +
		"\x02\x02\x02\u0163\u0164\x07%\x02\x02\u0164\u0165\x05@!\x02\u0165\u0173" +
		"\x03\x02\x02\x02\u0166\u0167\t\x03\x02\x02\u0167\u016C\x05@!\x02\u0168" +
		"\u0169\x07\x04\x02\x02\u0169\u016B\x05@!\x02\u016A\u0168\x03\x02\x02\x02" +
		"\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03" +
		"\x02\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F" +
		"\u0170\x07%\x02\x02\u0170\u0171\x05@!\x02\u0171\u0173\x03\x02\x02\x02" +
		"\u0172\u015A\x03\x02\x02\x02\u0172\u0166\x03\x02\x02\x02\u0173?\x03\x02" +
		"\x02\x02\u0174\u0175\b!\x01\x02\u0175\u017F\x05J&\x02\u0176\u017F\x05" +
		"> \x02\u0177\u017F\x05L\'\x02\u0178\u017F\x05T+\x02\u0179\u017F\x05X-" +
		"\x02\u017A\u017B\x07\x05\x02\x02\u017B\u017C\x05@!\x02\u017C\u017D\x07" +
		"\x06\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u0174\x03\x02\x02\x02\u017E" +
		"\u0176\x03\x02\x02\x02\u017E\u0177\x03\x02\x02\x02\u017E\u0178\x03\x02" +
		"\x02\x02\u017E\u0179\x03\x02\x02\x02\u017E\u017A\x03\x02\x02\x02\u017F" +
		"\u0191\x03\x02\x02\x02\u0180\u0181\f\r\x02\x02\u0181\u0182\x07+\x02\x02" +
		"\u0182\u0190\x05@!\x0E\u0183\u0184\f\f\x02\x02\u0184\u0185\x07,\x02\x02" +
		"\u0185\u0190\x05@!\r\u0186\u0187\f\v\x02\x02\u0187\u0188\x07-\x02\x02" +
		"\u0188\u0190\x05@!\f\u0189\u018A\f\n\x02\x02\u018A\u018B\x07)\x02\x02" +
		"\u018B\u0190\x05@!\v\u018C\u018D\f\t\x02\x02\u018D\u018E\x07*\x02\x02" +
		"\u018E\u0190\x05@!\n\u018F\u0180\x03\x02\x02\x02\u018F\u0183\x03\x02\x02" +
		"\x02\u018F\u0186\x03\x02\x02\x02\u018F\u0189\x03\x02\x02\x02\u018F\u018C" +
		"\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02" +
		"\u0191\u0192\x03\x02\x02\x02\u0192A\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0194\u0197\x05F$\x02\u0195\u0197\x05L\'\x02\u0196\u0194\x03" +
		"\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u019A\t\x04\x02\x02\u0199\u019B\t\x05\x02\x02\u019A\u0199\x03\x02\x02" +
		"\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019F" +
		"\x05D#\x02\u019D\u019F\x05F$\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019D" +
		"\x03\x02\x02\x02\u019FC\x03\x02\x02\x02\u01A0\u01A9\x05X-\x02\u01A1\u01A9" +
		"\x05T+\x02\u01A2\u01A9\x05L\'\x02\u01A3\u01A9\x05V,\x02\u01A4\u01A9\x05" +
		"Z.\x02\u01A5\u01A9\x05P)\x02\u01A6\u01A9\x05N(\x02\u01A7\u01A9\x05R*\x02" +
		"\u01A8\u01A0\x03\x02\x02\x02\u01A8\u01A1\x03\x02\x02\x02\u01A8\u01A2\x03" +
		"\x02\x02\x02\u01A8\u01A3\x03\x02\x02\x02\u01A8\u01A4\x03\x02\x02\x02\u01A8" +
		"\u01A5\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A7\x03\x02" +
		"\x02\x02\u01A9E\x03\x02\x02\x02\u01AA\u01AB\x07\x07\x02\x02\u01AB\u01AC" +
		"\x05H%\x02\u01AC\u01AD\x07\b\x02\x02\u01ADG\x03\x02\x02\x02\u01AE\u01B3" +
		"\x05T+\x02\u01AF\u01B0\x07\x04\x02\x02\u01B0\u01B2\x05T+\x02\u01B1\u01AF" +
		"\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02" +
		"\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01E7\x03\x02\x02\x02\u01B5\u01B3\x03" +
		"\x02\x02\x02\u01B6\u01BB\x05L\'\x02\u01B7\u01B8\x07\x04\x02\x02\u01B8" +
		"\u01BA\x05L\'\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02" +
		"\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01E7" +
		"\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01C3\x05V,\x02\u01BF" +
		"\u01C0\x07\x04\x02\x02\u01C0\u01C2\x05V,\x02\u01C1\u01BF\x03\x02\x02\x02" +
		"\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03" +
		"\x02\x02\x02\u01C4\u01E7\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6" +
		"\u01CB\x05Z.\x02\u01C7\u01C8\x07\x04\x02\x02\u01C8\u01CA\x05Z.\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02" +
		"\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01E7\x03\x02\x02\x02\u01CD" +
		"\u01CB\x03\x02\x02\x02\u01CE\u01D3\x05P)\x02\u01CF\u01D0\x07\x04\x02\x02" +
		"\u01D0\u01D2\x05P)\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01D5\x03\x02" +
		"\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"\u01E7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01DB\x05N(\x02" +
		"\u01D7\u01D8\x07\x04\x02\x02\u01D8\u01DA\x05N(\x02\u01D9\u01D7\x03\x02" +
		"\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DC\u01E7\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DE\u01E3\x05R*\x02\u01DF\u01E0\x07\x04\x02\x02\u01E0\u01E2" +
		"\x05R*\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E7\x03\x02" +
		"\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01AE\x03\x02\x02\x02\u01E6" +
		"\u01B6\x03\x02\x02\x02\u01E6\u01BE\x03\x02\x02\x02\u01E6\u01C6\x03\x02" +
		"\x02\x02\u01E6\u01CE\x03\x02\x02\x02\u01E6\u01D6\x03\x02\x02\x02\u01E6" +
		"\u01DE\x03\x02\x02\x02\u01E7I\x03\x02\x02\x02\u01E8\u01EB\x078\x02\x02" +
		"\u01E9\u01EC\x05L\'\x02\u01EA\u01EC\x05V,\x02\u01EB\u01E9\x03\x02\x02" +
		"\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01F0" +
		"\x07%\x02\x02\u01EE\u01F1\x05L\'\x02\u01EF\u01F1\x05V,\x02\u01F0\u01EE" +
		"\x03\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1\u0207\x03\x02\x02\x02" +
		"\u01F2\u01F5\x079\x02\x02\u01F3\u01F6\x05L\'\x02\u01F4\u01F6\x05V,\x02" +
		"\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03" +
		"\x02\x02\x02\u01F7\u01FA\x07%\x02\x02\u01F8\u01FB\x05L\'\x02\u01F9\u01FB" +
		"\x05V,\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB" +
		"\u0207\x03\x02\x02\x02\u01FC\u01FF\x07:\x02\x02\u01FD\u0200\x05L\'\x02" +
		"\u01FE\u0200\x05V,\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u01FE\x03\x02" +
		"\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0204\x07%\x02\x02\u0202\u0205" +
		"\x05L\'\x02\u0203\u0205\x05V,\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203" +
		"\x03\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u01E8\x03\x02\x02\x02" +
		"\u0206\u01F2\x03\x02\x02\x02\u0206\u01FC\x03\x02\x02\x02\u0207K\x03\x02" +
		"\x02\x02\u0208\u0209\x07\x18\x02\x02\u0209M\x03\x02\x02\x02\u020A\u020B" +
		"\x07\x1A\x02\x02\u020BO\x03\x02\x02\x02\u020C\u020D\x07\x19\x02\x02\u020D" +
		"Q\x03\x02\x02\x02\u020E\u020F\x07\x1B\x02\x02\u020FS\x03\x02\x02\x02\u0210" +
		"\u0211\x07\x1C\x02\x02\u0211U\x03\x02\x02\x02\u0212\u0213\x07=\x02\x02" +
		"\u0213W\x03\x02\x02\x02\u0214\u0215\x07?\x02\x02\u0215Y\x03\x02\x02\x02" +
		"\u0216\u0217\x07@\x02\x02\u0217[\x03\x02\x02\x02\u0218\u0219\x07>\x02" +
		"\x02\u0219]\x03\x02\x02\x02;airw\x85\x8E\x95\x9A\x9F\xA4\xAB\xAE\xB4\xC1" +
		"\xC8\xCD\xDA\xEC\xF3\xFB\u0104\u010A\u0110\u0116\u011E\u0126\u0128\u0148" +
		"\u014D\u0151\u0156\u0158\u0160\u016C\u0172\u017E\u018F\u0191\u0196\u019A" +
		"\u019E\u01A8\u01B3\u01BB\u01C3\u01CB\u01D3\u01DB\u01E3\u01E6\u01EB\u01F0" +
		"\u01F5\u01FA\u01FF\u0204\u0206";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HIPMLParser.__ATN) {
			HIPMLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HIPMLParser._serializedATN));
		}

		return HIPMLParser.__ATN;
	}

}

export class PolicyContext extends ParserRuleContext {
	public policySection(): PolicySectionContext[];
	public policySection(i: number): PolicySectionContext;
	public policySection(i?: number): PolicySectionContext | PolicySectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PolicySectionContext);
		} else {
			return this.getRuleContext(i, PolicySectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_policy; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterPolicy) {
			listener.enterPolicy(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitPolicy) {
			listener.exitPolicy(this);
		}
	}
}


export class PolicySectionContext extends ParserRuleContext {
	public attributesSection(): AttributesSectionContext | undefined {
		return this.tryGetRuleContext(0, AttributesSectionContext);
	}
	public coverageSection(): CoverageSectionContext | undefined {
		return this.tryGetRuleContext(0, CoverageSectionContext);
	}
	public exclusionsSection(): ExclusionsSectionContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsSectionContext);
	}
	public conditionsSection(): ConditionsSectionContext | undefined {
		return this.tryGetRuleContext(0, ConditionsSectionContext);
	}
	public definitionsSection(): DefinitionsSectionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionsSectionContext);
	}
	public contactSection(): ContactSectionContext | undefined {
		return this.tryGetRuleContext(0, ContactSectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_policySection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterPolicySection) {
			listener.enterPolicySection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitPolicySection) {
			listener.exitPolicySection(this);
		}
	}
}


export class AttributesSectionContext extends ParserRuleContext {
	public ATTRIBUTES_SECTION_NAME(): TerminalNode { return this.getToken(HIPMLParser.ATTRIBUTES_SECTION_NAME, 0); }
	public attributesBody(): AttributesBodyContext {
		return this.getRuleContext(0, AttributesBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_attributesSection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAttributesSection) {
			listener.enterAttributesSection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAttributesSection) {
			listener.exitAttributesSection(this);
		}
	}
}


export class AttributesBodyContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_attributesBody; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAttributesBody) {
			listener.enterAttributesBody(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAttributesBody) {
			listener.exitAttributesBody(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public attributeString(): AttributeStringContext | undefined {
		return this.tryGetRuleContext(0, AttributeStringContext);
	}
	public attributeDate(): AttributeDateContext | undefined {
		return this.tryGetRuleContext(0, AttributeDateContext);
	}
	public attributeNumber(): AttributeNumberContext | undefined {
		return this.tryGetRuleContext(0, AttributeNumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_attribute; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class AttributeStringContext extends ParserRuleContext {
	public ATTRIBUTES_KEY_WITH_STRING_VALUES(): TerminalNode { return this.getToken(HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_attributeString; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAttributeString) {
			listener.enterAttributeString(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAttributeString) {
			listener.exitAttributeString(this);
		}
	}
}


export class AttributeDateContext extends ParserRuleContext {
	public ATTRIBUTES_KEY_WITH_DATE_VALUES(): TerminalNode { return this.getToken(HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES, 0); }
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_attributeDate; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAttributeDate) {
			listener.enterAttributeDate(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAttributeDate) {
			listener.exitAttributeDate(this);
		}
	}
}


export class AttributeNumberContext extends ParserRuleContext {
	public ATTRIBUTES_KEY_WITH_NUMBER_VALUES(): TerminalNode { return this.getToken(HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES, 0); }
	public numberExpr(): NumberExprContext | undefined {
		return this.tryGetRuleContext(0, NumberExprContext);
	}
	public switchStmt(): SwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, SwitchStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_attributeNumber; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAttributeNumber) {
			listener.enterAttributeNumber(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAttributeNumber) {
			listener.exitAttributeNumber(this);
		}
	}
}


export class CoverageSectionContext extends ParserRuleContext {
	public COVERAGE_SECTION_NAME(): TerminalNode { return this.getToken(HIPMLParser.COVERAGE_SECTION_NAME, 0); }
	public coverageBody(): CoverageBodyContext {
		return this.getRuleContext(0, CoverageBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageSection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageSection) {
			listener.enterCoverageSection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageSection) {
			listener.exitCoverageSection(this);
		}
	}
}


export class CoverageBodyContext extends ParserRuleContext {
	public coverageItem(): CoverageItemContext[];
	public coverageItem(i: number): CoverageItemContext;
	public coverageItem(i?: number): CoverageItemContext | CoverageItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageItemContext);
		} else {
			return this.getRuleContext(i, CoverageItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageBody; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageBody) {
			listener.enterCoverageBody(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageBody) {
			listener.exitCoverageBody(this);
		}
	}
}


export class CoverageItemContext extends ParserRuleContext {
	public coverageItemName(): CoverageItemNameContext[];
	public coverageItemName(i: number): CoverageItemNameContext;
	public coverageItemName(i?: number): CoverageItemNameContext | CoverageItemNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageItemNameContext);
		} else {
			return this.getRuleContext(i, CoverageItemNameContext);
		}
	}
	public coverageItemDetails(): CoverageItemDetailsContext | undefined {
		return this.tryGetRuleContext(0, CoverageItemDetailsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageItem; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageItem) {
			listener.enterCoverageItem(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageItem) {
			listener.exitCoverageItem(this);
		}
	}
}


export class CoverageItemNameContext extends ParserRuleContext {
	public procedure(): ProcedureContext | undefined {
		return this.tryGetRuleContext(0, ProcedureContext);
	}
	public diagnosis(): DiagnosisContext | undefined {
		return this.tryGetRuleContext(0, DiagnosisContext);
	}
	public service(): ServiceContext | undefined {
		return this.tryGetRuleContext(0, ServiceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageItemName; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageItemName) {
			listener.enterCoverageItemName(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageItemName) {
			listener.exitCoverageItemName(this);
		}
	}
}


export class CoverageItemDetailsContext extends ParserRuleContext {
	public coverageItemCondition(): CoverageItemConditionContext | undefined {
		return this.tryGetRuleContext(0, CoverageItemConditionContext);
	}
	public coverageItemLimit(): CoverageItemLimitContext[];
	public coverageItemLimit(i: number): CoverageItemLimitContext;
	public coverageItemLimit(i?: number): CoverageItemLimitContext | CoverageItemLimitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageItemLimitContext);
		} else {
			return this.getRuleContext(i, CoverageItemLimitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageItemDetails; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageItemDetails) {
			listener.enterCoverageItemDetails(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageItemDetails) {
			listener.exitCoverageItemDetails(this);
		}
	}
}


export class CoverageItemLimitContext extends ParserRuleContext {
	public COVERAGE_ITEM_LIMIT_KEY(): TerminalNode { return this.getToken(HIPMLParser.COVERAGE_ITEM_LIMIT_KEY, 0); }
	public numberExpr(): NumberExprContext | undefined {
		return this.tryGetRuleContext(0, NumberExprContext);
	}
	public switchStmt(): SwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, SwitchStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageItemLimit; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageItemLimit) {
			listener.enterCoverageItemLimit(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageItemLimit) {
			listener.exitCoverageItemLimit(this);
		}
	}
}


export class CoverageItemConditionContext extends ParserRuleContext {
	public COVERAGE_ITEM_CONDITION_KEY(): TerminalNode { return this.getToken(HIPMLParser.COVERAGE_ITEM_CONDITION_KEY, 0); }
	public booleanExpr(): BooleanExprContext {
		return this.getRuleContext(0, BooleanExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_coverageItemCondition; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterCoverageItemCondition) {
			listener.enterCoverageItemCondition(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitCoverageItemCondition) {
			listener.exitCoverageItemCondition(this);
		}
	}
}


export class ExclusionsSectionContext extends ParserRuleContext {
	public EXCLUSIONS_SECTION_NAME(): TerminalNode { return this.getToken(HIPMLParser.EXCLUSIONS_SECTION_NAME, 0); }
	public exclusionBody(): ExclusionBodyContext {
		return this.getRuleContext(0, ExclusionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_exclusionsSection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterExclusionsSection) {
			listener.enterExclusionsSection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitExclusionsSection) {
			listener.exitExclusionsSection(this);
		}
	}
}


export class ExclusionBodyContext extends ParserRuleContext {
	public exclusionItem(): ExclusionItemContext[];
	public exclusionItem(i: number): ExclusionItemContext;
	public exclusionItem(i?: number): ExclusionItemContext | ExclusionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExclusionItemContext);
		} else {
			return this.getRuleContext(i, ExclusionItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_exclusionBody; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterExclusionBody) {
			listener.enterExclusionBody(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitExclusionBody) {
			listener.exitExclusionBody(this);
		}
	}
}


export class ExclusionItemContext extends ParserRuleContext {
	public coverageItemName(): CoverageItemNameContext[];
	public coverageItemName(i: number): CoverageItemNameContext;
	public coverageItemName(i?: number): CoverageItemNameContext | CoverageItemNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageItemNameContext);
		} else {
			return this.getRuleContext(i, CoverageItemNameContext);
		}
	}
	public exclusionItemCondition(): ExclusionItemConditionContext | undefined {
		return this.tryGetRuleContext(0, ExclusionItemConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_exclusionItem; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterExclusionItem) {
			listener.enterExclusionItem(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitExclusionItem) {
			listener.exitExclusionItem(this);
		}
	}
}


export class ExclusionItemConditionContext extends ParserRuleContext {
	public EXCLUSIONS_ITEM_CONDITION_KEY(): TerminalNode { return this.getToken(HIPMLParser.EXCLUSIONS_ITEM_CONDITION_KEY, 0); }
	public booleanExpr(): BooleanExprContext {
		return this.getRuleContext(0, BooleanExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_exclusionItemCondition; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterExclusionItemCondition) {
			listener.enterExclusionItemCondition(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitExclusionItemCondition) {
			listener.exitExclusionItemCondition(this);
		}
	}
}


export class ConditionsSectionContext extends ParserRuleContext {
	public CONDITIONS_SECTION_NAME(): TerminalNode { return this.getToken(HIPMLParser.CONDITIONS_SECTION_NAME, 0); }
	public conditionsBody(): ConditionsBodyContext {
		return this.getRuleContext(0, ConditionsBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_conditionsSection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterConditionsSection) {
			listener.enterConditionsSection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitConditionsSection) {
			listener.exitConditionsSection(this);
		}
	}
}


export class ConditionsBodyContext extends ParserRuleContext {
	public conditionsItem(): ConditionsItemContext[];
	public conditionsItem(i: number): ConditionsItemContext;
	public conditionsItem(i?: number): ConditionsItemContext | ConditionsItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionsItemContext);
		} else {
			return this.getRuleContext(i, ConditionsItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_conditionsBody; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterConditionsBody) {
			listener.enterConditionsBody(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitConditionsBody) {
			listener.exitConditionsBody(this);
		}
	}
}


export class ConditionsItemContext extends ParserRuleContext {
	public CONDITIONS_ITEM_KEY(): TerminalNode { return this.getToken(HIPMLParser.CONDITIONS_ITEM_KEY, 0); }
	public booleanExpr(): BooleanExprContext {
		return this.getRuleContext(0, BooleanExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_conditionsItem; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterConditionsItem) {
			listener.enterConditionsItem(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitConditionsItem) {
			listener.exitConditionsItem(this);
		}
	}
}


export class DefinitionsSectionContext extends ParserRuleContext {
	public DEFINITIONS_SECTION_NAME(): TerminalNode { return this.getToken(HIPMLParser.DEFINITIONS_SECTION_NAME, 0); }
	public MULTILINE_STRING(): TerminalNode { return this.getToken(HIPMLParser.MULTILINE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_definitionsSection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterDefinitionsSection) {
			listener.enterDefinitionsSection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitDefinitionsSection) {
			listener.exitDefinitionsSection(this);
		}
	}
}


export class ContactSectionContext extends ParserRuleContext {
	public CONTACT_SECTION_NAME(): TerminalNode { return this.getToken(HIPMLParser.CONTACT_SECTION_NAME, 0); }
	public MULTILINE_STRING(): TerminalNode { return this.getToken(HIPMLParser.MULTILINE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_contactSection; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterContactSection) {
			listener.enterContactSection(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitContactSection) {
			listener.exitContactSection(this);
		}
	}
}


export class SwitchStmtContext extends ParserRuleContext {
	public SWITCH_PREFIX(): TerminalNode { return this.getToken(HIPMLParser.SWITCH_PREFIX, 0); }
	public switchDefaultExpr(): SwitchDefaultExprContext {
		return this.getRuleContext(0, SwitchDefaultExprContext);
	}
	public switchExpr(): SwitchExprContext[];
	public switchExpr(i: number): SwitchExprContext;
	public switchExpr(i?: number): SwitchExprContext | SwitchExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchExprContext);
		} else {
			return this.getRuleContext(i, SwitchExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_switchStmt; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterSwitchStmt) {
			listener.enterSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitSwitchStmt) {
			listener.exitSwitchStmt(this);
		}
	}
}


export class SwitchExprContext extends ParserRuleContext {
	public GROUP_EXPR_STMT_PREFIX(): TerminalNode { return this.getToken(HIPMLParser.GROUP_EXPR_STMT_PREFIX, 0); }
	public IF(): TerminalNode { return this.getToken(HIPMLParser.IF, 0); }
	public booleanExpr(): BooleanExprContext {
		return this.getRuleContext(0, BooleanExprContext);
	}
	public numberExpr(): NumberExprContext | undefined {
		return this.tryGetRuleContext(0, NumberExprContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_switchExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterSwitchExpr) {
			listener.enterSwitchExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitSwitchExpr) {
			listener.exitSwitchExpr(this);
		}
	}
}


export class SwitchDefaultExprContext extends ParserRuleContext {
	public GROUP_EXPR_STMT_PREFIX(): TerminalNode { return this.getToken(HIPMLParser.GROUP_EXPR_STMT_PREFIX, 0); }
	public SWITCH_DEFAULT_SUFFIX(): TerminalNode { return this.getToken(HIPMLParser.SWITCH_DEFAULT_SUFFIX, 0); }
	public numberExpr(): NumberExprContext | undefined {
		return this.tryGetRuleContext(0, NumberExprContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_switchDefaultExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterSwitchDefaultExpr) {
			listener.enterSwitchDefaultExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitSwitchDefaultExpr) {
			listener.exitSwitchDefaultExpr(this);
		}
	}
}


export class BooleanExprContext extends ParserRuleContext {
	public ALL_ARE_TRUE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.ALL_ARE_TRUE, 0); }
	public booleanGroupExprStmt(): BooleanGroupExprStmtContext[];
	public booleanGroupExprStmt(i: number): BooleanGroupExprStmtContext;
	public booleanGroupExprStmt(i?: number): BooleanGroupExprStmtContext | BooleanGroupExprStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanGroupExprStmtContext);
		} else {
			return this.getRuleContext(i, BooleanGroupExprStmtContext);
		}
	}
	public ALL_ARE_FALSE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.ALL_ARE_FALSE, 0); }
	public AT_LEAST_ONE_IS_TRUE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.AT_LEAST_ONE_IS_TRUE, 0); }
	public AT_LEAST_ONE_IS_FALSE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.AT_LEAST_ONE_IS_FALSE, 0); }
	public booleanExpr(): BooleanExprContext[];
	public booleanExpr(i: number): BooleanExprContext;
	public booleanExpr(i?: number): BooleanExprContext | BooleanExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExprContext);
		} else {
			return this.getRuleContext(i, BooleanExprContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.OR, 0); }
	public comparatorExpr(): ComparatorExprContext | undefined {
		return this.tryGetRuleContext(0, ComparatorExprContext);
	}
	public listOpExpr(): ListOpExprContext | undefined {
		return this.tryGetRuleContext(0, ListOpExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_booleanExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterBooleanExpr) {
			listener.enterBooleanExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitBooleanExpr) {
			listener.exitBooleanExpr(this);
		}
	}
}


export class BooleanGroupExprStmtContext extends ParserRuleContext {
	public GROUP_EXPR_STMT_PREFIX(): TerminalNode { return this.getToken(HIPMLParser.GROUP_EXPR_STMT_PREFIX, 0); }
	public booleanExpr(): BooleanExprContext {
		return this.getRuleContext(0, BooleanExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_booleanGroupExprStmt; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterBooleanGroupExprStmt) {
			listener.enterBooleanGroupExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitBooleanGroupExprStmt) {
			listener.exitBooleanGroupExprStmt(this);
		}
	}
}


export class ComparatorExprContext extends ParserRuleContext {
	public numberExpr(): NumberExprContext[];
	public numberExpr(i: number): NumberExprContext;
	public numberExpr(i?: number): NumberExprContext | NumberExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberExprContext);
		} else {
			return this.getRuleContext(i, NumberExprContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.GTE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.NE, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_comparatorExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterComparatorExpr) {
			listener.enterComparatorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitComparatorExpr) {
			listener.exitComparatorExpr(this);
		}
	}
}


export class GroupFnExprContext extends ParserRuleContext {
	public numberExpr(): NumberExprContext[];
	public numberExpr(i: number): NumberExprContext;
	public numberExpr(i?: number): NumberExprContext | NumberExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberExprContext);
		} else {
			return this.getRuleContext(i, NumberExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(HIPMLParser.AND, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.MIN, 0); }
	public LOW_OF(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.LOW_OF, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.MAX, 0); }
	public HIGH_OF(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.HIGH_OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_groupFnExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterGroupFnExpr) {
			listener.enterGroupFnExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitGroupFnExpr) {
			listener.exitGroupFnExpr(this);
		}
	}
}


export class NumberExprContext extends ParserRuleContext {
	public numberExpr(): NumberExprContext[];
	public numberExpr(i: number): NumberExprContext;
	public numberExpr(i?: number): NumberExprContext | NumberExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberExprContext);
		} else {
			return this.getRuleContext(i, NumberExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.DIV, 0); }
	public PER(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.PER, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.SUB, 0); }
	public dateExpr(): DateExprContext | undefined {
		return this.tryGetRuleContext(0, DateExprContext);
	}
	public groupFnExpr(): GroupFnExprContext | undefined {
		return this.tryGetRuleContext(0, GroupFnExprContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public amount(): AmountContext | undefined {
		return this.tryGetRuleContext(0, AmountContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_numberExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterNumberExpr) {
			listener.enterNumberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitNumberExpr) {
			listener.exitNumberExpr(this);
		}
	}
}


export class ListOpExprContext extends ParserRuleContext {
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.CONTAINS, 0); }
	public DOES_NOT_CONTAIN(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.DOES_NOT_CONTAIN, 0); }
	public list(): ListContext[];
	public list(i: number): ListContext;
	public list(i?: number): ListContext | ListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ListContext);
		} else {
			return this.getRuleContext(i, ListContext);
		}
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public singleValue(): SingleValueContext | undefined {
		return this.tryGetRuleContext(0, SingleValueContext);
	}
	public LIST_MATCH_ANY_ONE(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.LIST_MATCH_ANY_ONE, 0); }
	public LIST_MATCH_ALL(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.LIST_MATCH_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_listOpExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterListOpExpr) {
			listener.enterListOpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitListOpExpr) {
			listener.exitListOpExpr(this);
		}
	}
}


export class SingleValueContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public amount(): AmountContext | undefined {
		return this.tryGetRuleContext(0, AmountContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public procedure(): ProcedureContext | undefined {
		return this.tryGetRuleContext(0, ProcedureContext);
	}
	public diagnosis(): DiagnosisContext | undefined {
		return this.tryGetRuleContext(0, DiagnosisContext);
	}
	public service(): ServiceContext | undefined {
		return this.tryGetRuleContext(0, ServiceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_singleValue; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterSingleValue) {
			listener.enterSingleValue(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitSingleValue) {
			listener.exitSingleValue(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public listExpr(): ListExprContext {
		return this.getRuleContext(0, ListExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_list; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
}


export class ListExprContext extends ParserRuleContext {
	public amount(): AmountContext[];
	public amount(i: number): AmountContext;
	public amount(i?: number): AmountContext | AmountContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmountContext);
		} else {
			return this.getRuleContext(i, AmountContext);
		}
	}
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public procedure(): ProcedureContext[];
	public procedure(i: number): ProcedureContext;
	public procedure(i?: number): ProcedureContext | ProcedureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcedureContext);
		} else {
			return this.getRuleContext(i, ProcedureContext);
		}
	}
	public diagnosis(): DiagnosisContext[];
	public diagnosis(i: number): DiagnosisContext;
	public diagnosis(i?: number): DiagnosisContext | DiagnosisContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DiagnosisContext);
		} else {
			return this.getRuleContext(i, DiagnosisContext);
		}
	}
	public service(): ServiceContext[];
	public service(i: number): ServiceContext;
	public service(i?: number): ServiceContext | ServiceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ServiceContext);
		} else {
			return this.getRuleContext(i, ServiceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_listExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterListExpr) {
			listener.enterListExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitListExpr) {
			listener.exitListExpr(this);
		}
	}
}


export class DateExprContext extends ParserRuleContext {
	public DIFF_DAYS(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.DIFF_DAYS, 0); }
	public AND(): TerminalNode { return this.getToken(HIPMLParser.AND, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	public DIFF_MONTHS(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.DIFF_MONTHS, 0); }
	public DIFF_YEARS(): TerminalNode | undefined { return this.tryGetToken(HIPMLParser.DIFF_YEARS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_dateExpr; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterDateExpr) {
			listener.enterDateExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitDateExpr) {
			listener.exitDateExpr(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(HIPMLParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_variable; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class DiagnosisContext extends ParserRuleContext {
	public DIAGNOSIS(): TerminalNode { return this.getToken(HIPMLParser.DIAGNOSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_diagnosis; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterDiagnosis) {
			listener.enterDiagnosis(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitDiagnosis) {
			listener.exitDiagnosis(this);
		}
	}
}


export class ProcedureContext extends ParserRuleContext {
	public PROCEDURE(): TerminalNode { return this.getToken(HIPMLParser.PROCEDURE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_procedure; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterProcedure) {
			listener.enterProcedure(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitProcedure) {
			listener.exitProcedure(this);
		}
	}
}


export class ServiceContext extends ParserRuleContext {
	public SERVICE(): TerminalNode { return this.getToken(HIPMLParser.SERVICE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_service; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterService) {
			listener.enterService(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitService) {
			listener.exitService(this);
		}
	}
}


export class AmountContext extends ParserRuleContext {
	public AMOUNT(): TerminalNode { return this.getToken(HIPMLParser.AMOUNT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_amount; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterAmount) {
			listener.enterAmount(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitAmount) {
			listener.exitAmount(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public DATE(): TerminalNode { return this.getToken(HIPMLParser.DATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_date; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(HIPMLParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_number; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(HIPMLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_string; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode { return this.getToken(HIPMLParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HIPMLParser.RULE_bool; }
	// @Override
	public enterRule(listener: HIPMLListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: HIPMLListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
}


