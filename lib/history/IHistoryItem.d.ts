/// <reference types="node" resolution-mode="require"/>
import HistoryScrollRestorationEnum from './HistoryScrollRestorationEnum.js';
export default interface IHistoryItem {
    title: string | null;
    href: string;
    state: any | null;
    scrollRestoration: HistoryScrollRestorationEnum;
    method: string;
    formData: FormData | null;
    isCurrent: boolean;
}
//# sourceMappingURL=IHistoryItem.d.ts.map