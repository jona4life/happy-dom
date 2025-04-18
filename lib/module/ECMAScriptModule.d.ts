/// <reference types="node" resolution-mode="require"/>
import { URL } from 'url';
import IModule from './IModule.js';
import * as PropertySymbol from '../PropertySymbol.js';
import Location from '../location/Location.js';
/**
 * ECMAScript module.
 */
export default class ECMAScriptModule implements IModule {
    #private;
    readonly url: URL;
    readonly [PropertySymbol.window]: typeof globalThis;
    /**
     * Constructor.
     *
     * @param window Window.
     * @param url Module URL.
     * @param source Source code.
     */
    constructor(window: typeof globalThis, url: URL | Location, source: string);
    /**
     * Compiles and evaluates the module.
     *
     * @returns Module exports.
     */
    evaluate(): Promise<{
        [key: string]: any;
    } | null>;
    /**
     * Compiles and preloads the module and its imports.
     *
     * @returns Promise.
     */
    preload(): Promise<void>;
}
//# sourceMappingURL=ECMAScriptModule.d.ts.map