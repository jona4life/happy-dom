"use strict";
/* eslint-disable filenames/match-exported */
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
const NamedNodeMap_js_1 = __importDefault(require("./NamedNodeMap.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class NamedNodeMapProxyFactory {
    /**
     * Constructor.
     *
     * @param namedNodeMap
     */
    static createProxy(namedNodeMap) {
        const methodBinder = new ClassMethodBinder_js_1.default(this, [NamedNodeMap_js_1.default]);
        return new Proxy(namedNodeMap, {
            get: (target, property) => {
                if (property === 'length') {
                    return namedNodeMap[PropertySymbol.items].size;
                }
                if (property in target || typeof property === 'symbol') {
                    methodBinder.bind(property);
                    return target[property];
                }
                const index = Number(property);
                if (!isNaN(index)) {
                    return target.item(index);
                }
                return target.getNamedItem(property) || undefined;
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
                const keys = Array.from(namedNodeMap[PropertySymbol.items].keys());
                for (let i = 0, max = namedNodeMap[PropertySymbol.items].size; i < max; i++) {
                    keys.push(String(i));
                }
                return keys;
            },
            has(target, property) {
                if (typeof property === 'symbol') {
                    return false;
                }
                if (property in target || namedNodeMap[PropertySymbol.items].has(property)) {
                    return true;
                }
                const index = Number(property);
                if (!isNaN(index) && index >= 0 && index < namedNodeMap[PropertySymbol.items].size) {
                    return true;
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
                const index = Number(property);
                if (!isNaN(index)) {
                    if (index >= 0) {
                        const itemByIndex = target.item(index);
                        if (itemByIndex) {
                            return {
                                value: itemByIndex,
                                writable: false,
                                enumerable: true,
                                configurable: true
                            };
                        }
                    }
                    return;
                }
                const items = namedNodeMap[PropertySymbol.items].get(property);
                if (items) {
                    return {
                        value: items,
                        writable: false,
                        enumerable: true,
                        configurable: true
                    };
                }
            }
        });
    }
}
exports.default = NamedNodeMapProxyFactory;
//# sourceMappingURL=NamedNodeMapProxyFactory.cjs.map