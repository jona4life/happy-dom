import AbortSignal from './AbortSignal.js';
import * as PropertySymbol from '../PropertySymbol.js';

/**
 * AbortController.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 */
export default class AbortController {
	// Injected by WindowContextClassExtender
	// @ts-ignore
	protected declare [PropertySymbol.window]: typeof globalThis;

	// Public properties
	// @ts-ignore
	public readonly signal: AbortSignal = new this[PropertySymbol.window].AbortSignal();

	/**
	 * Aborts the signal.
	 *
	 * @param [reason] Reason.
	 */
	public abort(reason?: any): void {
		this.signal[PropertySymbol.abort](reason);
	}
}
