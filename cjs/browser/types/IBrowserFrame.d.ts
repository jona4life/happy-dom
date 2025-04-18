import AsyncTaskManager from '../../async-task-manager/AsyncTaskManager.cjs';
import * as PropertySymbol from '../../PropertySymbol.cjs';
import Document from '../../nodes/document/Document.cjs';
import IBrowserPage from './IBrowserPage.cjs';
import Response from '../../fetch/Response.cjs';
import IGoToOptions from './IGoToOptions.cjs';
import { Script } from 'vm';
import IReloadOptions from './IReloadOptions.cjs';
import CrossOriginBrowserWindow from '../../window/CrossOriginBrowserWindow.cjs';
import IHistoryItem from '../../history/IHistoryItem.cjs';
/**
 * Browser frame.
 */
export default interface IBrowserFrame {
    readonly childFrames: IBrowserFrame[];
    readonly parentFrame: IBrowserFrame | null;
    readonly page: IBrowserPage;
    window: typeof globalThis;
    readonly document: Document;
    content: string;
    url: string;
    [PropertySymbol.history]: IHistoryItem[];
    [PropertySymbol.asyncTaskManager]: AsyncTaskManager;
    [PropertySymbol.listeners]: {
        navigation: Array<() => void>;
    };
    [PropertySymbol.openerFrame]: IBrowserFrame | null;
    [PropertySymbol.openerWindow]: typeof globalThis | CrossOriginBrowserWindow | null;
    [PropertySymbol.popup]: boolean;
    /**
     * Returns a promise that is resolved when all resources has been loaded, fetch has completed, and all async tasks such as timers are complete.
     */
    waitUntilComplete(): Promise<void>;
    /**
     * Returns a promise that is resolved when the frame has navigated and the response HTML has been written to the document.
     */
    waitForNavigation(): Promise<void>;
    /**
     * Aborts all ongoing operations.
     */
    abort(): Promise<void>;
    /**
     *
     * @param script Script.
     * @returns Result.
     */
    evaluate(script: string | Script): any;
    /**
     * Go to a page.
     *
     * @param url URL.
     * @param [options] Options.
     */
    goto(url: string, options?: IGoToOptions): Promise<Response | null>;
    /**
     * Navigates back in history.
     *
     * @param [options] Options.
     */
    goBack(options?: IGoToOptions): Promise<Response | null>;
    /**
     * Navigates forward in history.
     *
     * @param [options] Options.
     */
    goForward(options?: IGoToOptions): Promise<Response | null>;
    /**
     * Navigates a delta in history.
     *
     * @param steps Steps.
     * @param [options] Options.
     */
    goSteps(steps?: number, options?: IGoToOptions): Promise<Response | null>;
    /**
     * Reloads the current frame.
     *
     * @param [options] Options.
     */
    reload(options: IReloadOptions): Promise<Response | null>;
}
//# sourceMappingURL=IBrowserFrame.d.ts.map