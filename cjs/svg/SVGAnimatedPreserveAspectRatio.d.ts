import * as PropertySymbol from '../PropertySymbol.cjs';
import SVGPreserveAspectRatio from './SVGPreserveAspectRatio.cjs';
/**
 * SVG Animated Preserve Aspect Ratio
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedPreserveAspectRatio
 */
export default class SVGAnimatedPreserveAspectRatio {
    [PropertySymbol.window]: typeof globalThis;
    [PropertySymbol.getAttribute]: () => string;
    [PropertySymbol.setAttribute]: (value: string) => void;
    [PropertySymbol.baseVal]: SVGPreserveAspectRatio | null;
    [PropertySymbol.animVal]: SVGPreserveAspectRatio | null;
    /**
     * Constructor.
     *
     * @param illegalConstructorSymbol Illegal constructor symbol.
     * @param window Window.
     * @param options Options.
     * @param options.getAttribute Get attribute.
     * @param options.setAttribute Set attribute
     */
    constructor(illegalConstructorSymbol: symbol, window: typeof globalThis, options: {
        getAttribute: () => string | null;
        setAttribute: (value: string) => void;
    });
    /**
     * Returns animated value.
     *
     * @returns Animated value.
     */
    get animVal(): SVGPreserveAspectRatio;
    /**
     * Returns animated value.
     *
     * @param value Animated value.
     */
    set animVal(_value: SVGPreserveAspectRatio);
    /**
     * Returns base value.
     *
     * @returns Base value.
     */
    get baseVal(): SVGPreserveAspectRatio;
    /**
     * Returns base value.
     *
     * @param value Base value.
     */
    set baseVal(_value: SVGPreserveAspectRatio);
}
//# sourceMappingURL=SVGAnimatedPreserveAspectRatio.d.ts.map