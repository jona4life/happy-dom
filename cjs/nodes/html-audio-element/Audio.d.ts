import HTMLAudioElement from './HTMLAudioElement.cjs';
import * as PropertySymbol from '../../PropertySymbol.cjs';
/**
 * Image as constructor.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio.
 */
export default class Audio extends HTMLAudioElement {
    [PropertySymbol.tagName]: string;
    [PropertySymbol.localName]: string;
    [PropertySymbol.namespaceURI]: string;
    /**
     * Constructor.
     *
     * @param [url] source URL.
     */
    constructor(url?: string);
}
//# sourceMappingURL=Audio.d.ts.map