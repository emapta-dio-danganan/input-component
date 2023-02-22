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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../scss/styles.scss");
var File = function (_a) {
    var config = _a.config, customClass = _a.customClass, hasChips = _a.hasChips, onChanged = _a.onChanged;
    var _b = __assign({}, config), id = _b.id, disabled = _b.disabled, placeholder = _b.placeholder, multiple = _b.multiple, selected = _b.selected;
    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onchangeHandler(event) {
        if (event) {
            if (onChanged) {
                if (multiple) {
                    var files = __spreadArray(__spreadArray([], selected, true), Array.from(event.target.files), true);
                    config.selected = files;
                    event.selected = files;
                }
                else {
                    var files = Array.from(event.target.files);
                    config.selected = files;
                    event.selected = files;
                }
                return onChanged && onChanged(event);
            }
            else {
                console.error("No onChanged property");
            }
        }
    }
    /**
    * removeFile
    * remove file from the props value then return it
    * @param {*} event - event
    * @param {*} idx - index of the file which will be removed
    */
    function removeFile(event, idx) {
        if (event) {
            event.preventDefault();
            var copyValues = selected.filter(function (val, id) { return id !== idx; });
            event.selected = copyValues;
            config.selected = copyValues;
            return onChanged && onChanged(event);
        }
    }
    return (react_1.default.createElement("div", { className: 'em-attach ' + customClass },
        react_1.default.createElement("div", { className: disabled ? 'em-attach-field input-disabled' : 'em-attach-field', "data-testid": id ? id : 'file-default-id' },
            hasChips &&
                react_1.default.createElement("div", { className: "em-attach-chips" }, selected && selected.constructor === Array && selected.length > 0 ? (selected.map(function (val, idx) { return (react_1.default.createElement("div", { key: idx, className: "em-chip" },
                    react_1.default.createElement("span", null, val.name),
                    disabled ? null :
                        react_1.default.createElement("button", { onClick: function (event) { return removeFile(event, idx); }, className: "close" }))); })) : null),
            react_1.default.createElement("label", { htmlFor: id, className: "em-attach-input" },
                react_1.default.createElement("span", null, placeholder ? placeholder : "Attach File")),
            react_1.default.createElement("input", __assign({}, config, { onChange: function (event) { return onchangeHandler(event); }, style: { 'display': 'none' } })))));
};
exports.default = File;
