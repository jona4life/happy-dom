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
const ClassMethodBinder_js_1 = __importDefault(require("../../utilities/ClassMethodBinder.cjs"));
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
/**
 * HTMLCollection.
 *
 * We are extending Array here to improve performance.
 * However, we should not expose Array methods to the outside.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
 */
class HTMLCollection {
    [PropertySymbol.query];
    /**
     * Constructor.
     *
     * @param illegalConstructorSymbol Illegal constructor symbol.
     * @param query Query function.
     */
    constructor(illegalConstructorSymbol, query) {
        if (illegalConstructorSymbol !== PropertySymbol.illegalConstructor) {
            throw new TypeError('Illegal constructor');
        }
        this[PropertySymbol.query] = query;
        const methodBinder = new ClassMethodBinder_js_1.default(this, this.constructor !== HTMLCollection ? [this.constructor, HTMLCollection] : [HTMLCollection]);
        return new Proxy(this, {
            get: (target, property) => {
                if (property === 'length') {
                    return query().length;
                }
                if (property in target || typeof property === 'symbol') {
                    methodBinder.bind(property);
                    return target[property];
                }
                const index = Number(property);
                if (!isNaN(index)) {
                    return query()[index];
                }
                return target.namedItem(property) || undefined;
            },
            set(target, property, newValue) {
                methodBinder.bind(property);
                if (typeof property === 'symbol') {
                    target[property] = newValue;
                    return true;
                }
                const index = Number(property);
                if (isNaN(index)) {
                    target[property] = newValue;
                }
                return true;
            },
            deleteProperty(target, property) {
                if (typeof property === 'symbol') {
                    delete target[property];
                    return true;
                }
                const index = Number(property);
                if (isNaN(index)) {
                    delete target[property];
                }
                return true;
            },
            ownKeys() {
                const keys = [];
                const items = query();
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const name = item.getAttribute('id') || item.getAttribute('name');
                    keys.push(String(i));
                    if (name) {
                        keys.push(name);
                    }
                }
                return keys;
            },
            has(target, property) {
                if (property in target) {
                    return true;
                }
                const items = query();
                const index = Number(property);
                if (!isNaN(index) && index >= 0 && index < items.length) {
                    return true;
                }
                property = String(property);
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const name = item.getAttribute('id') || item.getAttribute('name');
                    if (name && name === property) {
                        return true;
                    }
                }
                return false;
            },
            defineProperty(target, property, descriptor) {
                methodBinder.preventBinding(property);
                if (property in target) {
                    Object.defineProperty(target, property, descriptor);
                    return true;
                }
                return false;
            },
            getOwnPropertyDescriptor(target, property) {
                if (property in target || typeof property === 'symbol') {
                    return;
                }
                const items = query();
                const index = Number(property);
                if (!isNaN(index) && index >= 0 && index < items.length) {
                    return {
                        value: items[index],
                        writable: false,
                        enumerable: true,
                        configurable: true
                    };
                }
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const name = item.getAttribute('id') || item.getAttribute('name');
                    if (name && name === property) {
                        return {
                            value: item,
                            writable: false,
                            enumerable: true,
                            configurable: true
                        };
                    }
                }
            }
        });
    }
    /**
     * Returns length.
     *
     * @returns Length.
     */
    get length() {
        return this[PropertySymbol.query]().length;
    }
    /**
     * Returns `Symbol.toStringTag`.
     *
     * @returns `Symbol.toStringTag`.
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    /**
     * Returns `[object HTMLCollection]`.
     *
     * @returns `[object HTMLCollection]`.
     */
    toLocaleString() {
        return `[object ${this.constructor.name}]`;
    }
    /**
     * Returns `[object HTMLCollection]`.
     *
     * @returns `[object HTMLCollection]`.
     */
    toString() {
        return `[object ${this.constructor.name}]`;
    }
    /**
     * Returns item by index.
     *
     * @param index Index.
     */
    item(index) {
        const items = this[PropertySymbol.query]();
        return index >= 0 && items[index] ? items[index] : null;
    }
    /**
     * Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    [Symbol.iterator]() {
        const items = this[PropertySymbol.query]();
        return items[Symbol.iterator]();
    }
    /**
     * Returns named item.
     *
     * @param name Name.
     * @returns Node.
     */
    namedItem(name) {
        const items = this[PropertySymbol.query]();
        name = String(name);
        for (const item of items) {
            if (item.getAttribute('id') === name || item.getAttribute('name') === name) {
                return item;
            }
        }
        return null;
    }
}
exports.default = HTMLCollection;
//# sourceMappingURL=HTMLCollection.cjs.map