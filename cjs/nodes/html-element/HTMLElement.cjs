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
const Element_js_1 = __importDefault(require("../element/Element.cjs"));
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
const CSSStyleDeclaration_js_1 = __importDefault(require("../../css/declaration/CSSStyleDeclaration.cjs"));
const PointerEvent_js_1 = __importDefault(require("../../event/events/PointerEvent.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("../node/NodeTypeEnum.cjs"));
const HTMLElementUtility_js_1 = __importDefault(require("./HTMLElementUtility.cjs"));
const DOMStringMap_js_1 = __importDefault(require("../../dom/DOMStringMap.cjs"));
const ElementEventAttributeUtility_js_1 = __importDefault(require("../element/ElementEventAttributeUtility.cjs"));
/**
 * HTML Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.
 */
class HTMLElement extends Element_js_1.default {
    static observedAttributes;
    // Internal properties
    [PropertySymbol.accessKey] = '';
    [PropertySymbol.offsetHeight] = 0;
    [PropertySymbol.offsetWidth] = 0;
    [PropertySymbol.offsetLeft] = 0;
    [PropertySymbol.offsetTop] = 0;
    [PropertySymbol.clientHeight] = 0;
    [PropertySymbol.clientWidth] = 0;
    [PropertySymbol.clientLeft] = 0;
    [PropertySymbol.clientTop] = 0;
    [PropertySymbol.style] = null;
    [PropertySymbol.dataset] = null;
    // Private properties
    #customElementDefineCallback = null;
    // Events
    /* eslint-disable jsdoc/require-jsdoc */
    get oncancel() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncancel');
    }
    set oncancel(value) {
        this[PropertySymbol.propertyEventListeners].set('oncancel', value);
    }
    get onerror() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onerror');
    }
    set onerror(value) {
        this[PropertySymbol.propertyEventListeners].set('onerror', value);
    }
    get onscroll() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onscroll');
    }
    set onscroll(value) {
        this[PropertySymbol.propertyEventListeners].set('onscroll', value);
    }
    get onselect() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onselect');
    }
    set onselect(value) {
        this[PropertySymbol.propertyEventListeners].set('onselect', value);
    }
    get onwheel() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onwheel');
    }
    set onwheel(value) {
        this[PropertySymbol.propertyEventListeners].set('onwheel', value);
    }
    get oncopy() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncopy');
    }
    set oncopy(value) {
        this[PropertySymbol.propertyEventListeners].set('oncopy', value);
    }
    get oncut() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncut');
    }
    set oncut(value) {
        this[PropertySymbol.propertyEventListeners].set('oncut', value);
    }
    get onpaste() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpaste');
    }
    set onpaste(value) {
        this[PropertySymbol.propertyEventListeners].set('onpaste', value);
    }
    get oncompositionend() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncompositionend');
    }
    set oncompositionend(value) {
        this[PropertySymbol.propertyEventListeners].set('oncompositionend', value);
    }
    get oncompositionstart() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncompositionstart');
    }
    set oncompositionstart(value) {
        this[PropertySymbol.propertyEventListeners].set('oncompositionstart', value);
    }
    get oncompositionupdate() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncompositionupdate');
    }
    set oncompositionupdate(value) {
        this[PropertySymbol.propertyEventListeners].set('oncompositionupdate', value);
    }
    get onblur() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onblur');
    }
    set onblur(value) {
        this[PropertySymbol.propertyEventListeners].set('onblur', value);
    }
    get onfocus() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onfocus');
    }
    set onfocus(value) {
        this[PropertySymbol.propertyEventListeners].set('onfocus', value);
    }
    get onfocusin() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onfocusin');
    }
    set onfocusin(value) {
        this[PropertySymbol.propertyEventListeners].set('onfocusin', value);
    }
    get onfocusout() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onfocusout');
    }
    set onfocusout(value) {
        this[PropertySymbol.propertyEventListeners].set('onfocusout', value);
    }
    get onkeydown() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onkeydown');
    }
    set onkeydown(value) {
        this[PropertySymbol.propertyEventListeners].set('onkeydown', value);
    }
    get onkeyup() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onkeyup');
    }
    set onkeyup(value) {
        this[PropertySymbol.propertyEventListeners].set('onkeyup', value);
    }
    get onauxclick() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onauxclick');
    }
    set onauxclick(value) {
        this[PropertySymbol.propertyEventListeners].set('onauxclick', value);
    }
    get onclick() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onclick');
    }
    set onclick(value) {
        this[PropertySymbol.propertyEventListeners].set('onclick', value);
    }
    get oncontextmenu() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oncontextmenu');
    }
    set oncontextmenu(value) {
        this[PropertySymbol.propertyEventListeners].set('oncontextmenu', value);
    }
    get ondblclick() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ondblclick');
    }
    set ondblclick(value) {
        this[PropertySymbol.propertyEventListeners].set('ondblclick', value);
    }
    get onmousedown() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmousedown');
    }
    set onmousedown(value) {
        this[PropertySymbol.propertyEventListeners].set('onmousedown', value);
    }
    get onmouseenter() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmouseenter');
    }
    set onmouseenter(value) {
        this[PropertySymbol.propertyEventListeners].set('onmouseenter', value);
    }
    get onmouseleave() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmouseleave');
    }
    set onmouseleave(value) {
        this[PropertySymbol.propertyEventListeners].set('onmouseleave', value);
    }
    get onmousemove() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmousemove');
    }
    set onmousemove(value) {
        this[PropertySymbol.propertyEventListeners].set('onmousemove', value);
    }
    get onmouseout() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmouseout');
    }
    set onmouseout(value) {
        this[PropertySymbol.propertyEventListeners].set('onmouseout', value);
    }
    get onmouseover() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmouseover');
    }
    set onmouseover(value) {
        this[PropertySymbol.propertyEventListeners].set('onmouseover', value);
    }
    get onmouseup() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onmouseup');
    }
    set onmouseup(value) {
        this[PropertySymbol.propertyEventListeners].set('onmouseup', value);
    }
    get ontouchcancel() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontouchcancel');
    }
    set ontouchcancel(value) {
        this[PropertySymbol.propertyEventListeners].set('ontouchcancel', value);
    }
    get ontouchend() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontouchend');
    }
    set ontouchend(value) {
        this[PropertySymbol.propertyEventListeners].set('ontouchend', value);
    }
    get ontouchmove() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontouchmove');
    }
    set ontouchmove(value) {
        this[PropertySymbol.propertyEventListeners].set('ontouchmove', value);
    }
    get ontouchstart() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontouchstart');
    }
    set ontouchstart(value) {
        this[PropertySymbol.propertyEventListeners].set('ontouchstart', value);
    }
    get oninvalid() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oninvalid');
    }
    set oninvalid(value) {
        this[PropertySymbol.propertyEventListeners].set('oninvalid', value);
    }
    get onanimationcancel() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onanimationcancel');
    }
    set onanimationcancel(value) {
        this[PropertySymbol.propertyEventListeners].set('onanimationcancel', value);
    }
    get onanimationend() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onanimationend');
    }
    set onanimationend(value) {
        this[PropertySymbol.propertyEventListeners].set('onanimationend', value);
    }
    get onanimationiteration() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onanimationiteration');
    }
    set onanimationiteration(value) {
        this[PropertySymbol.propertyEventListeners].set('onanimationiteration', value);
    }
    get onanimationstart() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onanimationstart');
    }
    set onanimationstart(value) {
        this[PropertySymbol.propertyEventListeners].set('onanimationstart', value);
    }
    get onbeforeinput() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onbeforeinput');
    }
    set onbeforeinput(value) {
        this[PropertySymbol.propertyEventListeners].set('onbeforeinput', value);
    }
    get oninput() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'oninput');
    }
    set oninput(value) {
        this[PropertySymbol.propertyEventListeners].set('oninput', value);
    }
    get onchange() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onchange');
    }
    set onchange(value) {
        this[PropertySymbol.propertyEventListeners].set('onchange', value);
    }
    get ongotpointercapture() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ongotpointercapture');
    }
    set ongotpointercapture(value) {
        this[PropertySymbol.propertyEventListeners].set('ongotpointercapture', value);
    }
    get onlostpointercapture() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onlostpointercapture');
    }
    set onlostpointercapture(value) {
        this[PropertySymbol.propertyEventListeners].set('onlostpointercapture', value);
    }
    get onpointercancel() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointercancel');
    }
    set onpointercancel(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointercancel', value);
    }
    get onpointerdown() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointerdown');
    }
    set onpointerdown(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointerdown', value);
    }
    get onpointerenter() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointerenter');
    }
    set onpointerenter(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointerenter', value);
    }
    get onpointerleave() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointerleave');
    }
    set onpointerleave(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointerleave', value);
    }
    get onpointermove() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointermove');
    }
    set onpointermove(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointermove', value);
    }
    get onpointerout() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointerout');
    }
    set onpointerout(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointerout', value);
    }
    get onpointerover() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointerover');
    }
    set onpointerover(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointerover', value);
    }
    get onpointerup() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'onpointerup');
    }
    set onpointerup(value) {
        this[PropertySymbol.propertyEventListeners].set('onpointerup', value);
    }
    get ontransitioncancel() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontransitioncancel');
    }
    set ontransitioncancel(value) {
        this[PropertySymbol.propertyEventListeners].set('ontransitioncancel', value);
    }
    get ontransitionend() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontransitionend');
    }
    set ontransitionend(value) {
        this[PropertySymbol.propertyEventListeners].set('ontransitionend', value);
    }
    get ontransitionrun() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontransitionrun');
    }
    set ontransitionrun(value) {
        this[PropertySymbol.propertyEventListeners].set('ontransitionrun', value);
    }
    get ontransitionstart() {
        return ElementEventAttributeUtility_js_1.default.getEventListener(this, 'ontransitionstart');
    }
    set ontransitionstart(value) {
        this[PropertySymbol.propertyEventListeners].set('ontransitionstart', value);
    }
    /* eslint-enable jsdoc/require-jsdoc */
    /**
     * Returns access key.
     *
     * @returns Access key.
     */
    get accessKey() {
        return this[PropertySymbol.accessKey];
    }
    /**
     * Sets access key.
     *
     * @param accessKey Access key.
     */
    set accessKey(accessKey) {
        this[PropertySymbol.accessKey] = accessKey;
    }
    /**
     * Returns content editable.
     *
     * @returns Content editable.
     */
    get contentEditable() {
        const contentEditable = String(this.getAttribute('contentEditable')).toLowerCase();
        switch (contentEditable) {
            case 'false':
            case 'true':
            case 'plaintext-only':
                return contentEditable;
            default:
                return 'inherit';
        }
    }
    /**
     * Sets content editable.
     *
     * @param contentEditable Content editable.
     */
    set contentEditable(contentEditable) {
        contentEditable = String(contentEditable).toLowerCase();
        switch (contentEditable) {
            case 'false':
            case 'true':
            case 'plaintext-only':
            case 'inherit':
                this.setAttribute('contentEditable', contentEditable);
                break;
            default:
                throw new this[PropertySymbol.window].SyntaxError(`Failed to set the 'contentEditable' property on 'HTMLElement': The value provided ('${contentEditable}') is not one of 'true', 'false', 'plaintext-only', or 'inherit'.`);
        }
    }
    /**
     * Returns is content editable.
     *
     * @returns Is content editable.
     */
    get isContentEditable() {
        const contentEditable = this.contentEditable;
        if (contentEditable === 'true' || contentEditable === 'plaintext-only') {
            return true;
        }
        if (contentEditable === 'inherit') {
            return this[PropertySymbol.parentNode]?.isContentEditable ?? false;
        }
        return false;
    }
    /**
     * Returns offset height.
     *
     * @returns Offset height.
     */
    get offsetHeight() {
        return this[PropertySymbol.offsetHeight];
    }
    /**
     * Returns offset width.
     *
     * @returns Offset width.
     */
    get offsetWidth() {
        return this[PropertySymbol.offsetWidth];
    }
    /**
     * Returns offset left.
     *
     * @returns Offset left.
     */
    get offsetLeft() {
        return this[PropertySymbol.offsetLeft];
    }
    /**
     * Returns offset top.
     *
     * @returns Offset top.
     */
    get offsetTop() {
        return this[PropertySymbol.offsetTop];
    }
    /**
     * Returns client height.
     *
     * @returns Client height.
     */
    get clientHeight() {
        return this[PropertySymbol.clientHeight];
    }
    /**
     * Returns client width.
     *
     * @returns Client width.
     */
    get clientWidth() {
        return this[PropertySymbol.clientWidth];
    }
    /**
     * Returns client left.
     *
     * @returns Client left.
     */
    get clientLeft() {
        return this[PropertySymbol.clientLeft];
    }
    /**
     * Returns client top.
     *
     * @returns Client top.
     */
    get clientTop() {
        return this[PropertySymbol.clientTop];
    }
    /**
     * Returns tab index.
     *
     * @returns Tab index.
     */
    get tabIndex() {
        const tabIndex = this.getAttribute('tabindex');
        if (tabIndex !== null) {
            const parsed = Number(tabIndex);
            return isNaN(parsed) ? -1 : parsed;
        }
        return -1;
    }
    /**
     * Returns tab index.
     *
     * @param tabIndex Tab index.
     */
    set tabIndex(tabIndex) {
        const parsed = Number(tabIndex);
        if (isNaN(parsed)) {
            this.setAttribute('tabindex', '0');
        }
        else {
            this.setAttribute('tabindex', String(parsed));
        }
    }
    /**
     * Returns inner text, which is the rendered appearance of text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @returns Inner text.
     */
    get innerText() {
        if (!this[PropertySymbol.isConnected]) {
            return this.textContent;
        }
        let result = '';
        for (const childNode of this[PropertySymbol.nodeArray]) {
            if (childNode[PropertySymbol.nodeType] === NodeTypeEnum_js_1.default.elementNode) {
                const childElement = childNode;
                const computedStyle = this[PropertySymbol.window].getComputedStyle(childElement);
                if (childElement[PropertySymbol.tagName] !== 'SCRIPT' &&
                    childElement[PropertySymbol.tagName] !== 'STYLE' &&
                    childElement[PropertySymbol.tagName] !== 'svg') {
                    const display = computedStyle.display;
                    if (display !== 'none') {
                        const textTransform = computedStyle.textTransform;
                        const innerText = childElement.innerText;
                        // Only add newline if it's a block/flex element and there's more content coming after
                        if ((display === 'block' || display === 'flex') && result && innerText) {
                            result += '\n';
                        }
                        let text = innerText;
                        switch (textTransform) {
                            case 'uppercase':
                                text = text.toUpperCase();
                                break;
                            case 'lowercase':
                                text = text.toLowerCase();
                                break;
                            case 'capitalize':
                                text = text.replace(/(^|\s)\S/g, (l) => l.toUpperCase());
                                break;
                        }
                        result += text;
                    }
                }
            }
            else if (childNode[PropertySymbol.nodeType] === NodeTypeEnum_js_1.default.textNode) {
                result += childNode.textContent.replace(/[\n\r]/, '');
            }
        }
        return result;
    }
    /**
     * Sets the inner text, which is the rendered appearance of text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @param innerText Inner text.
     */
    set innerText(text) {
        const childNodes = this[PropertySymbol.nodeArray];
        while (childNodes.length) {
            this.removeChild(childNodes[0]);
        }
        const texts = text.split(/[\n\r]/);
        const ownerDocument = this[PropertySymbol.ownerDocument];
        for (let i = 0, max = texts.length; i < max; i++) {
            if (i !== 0) {
                this.appendChild(ownerDocument.createElement('br'));
            }
            this.appendChild(ownerDocument.createTextNode(texts[i]));
        }
    }
    /**
     * Returns outer text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @returns HTML.
     */
    get outerText() {
        return this.innerText;
    }
    /**
     * Sets outer text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @param text Text.
     */
    set outerText(text) {
        if (!this[PropertySymbol.parentNode]) {
            throw new this[PropertySymbol.window].DOMException("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
        }
        const texts = text.split(/[\n\r]/);
        for (let i = 0, max = texts.length; i < max; i++) {
            if (i !== 0) {
                this[PropertySymbol.parentNode].insertBefore(this[PropertySymbol.ownerDocument].createElement('br'), this);
            }
            this[PropertySymbol.parentNode].insertBefore(this[PropertySymbol.ownerDocument].createTextNode(texts[i]), this);
        }
        this[PropertySymbol.parentNode].removeChild(this);
    }
    /**
     * Returns style.
     *
     * @returns Style.
     */
    get style() {
        if (!this[PropertySymbol.style]) {
            this[PropertySymbol.style] = new CSSStyleDeclaration_js_1.default(PropertySymbol.illegalConstructor, this[PropertySymbol.window], { element: this });
        }
        return this[PropertySymbol.style];
    }
    /**
     * Sets style.
     *
     * @param cssText Style as text.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#setting_styles
     */
    set style(cssText) {
        this.style.cssText = typeof cssText === 'string' ? cssText : '';
    }
    /**
     * Returns data set.
     *
     * @returns Data set.
     */
    get dataset() {
        return (this[PropertySymbol.dataset] ??= new DOMStringMap_js_1.default(PropertySymbol.illegalConstructor, this));
    }
    /**
     * Returns direction.
     *
     * @returns Direction.
     */
    get dir() {
        return this.getAttribute('dir') || '';
    }
    /**
     * Returns direction.
     *
     * @param direction Direction.
     */
    set dir(direction) {
        this.setAttribute('dir', direction);
    }
    /**
     * Returns hidden.
     *
     * @returns Hidden.
     */
    get hidden() {
        return this.getAttribute('hidden') !== null;
    }
    /**
     * Returns hidden.
     *
     * @param hidden Hidden.
     */
    set hidden(hidden) {
        if (!hidden) {
            this.removeAttribute('hidden');
        }
        else {
            this.setAttribute('hidden', '');
        }
    }
    /**
     * Returns inert.
     *
     * @returns Inert.
     */
    get inert() {
        return this.getAttribute('inert') !== null;
    }
    /**
     * Returns inert.
     *
     * @param inert Inert.
     */
    set inert(inert) {
        if (!inert) {
            this.removeAttribute('inert');
        }
        else {
            this.setAttribute('inert', '');
        }
    }
    /**
     * Returns language.
     *
     * @returns Language.
     */
    get lang() {
        return this.getAttribute('lang') || '';
    }
    /**
     * Returns language.
     *
     * @param language Language.
     */
    set lang(lang) {
        this.setAttribute('lang', lang);
    }
    /**
     * Returns title.
     *
     * @returns Title.
     */
    get title() {
        return this.getAttribute('title') || '';
    }
    /**
     * Returns title.
     *
     * @param title Title.
     */
    set title(title) {
        this.setAttribute('title', title);
    }
    /**
     * Returns popover.
     *
     * @returns Popover.
     */
    get popover() {
        const value = this.getAttribute('popover');
        switch (value) {
            case null:
                return null;
            case '':
            case 'auto':
                return 'auto';
            case 'manual':
                return 'manual';
            default:
                return 'manual';
        }
    }
    /**
     * Sets popover.
     *
     * @param value Value.
     */
    set popover(value) {
        if (value === null) {
            this.removeAttribute('popover');
            return;
        }
        this.setAttribute('popover', value);
    }
    /**
     * Triggers a click event.
     */
    click() {
        this.dispatchEvent(new PointerEvent_js_1.default('click', {
            bubbles: true,
            composed: true,
            cancelable: true
        }));
    }
    /**
     * Triggers a blur event.
     */
    blur() {
        HTMLElementUtility_js_1.default.blur(this);
    }
    /**
     * Triggers a focus event.
     */
    focus() {
        HTMLElementUtility_js_1.default.focus(this);
    }
    /**
     * @override
     */
    [PropertySymbol.cloneNode](deep = false) {
        const clone = super[PropertySymbol.cloneNode](deep);
        clone[PropertySymbol.accessKey] = this[PropertySymbol.accessKey];
        return clone;
    }
    /**
     * @override
     * @see https://html.spec.whatwg.org/multipage/dom.html#htmlelement
     */
    [PropertySymbol.connectedToNode]() {
        const window = this[PropertySymbol.window];
        const localName = this[PropertySymbol.localName];
        const allCallbacks = window.customElements[PropertySymbol.callbacks];
        // This element can potentially be a custom element that has not been defined yet
        // Therefore we need to register a callback for when it is defined in CustomElementRegistry and replace it with the registered element (see #404)
        if (this.constructor === window.HTMLElement && localName.includes('-') && allCallbacks) {
            if (!this.#customElementDefineCallback) {
                const callback = this.#onCustomElementConnected.bind(this);
                const callbacks = allCallbacks.get(localName);
                if (callbacks) {
                    callbacks.unshift(callback);
                }
                else {
                    allCallbacks.set(localName, [callback]);
                }
                this.#customElementDefineCallback = callback;
            }
        }
        super[PropertySymbol.connectedToNode]();
    }
    /**
     * @override
     */
    [PropertySymbol.disconnectedFromNode]() {
        const window = this[PropertySymbol.window];
        const localName = this[PropertySymbol.localName];
        const allCallbacks = window.customElements[PropertySymbol.callbacks];
        // This element can potentially be a custom element that has not been defined yet
        // Therefore we need to register a callback for when it is defined in CustomElementRegistry and replace it with the registered element (see #404)
        if (this.constructor === window.HTMLElement && localName.includes('-') && allCallbacks) {
            const callbacks = allCallbacks.get(localName);
            if (callbacks && this.#customElementDefineCallback) {
                const index = callbacks.indexOf(this.#customElementDefineCallback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
                if (!callbacks.length) {
                    allCallbacks.delete(localName);
                }
                this.#customElementDefineCallback = null;
            }
        }
        super[PropertySymbol.disconnectedFromNode]();
    }
    /**
     * @override
     */
    [PropertySymbol.onSetAttribute](attribute, replacedAttribute) {
        super[PropertySymbol.onSetAttribute](attribute, replacedAttribute);
        this[PropertySymbol.window][PropertySymbol.customElementReactionStack].enqueueReaction(this, 'attributeChangedCallback', [attribute.name, replacedAttribute?.value ?? null, attribute.value]);
    }
    /**
     * @override
     */
    [PropertySymbol.onRemoveAttribute](removedAttribute) {
        super[PropertySymbol.onRemoveAttribute](removedAttribute);
        this[PropertySymbol.window][PropertySymbol.customElementReactionStack].enqueueReaction(this, 'attributeChangedCallback', [removedAttribute.name, removedAttribute.value, null]);
    }
    /**
     * Triggered when a custom element is connected to the DOM.
     */
    #onCustomElementConnected() {
        if (!this[PropertySymbol.parentNode]) {
            return;
        }
        const window = this[PropertySymbol.window];
        const localName = this[PropertySymbol.localName];
        const newElement = this[PropertySymbol.ownerDocument].createElement(localName);
        const newCache = newElement[PropertySymbol.cache];
        newElement[PropertySymbol.nodeArray] = this[PropertySymbol.nodeArray];
        newElement[PropertySymbol.elementArray] = this[PropertySymbol.elementArray];
        newElement[PropertySymbol.childNodes] = null;
        newElement[PropertySymbol.children] = null;
        newElement[PropertySymbol.isConnected] = this[PropertySymbol.isConnected];
        newElement[PropertySymbol.rootNode] = this[PropertySymbol.rootNode];
        newElement[PropertySymbol.formNode] = this[PropertySymbol.formNode];
        newElement[PropertySymbol.parentNode] = this[PropertySymbol.parentNode];
        newElement[PropertySymbol.selectNode] = this[PropertySymbol.selectNode];
        newElement[PropertySymbol.textAreaNode] = this[PropertySymbol.textAreaNode];
        newElement[PropertySymbol.mutationListeners] = this[PropertySymbol.mutationListeners];
        newElement[PropertySymbol.isValue] = this[PropertySymbol.isValue];
        newElement[PropertySymbol.cache] = this[PropertySymbol.cache];
        newElement[PropertySymbol.affectsCache] = this[PropertySymbol.affectsCache];
        newElement[PropertySymbol.attributes][PropertySymbol.itemsByNamespaceURI] =
            this[PropertySymbol.attributes][PropertySymbol.itemsByNamespaceURI];
        newElement[PropertySymbol.attributes][PropertySymbol.itemsByName] =
            this[PropertySymbol.attributes][PropertySymbol.itemsByName];
        newElement[PropertySymbol.attributes][PropertySymbol.items] =
            this[PropertySymbol.attributes][PropertySymbol.items];
        for (const attr of newElement[PropertySymbol.attributes][PropertySymbol.items].values()) {
            attr[PropertySymbol.ownerElement] = newElement;
        }
        this[PropertySymbol.clearCache]();
        this[PropertySymbol.nodeArray] = [];
        this[PropertySymbol.elementArray] = [];
        this[PropertySymbol.childNodes] = null;
        this[PropertySymbol.children] = null;
        this[PropertySymbol.parentNode] = null;
        this[PropertySymbol.rootNode] = null;
        this[PropertySymbol.formNode] = null;
        this[PropertySymbol.selectNode] = null;
        this[PropertySymbol.textAreaNode] = null;
        this[PropertySymbol.mutationListeners] = [];
        this[PropertySymbol.isValue] = null;
        this[PropertySymbol.cache] = newCache;
        this[PropertySymbol.affectsCache] = [];
        this[PropertySymbol.attributes][PropertySymbol.itemsByNamespaceURI] = new Map();
        this[PropertySymbol.attributes][PropertySymbol.itemsByName] = new Map();
        this[PropertySymbol.attributes][PropertySymbol.items] = new Map();
        for (const node of newElement[PropertySymbol.nodeArray]) {
            node[PropertySymbol.parentNode] = newElement;
        }
        const parentChildNodes = newElement[PropertySymbol.parentNode][PropertySymbol.nodeArray];
        const parentChildElements = newElement[PropertySymbol.parentNode][PropertySymbol.elementArray];
        parentChildNodes[parentChildNodes.indexOf(this)] = newElement;
        parentChildElements[parentChildElements.indexOf(this)] = newElement;
        const allCallbacks = window.customElements[PropertySymbol.callbacks];
        const callbacks = allCallbacks.get(localName);
        if (callbacks && this.#customElementDefineCallback) {
            const index = callbacks.indexOf(this.#customElementDefineCallback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
            if (!callbacks.length) {
                allCallbacks.delete(localName);
            }
            this.#customElementDefineCallback = null;
        }
        if (newElement[PropertySymbol.isConnected]) {
            if (newElement[PropertySymbol.shadowRoot]) {
                newElement[PropertySymbol.shadowRoot][PropertySymbol.isConnected] = true;
            }
            newElement[PropertySymbol.connectedToDocument]();
        }
    }
}
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.cjs.map