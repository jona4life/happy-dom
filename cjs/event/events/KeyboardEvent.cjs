"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIEvent_js_1 = __importDefault(require("../UIEvent.cjs"));
/**
 *
 */
class KeyboardEvent extends UIEvent_js_1.default {
    static DOM_KEY_LOCATION_STANDARD = 0;
    static DOM_KEY_LOCATION_LEFT = 1;
    static DOM_KEY_LOCATION_RIGHT = 2;
    static DOM_KEY_LOCATION_NUMPAD = 3;
    altKey;
    code;
    ctrlKey;
    isComposing;
    key;
    location;
    metaKey;
    repeat;
    shiftKey;
    /**
     * @deprecated
     */
    keyCode;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.altKey = eventInit?.altKey ?? false;
        this.code = eventInit?.code ?? '';
        this.ctrlKey = eventInit?.ctrlKey ?? false;
        this.isComposing = eventInit?.isComposing ?? false;
        this.key = eventInit?.key ?? '';
        this.location = eventInit?.location ?? 0;
        this.metaKey = eventInit?.metaKey ?? false;
        this.repeat = eventInit?.repeat ?? false;
        this.shiftKey = eventInit?.shiftKey ?? false;
        this.keyCode = eventInit?.keyCode ?? 0;
    }
    /**
     * Returns the state of a modifier key.
     *
     * @param key A modifier key value.
     * @returns True if it's pressed, false otherwise.
     */
    getModifierState(key) {
        if (arguments.length < 1) {
            throw new TypeError("Failed to execute 'getModifierState' on 'KeyboardEvent': 1 argument required, but only 0 present.");
        }
        switch (String(key).toLowerCase()) {
            case 'alt':
            case 'altgraph':
                return this.altKey;
            case 'control':
                return this.ctrlKey;
            case 'meta':
                return this.metaKey;
            case 'shift':
                return this.shiftKey;
            default:
                return false;
        }
    }
}
exports.default = KeyboardEvent;
//# sourceMappingURL=KeyboardEvent.cjs.map