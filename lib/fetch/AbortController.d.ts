import AbortSignal from './AbortSignal.js';
import * as PropertySymbol from '../PropertySymbol.js';
/**
 * AbortController.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 */
export default class AbortController {
    protected [PropertySymbol.window]: typeof globalThis;
    readonly signal: AbortSignal;
    /**
     * Aborts the signal.
     *
     * @param [reason] Reason.
     */
    abort(reason?: any): void;
}
//# sourceMappingURL=AbortController.d.ts.map