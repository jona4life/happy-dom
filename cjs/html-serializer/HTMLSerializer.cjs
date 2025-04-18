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
const PropertySymbol = __importStar(require("../PropertySymbol.cjs"));
const Node_js_1 = __importDefault(require("../nodes/node/Node.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("../nodes/node/NodeTypeEnum.cjs"));
const HTMLElementConfig_js_1 = __importDefault(require("../config/HTMLElementConfig.cjs"));
const HTMLElementConfigContentModelEnum_js_1 = __importDefault(require("../config/HTMLElementConfigContentModelEnum.cjs"));
const XMLEncodeUtility_js_1 = __importDefault(require("../utilities/XMLEncodeUtility.cjs"));
/**
 * Serializes a node into HTML.
 */
class HTMLSerializer {
    options = {
        serializableShadowRoots: false,
        shadowRoots: null,
        allShadowRoots: false
    };
    /**
     * Constructor.
     *
     * @param [options] Options.
     * @param [options.serializableShadowRoots] If shadow roots should be serialized.
     * @param [options.shadowRoots] Shadow roots to serialize.
     * @param [options.allShadowRoots] If all shadow roots should be serialized.
     */
    constructor(options) {
        if (options) {
            if (options.serializableShadowRoots) {
                this.options.serializableShadowRoots = options.serializableShadowRoots;
            }
            if (options.shadowRoots) {
                this.options.shadowRoots = options.shadowRoots;
            }
            if (options.allShadowRoots) {
                this.options.allShadowRoots = options.allShadowRoots;
            }
        }
    }
    /**
     * Renders an element as HTML.
     *
     * @param root Root element.
     * @returns Result.
     */
    serializeToString(root) {
        switch (root[PropertySymbol.nodeType]) {
            case NodeTypeEnum_js_1.default.elementNode:
                const element = root;
                const prefix = element[PropertySymbol.prefix];
                const localName = element[PropertySymbol.localName];
                const config = HTMLElementConfig_js_1.default[element[PropertySymbol.localName]];
                const tagName = prefix ? `${prefix}:${localName}` : localName;
                if (config?.contentModel === HTMLElementConfigContentModelEnum_js_1.default.noDescendants) {
                    return `<${tagName}${this.getAttributes(element)}>`;
                }
                let innerHTML = '';
                // TODO: Should we include closed shadow roots? We are currently only including open shadow roots.
                if (element.shadowRoot &&
                    (this.options.allShadowRoots ||
                        (this.options.serializableShadowRoots &&
                            element.shadowRoot[PropertySymbol.serializable]) ||
                        this.options.shadowRoots?.includes(element.shadowRoot))) {
                    innerHTML += `<template shadowrootmode="${element.shadowRoot[PropertySymbol.mode]}"${element.shadowRoot[PropertySymbol.serializable] ? ' shadowrootserializable=""' : ''}>`;
                    for (const node of element.shadowRoot[PropertySymbol.nodeArray]) {
                        innerHTML += this.serializeToString(node);
                    }
                    innerHTML += '</template>';
                }
                const childNodes = tagName === 'template'
                    ? root.content[PropertySymbol.nodeArray]
                    : root[PropertySymbol.nodeArray];
                for (const node of childNodes) {
                    innerHTML += this.serializeToString(node);
                }
                return `<${tagName}${this.getAttributes(element)}>${innerHTML}</${tagName}>`;
            case Node_js_1.default.DOCUMENT_FRAGMENT_NODE:
            case Node_js_1.default.DOCUMENT_NODE:
                let html = '';
                for (const node of root[PropertySymbol.nodeArray]) {
                    html += this.serializeToString(node);
                }
                return html;
            case NodeTypeEnum_js_1.default.commentNode:
                return `<!--${root.textContent}-->`;
            case NodeTypeEnum_js_1.default.processingInstructionNode:
                return `<!--?${root.target} ${root.textContent}?-->`;
            case NodeTypeEnum_js_1.default.textNode:
                const parentElement = root.parentElement;
                if (parentElement) {
                    const parentConfig = HTMLElementConfig_js_1.default[parentElement[PropertySymbol.localName]];
                    if (parentConfig?.contentModel === HTMLElementConfigContentModelEnum_js_1.default.rawText) {
                        return root.textContent;
                    }
                }
                return XMLEncodeUtility_js_1.default.encodeTextContent(root.textContent);
            case NodeTypeEnum_js_1.default.documentTypeNode:
                const doctype = root;
                const identifier = doctype.publicId ? ' PUBLIC' : doctype.systemId ? ' SYSTEM' : '';
                const publicId = doctype.publicId ? ` "${doctype.publicId}"` : '';
                const systemId = doctype.systemId ? ` "${doctype.systemId}"` : '';
                return `<!DOCTYPE ${doctype.name}${identifier}${publicId}${systemId}>`;
        }
        return '';
    }
    /**
     * Returns attributes as a string.
     *
     * @param element Element.
     * @returns Attributes.
     */
    getAttributes(element) {
        let attributeString = '';
        const attributes = element[PropertySymbol.attributes][PropertySymbol.items];
        if (!attributes.has(':is') && element[PropertySymbol.isValue]) {
            attributeString +=
                ' is="' + XMLEncodeUtility_js_1.default.encodeHTMLAttributeValue(element[PropertySymbol.isValue]) + '"';
        }
        for (const attribute of attributes.values()) {
            const escapedValue = XMLEncodeUtility_js_1.default.encodeHTMLAttributeValue(attribute[PropertySymbol.value]);
            attributeString += ' ' + attribute[PropertySymbol.name] + '="' + escapedValue + '"';
        }
        return attributeString;
    }
}
exports.default = HTMLSerializer;
//# sourceMappingURL=HTMLSerializer.cjs.map