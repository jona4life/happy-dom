"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PropertySymbol = __importStar(require("../PropertySymbol.cjs"));
const Headers_js_1 = __importDefault(require("./Headers.cjs"));
const FetchRequestReferrerUtility_js_1 = __importDefault(require("./utilities/FetchRequestReferrerUtility.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const zlib_1 = __importDefault(require("zlib"));
const url_1 = require("url");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const stream_1 = __importDefault(require("stream"));
const DataURIParser_js_1 = __importDefault(require("./data-uri/DataURIParser.cjs"));
const FetchCORSUtility_js_1 = __importDefault(require("./utilities/FetchCORSUtility.cjs"));
const Response_js_1 = __importDefault(require("./Response.cjs"));
const CachedResponseStateEnum_js_1 = __importDefault(require("./cache/response/CachedResponseStateEnum.cjs"));
const FetchRequestHeaderUtility_js_1 = __importDefault(require("./utilities/FetchRequestHeaderUtility.cjs"));
const FetchRequestValidationUtility_js_1 = __importDefault(require("./utilities/FetchRequestValidationUtility.cjs"));
const FetchResponseRedirectUtility_js_1 = __importDefault(require("./utilities/FetchResponseRedirectUtility.cjs"));
const FetchResponseHeaderUtility_js_1 = __importDefault(require("./utilities/FetchResponseHeaderUtility.cjs"));
const FetchHTTPSCertificate_js_1 = __importDefault(require("./certificate/FetchHTTPSCertificate.cjs"));
const buffer_1 = require("buffer");
const FetchBodyUtility_js_1 = __importDefault(require("./utilities/FetchBodyUtility.cjs"));
const VirtualServerUtility_js_1 = __importDefault(require("./utilities/VirtualServerUtility.cjs"));
const PreloadUtility_js_1 = __importDefault(require("./preload/PreloadUtility.cjs"));
const LAST_CHUNK = buffer_1.Buffer.from('0\r\n\r\n');
/**
 * Handles fetch requests.
 *
 * Based on:
 * https://github.com/node-fetch/node-fetch/blob/main/src/index.js
 *
 * @see https://fetch.spec.whatwg.org/#http-network-fetch
 */
class Fetch {
    reject = null;
    resolve = null;
    listeners = {
        onSignalAbort: this.onSignalAbort.bind(this)
    };
    isChunkedTransfer = false;
    isProperLastChunkReceived = false;
    previousChunk = null;
    nodeRequest = null;
    nodeResponse = null;
    response = null;
    responseHeaders = null;
    interceptor;
    request;
    redirectCount = 0;
    disableCache;
    disableSameOriginPolicy;
    disablePreload;
    #browserFrame;
    #window;
    #unfilteredHeaders = null;
    /**
     * Constructor.
     *
     * @param options Options.
     * @param options.browserFrame Browser frame.
     * @param options.window Window.
     * @param options.url URL.
     * @param [options.init] Init.
     * @param [options.redirectCount] Redirect count.
     * @param [options.contentType] Content Type.
     * @param [options.disableCache] Disables the use of cached responses. It will still store the response in the cache.
     * @param [options.disableSameOriginPolicy] Disables the Same-Origin policy.
     * @param [options.unfilteredHeaders] Unfiltered headers - necessary for preflight requests.
     * @param [options.disablePreload] Disables the use of preloaded responses.
     */
    constructor(options) {
        this.#browserFrame = options.browserFrame;
        this.#window = options.window;
        this.#unfilteredHeaders = options.unfilteredHeaders ?? null;
        this.request =
            typeof options.url === 'string' || options.url instanceof url_1.URL
                ? new options.window.Request(options.url, options.init)
                : options.url;
        if (options.contentType) {
            this.request[PropertySymbol.contentType] = options.contentType;
        }
        this.redirectCount = options.redirectCount ?? 0;
        this.disableCache = options.disableCache ?? false;
        this.disableSameOriginPolicy =
            options.disableSameOriginPolicy ??
                this.#browserFrame.page.context.browser.settings.fetch.disableSameOriginPolicy ??
                false;
        this.interceptor = this.#browserFrame.page.context.browser.settings.fetch.interceptor;
        this.disablePreload = options.disablePreload ?? false;
    }
    /**
     * Sends request.
     *
     * @returns Response.
     */
    async send() {
        FetchRequestReferrerUtility_js_1.default.prepareRequest(new url_1.URL(this.#window.location.href), this.request);
        if (this.interceptor?.beforeAsyncRequest) {
            const taskID = this.#browserFrame[PropertySymbol.asyncTaskManager].startTask();
            const response = await this.interceptor.beforeAsyncRequest({
                request: this.request,
                window: this.#window
            });
            this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
            if (response instanceof Response_js_1.default) {
                return response;
            }
        }
        FetchRequestValidationUtility_js_1.default.validateSchema(this.request);
        if (this.request.signal[PropertySymbol.aborted]) {
            if (this.request.signal[PropertySymbol.reason] !== undefined) {
                throw this.request.signal[PropertySymbol.reason];
            }
            throw new this[PropertySymbol.window].DOMException('signal is aborted without reason', DOMExceptionNameEnum_js_1.default.abortError);
        }
        if (this.request[PropertySymbol.url].protocol === 'data:') {
            const result = DataURIParser_js_1.default.parse(this.request.url);
            this.response = new this.#window.Response(result.buffer, {
                headers: { 'Content-Type': result.type }
            });
            const interceptedResponse = this.interceptor?.afterAsyncResponse
                ? await this.interceptor.afterAsyncResponse({
                    window: this.#window,
                    response: this.response,
                    request: this.request
                })
                : undefined;
            return interceptedResponse instanceof Response_js_1.default ? interceptedResponse : this.response;
        }
        // Security check for "https" to "http" requests.
        if (this.request[PropertySymbol.url].protocol === 'http:' &&
            this.#window.location.protocol === 'https:') {
            throw new this.#window.DOMException(`Mixed Content: The page at '${this.#window.location.href}' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint '${this.request.url}'. This request has been blocked; the content must be served over HTTPS.`, DOMExceptionNameEnum_js_1.default.securityError);
        }
        if (!this.disableCache) {
            const cachedResponse = await this.getCachedResponse();
            if (cachedResponse) {
                return cachedResponse;
            }
        }
        if (!this.disablePreload) {
            const preloadKey = PreloadUtility_js_1.default.getKey({
                url: this.request.url,
                destination: 'fetch',
                mode: this.request.mode,
                credentialsMode: this.request.credentials
            });
            const preloadEntry = this.#window.document[PropertySymbol.preloads].get(preloadKey);
            if (preloadEntry) {
                this.#window.document[PropertySymbol.preloads].delete(preloadKey);
                if (preloadEntry.response) {
                    return preloadEntry.response;
                }
                const taskID = this.#browserFrame[PropertySymbol.asyncTaskManager].startTask();
                const response = await preloadEntry.onResponseAvailable();
                this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
                return response;
            }
        }
        const virtualServerResponse = await this.getVirtualServerResponse();
        if (virtualServerResponse) {
            return virtualServerResponse;
        }
        if (!this.disableSameOriginPolicy) {
            const compliesWithCrossOriginPolicy = await this.compliesWithCrossOriginPolicy();
            if (!compliesWithCrossOriginPolicy) {
                this.#browserFrame?.page?.console.warn(`Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at "${this.request.url}".`);
                throw new this.#window.DOMException(`Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at "${this.request.url}".`, DOMExceptionNameEnum_js_1.default.networkError);
            }
        }
        return await this.sendRequest();
    }
    /**
     * Returns cached response.
     *
     * @returns Response.
     */
    async getCachedResponse() {
        if (this.disableCache) {
            return null;
        }
        let cachedResponse = this.#browserFrame.page.context.responseCache.get(this.request);
        if (!cachedResponse || cachedResponse.response.waitingForBody) {
            return null;
        }
        if (cachedResponse.state === CachedResponseStateEnum_js_1.default.stale) {
            const headers = new Headers_js_1.default(cachedResponse.request.headers);
            if (cachedResponse.etag) {
                headers.set('If-None-Match', cachedResponse.etag);
            }
            else {
                if (!cachedResponse.lastModified) {
                    return null;
                }
                headers.set('If-Modified-Since', new Date(cachedResponse.lastModified).toUTCString());
            }
            const fetch = new Fetch({
                browserFrame: this.#browserFrame,
                window: this.#window,
                url: this.request.url,
                init: { headers, method: cachedResponse.request.method },
                disableCache: true,
                disableSameOriginPolicy: true
            });
            if (cachedResponse.etag || !cachedResponse.staleWhileRevalidate) {
                const validateResponse = await fetch.send();
                const body = validateResponse.status !== 304 ? await validateResponse.buffer() : null;
                cachedResponse = this.#browserFrame.page.context.responseCache.add(this.request, {
                    ...validateResponse,
                    body,
                    waitingForBody: false
                });
                if (validateResponse.status !== 304) {
                    const response = new this.#window.Response(body, {
                        status: validateResponse.status,
                        statusText: validateResponse.statusText,
                        headers: validateResponse.headers
                    });
                    response.url = validateResponse.url;
                    response[PropertySymbol.cachedResponse] = cachedResponse;
                    return response;
                }
            }
            else {
                fetch.send().then((response) => {
                    response.buffer().then((body) => {
                        this.#browserFrame.page.context.responseCache.add(this.request, {
                            ...response,
                            body,
                            waitingForBody: false
                        });
                    });
                });
            }
        }
        if (!cachedResponse || cachedResponse.response.waitingForBody) {
            return null;
        }
        const response = new this.#window.Response(cachedResponse.response.body, {
            status: cachedResponse.response.status,
            statusText: cachedResponse.response.statusText,
            headers: cachedResponse.response.headers
        });
        response.url = cachedResponse.response.url;
        response[PropertySymbol.cachedResponse] = cachedResponse;
        return response;
    }
    /**
     * Returns virtual server response.
     *
     * @returns Response.
     */
    async getVirtualServerResponse() {
        const filePath = VirtualServerUtility_js_1.default.getFilepath(this.#window, this.request.url);
        if (!filePath) {
            return null;
        }
        const taskID = this.#browserFrame[PropertySymbol.asyncTaskManager].startTask();
        if (this.request.method !== 'GET') {
            this.#browserFrame?.page?.console.error(`${this.request.method} ${this.request.url} 404 (Not Found)`);
            const response = VirtualServerUtility_js_1.default.getNotFoundResponse(this.#window);
            const interceptedResponse = this.interceptor?.afterAsyncResponse
                ? await this.interceptor.afterAsyncResponse({
                    window: this.#window,
                    response: await response,
                    request: this.request
                })
                : undefined;
            this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
            return interceptedResponse instanceof Response_js_1.default ? interceptedResponse : response;
        }
        let buffer;
        try {
            const stat = await fs_1.default.promises.stat(filePath);
            buffer = await fs_1.default.promises.readFile(stat.isDirectory() ? path_1.default.join(filePath, 'index.html') : filePath);
        }
        catch (error) {
            this.#browserFrame?.page?.console.error(`${this.request.method} ${this.request.url} 404 (Not Found)`);
            const response = VirtualServerUtility_js_1.default.getNotFoundResponse(this.#window);
            const interceptedResponse = this.interceptor?.afterAsyncResponse
                ? await this.interceptor.afterAsyncResponse({
                    window: this.#window,
                    response: await response,
                    request: this.request
                })
                : undefined;
            this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
            return interceptedResponse instanceof Response_js_1.default ? interceptedResponse : response;
        }
        const body = new this.#window.ReadableStream({
            start(controller) {
                setTimeout(() => {
                    controller.enqueue(buffer);
                    controller.close();
                });
            }
        });
        const response = new this.#window.Response(body);
        response[PropertySymbol.buffer] = buffer;
        response.url = this.request.url;
        const interceptedResponse = this.interceptor?.afterAsyncResponse
            ? await this.interceptor.afterAsyncResponse({
                window: this.#window,
                response: await response,
                request: this.request
            })
            : undefined;
        this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
        const returnResponse = interceptedResponse instanceof Response_js_1.default ? interceptedResponse : response;
        const cachedResponse = {
            ...returnResponse,
            body: buffer,
            waitingForBody: false
        };
        response[PropertySymbol.cachedResponse] = this.#browserFrame.page?.context?.responseCache.add(this.request, cachedResponse);
        return returnResponse;
    }
    /**
     * Checks if the request complies with the Cross-Origin policy.
     *
     * @returns True if it complies with the policy.
     */
    async compliesWithCrossOriginPolicy() {
        if (this.disableSameOriginPolicy ||
            !FetchCORSUtility_js_1.default.isCORS(this.#window.location.href, this.request[PropertySymbol.url])) {
            return true;
        }
        const cachedPreflightResponse = this.#browserFrame.page.context.preflightResponseCache.get(this.request);
        if (cachedPreflightResponse) {
            if (cachedPreflightResponse.allowOrigin !== '*' &&
                cachedPreflightResponse.allowOrigin !== this.#window.location.origin) {
                return false;
            }
            if (cachedPreflightResponse.allowMethods.length !== 0 &&
                !cachedPreflightResponse.allowMethods.includes(this.request.method)) {
                return false;
            }
            return true;
        }
        const requestHeaders = [];
        for (const [header] of this.request.headers) {
            requestHeaders.push(header.toLowerCase());
        }
        const corsHeaders = new Headers_js_1.default({
            'Access-Control-Request-Method': this.request.method,
            Origin: this.#window.location.origin
        });
        if (requestHeaders.length > 0) {
            // This intentionally does not use "combine" (comma + space), as the spec dictates.
            // See https://fetch.spec.whatwg.org/#cors-preflight-fetch for more details.
            // Sorting the headers is not required, but can optimize cache hits.
            corsHeaders.set('Access-Control-Request-Headers', requestHeaders.slice().sort().join(','));
        }
        const fetch = new Fetch({
            browserFrame: this.#browserFrame,
            window: this.#window,
            url: this.request.url,
            init: { method: 'OPTIONS' },
            disableCache: true,
            disableSameOriginPolicy: true,
            unfilteredHeaders: corsHeaders
        });
        const response = await fetch.send();
        if (!response.ok) {
            return false;
        }
        const allowOrigin = response.headers.get('Access-Control-Allow-Origin');
        if (!allowOrigin) {
            return false;
        }
        if (allowOrigin !== '*' && allowOrigin !== this.#window.location.origin) {
            return false;
        }
        const allowMethods = [];
        if (response.headers.has('Access-Control-Allow-Methods')) {
            const allowMethodsHeader = response.headers.get('Access-Control-Allow-Methods');
            if (allowMethodsHeader !== '*') {
                for (const method of allowMethodsHeader.split(',')) {
                    allowMethods.push(method.trim().toUpperCase());
                }
            }
        }
        if (allowMethods.length !== 0 && !allowMethods.includes(this.request.method)) {
            return false;
        }
        // TODO: Add support for more Access-Control-Allow-* headers.
        return true;
    }
    /**
     * Sends request.
     *
     * @returns Response.
     */
    sendRequest() {
        return new Promise((resolve, reject) => {
            const taskID = this.#browserFrame[PropertySymbol.asyncTaskManager].startTask(() => this.onAsyncTaskManagerAbort());
            if (this.resolve) {
                throw new this.#window.Error('Fetch already sent.');
            }
            this.resolve = async (response) => {
                // We can end up here when closing down the browser frame and there is an ongoing request.
                // Therefore, we need to check if browserFrame.page.context is still available.
                if (!this.disableCache &&
                    response instanceof Response_js_1.default &&
                    this.#browserFrame.page &&
                    this.#browserFrame.page.context) {
                    response[PropertySymbol.cachedResponse] =
                        this.#browserFrame.page.context.responseCache.add(this.request, {
                            ...response,
                            headers: this.responseHeaders,
                            body: response[PropertySymbol.buffer],
                            waitingForBody: !response[PropertySymbol.buffer] && !!response.body
                        });
                }
                const interceptedResponse = this.interceptor?.afterAsyncResponse
                    ? await this.interceptor.afterAsyncResponse({
                        window: this.#window,
                        response: await response,
                        request: this.request
                    })
                    : undefined;
                this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
                const returnResponse = interceptedResponse instanceof Response_js_1.default ? interceptedResponse : response;
                // The browser outputs errors to the console when the response is not ok.
                if (returnResponse instanceof Response_js_1.default && !returnResponse.ok) {
                    this.#browserFrame?.page?.console.error(`${this.request.method} ${this.request.url} ${returnResponse.status} (${returnResponse.statusText})`);
                }
                resolve(returnResponse);
            };
            this.reject = (error) => {
                this.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskID);
                reject(error);
            };
            this.request.signal.addEventListener('abort', this.listeners.onSignalAbort);
            const send = (this.request[PropertySymbol.url].protocol === 'https:' ? https_1.default : http_1.default).request;
            this.nodeRequest = send(this.request[PropertySymbol.url].href, {
                method: this.request.method,
                headers: FetchRequestHeaderUtility_js_1.default.getRequestHeaders({
                    browserFrame: this.#browserFrame,
                    window: this.#window,
                    request: this.request,
                    baseHeaders: this.#unfilteredHeaders
                }),
                agent: false,
                rejectUnauthorized: true,
                key: this.request[PropertySymbol.url].protocol === 'https:'
                    ? FetchHTTPSCertificate_js_1.default.key
                    : undefined,
                cert: this.request[PropertySymbol.url].protocol === 'https:'
                    ? FetchHTTPSCertificate_js_1.default.cert
                    : undefined
            });
            this.nodeRequest.on('error', this.onError.bind(this));
            this.nodeRequest.on('socket', this.onSocket.bind(this));
            this.nodeRequest.on('response', this.onResponse.bind(this));
            if (this.request.body === null) {
                this.nodeRequest.end();
            }
            else {
                stream_1.default.pipeline(this.request.body, this.nodeRequest, (error) => {
                    if (error) {
                        this.onError(error);
                    }
                });
            }
        });
    }
    /**
     * Event listener for "socket" event.
     *
     * @param socket Socket.
     */
    onSocket(socket) {
        const onSocketClose = () => {
            if (this.isChunkedTransfer && !this.isProperLastChunkReceived) {
                const error = new this.#window.DOMException('Premature close.', DOMExceptionNameEnum_js_1.default.networkError);
                if (this.response && this.response.body) {
                    this.response.body[PropertySymbol.error] = error;
                    if (!this.response.body.locked) {
                        this.response.body.cancel(error);
                    }
                }
            }
        };
        const onData = (buffer) => {
            this.isProperLastChunkReceived = buffer_1.Buffer.compare(buffer.slice(-5), LAST_CHUNK) === 0;
            // Sometimes final 0-length chunk and end of message code are in separate packets.
            if (!this.isProperLastChunkReceived && this.previousChunk) {
                this.isProperLastChunkReceived =
                    buffer_1.Buffer.compare(this.previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 &&
                        buffer_1.Buffer.compare(buffer.slice(-2), LAST_CHUNK.slice(3)) === 0;
            }
            this.previousChunk = buffer;
        };
        socket.prependListener('close', onSocketClose);
        socket.on('data', onData);
        this.nodeRequest.on('close', () => {
            socket.removeListener('close', onSocketClose);
            socket.removeListener('data', onData);
        });
    }
    /**
     * Event listener for signal "abort" event.
     *
     * @param event Event.
     */
    onSignalAbort(event) {
        this.finalizeRequest();
        this.abort(event.target?.reason);
    }
    /**
     * Event listener for request "error" event.
     *
     * @param error Error.
     */
    onError(error) {
        this.finalizeRequest();
        this.#browserFrame?.page?.console.error(error);
        this.reject(new this.#window.DOMException(`Failed to execute "fetch()" on "Window" with URL "${this.request.url}": ${error.message}`, DOMExceptionNameEnum_js_1.default.networkError));
    }
    /**
     * Triggered when the async task manager aborts.
     */
    onAsyncTaskManagerAbort() {
        const error = new this.#window.DOMException('The operation was aborted.', DOMExceptionNameEnum_js_1.default.abortError);
        this.request[PropertySymbol.aborted] = true;
        if (this.request.body) {
            this.request.body[PropertySymbol.error] = error;
        }
        if (this.listeners.onSignalAbort) {
            this.request.signal.removeEventListener('abort', this.listeners.onSignalAbort);
        }
        if (this.nodeRequest && !this.nodeRequest.destroyed) {
            this.nodeRequest.destroy(error);
        }
        if (this.nodeResponse && !this.nodeResponse.destroyed) {
            this.nodeResponse.destroy(error);
        }
        if (this.response && this.response.body) {
            this.response.body[PropertySymbol.error] = error;
            if (!this.response.body.locked) {
                this.response.body.cancel(error);
            }
        }
    }
    /**
     * Event listener for request "response" event.
     *
     * @param nodeResponse Node response.
     */
    onResponse(nodeResponse) {
        // Needed for handling bad endings of chunked transfer.
        this.isChunkedTransfer =
            nodeResponse.headers['transfer-encoding'] === 'chunked' &&
                !nodeResponse.headers['content-length'];
        this.nodeRequest.setTimeout(0);
        this.responseHeaders = FetchResponseHeaderUtility_js_1.default.parseResponseHeaders({
            browserFrame: this.#browserFrame,
            requestURL: this.request[PropertySymbol.url],
            rawHeaders: nodeResponse.rawHeaders
        });
        if (this.handleRedirectResponse(nodeResponse, this.responseHeaders)) {
            return;
        }
        nodeResponse.once('end', () => this.request.signal.removeEventListener('abort', this.listeners.onSignalAbort));
        let body = stream_1.default.pipeline(nodeResponse, new stream_1.default.PassThrough(), (error) => {
            if (error) {
                // Ignore error as it is forwarded to the response body.
            }
        });
        const responseOptions = {
            status: nodeResponse.statusCode,
            statusText: nodeResponse.statusMessage,
            headers: this.responseHeaders
        };
        const contentEncodingHeader = this.responseHeaders.get('Content-Encoding');
        if (this.request.method === 'HEAD' ||
            contentEncodingHeader === null ||
            nodeResponse.statusCode === 204 ||
            nodeResponse.statusCode === 304) {
            this.response = new this.#window.Response(FetchBodyUtility_js_1.default.nodeToWebStream(body), responseOptions);
            this.response.redirected = this.redirectCount > 0;
            this.response.url = this.request.url;
            this.resolve(this.response);
            return;
        }
        // For GZip
        if (contentEncodingHeader === 'gzip' || contentEncodingHeader === 'x-gzip') {
            // Be less strict when decoding compressed responses.
            // Sometimes servers send slightly invalid responses that are still accepted by common browsers.
            // "cURL" always uses Z_SYNC_FLUSH.
            const zlibOptions = {
                flush: zlib_1.default.constants.Z_SYNC_FLUSH,
                finishFlush: zlib_1.default.constants.Z_SYNC_FLUSH
            };
            body = stream_1.default.pipeline(body, zlib_1.default.createGunzip(zlibOptions), (error) => {
                if (error) {
                    // Ignore error as it is forwarded to the response body.
                }
            });
            this.response = new this.#window.Response(FetchBodyUtility_js_1.default.nodeToWebStream(body), responseOptions);
            this.response.redirected = this.redirectCount > 0;
            this.response.url = this.request.url;
            this.resolve(this.response);
            return;
        }
        // For Deflate
        if (contentEncodingHeader === 'deflate' || contentEncodingHeader === 'x-deflate') {
            // Handle the infamous raw deflate response from old servers
            // A hack for old IIS and Apache servers
            const raw = stream_1.default.pipeline(nodeResponse, new stream_1.default.PassThrough(), (error) => {
                if (error) {
                    // Ignore error as it is forwarded to the response body.
                }
            });
            raw.on('data', (chunk) => {
                // See http://stackoverflow.com/questions/37519828
                if ((chunk[0] & 0x0f) === 0x08) {
                    body = stream_1.default.pipeline(body, zlib_1.default.createInflate(), (error) => {
                        if (error) {
                            // Ignore error as the fetch() promise has already been resolved.
                        }
                    });
                }
                else {
                    body = stream_1.default.pipeline(body, zlib_1.default.createInflateRaw(), (error) => {
                        if (error) {
                            // Ignore error as it is forwarded to the response body.
                        }
                    });
                }
                this.response = new this.#window.Response(FetchBodyUtility_js_1.default.nodeToWebStream(body), responseOptions);
                this.response.redirected = this.redirectCount > 0;
                this.response.url = this.request.url;
                this.resolve(this.response);
            });
            raw.on('end', () => {
                // Some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                if (!this.response) {
                    this.response = new this.#window.Response(FetchBodyUtility_js_1.default.nodeToWebStream(body), responseOptions);
                    this.response.redirected = this.redirectCount > 0;
                    this.response.url = this.request.url;
                    this.resolve(this.response);
                }
            });
            return;
        }
        // For BR
        if (contentEncodingHeader === 'br') {
            body = stream_1.default.pipeline(body, zlib_1.default.createBrotliDecompress(), (error) => {
                if (error) {
                    // Ignore error as it is forwarded to the response body.
                }
            });
            this.response = new this.#window.Response(FetchBodyUtility_js_1.default.nodeToWebStream(body), responseOptions);
            this.response.redirected = this.redirectCount > 0;
            this.response.url = this.request.url;
            this.resolve(this.response);
            return;
        }
        // Otherwise, use response as is
        this.response = new this.#window.Response(FetchBodyUtility_js_1.default.nodeToWebStream(body), responseOptions);
        this.response.redirected = this.redirectCount > 0;
        this.response.url = this.request.url;
        this.resolve(this.response);
    }
    /**
     * Handles redirect response.
     *
     * @param nodeResponse Node response.
     * @param responseHeaders Headers.
     * @returns True if redirect response was handled, false otherwise.
     */
    handleRedirectResponse(nodeResponse, responseHeaders) {
        if (!FetchResponseRedirectUtility_js_1.default.isRedirect(nodeResponse.statusCode)) {
            return false;
        }
        switch (this.request.redirect) {
            case 'error':
                this.finalizeRequest();
                this.reject(new this.#window.DOMException(`URI requested responds with a redirect, redirect mode is set to "error": ${this.request.url}`, DOMExceptionNameEnum_js_1.default.abortError));
                return true;
            case 'manual':
                // Nothing to do
                return false;
            case 'follow':
                const locationHeader = responseHeaders.get('Location');
                const shouldBecomeGetRequest = nodeResponse.statusCode === 303 ||
                    ((nodeResponse.statusCode === 301 || nodeResponse.statusCode === 302) &&
                        this.request.method === 'POST');
                let locationURL = null;
                if (locationHeader !== null) {
                    try {
                        locationURL = new url_1.URL(locationHeader, this.request.url);
                    }
                    catch {
                        this.finalizeRequest();
                        this.reject(new this.#window.DOMException(`URI requested responds with an invalid redirect URL: ${locationHeader}`, DOMExceptionNameEnum_js_1.default.uriMismatchError));
                        return true;
                    }
                }
                if (locationURL === null) {
                    return false;
                }
                if (FetchResponseRedirectUtility_js_1.default.isMaxRedirectsReached(this.redirectCount)) {
                    this.finalizeRequest();
                    this.reject(new this.#window.DOMException(`Maximum redirects reached at: ${this.request.url}`, DOMExceptionNameEnum_js_1.default.networkError));
                    return true;
                }
                const headers = new Headers_js_1.default(this.request.headers);
                const requestInit = {
                    method: this.request.method,
                    signal: this.request.signal,
                    referrer: this.request.referrer,
                    referrerPolicy: this.request.referrerPolicy,
                    credentials: this.request.credentials,
                    headers,
                    body: this.request[PropertySymbol.bodyBuffer]
                };
                if (this.request.credentials === 'omit' ||
                    (this.request.credentials === 'same-origin' &&
                        FetchCORSUtility_js_1.default.isCORS(this.#window.location.href, locationURL))) {
                    headers.delete('authorization');
                    headers.delete('www-authenticate');
                    headers.delete('cookie');
                    headers.delete('cookie2');
                }
                if (this.request.signal[PropertySymbol.aborted]) {
                    this.abort(this.request.signal[PropertySymbol.reason]);
                    return true;
                }
                if (shouldBecomeGetRequest) {
                    requestInit.method = 'GET';
                    requestInit.body = undefined;
                    headers.delete('Content-Length');
                    headers.delete('Content-Type');
                }
                const responseReferrerPolicy = FetchRequestReferrerUtility_js_1.default.getReferrerPolicyFromHeader(headers);
                if (responseReferrerPolicy) {
                    requestInit.referrerPolicy = responseReferrerPolicy;
                }
                const fetch = new Fetch({
                    browserFrame: this.#browserFrame,
                    window: this.#window,
                    url: locationURL,
                    init: requestInit,
                    redirectCount: this.redirectCount + 1,
                    contentType: !shouldBecomeGetRequest
                        ? this.request[PropertySymbol.contentType]
                        : undefined
                });
                this.finalizeRequest();
                fetch
                    .send()
                    .then((response) => this.resolve(response))
                    .catch((error) => this.reject(error));
                return true;
            default:
                this.finalizeRequest();
                this.reject(new this.#window.DOMException(`Redirect option '${this.request.redirect}' is not a valid value of IRequestRedirect`));
                return true;
        }
    }
    /**
     * Finalizes the request.
     */
    finalizeRequest() {
        this.request.signal.removeEventListener('abort', this.listeners.onSignalAbort);
        this.nodeRequest.destroy();
    }
    /**
     * Aborts the request.
     *
     * @param reason Reason.
     */
    abort(reason) {
        const error = new this.#window.DOMException('The operation was aborted.' + (reason ? ' ' + reason.toString() : ''), DOMExceptionNameEnum_js_1.default.abortError);
        this.request[PropertySymbol.aborted] = true;
        if (this.request.body) {
            this.request.body[PropertySymbol.error] = error;
        }
        if (this.nodeRequest && !this.nodeRequest.destroyed) {
            this.nodeRequest.destroy(error);
        }
        if (this.nodeResponse && !this.nodeResponse.destroyed) {
            this.nodeResponse.destroy(error);
        }
        if (this.response && this.response.body) {
            this.response.body[PropertySymbol.error] = error;
            if (!this.response.body.locked) {
                this.response.body.cancel(error);
            }
        }
        if (this.reject) {
            this.reject(reason !== undefined ? reason : error);
        }
    }
}
exports.default = Fetch;
//# sourceMappingURL=Fetch.cjs.map