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
var Currency = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged, keyPressed = _a.keyPressed, onBlur = _a.onBlur;
    var _b = __assign({}, config), value = _b.value, maxLength = _b.maxLength, currency = _b.currency, placeholder = _b.placeholder, disabled = _b.disabled, readOnly = _b.readOnly;
    customClass = customClass ? customClass : '';
    currency = currency ? currency : 'PHP';
    placeholder = placeholder ? placeholder : currency;
    disabled = disabled ? disabled : false;
    value = value ? value : '';
    if (value) {
        value = value.replace(/[^0-9.]/g, "");
        var numericArray = value.split('.');
        if (numericArray.length === 1) {
            value = parseFloat(numericArray[0]).toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        else if (numericArray.length === 2) {
            var wholeNumber = numericArray[0] === '' ? numericArray[0] : parseFloat(numericArray[0]).toString();
            value = wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "." + numericArray[1];
        }
    }
    else {
        value = '';
    }
    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onChangeHandler(event) {
        if (onChanged) {
            var changedValue = event.target.value;
            var numericOnly = changedValue.replace(/[^0-9.]/g, "");
            var numericArray = numericOnly.split('.');
            if (numericArray.length === 1) {
                changedValue = numericArray[0];
                event.target.value = changedValue;
                if (maxLength && numericArray[0].length <= parseInt(maxLength)) {
                    return onChanged(event);
                }
            }
            else if (numericArray.length === 2) {
                var decimalString = (numericArray.length > 1 ? numericArray[1] : '');
                changedValue = numericArray[0] + "." + decimalString.slice(0, 2);
                if (decimalString.length <= 2) {
                    if (maxLength && numericArray[0].length <= parseInt(maxLength)) {
                        event.target.value = changedValue;
                        return onChanged(event);
                    }
                }
            }
        }
        else {
            console.error("No onChanged property");
        }
    }
    /**
   * onKeypressHandler
   * get the current value from the input field
   * @param {*} event - event which will be used to get the changed value
   */
    function onKeypressHandler(event) {
        if (event.key === 'Enter') {
            if (keyPressed) {
                return keyPressed(event);
            }
        }
    }
    /**
 * onfocusoutHandler
 * get the current value from the input field
 * @param {*} event - event which will be used to get the changed value
 */
    var onBlurHandler = function (event) {
        if (onBlur) {
            return onBlur(event);
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: "em-input-currency em-input" },
            react_1.default.createElement("div", { className: 'em-input-field ' + (config.disabled ? 'input-disabled' : ""), "data-testid": "component-input" },
                react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                    config.label,
                    config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
                react_1.default.createElement("span", { className: "currency" },
                    " ",
                    currency,
                    " "),
                react_1.default.createElement("div", { className: "em-input" },
                    react_1.default.createElement("input", { type: "text", value: value, placeholder: placeholder, disabled: disabled, readOnly: readOnly, onChange: function (event) { return onChangeHandler(event); }, onKeyPress: function (event) { return onKeypressHandler(event); }, onBlur: function (event) { return onBlurHandler(event); } }))))));
};
exports.default = Currency;
