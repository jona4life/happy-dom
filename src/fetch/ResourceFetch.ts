import IRequestCredentials from './types/IRequestCredentials.js';
// import WindowBrowserContext from '../window/WindowBrowserContext.js';
import PreloadUtility from './preload/PreloadUtility.js';
import * as PropertySymbol from '../PropertySymbol.js';
import IRequestReferrerPolicy from './types/IRequestReferrerPolicy.js';
import syncFetch from 'sync-fetch';

/**
 * Helper class for performing fetch of resources.
 */
export default class ResourceFetch {
	private window: typeof globalThis;

	/**
	 * Constructor.
	 *
	 * @param window Window.
	 */
	constructor(window: typeof globalThis) {
		this.window = window;
	}

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
	public async fetch(
		url: string | URL,
		destination: 'script' | 'style' | 'module',
		options?: { credentials?: IRequestCredentials; referrerPolicy?: IRequestReferrerPolicy }
	): Promise<string> {
		// const browserFrame = new WindowBrowserContext(this.window).getBrowserFrame();

		// Preloaded resource
		if (destination === 'script' || destination === 'style') {
			const preloadKey = PreloadUtility.getKey({
				url: String(url),
				destination,
				mode: 'cors',
				credentialsMode: options.credentials || 'same-origin'
			});
			const preloadEntry = this.window.document[PropertySymbol.preloads].get(preloadKey);

			if (preloadEntry) {
				this.window.document[PropertySymbol.preloads].delete(preloadKey);

				const response = preloadEntry.response || (await preloadEntry.onResponseAvailable());

				if (!response.ok) {
					throw new this.window.DOMException(
						`Failed to perform request to "${new URL(url, this.window.location.href).href
						}". Status ${preloadEntry.response.status} ${preloadEntry.response.statusText}.`
					);
				}

				return preloadEntry.response[PropertySymbol.buffer].toString();
			}
		}

		const response = await fetch(url, {
			credentials: options?.credentials,
			referrerPolicy: options?.referrerPolicy
		});

		if (!response.ok) {
			throw new this.window.DOMException(
				`Failed to perform request to "${new URL(url, this.window.location.href).href}". Status ${response.status
				} ${response.statusText}.`
			);
		}

		return await response.text();
	}

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
	public fetchSync(
		url: string,
		destination: 'script' | 'style' | 'module',
		options?: { credentials?: IRequestCredentials; referrerPolicy?: IRequestReferrerPolicy }
	): string {
		// const browserFrame = new WindowBrowserContext(this.window).getBrowserFrame();

		// Preloaded resource
		if (destination === 'script' || destination === 'style') {
			const preloadKey = PreloadUtility.getKey({
				url: String(url),
				destination,
				mode: 'cors',
				credentialsMode: options.credentials || 'same-origin'
			});
			const preloadEntry = this.window.document[PropertySymbol.preloads].get(preloadKey);

			// We will only use this if the fetch for the resource is complete as it is async and this request is sync.
			if (preloadEntry && preloadEntry.response) {
				this.window.document[PropertySymbol.preloads].delete(preloadKey);

				const response = preloadEntry.response;

				if (!response.ok) {
					throw new this.window.DOMException(
						`Failed to perform request to "${new URL(url, this.window.location.href).href
						}". Status ${preloadEntry.response.status} ${preloadEntry.response.statusText}.`
					);
				}

				return preloadEntry.response[PropertySymbol.buffer].toString();
			}
		}

		const response = syncFetch(url, {
			// credentials: options?.credentials,
			// referrerPolicy: options?.referrerPolicy
		});

		if (!response.ok) {
			throw new this.window.DOMException(
				`Failed to perform request to "${new URL(url, this.window.location.href).href}". Status ${response.status
				} ${response.statusText}.`
			);
		}

		return response.body.toString();
	}
}
