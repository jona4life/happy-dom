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
const NamespaceURI_js_1 = __importDefault(require("../config/NamespaceURI.cjs"));
const StringUtility_js_1 = __importDefault(require("../utilities/StringUtility.cjs"));
const CustomElementUtility_js_1 = __importDefault(require("./CustomElementUtility.cjs"));
/**
 * Custom elements registry.
 */
class CustomElementRegistry {
    [PropertySymbol.registry] = new Map();
    [PropertySymbol.classRegistry] = new Map();
    [PropertySymbol.callbacks] = new Map();
    [PropertySymbol.destroyed] = false;
    #window;
    /**
     * Constructor.
     *
     * @param window Window.
     */
    constructor(window) {
        if (!window) {
            throw new TypeError('Illegal constructor');
        }
        this.#window = window;
    }
    /**
     * Defines a custom element class.
     *
     * @param name Tag name of element.
     * @param elementClass Element class.
     * @param [options] Options.
     * @param [options.extends] Extends tag name.
     */
    define(name, elementClass, options) {
        if (this[PropertySymbol.destroyed]) {
            return;
        }
        if (!CustomElementUtility_js_1.default.isValidCustomElementName(name)) {
            throw new this.#window.DOMException(`Failed to execute 'define' on 'CustomElementRegistry': "${name}" is not a valid custom element name`);
        }
        if (this[PropertySymbol.registry].has(name)) {
            throw new this.#window.DOMException(`Failed to execute 'define' on 'CustomElementRegistry': the name "${name}" has already been used with this registry`);
        }
        if (this[PropertySymbol.classRegistry].has(elementClass)) {
            throw new this.#window.DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");
        }
        const tagName = StringUtility_js_1.default.asciiUpperCase(name);
        elementClass.prototype[PropertySymbol.window] = this.#window;
        elementClass.prototype[PropertySymbol.ownerDocument] = this.#window.document;
        elementClass.prototype[PropertySymbol.tagName] = tagName;
        elementClass.prototype[PropertySymbol.localName] = name;
        elementClass.prototype[PropertySymbol.namespaceURI] = NamespaceURI_js_1.default.html;
        // ObservedAttributes should only be called once by CustomElementRegistry (see #117)
        const observedAttributes = new Set();
        const elementObservervedAttributes = elementClass.observedAttributes;
        if (Array.isArray(elementObservervedAttributes)) {
            for (const attribute of elementObservervedAttributes) {
                observedAttributes.add(String(attribute).toLowerCase());
            }
        }
        this[PropertySymbol.registry].set(name, {
            elementClass,
            extends: options && options.extends ? options.extends.toLowerCase() : null,
            observedAttributes,
            livecycleCallbacks: {
                connectedCallback: elementClass.prototype.connectedCallback,
                disconnectedCallback: elementClass.prototype.disconnectedCallback,
                attributeChangedCallback: elementClass.prototype.attributeChangedCallback
            }
        });
        this[PropertySymbol.classRegistry].set(elementClass, name);
        const callbacks = this[PropertySymbol.callbacks].get(name);
        if (callbacks) {
            this[PropertySymbol.callbacks].delete(name);
            for (const callback of callbacks) {
                callback();
            }
        }
    }
    /**
     * Returns a defined element class.
     *
     * @param name Tag name of element.
     * @returns HTMLElement Class defined or undefined.
     */
    get(name) {
        return this[PropertySymbol.registry].get(name)?.elementClass;
    }
    /**
     * Upgrades a custom element directly, even before it is connected to its shadow root.
     *
     * Not implemented yet.
     *
     * @param _root Root node.
     */
    upgrade(_root) {
        // Do nothing
    }
    /**
     * When defined.
     *
     * @param name Tag name of element.
     */
    whenDefined(name) {
        if (this[PropertySymbol.destroyed]) {
            return Promise.reject(new this.#window.DOMException(`Failed to execute 'whenDefined' on 'CustomElementRegistry': The custom element registry has been destroyed.`));
        }
        if (!CustomElementUtility_js_1.default.isValidCustomElementName(name)) {
            return Promise.reject(new this.#window.DOMException(`Failed to execute 'whenDefined' on 'CustomElementRegistry': Invalid custom element name: "${name}"`));
        }
        if (this.get(name)) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            const callbacks = this[PropertySymbol.callbacks].get(name);
            if (callbacks) {
                callbacks.push(resolve);
            }
            else {
                this[PropertySymbol.callbacks].set(name, [resolve]);
            }
        });
    }
    /**
     * Reverse lookup searching for name by given element class.
     *
     * @param elementClass Class constructor.
     * @returns Found tag name or `null`.
     */
    getName(elementClass) {
        return this[PropertySymbol.classRegistry].get(elementClass) || null;
    }
    /**
     * Destroys the registry.
     */
    [PropertySymbol.destroy]() {
        this[PropertySymbol.destroyed] = true;
        for (const definition of this[PropertySymbol.registry].values()) {
            definition.elementClass.prototype[PropertySymbol.window] = null;
            definition.elementClass.prototype[PropertySymbol.ownerDocument] = null;
            definition.elementClass.prototype[PropertySymbol.tagName] = null;
            definition.elementClass.prototype[PropertySymbol.localName] = null;
            definition.elementClass.prototype[PropertySymbol.namespaceURI] = null;
        }
        this[PropertySymbol.registry] = new Map();
        this[PropertySymbol.classRegistry] = new Map();
        this[PropertySymbol.callbacks] = new Map();
    }
}
exports.default = CustomElementRegistry;
//# sourceMappingURL=CustomElementRegistry.cjs.map