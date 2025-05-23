"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = exports.referrer = exports.readyStateManager = exports.propagationStopped = exports.ownerElement = exports.ownerDocument = exports.mutationListeners = exports.observeMutations = exports.nextActiveElement = exports.itemsByName = exports.listeners = exports.listenerOptions = exports.isValue = exports.isInPassiveEventListener = exports.isFirstWriteAfterOpen = exports.isFirstWrite = exports.indeterminate = exports.immediatePropagationStopped = exports.height = exports.internalId = exports.formNode = exports.exceptionObserver = exports.evaluateScript = exports.evaluateCSS = exports.entries = exports.end = exports.dirtyness = exports.destroy = exports.defaultView = exports.data = exports.currentTarget = exports.currentScript = exports.cssText = exports.contentType = exports.contentLength = exports.disconnectedFromDocument = exports.connectedToDocument = exports.disconnectedFromNode = exports.connectedToNode = exports.classList = exports.children = exports.childNodes = exports.checked = exports.callbacks = exports.cachedResponse = exports.buffer = exports.bodyBuffer = exports.asyncTaskManager = exports.activeElement = exports.abort = void 0;
exports.implementation = exports.adoptedStyleSheets = exports.specified = exports.name = exports.clientTop = exports.clientLeft = exports.clientWidth = exports.clientHeight = exports.offsetTop = exports.offsetLeft = exports.offsetWidth = exports.offsetHeight = exports.accessKeyLabel = exports.accessKey = exports.namespaceURI = exports.attributesProxy = exports.attributes = exports.scrollLeft = exports.scrollTop = exports.scrollWidth = exports.scrollHeight = exports.prefix = exports.tagName = exports.nodeType = exports.parentNode = exports.isConnected = exports.popup = exports.openerWindow = exports.openerFrame = exports.mutationObservers = exports.windowResizeListener = exports.window = exports.width = exports.value = exports.url = exports.updateSelectedness = exports.reportMutation = exports.unobserveMutations = exports.textAreaNode = exports.target = exports.style = exports.start = exports.shadowRoot = exports.setupVMContext = exports.selection = exports.selectedness = exports.selectNode = exports.rootNode = exports.resetSelection = exports.relList = void 0;
exports.cloneNode = exports.sandbox = exports.localStorage = exports.sessionStorage = exports.screen = exports.navigator = exports.history = exports.location = exports.nodeStream = exports.classRegistry = exports.localName = exports.setURL = exports.host = exports.mode = exports.content = exports.options = exports.played = exports.seekable = exports.seeking = exports.textTracks = exports.networkState = exports.ended = exports.error = exports.duration = exports.buffered = exports.preservesPitch = exports.defaultMuted = exports.muted = exports.defaultPlaybackRate = exports.playbackRate = exports.currentTime = exports.paused = exports.volume = exports.sheet = exports.files = exports.defaultChecked = exports.y = exports.x = exports.loading = exports.naturalWidth = exports.naturalHeight = exports.complete = exports.length = exports.elements = exports.returnValue = exports.validity = exports.validationMessage = exports.systemId = exports.publicId = exports.readyState = void 0;
exports.rows = exports.cells = exports.assignedToSlot = exports.assignedNodes = exports.slotAssignment = exports.serializable = exports.delegatesFocus = exports.clonable = exports.elementIdMap = exports.defaultValue = exports.areas = exports.top = exports.parent = exports.self = exports.selectedIndex = exports.attributeName = exports.getTokenList = exports.setNamedItem = exports.proxy = exports.itemsByNamespaceURI = exports.getNamedItemKey = exports.getNamespaceItemKey = exports.dataset = exports.getFormControlNamedItem = exports.getFormControlItems = exports.computedStyle = exports.query = exports.affectsComputedStyleCache = exports.forms = exports.affectsCache = exports.cache = exports.elementArray = exports.nodeArray = exports.onRemoveAttribute = exports.onSetAttribute = exports.clearCache = exports.updateSheet = exports.styleNode = exports.selectedOptions = exports.items = exports.removeNamedItem = exports.clone = exports.settings = exports.capabilities = exports.constraints = exports.tracks = exports.replaceChild = exports.insertBefore = exports.removeChild = exports.appendChild = void 0;
exports.preserveAspectRatio = exports.readOnly = exports.refY = exports.refX = exports.orientAngle = exports.orientType = exports.values = exports.markerHeight = exports.markerWidth = exports.markerUnits = exports.viewBox = exports.unitType = exports.pathLength = exports.animVal = exports.baseVal = exports.transform = exports.systemLanguage = exports.requiredExtensions = exports.getItemList = exports.windowInternalId = exports.browserFrames = exports.aborted = exports.destroyed = exports.globalObject = exports.detail = exports.type = exports.timeStamp = exports.eventPhase = exports.defaultPrevented = exports.cancelable = exports.bubbles = exports.composed = exports.popoverTargetElement = exports.canvas = exports.state = exports.illegalConstructor = exports.id = exports.language = exports.label = exports.kind = exports.activeCues = exports.cues = exports.srcObject = exports.sinkId = exports.remote = exports.mediaKeys = exports.controlsList = exports.track = exports.tBodies = exports.headers = void 0;
exports.m41 = exports.m34 = exports.m33 = exports.m32 = exports.m31 = exports.m24 = exports.m23 = exports.m22 = exports.m21 = exports.m14 = exports.m13 = exports.m12 = exports.m11 = exports.angle = exports.fromArray = exports.fromString = exports.toArray = exports.w = exports.z = exports.setAttribute = exports.getAttribute = exports.lengthAdjust = exports.textLength = exports.disabled = exports.offset = exports.fy = exports.fx = exports.patternTransform = exports.patternContentUnits = exports.patternUnits = exports.spreadMethod = exports.gradientTransform = exports.gradientUnits = exports.y2 = exports.x2 = exports.y1 = exports.x1 = exports.href = exports.primitiveUnits = exports.filterUnits = exports.maskContentUnits = exports.maskUnits = exports.clipPathUnits = exports.r = exports.cy = exports.cx = exports.ry = exports.rx = exports.points = exports.animatedPoints = void 0;
exports.amplitude = exports.intercept = exports.slope = exports.tableValues = exports.stdDeviationY = exports.stdDeviationX = exports.dy = exports.dx = exports.elevation = exports.azimuth = exports.yChannelSelector = exports.xChannelSelector = exports.scale = exports.surfaceScale = exports.diffuseConstant = exports.targetY = exports.targetX = exports.preserveAlpha = exports.orderY = exports.orderX = exports.kernelUnitLengthY = exports.kernelUnitLengthX = exports.kernelMatrix = exports.edgeMode = exports.divisor = exports.bias = exports.result = exports.in2 = exports.in1 = exports.spacing = exports.method = exports.startOffset = exports.attributeValue = exports.setDOMMatrix = exports.getDOMMatrix = exports.domMatrix = exports.matrix = exports.multiplySelf = exports.skewYSelf = exports.skewXSelf = exports.scaleNonUniformSelf = exports.scale3dSelf = exports.scaleSelf = exports.rotateAxisAngleSelf = exports.rotateSelf = exports.translateSelf = exports.setMatrixValue = exports.m44 = exports.m43 = exports.m42 = void 0;
exports.propertyEventListeners = exports.reason = exports.supports = exports.dispatchError = exports.moduleImportMap = exports.blocking = exports.credentials = exports.bodyUsed = exports.signal = exports.referrerPolicy = exports.redirect = exports.body = exports.preloads = exports.modules = exports.dispatching = exports.customElementReactionStack = exports.filterNode = exports.root = exports.xmlProcessingInstruction = exports.bindMethods = exports.rotate = exports.currentScale = exports.getLength = exports.invertSelf = exports.flipYSelf = exports.flipXSelf = exports.rotateFromVectorSelf = exports.stitchTiles = exports.seed = exports.numOctaves = exports.baseFrequencyY = exports.baseFrequencyX = exports.limitingConeAngle = exports.pointsAtZ = exports.pointsAtY = exports.pointsAtX = exports.specularExponent = exports.specularConstant = exports.radiusY = exports.radiusX = exports.operator = exports.crossOrigin = exports.exponent = void 0;
exports.abort = Symbol('abort');
exports.activeElement = Symbol('activeElement');
exports.asyncTaskManager = Symbol('asyncTaskManager');
exports.bodyBuffer = Symbol('bodyBuffer');
exports.buffer = Symbol('buffer');
exports.cachedResponse = Symbol('cachedResponse');
exports.callbacks = Symbol('callbacks');
exports.checked = Symbol('checked');
exports.childNodes = Symbol('childNodes');
exports.children = Symbol('children');
exports.classList = Symbol('classList');
exports.connectedToNode = Symbol('connectedToNode');
exports.disconnectedFromNode = Symbol('disconnectedFromNode');
exports.connectedToDocument = Symbol('connectedToDocument');
exports.disconnectedFromDocument = Symbol('disconnectedFromDocument');
exports.contentLength = Symbol('contentLength');
exports.contentType = Symbol('contentType');
exports.cssText = Symbol('cssText');
exports.currentScript = Symbol('currentScript');
exports.currentTarget = Symbol('currentTarget');
exports.data = Symbol('data');
exports.defaultView = Symbol('defaultView');
exports.destroy = Symbol('destroy');
exports.dirtyness = Symbol('dirtyness');
exports.end = Symbol('end');
exports.entries = Symbol('entries');
exports.evaluateCSS = Symbol('evaluateCSS');
exports.evaluateScript = Symbol('evaluateScript');
exports.exceptionObserver = Symbol('exceptionObserver');
exports.formNode = Symbol('formNode');
exports.internalId = Symbol('internalId');
exports.height = Symbol('height');
exports.immediatePropagationStopped = Symbol('immediatePropagationStopped');
exports.indeterminate = Symbol('indeterminate');
exports.isFirstWrite = Symbol('isFirstWrite');
exports.isFirstWriteAfterOpen = Symbol('isFirstWriteAfterOpen');
exports.isInPassiveEventListener = Symbol('isInPassiveEventListener');
exports.isValue = Symbol('isValue');
exports.listenerOptions = Symbol('listenerOptions');
exports.listeners = Symbol('listeners');
exports.itemsByName = Symbol('itemsByName');
exports.nextActiveElement = Symbol('nextActiveElement');
exports.observeMutations = Symbol('observeMutations');
exports.mutationListeners = Symbol('mutationListeners');
exports.ownerDocument = Symbol('ownerDocument');
exports.ownerElement = Symbol('ownerElement');
exports.propagationStopped = Symbol('propagationStopped');
exports.readyStateManager = Symbol('readyStateManager');
exports.referrer = Symbol('referrer');
exports.registry = Symbol('registry');
exports.relList = Symbol('relList');
exports.resetSelection = Symbol('resetSelection');
exports.rootNode = Symbol('rootNode');
exports.selectNode = Symbol('selectNode');
exports.selectedness = Symbol('selectedness');
exports.selection = Symbol('selection');
exports.setupVMContext = Symbol('setupVMContext');
exports.shadowRoot = Symbol('shadowRoot');
exports.start = Symbol('start');
exports.style = Symbol('style');
exports.target = Symbol('target');
exports.textAreaNode = Symbol('textAreaNode');
exports.unobserveMutations = Symbol('unobserveMutations');
exports.reportMutation = Symbol('reportMutation');
exports.updateSelectedness = Symbol('updateSelectedness');
exports.url = Symbol('url');
exports.value = Symbol('value');
exports.width = Symbol('width');
exports.window = Symbol('window');
exports.windowResizeListener = Symbol('windowResizeListener');
exports.mutationObservers = Symbol('mutationObservers');
exports.openerFrame = Symbol('openerFrame');
exports.openerWindow = Symbol('openerWindow');
exports.popup = Symbol('popup');
exports.isConnected = Symbol('isConnected');
exports.parentNode = Symbol('parentNode');
exports.nodeType = Symbol('nodeType');
exports.tagName = Symbol('tagName');
exports.prefix = Symbol('prefix');
exports.scrollHeight = Symbol('scrollHeight');
exports.scrollWidth = Symbol('scrollWidth');
exports.scrollTop = Symbol('scrollTop');
exports.scrollLeft = Symbol('scrollLeft');
exports.attributes = Symbol('attributes');
exports.attributesProxy = Symbol('attributesProxy');
exports.namespaceURI = Symbol('namespaceURI');
exports.accessKey = Symbol('accessKey');
exports.accessKeyLabel = Symbol('accessKeyLabel');
exports.offsetHeight = Symbol('offsetHeight');
exports.offsetWidth = Symbol('offsetWidth');
exports.offsetLeft = Symbol('offsetLeft');
exports.offsetTop = Symbol('offsetTop');
exports.clientHeight = Symbol('clientHeight');
exports.clientWidth = Symbol('clientWidth');
exports.clientLeft = Symbol('clientLeft');
exports.clientTop = Symbol('clientTop');
exports.name = Symbol('name');
exports.specified = Symbol('specified');
exports.adoptedStyleSheets = Symbol('adoptedStyleSheets');
exports.implementation = Symbol('implementation');
exports.readyState = Symbol('readyState');
exports.publicId = Symbol('publicId');
exports.systemId = Symbol('systemId');
exports.validationMessage = Symbol('validationMessage');
exports.validity = Symbol('validity');
exports.returnValue = Symbol('returnValue');
exports.elements = Symbol('elements');
exports.length = Symbol('length');
exports.complete = Symbol('complete');
exports.naturalHeight = Symbol('naturalHeight');
exports.naturalWidth = Symbol('naturalWidth');
exports.loading = Symbol('loading');
exports.x = Symbol('x');
exports.y = Symbol('y');
exports.defaultChecked = Symbol('defaultChecked');
exports.files = Symbol('files');
exports.sheet = Symbol('sheet');
exports.volume = Symbol('volume');
exports.paused = Symbol('paused');
exports.currentTime = Symbol('currentTime');
exports.playbackRate = Symbol('playbackRate');
exports.defaultPlaybackRate = Symbol('defaultPlaybackRate');
exports.muted = Symbol('muted');
exports.defaultMuted = Symbol('defaultMuted');
exports.preservesPitch = Symbol('preservesPitch');
exports.buffered = Symbol('buffered');
exports.duration = Symbol('duration');
exports.error = Symbol('error');
exports.ended = Symbol('ended');
exports.networkState = Symbol('networkState');
exports.textTracks = Symbol('textTracks');
exports.seeking = Symbol('seeking');
exports.seekable = Symbol('seekable');
exports.played = Symbol('played');
exports.options = Symbol('options');
exports.content = Symbol('content');
exports.mode = Symbol('mode');
exports.host = Symbol('host');
exports.setURL = Symbol('setURL');
exports.localName = Symbol('localName');
exports.classRegistry = Symbol('classRegistry');
exports.nodeStream = Symbol('nodeStream');
exports.location = Symbol('location');
exports.history = Symbol('history');
exports.navigator = Symbol('navigator');
exports.screen = Symbol('screen');
exports.sessionStorage = Symbol('sessionStorage');
exports.localStorage = Symbol('localStorage');
exports.sandbox = Symbol('sandbox');
exports.cloneNode = Symbol('cloneNode');
exports.appendChild = Symbol('appendChild');
exports.removeChild = Symbol('removeChild');
exports.insertBefore = Symbol('insertBefore');
exports.replaceChild = Symbol('replaceChild');
exports.tracks = Symbol('tracks');
exports.constraints = Symbol('constraints');
exports.capabilities = Symbol('capabilities');
exports.settings = Symbol('settings');
exports.clone = Symbol('clone');
exports.removeNamedItem = Symbol('removeNamedItem');
exports.items = Symbol('items');
exports.selectedOptions = Symbol('selectedOptions');
exports.styleNode = Symbol('styleNode');
exports.updateSheet = Symbol('updateSheet');
exports.clearCache = Symbol('clearCache');
exports.onSetAttribute = Symbol('onSetAttribute');
exports.onRemoveAttribute = Symbol('onRemoveAttribute');
exports.nodeArray = Symbol('nodeArray');
exports.elementArray = Symbol('elementArray');
exports.cache = Symbol('cache');
exports.affectsCache = Symbol('affectsCache');
exports.forms = Symbol('forms');
exports.affectsComputedStyleCache = Symbol('affectsComputedStyleCache');
exports.query = Symbol('query');
exports.computedStyle = Symbol('computedStyle');
exports.getFormControlItems = Symbol('getFormControlItems');
exports.getFormControlNamedItem = Symbol('getFormControlNamedItem');
exports.dataset = Symbol('dataset');
exports.getNamespaceItemKey = Symbol('getNamespaceItemKey');
exports.getNamedItemKey = Symbol('getNamedItemKey');
exports.itemsByNamespaceURI = Symbol('itemsByNamespaceURI');
exports.proxy = Symbol('proxy');
exports.setNamedItem = Symbol('setNamedItem');
exports.getTokenList = Symbol('getTokenList');
exports.attributeName = Symbol('attributeName');
exports.selectedIndex = Symbol('selectedIndex');
exports.self = Symbol('self');
exports.parent = Symbol('parent');
exports.top = Symbol('top');
exports.areas = Symbol('areas');
exports.defaultValue = Symbol('defaultValue');
exports.elementIdMap = Symbol('elementIdMap');
exports.clonable = Symbol('clonable');
exports.delegatesFocus = Symbol('delegatesFocus');
exports.serializable = Symbol('serializable');
exports.slotAssignment = Symbol('slotAssignment');
exports.assignedNodes = Symbol('assignedNodes');
exports.assignedToSlot = Symbol('assignedToSlot');
exports.cells = Symbol('cells');
exports.rows = Symbol('rows');
exports.headers = Symbol('headers');
exports.tBodies = Symbol('tBodies');
exports.track = Symbol('track');
exports.controlsList = Symbol('controlsList');
exports.mediaKeys = Symbol('mediaKeys');
exports.remote = Symbol('remote');
exports.sinkId = Symbol('sinkId');
exports.srcObject = Symbol('srcObject');
exports.cues = Symbol('cues');
exports.activeCues = Symbol('activeCues');
exports.kind = Symbol('kind');
exports.label = Symbol('label');
exports.language = Symbol('language');
exports.id = Symbol('id');
exports.illegalConstructor = Symbol('illegalConstructor');
exports.state = Symbol('state');
exports.canvas = Symbol('canvas');
exports.popoverTargetElement = Symbol('popoverTargetElement');
exports.composed = Symbol('composed');
exports.bubbles = Symbol('bubbles');
exports.cancelable = Symbol('cancelable');
exports.defaultPrevented = Symbol('defaultPrevented');
exports.eventPhase = Symbol('eventPhase');
exports.timeStamp = Symbol('timeStamp');
exports.type = Symbol('type');
exports.detail = Symbol('detail');
exports.globalObject = Symbol('globalObject');
exports.destroyed = Symbol('destroyed');
exports.aborted = Symbol('aborted');
exports.browserFrames = Symbol('browserFrames');
exports.windowInternalId = Symbol('windowInternalId');
exports.getItemList = Symbol('getItemList');
exports.requiredExtensions = Symbol('requiredExtensions');
exports.systemLanguage = Symbol('systemLanguage');
exports.transform = Symbol('transform');
exports.baseVal = Symbol('baseVal');
exports.animVal = Symbol('animVal');
exports.pathLength = Symbol('pathLength');
exports.unitType = Symbol('unitType');
exports.viewBox = Symbol('viewBox');
exports.markerUnits = Symbol('markerUnits');
exports.markerWidth = Symbol('markerWidth');
exports.markerHeight = Symbol('markerHeight');
exports.values = Symbol('values');
exports.orientType = Symbol('orientType');
exports.orientAngle = Symbol('orientAngle');
exports.refX = Symbol('refX');
exports.refY = Symbol('refY');
exports.readOnly = Symbol('readOnly');
exports.preserveAspectRatio = Symbol('preserveAspectRatio');
exports.animatedPoints = Symbol('animatedPoints');
exports.points = Symbol('points');
exports.rx = Symbol('rx');
exports.ry = Symbol('ry');
exports.cx = Symbol('cx');
exports.cy = Symbol('cy');
exports.r = Symbol('r');
exports.clipPathUnits = Symbol('clipPathUnits');
exports.maskUnits = Symbol('maskUnits');
exports.maskContentUnits = Symbol('maskContentUnits');
exports.filterUnits = Symbol('filterUnits');
exports.primitiveUnits = Symbol('primitiveUnits');
exports.href = Symbol('href');
exports.x1 = Symbol('x1');
exports.y1 = Symbol('y1');
exports.x2 = Symbol('x2');
exports.y2 = Symbol('y2');
exports.gradientUnits = Symbol('gradientUnits');
exports.gradientTransform = Symbol('gradientTransform');
exports.spreadMethod = Symbol('spreadMethod');
exports.patternUnits = Symbol('patternUnits');
exports.patternContentUnits = Symbol('patternContentUnits');
exports.patternTransform = Symbol('patternTransform');
exports.fx = Symbol('fx');
exports.fy = Symbol('fy');
exports.offset = Symbol('offset');
exports.disabled = Symbol('disabled');
exports.textLength = Symbol('textLength');
exports.lengthAdjust = Symbol('lengthAdjust');
exports.getAttribute = Symbol('getAttribute');
exports.setAttribute = Symbol('setAttribute');
exports.z = Symbol('z');
exports.w = Symbol('w');
exports.toArray = Symbol('toArray');
exports.fromString = Symbol('fromString');
exports.fromArray = Symbol('fromArray');
exports.angle = Symbol('angle');
exports.m11 = Symbol('m11');
exports.m12 = Symbol('m12');
exports.m13 = Symbol('m13');
exports.m14 = Symbol('m14');
exports.m21 = Symbol('m21');
exports.m22 = Symbol('m22');
exports.m23 = Symbol('m23');
exports.m24 = Symbol('m24');
exports.m31 = Symbol('m31');
exports.m32 = Symbol('m32');
exports.m33 = Symbol('m33');
exports.m34 = Symbol('m34');
exports.m41 = Symbol('m41');
exports.m42 = Symbol('m42');
exports.m43 = Symbol('m43');
exports.m44 = Symbol('m44');
exports.setMatrixValue = Symbol('setMatrixValue');
exports.translateSelf = Symbol('translateSelf');
exports.rotateSelf = Symbol('rotateSelf');
exports.rotateAxisAngleSelf = Symbol('rotateAxisAngleSelf');
exports.scaleSelf = Symbol('scaleSelf');
exports.scale3dSelf = Symbol('scale3dSelf');
exports.scaleNonUniformSelf = Symbol('scaleNonUniformSelf');
exports.skewXSelf = Symbol('skewXSelf');
exports.skewYSelf = Symbol('skewYSelf');
exports.multiplySelf = Symbol('multiplySelf');
exports.matrix = Symbol('matrix');
exports.domMatrix = Symbol('domMatrix');
exports.getDOMMatrix = Symbol('getDOMMatrix');
exports.setDOMMatrix = Symbol('setDOMMatrix');
exports.attributeValue = Symbol('attributeValue');
exports.startOffset = Symbol('startOffset');
exports.method = Symbol('method');
exports.spacing = Symbol('spacing');
exports.in1 = Symbol('in1');
exports.in2 = Symbol('in2');
exports.result = Symbol('result');
exports.bias = Symbol('bias');
exports.divisor = Symbol('divisor');
exports.edgeMode = Symbol('edgeMode');
exports.kernelMatrix = Symbol('kernelMatrix');
exports.kernelUnitLengthX = Symbol('kernelUnitLengthX');
exports.kernelUnitLengthY = Symbol('kernelUnitLengthY');
exports.orderX = Symbol('orderX');
exports.orderY = Symbol('orderY');
exports.preserveAlpha = Symbol('preserveAlpha');
exports.targetX = Symbol('targetX');
exports.targetY = Symbol('targetY');
exports.diffuseConstant = Symbol('diffuseConstant');
exports.surfaceScale = Symbol('surfaceScale');
exports.scale = Symbol('scale');
exports.xChannelSelector = Symbol('xChannelSelector');
exports.yChannelSelector = Symbol('yChannelSelector');
exports.azimuth = Symbol('azimuth');
exports.elevation = Symbol('elevation');
exports.dx = Symbol('dx');
exports.dy = Symbol('dy');
exports.stdDeviationX = Symbol('stdDeviationX');
exports.stdDeviationY = Symbol('stdDeviationY');
exports.tableValues = Symbol('tableValues');
exports.slope = Symbol('slope');
exports.intercept = Symbol('intercept');
exports.amplitude = Symbol('amplitude');
exports.exponent = Symbol('exponent');
exports.crossOrigin = Symbol('crossOrigin');
exports.operator = Symbol('operator');
exports.radiusX = Symbol('radiusX');
exports.radiusY = Symbol('radiusY');
exports.specularConstant = Symbol('specularConstant');
exports.specularExponent = Symbol('specularExponent');
exports.pointsAtX = Symbol('pointsAtX');
exports.pointsAtY = Symbol('pointsAtY');
exports.pointsAtZ = Symbol('pointsAtZ');
exports.limitingConeAngle = Symbol('limitingConeAngle');
exports.baseFrequencyX = Symbol('baseFrequencyX');
exports.baseFrequencyY = Symbol('baseFrequencyY');
exports.numOctaves = Symbol('numOctaves');
exports.seed = Symbol('seed');
exports.stitchTiles = Symbol('stitchTiles');
exports.rotateFromVectorSelf = Symbol('rotateFromVectorSelf');
exports.flipXSelf = Symbol('flipXSelf');
exports.flipYSelf = Symbol('flipYSelf');
exports.invertSelf = Symbol('invertSelf');
exports.getLength = Symbol('getLength');
exports.currentScale = Symbol('currentScale');
exports.rotate = Symbol('rotate');
exports.bindMethods = Symbol('bindMethods');
exports.xmlProcessingInstruction = Symbol('xmlProcessingInstruction');
exports.root = Symbol('root');
exports.filterNode = Symbol('filterNode');
exports.customElementReactionStack = Symbol('customElementReactionStack');
exports.dispatching = Symbol('dispatching');
exports.modules = Symbol('modules');
exports.preloads = Symbol('preloads');
exports.body = Symbol('body');
exports.redirect = Symbol('redirect');
exports.referrerPolicy = Symbol('referrerPolicy');
exports.signal = Symbol('signal');
exports.bodyUsed = Symbol('bodyUsed');
exports.credentials = Symbol('credentials');
exports.blocking = Symbol('blocking');
exports.moduleImportMap = Symbol('moduleImportMap');
exports.dispatchError = Symbol('dispatchError');
exports.supports = Symbol('supports');
exports.reason = Symbol('reason');
exports.propertyEventListeners = Symbol('propertyEventListeners');
//# sourceMappingURL=PropertySymbol.cjs.map