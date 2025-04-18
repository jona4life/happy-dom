/// <reference types="node" resolution-mode="require"/>
import IRequestCredentials from './types/IRequestCredentials.js';
import IRequestReferrerPolicy from './types/IRequestReferrerPolicy.js';
/**
 * Helper class for performing fetch of resources.
 */
export default class ResourceFetch {
    private window;
    /**
     * Constructor.
     *
     * @param window Window.
     */
    constructor(window: typeof globalThis);
    /**
     * Returns resource data asynchronously.
     *
     * @param url URL.
     * @param destination Destination.
     * @param [options]
     * @param [options.credentials] Credentials.
     * @param options.referrerPolicy
     * @returns Response.
     */
    fetch(url: string | URL, destination: 'script' | 'style' | 'module', options?: {
        credentials?: IRequestCredentials;
        referrerPolicy?: IRequestReferrerPolicy;
    }): Promise<string>;
    /**
     * Returns resource data synchronously.
     *
     * @param url URL.
     * @param destination Destination.
     * @param [options] Options.
     * @param [options.credentials] Credentials.
     * @param [options.referrerPolicy] Referrer policy.
     * @returns Response.
     */
    fetchSync(url: string, destination: 'script' | 'style' | 'module', options?: {
        credentials?: IRequestCredentials;
        referrerPolicy?: IRequestReferrerPolicy;
    }): string;
}
//# sourceMappingURL=ResourceFetch.d.ts.map