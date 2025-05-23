/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { URL as NodeJSURL } from 'url';
import { Blob as NodeJSBlob } from 'buffer';
import Blob from '../file/Blob.js';
/**
 * URL.
 */
export default class URL extends NodeJSURL {
    /**
     * Creates a string containing a URL representing the object given in the parameter.
     *
     * @param object Object.
     * @returns URL.
     */
    static createObjectURL(object: NodeJSBlob | Blob): string;
}
//# sourceMappingURL=URL.d.ts.map