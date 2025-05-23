import SVGGeometryElement from '../svg-geometry-element/SVGGeometryElement.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import SVGAnimatedLength from '../../svg/SVGAnimatedLength.js';
/**
 * SVG Circle Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement
 */
export default class SVGCircleElement extends SVGGeometryElement {
    // Internal properties
    [PropertySymbol.cx] = null;
    [PropertySymbol.cy] = null;
    [PropertySymbol.r] = null;
    /**
     * Returns cx.
     *
     * @returns Cx.
     */
    get cx() {
        if (!this[PropertySymbol.cx]) {
            this[PropertySymbol.cx] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('cx'),
                setAttribute: (value) => this.setAttribute('cx', value)
            });
        }
        return this[PropertySymbol.cx];
    }
    /**
     * Returns cy.
     *
     * @returns Cy.
     */
    get cy() {
        if (!this[PropertySymbol.cy]) {
            this[PropertySymbol.cy] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('cy'),
                setAttribute: (value) => this.setAttribute('cy', value)
            });
        }
        return this[PropertySymbol.cy];
    }
    /**
     * Returns r.
     *
     * @returns R.
     */
    get r() {
        if (!this[PropertySymbol.r]) {
            this[PropertySymbol.r] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('r'),
                setAttribute: (value) => this.setAttribute('r', value)
            });
        }
        return this[PropertySymbol.r];
    }
}
//# sourceMappingURL=SVGCircleElement.js.map