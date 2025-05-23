import SVGElement from '../svg-element/SVGElement.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import SVGAnimatedLength from '../../svg/SVGAnimatedLength.js';
import SVGAnimatedEnumeration from '../../svg/SVGAnimatedEnumeration.js';
import SVGAnimatedString from '../../svg/SVGAnimatedString.js';
/**
 * SVG FE Blend Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGFEBlendElement
 */
export default class SVGFEBlendElement extends SVGElement {
    // Static properties
    static SVG_FEBLEND_MODE_UNKNOWN = 0;
    static SVG_FEBLEND_MODE_NORMAL = 1;
    static SVG_FEBLEND_MODE_MULTIPLY = 2;
    static SVG_FEBLEND_MODE_SCREEN = 3;
    static SVG_FEBLEND_MODE_DARKEN = 4;
    static SVG_FEBLEND_MODE_LIGHTEN = 5;
    static SVG_FEBLEND_MODE_OVERLAY = 6;
    static SVG_FEBLEND_MODE_COLOR_DODGE = 7;
    static SVG_FEBLEND_MODE_COLOR_BURN = 8;
    static SVG_FEBLEND_MODE_HARD_LIGHT = 9;
    static SVG_FEBLEND_MODE_SOFT_LIGHT = 10;
    static SVG_FEBLEND_MODE_DIFFERENCE = 11;
    static SVG_FEBLEND_MODE_EXCLUSION = 12;
    static SVG_FEBLEND_MODE_HUE = 13;
    static SVG_FEBLEND_MODE_SATURATION = 14;
    static SVG_FEBLEND_MODE_COLOR = 15;
    static SVG_FEBLEND_MODE_LUMINOSITY = 16;
    // Internal properties
    [PropertySymbol.height] = null;
    [PropertySymbol.in1] = null;
    [PropertySymbol.in2] = null;
    [PropertySymbol.mode] = null;
    [PropertySymbol.x] = null;
    [PropertySymbol.y] = null;
    [PropertySymbol.width] = null;
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height() {
        if (!this[PropertySymbol.height]) {
            this[PropertySymbol.height] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('height'),
                setAttribute: (value) => this.setAttribute('height', value)
            });
        }
        return this[PropertySymbol.height];
    }
    /**
     * Returns in1.
     *
     * @returns In1.
     */
    get in1() {
        if (!this[PropertySymbol.in1]) {
            this[PropertySymbol.in1] = new SVGAnimatedString(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('in'),
                setAttribute: (value) => this.setAttribute('in', value)
            });
        }
        return this[PropertySymbol.in1];
    }
    /**
     * Returns in2.
     *
     * @returns In2.
     */
    get in2() {
        if (!this[PropertySymbol.in2]) {
            this[PropertySymbol.in2] = new SVGAnimatedString(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('in2'),
                setAttribute: (value) => this.setAttribute('in2', value)
            });
        }
        return this[PropertySymbol.in2];
    }
    /**
     * Returns mode.
     *
     * @returns Mode.
     */
    get mode() {
        if (!this[PropertySymbol.mode]) {
            this[PropertySymbol.mode] = new SVGAnimatedEnumeration(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('mode'),
                setAttribute: (value) => this.setAttribute('mode', value),
                values: [
                    'normal',
                    'multiply',
                    'screen',
                    'darken',
                    'lighten',
                    'overlay',
                    'color-dodge',
                    'color-burn',
                    'hard-light',
                    'soft-light',
                    'difference',
                    'exclusion',
                    'hue',
                    'saturation',
                    'color',
                    'luminosity'
                ],
                defaultValue: 'normal'
            });
        }
        return this[PropertySymbol.mode];
    }
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width() {
        if (!this[PropertySymbol.width]) {
            this[PropertySymbol.width] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('width'),
                setAttribute: (value) => this.setAttribute('width', value)
            });
        }
        return this[PropertySymbol.width];
    }
    /**
     * Returns x position.
     *
     * @returns X position.
     */
    get x() {
        if (!this[PropertySymbol.x]) {
            this[PropertySymbol.x] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('x'),
                setAttribute: (value) => this.setAttribute('x', value)
            });
        }
        return this[PropertySymbol.x];
    }
    /**
     * Returns y position.
     *
     * @returns Y position.
     */
    get y() {
        if (!this[PropertySymbol.y]) {
            this[PropertySymbol.y] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('y'),
                setAttribute: (value) => this.setAttribute('y', value)
            });
        }
        return this[PropertySymbol.y];
    }
}
//# sourceMappingURL=SVGFEBlendElement.js.map