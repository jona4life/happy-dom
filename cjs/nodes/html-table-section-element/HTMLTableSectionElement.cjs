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
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../../exception/DOMExceptionNameEnum.cjs"));
/**
 * HTMLTableSectionElement
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement
 */
class HTMLTableSectionElement extends HTMLElement_js_1.default {
    /**
     * Returns an HTMLTableRowElement representing a new row of the table. It inserts it in the rows collection immediately before the <tr> element at the given index position. If the index is -1, the new row is appended to the collection. If the index is smaller than -1 or greater than the number of rows in the collection, a DOMException with the value IndexSizeError is raised.
     *
     * @param [index] Index.
     * @returns Row.
     */
    insertRow(index = -1) {
        if (typeof index !== 'number') {
            index = -1;
        }
        const rows = QuerySelector_js_1.default.querySelectorAll(this, 'tr')[PropertySymbol.items];
        if (index < -1) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'insertRow' on 'HTMLTableSectionElement': The index provided (${index}) is less than -1.`, DOMExceptionNameEnum_js_1.default.indexSizeError);
        }
        if (index > rows.length) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'insertRow' on 'HTMLTableSectionElement': The index provided (${index}) is greater than the number of rows (${rows.length}).`, DOMExceptionNameEnum_js_1.default.indexSizeError);
        }
        const row = this[PropertySymbol.ownerDocument].createElement('tr');
        if (index === -1 || index === rows.length) {
            this.appendChild(row);
        }
        else {
            this.insertBefore(row, rows[index]);
        }
        return row;
    }
    /**
     * Removes the row corresponding to the index given in parameter. If the index value is -1 the last row is removed; if it is smaller than -1 or greater than the amount of rows in the collection, a DOMException with the value IndexSizeError is raised.
     *
     * @param index Index.
     */
    deleteRow(index) {
        if (arguments.length === 0) {
            throw new this[PropertySymbol.window].TypeError("Failed to execute 'deleteRow' on 'HTMLTableSectionElement': 1 argument required, but only 0 present.");
        }
        if (typeof index !== 'number') {
            index = -1;
        }
        if (index < -1) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'deleteRow' on 'HTMLTableSectionElement': The index provided (${index}) is less than -1.`, DOMExceptionNameEnum_js_1.default.indexSizeError);
        }
        const rows = QuerySelector_js_1.default.querySelectorAll(this, 'tr')[PropertySymbol.items];
        if (index >= rows.length) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'deleteRow' on 'HTMLTableSectionElement': The index provided (${index}) is greater than the number of rows in the table (${rows.length}).`, DOMExceptionNameEnum_js_1.default.indexSizeError);
        }
        if (index === -1) {
            index = rows.length - 1;
        }
        rows[index].remove();
    }
}
exports.default = HTMLTableSectionElement;
//# sourceMappingURL=HTMLTableSectionElement.cjs.map