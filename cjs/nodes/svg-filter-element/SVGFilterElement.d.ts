import SVGElement from '../svg-element/SVGElement.cjs';
import * as PropertySymbol from '../../PropertySymbol.cjs';
import SVGAnimatedLength from '../../svg/SVGAnimatedLength.cjs';
import SVGAnimatedString from '../../svg/SVGAnimatedString.cjs';
import SVGAnimatedEnumeration from '../../svg/SVGAnimatedEnumeration.cjs';
/**
 * SVG Filter Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGFilterElement
 */
export default class SVGFilterElement extends SVGElement {
    [PropertySymbol.href]: SVGAnimatedString | null;
    [PropertySymbol.filterUnits]: SVGAnimatedEnumeration | null;
    [PropertySymbol.primitiveUnits]: SVGAnimatedEnumeration | null;
    [PropertySymbol.x]: SVGAnimatedLength | null;
    [PropertySymbol.y]: SVGAnimatedLength | null;
    [PropertySymbol.width]: SVGAnimatedLength | null;
    [PropertySymbol.height]: SVGAnimatedLength | null;
    /**
     * Returns href.
     *
     * @returns Href.
     */
    get href(): SVGAnimatedString;
    /**
     * Returns filter units.
     *
     * @returns Filter units.
     */
    get filterUnits(): SVGAnimatedEnumeration;
    /**
     * Returns primitive units.
     *
     * @returns Primitive units.
     */
    get primitiveUnits(): SVGAnimatedEnumeration;
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height(): SVGAnimatedLength;
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width(): SVGAnimatedLength;
    /**
     * Returns x position.
     *
     * @returns X position.
     */
    get x(): SVGAnimatedLength;
    /**
     * Returns y position.
     *
     * @returns Y position.
     */
    get y(): SVGAnimatedLength;
}
//# sourceMappingURL=SVGFilterElement.d.ts.map