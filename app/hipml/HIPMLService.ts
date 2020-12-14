import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

import { HIPMLLexer } from '../grammar/HIPMLLexer';
import { HIPMLParser, PolicyContext } from '../grammar/HIPMLParser';
import { HIPMLListener } from '../grammar/HIPMLListener';

import { HIPMLCoverageDeterminator } from './HIPMLCoverageDeterminator';
import { HIPMLPolicyVariablesDeterminator } from './HIPMLPolicyVariablesDeterminator';
import { ANTLRErrorListener } from 'antlr4ts/ANTLRErrorListener';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { Recognizer } from 'antlr4ts/Recognizer';

class HIPMLErrorListener<T> implements ANTLRErrorListener<T> {
    private parserError: any;
    constructor() {
        this.parserError = {
            msg: "",
            line: null,
            charPos: null,
            offendingSymbol: null
        };
    }

    public getParserError = () => this.parserError;

    syntaxError(recognizer: Recognizer<T, any>, offendingSymbol: any, line: number, charPos: number, msg: string, e: RecognitionException) {
        this.parserError.msg = msg;
        this.parserError.line = line;
        this.parserError.charPos = charPos;
        this.parserError.offendingSymbol = offendingSymbol;
    }
}

export class HIPMLService {
    private policyContext: PolicyContext;
    private allPolicyVars: Map<string, string[]>;
    private errorListener: HIPMLErrorListener<any>;

    constructor(hipmlText: string) {
        if (hipmlText.length > 0) {
            this.errorListener = new HIPMLErrorListener<any>();

            let inputStream = new ANTLRInputStream(hipmlText);
            let lexer = new HIPMLLexer(inputStream);

            lexer.removeErrorListeners();
            lexer.addErrorListener(this.errorListener);

            let tokenStream = new CommonTokenStream(lexer);
            let parser = new HIPMLParser(tokenStream);

            parser.removeErrorListeners();
            parser.addErrorListener(this.errorListener);

            this.policyContext = parser.policy();

            // Init policyVarsMap
            const listener = new HIPMLPolicyVariablesDeterminator();
            ParseTreeWalker.DEFAULT.walk<HIPMLListener>(listener, this.policyContext);
            this.allPolicyVars = listener.getAllPolicyVars();
        }
    }

    public getParserError = () => {
        if (this.errorListener)
            return this.errorListener.getParserError();
        else 
            return {};
    }

    public getPolicy = (policyVariables) => {
        if (this.policyContext) {
            const listener = new HIPMLCoverageDeterminator(policyVariables);
            ParseTreeWalker.DEFAULT.walk<HIPMLListener>(listener, this.policyContext);
            return listener.getPolicyDetails(this.policyContext);
        } else {
            return {};
        }
    }

    public getInputVariablesForCoverageItem = (coverageItem: string) => {
        if (this.allPolicyVars)
            return this.allPolicyVars.get(coverageItem);
        else
            return [];
    }

    public getAllCoveredItems = () => {
        if (this.allPolicyVars)
            return Array.from(this.allPolicyVars.keys());
        else
            return [];
    }

    public getAllPolicyVariables = () => {
        if (!this.allPolicyVars) return [];
        let policyVarSet: Set<string> = new Set();

        for(let varArray of this.allPolicyVars.values()) {
            varArray.forEach(v => policyVarSet.add(v));
        }

        return Array.from(policyVarSet);
    }
}
