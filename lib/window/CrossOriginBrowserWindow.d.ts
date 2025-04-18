import EventTarget from '../event/EventTarget.js';
import Location from '../location/Location.js';
import * as PropertySymbol from '../PropertySymbol.js';
/**
 * Browser window with limited access due to CORS restrictions in iframes.
 */
export default class CrossOriginBrowserWindow extends EventTarget implements CrossOriginBrowserWindow {
    #private;
    readonly window: this;
    readonly location: Location;
    [PropertySymbol.self]: typeof globalThis | CrossOriginBrowserWindow;
    [PropertySymbol.top]: typeof globalThis | CrossOriginBrowserWindow;
    [PropertySymbol.parent]: typeof globalThis | CrossOriginBrowserWindow;
    /**
     * Constructor.
     *
     * @param target Target window.
     * @param [parent] Parent window.
     */
    constructor(target: typeof globalThis, parent?: typeof globalThis);
    /**
     * Returns self.
     *
     * @returns Self.
     */
    get self(): typeof globalThis | CrossOriginBrowserWindow;
    /**
     * Returns self.
     *
     * @param self Self.
     */
    set self(self: typeof globalThis | CrossOriginBrowserWindow | null);
    /**
     * Returns top.
     *
     * @returns Top.
     */
    get top(): typeof globalThis | CrossOriginBrowserWindow;
    /**
     * Returns parent.
     *
     * @returns Parent.
     */
    get parent(): typeof globalThis | CrossOriginBrowserWindow;
    /**
     * Returns parent.
     *
     * @param parent Parent.
     */
    set parent(parent: typeof globalThis | null);
    /**
     * Returns the opener.
     *
     * @returns Opener.
     */
    get opener(): typeof globalThis | CrossOriginBrowserWindow | null;
    /**
     * Returns the closed state.
     *
     * @returns Closed state.
     */
    get closed(): boolean;
    /**
     * Shifts focus away from the window.
     */
    blur(): void;
    /**
     * Gives focus to the window.
     */
    focus(): void;
    /**
     * Closes the window.
     */
    close(): void;
    /**
     * Safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.
     *
     * @param message Message.
     * @param [targetOrigin=*] Target origin.
     * @param transfer Transfer. Not implemented.
     */
    postMessage(message: unknown, targetOrigin?: string, transfer?: unknown[]): void;
}
//# sourceMappingURL=CrossOriginBrowserWindow.d.ts.map