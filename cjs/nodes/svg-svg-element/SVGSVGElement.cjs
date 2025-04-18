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
const SVGGraphicsElement_js_1 = __importDefault(require("../svg-graphics-element/SVGGraphicsElement.cjs"));
const SVGRect_js_1 = __importDefault(require("../../svg/SVGRect.cjs"));
const SVGPoint_js_1 = __importDefault(require("../../svg/SVGPoint.cjs"));
const SVGLength_js_1 = __importDefault(require("../../svg/SVGLength.cjs"));
const SVGAngle_js_1 = __importDefault(require("../../svg/SVGAngle.cjs"));
const SVGNumber_js_1 = __importDefault(require("../../svg/SVGNumber.cjs"));
const SVGTransform_js_1 = __importDefault(require("../../svg/SVGTransform.cjs"));
const SVGAnimatedRect_js_1 = __importDefault(require("../../svg/SVGAnimatedRect.cjs"));
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
const SVGAnimatedPreserveAspectRatio_js_1 = __importDefault(require("../../svg/SVGAnimatedPreserveAspectRatio.cjs"));
const SVGAnimatedLength_js_1 = __importDefault(require("../../svg/SVGAnimatedLength.cjs"));
const NodeList_js_1 = __importDefault(require("../node/NodeList.cjs"));
const SVGMatrix_js_1 = __importDefault(require("../../svg/SVGMatrix.cjs"));
const ParentNodeUtility_js_1 = __importDefault(require("../parent-node/ParentNodeUtility.cjs"));
const ElementEventAttributeUtility_js_1 = __importDefault(require("../element/ElementEventAttributeUtility.cjs"));
/**
 * SVGSVGElement.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement
 */
