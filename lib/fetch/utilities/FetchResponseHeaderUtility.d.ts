/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import IBrowserFrame from '../../browser/types/IBrowserFrame.js';
/**
 * Fetch request validation utility.
 */
export default class FetchResponseHeaderUtility {
    /**
     * Appends headers to response.
     *
     * @param nodeResponse HTTP request.
     * @param options
     * @param options.browserFrame
     * @param options.requestURL
     * @param options.rawHeaders
     * @returns Headers.
     */
    static parseResponseHeaders(options: {
        browserFrame: IBrowserFrame;
        requestURL: URL;
        rawHeaders: string[];
    }): Headers;
}
//# sourceMappingURL=FetchResponseHeaderUtility.d.ts.map