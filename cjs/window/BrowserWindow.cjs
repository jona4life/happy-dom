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
exports.prepareWindow = void 0;
const buffer_1 = require("buffer");
const crypto_1 = require("crypto");
const util_1 = require("util");
const stream_1 = __importDefault(require("stream"));
const web_1 = require("stream/web");
const url_1 = require("url");
const vm_1 = __importDefault(require("vm"));
const PropertySymbol = __importStar(require("../PropertySymbol.cjs"));
const Base64_js_1 = __importDefault(require("../base64/Base64.cjs"));
const BrowserErrorCaptureEnum_js_1 = __importDefault(require("../browser/enums/BrowserErrorCaptureEnum.cjs"));
const Clipboard_js_1 = __importDefault(require("../clipboard/Clipboard.cjs"));
const CSS_js_1 = __importDefault(require("../css/CSS.cjs"));
const CSSRule_js_1 = __importDefault(require("../css/CSSRule.cjs"));
const CSSStyleDeclaration_js_1 = __importDefault(require("../css/declaration/CSSStyleDeclaration.cjs"));
const CSSContainerRule_js_1 = __importDefault(require("../css/rules/CSSContainerRule.cjs"));
const CSSFontFaceRule_js_1 = __importDefault(require("../css/rules/CSSFontFaceRule.cjs"));
const CSSKeyframeRule_js_1 = __importDefault(require("../css/rules/CSSKeyframeRule.cjs"));
const CSSKeyframesRule_js_1 = __importDefault(require("../css/rules/CSSKeyframesRule.cjs"));
const CSSMediaRule_js_1 = __importDefault(require("../css/rules/CSSMediaRule.cjs"));
const CSSStyleRule_js_1 = __importDefault(require("../css/rules/CSSStyleRule.cjs"));
const CSSSupportsRule_js_1 = __importDefault(require("../css/rules/CSSSupportsRule.cjs"));
const CustomElementRegistry_js_1 = __importDefault(require("../custom-element/CustomElementRegistry.cjs"));
const Event_js_1 = __importDefault(require("../event/Event.cjs"));
const EventTarget_js_1 = __importDefault(require("../event/EventTarget.cjs"));
const Touch_js_1 = __importDefault(require("../event/Touch.cjs"));
const UIEvent_js_1 = __importDefault(require("../event/UIEvent.cjs"));
const AnimationEvent_js_1 = __importDefault(require("../event/events/AnimationEvent.cjs"));
const ClipboardEvent_js_1 = __importDefault(require("../event/events/ClipboardEvent.cjs"));
const CustomEvent_js_1 = __importDefault(require("../event/events/CustomEvent.cjs"));
const ErrorEvent_js_1 = __importDefault(require("../event/events/ErrorEvent.cjs"));
const FocusEvent_js_1 = __importDefault(require("../event/events/FocusEvent.cjs"));
const HashChangeEvent_js_1 = __importDefault(require("../event/events/HashChangeEvent.cjs"));
const InputEvent_js_1 = __importDefault(require("../event/events/InputEvent.cjs"));
const KeyboardEvent_js_1 = __importDefault(require("../event/events/KeyboardEvent.cjs"));
const MediaQueryListEvent_js_1 = __importDefault(require("../event/events/MediaQueryListEvent.cjs"));
const MessageEvent_js_1 = __importDefault(require("../event/events/MessageEvent.cjs"));
const MouseEvent_js_1 = __importDefault(require("../event/events/MouseEvent.cjs"));
const PointerEvent_js_1 = __importDefault(require("../event/events/PointerEvent.cjs"));
const ProgressEvent_js_1 = __importDefault(require("../event/events/ProgressEvent.cjs"));
const StorageEvent_js_1 = __importDefault(require("../event/events/StorageEvent.cjs"));
const SubmitEvent_js_1 = __importDefault(require("../event/events/SubmitEvent.cjs"));
const TouchEvent_js_1 = __importDefault(require("../event/events/TouchEvent.cjs"));
const WheelEvent_js_1 = __importDefault(require("../event/events/WheelEvent.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
const Fetch_js_1 = __importDefault(require("../fetch/Fetch.cjs"));
const Blob_js_1 = __importDefault(require("../file/Blob.cjs"));
const File_js_1 = __importDefault(require("../file/File.cjs"));
const History_js_1 = __importDefault(require("../history/History.cjs"));
const IntersectionObserver_js_1 = __importDefault(require("../intersection-observer/IntersectionObserver.cjs"));
const IntersectionObserverEntry_js_1 = __importDefault(require("../intersection-observer/IntersectionObserverEntry.cjs"));
const Location_js_1 = __importDefault(require("../location/Location.cjs"));
const MediaQueryList_js_1 = __importDefault(require("../match-media/MediaQueryList.cjs"));
const MutationRecord_js_1 = __importDefault(require("../mutation-observer/MutationRecord.cjs"));
const MimeType_js_1 = __importDefault(require("../navigator/MimeType.cjs"));
const MimeTypeArray_js_1 = __importDefault(require("../navigator/MimeTypeArray.cjs"));
const Navigator_js_1 = __importDefault(require("../navigator/Navigator.cjs"));
const Plugin_js_1 = __importDefault(require("../navigator/Plugin.cjs"));
const PluginArray_js_1 = __importDefault(require("../navigator/PluginArray.cjs"));
const Attr_js_1 = __importDefault(require("../nodes/attr/Attr.cjs"));
const CharacterData_js_1 = __importDefault(require("../nodes/character-data/CharacterData.cjs"));
const DocumentType_js_1 = __importDefault(require("../nodes/document-type/DocumentType.cjs"));
const DocumentReadyStateEnum_js_1 = __importDefault(require("../nodes/document/DocumentReadyStateEnum.cjs"));
const DocumentReadyStateManager_js_1 = __importDefault(require("../nodes/document/DocumentReadyStateManager.cjs"));
const DOMRect_js_1 = __importDefault(require("../dom/DOMRect.cjs"));
const DOMRectReadOnly_js_1 = __importDefault(require("../dom/DOMRectReadOnly.cjs"));
const Element_js_1 = __importDefault(require("../nodes/element/Element.cjs"));
const HTMLCollection_js_1 = __importDefault(require("../nodes/element/HTMLCollection.cjs"));
const HTMLAnchorElement_js_1 = __importDefault(require("../nodes/html-anchor-element/HTMLAnchorElement.cjs"));
const HTMLAreaElement_js_1 = __importDefault(require("../nodes/html-area-element/HTMLAreaElement.cjs"));
const HTMLAudioElement_js_1 = __importDefault(require("../nodes/html-audio-element/HTMLAudioElement.cjs"));
const HTMLBaseElement_js_1 = __importDefault(require("../nodes/html-base-element/HTMLBaseElement.cjs"));
const HTMLBodyElement_js_1 = __importDefault(require("../nodes/html-body-element/HTMLBodyElement.cjs"));
const HTMLBRElement_js_1 = __importDefault(require("../nodes/html-br-element/HTMLBRElement.cjs"));
const HTMLButtonElement_js_1 = __importDefault(require("../nodes/html-button-element/HTMLButtonElement.cjs"));
const HTMLCanvasElement_js_1 = __importDefault(require("../nodes/html-canvas-element/HTMLCanvasElement.cjs"));
const HTMLDListElement_js_1 = __importDefault(require("../nodes/html-d-list-element/HTMLDListElement.cjs"));
const HTMLDataElement_js_1 = __importDefault(require("../nodes/html-data-element/HTMLDataElement.cjs"));
const HTMLDataListElement_js_1 = __importDefault(require("../nodes/html-data-list-element/HTMLDataListElement.cjs"));
const HTMLDetailsElement_js_1 = __importDefault(require("../nodes/html-details-element/HTMLDetailsElement.cjs"));
const HTMLDialogElement_js_1 = __importDefault(require("../nodes/html-dialog-element/HTMLDialogElement.cjs"));
const HTMLDivElement_js_1 = __importDefault(require("../nodes/html-div-element/HTMLDivElement.cjs"));
const HTMLElement_js_1 = __importDefault(require("../nodes/html-element/HTMLElement.cjs"));
const HTMLEmbedElement_js_1 = __importDefault(require("../nodes/html-embed-element/HTMLEmbedElement.cjs"));
const HTMLFieldSetElement_js_1 = __importDefault(require("../nodes/html-field-set-element/HTMLFieldSetElement.cjs"));
const HTMLFormControlsCollection_js_1 = __importDefault(require("../nodes/html-form-element/HTMLFormControlsCollection.cjs"));
const HTMLFormElement_js_1 = __importDefault(require("../nodes/html-form-element/HTMLFormElement.cjs"));
const RadioNodeList_js_1 = __importDefault(require("../nodes/html-form-element/RadioNodeList.cjs"));
const HTMLHeadElement_js_1 = __importDefault(require("../nodes/html-head-element/HTMLHeadElement.cjs"));
const HTMLHeadingElement_js_1 = __importDefault(require("../nodes/html-heading-element/HTMLHeadingElement.cjs"));
const HTMLHRElement_js_1 = __importDefault(require("../nodes/html-hr-element/HTMLHRElement.cjs"));
const HTMLHtmlElement_js_1 = __importDefault(require("../nodes/html-html-element/HTMLHtmlElement.cjs"));
const HTMLIFrameElement_js_1 = __importDefault(require("../nodes/html-iframe-element/HTMLIFrameElement.cjs"));
const HTMLImageElement_js_1 = __importDefault(require("../nodes/html-image-element/HTMLImageElement.cjs"));
const FileList_js_1 = __importDefault(require("../nodes/html-input-element/FileList.cjs"));
const HTMLInputElement_js_1 = __importDefault(require("../nodes/html-input-element/HTMLInputElement.cjs"));
const HTMLLabelElement_js_1 = __importDefault(require("../nodes/html-label-element/HTMLLabelElement.cjs"));
const HTMLLegendElement_js_1 = __importDefault(require("../nodes/html-legend-element/HTMLLegendElement.cjs"));
const HTMLLIElement_js_1 = __importDefault(require("../nodes/html-li-element/HTMLLIElement.cjs"));
const HTMLLinkElement_js_1 = __importDefault(require("../nodes/html-link-element/HTMLLinkElement.cjs"));
const HTMLMapElement_js_1 = __importDefault(require("../nodes/html-map-element/HTMLMapElement.cjs"));
const HTMLMediaElement_js_1 = __importDefault(require("../nodes/html-media-element/HTMLMediaElement.cjs"));
const RemotePlayback_js_1 = __importDefault(require("../nodes/html-media-element/RemotePlayback.cjs"));
const TextTrackCueList_js_1 = __importDefault(require("../nodes/html-media-element/TextTrackCueList.cjs"));
const TimeRanges_js_1 = __importDefault(require("../nodes/html-media-element/TimeRanges.cjs"));
const HTMLMenuElement_js_1 = __importDefault(require("../nodes/html-menu-element/HTMLMenuElement.cjs"));
const HTMLMetaElement_js_1 = __importDefault(require("../nodes/html-meta-element/HTMLMetaElement.cjs"));
const HTMLMeterElement_js_1 = __importDefault(require("../nodes/html-meter-element/HTMLMeterElement.cjs"));
const HTMLModElement_js_1 = __importDefault(require("../nodes/html-mod-element/HTMLModElement.cjs"));
const HTMLOListElement_js_1 = __importDefault(require("../nodes/html-o-list-element/HTMLOListElement.cjs"));
const HTMLObjectElement_js_1 = __importDefault(require("../nodes/html-object-element/HTMLObjectElement.cjs"));
const HTMLOptGroupElement_js_1 = __importDefault(require("../nodes/html-opt-group-element/HTMLOptGroupElement.cjs"));
const HTMLOptionElement_js_1 = __importDefault(require("../nodes/html-option-element/HTMLOptionElement.cjs"));
const HTMLOutputElement_js_1 = __importDefault(require("../nodes/html-output-element/HTMLOutputElement.cjs"));
const HTMLParagraphElement_js_1 = __importDefault(require("../nodes/html-paragraph-element/HTMLParagraphElement.cjs"));
const HTMLParamElement_js_1 = __importDefault(require("../nodes/html-param-element/HTMLParamElement.cjs"));
const HTMLPictureElement_js_1 = __importDefault(require("../nodes/html-picture-element/HTMLPictureElement.cjs"));
const HTMLPreElement_js_1 = __importDefault(require("../nodes/html-pre-element/HTMLPreElement.cjs"));
const HTMLProgressElement_js_1 = __importDefault(require("../nodes/html-progress-element/HTMLProgressElement.cjs"));
const HTMLQuoteElement_js_1 = __importDefault(require("../nodes/html-quote-element/HTMLQuoteElement.cjs"));
const HTMLScriptElement_js_1 = __importDefault(require("../nodes/html-script-element/HTMLScriptElement.cjs"));
const HTMLSelectElement_js_1 = __importDefault(require("../nodes/html-select-element/HTMLSelectElement.cjs"));
const HTMLSlotElement_js_1 = __importDefault(require("../nodes/html-slot-element/HTMLSlotElement.cjs"));
const HTMLSourceElement_js_1 = __importDefault(require("../nodes/html-source-element/HTMLSourceElement.cjs"));
const HTMLSpanElement_js_1 = __importDefault(require("../nodes/html-span-element/HTMLSpanElement.cjs"));
const HTMLStyleElement_js_1 = __importDefault(require("../nodes/html-style-element/HTMLStyleElement.cjs"));
const HTMLTableCaptionElement_js_1 = __importDefault(require("../nodes/html-table-caption-element/HTMLTableCaptionElement.cjs"));
const HTMLTableCellElement_js_1 = __importDefault(require("../nodes/html-table-cell-element/HTMLTableCellElement.cjs"));
const HTMLTableColElement_js_1 = __importDefault(require("../nodes/html-table-col-element/HTMLTableColElement.cjs"));
const HTMLTableElement_js_1 = __importDefault(require("../nodes/html-table-element/HTMLTableElement.cjs"));
const HTMLTableRowElement_js_1 = __importDefault(require("../nodes/html-table-row-element/HTMLTableRowElement.cjs"));
const HTMLTableSectionElement_js_1 = __importDefault(require("../nodes/html-table-section-element/HTMLTableSectionElement.cjs"));
const HTMLTemplateElement_js_1 = __importDefault(require("../nodes/html-template-element/HTMLTemplateElement.cjs"));
const HTMLTextAreaElement_js_1 = __importDefault(require("../nodes/html-text-area-element/HTMLTextAreaElement.cjs"));
const HTMLTimeElement_js_1 = __importDefault(require("../nodes/html-time-element/HTMLTimeElement.cjs"));
const HTMLTitleElement_js_1 = __importDefault(require("../nodes/html-title-element/HTMLTitleElement.cjs"));
const HTMLTrackElement_js_1 = __importDefault(require("../nodes/html-track-element/HTMLTrackElement.cjs"));
const HTMLUListElement_js_1 = __importDefault(require("../nodes/html-u-list-element/HTMLUListElement.cjs"));
const HTMLUnknownElement_js_1 = __importDefault(require("../nodes/html-unknown-element/HTMLUnknownElement.cjs"));
const HTMLVideoElement_js_1 = __importDefault(require("../nodes/html-video-element/HTMLVideoElement.cjs"));
const Node_js_1 = __importDefault(require("../nodes/node/Node.cjs"));
const NodeList_js_1 = __importDefault(require("../nodes/node/NodeList.cjs"));
const ProcessingInstruction_js_1 = __importDefault(require("../nodes/processing-instruction/ProcessingInstruction.cjs"));
const ShadowRoot_js_1 = __importDefault(require("../nodes/shadow-root/ShadowRoot.cjs"));
const SVGElement_js_1 = __importDefault(require("../nodes/svg-element/SVGElement.cjs"));
const Permissions_js_1 = __importDefault(require("../permissions/Permissions.cjs"));
const ResizeObserver_js_1 = __importDefault(require("../resize-observer/ResizeObserver.cjs"));
const Screen_js_1 = __importDefault(require("../screen/Screen.cjs"));
const Storage_js_1 = __importDefault(require("../storage/Storage.cjs"));
const NodeFilter_js_1 = __importDefault(require("../tree-walker/NodeFilter.cjs"));
const URL_js_1 = __importDefault(require("../url/URL.cjs"));
const ValidityState_js_1 = __importDefault(require("../validity-state/ValidityState.cjs"));
const VMGlobalPropertyScript_js_1 = __importDefault(require("./VMGlobalPropertyScript.cjs"));
const WindowPageOpenUtility_js_1 = __importDefault(require("./WindowPageOpenUtility.cjs"));
const node_perf_hooks_1 = require("node:perf_hooks");
const EventPhaseEnum_js_1 = __importDefault(require("../event/EventPhaseEnum.cjs"));
const HTMLOptionsCollection_js_1 = __importDefault(require("../nodes/html-select-element/HTMLOptionsCollection.cjs"));
const WindowContextClassExtender_js_1 = __importDefault(require("./WindowContextClassExtender.cjs"));
const WindowBrowserContext_js_1 = __importDefault(require("./WindowBrowserContext.cjs"));
const SVGSVGElement_js_1 = __importDefault(require("../nodes/svg-svg-element/SVGSVGElement.cjs"));
const SVGGraphicsElement_js_1 = __importDefault(require("../nodes/svg-graphics-element/SVGGraphicsElement.cjs"));
const SVGAnimateElement_js_1 = __importDefault(require("../nodes/svg-animate-element/SVGAnimateElement.cjs"));
const SVGAnimateMotionElement_js_1 = __importDefault(require("../nodes/svg-animate-motion-element/SVGAnimateMotionElement.cjs"));
const SVGAnimateTransformElement_js_1 = __importDefault(require("../nodes/svg-animate-transform-element/SVGAnimateTransformElement.cjs"));
const SVGCircleElement_js_1 = __importDefault(require("../nodes/svg-circle-element/SVGCircleElement.cjs"));
const SVGClipPathElement_js_1 = __importDefault(require("../nodes/svg-clip-path-element/SVGClipPathElement.cjs"));
const SVGDefsElement_js_1 = __importDefault(require("../nodes/svg-defs-element/SVGDefsElement.cjs"));
const SVGDescElement_js_1 = __importDefault(require("../nodes/svg-desc-element/SVGDescElement.cjs"));
const SVGEllipseElement_js_1 = __importDefault(require("../nodes/svg-ellipse-element/SVGEllipseElement.cjs"));
const SVGFEBlendElement_js_1 = __importDefault(require("../nodes/svg-fe-blend-element/SVGFEBlendElement.cjs"));
const SVGFEColorMatrixElement_js_1 = __importDefault(require("../nodes/svg-fe-color-matrix-element/SVGFEColorMatrixElement.cjs"));
const SVGFEComponentTransferElement_js_1 = __importDefault(require("../nodes/svg-fe-component-transfer-element/SVGFEComponentTransferElement.cjs"));
const SVGFECompositeElement_js_1 = __importDefault(require("../nodes/svg-fe-composite-element/SVGFECompositeElement.cjs"));
const SVGFEConvolveMatrixElement_js_1 = __importDefault(require("../nodes/svg-fe-convolve-matrix-element/SVGFEConvolveMatrixElement.cjs"));
const SVGFEDiffuseLightingElement_js_1 = __importDefault(require("../nodes/svg-fe-diffuse-lighting-element/SVGFEDiffuseLightingElement.cjs"));
const SVGFEDisplacementMapElement_js_1 = __importDefault(require("../nodes/svg-fe-displacement-map-element/SVGFEDisplacementMapElement.cjs"));
const SVGFEDistantLightElement_js_1 = __importDefault(require("../nodes/svg-fe-distant-light-element/SVGFEDistantLightElement.cjs"));
const SVGFEDropShadowElement_js_1 = __importDefault(require("../nodes/svg-fe-drop-shadow-element/SVGFEDropShadowElement.cjs"));
const SVGFEFloodElement_js_1 = __importDefault(require("../nodes/svg-fe-flood-element/SVGFEFloodElement.cjs"));
const SVGFEFuncAElement_js_1 = __importDefault(require("../nodes/svg-fe-func-a-element/SVGFEFuncAElement.cjs"));
const SVGFEFuncBElement_js_1 = __importDefault(require("../nodes/svg-fe-func-b-element/SVGFEFuncBElement.cjs"));
const SVGFEFuncGElement_js_1 = __importDefault(require("../nodes/svg-fe-func-g-element/SVGFEFuncGElement.cjs"));
const SVGFEFuncRElement_js_1 = __importDefault(require("../nodes/svg-fe-func-r-element/SVGFEFuncRElement.cjs"));
const SVGFEGaussianBlurElement_js_1 = __importDefault(require("../nodes/svg-fe-gaussian-blur-element/SVGFEGaussianBlurElement.cjs"));
const SVGFEImageElement_js_1 = __importDefault(require("../nodes/svg-fe-image-element/SVGFEImageElement.cjs"));
const SVGFEMergeElement_js_1 = __importDefault(require("../nodes/svg-fe-merge-element/SVGFEMergeElement.cjs"));
const SVGFEMergeNodeElement_js_1 = __importDefault(require("../nodes/svg-fe-merge-node-element/SVGFEMergeNodeElement.cjs"));
const SVGFEMorphologyElement_js_1 = __importDefault(require("../nodes/svg-fe-morphology-element/SVGFEMorphologyElement.cjs"));
const SVGFEOffsetElement_js_1 = __importDefault(require("../nodes/svg-fe-offset-element/SVGFEOffsetElement.cjs"));
const SVGFEPointLightElement_js_1 = __importDefault(require("../nodes/svg-fe-point-light-element/SVGFEPointLightElement.cjs"));
const SVGFESpecularLightingElement_js_1 = __importDefault(require("../nodes/svg-fe-specular-lighting-element/SVGFESpecularLightingElement.cjs"));
const SVGFESpotLightElement_js_1 = __importDefault(require("../nodes/svg-fe-spot-light-element/SVGFESpotLightElement.cjs"));
const SVGFETileElement_js_1 = __importDefault(require("../nodes/svg-fe-tile-element/SVGFETileElement.cjs"));
const SVGFETurbulenceElement_js_1 = __importDefault(require("../nodes/svg-fe-turbulence-element/SVGFETurbulenceElement.cjs"));
const SVGFilterElement_js_1 = __importDefault(require("../nodes/svg-filter-element/SVGFilterElement.cjs"));
const SVGForeignObjectElement_js_1 = __importDefault(require("../nodes/svg-foreign-object-element/SVGForeignObjectElement.cjs"));
const SVGGElement_js_1 = __importDefault(require("../nodes/svg-g-element/SVGGElement.cjs"));
const SVGImageElement_js_1 = __importDefault(require("../nodes/svg-image-element/SVGImageElement.cjs"));
const SVGLineElement_js_1 = __importDefault(require("../nodes/svg-line-element/SVGLineElement.cjs"));
const SVGLinearGradientElement_js_1 = __importDefault(require("../nodes/svg-linear-gradient-element/SVGLinearGradientElement.cjs"));
const SVGMarkerElement_js_1 = __importDefault(require("../nodes/svg-marker-element/SVGMarkerElement.cjs"));
const SVGMaskElement_js_1 = __importDefault(require("../nodes/svg-mask-element/SVGMaskElement.cjs"));
const SVGMetadataElement_js_1 = __importDefault(require("../nodes/svg-metadata-element/SVGMetadataElement.cjs"));
const SVGMPathElement_js_1 = __importDefault(require("../nodes/svg-m-path-element/SVGMPathElement.cjs"));
const SVGPathElement_js_1 = __importDefault(require("../nodes/svg-path-element/SVGPathElement.cjs"));
const SVGPatternElement_js_1 = __importDefault(require("../nodes/svg-pattern-element/SVGPatternElement.cjs"));
const SVGPolygonElement_js_1 = __importDefault(require("../nodes/svg-polygon-element/SVGPolygonElement.cjs"));
const SVGPolylineElement_js_1 = __importDefault(require("../nodes/svg-polyline-element/SVGPolylineElement.cjs"));
const SVGRadialGradientElement_js_1 = __importDefault(require("../nodes/svg-radial-gradient-element/SVGRadialGradientElement.cjs"));
const SVGRectElement_js_1 = __importDefault(require("../nodes/svg-rect-element/SVGRectElement.cjs"));
const SVGScriptElement_js_1 = __importDefault(require("../nodes/svg-script-element/SVGScriptElement.cjs"));
const SVGSetElement_js_1 = __importDefault(require("../nodes/svg-set-element/SVGSetElement.cjs"));
const SVGStopElement_js_1 = __importDefault(require("../nodes/svg-stop-element/SVGStopElement.cjs"));
const SVGStyleElement_js_1 = __importDefault(require("../nodes/svg-style-element/SVGStyleElement.cjs"));
const SVGSwitchElement_js_1 = __importDefault(require("../nodes/svg-switch-element/SVGSwitchElement.cjs"));
const SVGSymbolElement_js_1 = __importDefault(require("../nodes/svg-symbol-element/SVGSymbolElement.cjs"));
const SVGTextElement_js_1 = __importDefault(require("../nodes/svg-text-element/SVGTextElement.cjs"));
const SVGTextPathElement_js_1 = __importDefault(require("../nodes/svg-text-path-element/SVGTextPathElement.cjs"));
const SVGTitleElement_js_1 = __importDefault(require("../nodes/svg-title-element/SVGTitleElement.cjs"));
const SVGTSpanElement_js_1 = __importDefault(require("../nodes/svg-t-span-element/SVGTSpanElement.cjs"));
const SVGUseElement_js_1 = __importDefault(require("../nodes/svg-use-element/SVGUseElement.cjs"));
const SVGViewElement_js_1 = __importDefault(require("../nodes/svg-view-element/SVGViewElement.cjs"));
const SVGAnimationElement_js_1 = __importDefault(require("../nodes/svg-animation-element/SVGAnimationElement.cjs"));
const SVGComponentTransferFunctionElement_js_1 = __importDefault(require("../nodes/svg-component-transfer-function-element/SVGComponentTransferFunctionElement.cjs"));
const SVGGeometryElement_js_1 = __importDefault(require("../nodes/svg-geometry-element/SVGGeometryElement.cjs"));
const SVGGradientElement_js_1 = __importDefault(require("../nodes/svg-gradient-element/SVGGradientElement.cjs"));
const SVGTextPositioningElement_js_1 = __importDefault(require("../nodes/svg-text-positioning-element/SVGTextPositioningElement.cjs"));
const DOMMatrixReadOnly_js_1 = __importDefault(require("../dom/dom-matrix/DOMMatrixReadOnly.cjs"));
const DOMMatrix_js_1 = __importDefault(require("../dom/dom-matrix/DOMMatrix.cjs"));
const SVGAngle_js_1 = __importDefault(require("../svg/SVGAngle.cjs"));
const SVGAnimatedAngle_js_1 = __importDefault(require("../svg/SVGAnimatedAngle.cjs"));
const SVGAnimatedBoolean_js_1 = __importDefault(require("../svg/SVGAnimatedBoolean.cjs"));
const SVGAnimatedEnumeration_js_1 = __importDefault(require("../svg/SVGAnimatedEnumeration.cjs"));
const SVGAnimatedInteger_js_1 = __importDefault(require("../svg/SVGAnimatedInteger.cjs"));
const SVGAnimatedLength_js_1 = __importDefault(require("../svg/SVGAnimatedLength.cjs"));
const SVGLength_js_1 = __importDefault(require("../svg/SVGLength.cjs"));
const SVGAnimatedNumber_js_1 = __importDefault(require("../svg/SVGAnimatedNumber.cjs"));
const SVGAnimatedNumberList_js_1 = __importDefault(require("../svg/SVGAnimatedNumberList.cjs"));
const SVGAnimatedPreserveAspectRatio_js_1 = __importDefault(require("../svg/SVGAnimatedPreserveAspectRatio.cjs"));
const SVGAnimatedRect_js_1 = __importDefault(require("../svg/SVGAnimatedRect.cjs"));
const SVGAnimatedString_js_1 = __importDefault(require("../svg/SVGAnimatedString.cjs"));
const SVGAnimatedTransformList_js_1 = __importDefault(require("../svg/SVGAnimatedTransformList.cjs"));
const SVGLengthList_js_1 = __importDefault(require("../svg/SVGLengthList.cjs"));
const SVGMatrix_js_1 = __importDefault(require("../svg/SVGMatrix.cjs"));
const SVGNumber_js_1 = __importDefault(require("../svg/SVGNumber.cjs"));
const SVGNumberList_js_1 = __importDefault(require("../svg/SVGNumberList.cjs"));
const SVGPoint_js_1 = __importDefault(require("../svg/SVGPoint.cjs"));
const SVGPointList_js_1 = __importDefault(require("../svg/SVGPointList.cjs"));
const SVGPreserveAspectRatio_js_1 = __importDefault(require("../svg/SVGPreserveAspectRatio.cjs"));
const SVGRect_js_1 = __importDefault(require("../svg/SVGRect.cjs"));
const SVGStringList_js_1 = __importDefault(require("../svg/SVGStringList.cjs"));
const SVGTransform_js_1 = __importDefault(require("../svg/SVGTransform.cjs"));
const SVGTransformList_js_1 = __importDefault(require("../svg/SVGTransformList.cjs"));
const SVGUnitTypes_js_1 = __importDefault(require("../svg/SVGUnitTypes.cjs"));
const DOMPoint_js_1 = __importDefault(require("../dom/DOMPoint.cjs"));
const SVGAnimatedLengthList_js_1 = __importDefault(require("../svg/SVGAnimatedLengthList.cjs"));
const CustomElementReactionStack_js_1 = __importDefault(require("../custom-element/CustomElementReactionStack.cjs"));
const TIMER = {
    setTimeout: globalThis.setTimeout.bind(globalThis),
    clearTimeout: globalThis.clearTimeout.bind(globalThis),
    setInterval: globalThis.setInterval.bind(globalThis),
    clearInterval: globalThis.clearInterval.bind(globalThis),
    queueMicrotask: globalThis.queueMicrotask.bind(globalThis),
    setImmediate: globalThis.setImmediate.bind(globalThis),
    clearImmediate: globalThis.clearImmediate.bind(globalThis)
};
const IS_NODE_JS_TIMEOUT_ENVIRONMENT = setTimeout.toString().includes('new Timeout');
/**
 * Class for PerformanceObserverEntryList as it is only available as an interface from Node.js.
 */
class PerformanceObserverEntryList {
    /**
     * Constructor.
     */
    constructor() {
        throw new TypeError('Illegal constructor');
    }
}
const prepareWindow = (browserFrame, options) => {
    // Assigning Node-related classes to globalThis
    globalThis['Node'] = Node_js_1.default;
    globalThis['Attr'] = Attr_js_1.default;
    globalThis['ShadowRoot'] = ShadowRoot_js_1.default;
    globalThis['ProcessingInstruction'] = ProcessingInstruction_js_1.default;
    globalThis['Element'] = Element_js_1.default;
    globalThis['CharacterData'] = CharacterData_js_1.default;
    globalThis['DocumentType'] = DocumentType_js_1.default;
    // Assigning HTML Element classes to globalThis
    globalThis['HTMLAnchorElement'] = HTMLAnchorElement_js_1.default;
    globalThis['HTMLButtonElement'] = HTMLButtonElement_js_1.default;
    globalThis['HTMLOptGroupElement'] = HTMLOptGroupElement_js_1.default;
    globalThis['HTMLOptionElement'] = HTMLOptionElement_js_1.default;
    globalThis['HTMLElement'] = HTMLElement_js_1.default;
    globalThis['HTMLUnknownElement'] = HTMLUnknownElement_js_1.default;
    globalThis['HTMLTemplateElement'] = HTMLTemplateElement_js_1.default;
    globalThis['HTMLInputElement'] = HTMLInputElement_js_1.default;
    globalThis['HTMLSelectElement'] = HTMLSelectElement_js_1.default;
    globalThis['HTMLTextAreaElement'] = HTMLTextAreaElement_js_1.default;
    globalThis['HTMLImageElement'] = HTMLImageElement_js_1.default;
    globalThis['HTMLStyleElement'] = HTMLStyleElement_js_1.default;
    globalThis['HTMLLabelElement'] = HTMLLabelElement_js_1.default;
    globalThis['HTMLSlotElement'] = HTMLSlotElement_js_1.default;
    globalThis['HTMLMetaElement'] = HTMLMetaElement_js_1.default;
    globalThis['HTMLMediaElement'] = HTMLMediaElement_js_1.default;
    globalThis['HTMLAudioElement'] = HTMLAudioElement_js_1.default;
    globalThis['HTMLVideoElement'] = HTMLVideoElement_js_1.default;
    globalThis['HTMLBaseElement'] = HTMLBaseElement_js_1.default;
    globalThis['HTMLDialogElement'] = HTMLDialogElement_js_1.default;
    globalThis['HTMLScriptElement'] = HTMLScriptElement_js_1.default;
    globalThis['HTMLLinkElement'] = HTMLLinkElement_js_1.default;
    globalThis['HTMLIFrameElement'] = HTMLIFrameElement_js_1.default;
    globalThis['HTMLFormElement'] = HTMLFormElement_js_1.default;
    globalThis['HTMLUListElement'] = HTMLUListElement_js_1.default;
    globalThis['HTMLTrackElement'] = HTMLTrackElement_js_1.default;
    globalThis['HTMLTableRowElement'] = HTMLTableRowElement_js_1.default;
    globalThis['HTMLTitleElement'] = HTMLTitleElement_js_1.default;
    globalThis['HTMLTimeElement'] = HTMLTimeElement_js_1.default;
    globalThis['HTMLTableSectionElement'] = HTMLTableSectionElement_js_1.default;
    globalThis['HTMLTableCellElement'] = HTMLTableCellElement_js_1.default;
    globalThis['HTMLTableElement'] = HTMLTableElement_js_1.default;
    globalThis['HTMLSpanElement'] = HTMLSpanElement_js_1.default;
    globalThis['HTMLSourceElement'] = HTMLSourceElement_js_1.default;
    globalThis['HTMLQuoteElement'] = HTMLQuoteElement_js_1.default;
    globalThis['HTMLProgressElement'] = HTMLProgressElement_js_1.default;
    globalThis['HTMLPreElement'] = HTMLPreElement_js_1.default;
    globalThis['HTMLPictureElement'] = HTMLPictureElement_js_1.default;
    globalThis['HTMLParamElement'] = HTMLParamElement_js_1.default;
    globalThis['HTMLParagraphElement'] = HTMLParagraphElement_js_1.default;
    globalThis['HTMLOutputElement'] = HTMLOutputElement_js_1.default;
    globalThis['HTMLOListElement'] = HTMLOListElement_js_1.default;
    globalThis['HTMLObjectElement'] = HTMLObjectElement_js_1.default;
    globalThis['HTMLMeterElement'] = HTMLMeterElement_js_1.default;
    globalThis['HTMLMenuElement'] = HTMLMenuElement_js_1.default;
    globalThis['HTMLMapElement'] = HTMLMapElement_js_1.default;
    globalThis['HTMLLIElement'] = HTMLLIElement_js_1.default;
    globalThis['HTMLLegendElement'] = HTMLLegendElement_js_1.default;
    globalThis['HTMLModElement'] = HTMLModElement_js_1.default;
    globalThis['HTMLHtmlElement'] = HTMLHtmlElement_js_1.default;
    globalThis['HTMLHRElement'] = HTMLHRElement_js_1.default;
    globalThis['HTMLHeadElement'] = HTMLHeadElement_js_1.default;
    globalThis['HTMLHeadingElement'] = HTMLHeadingElement_js_1.default;
    globalThis['HTMLFieldSetElement'] = HTMLFieldSetElement_js_1.default;
    globalThis['HTMLEmbedElement'] = HTMLEmbedElement_js_1.default;
    globalThis['HTMLDListElement'] = HTMLDListElement_js_1.default;
    globalThis['HTMLDivElement'] = HTMLDivElement_js_1.default;
    globalThis['HTMLDetailsElement'] = HTMLDetailsElement_js_1.default;
    globalThis['HTMLDataListElement'] = HTMLDataListElement_js_1.default;
    globalThis['HTMLDataElement'] = HTMLDataElement_js_1.default;
    globalThis['HTMLTableColElement'] = HTMLTableColElement_js_1.default;
    globalThis['HTMLTableCaptionElement'] = HTMLTableCaptionElement_js_1.default;
    globalThis['HTMLCanvasElement'] = HTMLCanvasElement_js_1.default;
    globalThis['HTMLBRElement'] = HTMLBRElement_js_1.default;
    globalThis['HTMLBodyElement'] = HTMLBodyElement_js_1.default;
    globalThis['HTMLAreaElement'] = HTMLAreaElement_js_1.default;
    // Assigning SVG Element classes to globalThis
    globalThis['SVGSVGElement'] = SVGSVGElement_js_1.default;
    globalThis['SVGAnimateElement'] = SVGAnimateElement_js_1.default;
    globalThis['SVGAnimateMotionElement'] = SVGAnimateMotionElement_js_1.default;
    globalThis['SVGAnimateTransformElement'] = SVGAnimateTransformElement_js_1.default;
    globalThis['SVGCircleElement'] = SVGCircleElement_js_1.default;
    globalThis['SVGClipPathElement'] = SVGClipPathElement_js_1.default;
    globalThis['SVGDefsElement'] = SVGDefsElement_js_1.default;
    globalThis['SVGDescElement'] = SVGDescElement_js_1.default;
    globalThis['SVGEllipseElement'] = SVGEllipseElement_js_1.default;
    globalThis['SVGFEBlendElement'] = SVGFEBlendElement_js_1.default;
    globalThis['SVGFEColorMatrixElement'] = SVGFEColorMatrixElement_js_1.default;
    globalThis['SVGFEComponentTransferElement'] = SVGFEComponentTransferElement_js_1.default;
    globalThis['SVGFECompositeElement'] = SVGFECompositeElement_js_1.default;
    globalThis['SVGFEConvolveMatrixElement'] = SVGFEConvolveMatrixElement_js_1.default;
    globalThis['SVGFEDiffuseLightingElement'] = SVGFEDiffuseLightingElement_js_1.default;
    globalThis['SVGFEDisplacementMapElement'] = SVGFEDisplacementMapElement_js_1.default;
    globalThis['SVGFEDistantLightElement'] = SVGFEDistantLightElement_js_1.default;
    globalThis['SVGFEDropShadowElement'] = SVGFEDropShadowElement_js_1.default;
    globalThis['SVGFEFloodElement'] = SVGFEFloodElement_js_1.default;
    globalThis['SVGFEFuncAElement'] = SVGFEFuncAElement_js_1.default;
    globalThis['SVGFEFuncBElement'] = SVGFEFuncBElement_js_1.default;
    globalThis['SVGFEFuncGElement'] = SVGFEFuncGElement_js_1.default;
    globalThis['SVGFEFuncRElement'] = SVGFEFuncRElement_js_1.default;
    globalThis['SVGFEGaussianBlurElement'] = SVGFEGaussianBlurElement_js_1.default;
    globalThis['SVGFEImageElement'] = SVGFEImageElement_js_1.default;
    globalThis['SVGFEMergeElement'] = SVGFEMergeElement_js_1.default;
    globalThis['SVGFEMergeNodeElement'] = SVGFEMergeNodeElement_js_1.default;
    globalThis['SVGFEMorphologyElement'] = SVGFEMorphologyElement_js_1.default;
    globalThis['SVGFEOffsetElement'] = SVGFEOffsetElement_js_1.default;
    globalThis['SVGFEPointLightElement'] = SVGFEPointLightElement_js_1.default;
    globalThis['SVGFESpecularLightingElement'] = SVGFESpecularLightingElement_js_1.default;
    globalThis['SVGFESpotLightElement'] = SVGFESpotLightElement_js_1.default;
    globalThis['SVGFETileElement'] = SVGFETileElement_js_1.default;
    globalThis['SVGFETurbulenceElement'] = SVGFETurbulenceElement_js_1.default;
    globalThis['SVGFilterElement'] = SVGFilterElement_js_1.default;
    globalThis['SVGForeignObjectElement'] = SVGForeignObjectElement_js_1.default;
    globalThis['SVGGElement'] = SVGGElement_js_1.default;
    globalThis['SVGImageElement'] = SVGImageElement_js_1.default;
    globalThis['SVGLineElement'] = SVGLineElement_js_1.default;
    globalThis['SVGLinearGradientElement'] = SVGLinearGradientElement_js_1.default;
    globalThis['SVGMarkerElement'] = SVGMarkerElement_js_1.default;
    globalThis['SVGMaskElement'] = SVGMaskElement_js_1.default;
    globalThis['SVGMetadataElement'] = SVGMetadataElement_js_1.default;
    globalThis['SVGMPathElement'] = SVGMPathElement_js_1.default;
    globalThis['SVGPathElement'] = SVGPathElement_js_1.default;
    globalThis['SVGPatternElement'] = SVGPatternElement_js_1.default;
    globalThis['SVGPolygonElement'] = SVGPolygonElement_js_1.default;
    globalThis['SVGPolylineElement'] = SVGPolylineElement_js_1.default;
    globalThis['SVGRadialGradientElement'] = SVGRadialGradientElement_js_1.default;
    globalThis['SVGRectElement'] = SVGRectElement_js_1.default;
    globalThis['SVGScriptElement'] = SVGScriptElement_js_1.default;
    globalThis['SVGSetElement'] = SVGSetElement_js_1.default;
    globalThis['SVGStopElement'] = SVGStopElement_js_1.default;
    globalThis['SVGStyleElement'] = SVGStyleElement_js_1.default;
    globalThis['SVGSwitchElement'] = SVGSwitchElement_js_1.default;
    globalThis['SVGSymbolElement'] = SVGSymbolElement_js_1.default;
    globalThis['SVGTextElement'] = SVGTextElement_js_1.default;
    globalThis['SVGTextPathElement'] = SVGTextPathElement_js_1.default;
    globalThis['SVGTitleElement'] = SVGTitleElement_js_1.default;
    globalThis['SVGTSpanElement'] = SVGTSpanElement_js_1.default;
    globalThis['SVGUseElement'] = SVGUseElement_js_1.default;
    globalThis['SVGViewElement'] = SVGViewElement_js_1.default;
    // Abstract SVG Element classes
    globalThis['SVGElement'] = SVGElement_js_1.default;
    globalThis['SVGAnimationElement'] = SVGAnimationElement_js_1.default;
    globalThis['SVGComponentTransferFunctionElement'] = SVGComponentTransferFunctionElement_js_1.default;
    globalThis['SVGGeometryElement'] = SVGGeometryElement_js_1.default;
    globalThis['SVGGradientElement'] = SVGGradientElement_js_1.default;
    globalThis['SVGTextPositioningElement'] = SVGTextPositioningElement_js_1.default;
    globalThis['SVGGraphicsElement'] = SVGGraphicsElement_js_1.default;
    // Event classes
    // @ts-ignore
    globalThis['Event'] = Event_js_1.default;
    globalThis['UIEvent'] = UIEvent_js_1.default;
    globalThis['CustomEvent'] = CustomEvent_js_1.default;
    globalThis['AnimationEvent'] = AnimationEvent_js_1.default;
    globalThis['KeyboardEvent'] = KeyboardEvent_js_1.default;
    globalThis['MessageEvent'] = MessageEvent_js_1.default;
    globalThis['MouseEvent'] = MouseEvent_js_1.default;
    globalThis['PointerEvent'] = PointerEvent_js_1.default;
    globalThis['FocusEvent'] = FocusEvent_js_1.default;
    globalThis['WheelEvent'] = WheelEvent_js_1.default;
    globalThis['InputEvent'] = InputEvent_js_1.default;
    globalThis['ErrorEvent'] = ErrorEvent_js_1.default;
    globalThis['StorageEvent'] = StorageEvent_js_1.default;
    globalThis['SubmitEvent'] = SubmitEvent_js_1.default;
    globalThis['ProgressEvent'] = ProgressEvent_js_1.default;
    globalThis['MediaQueryListEvent'] = MediaQueryListEvent_js_1.default;
    globalThis['HashChangeEvent'] = HashChangeEvent_js_1.default;
    globalThis['ClipboardEvent'] = ClipboardEvent_js_1.default;
    globalThis['TouchEvent'] = TouchEvent_js_1.default;
    globalThis['Touch'] = Touch_js_1.default;
    // Assigning Event-related classes to globalThis
    globalThis['AudioProcessingEvent'] = Event_js_1.default;
    globalThis['BeforeInputEvent'] = Event_js_1.default;
    globalThis['BeforeUnloadEvent'] = Event_js_1.default;
    globalThis['BlobEvent'] = Event_js_1.default;
    globalThis['CloseEvent'] = Event_js_1.default;
    globalThis['CompositionEvent'] = Event_js_1.default;
    globalThis['CSSFontFaceLoadEvent'] = Event_js_1.default;
    globalThis['DeviceLightEvent'] = Event_js_1.default;
    globalThis['DeviceMotionEvent'] = Event_js_1.default;
    globalThis['DeviceOrientationEvent'] = Event_js_1.default;
    globalThis['DeviceProximityEvent'] = Event_js_1.default;
    globalThis['DOMTransactionEvent'] = Event_js_1.default;
    globalThis['DragEvent'] = Event_js_1.default;
    globalThis['EditingBeforeInputEvent'] = Event_js_1.default;
    globalThis['FetchEvent'] = Event_js_1.default;
    globalThis['GamepadEvent'] = Event_js_1.default;
    globalThis['IDBVersionChangeEvent'] = Event_js_1.default;
    globalThis['MediaStreamEvent'] = Event_js_1.default;
    globalThis['MutationEvent'] = Event_js_1.default;
    globalThis['OfflineAudioCompletionEvent'] = Event_js_1.default;
    globalThis['OverconstrainedError'] = Event_js_1.default;
    globalThis['PageTransitionEvent'] = Event_js_1.default;
    globalThis['PaymentRequestUpdateEvent'] = Event_js_1.default;
    globalThis['PopStateEvent'] = Event_js_1.default;
    globalThis['RelatedEvent'] = Event_js_1.default;
    globalThis['RTCDataChannelEvent'] = Event_js_1.default;
    globalThis['RTCIdentityErrorEvent'] = Event_js_1.default;
    globalThis['RTCIdentityEvent'] = Event_js_1.default;
    globalThis['RTCPeerConnectionIceEvent'] = Event_js_1.default;
    globalThis['SensorEvent'] = Event_js_1.default;
    globalThis['SVGEvent'] = Event_js_1.default;
    globalThis['SVGZoomEvent'] = Event_js_1.default;
    globalThis['TimeEvent'] = Event_js_1.default;
    globalThis['TrackEvent'] = Event_js_1.default;
    globalThis['TransitionEvent'] = Event_js_1.default;
    globalThis['UserProximityEvent'] = Event_js_1.default;
    globalThis['WebGLContextEvent'] = Event_js_1.default;
    globalThis['TextEvent'] = Event_js_1.default;
    globalThis['RemotePlayback'] = RemotePlayback_js_1.default;
    globalThis['Permissions'] = Permissions_js_1.default;
    globalThis['History'] = History_js_1.default;
    globalThis['Navigator'] = Navigator_js_1.default;
    globalThis['Clipboard'] = Clipboard_js_1.default;
    globalThis['TimeRanges'] = TimeRanges_js_1.default;
    globalThis['TextTrackCueList'] = TextTrackCueList_js_1.default;
    globalThis['ValidityState'] = ValidityState_js_1.default;
    globalThis['MutationRecord'] = MutationRecord_js_1.default;
    globalThis['IntersectionObserver'] = IntersectionObserver_js_1.default;
    globalThis['IntersectionObserverEntry'] = IntersectionObserverEntry_js_1.default;
    globalThis['CSSStyleDeclaration'] = CSSStyleDeclaration_js_1.default;
    globalThis['CSSRule'] = CSSRule_js_1.default;
    globalThis['CSSContainerRule'] = CSSContainerRule_js_1.default;
    globalThis['CSSFontFaceRule'] = CSSFontFaceRule_js_1.default;
    globalThis['CSSKeyframeRule'] = CSSKeyframeRule_js_1.default;
    globalThis['CSSKeyframesRule'] = CSSKeyframesRule_js_1.default;
    globalThis['CSSMediaRule'] = CSSMediaRule_js_1.default;
    globalThis['CSSStyleRule'] = CSSStyleRule_js_1.default;
    globalThis['CSSSupportsRule'] = CSSSupportsRule_js_1.default;
    globalThis['DOMRect'] = DOMRect_js_1.default;
    globalThis['DOMRectReadOnly'] = DOMRectReadOnly_js_1.default;
    globalThis['Plugin'] = Plugin_js_1.default;
    globalThis['PluginArray'] = PluginArray_js_1.default;
    globalThis['Location'] = Location_js_1.default;
    globalThis['CustomElementRegistry'] = CustomElementRegistry_js_1.default;
    globalThis['ResizeObserver'] = ResizeObserver_js_1.default;
    globalThis['URL'] = URL_js_1.default;
    globalThis['Blob'] = Blob_js_1.default;
    globalThis['File'] = File_js_1.default;
    globalThis['Storage'] = Storage_js_1.default;
    globalThis['MimeType'] = MimeType_js_1.default;
    globalThis['MimeTypeArray'] = MimeTypeArray_js_1.default;
    globalThis['NodeFilter'] = NodeFilter_js_1.default;
    globalThis['HTMLCollection'] = HTMLCollection_js_1.default;
    globalThis['HTMLFormControlsCollection'] = HTMLFormControlsCollection_js_1.default;
    globalThis['HTMLOptionsCollection'] = HTMLOptionsCollection_js_1.default;
    globalThis['NodeList'] = NodeList_js_1.default;
    globalThis['RadioNodeList'] = RadioNodeList_js_1.default;
    globalThis['FileList'] = FileList_js_1.default;
    globalThis['Screen'] = Screen_js_1.default;
    globalThis['DOMMatrixReadOnly'] = DOMMatrixReadOnly_js_1.default;
    globalThis['DOMMatrix'] = DOMMatrix_js_1.default;
    globalThis['SVGAngle'] = SVGAngle_js_1.default;
    globalThis['SVGAnimatedAngle'] = SVGAnimatedAngle_js_1.default;
    globalThis['SVGAnimatedBoolean'] = SVGAnimatedBoolean_js_1.default;
    globalThis['SVGAnimatedEnumeration'] = SVGAnimatedEnumeration_js_1.default;
    globalThis['SVGAnimatedInteger'] = SVGAnimatedInteger_js_1.default;
    globalThis['SVGAnimatedLength'] = SVGAnimatedLength_js_1.default;
    globalThis['SVGAnimatedNumber'] = SVGAnimatedNumber_js_1.default;
    globalThis['SVGAnimatedNumberList'] = SVGAnimatedNumberList_js_1.default;
    globalThis['SVGAnimatedPreserveAspectRatio'] = SVGAnimatedPreserveAspectRatio_js_1.default;
    globalThis['SVGAnimatedRect'] = SVGAnimatedRect_js_1.default;
    globalThis['SVGAnimatedString'] = SVGAnimatedString_js_1.default;
    globalThis['SVGAnimatedTransformList'] = SVGAnimatedTransformList_js_1.default;
    globalThis['SVGLength'] = SVGLength_js_1.default;
    globalThis['SVGLengthList'] = SVGLengthList_js_1.default;
    globalThis['SVGMatrix'] = SVGMatrix_js_1.default;
    globalThis['SVGNumber'] = SVGNumber_js_1.default;
    globalThis['SVGNumberList'] = SVGNumberList_js_1.default;
    globalThis['SVGPoint'] = SVGPoint_js_1.default;
    globalThis['SVGPointList'] = SVGPointList_js_1.default;
    globalThis['SVGPreserveAspectRatio'] = SVGPreserveAspectRatio_js_1.default;
    globalThis['SVGRect'] = SVGRect_js_1.default;
    globalThis['SVGStringList'] = SVGStringList_js_1.default;
    globalThis['SVGTransform'] = SVGTransform_js_1.default;
    globalThis['SVGTransformList'] = SVGTransformList_js_1.default;
    globalThis['SVGAnimatedLengthList'] = SVGAnimatedLengthList_js_1.default;
    globalThis['SVGUnitTypes'] = SVGUnitTypes_js_1.default;
    globalThis['DOMPoint'] = DOMPoint_js_1.default;
    globalThis['URLSearchParams'] = url_1.URLSearchParams;
    globalThis['WritableStream'] = stream_1.default.Writable;
    globalThis['ReadableStream'] = web_1.ReadableStream;
    globalThis['TransformStream'] = stream_1.default.Transform;
    globalThis['PerformanceObserver'] = node_perf_hooks_1.PerformanceObserver;
    globalThis['PerformanceEntry'] = node_perf_hooks_1.PerformanceEntry;
    globalThis['PerformanceObserverEntryList'] = PerformanceObserverEntryList;
    // Events
    globalThis['onload'] = null;
    globalThis['onerror'] = null;
    // Public properties.
    globalThis['window'] = globalThis;
    globalThis['customElements'] = new CustomElementRegistry_js_1.default(globalThis);
    globalThis['performance'] = performance;
    globalThis['screenLeft'] = 0;
    globalThis['screenTop'] = 0;
    globalThis['screenX'] = 0;
    globalThis['screenY'] = 0;
    globalThis['crypto'] = crypto_1.webcrypto;
    globalThis['TextEncoder'] = util_1.TextEncoder;
    globalThis['TextDecoder'] = util_1.TextDecoder;
    globalThis['closed'] = false;
    globalThis['name'] = '';
    // Node.js Globals (populated by VMGlobalPropertyScript)
    globalThis['Buffer'] = buffer_1.Buffer;
    // Public internal properties
    // Used for tracking capture event listeners to improve performance when they are not used.
    // See EventTarget class.
    globalThis[PropertySymbol.mutationObservers] = [];
    globalThis[PropertySymbol.readyStateManager] = new DocumentReadyStateManager_js_1.default(globalThis);
    globalThis[PropertySymbol.self] = globalThis;
    globalThis[PropertySymbol.top] = globalThis;
    globalThis[PropertySymbol.parent] = globalThis;
    globalThis[PropertySymbol.window] = globalThis;
    globalThis[PropertySymbol.internalId] = -1;
    globalThis[PropertySymbol.customElementReactionStack] = new CustomElementReactionStack_js_1.default(globalThis);
    globalThis[PropertySymbol.modules] = {
        json: new Map(),
        css: new Map(),
        esm: new Map()
    };
    globalThis[PropertySymbol.moduleImportMap] = null;
    // Private properties
    globalThis['_innerWidth'] = null;
    globalThis['_innerHeight'] = null;
    globalThis['_outerWidth'] = null;
    globalThis['_outerHeight'] = null;
    globalThis['_devicePixelRatio'] = null;
    globalThis['_zeroDelayTimeout'] = { timeouts: null };
    globalThis['_timerLoopStacks'] = [];
    Object.defineProperty(globalThis, 'self', {
        get() {
            return globalThis[PropertySymbol.self];
        },
        set(self) {
            globalThis[PropertySymbol.self] = self;
        }
    });
    Object.defineProperty(globalThis, 'top', {
        get() {
            return globalThis[PropertySymbol.top];
        }
    });
    Object.defineProperty(globalThis, 'parent', {
        get() {
            return globalThis[PropertySymbol.parent];
        },
        set(parent) {
            globalThis[PropertySymbol.parent] = parent;
        }
    });
    Object.defineProperty(globalThis, 'location', {
        get() {
            return globalThis[PropertySymbol.location];
        },
        set(href) {
            globalThis[PropertySymbol.location].href = href;
        }
    });
    Object.defineProperty(globalThis, 'history', {
        get() {
            return globalThis[PropertySymbol.history];
        }
    });
    Object.defineProperty(globalThis, 'navigator', {
        get() {
            return globalThis[PropertySymbol.navigator];
        }
    });
    Object.defineProperty(globalThis, 'screen', {
        get() {
            return globalThis[PropertySymbol.screen];
        }
    });
    Object.defineProperty(globalThis, 'sessionStorage', {
        get() {
            return globalThis[PropertySymbol.sessionStorage];
        }
    });
    Object.defineProperty(globalThis, 'localStorage', {
        get() {
            return globalThis[PropertySymbol.localStorage];
        }
    });
    Object.defineProperty(globalThis, 'opener', {
        get() {
            return globalThis._browserFrame[PropertySymbol.openerWindow];
        }
    });
    Object.defineProperty(globalThis, 'scrollX', {
        get() {
            return globalThis.document?.documentElement?.scrollLeft ?? 0;
        }
    });
    Object.defineProperty(globalThis, 'pageXOffset', {
        get() {
            return globalThis.scrollX;
        }
    });
    Object.defineProperty(globalThis, 'scrollY', {
        get() {
            return globalThis.document?.documentElement?.scrollTop ?? 0;
        }
    });
    Object.defineProperty(globalThis, 'pageYOffset', {
        get() {
            return globalThis.scrollY;
        }
    });
    Object.defineProperty(globalThis, 'CSS', {
        get() {
            return new CSS_js_1.default();
        }
    });
    Object.defineProperty(globalThis, 'innerWidth', {
        get() {
            if (globalThis._innerWidth === null) {
                return globalThis._browserFrame.page.viewport.width;
            }
            return globalThis._innerWidth;
        },
        set(value) {
            globalThis._innerWidth = value;
        }
    });
    Object.defineProperty(globalThis, 'innerHeight', {
        get() {
            // It seems like this value can be defined according to spec, but changing it has no effect on the actual viewport.
            if (globalThis._innerHeight === null) {
                return globalThis._browserFrame.page.viewport.height;
            }
            return globalThis._innerHeight;
        },
        set(value) {
            globalThis._innerHeight = value;
        }
    });
    Object.defineProperty(globalThis, 'outerWidth', {
        get() {
            // It seems like this value can be defined according to spec, but changing it has no effect on the actual viewport.
            if (globalThis._outerWidth === null) {
                return globalThis._browserFrame.page.viewport.width;
            }
            return globalThis._outerWidth;
        },
        set(value) {
            globalThis._outerWidth = value;
        }
    });
    Object.defineProperty(globalThis, 'outerHeight', {
        get() {
            if (globalThis._outerHeight === null) {
                return globalThis._browserFrame.page.viewport.height;
            }
            return globalThis._outerHeight;
        },
        set(value) {
            globalThis._outerHeight = value;
        }
    });
    Object.defineProperty(globalThis, 'devicePixelRatio', {
        get() {
            // It seems like this value can be defined according to spec, but changing it has no effect on the actual viewport.
            if (globalThis._devicePixelRatio === null) {
                return globalThis._browserFrame.page.viewport.devicePixelRatio;
            }
            return globalThis._devicePixelRatio;
        },
        set(value) {
            globalThis._devicePixelRatio = value;
        }
    });
    globalThis['getComputedStyle'] = function (element) {
        element[PropertySymbol.computedStyle] =
            element[PropertySymbol.computedStyle] ||
                new CSSStyleDeclaration_js_1.default(PropertySymbol.illegalConstructor, this, { element, computed: true });
        return element[PropertySymbol.computedStyle];
    }.bind(globalThis);
    globalThis['getSelection'] = function () {
        return this.document.getSelection();
    }.bind(globalThis);
    globalThis['scroll'] = function (x, y) {
        if (typeof x !== 'object' && arguments.length === 1) {
            throw new this.TypeError("Failed to execute 'scroll' on 'Window': The provided value is not of type 'ScrollToOptions'.");
        }
        const options = typeof x === 'object' ? x : { left: x, top: y };
        if (options.behavior === 'smooth') {
            this.setTimeout(() => {
                if (options.top !== undefined) {
                    const top = Number(options.top);
                    this.document.documentElement.scrollTop = isNaN(top) ? 0 : top;
                }
                if (options.left !== undefined) {
                    const left = Number(options.left);
                    this.document.documentElement.scrollLeft = isNaN(left) ? 0 : left;
                }
            });
        }
        else {
            if (options.top !== undefined) {
                const top = Number(options.top);
                this.document.documentElement.scrollTop = isNaN(top) ? 0 : top;
            }
            if (options.left !== undefined) {
                const left = Number(options.left);
                this.document.documentElement.scrollLeft = isNaN(left) ? 0 : left;
            }
        }
    }.bind(globalThis);
    globalThis['scrollTo'] = function (x, y) {
        if (typeof x !== 'object' && arguments.length === 1) {
            throw new this.TypeError("Failed to execute 'scrollTo' on 'Window': The provided value is not of type 'ScrollToOptions'.");
        }
        this.scroll(x, y);
    }.bind(globalThis);
    globalThis['scrollBy'] = function (x, y) {
        if (typeof x !== 'object' && arguments.length === 1) {
            throw new this.TypeError("Failed to execute 'scrollBy' on 'Window': The provided value is not of type 'ScrollToOptions'.");
        }
        const options = typeof x === 'object' ? x : { left: x, top: y };
        this.scroll({
            left: this.document.documentElement.scrollLeft + (options.left ?? 0),
            top: this.document.documentElement.scrollTop + (options.top ?? 0),
            behavior: options.behavior
        });
    }.bind(globalThis);
    globalThis['open'] = function (url, target, features) {
        return WindowPageOpenUtility_js_1.default.openPage(globalThis._browserFrame, {
            url,
            target,
            features
        });
    }.bind(globalThis);
    globalThis['close'] = function () {
        // When using a Window instance directly, the Window instance is the main frame and we will close the page and destroy the browser.
        // When using the Browser API we should only close the page when the Window instance is connected to the main frame (we should not close child frames such as iframes).
        if (globalThis._browserFrame.page?.mainFrame === globalThis._browserFrame) {
            globalThis[PropertySymbol.destroy]();
            globalThis._browserFrame.page.close();
        }
    }.bind(globalThis);
    globalThis['matchMedia'] = function (mediaQueryString) {
        return new MediaQueryList_js_1.default({ window: globalThis, media: mediaQueryString });
    }.bind(globalThis);
    globalThis['cancelAnimationFrame'] = function (id) {
        // We need to make sure that the ID is an Immediate object, otherwise Node.js might throw an error.
        // This is only necessary if we are in a Node.js environment.
        if (IS_NODE_JS_TIMEOUT_ENVIRONMENT && (!id || id.constructor.name !== 'Immediate')) {
            return;
        }
        TIMER.clearImmediate(id);
        globalThis._browserFrame[PropertySymbol.asyncTaskManager].endImmediate(id);
    }.bind(globalThis);
    globalThis['queueMicrotask'] = function (callback) {
        if (globalThis.closed) {
            return;
        }
        let isAborted = false;
        const taskId = globalThis._browserFrame[PropertySymbol.asyncTaskManager].startTask(() => (isAborted = true));
        const settings = globalThis._browserFrame.page?.context?.browser?.settings;
        const useTryCatch = !settings ||
            (!settings.disableErrorCapturing &&
                settings.errorCapture === BrowserErrorCaptureEnum_js_1.default.tryAndCatch);
        TIMER.queueMicrotask(() => {
            if (!isAborted) {
                // We need to call endTask() before the callback as the callback might throw an error.
                globalThis._browserFrame[PropertySymbol.asyncTaskManager].endTask(taskId);
                if (useTryCatch) {
                    let result;
                    try {
                        result = callback();
                    }
                    catch (error) {
                        globalThis[PropertySymbol.dispatchError](error);
                    }
                    if (result instanceof Promise) {
                        result.catch((error) => globalThis[PropertySymbol.dispatchError](error));
                    }
                }
                else {
                    callback();
                }
            }
        });
    }.bind(globalThis);
    globalThis['fetch'] = async function (url, init) {
        if (globalThis.closed) {
            return Promise.reject(new globalThis.DOMException("Failed to execute 'fetch' on 'Window': The window is closed.", DOMExceptionNameEnum_js_1.default.invalidStateError));
        }
        return await new Fetch_js_1.default({
            browserFrame: globalThis._browserFrame,
            window: globalThis,
            url,
            init
        }).send();
    }.bind(globalThis);
    globalThis['btoa'] = function (data) {
        return Base64_js_1.default.btoa(data);
    }.bind(globalThis);
    globalThis['atob'] = function (data) {
        return Base64_js_1.default.atob(data);
    }.bind(globalThis);
    globalThis['postMessage'] = function (message, targetOrigin = '*', _transfer) {
        // TODO: Implement transfer.
        if (globalThis.closed) {
            return;
        }
        if (targetOrigin && targetOrigin !== '*' && globalThis.location.origin !== targetOrigin) {
            throw new globalThis.DOMException(`Failed to execute 'postMessage' on 'Window': The target origin provided ('${targetOrigin}') does not match the recipient window\'s origin ('${globalThis.location.origin}').`, DOMExceptionNameEnum_js_1.default.securityError);
        }
        try {
            JSON.stringify(message);
        }
        catch (error) {
            throw new globalThis.DOMException(`Failed to execute 'postMessage' on 'Window': The provided message cannot be serialized.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        globalThis.setTimeout(() => globalThis.dispatchEvent(new MessageEvent_js_1.default('message', {
            data: message,
            origin: globalThis._browserFrame.parentFrame
                ? globalThis._browserFrame.parentFrame.window.location.origin
                : globalThis._browserFrame.window.location.origin,
            source: globalThis._browserFrame.parentFrame
                ? globalThis._browserFrame.parentFrame.window
                : globalThis._browserFrame.window,
            lastEventId: ''
        })));
    }.bind(globalThis);
    globalThis['resizeTo'] = function (width, height) {
        if (globalThis.closed) {
            return;
        }
        if (!width || !height) {
            throw new globalThis.DOMException(`Failed to execute 'resizeTo' on 'Window': 2 arguments required, but only ${arguments.length} present.`);
        }
        // We can only resize the window if it is a popup.
        if (globalThis._browserFrame[PropertySymbol.popup]) {
            globalThis._browserFrame.page.setViewport({ width, height });
        }
    }.bind(globalThis);
    globalThis['resizeBy'] = function (width, height) {
        if (globalThis.closed) {
            return;
        }
        if (!width || !height) {
            throw new globalThis.DOMException(`Failed to execute 'resizeBy' on 'Window': 2 arguments required, but only ${arguments.length} present.`);
        }
        // We can only resize the window if it is a popup.
        if (globalThis._browserFrame[PropertySymbol.popup]) {
            const viewport = globalThis._browserFrame.page.viewport;
            globalThis._browserFrame.page.setViewport({
                width: viewport.width + width,
                height: viewport.height + height
            });
        }
    }.bind(globalThis);
    globalThis[PropertySymbol.dispatchError] = function (error) {
        globalThis._browserFrame?.page?.console.error(error);
        globalThis.dispatchEvent(new ErrorEvent_js_1.default('error', { message: error.message, error }));
    }.bind(globalThis);
    globalThis[PropertySymbol.setupVMContext] = function () {
        if (!vm_1.default.isContext(globalThis)) {
            vm_1.default.createContext(globalThis);
            // Sets global properties from the VM to the Window object.
            // Otherwise "this.Array" will be undefined for example.
            VMGlobalPropertyScript_js_1.default.runInContext(globalThis);
        }
    }.bind(globalThis);
    globalThis[PropertySymbol.destroy] = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const mutationObservers = this[PropertySymbol.mutationObservers];
        for (const mutationObserver of mutationObservers) {
            if (mutationObserver[PropertySymbol.destroy]) {
                mutationObserver[PropertySymbol.destroy]();
            }
        }
        this[PropertySymbol.mutationObservers] = [];
        this[PropertySymbol.asyncTaskManager] = null;
        this[PropertySymbol.mutationObservers] = [];
        // Disconnects nodes from the document, so that they can be garbage collected.
        const childNodes = this.document[PropertySymbol.nodeArray];
        while (childNodes.length > 0) {
            // Makes sure that something won't be triggered by the disconnect.
            if (childNodes[0].disconnectedCallback) {
                delete childNodes[0].disconnectedCallback;
            }
            this.document[PropertySymbol.removeChild](childNodes[0]);
        }
        // Create some empty elements for scripts that are still running.
        const htmlElement = this.document.createElement('html');
        const headElement = this.document.createElement('head');
        const bodyElement = this.document.createElement('body');
        htmlElement.appendChild(headElement);
        htmlElement.appendChild(bodyElement);
        this.document[PropertySymbol.appendChild](htmlElement);
        if (this.location[PropertySymbol.destroy]) {
            this.location[PropertySymbol.destroy]();
        }
        if (this.customElements[PropertySymbol.destroy]) {
            this.customElements[PropertySymbol.destroy]();
        }
        if (this.history[PropertySymbol.destroy]) {
            this.history[PropertySymbol.destroy]();
        }
        this[PropertySymbol.modules].json.clear();
        this[PropertySymbol.modules].css.clear();
        this[PropertySymbol.modules].esm.clear();
        this.document[PropertySymbol.preloads].clear();
        this.document[PropertySymbol.activeElement] = null;
        this.document[PropertySymbol.nextActiveElement] = null;
        this.document[PropertySymbol.currentScript] = null;
        this.document[PropertySymbol.selection] = null;
        WindowBrowserContext_js_1.default.removeWindowBrowserFrameRelation(this);
    }.bind(globalThis);
    // constructor definition
    const globalThisEventTarget = new EventTarget_js_1.default();
    globalThis['addEventListener'] = globalThisEventTarget.addEventListener.bind(globalThis);
    globalThis['dispatchEvent'] = globalThisEventTarget.dispatchEvent.bind(globalThis);
    globalThis['removeEventListener'] = globalThisEventTarget.removeEventListener.bind(globalThis);
    globalThis['attachEvent'] = globalThisEventTarget.attachEvent.bind(globalThis);
    globalThis['detachEvent'] = globalThisEventTarget.detachEvent.bind(globalThis);
    globalThis[PropertySymbol.listeners] = globalThisEventTarget[PropertySymbol.listeners];
    globalThis[PropertySymbol.listenerOptions] =
        globalThisEventTarget[PropertySymbol.listenerOptions];
    Object.defineProperty(globalThis, Symbol.toStringTag, {
        get() {
            return 'EventTarget';
        }
    });
    globalThis._browserFrame = browserFrame;
    globalThis[PropertySymbol.navigator] = new Navigator_js_1.default(globalThis);
    globalThis[PropertySymbol.screen] = new Screen_js_1.default();
    globalThis[PropertySymbol.sessionStorage] = new Storage_js_1.default();
    globalThis[PropertySymbol.localStorage] = new Storage_js_1.default();
    globalThis[PropertySymbol.location] = new Location_js_1.default(globalThis._browserFrame, options?.url ?? 'about:blank');
    globalThis[PropertySymbol.history] = new History_js_1.default(globalThis._browserFrame, globalThis);
    WindowBrowserContext_js_1.default.setWindowBrowserFrameRelation(globalThis, globalThis._browserFrame);
    globalThis[PropertySymbol.setupVMContext]();
    WindowContextClassExtender_js_1.default.extendClasses(globalThis);
    // Document
    globalThis.document = new globalThis.HTMLDocument();
    globalThis.document[PropertySymbol.defaultView] = globalThis;
    // Ready state manager
    globalThis[PropertySymbol.readyStateManager].waitUntilComplete().then(() => {
        globalThis.document[PropertySymbol.readyState] = DocumentReadyStateEnum_js_1.default.complete;
        globalThis.document.dispatchEvent(new Event_js_1.default('readystatechange'));
        // Not sure why target is set to document here, but this is how it works in the browser
        const loadEvent = new Event_js_1.default('load');
        // @ts-ignore
        loadEvent[PropertySymbol.currentTarget] = globalThis;
        loadEvent[PropertySymbol.target] = globalThis.document;
        loadEvent[PropertySymbol.eventPhase] = EventPhaseEnum_js_1.default.atTarget;
        globalThis.dispatchEvent(loadEvent);
        loadEvent[PropertySymbol.currentTarget] = null;
        loadEvent[PropertySymbol.eventPhase] = EventPhaseEnum_js_1.default.none;
        loadEvent[PropertySymbol.dispatching] = false;
    });
    // globalThis[PropertySymbol.bindMethods]();
};
exports.prepareWindow = prepareWindow;
// const BrowserWindow: typeof globalThis = globalThis;
// export default BrowserWindow;
//# sourceMappingURL=BrowserWindow.cjs.map