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
const DOMStringMapUtility_js_1 = __importDefault(require("./DOMStringMapUtility.cjs"));
/**
 * Dataset factory.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
 */
class DOMStringMap {
    /**
     * Constructor.
     *
     * @param illegalConstructorSymbol Illegal constructor symbol.
     * @param element Element.
     */
    constructor(illegalConstructorSymbol, element) {
        if (illegalConstructorSymbol !== PropertySymbol.illegalConstructor) {
            throw new TypeError('Illegal constructor');
        }
        // Documentation for Proxy:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        return new Proxy(this, {
            get(_target, property) {
                const attribute = element.getAttribute('data-' + DOMStringMapUtility_js_1.default.camelCaseToKebab(property));
                if (attribute !== null) {
                    return attribute;
                }
            },
            set(_target, property, value) {
                element.setAttribute('data-' + DOMStringMapUtility_js_1.default.camelCaseToKebab(property), value);
                return true;
            },
            deleteProperty(_target, property) {
                element.removeAttribute('data-' + DOMStringMapUtility_js_1.default.camelCaseToKebab(property));
                return true;
            },
            ownKeys(_target) {
                // According to Mozilla we have to update the dataset object (target) to contain the same keys as what we return:
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
                // "The result List must contain the keys of all non-configurable own properties of the target object."
                const keys = [];
                for (const items of element[PropertySymbol.attributes][PropertySymbol.itemsByName].values()) {
                    if (items[0][PropertySymbol.name].startsWith('data-')) {
                        keys.push(DOMStringMapUtility_js_1.default.kebabToCamelCase(items[0][PropertySymbol.name].replace('data-', '')));
                    }
                }
                return keys;
            },
            has(_target, property) {
                return element.hasAttribute('data-' + DOMStringMapUtility_js_1.default.camelCaseToKebab(property));
            },
            defineProperty(_target, property, descriptor) {
                if (descriptor.value === undefined) {
                    return false;
                }
                element.setAttribute('data-' + DOMStringMapUtility_js_1.default.camelCaseToKebab(property), descriptor.value);
                return true;
            },
            getOwnPropertyDescriptor(_target, property) {
                const attribute = element.getAttribute('data-' + DOMStringMapUtility_js_1.default.camelCaseToKebab(property));
                if (!attribute) {
                    return;
                }
                return {
                    value: attribute,
                    writable: true,
                    enumerable: true,
                    configurable: true
                };
            }
        });
    }
}
exports.default = DOMStringMap;
//# sourceMappingURL=DOMStringMap.cjs.map