"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
require("../scss/styles.scss");
var Radio = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, options = _b.options, type = _b.type, disabled = _b.disabled, value = _b.value;
    /**
    * onChangeHandler
    * get the current value from the radio buttons
    * @param {*} event - event which will be used to get the changed value
    */
    function onChangeHandler(event, key) {
        if (key === void 0) { key = ''; }
        if (key === 'span') {
            var attr = event.currentTarget.getAttribute('data-value');
            var forceEvent = { target: { value: attr } };
            if (onChanged) {
                return onChanged(forceEvent);
            }
            else {
                console.error("No onChanged property");
            }
        }
        if (onChanged) {
            return onChanged(event);
        }
        else {
            console.error("No onChanged property");
        }
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: "em-radio " + (customClass && customClass) },
            react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
            react_1.default.createElement("div", { className: "em-radio-wrapper" }, options && options.constructor === Array && options.length > 0 ? (options.map(function (opt, idx) { return (react_1.default.createElement(react_1.default.Fragment, { key: idx },
                react_1.default.createElement("div", { className: "em-radio-field" },
                    react_1.default.createElement("div", { className: "em-radio-input" },
                        react_1.default.createElement("input", { name: id, id: opt.value ? opt.value : "", type: type, value: opt.value ? opt.value : "", checked: opt.value === value, onChange: function (event) { return onChangeHandler(event); }, disabled: disabled ? true : opt.disabled ? opt.disabled : false }),
                        react_1.default.createElement("span", { className: "circle", "data-value": opt.value ? opt.value : "", onClick: function (event) { return onChangeHandler(event, 'span'); } })),
                    react_1.default.createElement("label", { htmlFor: opt.value ? opt.value : "" }, opt.label)),
                opt.hasOwnProperty('customContent') && opt.customContent != '' && react_1.default.createElement(react_1.default.Fragment, null, opt.customContent))); })) : null))));
};
exports.default = Radio;
