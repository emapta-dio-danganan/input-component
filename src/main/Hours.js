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
var Hours = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, type = _b.type, placeholder = _b.placeholder, disabled = _b.disabled, value = _b.value, maxHours = _b.maxHours, readOnly = _b.readOnly;
    customClass = customClass ? customClass : '';
    try {
        maxHours = maxHours && parseInt(maxHours) < 23 ? maxHours : '23';
        placeholder = placeholder ? placeholder : '-';
        var hoursValue = '';
        if (value !== null && parseInt(value) >= 0) {
            //hoursValue = parseInt(value/60);
            if (parseInt(value) < 10) {
                hoursValue = "0".concat(value);
            }
            else {
                hoursValue = "".concat(value);
            }
        }
        else {
            hoursValue = '';
        }
    }
    catch (error) {
        console.log(error, 'error in Component Hours');
        return null;
    }
    function onChangeHandler(event) {
        var hours = 0;
        if (event.target.value) {
            if (type === 'hours' && parseInt(event.target.value) <= parseInt(maxHours)) {
                hours = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
                hours = type === 'hours' && parseInt(event.target.value) <= parseInt(maxHours) ? hours : parseInt(hoursValue);
            }
            else {
                hours = type === 'hours' ? 0 : parseInt(hoursValue);
            }
            if (onChanged) {
                event.target.value = hours.toString();
                onChanged(event);
            }
        }
    }
    return react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: "em-input-hours em-input " + (customClass && customClass), "data-testid": "component-hours" },
            react_1.default.createElement("div", { className: "em-input-field" },
                config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                    config.label,
                    config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*")),
                react_1.default.createElement("input", { type: "text", placeholder: placeholder, min: 0, max: maxHours, value: hoursValue, readOnly: readOnly, disabled: disabled ? true : false, onChange: function (event) { return onChangeHandler(event); } }))));
};
exports.default = Hours;
