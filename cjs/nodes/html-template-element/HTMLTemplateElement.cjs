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
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
const HTMLSerializer_js_1 = __importDefault(require("../../html-serializer/HTMLSerializer.cjs"));
const HTMLParser_js_1 = __importDefault(require("../../html-parser/HTMLParser.cjs"));
/**
 * HTML Template Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement.
 */
class HTMLTemplateElement extends HTMLElement_js_1.default {
    // Internal properties
    [PropertySymbol.content] = this[PropertySymbol.ownerDocument].createDocumentFragment();
    /**
     * Returns content.
     *
     * @returns Content.
     */
    get content() {
        return this[PropertySymbol.content];
    }
    /**
     * @override
     */
    get innerHTML() {
        return this.getHTML();
    }
    /**
     * @override
     */
    set innerHTML(html) {
        const content = this[PropertySymbol.content];
        const childNodes = content[PropertySymbol.nodeArray];
        while (childNodes.length) {
            content.removeChild(childNodes[0]);
        }
        new HTMLParser_js_1.default(this[PropertySymbol.window]).parse(html, this[PropertySymbol.content]);
    }
    /**
     * @override
     */
    get firstChild() {
        return this[PropertySymbol.content].firstChild;
    }
    /**
     * @override
     */
    get lastChild() {
        return this[PropertySymbol.content].lastChild;
    }
    /**
     * @deprecated
     * @override
     */
    getInnerHTML(_options) {
        const serializer = new HTMLSerializer_js_1.default();
        // Options should be ignored as shadow roots should not be serialized for HTMLTemplateElement.
        const content = this[PropertySymbol.content];
        let html = '';
        for (const node of content[PropertySymbol.nodeArray]) {
            html += serializer.serializeToString(node);
        }
        return html;
    }
    /**
     * @override
     */
    getHTML(_options) {
        const serializer = new HTMLSerializer_js_1.default();
        // Options should be ignored as shadow roots should not be serialized for HTMLTemplateElement.
        const content = this[PropertySymbol.content];
        let html = '';
        for (const node of content[PropertySymbol.nodeArray]) {
            html += serializer.serializeToString(node);
        }
        return html;
    }
    /**
     * @override
     */
    [PropertySymbol.appendChild](node, disableValidations = false) {
        return this[PropertySymbol.content][PropertySymbol.appendChild](node, disableValidations);
    }
    /**
     * @override
     */
    [PropertySymbol.removeChild](node) {
        return this[PropertySymbol.content][PropertySymbol.removeChild](node);
    }
    /**
     * @override
     */
    [PropertySymbol.insertBefore](newNode, referenceNode, disableValidations = false) {
        return this[PropertySymbol.content][PropertySymbol.insertBefore](newNode, referenceNode, disableValidations);
    }
    /**
     * @override
     */
    [PropertySymbol.replaceChild](newChild, oldChild) {
        return this[PropertySymbol.content][PropertySymbol.replaceChild](newChild, oldChild);
    }
    /**
     * @override
     */
    [PropertySymbol.cloneNode](deep = false) {
        const clone = super[PropertySymbol.cloneNode](deep);
        clone[PropertySymbol.content] = this[PropertySymbol.content].cloneNode(deep);
        return clone;
    }
}
exports.default = HTMLTemplateElement;
//# sourceMappingURL=HTMLTemplateElement.cjs.map