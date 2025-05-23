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
const ValidityState_js_1 = __importDefault(require("../../validity-state/ValidityState.cjs"));
const HTMLLabelElementUtility_js_1 = __importDefault(require("../html-label-element/HTMLLabelElementUtility.cjs"));
/**
 * HTMLOutputElement
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement
 */
class HTMLOutputElement extends HTMLElement_js_1.default {
    [PropertySymbol.formNode] = null;
    [PropertySymbol.validationMessage] = '';
    [PropertySymbol.validity] = new ValidityState_js_1.default(this);
    [PropertySymbol.defaultValue] = '';
    /**
     * Returns default value.
     *
     * @returns Default value.
     */
    get defaultValue() {
        return this[PropertySymbol.defaultValue];
    }
    /**
     * Sets default value.
     *
     * @param defaultValue Default value.
     */
    set defaultValue(defaultValue) {
        this[PropertySymbol.defaultValue] = defaultValue;
    }
    /**
     * Returns the parent form element.
     *
     * @returns Form.
     */
    get form() {
        if (this[PropertySymbol.formNode]) {
            return this[PropertySymbol.formNode];
        }
        const id = this.getAttribute('form');
        if (!id || !this[PropertySymbol.isConnected]) {
            return null;
        }
        return this[PropertySymbol.ownerDocument].getElementById(id);
    }
    /**
     * Returns a string containing the ID of the labeled control. This reflects the "for" attribute.
     *
     * @returns ID of the labeled control.
     */
    get htmlFor() {
        return this.getAttribute('for') || '';
    }
    /**
     * Sets a string containing the ID of the labeled control. This reflects the "for" attribute.
     *
     * @param htmlFor ID of the labeled control.
     */
    set htmlFor(htmlFor) {
        this.setAttribute('for', htmlFor);
    }
    /**
     * Returns the associated label elements.
     *
     * @returns Label elements.
     */
    get labels() {
        return HTMLLabelElementUtility_js_1.default.getAssociatedLabelElements(this);
    }
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name() {
        return this.getAttribute('name') || '';
    }
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * Returns value.
     *
     * @returns Value.
     */
    get value() {
        return this.textContent || '';
    }
    /**
     * Sets value.
     *
     * @param value Value.
     */
    set value(value) {
        this.textContent = value;
    }
    /**
     * Returns type.
     *
     * @returns Type.
     */
    get type() {
        return 'output';
    }
    /**
     * Returns validation message.
     *
     * @returns Validation message.
     */
    get validationMessage() {
        return this[PropertySymbol.validationMessage];
    }
    /**
     * Returns validity.
     *
     * @returns Validity.
     */
    get validity() {
        return this[PropertySymbol.validity];
    }
    /**
     * Returns "true" if it will validate.
     *
     * @returns "true" if it will validate.
     */
    get willValidate() {
        return false;
    }
    /**
     * Checks validity.
     *
     * @returns "true" if the field is valid.
     */
    checkValidity() {
        return true;
    }
    /**
     * Reports validity.
     *
     * @returns Validity.
     */
    reportValidity() {
        return this.checkValidity();
    }
    /**
     * Sets validation message.
     *
     * @param message Message.
     */
    setCustomValidity(message) {
        this[PropertySymbol.validationMessage] = String(message);
    }
}
exports.default = HTMLOutputElement;
//# sourceMappingURL=HTMLOutputElement.cjs.map