/// <reference types="node" resolution-mode="require"/>
import { URL } from 'url';
import Location from '../location/Location.js';
/**
 * Module URL utility.
 */
export default class ModuleURLUtility {
    /**
     * Returns module URL based on parent URL and the import map.
     *
     * @param window Window.
     * @param parentURL Parent URL.
     * @param url Module URL.
     */
    static getURL(window: typeof globalThis, parentURL: URL | Location | string, url: string): URL;
}
//# sourceMappingURL=ModuleURLUtility.d.ts.map