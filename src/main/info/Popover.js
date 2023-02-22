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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Popover = function (_a) {
    var open = _a.open, origin = _a.origin, children = _a.children, onClick = _a.onClick;
    var ref = (0, react_1.useRef)(null);
    var handleClickOutside = function (e) {
        if (e && e.target && e.target.className && e.target.className.indexOf && e.target.className.indexOf('em-popover') > -1) {
        }
        else {
            document.removeEventListener('click', handleClickOutside, true);
            return onClick(e, 'close');
        }
    };
    document.addEventListener('click', handleClickOutside, true);
    return (react_1.default.createElement(react_1.Fragment, null, open &&
        react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: "em-overlay", onClick: function (e) { return onClick(e); } }),
            react_1.default.createElement("div", { className: "em-popover", style: origin !== undefined && origin === "right" ? { right: 200 + 'px' } : { left: 0 + 'px' }, ref: ref }, children))));
};
exports.default = Popover;
