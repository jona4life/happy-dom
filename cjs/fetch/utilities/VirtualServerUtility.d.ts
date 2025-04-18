import ISyncResponse from '../types/ISyncResponse.cjs';
/**
 * Virtual server utility.
 */
export default class VirtualServerUtility {
    /**
     * Returns the filesystem path for a request URL if it matches a virtual server.
     *
     * @param window Window.
     * @param requestURL Request URL.
     */
    static getFilepath(window: typeof globalThis, requestURL: string): string | null;
    /**
     * Returns a 404 response.
     *
     * @param window Window.
     * @returns 404 response.
     */
    static getNotFoundResponse(window: typeof globalThis): Response;
    /**
     * Returns a 404 response.
     *
     * @param window Window.
     * @returns 404 response.
     */
    static getNotFoundSyncResponse(window: typeof globalThis): ISyncResponse;
}
//# sourceMappingURL=VirtualServerUtility.d.ts.map