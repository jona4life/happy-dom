/// <reference types="node" resolution-mode="require"/>
import ISyncResponse from './ISyncResponse.js';
export default interface IFetchInterceptor {
    /**
     * Hook dispatched before making an async request.
     * It can be used for modifying the request, providing a response without making a request or for logging.
     *
     * @param context Contains the request and the window from where the request was made.
     *
     * @returns Promise that can resolve to a response to be used instead of sending out the response.
     */
    beforeAsyncRequest?: (context: {
        request: Request;
        window: typeof globalThis;
    }) => Promise<Response | void>;
    /**
     * Hook dispatched before making an sync request.
     * It can be used for modifying the request, providing a response without making a request or for logging.
     *
     * @param context Contains the request and the window from where the request was made.
     *
     * @returns Promise that can resolve to a response to be used instead of sending out the response.
     */
    beforeSyncRequest?: (context: {
        request: Request;
        window: typeof globalThis;
    }) => ISyncResponse | void;
    /**
     * Hook dispatched after receiving an async response.
     * It can be used for modifying or replacing the response and logging.
     *
     * @param context Contains the request, response and the window from where the request was made.
     *
     * @returns Promise that can resolve to a response to be used instead of sending out the response.
     */
    afterAsyncResponse?: (context: {
        request: Request;
        response: Response;
        window: typeof globalThis;
    }) => Promise<Response | void>;
    /**
     * Hook dispatched after receiving a sync response.
     * It can be used for modifying or replacing the response and logging
     *
     * @param context Contains the request, response and the window from where the request was made.
     *
     * @returns Promise that can resolve to a response to be used instead of sending out the response.
     */
    afterSyncResponse?: (context: {
        request: Request;
        response: ISyncResponse;
        window: typeof globalThis;
    }) => ISyncResponse | void;
}
//# sourceMappingURL=IFetchInterceptor.d.ts.map