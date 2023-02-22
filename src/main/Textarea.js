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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../scss/styles.scss");
var sanitizeValue = function (txt, props) {
    var pattern = null;
    var newTxt = txt;
    if (props && props.constructor === Object) {
        if (props.allowedSymbols && props.allowedSymbols.constructor === Array && props.allowedSymbols.length > 0) {
            pattern = "^a-zA-Z0-9";
            pattern = new RegExp("[".concat(pattern).concat(props.allowedSymbols.join(''), " ]"), 'gi');
            newTxt = newTxt.replace(pattern, "");
        }
        else {
            pattern = "^a-zA-Z0-9";
            pattern = new RegExp("[".concat(pattern, " ]"), 'gi');
            newTxt = newTxt.replace(pattern, "");
        }
        if (props.alphabet === false) {
            pattern = /[a-z]/gi;
            newTxt = newTxt.replace(pattern, "");
        }
        if (props.numeric === false) {
            pattern = /[0-9]/gi;
            newTxt = newTxt.replace(pattern, "");
        }
        if (props.space === false) {
            pattern = /\s/gi;
            newTxt = newTxt.replace(pattern, "");
        }
    }
    return newTxt;
};
var Textarea = function (_a) {
    var config = _a.config, allowedChar = _a.allowedChar, customClass = _a.customClass, onChanged = _a.onChanged;
    customClass = customClass ? customClass : '';
    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    var onChangeHandler = function (event) {
        if (allowedChar && allowedChar.constructor === Object && Object.keys(allowedChar).length > 0) {
            event.target.value = sanitizeValue(event.target.value, allowedChar);
        }
        if (onChanged) {
            if (event.target.value && config.maxLength) {
                if (event.target.value.toString().length <= config.maxLength) {
                    return onChanged(event);
                }
            }
            else {
                return onChanged(event);
            }
        }
        else {
            console.error("No onChanged property");
        }
    };
    return (react_1.default.createElement("div", { className: 'em-input ' + customClass },
        react_1.default.createElement("div", { className: config.disabled ? 'input-disabled' : '', "data-testid": config.id && config.id.constructor === String ? config.id : 'textarea-default-id', id: config.id && config.id.constructor === String ? config.id : 'textarea-default-id' },
            react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
            react_1.default.createElement("textarea", __assign({ className: "em-textarea-field" }, config, { onChange: onChangeHandler })))));
};
exports.default = Textarea;
