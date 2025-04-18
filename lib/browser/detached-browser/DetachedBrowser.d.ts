/// <reference types="node" resolution-mode="require"/>
import IBrowserSettings from '../types/IBrowserSettings.js';
import DetachedBrowserContext from './DetachedBrowserContext.js';
import IOptionalBrowserSettings from '../types/IOptionalBrowserSettings.js';
import DetachedBrowserPage from './DetachedBrowserPage.js';
import IBrowser from '../types/IBrowser.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import BrowserExceptionObserver from '../utilities/BrowserExceptionObserver.js';
/**
 * Detached browser used when constructing a Window instance without a browser.
 */
export default class DetachedBrowser implements IBrowser {
    readonly contexts: DetachedBrowserContext[];
    readonly settings: IBrowserSettings;
    readonly console: Console | null;
    readonly windowClass: typeof globalThis | null;
    [PropertySymbol.exceptionObserver]: BrowserExceptionObserver | null;
    /**
     * Constructor.
     *
     * @param windowClass Window class.
     * @param [options] Options.
     * @param [options.settings] Browser settings.
     * @param [options.console] Console.
     */
    constructor(windowClass: typeof globalThis, options?: {
        settings?: IOptionalBrowserSettings;
        console?: Console;
    });
    /**
     * Returns the default context.
     *
     * @returns Default context.
     */
    get defaultContext(): DetachedBrowserContext;
    /**
     * Aborts all ongoing operations and destroys the browser.
     */
    close(): Promise<void>;
    /**
     * Returns a promise that is resolved when all resources has been loaded, fetch has completed, and all async tasks such as timers are complete.
     *
     * @returns Promise.
     */
    waitUntilComplete(): Promise<void>;
    /**
     * Aborts all ongoing operations.
     */
    abort(): Promise<void>;
    /**
     * Creates a new incognito context.
     */
    newIncognitoContext(): DetachedBrowserContext;
    /**
     * Creates a new page.
     *
     * @returns Page.
     */
    newPage(): DetachedBrowserPage;
}
//# sourceMappingURL=DetachedBrowser.d.ts.map