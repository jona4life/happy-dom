import { URL } from 'url';
import * as PropertySymbol from '../PropertySymbol.js';
import CSSModule from './CSSModule.js';
import JSONModule from './JSONModule.js';
import UnresolvedModule from './UnresolvedModule.js';
import WindowBrowserContext from '../window/WindowBrowserContext.js';
// import ResourceFetch from '../fetch/ResourceFetch.js';
import ECMAScriptModule from './ECMAScriptModule.js';
/**
 * Module factory.
 */
export default class ModuleFactory {
    /**
     * Fetches the source code of the module from the given URL and creates a new module instance.
     *
     * @param window Window.
     * @param parentURL Parent URL.
     * @param url Module URL.
     * @param [options] Options.
     * @param [options.with] Options.
     * @param [options.with.type] Module type.
     */
    static async getModule(window, parentURL, url, options) {
        const absoluteURL = this.getURL(window, parentURL, url);
        const absoluteURLString = absoluteURL.href;
        const type = options?.with?.type || 'esm';
        if (type !== 'esm' && type !== 'css' && type !== 'json') {
            throw new window.TypeError(`Failed to import module "${absoluteURL}" from "${parentURL}": Unkown type "${type}"`);
        }
        const cached = window[PropertySymbol.modules][type].get(absoluteURLString);
        if (cached) {
            if (cached instanceof UnresolvedModule) {
                await new Promise((resolve, reject) => {
                    cached.addResolveListener(resolve, reject);
                });
                return window[PropertySymbol.modules][type].get(absoluteURLString);
            }
            return cached;
        }
        const browserFrame = new WindowBrowserContext(window).getBrowserFrame();
        if (!browserFrame) {
            throw new window.TypeError(`Failed to import module "${absoluteURL}" from "${parentURL}": Window is closed and is no longer attached to a frame`);
        }
        const unresolvedModule = new UnresolvedModule(window, absoluteURL);
        window[PropertySymbol.modules][type].set(absoluteURLString, unresolvedModule);
        // const resourceFetch = new ResourceFetch(window);
        // let source: string;
        try {
            // source = await resourceFetch.fetch(absoluteURL, 'module');
        }
        catch (error) {
            unresolvedModule.resolve(error);
            throw error;
        }
        let module;
        switch (type) {
            case 'json':
                module = new JSONModule(window, absoluteURL, '{}');
                break;
            case 'css':
                module = new CSSModule(window, absoluteURL, '');
                break;
            case 'esm':
                module = new ECMAScriptModule(window, absoluteURL, '');
                break;
        }
        window[PropertySymbol.modules][type].set(absoluteURLString, module);
        unresolvedModule.resolve();
        return module;
    }
    /**
     * Returns module URL based on parent URL and the import map.
     *
     * @param window Window.
     * @param parentURL Parent URL.
     * @param url Module URL.
     */
    static getURL(window, parentURL, url) {
        const parentURLString = parentURL.href;
        const absoluteURL = new URL(url, parentURLString);
        const absoluteURLString = absoluteURL.href;
        const importMap = window[PropertySymbol.moduleImportMap];
        if (!importMap) {
            return absoluteURL;
        }
        if (importMap.scopes) {
            for (const scope of importMap.scopes) {
                if (parentURLString.includes(scope.scope)) {
                    for (const rule of scope.rules) {
                        if (absoluteURLString.startsWith(rule.from)) {
                            return new URL(rule.to + absoluteURLString.replace(rule.from, ''));
                        }
                    }
                }
            }
        }
        if (importMap.imports) {
            for (const rule of importMap.imports) {
                if (absoluteURLString.startsWith(rule.from)) {
                    return new URL(rule.to + absoluteURLString.replace(rule.from, ''));
                }
            }
        }
        return absoluteURL;
    }
}
//# sourceMappingURL=ModuleFactory.js.map