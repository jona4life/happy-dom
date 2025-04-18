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
const NodeList_js_1 = __importDefault(require("../nodes/node/NodeList.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("../nodes/node/NodeTypeEnum.cjs"));
const SelectorCombinatorEnum_js_1 = __importDefault(require("./SelectorCombinatorEnum.cjs"));
const SelectorParser_js_1 = __importDefault(require("./SelectorParser.cjs"));
/**
 * Invalid Selector RegExp.
 */
const INVALID_SELECTOR_REGEXP = /^[.#\[]?\d|[.#]$/;
/**
 * Utility for query selection in an HTML element.
 *
 * @class QuerySelector
 */
class QuerySelector {
    /**
     * Finds elements based on a query selector.
     *
     * @param node Node to search in.
     * @param selector Selector.
     * @returns HTML elements.
     */
    static querySelectorAll(node, selector) {
        const window = node[PropertySymbol.window];
        if (selector === '') {
            throw new window.DOMException(`Failed to execute 'querySelectorAll' on '${node.constructor.name}': The provided selector is empty.`);
        }
        if (typeof selector === 'function') {
            throw new window.DOMException(`Failed to execute 'querySelectorAll' on '${node.constructor.name}': '${selector}' is not a valid selector.`);
        }
        if (typeof selector === 'symbol') {
            throw new window.TypeError(`Failed to execute 'querySelectorAll' on '${node.constructor.name}': Cannot convert a Symbol value to a string`);
        }
        selector = String(selector);
        if (INVALID_SELECTOR_REGEXP.test(selector)) {
            throw new window.DOMException(`Failed to execute 'querySelectorAll' on '${node.constructor.name}': '${selector}' is not a valid selector.`);
        }
        const cache = node[PropertySymbol.cache].querySelectorAll;
        const cachedResult = cache.get(selector);
        if (cachedResult?.result) {
            const result = cachedResult.result.deref();
            if (result) {
                return result;
            }
        }
        const groups = SelectorParser_js_1.default.getSelectorGroups(selector);
        const items = [];
        const nodeList = new NodeList_js_1.default(PropertySymbol.illegalConstructor, items);
        const matchesMap = new Map();
        const matchedPositions = [];
        const cachedItem = {
            result: new WeakRef(nodeList)
        };
        node[PropertySymbol.cache].querySelectorAll.set(selector, cachedItem);
        if (node[PropertySymbol.isConnected]) {
            // Document is affected for the ":target" selector
            (node[PropertySymbol.ownerDocument] || node)[PropertySymbol.affectsCache].push(cachedItem);
        }
        for (const items of groups) {
            const matches = node[PropertySymbol.nodeType] === NodeTypeEnum_js_1.default.elementNode
                ? this.findAll(node, [node], items, cachedItem)
                : this.findAll(null, node[PropertySymbol.elementArray], items, cachedItem);
            for (const match of matches) {
                if (!matchesMap.has(match.documentPosition)) {
                    matchesMap.set(match.documentPosition, match.element);
                    matchedPositions.push(match.documentPosition);
                }
            }
        }
        const keys = matchedPositions.sort();
        for (let i = 0, max = keys.length; i < max; i++) {
            items.push(matchesMap.get(keys[i]));
        }
        return nodeList;
    }
    /**
     * Finds an element based on a query selector.
     *
     * @param node Node to search in.
     * @param selector Selector.
     * @returns HTML element.
     */
    static querySelector(node, selector) {
        const window = node[PropertySymbol.window];
        if (selector === '') {
            throw new window.DOMException(`Failed to execute 'querySelector' on '${node.constructor.name}': The provided selector is empty.`);
        }
        if (typeof selector === 'function') {
            throw new window.DOMException(`Failed to execute 'querySelector' on '${node.constructor.name}': '${selector}' is not a valid selector.`);
        }
        if (typeof selector === 'symbol') {
            throw new window.TypeError(`Failed to execute 'querySelector' on '${node.constructor.name}': Cannot convert a Symbol value to a string`);
        }
        selector = String(selector);
        if (INVALID_SELECTOR_REGEXP.test(selector)) {
            throw new window.DOMException(`Failed to execute 'querySelector' on '${node.constructor.name}': '${selector}' is not a valid selector.`);
        }
        const cachedResult = node[PropertySymbol.cache].querySelector.get(selector);
        if (cachedResult?.result) {
            const result = cachedResult.result.deref();
            if (result) {
                return result;
            }
        }
        const cachedItem = {
            result: {
                deref: () => null
            }
        };
        node[PropertySymbol.cache].querySelector.set(selector, cachedItem);
        if (node[PropertySymbol.isConnected]) {
            // Document is affected for the ":target" selector
            (node[PropertySymbol.ownerDocument] || node)[PropertySymbol.affectsCache].push(cachedItem);
        }
        const matchesMap = new Map();
        const matchedPositions = [];
        for (const items of SelectorParser_js_1.default.getSelectorGroups(selector)) {
            const match = node[PropertySymbol.nodeType] === NodeTypeEnum_js_1.default.elementNode
                ? this.findFirst(node, [node], items, cachedItem)
                : this.findFirst(null, node[PropertySymbol.elementArray], items, cachedItem);
            if (match && !matchesMap.has(match.documentPosition)) {
                matchesMap.set(match.documentPosition, match.element);
                matchedPositions.push(match.documentPosition);
            }
        }
        if (matchedPositions.length > 0) {
            const keys = matchedPositions.sort();
            return matchesMap.get(keys[0]);
        }
        return null;
    }
    /**
     * Checks if an element matches a selector and returns priority weight.
     *
     * @param element Element to match.
     * @param selector Selector to match with.
     * @param [options] Options.
     * @param [options.ignoreErrors] Ignores errors.
     * @returns Result.
     */
    static matches(element, selector, options) {
        const ignoreErrors = options?.ignoreErrors;
        const window = element[PropertySymbol.window];
        if (selector === '*') {
            return {
                priorityWeight: 1
            };
        }
        if (selector === '') {
            if (ignoreErrors) {
                return null;
            }
            throw new window.DOMException(`Failed to execute 'matches' on '${element.constructor.name}': The provided selector is empty.`);
        }
        if (typeof selector === 'function') {
            if (ignoreErrors) {
                return null;
            }
            throw new window.DOMException(`Failed to execute 'matches' on '${element.constructor.name}': '${selector}' is not a valid selector.`);
        }
        if (typeof selector === 'symbol') {
            if (ignoreErrors) {
                return null;
            }
            throw new window.TypeError(`Cannot convert a Symbol value to a string`);
        }
        selector = String(selector);
        if (INVALID_SELECTOR_REGEXP.test(selector)) {
            if (ignoreErrors) {
                return null;
            }
            throw new window.DOMException(`Failed to execute 'matches' on '${element.constructor.name}': '${selector}' is not a valid selector.`);
        }
        const cachedResult = element[PropertySymbol.cache].matches.get(selector);
        if (cachedResult?.result) {
            return cachedResult.result.match;
        }
        const cachedItem = {
            result: { match: null }
        };
        element[PropertySymbol.cache].matches.set(selector, cachedItem);
        if (element[PropertySymbol.isConnected]) {
            // Document is affected for the ":target" selector
            (element[PropertySymbol.ownerDocument] || element)[PropertySymbol.affectsCache].push(cachedItem);
        }
        for (const items of SelectorParser_js_1.default.getSelectorGroups(selector, options)) {
            const result = this.matchSelector(element, items.reverse(), cachedItem);
            if (result) {
                cachedItem.result.match = result;
                return result;
            }
        }
        return null;
    }
    /**
     * Checks if a node matches a selector.
     *
     * @param element Target element.
     * @param currentElement
     * @param selectorItems Selector items.
     * @param cachedItem Cached item.
     * @param [previousSelectorItem] Previous selector item.
     * @param [priorityWeight] Priority weight.
     * @returns Result.
     */
    static matchSelector(element, selectorItems, cachedItem, previousSelectorItem = null, priorityWeight = 0) {
        const selectorItem = selectorItems[0];
        const result = selectorItem.match(element);
        if (result) {
            if (selectorItems.length === 1) {
                return {
                    priorityWeight: priorityWeight + result.priorityWeight
                };
            }
            switch (selectorItem.combinator) {
                case SelectorCombinatorEnum_js_1.default.adjacentSibling:
                    const previousElementSibling = element.previousElementSibling;
                    if (previousElementSibling) {
                        previousElementSibling[PropertySymbol.affectsCache].push(cachedItem);
                        const match = this.matchSelector(previousElementSibling, selectorItems.slice(1), cachedItem, selectorItem, priorityWeight + result.priorityWeight);
                        if (match) {
                            return match;
                        }
                    }
                    break;
                case SelectorCombinatorEnum_js_1.default.child:
                case SelectorCombinatorEnum_js_1.default.descendant:
                    const parentElement = element.parentElement;
                    if (parentElement) {
                        parentElement[PropertySymbol.affectsCache].push(cachedItem);
                        const match = this.matchSelector(parentElement, selectorItems.slice(1), cachedItem, selectorItem, priorityWeight + result.priorityWeight);
                        if (match) {
                            return match;
                        }
                    }
                    break;
                case SelectorCombinatorEnum_js_1.default.subsequentSibling:
                    const siblingParentElement = element.parentElement;
                    if (siblingParentElement) {
                        const siblings = siblingParentElement[PropertySymbol.elementArray];
                        const index = siblings.indexOf(element);
                        siblingParentElement[PropertySymbol.affectsCache].push(cachedItem);
                        for (let i = index - 1; i >= 0; i--) {
                            const sibling = siblings[i];
                            sibling[PropertySymbol.affectsCache].push(cachedItem);
                            const match = this.matchSelector(sibling, selectorItems.slice(1), cachedItem, selectorItem, priorityWeight + result.priorityWeight);
                            if (match) {
                                return match;
                            }
                        }
                    }
                    break;
            }
        }
        if (previousSelectorItem?.combinator === SelectorCombinatorEnum_js_1.default.descendant) {
            const parentElement = element.parentElement;
            if (parentElement) {
                return this.matchSelector(parentElement, selectorItems, cachedItem, previousSelectorItem, priorityWeight);
            }
        }
        return null;
    }
    /**
     * Finds elements based on a query selector for a part of a list of selectors separated with comma.
     *
     * @param rootElement Root element.
     * @param children Child elements.
     * @param selectorItems Selector items.
     * @param cachedItem Cached item.
     * @param [documentPosition] Document position of the element.
     * @returns Document position and element map.
     */
    static findAll(rootElement, children, selectorItems, cachedItem, documentPosition) {
        const selectorItem = selectorItems[0];
        const nextSelectorItem = selectorItems[1];
        let matched = [];
        for (let i = 0, max = children.length; i < max; i++) {
            const child = children[i];
            const childrenOfChild = child[PropertySymbol.elementArray];
            const position = (documentPosition ? documentPosition + '>' : '') + String.fromCharCode(i);
            child[PropertySymbol.affectsCache].push(cachedItem);
            if (selectorItem.match(child)) {
                if (!nextSelectorItem) {
                    if (rootElement !== child) {
                        matched.push({
                            documentPosition: position,
                            element: child
                        });
                    }
                }
                else {
                    switch (nextSelectorItem.combinator) {
                        case SelectorCombinatorEnum_js_1.default.adjacentSibling:
                            const nextElementSibling = child.nextElementSibling;
                            if (nextElementSibling) {
                                matched = matched.concat(this.findAll(rootElement, [nextElementSibling], selectorItems.slice(1), cachedItem, position));
                            }
                            break;
                        case SelectorCombinatorEnum_js_1.default.descendant:
                        case SelectorCombinatorEnum_js_1.default.child:
                            matched = matched.concat(this.findAll(rootElement, childrenOfChild, selectorItems.slice(1), cachedItem, position));
                            break;
                        case SelectorCombinatorEnum_js_1.default.subsequentSibling:
                            const index = children.indexOf(child);
                            for (let j = index + 1; j < children.length; j++) {
                                const sibling = children[j];
                                matched = matched.concat(this.findAll(rootElement, [sibling], selectorItems.slice(1), cachedItem, position));
                            }
                            break;
                    }
                }
            }
            if (selectorItem.combinator === SelectorCombinatorEnum_js_1.default.descendant && childrenOfChild.length) {
                matched = matched.concat(this.findAll(rootElement, childrenOfChild, selectorItems, cachedItem, position));
            }
        }
        return matched;
    }
    /**
     * Finds an element based on a query selector for a part of a list of selectors separated with comma.
     *
     * @param rootElement Root element.
     * @param children Child elements.
     * @param selectorItems Selector items.
     * @param cachedItem Cached item.
     * @param [documentPosition] Document position of the element.
     * @returns Document position and element map.
     */
    static findFirst(rootElement, children, selectorItems, cachedItem, documentPosition) {
        const selectorItem = selectorItems[0];
        const nextSelectorItem = selectorItems[1];
        for (let i = 0, max = children.length; i < max; i++) {
            const child = children[i];
            const childrenOfChild = child[PropertySymbol.elementArray];
            const position = (documentPosition ? documentPosition + '>' : '') + String.fromCharCode(i);
            child[PropertySymbol.affectsCache].push(cachedItem);
            if (selectorItem.match(child)) {
                if (!nextSelectorItem) {
                    if (rootElement !== child) {
                        return { documentPosition: position, element: child };
                    }
                }
                else {
                    switch (nextSelectorItem.combinator) {
                        case SelectorCombinatorEnum_js_1.default.adjacentSibling:
                            const nextElementSibling = child.nextElementSibling;
                            if (nextElementSibling) {
                                const match = this.findFirst(rootElement, [nextElementSibling], selectorItems.slice(1), cachedItem, position);
                                if (match) {
                                    return match;
                                }
                            }
                            break;
                        case SelectorCombinatorEnum_js_1.default.descendant:
                        case SelectorCombinatorEnum_js_1.default.child:
                            const match = this.findFirst(rootElement, childrenOfChild, selectorItems.slice(1), cachedItem, position);
                            if (match) {
                                return match;
                            }
                            break;
                        case SelectorCombinatorEnum_js_1.default.subsequentSibling:
                            const index = children.indexOf(child);
                            for (let i = index + 1; i < children.length; i++) {
                                const sibling = children[i];
                                const match = this.findFirst(rootElement, [sibling], selectorItems.slice(1), cachedItem, position);
                                if (match) {
                                    return match;
                                }
                            }
                            break;
                    }
                }
            }
            if (selectorItem.combinator === SelectorCombinatorEnum_js_1.default.descendant && childrenOfChild.length) {
                const match = this.findFirst(rootElement, childrenOfChild, selectorItems, cachedItem, position);
                if (match) {
                    return match;
                }
            }
        }
        return null;
    }
}
exports.default = QuerySelector;
//# sourceMappingURL=QuerySelector.cjs.map