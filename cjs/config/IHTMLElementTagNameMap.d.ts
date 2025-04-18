import HTMLAnchorElement from '../nodes/html-anchor-element/HTMLAnchorElement.cjs';
import HTMLAreaElement from '../nodes/html-area-element/HTMLAreaElement.cjs';
import HTMLAudioElement from '../nodes/html-audio-element/HTMLAudioElement.cjs';
import HTMLBaseElement from '../nodes/html-base-element/HTMLBaseElement.cjs';
import HTMLBodyElement from '../nodes/html-body-element/HTMLBodyElement.cjs';
import HTMLBRElement from '../nodes/html-br-element/HTMLBRElement.cjs';
import HTMLButtonElement from '../nodes/html-button-element/HTMLButtonElement.cjs';
import HTMLCanvasElement from '../nodes/html-canvas-element/HTMLCanvasElement.cjs';
import HTMLDListElement from '../nodes/html-d-list-element/HTMLDListElement.cjs';
import HTMLDataElement from '../nodes/html-data-element/HTMLDataElement.cjs';
import HTMLDataListElement from '../nodes/html-data-list-element/HTMLDataListElement.cjs';
import HTMLDetailsElement from '../nodes/html-details-element/HTMLDetailsElement.cjs';
import HTMLDialogElement from '../nodes/html-dialog-element/HTMLDialogElement.cjs';
import HTMLDivElement from '../nodes/html-div-element/HTMLDivElement.cjs';
import HTMLElement from '../nodes/html-element/HTMLElement.cjs';
import HTMLEmbedElement from '../nodes/html-embed-element/HTMLEmbedElement.cjs';
import HTMLFieldSetElement from '../nodes/html-field-set-element/HTMLFieldSetElement.cjs';
import HTMLFormElement from '../nodes/html-form-element/HTMLFormElement.cjs';
import HTMLHeadElement from '../nodes/html-head-element/HTMLHeadElement.cjs';
import HTMLHeadingElement from '../nodes/html-heading-element/HTMLHeadingElement.cjs';
import HTMLHRElement from '../nodes/html-hr-element/HTMLHRElement.cjs';
import HTMLHtmlElement from '../nodes/html-html-element/HTMLHtmlElement.cjs';
import HTMLIFrameElement from '../nodes/html-iframe-element/HTMLIFrameElement.cjs';
import HTMLImageElement from '../nodes/html-image-element/HTMLImageElement.cjs';
import HTMLInputElement from '../nodes/html-input-element/HTMLInputElement.cjs';
import HTMLLabelElement from '../nodes/html-label-element/HTMLLabelElement.cjs';
import HTMLLegendElement from '../nodes/html-legend-element/HTMLLegendElement.cjs';
import HTMLLIElement from '../nodes/html-li-element/HTMLLIElement.cjs';
import HTMLLinkElement from '../nodes/html-link-element/HTMLLinkElement.cjs';
import HTMLMapElement from '../nodes/html-map-element/HTMLMapElement.cjs';
import HTMLMenuElement from '../nodes/html-menu-element/HTMLMenuElement.cjs';
import HTMLMetaElement from '../nodes/html-meta-element/HTMLMetaElement.cjs';
import HTMLMeterElement from '../nodes/html-meter-element/HTMLMeterElement.cjs';
import HTMLModElement from '../nodes/html-mod-element/HTMLModElement.cjs';
import HTMLOListElement from '../nodes/html-o-list-element/HTMLOListElement.cjs';
import HTMLObjectElement from '../nodes/html-object-element/HTMLObjectElement.cjs';
import HTMLOptGroupElement from '../nodes/html-opt-group-element/HTMLOptGroupElement.cjs';
import HTMLOptionElement from '../nodes/html-option-element/HTMLOptionElement.cjs';
import HTMLOutputElement from '../nodes/html-output-element/HTMLOutputElement.cjs';
import HTMLParagraphElement from '../nodes/html-paragraph-element/HTMLParagraphElement.cjs';
import HTMLParamElement from '../nodes/html-param-element/HTMLParamElement.cjs';
import HTMLPictureElement from '../nodes/html-picture-element/HTMLPictureElement.cjs';
import HTMLPreElement from '../nodes/html-pre-element/HTMLPreElement.cjs';
import HTMLProgressElement from '../nodes/html-progress-element/HTMLProgressElement.cjs';
import HTMLQuoteElement from '../nodes/html-quote-element/HTMLQuoteElement.cjs';
import HTMLScriptElement from '../nodes/html-script-element/HTMLScriptElement.cjs';
import HTMLSelectElement from '../nodes/html-select-element/HTMLSelectElement.cjs';
import HTMLSlotElement from '../nodes/html-slot-element/HTMLSlotElement.cjs';
import HTMLSourceElement from '../nodes/html-source-element/HTMLSourceElement.cjs';
import HTMLSpanElement from '../nodes/html-span-element/HTMLSpanElement.cjs';
import HTMLStyleElement from '../nodes/html-style-element/HTMLStyleElement.cjs';
import HTMLTableCaptionElement from '../nodes/html-table-caption-element/HTMLTableCaptionElement.cjs';
import HTMLTableCellElement from '../nodes/html-table-cell-element/HTMLTableCellElement.cjs';
import HTMLTableColElement from '../nodes/html-table-col-element/HTMLTableColElement.cjs';
import HTMLTableElement from '../nodes/html-table-element/HTMLTableElement.cjs';
import HTMLTableRowElement from '../nodes/html-table-row-element/HTMLTableRowElement.cjs';
import HTMLTableSectionElement from '../nodes/html-table-section-element/HTMLTableSectionElement.cjs';
import HTMLTemplateElement from '../nodes/html-template-element/HTMLTemplateElement.cjs';
import HTMLTextAreaElement from '../nodes/html-text-area-element/HTMLTextAreaElement.cjs';
import HTMLTimeElement from '../nodes/html-time-element/HTMLTimeElement.cjs';
import HTMLTitleElement from '../nodes/html-title-element/HTMLTitleElement.cjs';
import HTMLTrackElement from '../nodes/html-track-element/HTMLTrackElement.cjs';
import HTMLUListElement from '../nodes/html-u-list-element/HTMLUListElement.cjs';
import HTMLVideoElement from '../nodes/html-video-element/HTMLVideoElement.cjs';
declare global {
    interface HTMLElementTagNameMap {
    }
}
export default interface IHTMLElementTagNameMap extends HTMLElementTagNameMap {
    a: HTMLAnchorElement;
    abbr: HTMLElement;
    address: HTMLElement;
    area: HTMLAreaElement;
    article: HTMLElement;
    aside: HTMLElement;
    audio: HTMLAudioElement;
    b: HTMLElement;
    base: HTMLBaseElement;
    bdi: HTMLElement;
    bdo: HTMLElement;
    body: HTMLBodyElement;
    template: HTMLTemplateElement;
    form: HTMLFormElement;
    input: HTMLInputElement;
    textarea: HTMLTextAreaElement;
    script: HTMLScriptElement;
    img: HTMLImageElement;
    link: HTMLLinkElement;
    style: HTMLStyleElement;
    label: HTMLLabelElement;
    slot: HTMLSlotElement;
    meta: HTMLMetaElement;
    blockquote: HTMLQuoteElement;
    br: HTMLBRElement;
    button: HTMLButtonElement;
    canvas: HTMLCanvasElement;
    caption: HTMLTableCaptionElement;
    cite: HTMLElement;
    code: HTMLElement;
    col: HTMLTableColElement;
    colgroup: HTMLTableColElement;
    data: HTMLDataElement;
    datalist: HTMLDataListElement;
    dd: HTMLElement;
    del: HTMLModElement;
    details: HTMLDetailsElement;
    dfn: HTMLElement;
    dialog: HTMLDialogElement;
    div: HTMLDivElement;
    dl: HTMLDListElement;
    dt: HTMLElement;
    em: HTMLElement;
    embed: HTMLEmbedElement;
    fieldset: HTMLFieldSetElement;
    figcaption: HTMLElement;
    figure: HTMLElement;
    footer: HTMLElement;
    h1: HTMLHeadingElement;
    h2: HTMLHeadingElement;
    h3: HTMLHeadingElement;
    h4: HTMLHeadingElement;
    h5: HTMLHeadingElement;
    h6: HTMLHeadingElement;
    head: HTMLHeadElement;
    header: HTMLElement;
    hgroup: HTMLElement;
    hr: HTMLHRElement;
    html: HTMLHtmlElement;
    i: HTMLElement;
    iframe: HTMLIFrameElement;
    ins: HTMLModElement;
    kbd: HTMLElement;
    legend: HTMLLegendElement;
    li: HTMLLIElement;
    main: HTMLElement;
    map: HTMLMapElement;
    mark: HTMLElement;
    menu: HTMLMenuElement;
    meter: HTMLMeterElement;
    nav: HTMLElement;
    noscript: HTMLElement;
    object: HTMLObjectElement;
    ol: HTMLOListElement;
    optgroup: HTMLOptGroupElement;
    option: HTMLOptionElement;
    output: HTMLOutputElement;
    p: HTMLParagraphElement;
    param: HTMLParamElement;
    picture: HTMLPictureElement;
    pre: HTMLPreElement;
    progress: HTMLProgressElement;
    q: HTMLQuoteElement;
    rb: HTMLElement;
    rp: HTMLElement;
    rt: HTMLElement;
    rtc: HTMLElement;
    ruby: HTMLElement;
    s: HTMLElement;
    samp: HTMLElement;
    section: HTMLElement;
    select: HTMLSelectElement;
    small: HTMLElement;
    source: HTMLSourceElement;
    span: HTMLSpanElement;
    strong: HTMLElement;
    sub: HTMLElement;
    summary: HTMLElement;
    sup: HTMLElement;
    table: HTMLTableElement;
    tbody: HTMLTableSectionElement;
    td: HTMLTableCellElement;
    tfoot: HTMLTableSectionElement;
    th: HTMLTableCellElement;
    thead: HTMLTableSectionElement;
    time: HTMLTimeElement;
    title: HTMLTitleElement;
    tr: HTMLTableRowElement;
    track: HTMLTrackElement;
    u: HTMLElement;
    ul: HTMLUListElement;
    var: HTMLElement;
    video: HTMLVideoElement;
    wbr: HTMLElement;
}
//# sourceMappingURL=IHTMLElementTagNameMap.d.ts.map