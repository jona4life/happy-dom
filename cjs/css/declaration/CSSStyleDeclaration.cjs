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
const DOMExceptionNameEnum_js_1 = __importDefault(require("../../exception/DOMExceptionNameEnum.cjs"));
const CSSStyleDeclarationPropertyManager_js_1 = __importDefault(require("./property-manager/CSSStyleDeclarationPropertyManager.cjs"));
const PropertySymbol = __importStar(require("../../PropertySymbol.cjs"));
const CSSStyleDeclarationComputedStyle_js_1 = __importDefault(require("./computed-style/CSSStyleDeclarationComputedStyle.cjs"));
/**
 * CSS Style Declaration.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
 */
class CSSStyleDeclaration {
    // Public properties
    parentRule = null;
    // Internal properties
    [PropertySymbol.window];
    // Private properties
    #element;
    #computed;
    #cache = {
        attributeValue: null,
        propertyManager: null
    };
    /**
     * Constructor.
     *
     * @param illegalConstructorSymbol Illegal constructor symbol.
     * @param window Window.
     * @param [options] Options.
     * @param [options.element] Element.
     * @param [options.computed] Computed.
     */
    constructor(illegalConstructorSymbol, window, options) {
        if (illegalConstructorSymbol !== PropertySymbol.illegalConstructor) {
            throw new TypeError('Illegal constructor');
        }
        this[PropertySymbol.window] = window;
        this.#element = options?.element;
        this.#computed = options?.element ? !!options?.computed : false;
    }
    /**
     * Index properties
     */
    /* eslint-disable jsdoc/require-jsdoc */
    get 0() {
        return this.item(0) || undefined;
    }
    get 1() {
        return this.item(1) || undefined;
    }
    get 2() {
        return this.item(2) || undefined;
    }
    get 3() {
        return this.item(3) || undefined;
    }
    get 4() {
        return this.item(4) || undefined;
    }
    get 5() {
        return this.item(5) || undefined;
    }
    get 6() {
        return this.item(6) || undefined;
    }
    get 7() {
        return this.item(7) || undefined;
    }
    get 8() {
        return this.item(8) || undefined;
    }
    get 9() {
        return this.item(9) || undefined;
    }
    get 10() {
        return this.item(10) || undefined;
    }
    get 11() {
        return this.item(11) || undefined;
    }
    get 12() {
        return this.item(12) || undefined;
    }
    get 13() {
        return this.item(13) || undefined;
    }
    get 14() {
        return this.item(14) || undefined;
    }
    get 15() {
        return this.item(15) || undefined;
    }
    get 16() {
        return this.item(16) || undefined;
    }
    get 17() {
        return this.item(17) || undefined;
    }
    get 18() {
        return this.item(18) || undefined;
    }
    get 19() {
        return this.item(19) || undefined;
    }
    get 20() {
        return this.item(20) || undefined;
    }
    get 21() {
        return this.item(21) || undefined;
    }
    get 22() {
        return this.item(22) || undefined;
    }
    get 23() {
        return this.item(23) || undefined;
    }
    get 24() {
        return this.item(24) || undefined;
    }
    get 25() {
        return this.item(25) || undefined;
    }
    get 26() {
        return this.item(26) || undefined;
    }
    get 27() {
        return this.item(27) || undefined;
    }
    get 28() {
        return this.item(28) || undefined;
    }
    get 29() {
        return this.item(29) || undefined;
    }
    get 30() {
        return this.item(30) || undefined;
    }
    get 31() {
        return this.item(31) || undefined;
    }
    get 32() {
        return this.item(32) || undefined;
    }
    get 33() {
        return this.item(33) || undefined;
    }
    get 34() {
        return this.item(34) || undefined;
    }
    get 35() {
        return this.item(35) || undefined;
    }
    get 36() {
        return this.item(36) || undefined;
    }
    get 37() {
        return this.item(37) || undefined;
    }
    get 38() {
        return this.item(38) || undefined;
    }
    get 39() {
        return this.item(39) || undefined;
    }
    get 40() {
        return this.item(40) || undefined;
    }
    get 41() {
        return this.item(41) || undefined;
    }
    get 42() {
        return this.item(42) || undefined;
    }
    get 43() {
        return this.item(43) || undefined;
    }
    get 44() {
        return this.item(44) || undefined;
    }
    get 45() {
        return this.item(45) || undefined;
    }
    get 46() {
        return this.item(46) || undefined;
    }
    get 47() {
        return this.item(47) || undefined;
    }
    get 48() {
        return this.item(48) || undefined;
    }
    get 49() {
        return this.item(49) || undefined;
    }
    get 50() {
        return this.item(50) || undefined;
    }
    get 51() {
        return this.item(51) || undefined;
    }
    get 52() {
        return this.item(52) || undefined;
    }
    get 53() {
        return this.item(53) || undefined;
    }
    get 54() {
        return this.item(54) || undefined;
    }
    get 55() {
        return this.item(55) || undefined;
    }
    get 56() {
        return this.item(56) || undefined;
    }
    get 57() {
        return this.item(57) || undefined;
    }
    get 58() {
        return this.item(58) || undefined;
    }
    get 59() {
        return this.item(59) || undefined;
    }
    get 60() {
        return this.item(60) || undefined;
    }
    get 61() {
        return this.item(61) || undefined;
    }
    get 62() {
        return this.item(62) || undefined;
    }
    get 63() {
        return this.item(63) || undefined;
    }
    get 64() {
        return this.item(64) || undefined;
    }
    get 65() {
        return this.item(65) || undefined;
    }
    get 66() {
        return this.item(66) || undefined;
    }
    get 67() {
        return this.item(67) || undefined;
    }
    get 68() {
        return this.item(68) || undefined;
    }
    get 69() {
        return this.item(69) || undefined;
    }
    get 70() {
        return this.item(70) || undefined;
    }
    get 71() {
        return this.item(71) || undefined;
    }
    get 72() {
        return this.item(72) || undefined;
    }
    get 73() {
        return this.item(73) || undefined;
    }
    get 74() {
        return this.item(74) || undefined;
    }
    get 75() {
        return this.item(75) || undefined;
    }
    get 76() {
        return this.item(76) || undefined;
    }
    get 77() {
        return this.item(77) || undefined;
    }
    get 78() {
        return this.item(78) || undefined;
    }
    get 79() {
        return this.item(79) || undefined;
    }
    get 80() {
        return this.item(80) || undefined;
    }
    get 81() {
        return this.item(81) || undefined;
    }
    get 82() {
        return this.item(82) || undefined;
    }
    get 83() {
        return this.item(83) || undefined;
    }
    get 84() {
        return this.item(84) || undefined;
    }
    get 85() {
        return this.item(85) || undefined;
    }
    get 86() {
        return this.item(86) || undefined;
    }
    get 87() {
        return this.item(87) || undefined;
    }
    get 88() {
        return this.item(88) || undefined;
    }
    get 89() {
        return this.item(89) || undefined;
    }
    get 90() {
        return this.item(90) || undefined;
    }
    get 91() {
        return this.item(91) || undefined;
    }
    get 92() {
        return this.item(92) || undefined;
    }
    get 93() {
        return this.item(93) || undefined;
    }
    get 94() {
        return this.item(94) || undefined;
    }
    get 95() {
        return this.item(95) || undefined;
    }
    get 96() {
        return this.item(96) || undefined;
    }
    get 97() {
        return this.item(97) || undefined;
    }
    get 98() {
        return this.item(98) || undefined;
    }
    get 99() {
        return this.item(99) || undefined;
    }
    get 100() {
        return this.item(100) || undefined;
    }
    get 101() {
        return this.item(101) || undefined;
    }
    get 102() {
        return this.item(102) || undefined;
    }
    get 103() {
        return this.item(103) || undefined;
    }
    get 104() {
        return this.item(104) || undefined;
    }
    get 105() {
        return this.item(105) || undefined;
    }
    get 106() {
        return this.item(106) || undefined;
    }
    get 107() {
        return this.item(107) || undefined;
    }
    get 108() {
        return this.item(108) || undefined;
    }
    get 109() {
        return this.item(109) || undefined;
    }
    get 110() {
        return this.item(110) || undefined;
    }
    get 111() {
        return this.item(111) || undefined;
    }
    get 112() {
        return this.item(112) || undefined;
    }
    get 113() {
        return this.item(113) || undefined;
    }
    get 114() {
        return this.item(114) || undefined;
    }
    get 115() {
        return this.item(115) || undefined;
    }
    get 116() {
        return this.item(116) || undefined;
    }
    get 117() {
        return this.item(117) || undefined;
    }
    get 118() {
        return this.item(118) || undefined;
    }
    get 119() {
        return this.item(119) || undefined;
    }
    get 120() {
        return this.item(120) || undefined;
    }
    get 121() {
        return this.item(121) || undefined;
    }
    get 122() {
        return this.item(122) || undefined;
    }
    get 123() {
        return this.item(123) || undefined;
    }
    get 124() {
        return this.item(124) || undefined;
    }
    get 125() {
        return this.item(125) || undefined;
    }
    get 126() {
        return this.item(126) || undefined;
    }
    get 127() {
        return this.item(127) || undefined;
    }
    get 128() {
        return this.item(128) || undefined;
    }
    get 129() {
        return this.item(129) || undefined;
    }
    get 130() {
        return this.item(130) || undefined;
    }
    get 131() {
        return this.item(131) || undefined;
    }
    get 132() {
        return this.item(132) || undefined;
    }
    get 133() {
        return this.item(133) || undefined;
    }
    get 134() {
        return this.item(134) || undefined;
    }
    get 135() {
        return this.item(135) || undefined;
    }
    get 136() {
        return this.item(136) || undefined;
    }
    get 137() {
        return this.item(137) || undefined;
    }
    get 138() {
        return this.item(138) || undefined;
    }
    get 139() {
        return this.item(139) || undefined;
    }
    get 140() {
        return this.item(140) || undefined;
    }
    get 141() {
        return this.item(141) || undefined;
    }
    get 142() {
        return this.item(142) || undefined;
    }
    get 143() {
        return this.item(143) || undefined;
    }
    get 144() {
        return this.item(144) || undefined;
    }
    get 145() {
        return this.item(145) || undefined;
    }
    get 146() {
        return this.item(146) || undefined;
    }
    get 147() {
        return this.item(147) || undefined;
    }
    get 148() {
        return this.item(148) || undefined;
    }
    get 149() {
        return this.item(149) || undefined;
    }
    get 150() {
        return this.item(150) || undefined;
    }
    get 151() {
        return this.item(151) || undefined;
    }
    get 152() {
        return this.item(152) || undefined;
    }
    get 153() {
        return this.item(153) || undefined;
    }
    get 154() {
        return this.item(154) || undefined;
    }
    get 155() {
        return this.item(155) || undefined;
    }
    get 156() {
        return this.item(156) || undefined;
    }
    get 157() {
        return this.item(157) || undefined;
    }
    get 158() {
        return this.item(158) || undefined;
    }
    get 159() {
        return this.item(159) || undefined;
    }
    get 160() {
        return this.item(160) || undefined;
    }
    get 161() {
        return this.item(161) || undefined;
    }
    get 162() {
        return this.item(162) || undefined;
    }
    get 163() {
        return this.item(163) || undefined;
    }
    get 164() {
        return this.item(164) || undefined;
    }
    get 165() {
        return this.item(165) || undefined;
    }
    get 166() {
        return this.item(166) || undefined;
    }
    get 167() {
        return this.item(167) || undefined;
    }
    get 168() {
        return this.item(168) || undefined;
    }
    get 169() {
        return this.item(169) || undefined;
    }
    get 170() {
        return this.item(170) || undefined;
    }
    get 171() {
        return this.item(171) || undefined;
    }
    get 172() {
        return this.item(172) || undefined;
    }
    get 173() {
        return this.item(173) || undefined;
    }
    get 174() {
        return this.item(174) || undefined;
    }
    get 175() {
        return this.item(175) || undefined;
    }
    get 176() {
        return this.item(176) || undefined;
    }
    get 177() {
        return this.item(177) || undefined;
    }
    get 178() {
        return this.item(178) || undefined;
    }
    get 179() {
        return this.item(179) || undefined;
    }
    get 180() {
        return this.item(180) || undefined;
    }
    get 181() {
        return this.item(181) || undefined;
    }
    get 182() {
        return this.item(182) || undefined;
    }
    get 183() {
        return this.item(183) || undefined;
    }
    get 184() {
        return this.item(184) || undefined;
    }
    get 185() {
        return this.item(185) || undefined;
    }
    get 186() {
        return this.item(186) || undefined;
    }
    get 187() {
        return this.item(187) || undefined;
    }
    get 188() {
        return this.item(188) || undefined;
    }
    get 189() {
        return this.item(189) || undefined;
    }
    get 190() {
        return this.item(190) || undefined;
    }
    get 191() {
        return this.item(191) || undefined;
    }
    get 192() {
        return this.item(192) || undefined;
    }
    get 193() {
        return this.item(193) || undefined;
    }
    get 194() {
        return this.item(194) || undefined;
    }
    get 195() {
        return this.item(195) || undefined;
    }
    get 196() {
        return this.item(196) || undefined;
    }
    get 197() {
        return this.item(197) || undefined;
    }
    get 198() {
        return this.item(198) || undefined;
    }
    get 199() {
        return this.item(199) || undefined;
    }
    get 200() {
        return this.item(200) || undefined;
    }
    get 201() {
        return this.item(201) || undefined;
    }
    get 202() {
        return this.item(202) || undefined;
    }
    get 203() {
        return this.item(203) || undefined;
    }
    get 204() {
        return this.item(204) || undefined;
    }
    get 205() {
        return this.item(205) || undefined;
    }
    get 206() {
        return this.item(206) || undefined;
    }
    get 207() {
        return this.item(207) || undefined;
    }
    get 208() {
        return this.item(208) || undefined;
    }
    get 209() {
        return this.item(209) || undefined;
    }
    get 210() {
        return this.item(210) || undefined;
    }
    get 211() {
        return this.item(211) || undefined;
    }
    get 212() {
        return this.item(212) || undefined;
    }
    get 213() {
        return this.item(213) || undefined;
    }
    get 214() {
        return this.item(214) || undefined;
    }
    get 215() {
        return this.item(215) || undefined;
    }
    get 216() {
        return this.item(216) || undefined;
    }
    get 217() {
        return this.item(217) || undefined;
    }
    get 218() {
        return this.item(218) || undefined;
    }
    get 219() {
        return this.item(219) || undefined;
    }
    get 220() {
        return this.item(220) || undefined;
    }
    get 221() {
        return this.item(221) || undefined;
    }
    get 222() {
        return this.item(222) || undefined;
    }
    get 223() {
        return this.item(223) || undefined;
    }
    get 224() {
        return this.item(224) || undefined;
    }
    get 225() {
        return this.item(225) || undefined;
    }
    get 226() {
        return this.item(226) || undefined;
    }
    get 227() {
        return this.item(227) || undefined;
    }
    get 228() {
        return this.item(228) || undefined;
    }
    get 229() {
        return this.item(229) || undefined;
    }
    get 230() {
        return this.item(230) || undefined;
    }
    get 231() {
        return this.item(231) || undefined;
    }
    get 232() {
        return this.item(232) || undefined;
    }
    get 233() {
        return this.item(233) || undefined;
    }
    get 234() {
        return this.item(234) || undefined;
    }
    get 235() {
        return this.item(235) || undefined;
    }
    get 236() {
        return this.item(236) || undefined;
    }
    get 237() {
        return this.item(237) || undefined;
    }
    get 238() {
        return this.item(238) || undefined;
    }
    get 239() {
        return this.item(239) || undefined;
    }
    get 240() {
        return this.item(240) || undefined;
    }
    get 241() {
        return this.item(241) || undefined;
    }
    get 242() {
        return this.item(242) || undefined;
    }
    get 243() {
        return this.item(243) || undefined;
    }
    get 244() {
        return this.item(244) || undefined;
    }
    get 245() {
        return this.item(245) || undefined;
    }
    get 246() {
        return this.item(246) || undefined;
    }
    get 247() {
        return this.item(247) || undefined;
    }
    get 248() {
        return this.item(248) || undefined;
    }
    get 249() {
        return this.item(249) || undefined;
    }
    get 250() {
        return this.item(250) || undefined;
    }
    get 251() {
        return this.item(251) || undefined;
    }
    get 252() {
        return this.item(252) || undefined;
    }
    get 253() {
        return this.item(253) || undefined;
    }
    get 254() {
        return this.item(254) || undefined;
    }
    get 255() {
        return this.item(255) || undefined;
    }
    get 256() {
        return this.item(256) || undefined;
    }
    get 257() {
        return this.item(257) || undefined;
    }
    get 258() {
        return this.item(258) || undefined;
    }
    get 259() {
        return this.item(259) || undefined;
    }
    get 260() {
        return this.item(260) || undefined;
    }
    get 261() {
        return this.item(261) || undefined;
    }
    get 262() {
        return this.item(262) || undefined;
    }
    get 263() {
        return this.item(263) || undefined;
    }
    get 264() {
        return this.item(264) || undefined;
    }
    get 265() {
        return this.item(265) || undefined;
    }
    get 266() {
        return this.item(266) || undefined;
    }
    get 267() {
        return this.item(267) || undefined;
    }
    get 268() {
        return this.item(268) || undefined;
    }
    get 269() {
        return this.item(269) || undefined;
    }
    get 270() {
        return this.item(270) || undefined;
    }
    get 271() {
        return this.item(271) || undefined;
    }
    get 272() {
        return this.item(272) || undefined;
    }
    get 273() {
        return this.item(273) || undefined;
    }
    get 274() {
        return this.item(274) || undefined;
    }
    get 275() {
        return this.item(275) || undefined;
    }
    get 276() {
        return this.item(276) || undefined;
    }
    get 277() {
        return this.item(277) || undefined;
    }
    get 278() {
        return this.item(278) || undefined;
    }
    get 279() {
        return this.item(279) || undefined;
    }
    get 280() {
        return this.item(280) || undefined;
    }
    get 281() {
        return this.item(281) || undefined;
    }
    get 282() {
        return this.item(282) || undefined;
    }
    get 283() {
        return this.item(283) || undefined;
    }
    get 284() {
        return this.item(284) || undefined;
    }
    get 285() {
        return this.item(285) || undefined;
    }
    get 286() {
        return this.item(286) || undefined;
    }
    get 287() {
        return this.item(287) || undefined;
    }
    get 288() {
        return this.item(288) || undefined;
    }
    get 289() {
        return this.item(289) || undefined;
    }
    get 290() {
        return this.item(290) || undefined;
    }
    get 291() {
        return this.item(291) || undefined;
    }
    get 292() {
        return this.item(292) || undefined;
    }
    get 293() {
        return this.item(293) || undefined;
    }
    get 294() {
        return this.item(294) || undefined;
    }
    get 295() {
        return this.item(295) || undefined;
    }
    get 296() {
        return this.item(296) || undefined;
    }
    get 297() {
        return this.item(297) || undefined;
    }
    get 298() {
        return this.item(298) || undefined;
    }
    get 299() {
        return this.item(299) || undefined;
    }
    get 300() {
        return this.item(300) || undefined;
    }
    get 301() {
        return this.item(301) || undefined;
    }
    get 302() {
        return this.item(302) || undefined;
    }
    get 303() {
        return this.item(303) || undefined;
    }
    get 304() {
        return this.item(304) || undefined;
    }
    get 305() {
        return this.item(305) || undefined;
    }
    get 306() {
        return this.item(306) || undefined;
    }
    get 307() {
        return this.item(307) || undefined;
    }
    get 308() {
        return this.item(308) || undefined;
    }
    get 309() {
        return this.item(309) || undefined;
    }
    get 310() {
        return this.item(310) || undefined;
    }
    get 311() {
        return this.item(311) || undefined;
    }
    get 312() {
        return this.item(312) || undefined;
    }
    get 313() {
        return this.item(313) || undefined;
    }
    get 314() {
        return this.item(314) || undefined;
    }
    get 315() {
        return this.item(315) || undefined;
    }
    get 316() {
        return this.item(316) || undefined;
    }
    get 317() {
        return this.item(317) || undefined;
    }
    get 318() {
        return this.item(318) || undefined;
    }
    get 319() {
        return this.item(319) || undefined;
    }
    get 320() {
        return this.item(320) || undefined;
    }
    get 321() {
        return this.item(321) || undefined;
    }
    get 322() {
        return this.item(322) || undefined;
    }
    get 323() {
        return this.item(323) || undefined;
    }
    get 324() {
        return this.item(324) || undefined;
    }
    get 325() {
        return this.item(325) || undefined;
    }
    get 326() {
        return this.item(326) || undefined;
    }
    get 327() {
        return this.item(327) || undefined;
    }
    get 328() {
        return this.item(328) || undefined;
    }
    get 329() {
        return this.item(329) || undefined;
    }
    get 330() {
        return this.item(330) || undefined;
    }
    get 331() {
        return this.item(331) || undefined;
    }
    get 332() {
        return this.item(332) || undefined;
    }
    get 333() {
        return this.item(333) || undefined;
    }
    get 334() {
        return this.item(334) || undefined;
    }
    get 335() {
        return this.item(335) || undefined;
    }
    get 336() {
        return this.item(336) || undefined;
    }
    get 337() {
        return this.item(337) || undefined;
    }
    get 338() {
        return this.item(338) || undefined;
    }
    get 339() {
        return this.item(339) || undefined;
    }
    get 340() {
        return this.item(340) || undefined;
    }
    get 341() {
        return this.item(341) || undefined;
    }
    get 342() {
        return this.item(342) || undefined;
    }
    get 343() {
        return this.item(343) || undefined;
    }
    get 344() {
        return this.item(344) || undefined;
    }
    get 345() {
        return this.item(345) || undefined;
    }
    get 346() {
        return this.item(346) || undefined;
    }
    get 347() {
        return this.item(347) || undefined;
    }
    get 348() {
        return this.item(348) || undefined;
    }
    get 349() {
        return this.item(349) || undefined;
    }
    get 350() {
        return this.item(350) || undefined;
    }
    get 351() {
        return this.item(351) || undefined;
    }
    get 352() {
        return this.item(352) || undefined;
    }
    get 353() {
        return this.item(353) || undefined;
    }
    get 354() {
        return this.item(354) || undefined;
    }
    get 355() {
        return this.item(355) || undefined;
    }
    get 356() {
        return this.item(356) || undefined;
    }
    get 357() {
        return this.item(357) || undefined;
    }
    get 358() {
        return this.item(358) || undefined;
    }
    get 359() {
        return this.item(359) || undefined;
    }
    get 360() {
        return this.item(360) || undefined;
    }
    get 361() {
        return this.item(361) || undefined;
    }
    get 362() {
        return this.item(362) || undefined;
    }
    get 363() {
        return this.item(363) || undefined;
    }
    get 364() {
        return this.item(364) || undefined;
    }
    get 365() {
        return this.item(365) || undefined;
    }
    get 366() {
        return this.item(366) || undefined;
    }
    get 367() {
        return this.item(367) || undefined;
    }
    get 368() {
        return this.item(368) || undefined;
    }
    get 369() {
        return this.item(369) || undefined;
    }
    get 370() {
        return this.item(370) || undefined;
    }
    get 371() {
        return this.item(371) || undefined;
    }
    get 372() {
        return this.item(372) || undefined;
    }
    get 373() {
        return this.item(373) || undefined;
    }
    get 374() {
        return this.item(374) || undefined;
    }
    get 375() {
        return this.item(375) || undefined;
    }
    get 376() {
        return this.item(376) || undefined;
    }
    get 377() {
        return this.item(377) || undefined;
    }
    get 378() {
        return this.item(378) || undefined;
    }
    get 379() {
        return this.item(379) || undefined;
    }
    get 380() {
        return this.item(380) || undefined;
    }
    get 381() {
        return this.item(381) || undefined;
    }
    get 382() {
        return this.item(382) || undefined;
    }
    get 383() {
        return this.item(383) || undefined;
    }
    get 384() {
        return this.item(384) || undefined;
    }
    get 385() {
        return this.item(385) || undefined;
    }
    get 386() {
        return this.item(386) || undefined;
    }
    get 387() {
        return this.item(387) || undefined;
    }
    get 388() {
        return this.item(388) || undefined;
    }
    get 389() {
        return this.item(389) || undefined;
    }
    get 390() {
        return this.item(390) || undefined;
    }
    get 391() {
        return this.item(391) || undefined;
    }
    get 392() {
        return this.item(392) || undefined;
    }
    get 393() {
        return this.item(393) || undefined;
    }
    /**
     * CSS properties
     */
    get accentColor() {
        return this.getPropertyValue('accent-color');
    }
    set accentColor(value) {
        this.setProperty('accent-color', value);
    }
    get appRegion() {
        return this.getPropertyValue('app-region');
    }
    set appRegion(value) {
        this.setProperty('app-region', value);
    }
    get alignContent() {
        return this.getPropertyValue('align-content');
    }
    set alignContent(value) {
        this.setProperty('align-content', value);
    }
    get alignItems() {
        return this.getPropertyValue('align-items');
    }
    set alignItems(value) {
        this.setProperty('align-items', value);
    }
    get alignSelf() {
        return this.getPropertyValue('align-self');
    }
    set alignSelf(value) {
        this.setProperty('align-self', value);
    }
    get alignmentBaseline() {
        return this.getPropertyValue('alignment-baseline');
    }
    set alignmentBaseline(value) {
        this.setProperty('alignment-baseline', value);
    }
    get all() {
        return this.getPropertyValue('all');
    }
    set all(value) {
        this.setProperty('all', value);
    }
    get animation() {
        return this.getPropertyValue('animation');
    }
    set animation(value) {
        this.setProperty('animation', value);
    }
    get animationDelay() {
        return this.getPropertyValue('animation-delay');
    }
    set animationDelay(value) {
        this.setProperty('animation-delay', value);
    }
    get animationDirection() {
        return this.getPropertyValue('animation-direction');
    }
    set animationDirection(value) {
        this.setProperty('animation-direction', value);
    }
    get animationDuration() {
        return this.getPropertyValue('animation-duration');
    }
    set animationDuration(value) {
        this.setProperty('animation-duration', value);
    }
    get animationFillMode() {
        return this.getPropertyValue('animation-fill-mode');
    }
    set animationFillMode(value) {
        this.setProperty('animation-fill-mode', value);
    }
    get animationIterationCount() {
        return this.getPropertyValue('animation-iteration-count');
    }
    set animationIterationCount(value) {
        this.setProperty('animation-iteration-count', value);
    }
    get animationName() {
        return this.getPropertyValue('animation-name');
    }
    set animationName(value) {
        this.setProperty('animation-name', value);
    }
    get animationPlayState() {
        return this.getPropertyValue('animation-play-state');
    }
    set animationPlayState(value) {
        this.setProperty('animation-play-state', value);
    }
    get animationTimingFunction() {
        return this.getPropertyValue('animation-timing-function');
    }
    set animationTimingFunction(value) {
        this.setProperty('animation-timing-function', value);
    }
    get appearance() {
        return this.getPropertyValue('appearance');
    }
    set appearance(value) {
        this.setProperty('appearance', value);
    }
    get backdropFilter() {
        return this.getPropertyValue('backdrop-filter');
    }
    set backdropFilter(value) {
        this.setProperty('backdrop-filter', value);
    }
    get backfaceVisibility() {
        return this.getPropertyValue('backface-visibility');
    }
    set backfaceVisibility(value) {
        this.setProperty('backface-visibility', value);
    }
    get background() {
        return this.getPropertyValue('background');
    }
    set background(value) {
        this.setProperty('background', value);
    }
    get backgroundAttachment() {
        return this.getPropertyValue('background-attachment');
    }
    set backgroundAttachment(value) {
        this.setProperty('background-attachment', value);
    }
    get backgroundBlendMode() {
        return this.getPropertyValue('background-blend-mode');
    }
    set backgroundBlendMode(value) {
        this.setProperty('background-blend-mode', value);
    }
    get backgroundClip() {
        return this.getPropertyValue('background-clip');
    }
    set backgroundClip(value) {
        this.setProperty('background-clip', value);
    }
    get backgroundColor() {
        return this.getPropertyValue('background-color');
    }
    set backgroundColor(value) {
        this.setProperty('background-color', value);
    }
    get backgroundImage() {
        return this.getPropertyValue('background-image');
    }
    set backgroundImage(value) {
        this.setProperty('background-image', value);
    }
    get backgroundOrigin() {
        return this.getPropertyValue('background-origin');
    }
    set backgroundOrigin(value) {
        this.setProperty('background-origin', value);
    }
    get backgroundPosition() {
        return this.getPropertyValue('background-position');
    }
    set backgroundPosition(value) {
        this.setProperty('background-position', value);
    }
    get backgroundPositionX() {
        return this.getPropertyValue('background-position-x');
    }
    set backgroundPositionX(value) {
        this.setProperty('background-position-x', value);
    }
    get backgroundPositionY() {
        return this.getPropertyValue('background-position-y');
    }
    set backgroundPositionY(value) {
        this.setProperty('background-position-y', value);
    }
    get backgroundRepeat() {
        return this.getPropertyValue('background-repeat');
    }
    set backgroundRepeat(value) {
        this.setProperty('background-repeat', value);
    }
    get backgroundRepeatX() {
        return this.getPropertyValue('background-repeat-x');
    }
    set backgroundRepeatX(value) {
        this.setProperty('background-repeat-x', value);
    }
    get backgroundRepeatY() {
        return this.getPropertyValue('background-repeat-y');
    }
    set backgroundRepeatY(value) {
        this.setProperty('background-repeat-y', value);
    }
    get backgroundSize() {
        return this.getPropertyValue('background-size');
    }
    set backgroundSize(value) {
        this.setProperty('background-size', value);
    }
    get baselineShift() {
        return this.getPropertyValue('baseline-shift');
    }
    set baselineShift(value) {
        this.setProperty('baseline-shift', value);
    }
    get blockSize() {
        return this.getPropertyValue('block-size');
    }
    set blockSize(value) {
        this.setProperty('block-size', value);
    }
    get border() {
        return this.getPropertyValue('border');
    }
    set border(value) {
        this.setProperty('border', value);
    }
    get borderBlockEnd() {
        return this.getPropertyValue('border-block-end');
    }
    set borderBlockEnd(value) {
        this.setProperty('border-block-end', value);
    }
    get borderBlockEndColor() {
        return this.getPropertyValue('border-block-end-color');
    }
    set borderBlockEndColor(value) {
        this.setProperty('border-block-end-color', value);
    }
    get borderBlockEndStyle() {
        return this.getPropertyValue('border-block-end-style');
    }
    set borderBlockEndStyle(value) {
        this.setProperty('border-block-end-style', value);
    }
    get borderBlockEndWidth() {
        return this.getPropertyValue('border-block-end-width');
    }
    set borderBlockEndWidth(value) {
        this.setProperty('border-block-end-width', value);
    }
    get borderBlockStart() {
        return this.getPropertyValue('border-block-start');
    }
    set borderBlockStart(value) {
        this.setProperty('border-block-start', value);
    }
    get borderBlockStartColor() {
        return this.getPropertyValue('border-block-start-color');
    }
    set borderBlockStartColor(value) {
        this.setProperty('border-block-start-color', value);
    }
    get borderBlockStartStyle() {
        return this.getPropertyValue('border-block-start-style');
    }
    set borderBlockStartStyle(value) {
        this.setProperty('border-block-start-style', value);
    }
    get borderBlockStartWidth() {
        return this.getPropertyValue('border-block-start-width');
    }
    set borderBlockStartWidth(value) {
        this.setProperty('border-block-start-width', value);
    }
    get borderBottom() {
        return this.getPropertyValue('border-bottom');
    }
    set borderBottom(value) {
        this.setProperty('border-bottom', value);
    }
    get borderBottomColor() {
        return this.getPropertyValue('border-bottom-color');
    }
    set borderBottomColor(value) {
        this.setProperty('border-bottom-color', value);
    }
    get borderBottomLeftRadius() {
        return this.getPropertyValue('border-bottom-left-radius');
    }
    set borderBottomLeftRadius(value) {
        this.setProperty('border-bottom-left-radius', value);
    }
    get borderBottomRightRadius() {
        return this.getPropertyValue('border-bottom-right-radius');
    }
    set borderBottomRightRadius(value) {
        this.setProperty('border-bottom-right-radius', value);
    }
    get borderBottomStyle() {
        return this.getPropertyValue('border-bottom-style');
    }
    set borderBottomStyle(value) {
        this.setProperty('border-bottom-style', value);
    }
    get borderBottomWidth() {
        return this.getPropertyValue('border-bottom-width');
    }
    set borderBottomWidth(value) {
        this.setProperty('border-bottom-width', value);
    }
    get borderCollapse() {
        return this.getPropertyValue('border-collapse');
    }
    set borderCollapse(value) {
        this.setProperty('border-collapse', value);
    }
    get borderColor() {
        return this.getPropertyValue('border-color');
    }
    set borderColor(value) {
        this.setProperty('border-color', value);
    }
    get borderImage() {
        return this.getPropertyValue('border-image');
    }
    set borderImage(value) {
        this.setProperty('border-image', value);
    }
    get borderImageOutset() {
        return this.getPropertyValue('border-image-outset');
    }
    set borderImageOutset(value) {
        this.setProperty('border-image-outset', value);
    }
    get borderImageRepeat() {
        return this.getPropertyValue('border-image-repeat');
    }
    set borderImageRepeat(value) {
        this.setProperty('border-image-repeat', value);
    }
    get borderImageSlice() {
        return this.getPropertyValue('border-image-slice');
    }
    set borderImageSlice(value) {
        this.setProperty('border-image-slice', value);
    }
    get borderImageSource() {
        return this.getPropertyValue('border-image-source');
    }
    set borderImageSource(value) {
        this.setProperty('border-image-source', value);
    }
    get borderImageWidth() {
        return this.getPropertyValue('border-image-width');
    }
    set borderImageWidth(value) {
        this.setProperty('border-image-width', value);
    }
    get borderInlineEnd() {
        return this.getPropertyValue('border-inline-end');
    }
    set borderInlineEnd(value) {
        this.setProperty('border-inline-end', value);
    }
    get borderInlineEndColor() {
        return this.getPropertyValue('border-inline-end-color');
    }
    set borderInlineEndColor(value) {
        this.setProperty('border-inline-end-color', value);
    }
    get borderInlineEndStyle() {
        return this.getPropertyValue('border-inline-end-style');
    }
    set borderInlineEndStyle(value) {
        this.setProperty('border-inline-end-style', value);
    }
    get borderInlineEndWidth() {
        return this.getPropertyValue('border-inline-end-width');
    }
    set borderInlineEndWidth(value) {
        this.setProperty('border-inline-end-width', value);
    }
    get borderInlineStart() {
        return this.getPropertyValue('border-inline-start');
    }
    set borderInlineStart(value) {
        this.setProperty('border-inline-start', value);
    }
    get borderInlineStartColor() {
        return this.getPropertyValue('border-inline-start-color');
    }
    set borderInlineStartColor(value) {
        this.setProperty('border-inline-start-color', value);
    }
    get borderInlineStartStyle() {
        return this.getPropertyValue('border-inline-start-style');
    }
    set borderInlineStartStyle(value) {
        this.setProperty('border-inline-start-style', value);
    }
    get borderInlineStartWidth() {
        return this.getPropertyValue('border-inline-start-width');
    }
    set borderInlineStartWidth(value) {
        this.setProperty('border-inline-start-width', value);
    }
    get borderLeft() {
        return this.getPropertyValue('border-left');
    }
    set borderLeft(value) {
        this.setProperty('border-left', value);
    }
    get borderLeftColor() {
        return this.getPropertyValue('border-left-color');
    }
    set borderLeftColor(value) {
        this.setProperty('border-left-color', value);
    }
    get borderLeftStyle() {
        return this.getPropertyValue('border-left-style');
    }
    set borderLeftStyle(value) {
        this.setProperty('border-left-style', value);
    }
    get borderLeftWidth() {
        return this.getPropertyValue('border-left-width');
    }
    set borderLeftWidth(value) {
        this.setProperty('border-left-width', value);
    }
    get borderRadius() {
        return this.getPropertyValue('border-radius');
    }
    set borderRadius(value) {
        this.setProperty('border-radius', value);
    }
    get borderRight() {
        return this.getPropertyValue('border-right');
    }
    set borderRight(value) {
        this.setProperty('border-right', value);
    }
    get borderRightColor() {
        return this.getPropertyValue('border-right-color');
    }
    set borderRightColor(value) {
        this.setProperty('border-right-color', value);
    }
    get borderRightStyle() {
        return this.getPropertyValue('border-right-style');
    }
    set borderRightStyle(value) {
        this.setProperty('border-right-style', value);
    }
    get borderRightWidth() {
        return this.getPropertyValue('border-right-width');
    }
    set borderRightWidth(value) {
        this.setProperty('border-right-width', value);
    }
    get borderSpacing() {
        return this.getPropertyValue('border-spacing');
    }
    set borderSpacing(value) {
        this.setProperty('border-spacing', value);
    }
    get borderStyle() {
        return this.getPropertyValue('border-style');
    }
    set borderStyle(value) {
        this.setProperty('border-style', value);
    }
    get borderTop() {
        return this.getPropertyValue('border-top');
    }
    set borderTop(value) {
        this.setProperty('border-top', value);
    }
    get borderTopColor() {
        return this.getPropertyValue('border-top-color');
    }
    set borderTopColor(value) {
        this.setProperty('border-top-color', value);
    }
    get borderTopLeftRadius() {
        return this.getPropertyValue('border-top-left-radius');
    }
    set borderTopLeftRadius(value) {
        this.setProperty('border-top-left-radius', value);
    }
    get borderTopRightRadius() {
        return this.getPropertyValue('border-top-right-radius');
    }
    set borderTopRightRadius(value) {
        this.setProperty('border-top-right-radius', value);
    }
    get borderTopStyle() {
        return this.getPropertyValue('border-top-style');
    }
    set borderTopStyle(value) {
        this.setProperty('border-top-style', value);
    }
    get borderTopWidth() {
        return this.getPropertyValue('border-top-width');
    }
    set borderTopWidth(value) {
        this.setProperty('border-top-width', value);
    }
    get borderWidth() {
        return this.getPropertyValue('border-width');
    }
    set borderWidth(value) {
        this.setProperty('border-width', value);
    }
    get borderEndEndRadius() {
        return this.getPropertyValue('border-end-end-radius');
    }
    set borderEndEndRadius(value) {
        this.setProperty('border-end-end-radius', value);
    }
    get borderEndStartRadius() {
        return this.getPropertyValue('border-end-start-radius');
    }
    set borderEndStartRadius(value) {
        this.setProperty('border-end-start-radius', value);
    }
    get borderStartEndRadius() {
        return this.getPropertyValue('border-start-end-radius');
    }
    set borderStartEndRadius(value) {
        this.setProperty('border-start-end-radius', value);
    }
    get borderStartStartRadius() {
        return this.getPropertyValue('border-start-start-radius');
    }
    set borderStartStartRadius(value) {
        this.setProperty('border-start-start-radius', value);
    }
    get bottom() {
        return this.getPropertyValue('bottom');
    }
    set bottom(value) {
        this.setProperty('bottom', value);
    }
    get boxShadow() {
        return this.getPropertyValue('box-shadow');
    }
    set boxShadow(value) {
        this.setProperty('box-shadow', value);
    }
    get boxSizing() {
        return this.getPropertyValue('box-sizing');
    }
    set boxSizing(value) {
        this.setProperty('box-sizing', value);
    }
    get breakAfter() {
        return this.getPropertyValue('break-after');
    }
    set breakAfter(value) {
        this.setProperty('break-after', value);
    }
    get breakBefore() {
        return this.getPropertyValue('break-before');
    }
    set breakBefore(value) {
        this.setProperty('break-before', value);
    }
    get breakInside() {
        return this.getPropertyValue('break-inside');
    }
    set breakInside(value) {
        this.setProperty('break-inside', value);
    }
    get bufferedRendering() {
        return this.getPropertyValue('buffered-rendering');
    }
    set bufferedRendering(value) {
        this.setProperty('buffered-rendering', value);
    }
    get captionSide() {
        return this.getPropertyValue('caption-side');
    }
    set captionSide(value) {
        this.setProperty('caption-side', value);
    }
    get caretColor() {
        return this.getPropertyValue('caret-color');
    }
    set caretColor(value) {
        this.setProperty('caret-color', value);
    }
    get clear() {
        return this.getPropertyValue('clear');
    }
    set clear(value) {
        this.setProperty('clear', value);
    }
    get clip() {
        return this.getPropertyValue('clip');
    }
    set clip(value) {
        this.setProperty('clip', value);
    }
    get clipPath() {
        return this.getPropertyValue('clip-path');
    }
    set clipPath(value) {
        this.setProperty('clip-path', value);
    }
    get clipRule() {
        return this.getPropertyValue('clip-rule');
    }
    set clipRule(value) {
        this.setProperty('clip-rule', value);
    }
    get color() {
        return this.getPropertyValue('color');
    }
    set color(value) {
        this.setProperty('color', value);
    }
    get colorInterpolation() {
        return this.getPropertyValue('color-interpolation');
    }
    set colorInterpolation(value) {
        this.setProperty('color-interpolation', value);
    }
    get colorInterpolationFilters() {
        return this.getPropertyValue('color-interpolation-filters');
    }
    set colorInterpolationFilters(value) {
        this.setProperty('color-interpolation-filters', value);
    }
    get colorRendering() {
        return this.getPropertyValue('color-rendering');
    }
    set colorRendering(value) {
        this.setProperty('color-rendering', value);
    }
    get colorScheme() {
        return this.getPropertyValue('color-scheme');
    }
    set colorScheme(value) {
        this.setProperty('color-scheme', value);
    }
    get columnCount() {
        return this.getPropertyValue('column-count');
    }
    set columnCount(value) {
        this.setProperty('column-count', value);
    }
    get columnFill() {
        return this.getPropertyValue('column-fill');
    }
    set columnFill(value) {
        this.setProperty('column-fill', value);
    }
    get columnGap() {
        return this.getPropertyValue('column-gap');
    }
    set columnGap(value) {
        this.setProperty('column-gap', value);
    }
    get columnRule() {
        return this.getPropertyValue('column-rule');
    }
    set columnRule(value) {
        this.setProperty('column-rule', value);
    }
    get columnRuleColor() {
        return this.getPropertyValue('column-rule-color');
    }
    set columnRuleColor(value) {
        this.setProperty('column-rule-color', value);
    }
    get columnRuleStyle() {
        return this.getPropertyValue('column-rule-style');
    }
    set columnRuleStyle(value) {
        this.setProperty('column-rule-style', value);
    }
    get columnRuleWidth() {
        return this.getPropertyValue('column-rule-width');
    }
    set columnRuleWidth(value) {
        this.setProperty('column-rule-width', value);
    }
    get columnSpan() {
        return this.getPropertyValue('column-span');
    }
    set columnSpan(value) {
        this.setProperty('column-span', value);
    }
    get columnWidth() {
        return this.getPropertyValue('column-width');
    }
    set columnWidth(value) {
        this.setProperty('column-width', value);
    }
    get columns() {
        return this.getPropertyValue('columns');
    }
    set columns(value) {
        this.setProperty('columns', value);
    }
    get contain() {
        return this.getPropertyValue('contain');
    }
    set contain(value) {
        this.setProperty('contain', value);
    }
    get containIntrinsicSize() {
        return this.getPropertyValue('contain-intrinsic-size');
    }
    set containIntrinsicSize(value) {
        this.setProperty('contain-intrinsic-size', value);
    }
    get content() {
        return this.getPropertyValue('content');
    }
    set content(value) {
        this.setProperty('content', value);
    }
    get contentVisibility() {
        return this.getPropertyValue('content-visibility');
    }
    set contentVisibility(value) {
        this.setProperty('content-visibility', value);
    }
    get counterIncrement() {
        return this.getPropertyValue('counter-increment');
    }
    set counterIncrement(value) {
        this.setProperty('counter-increment', value);
    }
    get counterReset() {
        return this.getPropertyValue('counter-reset');
    }
    set counterReset(value) {
        this.setProperty('counter-reset', value);
    }
    get counterSet() {
        return this.getPropertyValue('counter-set');
    }
    set counterSet(value) {
        this.setProperty('counter-set', value);
    }
    get containIntrinsicBlockSize() {
        return this.getPropertyValue('contain-intrinsic-block-size');
    }
    set containIntrinsicBlockSize(value) {
        this.setProperty('contain-intrinsic-block-size', value);
    }
    get containIntrinsicHeight() {
        return this.getPropertyValue('contain-intrinsic-height');
    }
    set containIntrinsicHeight(value) {
        this.setProperty('contain-intrinsic-height', value);
    }
    get containIntrinsicInlineSize() {
        return this.getPropertyValue('contain-intrinsic-inline-size');
    }
    set containIntrinsicInlineSize(value) {
        this.setProperty('contain-intrinsic-inline-size', value);
    }
    get containIntrinsicWidth() {
        return this.getPropertyValue('contain-intrinsic-width');
    }
    set containIntrinsicWidth(value) {
        this.setProperty('contain-intrinsic-width', value);
    }
    get cssFloat() {
        return this.getPropertyValue('css-float');
    }
    set cssFloat(value) {
        this.setProperty('css-float', value);
    }
    get cursor() {
        return this.getPropertyValue('cursor');
    }
    set cursor(value) {
        this.setProperty('cursor', value);
    }
    get cx() {
        return this.getPropertyValue('cx');
    }
    set cx(value) {
        this.setProperty('cx', value);
    }
    get cy() {
        return this.getPropertyValue('cy');
    }
    set cy(value) {
        this.setProperty('cy', value);
    }
    get d() {
        return this.getPropertyValue('d');
    }
    set d(value) {
        this.setProperty('d', value);
    }
    get direction() {
        return this.getPropertyValue('direction');
    }
    set direction(value) {
        this.setProperty('direction', value);
    }
    get display() {
        return this.getPropertyValue('display');
    }
    set display(value) {
        this.setProperty('display', value);
    }
    get dominantBaseline() {
        return this.getPropertyValue('dominant-baseline');
    }
    set dominantBaseline(value) {
        this.setProperty('dominant-baseline', value);
    }
    get emptyCells() {
        return this.getPropertyValue('empty-cells');
    }
    set emptyCells(value) {
        this.setProperty('empty-cells', value);
    }
    get fill() {
        return this.getPropertyValue('fill');
    }
    set fill(value) {
        this.setProperty('fill', value);
    }
    get fillOpacity() {
        return this.getPropertyValue('fill-opacity');
    }
    set fillOpacity(value) {
        this.setProperty('fill-opacity', value);
    }
    get fillRule() {
        return this.getPropertyValue('fill-rule');
    }
    set fillRule(value) {
        this.setProperty('fill-rule', value);
    }
    get filter() {
        return this.getPropertyValue('filter');
    }
    set filter(value) {
        this.setProperty('filter', value);
    }
    get flex() {
        return this.getPropertyValue('flex');
    }
    set flex(value) {
        this.setProperty('flex', value);
    }
    get flexBasis() {
        return this.getPropertyValue('flex-basis');
    }
    set flexBasis(value) {
        this.setProperty('flex-basis', value);
    }
    get flexDirection() {
        return this.getPropertyValue('flex-direction');
    }
    set flexDirection(value) {
        this.setProperty('flex-direction', value);
    }
    get flexFlow() {
        return this.getPropertyValue('flex-flow');
    }
    set flexFlow(value) {
        this.setProperty('flex-flow', value);
    }
    get flexGrow() {
        return this.getPropertyValue('flex-grow');
    }
    set flexGrow(value) {
        this.setProperty('flex-grow', value);
    }
    get flexShrink() {
        return this.getPropertyValue('flex-shrink');
    }
    set flexShrink(value) {
        this.setProperty('flex-shrink', value);
    }
    get flexWrap() {
        return this.getPropertyValue('flex-wrap');
    }
    set flexWrap(value) {
        this.setProperty('flex-wrap', value);
    }
    get float() {
        return this.getPropertyValue('float');
    }
    set float(value) {
        this.setProperty('float', value);
    }
    get floodColor() {
        return this.getPropertyValue('flood-color');
    }
    set floodColor(value) {
        this.setProperty('flood-color', value);
    }
    get floodOpacity() {
        return this.getPropertyValue('flood-opacity');
    }
    set floodOpacity(value) {
        this.setProperty('flood-opacity', value);
    }
    get font() {
        return this.getPropertyValue('font');
    }
    set font(value) {
        this.setProperty('font', value);
    }
    get fontDisplay() {
        return this.getPropertyValue('font-display');
    }
    set fontDisplay(value) {
        this.setProperty('font-display', value);
    }
    get fontFamily() {
        return this.getPropertyValue('font-family');
    }
    set fontFamily(value) {
        this.setProperty('font-family', value);
    }
    get fontFeatureSettings() {
        return this.getPropertyValue('font-feature-settings');
    }
    set fontFeatureSettings(value) {
        this.setProperty('font-feature-settings', value);
    }
    get fontKerning() {
        return this.getPropertyValue('font-kerning');
    }
    set fontKerning(value) {
        this.setProperty('font-kerning', value);
    }
    get fontOpticalSizing() {
        return this.getPropertyValue('font-optical-sizing');
    }
    set fontOpticalSizing(value) {
        this.setProperty('font-optical-sizing', value);
    }
    get fontSize() {
        return this.getPropertyValue('font-size');
    }
    set fontSize(value) {
        this.setProperty('font-size', value);
    }
    get fontStretch() {
        return this.getPropertyValue('font-stretch');
    }
    set fontStretch(value) {
        this.setProperty('font-stretch', value);
    }
    get fontStyle() {
        return this.getPropertyValue('font-style');
    }
    set fontStyle(value) {
        this.setProperty('font-style', value);
    }
    get fontVariant() {
        return this.getPropertyValue('font-variant');
    }
    set fontVariant(value) {
        this.setProperty('font-variant', value);
    }
    get fontVariantCaps() {
        return this.getPropertyValue('font-variant-caps');
    }
    set fontVariantCaps(value) {
        this.setProperty('font-variant-caps', value);
    }
    get fontVariantEastAsian() {
        return this.getPropertyValue('font-variant-east-asian');
    }
    set fontVariantEastAsian(value) {
        this.setProperty('font-variant-east-asian', value);
    }
    get fontVariantLigatures() {
        return this.getPropertyValue('font-variant-ligatures');
    }
    set fontVariantLigatures(value) {
        this.setProperty('font-variant-ligatures', value);
    }
    get fontVariantNumeric() {
        return this.getPropertyValue('font-variant-numeric');
    }
    set fontVariantNumeric(value) {
        this.setProperty('font-variant-numeric', value);
    }
    get fontVariationSettings() {
        return this.getPropertyValue('font-variation-settings');
    }
    set fontVariationSettings(value) {
        this.setProperty('font-variation-settings', value);
    }
    get fontPalette() {
        return this.getPropertyValue('font-palette');
    }
    set fontPalette(value) {
        this.setProperty('font-palette', value);
    }
    get fontSynthesisSmallCaps() {
        return this.getPropertyValue('font-synthesis-small-caps');
    }
    set fontSynthesisSmallCaps(value) {
        this.setProperty('font-synthesis-small-caps', value);
    }
    get fontSynthesisStyle() {
        return this.getPropertyValue('font-synthesis-style');
    }
    set fontSynthesisStyle(value) {
        this.setProperty('font-synthesis-style', value);
    }
    get fontSynthesisWeight() {
        return this.getPropertyValue('font-synthesis-weight');
    }
    set fontSynthesisWeight(value) {
        this.setProperty('font-synthesis-weight', value);
    }
    get fontWeight() {
        return this.getPropertyValue('font-weight');
    }
    set fontWeight(value) {
        this.setProperty('font-weight', value);
    }
    get gap() {
        return this.getPropertyValue('gap');
    }
    set gap(value) {
        this.setProperty('gap', value);
    }
    get grid() {
        return this.getPropertyValue('grid');
    }
    set grid(value) {
        this.setProperty('grid', value);
    }
    get gridArea() {
        return this.getPropertyValue('grid-area');
    }
    set gridArea(value) {
        this.setProperty('grid-area', value);
    }
    get gridAutoColumns() {
        return this.getPropertyValue('grid-auto-columns');
    }
    set gridAutoColumns(value) {
        this.setProperty('grid-auto-columns', value);
    }
    get gridAutoFlow() {
        return this.getPropertyValue('grid-auto-flow');
    }
    set gridAutoFlow(value) {
        this.setProperty('grid-auto-flow', value);
    }
    get gridAutoRows() {
        return this.getPropertyValue('grid-auto-rows');
    }
    set gridAutoRows(value) {
        this.setProperty('grid-auto-rows', value);
    }
    get gridColumn() {
        return this.getPropertyValue('grid-column');
    }
    set gridColumn(value) {
        this.setProperty('grid-column', value);
    }
    get gridColumnEnd() {
        return this.getPropertyValue('grid-column-end');
    }
    set gridColumnEnd(value) {
        this.setProperty('grid-column-end', value);
    }
    get gridColumnGap() {
        return this.getPropertyValue('grid-column-gap');
    }
    set gridColumnGap(value) {
        this.setProperty('grid-column-gap', value);
    }
    get gridColumnStart() {
        return this.getPropertyValue('grid-column-start');
    }
    set gridColumnStart(value) {
        this.setProperty('grid-column-start', value);
    }
    get gridGap() {
        return this.getPropertyValue('grid-gap');
    }
    set gridGap(value) {
        this.setProperty('grid-gap', value);
    }
    get gridRow() {
        return this.getPropertyValue('grid-row');
    }
    set gridRow(value) {
        this.setProperty('grid-row', value);
    }
    get gridRowEnd() {
        return this.getPropertyValue('grid-row-end');
    }
    set gridRowEnd(value) {
        this.setProperty('grid-row-end', value);
    }
    get gridRowGap() {
        return this.getPropertyValue('grid-row-gap');
    }
    set gridRowGap(value) {
        this.setProperty('grid-row-gap', value);
    }
    get gridRowStart() {
        return this.getPropertyValue('grid-row-start');
    }
    set gridRowStart(value) {
        this.setProperty('grid-row-start', value);
    }
    get gridTemplate() {
        return this.getPropertyValue('grid-template');
    }
    set gridTemplate(value) {
        this.setProperty('grid-template', value);
    }
    get gridTemplateAreas() {
        return this.getPropertyValue('grid-template-areas');
    }
    set gridTemplateAreas(value) {
        this.setProperty('grid-template-areas', value);
    }
    get gridTemplateColumns() {
        return this.getPropertyValue('grid-template-columns');
    }
    set gridTemplateColumns(value) {
        this.setProperty('grid-template-columns', value);
    }
    get gridTemplateRows() {
        return this.getPropertyValue('grid-template-rows');
    }
    set gridTemplateRows(value) {
        this.setProperty('grid-template-rows', value);
    }
    get height() {
        return this.getPropertyValue('height');
    }
    set height(value) {
        this.setProperty('height', value);
    }
    get hyphens() {
        return this.getPropertyValue('hyphens');
    }
    set hyphens(value) {
        this.setProperty('hyphens', value);
    }
    get imageOrientation() {
        return this.getPropertyValue('image-orientation');
    }
    set imageOrientation(value) {
        this.setProperty('image-orientation', value);
    }
    get imageRendering() {
        return this.getPropertyValue('image-rendering');
    }
    set imageRendering(value) {
        this.setProperty('image-rendering', value);
    }
    get inherits() {
        return this.getPropertyValue('inherits');
    }
    set inherits(value) {
        this.setProperty('inherits', value);
    }
    get initialValue() {
        return this.getPropertyValue('initial-value');
    }
    set initialValue(value) {
        this.setProperty('initial-value', value);
    }
    get inlineSize() {
        return this.getPropertyValue('inline-size');
    }
    set inlineSize(value) {
        this.setProperty('inline-size', value);
    }
    get isolation() {
        return this.getPropertyValue('isolation');
    }
    set isolation(value) {
        this.setProperty('isolation', value);
    }
    get insetBlockEnd() {
        return this.getPropertyValue('inset-block-end');
    }
    set insetBlockEnd(value) {
        this.setProperty('inset-block-end', value);
    }
    get insetBlockStart() {
        return this.getPropertyValue('inset-block-start');
    }
    set insetBlockStart(value) {
        this.setProperty('inset-block-start', value);
    }
    get insetInlineEnd() {
        return this.getPropertyValue('inset-inline-end');
    }
    set insetInlineEnd(value) {
        this.setProperty('inset-inline-end', value);
    }
    get insetInlineStart() {
        return this.getPropertyValue('inset-inline-start');
    }
    set insetInlineStart(value) {
        this.setProperty('inset-inline-start', value);
    }
    get justifyContent() {
        return this.getPropertyValue('justify-content');
    }
    set justifyContent(value) {
        this.setProperty('justify-content', value);
    }
    get justifyItems() {
        return this.getPropertyValue('justify-items');
    }
    set justifyItems(value) {
        this.setProperty('justify-items', value);
    }
    get justifySelf() {
        return this.getPropertyValue('justify-self');
    }
    set justifySelf(value) {
        this.setProperty('justify-self', value);
    }
    get left() {
        return this.getPropertyValue('left');
    }
    set left(value) {
        this.setProperty('left', value);
    }
    get letterSpacing() {
        return this.getPropertyValue('letter-spacing');
    }
    set letterSpacing(value) {
        this.setProperty('letter-spacing', value);
    }
    get lightingColor() {
        return this.getPropertyValue('lighting-color');
    }
    set lightingColor(value) {
        this.setProperty('lighting-color', value);
    }
    get lineBreak() {
        return this.getPropertyValue('line-break');
    }
    set lineBreak(value) {
        this.setProperty('line-break', value);
    }
    get lineHeight() {
        return this.getPropertyValue('line-height');
    }
    set lineHeight(value) {
        this.setProperty('line-height', value);
    }
    get listStyle() {
        return this.getPropertyValue('list-style');
    }
    set listStyle(value) {
        this.setProperty('list-style', value);
    }
    get listStyleImage() {
        return this.getPropertyValue('list-style-image');
    }
    set listStyleImage(value) {
        this.setProperty('list-style-image', value);
    }
    get listStylePosition() {
        return this.getPropertyValue('list-style-position');
    }
    set listStylePosition(value) {
        this.setProperty('list-style-position', value);
    }
    get listStyleType() {
        return this.getPropertyValue('list-style-type');
    }
    set listStyleType(value) {
        this.setProperty('list-style-type', value);
    }
    get margin() {
        return this.getPropertyValue('margin');
    }
    set margin(value) {
        this.setProperty('margin', value);
    }
    get marginBlockEnd() {
        return this.getPropertyValue('margin-block-end');
    }
    set marginBlockEnd(value) {
        this.setProperty('margin-block-end', value);
    }
    get marginBlockStart() {
        return this.getPropertyValue('margin-block-start');
    }
    set marginBlockStart(value) {
        this.setProperty('margin-block-start', value);
    }
    get marginBottom() {
        return this.getPropertyValue('margin-bottom');
    }
    set marginBottom(value) {
        this.setProperty('margin-bottom', value);
    }
    get marginInlineEnd() {
        return this.getPropertyValue('margin-inline-end');
    }
    set marginInlineEnd(value) {
        this.setProperty('margin-inline-end', value);
    }
    get marginInlineStart() {
        return this.getPropertyValue('margin-inline-start');
    }
    set marginInlineStart(value) {
        this.setProperty('margin-inline-start', value);
    }
    get marginLeft() {
        return this.getPropertyValue('margin-left');
    }
    set marginLeft(value) {
        this.setProperty('margin-left', value);
    }
    get marginRight() {
        return this.getPropertyValue('margin-right');
    }
    set marginRight(value) {
        this.setProperty('margin-right', value);
    }
    get marginTop() {
        return this.getPropertyValue('margin-top');
    }
    set marginTop(value) {
        this.setProperty('margin-top', value);
    }
    get marker() {
        return this.getPropertyValue('marker');
    }
    set marker(value) {
        this.setProperty('marker', value);
    }
    get markerEnd() {
        return this.getPropertyValue('marker-end');
    }
    set markerEnd(value) {
        this.setProperty('marker-end', value);
    }
    get markerMid() {
        return this.getPropertyValue('marker-mid');
    }
    set markerMid(value) {
        this.setProperty('marker-mid', value);
    }
    get markerStart() {
        return this.getPropertyValue('marker-start');
    }
    set markerStart(value) {
        this.setProperty('marker-start', value);
    }
    get mask() {
        return this.getPropertyValue('mask');
    }
    set mask(value) {
        this.setProperty('mask', value);
    }
    get maskType() {
        return this.getPropertyValue('mask-type');
    }
    set maskType(value) {
        this.setProperty('mask-type', value);
    }
    get maxBlockSize() {
        return this.getPropertyValue('max-block-size');
    }
    set maxBlockSize(value) {
        this.setProperty('max-block-size', value);
    }
    get maxHeight() {
        return this.getPropertyValue('max-height');
    }
    set maxHeight(value) {
        this.setProperty('max-height', value);
    }
    get maxInlineSize() {
        return this.getPropertyValue('max-inline-size');
    }
    set maxInlineSize(value) {
        this.setProperty('max-inline-size', value);
    }
    get maxWidth() {
        return this.getPropertyValue('max-width');
    }
    set maxWidth(value) {
        this.setProperty('max-width', value);
    }
    get maxZoom() {
        return this.getPropertyValue('max-zoom');
    }
    set maxZoom(value) {
        this.setProperty('max-zoom', value);
    }
    get minBlockSize() {
        return this.getPropertyValue('min-block-size');
    }
    set minBlockSize(value) {
        this.setProperty('min-block-size', value);
    }
    get minHeight() {
        return this.getPropertyValue('min-height');
    }
    set minHeight(value) {
        this.setProperty('min-height', value);
    }
    get minInlineSize() {
        return this.getPropertyValue('min-inline-size');
    }
    set minInlineSize(value) {
        this.setProperty('min-inline-size', value);
    }
    get minWidth() {
        return this.getPropertyValue('min-width');
    }
    set minWidth(value) {
        this.setProperty('min-width', value);
    }
    get minZoom() {
        return this.getPropertyValue('min-zoom');
    }
    set minZoom(value) {
        this.setProperty('min-zoom', value);
    }
    get mixBlendMode() {
        return this.getPropertyValue('mix-blend-mode');
    }
    set mixBlendMode(value) {
        this.setProperty('mix-blend-mode', value);
    }
    get objectFit() {
        return this.getPropertyValue('object-fit');
    }
    set objectFit(value) {
        this.setProperty('object-fit', value);
    }
    get objectPosition() {
        return this.getPropertyValue('object-position');
    }
    set objectPosition(value) {
        this.setProperty('object-position', value);
    }
    get offset() {
        return this.getPropertyValue('offset');
    }
    set offset(value) {
        this.setProperty('offset', value);
    }
    get offsetDistance() {
        return this.getPropertyValue('offset-distance');
    }
    set offsetDistance(value) {
        this.setProperty('offset-distance', value);
    }
    get offsetPath() {
        return this.getPropertyValue('offset-path');
    }
    set offsetPath(value) {
        this.setProperty('offset-path', value);
    }
    get offsetRotate() {
        return this.getPropertyValue('offset-rotate');
    }
    set offsetRotate(value) {
        this.setProperty('offset-rotate', value);
    }
    get opacity() {
        return this.getPropertyValue('opacity');
    }
    set opacity(value) {
        this.setProperty('opacity', value);
    }
    get order() {
        return this.getPropertyValue('order');
    }
    set order(value) {
        this.setProperty('order', value);
    }
    get orientation() {
        return this.getPropertyValue('orientation');
    }
    set orientation(value) {
        this.setProperty('orientation', value);
    }
    get orphans() {
        return this.getPropertyValue('orphans');
    }
    set orphans(value) {
        this.setProperty('orphans', value);
    }
    get outline() {
        return this.getPropertyValue('outline');
    }
    set outline(value) {
        this.setProperty('outline', value);
    }
    get outlineColor() {
        return this.getPropertyValue('outline-color');
    }
    set outlineColor(value) {
        this.setProperty('outline-color', value);
    }
    get outlineOffset() {
        return this.getPropertyValue('outline-offset');
    }
    set outlineOffset(value) {
        this.setProperty('outline-offset', value);
    }
    get outlineStyle() {
        return this.getPropertyValue('outline-style');
    }
    set outlineStyle(value) {
        this.setProperty('outline-style', value);
    }
    get outlineWidth() {
        return this.getPropertyValue('outline-width');
    }
    set outlineWidth(value) {
        this.setProperty('outline-width', value);
    }
    get overflow() {
        return this.getPropertyValue('overflow');
    }
    set overflow(value) {
        this.setProperty('overflow', value);
    }
    get overflowAnchor() {
        return this.getPropertyValue('overflow-anchor');
    }
    set overflowAnchor(value) {
        this.setProperty('overflow-anchor', value);
    }
    get overflowWrap() {
        return this.getPropertyValue('overflow-wrap');
    }
    set overflowWrap(value) {
        this.setProperty('overflow-wrap', value);
    }
    get overflowX() {
        return this.getPropertyValue('overflow-x');
    }
    set overflowX(value) {
        this.setProperty('overflow-x', value);
    }
    get overflowY() {
        return this.getPropertyValue('overflow-y');
    }
    set overflowY(value) {
        this.setProperty('overflow-y', value);
    }
    get overscrollBehavior() {
        return this.getPropertyValue('overscroll-behavior');
    }
    set overscrollBehavior(value) {
        this.setProperty('overscroll-behavior', value);
    }
    get overscrollBehaviorBlock() {
        return this.getPropertyValue('overscroll-behavior-block');
    }
    set overscrollBehaviorBlock(value) {
        this.setProperty('overscroll-behavior-block', value);
    }
    get overscrollBehaviorInline() {
        return this.getPropertyValue('overscroll-behavior-inline');
    }
    set overscrollBehaviorInline(value) {
        this.setProperty('overscroll-behavior-inline', value);
    }
    get overscrollBehaviorX() {
        return this.getPropertyValue('overscroll-behavior-x');
    }
    set overscrollBehaviorX(value) {
        this.setProperty('overscroll-behavior-x', value);
    }
    get overscrollBehaviorY() {
        return this.getPropertyValue('overscroll-behavior-y');
    }
    set overscrollBehaviorY(value) {
        this.setProperty('overscroll-behavior-y', value);
    }
    get overflowClipMargin() {
        return this.getPropertyValue('overflow-clip-margin');
    }
    set overflowClipMargin(value) {
        this.setProperty('overflow-clip-margin', value);
    }
    get padding() {
        return this.getPropertyValue('padding');
    }
    set padding(value) {
        this.setProperty('padding', value);
    }
    get paddingBlockEnd() {
        return this.getPropertyValue('padding-block-end');
    }
    set paddingBlockEnd(value) {
        this.setProperty('padding-block-end', value);
    }
    get paddingBlockStart() {
        return this.getPropertyValue('padding-block-start');
    }
    set paddingBlockStart(value) {
        this.setProperty('padding-block-start', value);
    }
    get paddingBottom() {
        return this.getPropertyValue('padding-bottom');
    }
    set paddingBottom(value) {
        this.setProperty('padding-bottom', value);
    }
    get paddingInlineEnd() {
        return this.getPropertyValue('padding-inline-end');
    }
    set paddingInlineEnd(value) {
        this.setProperty('padding-inline-end', value);
    }
    get paddingInlineStart() {
        return this.getPropertyValue('padding-inline-start');
    }
    set paddingInlineStart(value) {
        this.setProperty('padding-inline-start', value);
    }
    get paddingLeft() {
        return this.getPropertyValue('padding-left');
    }
    set paddingLeft(value) {
        this.setProperty('padding-left', value);
    }
    get paddingRight() {
        return this.getPropertyValue('padding-right');
    }
    set paddingRight(value) {
        this.setProperty('padding-right', value);
    }
    get paddingTop() {
        return this.getPropertyValue('padding-top');
    }
    set paddingTop(value) {
        this.setProperty('padding-top', value);
    }
    get page() {
        return this.getPropertyValue('page');
    }
    set page(value) {
        this.setProperty('page', value);
    }
    get pageBreakAfter() {
        return this.getPropertyValue('page-break-after');
    }
    set pageBreakAfter(value) {
        this.setProperty('page-break-after', value);
    }
    get pageBreakBefore() {
        return this.getPropertyValue('page-break-before');
    }
    set pageBreakBefore(value) {
        this.setProperty('page-break-before', value);
    }
    get pageBreakInside() {
        return this.getPropertyValue('page-break-inside');
    }
    set pageBreakInside(value) {
        this.setProperty('page-break-inside', value);
    }
    get pageOrientation() {
        return this.getPropertyValue('page-orientation');
    }
    set pageOrientation(value) {
        this.setProperty('page-orientation', value);
    }
    get paintOrder() {
        return this.getPropertyValue('paint-order');
    }
    set paintOrder(value) {
        this.setProperty('paint-order', value);
    }
    get perspective() {
        return this.getPropertyValue('perspective');
    }
    set perspective(value) {
        this.setProperty('perspective', value);
    }
    get perspectiveOrigin() {
        return this.getPropertyValue('perspective-origin');
    }
    set perspectiveOrigin(value) {
        this.setProperty('perspective-origin', value);
    }
    get placeContent() {
        return this.getPropertyValue('place-content');
    }
    set placeContent(value) {
        this.setProperty('place-content', value);
    }
    get placeItems() {
        return this.getPropertyValue('place-items');
    }
    set placeItems(value) {
        this.setProperty('place-items', value);
    }
    get placeSelf() {
        return this.getPropertyValue('place-self');
    }
    set placeSelf(value) {
        this.setProperty('place-self', value);
    }
    get pointerEvents() {
        return this.getPropertyValue('pointer-events');
    }
    set pointerEvents(value) {
        this.setProperty('pointer-events', value);
    }
    get position() {
        return this.getPropertyValue('position');
    }
    set position(value) {
        this.setProperty('position', value);
    }
    get quotes() {
        return this.getPropertyValue('quotes');
    }
    set quotes(value) {
        this.setProperty('quotes', value);
    }
    get r() {
        return this.getPropertyValue('r');
    }
    set r(value) {
        this.setProperty('r', value);
    }
    get resize() {
        return this.getPropertyValue('resize');
    }
    set resize(value) {
        this.setProperty('resize', value);
    }
    get right() {
        return this.getPropertyValue('right');
    }
    set right(value) {
        this.setProperty('right', value);
    }
    get rowGap() {
        return this.getPropertyValue('row-gap');
    }
    set rowGap(value) {
        this.setProperty('row-gap', value);
    }
    get rubyPosition() {
        return this.getPropertyValue('ruby-position');
    }
    set rubyPosition(value) {
        this.setProperty('ruby-position', value);
    }
    get rx() {
        return this.getPropertyValue('rx');
    }
    set rx(value) {
        this.setProperty('rx', value);
    }
    get ry() {
        return this.getPropertyValue('ry');
    }
    set ry(value) {
        this.setProperty('ry', value);
    }
    get scrollBehavior() {
        return this.getPropertyValue('scroll-behavior');
    }
    set scrollBehavior(value) {
        this.setProperty('scroll-behavior', value);
    }
    get scrollMargin() {
        return this.getPropertyValue('scroll-margin');
    }
    set scrollMargin(value) {
        this.setProperty('scroll-margin', value);
    }
    get scrollMarginBlock() {
        return this.getPropertyValue('scroll-margin-block');
    }
    set scrollMarginBlock(value) {
        this.setProperty('scroll-margin-block', value);
    }
    get scrollMarginBlockEnd() {
        return this.getPropertyValue('scroll-margin-block-end');
    }
    set scrollMarginBlockEnd(value) {
        this.setProperty('scroll-margin-block-end', value);
    }
    get scrollMarginBlockStart() {
        return this.getPropertyValue('scroll-margin-block-start');
    }
    set scrollMarginBlockStart(value) {
        this.setProperty('scroll-margin-block-start', value);
    }
    get scrollMarginBottom() {
        return this.getPropertyValue('scroll-margin-bottom');
    }
    set scrollMarginBottom(value) {
        this.setProperty('scroll-margin-bottom', value);
    }
    get scrollMarginInline() {
        return this.getPropertyValue('scroll-margin-inline');
    }
    set scrollMarginInline(value) {
        this.setProperty('scroll-margin-inline', value);
    }
    get scrollMarginInlineEnd() {
        return this.getPropertyValue('scroll-margin-inline-end');
    }
    set scrollMarginInlineEnd(value) {
        this.setProperty('scroll-margin-inline-end', value);
    }
    get scrollMarginInlineStart() {
        return this.getPropertyValue('scroll-margin-inline-start');
    }
    set scrollMarginInlineStart(value) {
        this.setProperty('scroll-margin-inline-start', value);
    }
    get scrollMarginLeft() {
        return this.getPropertyValue('scroll-margin-left');
    }
    set scrollMarginLeft(value) {
        this.setProperty('scroll-margin-left', value);
    }
    get scrollMarginRight() {
        return this.getPropertyValue('scroll-margin-right');
    }
    set scrollMarginRight(value) {
        this.setProperty('scroll-margin-right', value);
    }
    get scrollMarginTop() {
        return this.getPropertyValue('scroll-margin-top');
    }
    set scrollMarginTop(value) {
        this.setProperty('scroll-margin-top', value);
    }
    get scrollPadding() {
        return this.getPropertyValue('scroll-padding');
    }
    set scrollPadding(value) {
        this.setProperty('scroll-padding', value);
    }
    get scrollPaddingBlock() {
        return this.getPropertyValue('scroll-padding-block');
    }
    set scrollPaddingBlock(value) {
        this.setProperty('scroll-padding-block', value);
    }
    get scrollPaddingBlockEnd() {
        return this.getPropertyValue('scroll-padding-block-end');
    }
    set scrollPaddingBlockEnd(value) {
        this.setProperty('scroll-padding-block-end', value);
    }
    get scrollPaddingBlockStart() {
        return this.getPropertyValue('scroll-padding-block-start');
    }
    set scrollPaddingBlockStart(value) {
        this.setProperty('scroll-padding-block-start', value);
    }
    get scrollPaddingBottom() {
        return this.getPropertyValue('scroll-padding-bottom');
    }
    set scrollPaddingBottom(value) {
        this.setProperty('scroll-padding-bottom', value);
    }
    get scrollPaddingInline() {
        return this.getPropertyValue('scroll-padding-inline');
    }
    set scrollPaddingInline(value) {
        this.setProperty('scroll-padding-inline', value);
    }
    get scrollPaddingInlineEnd() {
        return this.getPropertyValue('scroll-padding-inline-end');
    }
    set scrollPaddingInlineEnd(value) {
        this.setProperty('scroll-padding-inline-end', value);
    }
    get scrollPaddingInlineStart() {
        return this.getPropertyValue('scroll-padding-inline-start');
    }
    set scrollPaddingInlineStart(value) {
        this.setProperty('scroll-padding-inline-start', value);
    }
    get scrollPaddingLeft() {
        return this.getPropertyValue('scroll-padding-left');
    }
    set scrollPaddingLeft(value) {
        this.setProperty('scroll-padding-left', value);
    }
    get scrollPaddingRight() {
        return this.getPropertyValue('scroll-padding-right');
    }
    set scrollPaddingRight(value) {
        this.setProperty('scroll-padding-right', value);
    }
    get scrollPaddingTop() {
        return this.getPropertyValue('scroll-padding-top');
    }
    set scrollPaddingTop(value) {
        this.setProperty('scroll-padding-top', value);
    }
    get scrollSnapAlign() {
        return this.getPropertyValue('scroll-snap-align');
    }
    set scrollSnapAlign(value) {
        this.setProperty('scroll-snap-align', value);
    }
    get scrollSnapStop() {
        return this.getPropertyValue('scroll-snap-stop');
    }
    set scrollSnapStop(value) {
        this.setProperty('scroll-snap-stop', value);
    }
    get scrollSnapType() {
        return this.getPropertyValue('scroll-snap-type');
    }
    set scrollSnapType(value) {
        this.setProperty('scroll-snap-type', value);
    }
    get shapeImageThreshold() {
        return this.getPropertyValue('shape-image-threshold');
    }
    set shapeImageThreshold(value) {
        this.setProperty('shape-image-threshold', value);
    }
    get shapeMargin() {
        return this.getPropertyValue('shape-margin');
    }
    set shapeMargin(value) {
        this.setProperty('shape-margin', value);
    }
    get shapeOutside() {
        return this.getPropertyValue('shape-outside');
    }
    set shapeOutside(value) {
        this.setProperty('shape-outside', value);
    }
    get shapeRendering() {
        return this.getPropertyValue('shape-rendering');
    }
    set shapeRendering(value) {
        this.setProperty('shape-rendering', value);
    }
    get size() {
        return this.getPropertyValue('size');
    }
    set size(value) {
        this.setProperty('size', value);
    }
    get speak() {
        return this.getPropertyValue('speak');
    }
    set speak(value) {
        this.setProperty('speak', value);
    }
    get src() {
        return this.getPropertyValue('src');
    }
    set src(value) {
        this.setProperty('src', value);
    }
    get stopColor() {
        return this.getPropertyValue('stop-color');
    }
    set stopColor(value) {
        this.setProperty('stop-color', value);
    }
    get stopOpacity() {
        return this.getPropertyValue('stop-opacity');
    }
    set stopOpacity(value) {
        this.setProperty('stop-opacity', value);
    }
    get stroke() {
        return this.getPropertyValue('stroke');
    }
    set stroke(value) {
        this.setProperty('stroke', value);
    }
    get strokeDasharray() {
        return this.getPropertyValue('stroke-dasharray');
    }
    set strokeDasharray(value) {
        this.setProperty('stroke-dasharray', value);
    }
    get strokeDashoffset() {
        return this.getPropertyValue('stroke-dashoffset');
    }
    set strokeDashoffset(value) {
        this.setProperty('stroke-dashoffset', value);
    }
    get strokeLinecap() {
        return this.getPropertyValue('stroke-linecap');
    }
    set strokeLinecap(value) {
        this.setProperty('stroke-linecap', value);
    }
    get strokeLinejoin() {
        return this.getPropertyValue('stroke-linejoin');
    }
    set strokeLinejoin(value) {
        this.setProperty('stroke-linejoin', value);
    }
    get strokeMiterlimit() {
        return this.getPropertyValue('stroke-miterlimit');
    }
    set strokeMiterlimit(value) {
        this.setProperty('stroke-miterlimit', value);
    }
    get strokeOpacity() {
        return this.getPropertyValue('stroke-opacity');
    }
    set strokeOpacity(value) {
        this.setProperty('stroke-opacity', value);
    }
    get strokeWidth() {
        return this.getPropertyValue('stroke-width');
    }
    set strokeWidth(value) {
        this.setProperty('stroke-width', value);
    }
    get syntax() {
        return this.getPropertyValue('syntax');
    }
    set syntax(value) {
        this.setProperty('syntax', value);
    }
    get scrollbarGutter() {
        return this.getPropertyValue('scrollbar-gutter');
    }
    set scrollbarGutter(value) {
        this.setProperty('scrollbar-gutter', value);
    }
    get tabSize() {
        return this.getPropertyValue('tab-size');
    }
    set tabSize(value) {
        this.setProperty('tab-size', value);
    }
    get tableLayout() {
        return this.getPropertyValue('table-layout');
    }
    set tableLayout(value) {
        this.setProperty('table-layout', value);
    }
    get textAlign() {
        return this.getPropertyValue('text-align');
    }
    set textAlign(value) {
        this.setProperty('text-align', value);
    }
    get textAlignLast() {
        return this.getPropertyValue('text-align-last');
    }
    set textAlignLast(value) {
        this.setProperty('text-align-last', value);
    }
    get textAnchor() {
        return this.getPropertyValue('text-anchor');
    }
    set textAnchor(value) {
        this.setProperty('text-anchor', value);
    }
    get textCombineUpright() {
        return this.getPropertyValue('text-combine-upright');
    }
    set textCombineUpright(value) {
        this.setProperty('text-combine-upright', value);
    }
    get textDecoration() {
        return this.getPropertyValue('text-decoration');
    }
    set textDecoration(value) {
        this.setProperty('text-decoration', value);
    }
    get textDecorationColor() {
        return this.getPropertyValue('text-decoration-color');
    }
    set textDecorationColor(value) {
        this.setProperty('text-decoration-color', value);
    }
    get textDecorationLine() {
        return this.getPropertyValue('text-decoration-line');
    }
    set textDecorationLine(value) {
        this.setProperty('text-decoration-line', value);
    }
    get textDecorationSkipInk() {
        return this.getPropertyValue('text-decoration-skip-ink');
    }
    set textDecorationSkipInk(value) {
        this.setProperty('text-decoration-skip-ink', value);
    }
    get textDecorationStyle() {
        return this.getPropertyValue('text-decoration-style');
    }
    set textDecorationStyle(value) {
        this.setProperty('text-decoration-style', value);
    }
    get textIndent() {
        return this.getPropertyValue('text-indent');
    }
    set textIndent(value) {
        this.setProperty('text-indent', value);
    }
    get textOrientation() {
        return this.getPropertyValue('text-orientation');
    }
    set textOrientation(value) {
        this.setProperty('text-orientation', value);
    }
    get textOverflow() {
        return this.getPropertyValue('text-overflow');
    }
    set textOverflow(value) {
        this.setProperty('text-overflow', value);
    }
    get textRendering() {
        return this.getPropertyValue('text-rendering');
    }
    set textRendering(value) {
        this.setProperty('text-rendering', value);
    }
    get textShadow() {
        return this.getPropertyValue('text-shadow');
    }
    set textShadow(value) {
        this.setProperty('text-shadow', value);
    }
    get textSizeAdjust() {
        return this.getPropertyValue('text-size-adjust');
    }
    set textSizeAdjust(value) {
        this.setProperty('text-size-adjust', value);
    }
    get textTransform() {
        return this.getPropertyValue('text-transform');
    }
    set textTransform(value) {
        this.setProperty('text-transform', value);
    }
    get textUnderlinePosition() {
        return this.getPropertyValue('text-underline-position');
    }
    set textUnderlinePosition(value) {
        this.setProperty('text-underline-position', value);
    }
    get top() {
        return this.getPropertyValue('top');
    }
    set top(value) {
        this.setProperty('top', value);
    }
    get touchAction() {
        return this.getPropertyValue('touch-action');
    }
    set touchAction(value) {
        this.setProperty('touch-action', value);
    }
    get transform() {
        return this.getPropertyValue('transform');
    }
    set transform(value) {
        this.setProperty('transform', value);
    }
    get transformBox() {
        return this.getPropertyValue('transform-box');
    }
    set transformBox(value) {
        this.setProperty('transform-box', value);
    }
    get transformOrigin() {
        return this.getPropertyValue('transform-origin');
    }
    set transformOrigin(value) {
        this.setProperty('transform-origin', value);
    }
    get transformStyle() {
        return this.getPropertyValue('transform-style');
    }
    set transformStyle(value) {
        this.setProperty('transform-style', value);
    }
    get transition() {
        return this.getPropertyValue('transition');
    }
    set transition(value) {
        this.setProperty('transition', value);
    }
    get transitionDelay() {
        return this.getPropertyValue('transition-delay');
    }
    set transitionDelay(value) {
        this.setProperty('transition-delay', value);
    }
    get transitionDuration() {
        return this.getPropertyValue('transition-duration');
    }
    set transitionDuration(value) {
        this.setProperty('transition-duration', value);
    }
    get transitionProperty() {
        return this.getPropertyValue('transition-property');
    }
    set transitionProperty(value) {
        this.setProperty('transition-property', value);
    }
    get transitionTimingFunction() {
        return this.getPropertyValue('transition-timing-function');
    }
    set transitionTimingFunction(value) {
        this.setProperty('transition-timing-function', value);
    }
    get textEmphasisColor() {
        return this.getPropertyValue('text-emphasis-color');
    }
    set textEmphasisColor(value) {
        this.setProperty('text-emphasis-color', value);
    }
    get textEmphasisPosition() {
        return this.getPropertyValue('text-emphasis-position');
    }
    set textEmphasisPosition(value) {
        this.setProperty('text-emphasis-position', value);
    }
    get textEmphasisStyle() {
        return this.getPropertyValue('text-emphasis-style');
    }
    set textEmphasisStyle(value) {
        this.setProperty('text-emphasis-style', value);
    }
    get unicodeBidi() {
        return this.getPropertyValue('unicode-bidi');
    }
    set unicodeBidi(value) {
        this.setProperty('unicode-bidi', value);
    }
    get unicodeRange() {
        return this.getPropertyValue('unicode-range');
    }
    set unicodeRange(value) {
        this.setProperty('unicode-range', value);
    }
    get userSelect() {
        return this.getPropertyValue('user-select');
    }
    set userSelect(value) {
        this.setProperty('user-select', value);
    }
    get userZoom() {
        return this.getPropertyValue('user-zoom');
    }
    set userZoom(value) {
        this.setProperty('user-zoom', value);
    }
    get vectorEffect() {
        return this.getPropertyValue('vector-effect');
    }
    set vectorEffect(value) {
        this.setProperty('vector-effect', value);
    }
    get verticalAlign() {
        return this.getPropertyValue('vertical-align');
    }
    set verticalAlign(value) {
        this.setProperty('vertical-align', value);
    }
    get visibility() {
        return this.getPropertyValue('visibility');
    }
    set visibility(value) {
        this.setProperty('visibility', value);
    }
    get whiteSpace() {
        return this.getPropertyValue('white-space');
    }
    set whiteSpace(value) {
        this.setProperty('white-space', value);
    }
    get widows() {
        return this.getPropertyValue('widows');
    }
    set widows(value) {
        this.setProperty('widows', value);
    }
    get width() {
        return this.getPropertyValue('width');
    }
    set width(value) {
        this.setProperty('width', value);
    }
    get willChange() {
        return this.getPropertyValue('will-change');
    }
    set willChange(value) {
        this.setProperty('will-change', value);
    }
    get wordBreak() {
        return this.getPropertyValue('word-break');
    }
    set wordBreak(value) {
        this.setProperty('word-break', value);
    }
    get wordSpacing() {
        return this.getPropertyValue('word-spacing');
    }
    set wordSpacing(value) {
        this.setProperty('word-spacing', value);
    }
    get wordWrap() {
        return this.getPropertyValue('word-wrap');
    }
    set wordWrap(value) {
        this.setProperty('word-wrap', value);
    }
    get writingMode() {
        return this.getPropertyValue('writing-mode');
    }
    set writingMode(value) {
        this.setProperty('writing-mode', value);
    }
    get x() {
        return this.getPropertyValue('x');
    }
    set x(value) {
        this.setProperty('x', value);
    }
    get y() {
        return this.getPropertyValue('y');
    }
    set y(value) {
        this.setProperty('y', value);
    }
    get zIndex() {
        return this.getPropertyValue('z-index');
    }
    set zIndex(value) {
        this.setProperty('z-index', value);
    }
    get zoom() {
        return this.getPropertyValue('zoom');
    }
    set zoom(value) {
        this.setProperty('zoom', value);
    }
    get containerType() {
        return this.getPropertyValue('container-type');
    }
    set containerType(value) {
        this.setProperty('container-type', value);
    }
    get containerName() {
        return this.getPropertyValue('container-name');
    }
    set containerName(value) {
        this.setProperty('container-name', value);
    }
    get aspectRatio() {
        return this.getPropertyValue('aspect-ratio');
    }
    set aspectRatio(value) {
        this.setProperty('aspect-ratio', value);
    }
    /* eslint-enable jsdoc/require-jsdoc */
    /**
     * Returns length.
     *
     * @returns Length.
     */
    get length() {
        return this.#getPropertyManager().size();
    }
    /**
     * Returns the style decleration as a CSS text.
     *
     * @returns CSS text.
     */
    get cssText() {
        if (this.#element && this.#computed) {
            return '';
        }
        return this.#getPropertyManager().toString();
    }
    /**
     * Sets CSS text.
     *
     * @param cssText CSS text.
     */
    set cssText(cssText) {
        if (this.#computed) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'cssText' on 'CSSStyleDeclaration': These styles are computed, and the properties are therefore read-only.`, DOMExceptionNameEnum_js_1.default.domException);
        }
        if (this.#element) {
            this.#cache.propertyManager = new CSSStyleDeclarationPropertyManager_js_1.default({ cssText });
            this.#cache.attributeValue = cssText;
            this.#element.setAttribute('style', this.#cache.propertyManager.toString());
        }
        else {
            this.#cache.propertyManager = new CSSStyleDeclarationPropertyManager_js_1.default({ cssText });
        }
    }
    /**
     * Returns item.
     *
     * @param index Index.
     * @returns Item.
     */
    item(index) {
        return this.#getPropertyManager().item(index);
    }
    /**
     * Set a property.
     *
     * @param name Property name.
     * @param value Value. Must not contain "!important" as that should be set using the priority parameter.
     * @param [priority] Can be "important", or an empty string.
     */
    setProperty(name, value, priority) {
        if (this.#computed) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'setProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`, DOMExceptionNameEnum_js_1.default.domException);
        }
        if (priority !== '' && priority !== undefined && priority !== 'important') {
            return;
        }
        const stringValue = String(value).trim();
        const propertyManager = this.#getPropertyManager();
        if (stringValue) {
            propertyManager.set(name, stringValue, !!priority);
        }
        else {
            propertyManager.remove(name);
        }
        if (this.#element) {
            this.#cache.attributeValue = propertyManager.toString();
            if (this.#cache.attributeValue) {
                this.#element.setAttribute('style', this.#cache.attributeValue);
            }
            else {
                this.#element.removeAttribute('style');
            }
        }
    }
    /**
     * Removes a property.
     *
     * @param name Property name in kebab case.
     * @param value Value. Must not contain "!important" as that should be set using the priority parameter.
     * @param [priority] Can be "important", or an empty string.
     */
    removeProperty(name) {
        if (this.#computed) {
            throw new this[PropertySymbol.window].DOMException(`Failed to execute 'removeProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`, DOMExceptionNameEnum_js_1.default.domException);
        }
        const propertyManager = this.#getPropertyManager();
        propertyManager.remove(name);
        if (this.#element) {
            this.#cache.attributeValue = propertyManager.toString();
            if (this.#cache.attributeValue) {
                this.#element.setAttribute('style', this.#cache.attributeValue);
            }
            else {
                this.#element.removeAttribute('style');
            }
        }
    }
    /**
     * Returns a property.
     *
     * @param name Property name in kebab case.
     * @returns Property value.
     */
    getPropertyValue(name) {
        return this.#getPropertyManager().get(name)?.value || '';
    }
    /**
     * Returns a property.
     *
     * @param name Property name in kebab case.
     * @returns "important" if set to be important.
     */
    getPropertyPriority(name) {
        return this.#getPropertyManager().get(name)?.important ? 'important' : '';
    }
    /**
     * Returns property manager.
     *
     * @returns Property manager.
     */
    #getPropertyManager() {
        const element = this.#element;
        const cache = this.#cache;
        if (!element) {
            if (!cache.propertyManager) {
                cache.propertyManager = new CSSStyleDeclarationPropertyManager_js_1.default();
            }
            return cache.propertyManager;
        }
        if (this.#computed) {
            return new CSSStyleDeclarationComputedStyle_js_1.default(element).getComputedStyle();
        }
        const attributeValue = element.getAttribute('style') || '';
        if (cache.attributeValue !== attributeValue) {
            cache.propertyManager = new CSSStyleDeclarationPropertyManager_js_1.default({ cssText: attributeValue });
        }
        return cache.propertyManager;
    }
}
exports.default = CSSStyleDeclaration;
//# sourceMappingURL=CSSStyleDeclaration.cjs.map