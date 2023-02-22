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
var Checkbox = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, type = _b.type, disabled = _b.disabled, value = _b.value, label = _b.label;
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
    return (react_1.default.createElement("div", { className: 'em-check ' + customClass },
        react_1.default.createElement("div", { className: "em-check-field" },
            react_1.default.createElement("div", { className: "em-check-input" },
                react_1.default.createElement("input", { id: id ? id : 'standardCheckboxID', type: type, checked: value, disabled: disabled ? true : false, onChange: function (event) { return onChangeHandler(event); } }),
                react_1.default.createElement("label", { htmlFor: id ? id : 'standardCheckboxID' })),
            react_1.default.createElement("span", null, label))));
};
exports.default = Checkbox;
