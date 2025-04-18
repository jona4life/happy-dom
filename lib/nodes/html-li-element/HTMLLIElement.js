import HTMLElement from '../html-element/HTMLElement.js';
/**
 * HTMLLIElement
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement
 */
export default class HTMLLIElement extends HTMLElement {
    /**
     * Returns value.
     *
     * @returns Value.
     */
    get value() {
        if (!this.hasAttribute('value')) {
            return 0;
        }
        const parsedValue = Number(this.getAttribute('value'));
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    /**
     * Sets value.
     *
     * @param value Value.
     */
    set value(value) {
        const parsedValue = Number(value);
        this.setAttribute('value', isNaN(parsedValue) ? '0' : String(parsedValue));
    }
}
//# sourceMappingURL=HTMLLIElement.js.map