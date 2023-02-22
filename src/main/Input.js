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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var info_1 = __importDefault(require("./info"));
require("../scss/styles.scss");
var Assets_1 = require("../assets/Assets");
var Input = function (_a) {
    var config = _a.config, allowedChar = _a.allowedChar, customClass = _a.customClass, onChanged = _a.onChanged, keyPressed = _a.keyPressed, onBlured = _a.onBlured, onClear = _a.onClear;
    customClass = customClass ? customClass : '';
    var allowedTypes = [
        'text', 'number', 'password', 'submit', 'reset', 'radio', 'checkbox', 'button',
        'file', 'image', 'color', 'date', 'datetime-local', 'email', 'month', 'url', 'week',
        'search', 'tel'
    ];
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
                pattern = /[0-9]/;
                newTxt = newTxt.replace(pattern, "");
            }
            if (props.space === false) {
                pattern = /\s/gi;
                newTxt = newTxt.replace(pattern, "");
            }
        }
        return newTxt;
    };
    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    var onChangeHandler = function (event) {
        if (config.type === 'text' && allowedChar && allowedChar.constructor === Object && Object.keys(allowedChar).length > 0) {
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
    /**
   * onBlurHandler
   * get the event of field upon focus out
   * @param {*} event - event which will be used to get the changed value
   */
    var onBlurHandler = function (event) {
        if (onBlured) {
            return onBlured(event);
        }
        else {
            console.error("No onChanged property");
        }
    };
    /**
   * onKeypressHandler
   * get the current value from the input field
   * @param {*} event - event which will be used to get the changed value
   */
    var onKeypressHandler = function (event) {
        if (event.key === 'Enter') {
            if (keyPressed) {
                return keyPressed(event);
            }
        }
    };
    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    var clearValuesHandler = function (event) {
        if (event) {
            event.preventDefault();
            return onClear && onClear();
        }
    };
    return (react_1.default.createElement("div", { className: "em-input " + (customClass && customClass) }, config.type === 'time' ? (react_1.default.createElement("div", { className: 'em-input-time ' + (config.disabled ? 'input-disabled' : ""), "data-testid": "component-input" },
        react_1.default.createElement("div", { className: "em-input-title" },
            config.label && config.label !== '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*")),
            config.hasOwnProperty('info') && react_1.default.createElement(info_1.default, { config: config.info })),
        react_1.default.createElement("input", __assign({ className: "em-input-field" }, config, { onChange: onChangeHandler, onKeyPress: function (event) { return keyPressed ? onKeypressHandler(event) : null; } })),
        config.disabled || !config.value ? null : (react_1.default.createElement("div", { className: "em-field-icon", onClick: clearValuesHandler }, Assets_1.SVG_CLOSE_GRAY)),
        react_1.default.createElement("div", { className: "em-field-icon", onClick: clearValuesHandler },
            Assets_1.SVG_ARROWDOWN,
            Assets_1.SVG_CLOCK))) : allowedTypes.includes(config.type) ?
        (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: 'em-input-field ' + (config.disabled ? 'input-disabled' : ""), "data-testid": "component-input" },
                react_1.default.createElement("div", { className: "em-input-title" },
                    config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                        config.label,
                        config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*")),
                    config.hasOwnProperty('info') && react_1.default.createElement(info_1.default, { config: config.info })),
                react_1.default.createElement("input", __assign({}, config, { "data-testid": "component-input", onChange: function (event) { return onChangeHandler(event); }, onBlur: function (event) { return onBlurHandler(event); }, onKeyPress: function (event) { return onKeypressHandler(event); } })))))
        : null));
};
exports.default = Input;