class SVGSVGElement extends SVGGraphicsElement_js_1.default {
    // Internal properties
    [PropertySymbol.preserveAspectRatio] = null;
    [PropertySymbol.x] = null;
    [PropertySymbol.y] = null;
    [PropertySymbol.width] = null;
    [PropertySymbol.height] = null;
    [PropertySymbol.currentScale] = 1;
    [PropertySymbol.viewBox] = null;
    // Events
    /* eslint-disable jsdoc/require-jsdoc */
    get onafterprint() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onafterprint');
    }
    set onafterprint(value) {
        this[PropertySymbol.propertyEventListeners].set('onafterprint', value);
    }
    get onbeforeprint() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onbeforeprint');
    }
    set onbeforeprint(value) {
        this[PropertySymbol.propertyEventListeners].set('onbeforeprint', value);
    }
    get onbeforeunload() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onbeforeunload');
    }
    set onbeforeunload(value) {
        this[PropertySymbol.propertyEventListeners].set('onbeforeunload', value);
    }
    get ongamepadconnected() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ongamepadconnected');
    }
    set ongamepadconnected(value) {
        this[PropertySymbol.propertyEventListeners].set('ongamepadconnected', value);
    }
    get ongamepaddisconnected() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ongamepaddisconnected');
    }
    set ongamepaddisconnected(value) {
        this[PropertySymbol.propertyEventListeners].set('ongamepaddisconnected', value);
    }
    get onhashchange() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onhashchange');
    }
    set onhashchange(value) {
        this[PropertySymbol.propertyEventListeners].set('onhashchange', value);
    }
    get onlanguagechange() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onlanguagechange');
    }
    set onlanguagechange(value) {
        this[PropertySymbol.propertyEventListeners].set('onlanguagechange', value);
    }
    get onmessage() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmessage');
    }
    set onmessage(value) {
        this[PropertySymbol.propertyEventListeners].set('onmessage', value);
    }
    get onmessageerror() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmessageerror');
    }
    set onmessageerror(value) {
        this[PropertySymbol.propertyEventListeners].set('onmessageerror', value);
    }
    get onoffline() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onoffline');
    }
    set onoffline(value) {
        this[PropertySymbol.propertyEventListeners].set('onoffline', value);
    }
    get ononline() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ononline');
    }
    set ononline(value) {
        this[PropertySymbol.propertyEventListeners].set('ononline', value);
    }
    get onpagehide() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpagehide');
    }
    set onpagehide(value) {
        this[PropertySymbol.propertyEventListeners].set('onpagehide', value);
    }
    get onpageshow() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpageshow');
    }
    set onpageshow(value) {
        this[PropertySymbol.propertyEventListeners].set('onpageshow', value);
    }
    get onpopstate() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpopstate');
    }
    set onpopstate(value) {
        this[PropertySymbol.propertyEventListeners].set('onpopstate', value);
    }
    get onrejectionhandled() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onrejectionhandled');
    }
    set onrejectionhandled(value) {
        this[PropertySymbol.propertyEventListeners].set('onrejectionhandled', value);
    }
    get onstorage() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onstorage');
    }
    set onstorage(value) {
        this[PropertySymbol.propertyEventListeners].set('onstorage', value);
    }
    get onunhandledrejection() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onunhandledrejection');
    }
    set onunhandledrejection(value) {
        this[PropertySymbol.propertyEventListeners].set('onunhandledrejection', value);
    }
    get onunload() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onunload');
    }
    set onunload(value) {
        this[PropertySymbol.propertyEventListeners].set('onunload', value);
    }
    /* eslint-enable jsdoc/require-jsdoc */
    /**
     * Returns preserve aspect ratio.
     *
     * @returns Preserve aspect ratio.
     */
    get preserveAspectRatio() {
        if (!this[PropertySymbol.preserveAspectRatio]) {
            this[PropertySymbol.preserveAspectRatio] = new SVGAnimatedPreserveAspectRatio_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('preserveAspectRatio'),
                setAttribute: (value) => this.setAttribute('preserveAspectRatio', value)
            });
        }
        return this[PropertySymbol.preserveAspectRatio];
    }
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height() {
        if (!this[PropertySymbol.height]) {
            this[PropertySymbol.height] = new SVGAnimatedLength_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('height'),
                setAttribute: (value) => this.setAttribute('height', value)
            });
        }
        return this[PropertySymbol.height];
    }
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width() {
        if (!this[PropertySymbol.width]) {
            this[PropertySymbol.width] = new SVGAnimatedLength_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
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
            this[PropertySymbol.x] = new SVGAnimatedLength_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
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
            this[PropertySymbol.y] = new SVGAnimatedLength_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('y'),
                setAttribute: (value) => this.setAttribute('y', value)
            });
        }
        return this[PropertySymbol.y];
    }
    /**
     * Returns currentScale.
     *
     * @returns CurrentScale.
     */
    get currentScale() {
        return this[PropertySymbol.currentScale];
    }
    /**
     * Sets currentScale.
     *
     * @param currentScale CurrentScale.
     */
    set currentScale(currentScale) {
        const parsed = typeof currentScale !== 'number' ? parseFloat(String(currentScale)) : currentScale;
        if (isNaN(parsed)) {
            throw this[PropertySymbol.window].TypeError(`Failed to set the 'currentScale' property on 'SVGSVGElement': The provided float value is non-finite.`);
        }
        if (parsed < 1) {
            return;
        }
        this[PropertySymbol.currentScale] = parsed;
    }
    /**
     * Returns current translate.
     *
     * @returns SVG point.
     */
    get currentTranslate() {
        return new SVGPoint_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns view box.
     *
     * @returns View box.
     */
    get viewBox() {
        if (!this[PropertySymbol.viewBox]) {
            this[PropertySymbol.viewBox] = new SVGAnimatedRect_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], {
                getAttribute: () => this.getAttribute('viewBox'),
                setAttribute: (value) => this.setAttribute('viewBox', value)
            });
        }
        return this[PropertySymbol.viewBox];
    }
    /**
     * Pauses animation.
     */
    pauseAnimations() { }
    /**
     * Unpauses animation.
     */
    unpauseAnimations() { }
    /**
     * Returns "true" if animation is paused.
     *
     * @returns "true" if animation is paused.
     */
    animationsPaused() {
        return false;
    }
    /**
     * Returns the current time in seconds relative to the start time for the current SVG document fragment.
     *
     * @returns Current time in seconds.
     */
    getCurrentTime() {
        return 0;
    }
    /**
     * Sets current time.
     *
     * @param _seconds Seconds.
     */
    setCurrentTime(_seconds) { }
    /**
     * Returns intersection list.
     *
     * @param _rect SVG Rect.
     * @param _element SVG Element.
     * @returns Intersection list.
     */
    getIntersectionList(_rect, _element) {
        return new NodeList_js_1.default(PropertySymbol.illegalConstructor, []);
    }
    /**
     * Returns enclousure list.
     *
     * @param _rect SVG Rect.
     * @param _element SVG Element.
     * @returns Enclousure list.
     */
    getEnclosureList(_rect, _element) {
        return new NodeList_js_1.default(PropertySymbol.illegalConstructor, []);
    }
    /**
     * Returns true if the rendered content of the given element intersects the supplied rectangle.
     *
     * @param _element SVG Element.
     * @param _rect SVG Rect.
     * @returns Intersection state.
     */
    checkIntersection(_element, _rect) {
        return false;
    }
    /**
     * Returns true if the rendered content of the given element is entirely contained within the supplied rectangle.
     *
     * @param _element SVG Element.
     * @param _rect SVG Rect.
     * @returns Enclousure state.
     */
    checkEnclosure(_element, _rect) {
        return false;
    }
    /**
     * Unselects any selected objects, including any selections of text strings and type-in bars.
     */
    deselectAll() { }
    /**
     * Returns a number.
     *
     * @returns Number.
     */
    createSVGNumber() {
        return new SVGNumber_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a length.
     *
     * @returns Length.
     */
    createSVGLength() {
        return new SVGLength_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a angle.
     *
     * @returns Angle.
     */
    createSVGAngle() {
        return new SVGAngle_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a point.
     *
     * @returns Point.
     */
    createSVGPoint() {
        return new SVGPoint_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a matrix.
     *
     * @returns Matrix.
     */
    createSVGMatrix() {
        return new SVGMatrix_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a rect.
     *
     * @returns Rect.
     */
    createSVGRect() {
        return new SVGRect_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a transform.
     *
     * @returns Transform.
     */
    createSVGTransform() {
        return new SVGTransform_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
    }
    /**
     * Returns a transform from a matrix.
     *
     * @param matrix Matrix.
     */
    createSVGTransformFromMatrix(matrix) {
        const transform = new SVGTransform_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window]);
        transform.setMatrix(matrix);
        return transform;
    }
    /**
     * Returns an elements by class name.
     *
     * @param className Tag name.
     * @returns Matching element.
     */
    getElementsByClassName(className) {
        return ParentNodeUtility_js_1.default.getElementsByClassName(this, className);
    }
    /**
     * Returns an elements by tag name.
     *
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagName(tagName) {
        return ParentNodeUtility_js_1.default.getElementsByTagName(this, tagName);
    }
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagNameNS(namespaceURI, tagName) {
        return ParentNodeUtility_js_1.default.getElementsByTagNameNS(this, namespaceURI, tagName);
    }
    /**
     * Returns an element by ID.
     *
     * @param id ID.
     * @returns Matching element.
     */
    getElementById(id) {
        return ParentNodeUtility_js_1.default.getElementById(this, id);
    }
    /**
     * @override
     */
    [PropertySymbol.cloneNode](deep = false) {
        return super[PropertySymbol.cloneNode](deep);
    }
}
exports.default = SVGSVGElement;
//# sourceMappingURL=SVGSVGElement.cjs.map