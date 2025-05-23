/// <reference types="node" resolution-mode="require"/>
import DataTransferItem from './DataTransferItem.js';
/**
 *
 */
export default class DataTransferItemList extends Array<DataTransferItem> {
    /**
     * Adds an item.
     *
     * @param item Item.
     * @param type Type.
     */
    add(item: File | string, type?: string): void;
    /**
     * Removes an item.
     *
     * @param index Index.
     */
    remove(index: number): void;
    /**
     * Clears list.
     */
    clear(): void;
}
//# sourceMappingURL=DataTransferItemList.d.ts.map