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
var ToggleButton = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, disabled = _b.disabled, value = _b.value, options = _b.options, placeholder = _b.placeholder;
    var expectedId = id && id.constructor === String ? id : '';
    customClass = customClass && customClass.constructor === String ? customClass : '';
    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onChangeHandler(event) {
        if (onChanged) {
            return onChanged(event);
        }
        else {
            console.error("No onChanged property");
        }
    }
    return (react_1.default.createElement("div", { className: 'em-toggle ' + customClass },
        react_1.default.createElement("div", { className: disabled === true ? 'em-toggle-field input-disabled' : 'em-toggle-field', "data-testid": id && id.constructor === String ? id : 'togglebutton-default-id', id: id && id.constructor === String ? id : 'togglebutton-default-id' }, options && options.constructor === Array && options.length > 0 ?
            options.map(function (listItem, i) { return (react_1.default.createElement("div", { key: i, className: disabled === true ? 'is-disabled' : '' },
                react_1.default.createElement("input", { placeholder: placeholder && placeholder.constructor === String ? placeholder : '', type: "radio", id: expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i), name: expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i), value: listItem.value && listItem.value.constructor === String ? listItem.value : '', checked: listItem.value === value, disabled: listItem.disabled || disabled ? true : false, onChange: function (event) { return onChangeHandler(event); }, className: listItem.value === value ? "is-active" : "" }),
                react_1.default.createElement("label", { htmlFor: expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i) }, listItem.label))); }) : null)));
};
exports.default = ToggleButton;
