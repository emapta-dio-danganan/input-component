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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Popover_1 = __importDefault(require("./Popover"));
var Information_1 = __importDefault(require("./Information"));
var Assets_1 = require("../../assets/Assets");
var Info = function (_a) {
    var config = _a.config;
    var _b = (0, react_1.useState)(null), showInfo = _b[0], setShowInfo = _b[1];
    var _c = (0, react_1.useState)(false), infoPopover = _c[0], setInfoPopover = _c[1];
    /**
    * handleDisplayInfo
    * handle the information popover per statistic
    * return null
    */
    var handleDisplayInfo = function (e, type) {
        // e.preventDefault();
        if (type === void 0) { type = ''; }
        if (type === 'close') {
            setShowInfo(null);
            setInfoPopover(false);
        }
        else {
            setInfoPopover(!infoPopover);
            if (showInfo) {
                setShowInfo(null);
            }
            else {
                setShowInfo(e.currentTarget);
            }
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null, config.info ? (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: "em-info" },
            react_1.default.createElement("span", { className: "em-info-icon", onClick: function (event) { return handleDisplayInfo(event); } }, config.icon ? config.icon : Assets_1.SVG_STATUS_INFO),
            react_1.default.createElement(Popover_1.default, { id: "InfoPopOver", open: Boolean(infoPopover), className: Boolean(infoPopover) ? 'open-popover' : '', onClick: function (event, type) { return handleDisplayInfo(event, type); } },
                react_1.default.createElement(Information_1.default, { items: config.info && config.info.infoDetails ? config.info.infoDetails : config.info, listRow: config.info && config.info.listRow ? config.info.listRow : [], desc: config.info && config.info.listRow && config.info.listRow.length > 0 ? false : true, title: config && config.title ? config.title.toUpperCase() : '', hide: function (event) { return handleDisplayInfo(event); } }))))) : null));
};
exports.default = Info;
