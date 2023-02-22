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
var Assets_1 = require("../../assets/Assets");
var Information = function (_a) {
    var items = _a.items, listRow = _a.listRow, desc = _a.desc, title = _a.title, hide = _a.hide;
    var _b = (0, react_1.useState)(null), rowAnchorEl = _b[0], setRowAnchorEl = _b[1];
    var renderHtml = function (html) {
        return react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } });
    };
    var showRowDetails = function (e, idx) {
        e && e.preventDefault();
        if (rowAnchorEl === idx) {
            rowAnchorEl = null;
        }
        else {
            rowAnchorEl = idx;
        }
        setRowAnchorEl(rowAnchorEl);
    };
    var View = function () {
        return react_1.default.createElement(react_1.default.Fragment, null, typeof desc != 'undefined' && desc ? (react_1.default.createElement("div", { className: "em-popover-i-content" },
            react_1.default.createElement("div", { className: "em-popover-i-title" },
                react_1.default.createElement("h6", null, title),
                react_1.default.createElement("div", { className: "em-close", onClick: hide }, Assets_1.SVG_CLOSE_GRAY)),
            react_1.default.createElement("div", null, typeof items != 'undefined' && items ? renderHtml(items) : ''))) : (react_1.default.createElement("div", { className: "em-popover-i-content" },
            react_1.default.createElement("div", { className: "em-popover-i-title" },
                react_1.default.createElement("h6", null, title),
                react_1.default.createElement("div", { className: "em-close", onClick: hide }, Assets_1.SVG_CLOSE_GRAY)),
            listRow ? (listRow.length >= 1 ? (listRow.map(function (item, key) { return (react_1.default.createElement(react_1.default.Fragment, { key: key },
                react_1.default.createElement("div", { className: "em-popover-i-category", onClick: function (event) { return showRowDetails(event, key); } },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h6", null, item)),
                    rowAnchorEl === key ? (Assets_1.SVG_ARROW_UP) : (Assets_1.SVG_ARROWDOWN)),
                rowAnchorEl === key ? (react_1.default.createElement("div", { className: "em-popover-i-details" }, item === 'COMPANY POLICY' ? (typeof items != 'undefined' && typeof items.companyPolicy != 'undefined' && items.companyPolicy ? renderHtml(items.companyPolicy) : '') :
                    (item === 'SYSTEM POLICY' ? (typeof items != 'undefined' && typeof items.systemPolicy != 'undefined' && items.systemPolicy ? renderHtml(items.systemPolicy) : '') :
                        (typeof items != 'undefined' && typeof items.instruction != 'undefined' && items.instruction ? renderHtml(items.instruction) : '')))) : null)); })) : null) : null)));
    };
    return View();
};
exports.default = Information;
