import { Buffer } from 'buffer';
import { webcrypto } from 'crypto';
import { TextEncoder, TextDecoder } from 'util';
import Stream from 'stream';
import { ReadableStream } from 'stream/web';
import { URLSearchParams } from 'url';
import VM from 'vm';
import * as PropertySymbol from '../PropertySymbol.js';
import Base64 from '../base64/Base64.js';
import BrowserErrorCaptureEnum from '../browser/enums/BrowserErrorCaptureEnum.js';
import IBrowserFrame from '../browser/types/IBrowserFrame.js';
import Clipboard from '../clipboard/Clipboard.js';
import CSS from '../css/CSS.js';
import CSSRule from '../css/CSSRule.js';
import CSSStyleDeclaration from '../css/declaration/CSSStyleDeclaration.js';
import CSSContainerRule from '../css/rules/CSSContainerRule.js';
import CSSFontFaceRule from '../css/rules/CSSFontFaceRule.js';
import CSSKeyframeRule from '../css/rules/CSSKeyframeRule.js';
import CSSKeyframesRule from '../css/rules/CSSKeyframesRule.js';
import CSSMediaRule from '../css/rules/CSSMediaRule.js';
import CSSStyleRule from '../css/rules/CSSStyleRule.js';
import CSSSupportsRule from '../css/rules/CSSSupportsRule.js';
import CustomElementRegistry from '../custom-element/CustomElementRegistry.js';
import Event from '../event/Event.js';
import EventTarget from '../event/EventTarget.js';
import Touch from '../event/Touch.js';
import UIEvent from '../event/UIEvent.js';
import AnimationEvent from '../event/events/AnimationEvent.js';
import ClipboardEvent from '../event/events/ClipboardEvent.js';
import CustomEvent from '../event/events/CustomEvent.js';
import ErrorEvent from '../event/events/ErrorEvent.js';
import FocusEvent from '../event/events/FocusEvent.js';
import HashChangeEvent from '../event/events/HashChangeEvent.js';
import InputEvent from '../event/events/InputEvent.js';
import KeyboardEvent from '../event/events/KeyboardEvent.js';
import MediaQueryListEvent from '../event/events/MediaQueryListEvent.js';
import MessageEvent from '../event/events/MessageEvent.js';
import MouseEvent from '../event/events/MouseEvent.js';
import PointerEvent from '../event/events/PointerEvent.js';
import ProgressEvent from '../event/events/ProgressEvent.js';
import StorageEvent from '../event/events/StorageEvent.js';
import SubmitEvent from '../event/events/SubmitEvent.js';
import TouchEvent from '../event/events/TouchEvent.js';
import WheelEvent from '../event/events/WheelEvent.js';
import DOMExceptionNameEnum from '../exception/DOMExceptionNameEnum.js';
import Fetch from '../fetch/Fetch.js';
import Response from '../fetch/Response.js';
import IRequestInfo from '../fetch/types/IRequestInfo.js';
import IRequestInit from '../fetch/types/IRequestInit.js';
import Blob from '../file/Blob.js';
import File from '../file/File.js';
import History from '../history/History.js';
import IntersectionObserver from '../intersection-observer/IntersectionObserver.js';
import IntersectionObserverEntry from '../intersection-observer/IntersectionObserverEntry.js';
import Location from '../location/Location.js';
import MediaQueryList from '../match-media/MediaQueryList.js';
import MutationRecord from '../mutation-observer/MutationRecord.js';
import MimeType from '../navigator/MimeType.js';
import MimeTypeArray from '../navigator/MimeTypeArray.js';
import Navigator from '../navigator/Navigator.js';
import Plugin from '../navigator/Plugin.js';
import PluginArray from '../navigator/PluginArray.js';
import Attr from '../nodes/attr/Attr.js';
import CharacterData from '../nodes/character-data/CharacterData.js';
import DocumentType from '../nodes/document-type/DocumentType.js';
import DocumentReadyStateEnum from '../nodes/document/DocumentReadyStateEnum.js';
import DocumentReadyStateManager from '../nodes/document/DocumentReadyStateManager.js';
import DOMRect from '../dom/DOMRect.js';
import DOMRectReadOnly from '../dom/DOMRectReadOnly.js';
import Element from '../nodes/element/Element.js';
import HTMLCollection from '../nodes/element/HTMLCollection.js';
import HTMLAnchorElement from '../nodes/html-anchor-element/HTMLAnchorElement.js';
import HTMLAreaElement from '../nodes/html-area-element/HTMLAreaElement.js';
import HTMLAudioElement from '../nodes/html-audio-element/HTMLAudioElement.js';
import HTMLBaseElement from '../nodes/html-base-element/HTMLBaseElement.js';
import HTMLBodyElement from '../nodes/html-body-element/HTMLBodyElement.js';
import HTMLBRElement from '../nodes/html-br-element/HTMLBRElement.js';
import HTMLButtonElement from '../nodes/html-button-element/HTMLButtonElement.js';
import HTMLCanvasElement from '../nodes/html-canvas-element/HTMLCanvasElement.js';
import HTMLDListElement from '../nodes/html-d-list-element/HTMLDListElement.js';
import HTMLDataElement from '../nodes/html-data-element/HTMLDataElement.js';
import HTMLDataListElement from '../nodes/html-data-list-element/HTMLDataListElement.js';
import HTMLDetailsElement from '../nodes/html-details-element/HTMLDetailsElement.js';
import HTMLDialogElement from '../nodes/html-dialog-element/HTMLDialogElement.js';
import HTMLDivElement from '../nodes/html-div-element/HTMLDivElement.js';
import HTMLElement from '../nodes/html-element/HTMLElement.js';
import HTMLEmbedElement from '../nodes/html-embed-element/HTMLEmbedElement.js';
import HTMLFieldSetElement from '../nodes/html-field-set-element/HTMLFieldSetElement.js';
import HTMLFormControlsCollection from '../nodes/html-form-element/HTMLFormControlsCollection.js';
import HTMLFormElement from '../nodes/html-form-element/HTMLFormElement.js';
import RadioNodeList from '../nodes/html-form-element/RadioNodeList.js';
import HTMLHeadElement from '../nodes/html-head-element/HTMLHeadElement.js';
import HTMLHeadingElement from '../nodes/html-heading-element/HTMLHeadingElement.js';
import HTMLHRElement from '../nodes/html-hr-element/HTMLHRElement.js';
import HTMLHtmlElement from '../nodes/html-html-element/HTMLHtmlElement.js';
import HTMLIFrameElement from '../nodes/html-iframe-element/HTMLIFrameElement.js';
import HTMLImageElement from '../nodes/html-image-element/HTMLImageElement.js';
import FileList from '../nodes/html-input-element/FileList.js';
import HTMLInputElement from '../nodes/html-input-element/HTMLInputElement.js';
import HTMLLabelElement from '../nodes/html-label-element/HTMLLabelElement.js';
import HTMLLegendElement from '../nodes/html-legend-element/HTMLLegendElement.js';
import HTMLLIElement from '../nodes/html-li-element/HTMLLIElement.js';
import HTMLLinkElement from '../nodes/html-link-element/HTMLLinkElement.js';
import HTMLMapElement from '../nodes/html-map-element/HTMLMapElement.js';
import HTMLMediaElement from '../nodes/html-media-element/HTMLMediaElement.js';
import RemotePlayback from '../nodes/html-media-element/RemotePlayback.js';
import TextTrackCueList from '../nodes/html-media-element/TextTrackCueList.js';
import TimeRanges from '../nodes/html-media-element/TimeRanges.js';
import HTMLMenuElement from '../nodes/html-menu-element/HTMLMenuElement.js';
import HTMLMetaElement from '../nodes/html-meta-element/HTMLMetaElement.js';
import HTMLMeterElement from '../nodes/html-meter-element/HTMLMeterElement.js';
import HTMLModElement from '../nodes/html-mod-element/HTMLModElement.js';
import HTMLOListElement from '../nodes/html-o-list-element/HTMLOListElement.js';
import HTMLObjectElement from '../nodes/html-object-element/HTMLObjectElement.js';
import HTMLOptGroupElement from '../nodes/html-opt-group-element/HTMLOptGroupElement.js';
import HTMLOptionElement from '../nodes/html-option-element/HTMLOptionElement.js';
import HTMLOutputElement from '../nodes/html-output-element/HTMLOutputElement.js';
import HTMLParagraphElement from '../nodes/html-paragraph-element/HTMLParagraphElement.js';
import HTMLParamElement from '../nodes/html-param-element/HTMLParamElement.js';
import HTMLPictureElement from '../nodes/html-picture-element/HTMLPictureElement.js';
import HTMLPreElement from '../nodes/html-pre-element/HTMLPreElement.js';
import HTMLProgressElement from '../nodes/html-progress-element/HTMLProgressElement.js';
import HTMLQuoteElement from '../nodes/html-quote-element/HTMLQuoteElement.js';
import HTMLScriptElement from '../nodes/html-script-element/HTMLScriptElement.js';
import HTMLSelectElement from '../nodes/html-select-element/HTMLSelectElement.js';
import HTMLSlotElement from '../nodes/html-slot-element/HTMLSlotElement.js';
import HTMLSourceElement from '../nodes/html-source-element/HTMLSourceElement.js';
import HTMLSpanElement from '../nodes/html-span-element/HTMLSpanElement.js';
import HTMLStyleElement from '../nodes/html-style-element/HTMLStyleElement.js';
import HTMLTableCaptionElement from '../nodes/html-table-caption-element/HTMLTableCaptionElement.js';
import HTMLTableCellElement from '../nodes/html-table-cell-element/HTMLTableCellElement.js';
import HTMLTableColElement from '../nodes/html-table-col-element/HTMLTableColElement.js';
import HTMLTableElement from '../nodes/html-table-element/HTMLTableElement.js';
import HTMLTableRowElement from '../nodes/html-table-row-element/HTMLTableRowElement.js';
import HTMLTableSectionElement from '../nodes/html-table-section-element/HTMLTableSectionElement.js';
import HTMLTemplateElement from '../nodes/html-template-element/HTMLTemplateElement.js';
import HTMLTextAreaElement from '../nodes/html-text-area-element/HTMLTextAreaElement.js';
import HTMLTimeElement from '../nodes/html-time-element/HTMLTimeElement.js';
import HTMLTitleElement from '../nodes/html-title-element/HTMLTitleElement.js';
import HTMLTrackElement from '../nodes/html-track-element/HTMLTrackElement.js';
import HTMLUListElement from '../nodes/html-u-list-element/HTMLUListElement.js';
import HTMLUnknownElement from '../nodes/html-unknown-element/HTMLUnknownElement.js';
import HTMLVideoElement from '../nodes/html-video-element/HTMLVideoElement.js';
import Node from '../nodes/node/Node.js';
import NodeList from '../nodes/node/NodeList.js';
import ProcessingInstruction from '../nodes/processing-instruction/ProcessingInstruction.js';
import ShadowRoot from '../nodes/shadow-root/ShadowRoot.js';
import SVGElement from '../nodes/svg-element/SVGElement.js';
import Permissions from '../permissions/Permissions.js';
import ResizeObserver from '../resize-observer/ResizeObserver.js';
import Screen from '../screen/Screen.js';
import Storage from '../storage/Storage.js';
import NodeFilter from '../tree-walker/NodeFilter.js';
import URL from '../url/URL.js';
import ValidityState from '../validity-state/ValidityState.js';
import CrossOriginBrowserWindow from './CrossOriginBrowserWindow.js';
import VMGlobalPropertyScript from './VMGlobalPropertyScript.js';
import WindowPageOpenUtility from './WindowPageOpenUtility.js';
import { PerformanceObserver, PerformanceEntry } from 'node:perf_hooks';
import EventPhaseEnum from '../event/EventPhaseEnum.js';
import HTMLOptionsCollection from '../nodes/html-select-element/HTMLOptionsCollection.js';
import WindowContextClassExtender from './WindowContextClassExtender.js';
import WindowBrowserContext from './WindowBrowserContext.js';
import SVGSVGElement from '../nodes/svg-svg-element/SVGSVGElement.js';
import SVGGraphicsElement from '../nodes/svg-graphics-element/SVGGraphicsElement.js';
import SVGAnimateElement from '../nodes/svg-animate-element/SVGAnimateElement.js';
import SVGAnimateMotionElement from '../nodes/svg-animate-motion-element/SVGAnimateMotionElement.js';
import SVGAnimateTransformElement from '../nodes/svg-animate-transform-element/SVGAnimateTransformElement.js';
import SVGCircleElement from '../nodes/svg-circle-element/SVGCircleElement.js';
import SVGClipPathElement from '../nodes/svg-clip-path-element/SVGClipPathElement.js';
import SVGDefsElement from '../nodes/svg-defs-element/SVGDefsElement.js';
import SVGDescElement from '../nodes/svg-desc-element/SVGDescElement.js';
import SVGEllipseElement from '../nodes/svg-ellipse-element/SVGEllipseElement.js';
import SVGFEBlendElement from '../nodes/svg-fe-blend-element/SVGFEBlendElement.js';
import SVGFEColorMatrixElement from '../nodes/svg-fe-color-matrix-element/SVGFEColorMatrixElement.js';
import SVGFEComponentTransferElement from '../nodes/svg-fe-component-transfer-element/SVGFEComponentTransferElement.js';
import SVGFECompositeElement from '../nodes/svg-fe-composite-element/SVGFECompositeElement.js';
import SVGFEConvolveMatrixElement from '../nodes/svg-fe-convolve-matrix-element/SVGFEConvolveMatrixElement.js';
import SVGFEDiffuseLightingElement from '../nodes/svg-fe-diffuse-lighting-element/SVGFEDiffuseLightingElement.js';
import SVGFEDisplacementMapElement from '../nodes/svg-fe-displacement-map-element/SVGFEDisplacementMapElement.js';
import SVGFEDistantLightElement from '../nodes/svg-fe-distant-light-element/SVGFEDistantLightElement.js';
import SVGFEDropShadowElement from '../nodes/svg-fe-drop-shadow-element/SVGFEDropShadowElement.js';
import SVGFEFloodElement from '../nodes/svg-fe-flood-element/SVGFEFloodElement.js';
import SVGFEFuncAElement from '../nodes/svg-fe-func-a-element/SVGFEFuncAElement.js';
import SVGFEFuncBElement from '../nodes/svg-fe-func-b-element/SVGFEFuncBElement.js';
import SVGFEFuncGElement from '../nodes/svg-fe-func-g-element/SVGFEFuncGElement.js';
import SVGFEFuncRElement from '../nodes/svg-fe-func-r-element/SVGFEFuncRElement.js';
import SVGFEGaussianBlurElement from '../nodes/svg-fe-gaussian-blur-element/SVGFEGaussianBlurElement.js';
import SVGFEImageElement from '../nodes/svg-fe-image-element/SVGFEImageElement.js';
import SVGFEMergeElement from '../nodes/svg-fe-merge-element/SVGFEMergeElement.js';
import SVGFEMergeNodeElement from '../nodes/svg-fe-merge-node-element/SVGFEMergeNodeElement.js';
import SVGFEMorphologyElement from '../nodes/svg-fe-morphology-element/SVGFEMorphologyElement.js';
import SVGFEOffsetElement from '../nodes/svg-fe-offset-element/SVGFEOffsetElement.js';
import SVGFEPointLightElement from '../nodes/svg-fe-point-light-element/SVGFEPointLightElement.js';
import SVGFESpecularLightingElement from '../nodes/svg-fe-specular-lighting-element/SVGFESpecularLightingElement.js';
import SVGFESpotLightElement from '../nodes/svg-fe-spot-light-element/SVGFESpotLightElement.js';
import SVGFETileElement from '../nodes/svg-fe-tile-element/SVGFETileElement.js';
import SVGFETurbulenceElement from '../nodes/svg-fe-turbulence-element/SVGFETurbulenceElement.js';
import SVGFilterElement from '../nodes/svg-filter-element/SVGFilterElement.js';
import SVGForeignObjectElement from '../nodes/svg-foreign-object-element/SVGForeignObjectElement.js';
import SVGGElement from '../nodes/svg-g-element/SVGGElement.js';
import SVGImageElement from '../nodes/svg-image-element/SVGImageElement.js';
import SVGLineElement from '../nodes/svg-line-element/SVGLineElement.js';
import SVGLinearGradientElement from '../nodes/svg-linear-gradient-element/SVGLinearGradientElement.js';
import SVGMarkerElement from '../nodes/svg-marker-element/SVGMarkerElement.js';
import SVGMaskElement from '../nodes/svg-mask-element/SVGMaskElement.js';
import SVGMetadataElement from '../nodes/svg-metadata-element/SVGMetadataElement.js';
import SVGMPathElement from '../nodes/svg-m-path-element/SVGMPathElement.js';
import SVGPathElement from '../nodes/svg-path-element/SVGPathElement.js';
import SVGPatternElement from '../nodes/svg-pattern-element/SVGPatternElement.js';
import SVGPolygonElement from '../nodes/svg-polygon-element/SVGPolygonElement.js';
import SVGPolylineElement from '../nodes/svg-polyline-element/SVGPolylineElement.js';
import SVGRadialGradientElement from '../nodes/svg-radial-gradient-element/SVGRadialGradientElement.js';
import SVGRectElement from '../nodes/svg-rect-element/SVGRectElement.js';
import SVGScriptElement from '../nodes/svg-script-element/SVGScriptElement.js';
import SVGSetElement from '../nodes/svg-set-element/SVGSetElement.js';
import SVGStopElement from '../nodes/svg-stop-element/SVGStopElement.js';
import SVGStyleElement from '../nodes/svg-style-element/SVGStyleElement.js';
import SVGSwitchElement from '../nodes/svg-switch-element/SVGSwitchElement.js';
import SVGSymbolElement from '../nodes/svg-symbol-element/SVGSymbolElement.js';
import SVGTextElement from '../nodes/svg-text-element/SVGTextElement.js';
import SVGTextPathElement from '../nodes/svg-text-path-element/SVGTextPathElement.js';
import SVGTitleElement from '../nodes/svg-title-element/SVGTitleElement.js';
import SVGTSpanElement from '../nodes/svg-t-span-element/SVGTSpanElement.js';
import SVGUseElement from '../nodes/svg-use-element/SVGUseElement.js';
import SVGViewElement from '../nodes/svg-view-element/SVGViewElement.js';
import SVGAnimationElement from '../nodes/svg-animation-element/SVGAnimationElement.js';
import SVGComponentTransferFunctionElement from '../nodes/svg-component-transfer-function-element/SVGComponentTransferFunctionElement.js';
import SVGGeometryElement from '../nodes/svg-geometry-element/SVGGeometryElement.js';
import SVGGradientElement from '../nodes/svg-gradient-element/SVGGradientElement.js';
import SVGTextPositioningElement from '../nodes/svg-text-positioning-element/SVGTextPositioningElement.js';
import DOMMatrixReadOnly from '../dom/dom-matrix/DOMMatrixReadOnly.js';
import DOMMatrix from '../dom/dom-matrix/DOMMatrix.js';
import SVGAngle from '../svg/SVGAngle.js';
import SVGAnimatedAngle from '../svg/SVGAnimatedAngle.js';
import SVGAnimatedBoolean from '../svg/SVGAnimatedBoolean.js';
import SVGAnimatedEnumeration from '../svg/SVGAnimatedEnumeration.js';
import SVGAnimatedInteger from '../svg/SVGAnimatedInteger.js';
import SVGAnimatedLength from '../svg/SVGAnimatedLength.js';
import SVGLength from '../svg/SVGLength.js';
import SVGAnimatedNumber from '../svg/SVGAnimatedNumber.js';
import SVGAnimatedNumberList from '../svg/SVGAnimatedNumberList.js';
import SVGAnimatedPreserveAspectRatio from '../svg/SVGAnimatedPreserveAspectRatio.js';
import SVGAnimatedRect from '../svg/SVGAnimatedRect.js';
import SVGAnimatedString from '../svg/SVGAnimatedString.js';
import SVGAnimatedTransformList from '../svg/SVGAnimatedTransformList.js';
import SVGLengthList from '../svg/SVGLengthList.js';
import SVGMatrix from '../svg/SVGMatrix.js';
import SVGNumber from '../svg/SVGNumber.js';
import SVGNumberList from '../svg/SVGNumberList.js';
import SVGPoint from '../svg/SVGPoint.js';
import SVGPointList from '../svg/SVGPointList.js';
import SVGPreserveAspectRatio from '../svg/SVGPreserveAspectRatio.js';
import SVGRect from '../svg/SVGRect.js';
import SVGStringList from '../svg/SVGStringList.js';
import SVGTransform from '../svg/SVGTransform.js';
import SVGTransformList from '../svg/SVGTransformList.js';
import SVGUnitTypes from '../svg/SVGUnitTypes.js';
import DOMPoint from '../dom/DOMPoint.js';
import SVGAnimatedLengthList from '../svg/SVGAnimatedLengthList.js';
import CustomElementReactionStack from '../custom-element/CustomElementReactionStack.js';
import IScrollToOptions from './IScrollToOptions.js';

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

