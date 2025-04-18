import IECMAScriptModuleCompiledResult from './IECMAScriptModuleCompiledResult.js';
/**
 * ECMAScript module compiler.
 */
export default class ECMAScriptModuleCompiler {
    readonly window: typeof globalThis;
    /**
     * Constructor.
     *
     * @param window Window.
     * @param url Module URL.
     */
    constructor(window: typeof globalThis);
    /**
     * Compiles code and returns imports and compiled code.
     *
     * @param moduleURL Module URL.
     * @param code Code.
     * @returns Result.
     */
    compile(moduleURL: string, code: string): IECMAScriptModuleCompiledResult;
    /**
     * Remove multiline comments.
     *
     * @param code Code.
     * @returns Code without multiline comments.
     */
    private removeMultilineComments;
}
//# sourceMappingURL=ECMAScriptModuleCompiler.d.ts.map