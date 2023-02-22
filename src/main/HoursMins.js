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
var HoursMins = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, value = _b.value, placeholder = _b.placeholder, disabled = _b.disabled, readOnly = _b.readOnly, maxHours = _b.maxHours, maxMins = _b.maxMins;
    customClass = customClass ? customClass : '';
    if (!config.maxHours) {
        maxHours = '23';
    }
    else {
        maxHours = maxHours && parseInt(maxHours) < 23 ? maxHours : '23';
    }
    if (!config.maxMins) {
        maxMins = '59';
    }
    maxMins = maxMins && parseInt(maxMins) < 59 ? maxMins : '59';
    placeholder = placeholder ? placeholder : '';
    var hoursValue = '0';
    var minsValue = '0';
    if (value) {
        hoursValue = Math.trunc((parseInt(value) / 60)).toString();
        minsValue = (parseInt(value) % 60).toString();
        if (parseInt(hoursValue) < 10) {
            hoursValue = "0".concat(hoursValue);
        }
        if (parseInt(minsValue) < 10) {
            minsValue = "0".concat(minsValue);
        }
    }
    else {
        hoursValue = '00';
        minsValue = '00';
    }
    function onChangeHandler(event, type) {
        var hours = 0;
        var minutes = 0;
        if (event.target.value) {
            if (type === 'hours' && maxHours && parseInt(event.target.value) <= parseInt(maxHours)) {
                hours = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            }
            else if (type === 'minutes' && maxMins && parseInt(event.target.value) <= parseInt(maxMins)) {
                minutes = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            }
            hours = type === 'hours' && maxHours && parseInt(event.target.value) <= parseInt(maxHours) ? hours : parseInt(hoursValue);
            minutes = type === 'minutes' && maxMins && parseInt(event.target.value) <= parseInt(maxMins) ? minutes : parseInt(minsValue);
        }
        else {
            hours = type === 'hours' ? 0 : parseInt(hoursValue);
            minutes = type === 'minutes' ? 0 : parseInt(minsValue);
        }
        var totalMinutes = (hours * 60) + minutes;
        if (onChanged) {
            event.target.value = totalMinutes.toString();
            onChanged(event);
        }
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: disabled === true ?
                'em-input-hoursmins field input-hours input-disabled em-input' + customClass
                : 'em-input-hoursmins field input-hours em-input' + customClass, "data-testid": id && id.constructor === String ? id : 'hoursMins-default-id', id: id && id.constructor === String ? id : 'hoursMins-default-id' },
            react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
            react_1.default.createElement("div", { className: "em-input-field" },
                react_1.default.createElement("input", { type: "text", placeholder: placeholder, min: 0, max: maxHours, value: hoursValue, disabled: disabled ? true : false, readOnly: readOnly ? true : false, onChange: function (event) { return onChangeHandler(event, 'hours'); } }),
                react_1.default.createElement("span", null, ":"),
                react_1.default.createElement("input", { type: "text", placeholder: placeholder, min: 0, max: maxHours, value: minsValue, disabled: disabled ? true : false, readOnly: readOnly ? true : false, onChange: function (event) { return onChangeHandler(event, 'minutes'); } })))));
};
exports.default = HoursMins;
