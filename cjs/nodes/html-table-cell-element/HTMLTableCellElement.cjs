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
const QuerySelector_js_1 = __importDefault(require("../../query-selector/QuerySelector.cjs"));
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
/**
 * HTMLTableCellElement
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement
 */
class HTMLTableCellElement extends HTMLElement_js_1.default {
    /**
     * Returns abbr.
     *
     * @returns Abbr.
     */
    get abbr() {
        return this.getAttribute('abbr') || '';
    }
    /**
     * Sets abbr.
     *
     * @param value Abbr.
     */
    set abbr(value) {
        this.setAttribute('abbr', value);
    }
    /**
     * A number representing the cell's position in the cells collection of the <tr> the cell is contained within. If the cell doesn't belong to a <tr>, it returns -1.
     *
     * @returns Cell index.
     */
    get cellIndex() {
        let parent = this.parentNode;
        while (parent) {
            if (parent[PropertySymbol.tagName] === 'TR') {
                const cells = QuerySelector_js_1.default.querySelectorAll(parent, 'td,th')[PropertySymbol.items];
                return cells.indexOf(this);
            }
            parent = parent.parentNode;
        }
        return -1;
    }
    /**
     * Returns colspan.
     *
     * @returns Colspan.
     */
    get colSpan() {
        const value = Number(this.getAttribute('colspan'));
        return isNaN(value) || value < 1 ? 1 : value;
    }
    /**
     * Sets colspan.
     *
     * @param value Colspan.
     */
    set colSpan(value) {
        const parsedValue = Number(value);
        this.setAttribute('colspan', isNaN(parsedValue) || parsedValue < 1 ? '1' : String(parsedValue));
    }
    /**
     * Returns headers.
     *
     * @returns headers.
     */
    get headers() {
        return this.getAttribute('headers') || '';
    }
    /**
     * Sets headers.
     *
     * @param value headers.
     */
    set headers(value) {
        this.setAttribute('headers', String(value));
        // TODO: implement metadata update if needed.
    }
    /**
     * Returns rowspan.
     *
     * @returns Rowspan.
     */
    get rowSpan() {
        const value = Number(this.getAttribute('rowspan'));
        return isNaN(value) || value < 1 ? 1 : value;
    }
    /**
     * Sets rowspan.
     *
     * @param value Rowspan.
     */
    set rowSpan(value) {
        const parsedValue = Number(value);
        this.setAttribute('rowspan', isNaN(parsedValue) || parsedValue < 1 ? '1' : String(parsedValue));
    }
    /**
     * Returns scope.
     *
     * @returns Scope.
     */
    get scope() {
        return this.getAttribute('scope') || '';
    }
    /**
     * Sets scope.
     *
     * @param value Scope.
     */
    set scope(value) {
        this.setAttribute('scope', value);
    }
}
exports.default = HTMLTableCellElement;
//# sourceMappingURL=HTMLTableCellElement.cjs.map