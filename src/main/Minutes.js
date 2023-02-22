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
var Minutes = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, type = _b.type, placeholder = _b.placeholder, disabled = _b.disabled, value = _b.value, maxMins = _b.maxMins, readOnly = _b.readOnly;
    var minsValue = '';
    customClass = customClass ? customClass : '';
    try {
        maxMins = maxMins && parseInt(maxMins) < 59 ? maxMins : '59';
        placeholder = placeholder ? placeholder : '-';
        if (value !== null && parseInt(value) >= 0) {
            //minsValue = value%60;
            if (parseInt(value) < 10) {
                minsValue = "0".concat(value);
            }
            else {
                minsValue = "".concat(value);
            }
        }
        else {
            minsValue = '';
        }
    }
    catch (error) {
        console.error(error, 'error in Component Minutes');
        return null;
    }
    function onChangeHandler(event) {
        var minutes = 0;
        if (event.target.value) {
            if (parseInt(event.target.value) <= parseInt(maxMins)) {
                minutes = event.target.value ? parseInt(event.target.value) : 0;
            }
            minutes = parseInt(event.target.value) <= parseInt(maxMins) ? minutes : parseInt(minsValue);
        }
        else {
            minutes = type === 'minutes' ? 0 : parseInt(minsValue);
        }
        if (onChanged) {
            event.target.value = minutes.toString();
            return onChanged(event);
        }
    }
    return react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: "e-input-minutes em-input" + customClass, "data-testid": "component-minutes" },
            react_1.default.createElement("div", { className: "em-input-field" },
                react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                    config.label,
                    config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
                react_1.default.createElement("input", { type: "text", placeholder: placeholder, min: 0, max: maxMins, value: minsValue, readOnly: readOnly, disabled: disabled ? true : false, onChange: function (event) { return onChangeHandler(event); } }))));
};
exports.default = Minutes;