export const prepareWindow = (browserFrame: IBrowserFrame, options?: { url?: string }): void => {
	// Assigning Node-related classes to globalThis
	globalThis['Node'] = Node;
	globalThis['Attr'] = Attr;
	globalThis['ShadowRoot'] = ShadowRoot;
	globalThis['ProcessingInstruction'] = ProcessingInstruction;
	globalThis['Element'] = Element;
	globalThis['CharacterData'] = CharacterData;
	globalThis['DocumentType'] = DocumentType;

	// Assigning HTML Element classes to globalThis
	globalThis['HTMLAnchorElement'] = HTMLAnchorElement;
	globalThis['HTMLButtonElement'] = HTMLButtonElement;
	globalThis['HTMLOptGroupElement'] = HTMLOptGroupElement;
	globalThis['HTMLOptionElement'] = HTMLOptionElement;
	globalThis['HTMLElement'] = HTMLElement;
	globalThis['HTMLUnknownElement'] = HTMLUnknownElement;
	globalThis['HTMLTemplateElement'] = HTMLTemplateElement;
	globalThis['HTMLInputElement'] = HTMLInputElement;
	globalThis['HTMLSelectElement'] = HTMLSelectElement;
	globalThis['HTMLTextAreaElement'] = HTMLTextAreaElement;
	globalThis['HTMLImageElement'] = HTMLImageElement;
	globalThis['HTMLStyleElement'] = HTMLStyleElement;
	globalThis['HTMLLabelElement'] = HTMLLabelElement;
	globalThis['HTMLSlotElement'] = HTMLSlotElement;
	globalThis['HTMLMetaElement'] = HTMLMetaElement;
	globalThis['HTMLMediaElement'] = HTMLMediaElement;
	globalThis['HTMLAudioElement'] = HTMLAudioElement;
	globalThis['HTMLVideoElement'] = HTMLVideoElement;
	globalThis['HTMLBaseElement'] = HTMLBaseElement;
	globalThis['HTMLDialogElement'] = HTMLDialogElement;
	globalThis['HTMLScriptElement'] = HTMLScriptElement;
	globalThis['HTMLLinkElement'] = HTMLLinkElement;
	globalThis['HTMLIFrameElement'] = HTMLIFrameElement;
	globalThis['HTMLFormElement'] = HTMLFormElement;
	globalThis['HTMLUListElement'] = HTMLUListElement;
	globalThis['HTMLTrackElement'] = HTMLTrackElement;
	globalThis['HTMLTableRowElement'] = HTMLTableRowElement;
	globalThis['HTMLTitleElement'] = HTMLTitleElement;
	globalThis['HTMLTimeElement'] = HTMLTimeElement;
	globalThis['HTMLTableSectionElement'] = HTMLTableSectionElement;
	globalThis['HTMLTableCellElement'] = HTMLTableCellElement;
	globalThis['HTMLTableElement'] = HTMLTableElement;
	globalThis['HTMLSpanElement'] = HTMLSpanElement;
	globalThis['HTMLSourceElement'] = HTMLSourceElement;
	globalThis['HTMLQuoteElement'] = HTMLQuoteElement;
	globalThis['HTMLProgressElement'] = HTMLProgressElement;
	globalThis['HTMLPreElement'] = HTMLPreElement;
	globalThis['HTMLPictureElement'] = HTMLPictureElement;
	globalThis['HTMLParamElement'] = HTMLParamElement;
	globalThis['HTMLParagraphElement'] = HTMLParagraphElement;
	globalThis['HTMLOutputElement'] = HTMLOutputElement;
	globalThis['HTMLOListElement'] = HTMLOListElement;
	globalThis['HTMLObjectElement'] = HTMLObjectElement;
	globalThis['HTMLMeterElement'] = HTMLMeterElement;
	globalThis['HTMLMenuElement'] = HTMLMenuElement;
	globalThis['HTMLMapElement'] = HTMLMapElement;
	globalThis['HTMLLIElement'] = HTMLLIElement;
	globalThis['HTMLLegendElement'] = HTMLLegendElement;
	globalThis['HTMLModElement'] = HTMLModElement;
	globalThis['HTMLHtmlElement'] = HTMLHtmlElement;
	globalThis['HTMLHRElement'] = HTMLHRElement;
	globalThis['HTMLHeadElement'] = HTMLHeadElement;
	globalThis['HTMLHeadingElement'] = HTMLHeadingElement;
	globalThis['HTMLFieldSetElement'] = HTMLFieldSetElement;
	globalThis['HTMLEmbedElement'] = HTMLEmbedElement;
	globalThis['HTMLDListElement'] = HTMLDListElement;
	globalThis['HTMLDivElement'] = HTMLDivElement;
	globalThis['HTMLDetailsElement'] = HTMLDetailsElement;
	globalThis['HTMLDataListElement'] = HTMLDataListElement;
	globalThis['HTMLDataElement'] = HTMLDataElement;
	globalThis['HTMLTableColElement'] = HTMLTableColElement;
	globalThis['HTMLTableCaptionElement'] = HTMLTableCaptionElement;
	globalThis['HTMLCanvasElement'] = HTMLCanvasElement;
	globalThis['HTMLBRElement'] = HTMLBRElement;
	globalThis['HTMLBodyElement'] = HTMLBodyElement;
	globalThis['HTMLAreaElement'] = HTMLAreaElement;

	// Assigning SVG Element classes to globalThis
	globalThis['SVGSVGElement'] = SVGSVGElement;
	globalThis['SVGAnimateElement'] = SVGAnimateElement;
	globalThis['SVGAnimateMotionElement'] = SVGAnimateMotionElement;
	globalThis['SVGAnimateTransformElement'] = SVGAnimateTransformElement;
	globalThis['SVGCircleElement'] = SVGCircleElement;
	globalThis['SVGClipPathElement'] = SVGClipPathElement;
	globalThis['SVGDefsElement'] = SVGDefsElement;
	globalThis['SVGDescElement'] = SVGDescElement;
	globalThis['SVGEllipseElement'] = SVGEllipseElement;
	globalThis['SVGFEBlendElement'] = SVGFEBlendElement;
	globalThis['SVGFEColorMatrixElement'] = SVGFEColorMatrixElement;
	globalThis['SVGFEComponentTransferElement'] = SVGFEComponentTransferElement;
	globalThis['SVGFECompositeElement'] = SVGFECompositeElement;
	globalThis['SVGFEConvolveMatrixElement'] = SVGFEConvolveMatrixElement;
	globalThis['SVGFEDiffuseLightingElement'] = SVGFEDiffuseLightingElement;
	globalThis['SVGFEDisplacementMapElement'] = SVGFEDisplacementMapElement;
	globalThis['SVGFEDistantLightElement'] = SVGFEDistantLightElement;
	globalThis['SVGFEDropShadowElement'] = SVGFEDropShadowElement;
	globalThis['SVGFEFloodElement'] = SVGFEFloodElement;
	globalThis['SVGFEFuncAElement'] = SVGFEFuncAElement;
	globalThis['SVGFEFuncBElement'] = SVGFEFuncBElement;
	globalThis['SVGFEFuncGElement'] = SVGFEFuncGElement;
	globalThis['SVGFEFuncRElement'] = SVGFEFuncRElement;
	globalThis['SVGFEGaussianBlurElement'] = SVGFEGaussianBlurElement;
	globalThis['SVGFEImageElement'] = SVGFEImageElement;
	globalThis['SVGFEMergeElement'] = SVGFEMergeElement;
	globalThis['SVGFEMergeNodeElement'] = SVGFEMergeNodeElement;
	globalThis['SVGFEMorphologyElement'] = SVGFEMorphologyElement;
	globalThis['SVGFEOffsetElement'] = SVGFEOffsetElement;
	globalThis['SVGFEPointLightElement'] = SVGFEPointLightElement;
	globalThis['SVGFESpecularLightingElement'] = SVGFESpecularLightingElement;
	globalThis['SVGFESpotLightElement'] = SVGFESpotLightElement;
	globalThis['SVGFETileElement'] = SVGFETileElement;
	globalThis['SVGFETurbulenceElement'] = SVGFETurbulenceElement;
	globalThis['SVGFilterElement'] = SVGFilterElement;
	globalThis['SVGForeignObjectElement'] = SVGForeignObjectElement;
	globalThis['SVGGElement'] = SVGGElement;
	globalThis['SVGImageElement'] = SVGImageElement;
	globalThis['SVGLineElement'] = SVGLineElement;
	globalThis['SVGLinearGradientElement'] = SVGLinearGradientElement;
	globalThis['SVGMarkerElement'] = SVGMarkerElement;
	globalThis['SVGMaskElement'] = SVGMaskElement;
	globalThis['SVGMetadataElement'] = SVGMetadataElement;
	globalThis['SVGMPathElement'] = SVGMPathElement;
	globalThis['SVGPathElement'] = SVGPathElement;
	globalThis['SVGPatternElement'] = SVGPatternElement;
	globalThis['SVGPolygonElement'] = SVGPolygonElement;
	globalThis['SVGPolylineElement'] = SVGPolylineElement;
	globalThis['SVGRadialGradientElement'] = SVGRadialGradientElement;
	globalThis['SVGRectElement'] = SVGRectElement;
	globalThis['SVGScriptElement'] = SVGScriptElement;
	globalThis['SVGSetElement'] = SVGSetElement;
	globalThis['SVGStopElement'] = SVGStopElement;
	globalThis['SVGStyleElement'] = SVGStyleElement;
	globalThis['SVGSwitchElement'] = SVGSwitchElement;
	globalThis['SVGSymbolElement'] = SVGSymbolElement;
	globalThis['SVGTextElement'] = SVGTextElement;
	globalThis['SVGTextPathElement'] = SVGTextPathElement;
	globalThis['SVGTitleElement'] = SVGTitleElement;
	globalThis['SVGTSpanElement'] = SVGTSpanElement;
	globalThis['SVGUseElement'] = SVGUseElement;
	globalThis['SVGViewElement'] = SVGViewElement;

	// Abstract SVG Element classes
	globalThis['SVGElement'] = SVGElement;
	globalThis['SVGAnimationElement'] = SVGAnimationElement;
	globalThis['SVGComponentTransferFunctionElement'] = SVGComponentTransferFunctionElement;
	globalThis['SVGGeometryElement'] = SVGGeometryElement;
	globalThis['SVGGradientElement'] = SVGGradientElement;
	globalThis['SVGTextPositioningElement'] = SVGTextPositioningElement;
	globalThis['SVGGraphicsElement'] = SVGGraphicsElement;

	// Event classes
	// @ts-ignore
	globalThis['Event'] = Event;
	globalThis['UIEvent'] = UIEvent;
	globalThis['CustomEvent'] = CustomEvent;
	globalThis['AnimationEvent'] = AnimationEvent;
	globalThis['KeyboardEvent'] = KeyboardEvent;
	globalThis['MessageEvent'] = MessageEvent;
	globalThis['MouseEvent'] = MouseEvent;
	globalThis['PointerEvent'] = PointerEvent;
	globalThis['FocusEvent'] = FocusEvent;
	globalThis['WheelEvent'] = WheelEvent;
	globalThis['InputEvent'] = InputEvent;
	globalThis['ErrorEvent'] = ErrorEvent;
	globalThis['StorageEvent'] = StorageEvent;
	globalThis['SubmitEvent'] = SubmitEvent;
	globalThis['ProgressEvent'] = ProgressEvent;
	globalThis['MediaQueryListEvent'] = MediaQueryListEvent;
	globalThis['HashChangeEvent'] = HashChangeEvent;
	globalThis['ClipboardEvent'] = ClipboardEvent;
	globalThis['TouchEvent'] = TouchEvent;
	globalThis['Touch'] = Touch;

	// Assigning Event-related classes to globalThis
	globalThis['AudioProcessingEvent'] = Event;
	globalThis['BeforeInputEvent'] = Event;
	globalThis['BeforeUnloadEvent'] = Event;
	globalThis['BlobEvent'] = Event;
	globalThis['CloseEvent'] = Event;
	globalThis['CompositionEvent'] = Event;
	globalThis['CSSFontFaceLoadEvent'] = Event;
	globalThis['DeviceLightEvent'] = Event;
	globalThis['DeviceMotionEvent'] = Event;
	globalThis['DeviceOrientationEvent'] = Event;
	globalThis['DeviceProximityEvent'] = Event;
	globalThis['DOMTransactionEvent'] = Event;
	globalThis['DragEvent'] = Event;
	globalThis['EditingBeforeInputEvent'] = Event;
	globalThis['FetchEvent'] = Event;
	globalThis['GamepadEvent'] = Event;
	globalThis['IDBVersionChangeEvent'] = Event;
	globalThis['MediaStreamEvent'] = Event;
	globalThis['MutationEvent'] = Event;
	globalThis['OfflineAudioCompletionEvent'] = Event;
	globalThis['OverconstrainedError'] = Event;
	globalThis['PageTransitionEvent'] = Event;
	globalThis['PaymentRequestUpdateEvent'] = Event;
	globalThis['PopStateEvent'] = Event;
	globalThis['RelatedEvent'] = Event;
	globalThis['RTCDataChannelEvent'] = Event;
	globalThis['RTCIdentityErrorEvent'] = Event;
	globalThis['RTCIdentityEvent'] = Event;
	globalThis['RTCPeerConnectionIceEvent'] = Event;
	globalThis['SensorEvent'] = Event;
	globalThis['SVGEvent'] = Event;
	globalThis['SVGZoomEvent'] = Event;
	globalThis['TimeEvent'] = Event;
	globalThis['TrackEvent'] = Event;
	globalThis['TransitionEvent'] = Event;
	globalThis['UserProximityEvent'] = Event;
	globalThis['WebGLContextEvent'] = Event;
	globalThis['TextEvent'] = Event;

	globalThis['RemotePlayback'] = RemotePlayback;
	globalThis['Permissions'] = Permissions;
	globalThis['History'] = History;
	globalThis['Navigator'] = Navigator;
	globalThis['Clipboard'] = Clipboard;
	globalThis['TimeRanges'] = TimeRanges;
	globalThis['TextTrackCueList'] = TextTrackCueList;
	globalThis['ValidityState'] = ValidityState;
	globalThis['MutationRecord'] = MutationRecord;
	globalThis['IntersectionObserver'] = IntersectionObserver;
	globalThis['IntersectionObserverEntry'] = IntersectionObserverEntry;
	globalThis['CSSStyleDeclaration'] = CSSStyleDeclaration;
	globalThis['CSSRule'] = CSSRule;
	globalThis['CSSContainerRule'] = CSSContainerRule;
	globalThis['CSSFontFaceRule'] = CSSFontFaceRule;
	globalThis['CSSKeyframeRule'] = CSSKeyframeRule;
	globalThis['CSSKeyframesRule'] = CSSKeyframesRule;
	globalThis['CSSMediaRule'] = CSSMediaRule;
	globalThis['CSSStyleRule'] = CSSStyleRule;
	globalThis['CSSSupportsRule'] = CSSSupportsRule;
	globalThis['DOMRect'] = DOMRect;
	globalThis['DOMRectReadOnly'] = DOMRectReadOnly;
	globalThis['Plugin'] = Plugin;
	globalThis['PluginArray'] = PluginArray;
	globalThis['Location'] = Location;
	globalThis['CustomElementRegistry'] = CustomElementRegistry;
	globalThis['ResizeObserver'] = ResizeObserver;
	globalThis['URL'] = URL;
	globalThis['Blob'] = Blob;
	globalThis['File'] = File;
	globalThis['Storage'] = Storage;
	globalThis['MimeType'] = MimeType;
	globalThis['MimeTypeArray'] = MimeTypeArray;
	globalThis['NodeFilter'] = NodeFilter;
	globalThis['HTMLCollection'] = HTMLCollection;
	globalThis['HTMLFormControlsCollection'] = HTMLFormControlsCollection;
	globalThis['HTMLOptionsCollection'] = HTMLOptionsCollection;
	globalThis['NodeList'] = NodeList;
	globalThis['RadioNodeList'] = RadioNodeList;
	globalThis['FileList'] = FileList;
	globalThis['Screen'] = Screen;
	globalThis['DOMMatrixReadOnly'] = DOMMatrixReadOnly;
	globalThis['DOMMatrix'] = DOMMatrix;
	globalThis['SVGAngle'] = SVGAngle;
	globalThis['SVGAnimatedAngle'] = SVGAnimatedAngle;
	globalThis['SVGAnimatedBoolean'] = SVGAnimatedBoolean;
	globalThis['SVGAnimatedEnumeration'] = SVGAnimatedEnumeration;
	globalThis['SVGAnimatedInteger'] = SVGAnimatedInteger;
	globalThis['SVGAnimatedLength'] = SVGAnimatedLength;
	globalThis['SVGAnimatedNumber'] = SVGAnimatedNumber;
	globalThis['SVGAnimatedNumberList'] = SVGAnimatedNumberList;
	globalThis['SVGAnimatedPreserveAspectRatio'] = SVGAnimatedPreserveAspectRatio;
	globalThis['SVGAnimatedRect'] = SVGAnimatedRect;
	globalThis['SVGAnimatedString'] = SVGAnimatedString;
	globalThis['SVGAnimatedTransformList'] = SVGAnimatedTransformList;
	globalThis['SVGLength'] = SVGLength;
	globalThis['SVGLengthList'] = SVGLengthList;
	globalThis['SVGMatrix'] = SVGMatrix;
	globalThis['SVGNumber'] = SVGNumber;
	globalThis['SVGNumberList'] = SVGNumberList;
	globalThis['SVGPoint'] = SVGPoint;
	globalThis['SVGPointList'] = SVGPointList;
	globalThis['SVGPreserveAspectRatio'] = SVGPreserveAspectRatio;
	globalThis['SVGRect'] = SVGRect;
	globalThis['SVGStringList'] = SVGStringList;
	globalThis['SVGTransform'] = SVGTransform;
	globalThis['SVGTransformList'] = SVGTransformList;
	globalThis['SVGAnimatedLengthList'] = SVGAnimatedLengthList;
	globalThis['SVGUnitTypes'] = SVGUnitTypes;
	globalThis['DOMPoint'] = DOMPoint;

	globalThis['URLSearchParams'] = URLSearchParams;
	globalThis['WritableStream'] = Stream.Writable;
	globalThis['ReadableStream'] = ReadableStream;
	globalThis['TransformStream'] = Stream.Transform;
	globalThis['PerformanceObserver'] = PerformanceObserver;
	globalThis['PerformanceEntry'] = PerformanceEntry;
	globalThis['PerformanceObserverEntryList'] = PerformanceObserverEntryList;

	// Events
	globalThis['onload'] = null;
	globalThis['onerror'] = null;

	// Public properties.
	globalThis['window'] = globalThis;
	globalThis['customElements'] = new CustomElementRegistry(globalThis);
	globalThis['performance'] = performance;
	globalThis['screenLeft'] = 0;
	globalThis['screenTop'] = 0;
	globalThis['screenX'] = 0;
	globalThis['screenY'] = 0;
	globalThis['crypto'] = webcrypto;
	globalThis['TextEncoder'] = TextEncoder;
	globalThis['TextDecoder'] = TextDecoder;
	globalThis['closed'] = false;
	globalThis['name'] = '';

	// Node.js Globals (populated by VMGlobalPropertyScript)
	globalThis['Buffer'] = Buffer;

	// Public internal properties

	// Used for tracking capture event listeners to improve performance when they are not used.
	// See EventTarget class.
	globalThis[PropertySymbol.mutationObservers] = [];
	globalThis[PropertySymbol.readyStateManager] = new DocumentReadyStateManager(globalThis);
	globalThis[PropertySymbol.self] = globalThis;
	globalThis[PropertySymbol.top] = globalThis;
	globalThis[PropertySymbol.parent] = globalThis;
	globalThis[PropertySymbol.window] = globalThis;
	globalThis[PropertySymbol.internalId] = -1;
	globalThis[PropertySymbol.customElementReactionStack] = new CustomElementReactionStack(
		globalThis
	);
	globalThis[PropertySymbol.modules] = {
		json: new Map(),
		css: new Map(),
		esm: new Map()
	};
	globalThis[PropertySymbol.moduleImportMap] = null;

	// Private properties
	globalThis['#innerWidth'] = null;
	globalThis['#innerHeight'] = null;
	globalThis['#outerWidth'] = null;
	globalThis['#outerHeight'] = null;
	globalThis['#devicePixelRatio'] = null;
	globalThis['#zeroDelayTimeout'] = { timeouts: null };
	globalThis['#timerLoopStacks'] = [];

	Object.defineProperty(globalThis, 'self', {
		get() {
			return globalThis[PropertySymbol.self];
		},
		set(self: typeof globalThis | null) {
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
		set(parent: typeof globalThis | null) {
			globalThis[PropertySymbol.parent] = parent;
		}
	});

	Object.defineProperty(globalThis, 'location', {
		get() {
			return globalThis[PropertySymbol.location];
		},
		set(href: string) {
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
			return globalThis.#browserFrame[PropertySymbol.openerWindow];
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
			return new CSS();
		}
	});

	Object.defineProperty(globalThis, 'innerWidth', {
		get() {
			if (globalThis.#innerWidth === null) {
				return globalThis.#browserFrame.page.viewport.width;
			}
			return globalThis.#innerWidth;
		},
		set(value: number) {
			globalThis.#innerWidth = value;
		}
	});

	Object.defineProperty(globalThis, 'innerHeight', {
		get() {
			// It seems like this value can be defined according to spec, but changing it has no effect on the actual viewport.
			if (globalThis.#innerHeight === null) {
				return globalThis.#browserFrame.page.viewport.height;
			}
			return globalThis.#innerHeight;
		},
		set(value: number) {
			globalThis.#innerHeight = value;
		}
	});

	Object.defineProperty(globalThis, 'outerWidth', {
		get() {
			// It seems like this value can be defined according to spec, but changing it has no effect on the actual viewport.
			if (globalThis.#outerWidth === null) {
				return globalThis.#browserFrame.page.viewport.width;
			}
			return globalThis.#outerWidth;
		},
		set(value: number) {
			globalThis.#outerWidth = value;
		}
	});

	Object.defineProperty(globalThis, 'outerHeight', {
		get() {
			if (globalThis.#outerHeight === null) {
				return globalThis.#browserFrame.page.viewport.height;
			}
			return globalThis.#outerHeight;
		},
		set(value: number) {
			globalThis.#outerHeight = value;
		}
	});

	Object.defineProperty(globalThis, 'devicePixelRatio', {
		get() {
			// It seems like this value can be defined according to spec, but changing it has no effect on the actual viewport.
			if (globalThis.#devicePixelRatio === null) {
				return globalThis.#browserFrame.page.viewport.devicePixelRatio;
			}
			return globalThis.#devicePixelRatio;
		},
		set(value: number) {
			globalThis.#devicePixelRatio = value;
		}
	});

	globalThis['getComputedStyle'] = function (element: Element) {
		element[PropertySymbol.computedStyle] =
			element[PropertySymbol.computedStyle] ||
			new CSSStyleDeclaration(PropertySymbol.illegalConstructor, this, { element, computed: true });
		return element[PropertySymbol.computedStyle];
	}.bind(globalThis);

	globalThis['getSelection'] = function () {
		return this.document.getSelection();
	}.bind(globalThis);

	globalThis['scroll'] = function (x: IScrollToOptions | number, y?: number): void {
		if (typeof x !== 'object' && arguments.length === 1) {
			throw new this.TypeError(
				"Failed to execute 'scroll' on 'Window': The provided value is not of type 'ScrollToOptions'."
			);
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
		} else {
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

	globalThis['scrollTo'] = function (x: IScrollToOptions | number, y?: number): void {
		if (typeof x !== 'object' && arguments.length === 1) {
			throw new this.TypeError(
				"Failed to execute 'scrollTo' on 'Window': The provided value is not of type 'ScrollToOptions'."
			);
		}
		this.scroll(x, y);
	}.bind(globalThis);

	globalThis['scrollBy'] = function (x: IScrollToOptions | number, y?: number): void {
		if (typeof x !== 'object' && arguments.length === 1) {
			throw new this.TypeError(
				"Failed to execute 'scrollBy' on 'Window': The provided value is not of type 'ScrollToOptions'."
			);
		}
		const options = typeof x === 'object' ? x : { left: x, top: y };
		this.scroll({
			left: this.document.documentElement.scrollLeft + (options.left ?? 0),
			top: this.document.documentElement.scrollTop + (options.top ?? 0),
			behavior: options.behavior
		});
	}.bind(globalThis);

	globalThis['open'] = function (
		url?: string,
		target?: string,
		features?: string
	): typeof globalThis | CrossOriginBrowserWindow | null {
		return WindowPageOpenUtility.openPage(globalThis.#browserFrame, {
			url,
			target,
			features
		});
	}.bind(globalThis);

	globalThis['close'] = function (): void {
		// When using a Window instance directly, the Window instance is the main frame and we will close the page and destroy the browser.
		// When using the Browser API we should only close the page when the Window instance is connected to the main frame (we should not close child frames such as iframes).
		if (globalThis.#browserFrame.page?.mainFrame === globalThis.#browserFrame) {
			globalThis[PropertySymbol.destroy]();
			globalThis.#browserFrame.page.close();
		}
	}.bind(globalThis);

	globalThis['matchMedia'] = function (mediaQueryString: string): MediaQueryList {
		return new MediaQueryList({ window: globalThis, media: mediaQueryString });
	}.bind(globalThis);

	globalThis['cancelAnimationFrame'] = function (id: NodeJS.Immediate): void {
		// We need to make sure that the ID is an Immediate object, otherwise Node.js might throw an error.
		// This is only necessary if we are in a Node.js environment.
		if (IS_NODE_JS_TIMEOUT_ENVIRONMENT && (!id || id.constructor.name !== 'Immediate')) {
			return;
		}
		TIMER.clearImmediate(id);
		globalThis.#browserFrame[PropertySymbol.asyncTaskManager].endImmediate(id);
	}.bind(globalThis);

	globalThis['queueMicrotask'] = function (callback: Function): void {
		if (globalThis.closed) {
			return;
		}
		let isAborted = false;
		const taskId = globalThis.#browserFrame[PropertySymbol.asyncTaskManager].startTask(
			() => (isAborted = true)
		);
		const settings = globalThis.#browserFrame.page?.context?.browser?.settings;
		const useTryCatch =
			!settings ||
			(!settings.disableErrorCapturing &&
				settings.errorCapture === BrowserErrorCaptureEnum.tryAndCatch);

		TIMER.queueMicrotask(() => {
			if (!isAborted) {
				// We need to call endTask() before the callback as the callback might throw an error.
				globalThis.#browserFrame[PropertySymbol.asyncTaskManager].endTask(taskId);
				if (useTryCatch) {
					let result: any;
					try {
						result = callback();
					} catch (error) {
						globalThis[PropertySymbol.dispatchError](error);
					}
					if (result instanceof Promise) {
						result.catch((error: Error) => globalThis[PropertySymbol.dispatchError](error));
					}
				} else {
					callback();
				}
			}
		});
	}.bind(globalThis);

	globalThis['fetch'] = async function (url: IRequestInfo, init?: IRequestInit): Promise<Response> {
		if (globalThis.closed) {
			return Promise.reject(
				new globalThis.DOMException(
					"Failed to execute 'fetch' on 'Window': The window is closed.",
					DOMExceptionNameEnum.invalidStateError
				)
			);
		}

		return await new Fetch({
			browserFrame: globalThis.#browserFrame,
			window: globalThis,
			url,
			init
		}).send();
	}.bind(globalThis);

	globalThis['btoa'] = function (data: unknown): string {
		return Base64.btoa(data);
	}.bind(globalThis);

	globalThis['atob'] = function (data: unknown): string {
		return Base64.atob(data);
	}.bind(globalThis);

	globalThis['postMessage'] = function (
		message: unknown,
		targetOrigin = '*',
		_transfer?: unknown[]
	): void {
		// TODO: Implement transfer.

		if (globalThis.closed) {
			return;
		}

		if (targetOrigin && targetOrigin !== '*' && globalThis.location.origin !== targetOrigin) {
			throw new globalThis.DOMException(
				`Failed to execute 'postMessage' on 'Window': The target origin provided ('${targetOrigin}') does not match the recipient window\'s origin ('${globalThis.location.origin}').`,
				DOMExceptionNameEnum.securityError
			);
		}

		try {
			JSON.stringify(message);
		} catch (error) {
			throw new globalThis.DOMException(
				`Failed to execute 'postMessage' on 'Window': The provided message cannot be serialized.`,
				DOMExceptionNameEnum.invalidStateError
			);
		}

		globalThis.setTimeout(() =>
			globalThis.dispatchEvent(
				new MessageEvent('message', {
					data: message,
					origin: globalThis.#browserFrame.parentFrame
						? globalThis.#browserFrame.parentFrame.window.location.origin
						: globalThis.#browserFrame.window.location.origin,
					source: globalThis.#browserFrame.parentFrame
						? globalThis.#browserFrame.parentFrame.window
						: globalThis.#browserFrame.window,
					lastEventId: ''
				})
			)
		);
	}.bind(globalThis);

	globalThis['resizeTo'] = function (width: number, height: number): void {
		if (globalThis.closed) {
			return;
		}

		if (!width || !height) {
			throw new globalThis.DOMException(
				`Failed to execute 'resizeTo' on 'Window': 2 arguments required, but only ${arguments.length} present.`
			);
		}

		// We can only resize the window if it is a popup.
		if (globalThis.#browserFrame[PropertySymbol.popup]) {
			globalThis.#browserFrame.page.setViewport({ width, height });
		}
	}.bind(globalThis);

	globalThis['resizeBy'] = function (width: number, height: number): void {
		if (globalThis.closed) {
			return;
		}

		if (!width || !height) {
			throw new globalThis.DOMException(
				`Failed to execute 'resizeBy' on 'Window': 2 arguments required, but only ${arguments.length} present.`
			);
		}

		// We can only resize the window if it is a popup.
		if (globalThis.#browserFrame[PropertySymbol.popup]) {
			const viewport = globalThis.#browserFrame.page.viewport;
			globalThis.#browserFrame.page.setViewport({
				width: viewport.width + width,
				height: viewport.height + height
			});
		}
	}.bind(globalThis);

	globalThis[PropertySymbol.dispatchError] = function (error: Error): void {
		globalThis.#browserFrame?.page?.console.error(error);
		globalThis.dispatchEvent(new ErrorEvent('error', { message: error.message, error }));
	}.bind(globalThis);

	globalThis[PropertySymbol.setupVMContext] = function (): void {
		if (!VM.isContext(globalThis)) {
			VM.createContext(globalThis);

			// Sets global properties from the VM to the Window object.
			// Otherwise "this.Array" will be undefined for example.
			VMGlobalPropertyScript.runInContext(globalThis);
		}
	}.bind(globalThis);

	globalThis[PropertySymbol.destroy] = function (): void {
		if (<boolean>this.closed) {
			return;
		}

		(<boolean>this.closed) = true;

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
			if ((<HTMLElement>childNodes[0]).disconnectedCallback) {
				delete (<HTMLElement>childNodes[0]).disconnectedCallback;
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

		WindowBrowserContext.removeWindowBrowserFrameRelation(this);
	}.bind(globalThis);

	// constructor definition

	const globalThisEventTarget = new EventTarget();
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

	globalThis.#browserFrame = browserFrame;

	globalThis[PropertySymbol.navigator] = new Navigator(globalThis);
	globalThis[PropertySymbol.screen] = new Screen();
	globalThis[PropertySymbol.sessionStorage] = new Storage();
	globalThis[PropertySymbol.localStorage] = new Storage();
	globalThis[PropertySymbol.location] = new Location(
		globalThis.#browserFrame,
		options?.url ?? 'about:blank'
	);
	globalThis[PropertySymbol.history] = new History(globalThis.#browserFrame, globalThis);

	WindowBrowserContext.setWindowBrowserFrameRelation(globalThis, globalThis.#browserFrame);

	globalThis[PropertySymbol.setupVMContext]();

	WindowContextClassExtender.extendClasses(globalThis);

	// Document
	globalThis.document = new globalThis.HTMLDocument();
	globalThis.document[PropertySymbol.defaultView] = globalThis;

	// Ready state manager
	globalThis[PropertySymbol.readyStateManager].waitUntilComplete().then(() => {
		globalThis.document[PropertySymbol.readyState] = DocumentReadyStateEnum.complete;
		globalThis.document.dispatchEvent(new Event('readystatechange'));

		// Not sure why target is set to document here, but this is how it works in the browser
		const loadEvent = new Event('load');

		// @ts-ignore
		loadEvent[PropertySymbol.currentTarget] = globalThis;
		loadEvent[PropertySymbol.target] = globalThis.document;
		loadEvent[PropertySymbol.eventPhase] = EventPhaseEnum.atTarget;

		globalThis.dispatchEvent(loadEvent);

		loadEvent[PropertySymbol.currentTarget] = null;
		loadEvent[PropertySymbol.eventPhase] = EventPhaseEnum.none;
		loadEvent[PropertySymbol.dispatching] = false;
	});

	// globalThis[PropertySymbol.bindMethods]();
};

// const BrowserWindow: typeof globalThis = globalThis;

// export default BrowserWindow;
