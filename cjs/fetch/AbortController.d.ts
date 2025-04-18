import AbortSignal from './AbortSignal.cjs';
import * as PropertySymbol from '../PropertySymbol.cjs';
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