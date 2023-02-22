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
var SelectWithDisplay_1 = __importDefault(require("./SelectWithDisplay"));
var LinksConso = function (_a) {
    var config = _a.config, disabled = _a.disabled, onClick = _a.onClick;
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: "link-item" },
            config && config.label && react_1.default.createElement("div", { className: "link-item-label" },
                react_1.default.createElement("a", { href: config.link, rel: 'noreferrer', target: "_blank" }, config.label)),
            config && config.value && react_1.default.createElement("div", { className: "link-item-number" }, config.value),
            config && config.category && react_1.default.createElement("div", { className: "link-item-category" }, config.category)),
        !disabled ? (react_1.default.createElement("button", { className: "button outline delete", onClick: function () { return onClick(config.value); } }, "SVG_TRASH_RED")) : null));
};
var SelectWithLinks = function (_a) {
    var config = _a.config, onChanged = _a.onChanged;
    var _b = (0, react_1.useState)({
        id: config.id,
        type: config.type,
        options: config.options,
        placeholder: config.placeholder,
        value: config.value,
        disabled: config.disabled,
        required: config.required,
        isMultiple: config.isMultiple,
        customClass: config.customClass,
        hideClearIcon: config.hideClearIcon,
        isEmployeeSelection: config.isEmployeeSelection,
    }), state = _b[0], setState = _b[1];
    var _c = (0, react_1.useState)(config.options), apiReturnOptions = _c[0], setApiReturnOptions = _c[1];
    var _d = (0, react_1.useState)([]), options = _d[0], setOptions = _d[1];
    (0, react_1.useEffect)(function () {
        function initializeOptions() {
            var option = apiReturnOptions.map(function (info) { return ({
                label: info.label,
                value: info.value
            }); });
            setOptions(option);
        }
        initializeOptions();
    }, [apiReturnOptions]);
    function removeDisplay(event) {
        if (onChanged) {
            var value = config.value && config.value.constructor === Array && config.value.length > 0 ? (config.value.filter(function (item) { return (item !== event.target.value); })) : [];
            setState(__assign(__assign({}, state), { value: value }));
            return onChanged(event);
        }
    }
    function selectDisplay(value) {
        if (apiReturnOptions && apiReturnOptions.constructor === Array && apiReturnOptions.length > 0) {
            var params = apiReturnOptions.find(function (info) { return info.value === value; });
            return (react_1.default.createElement("div", { className: "card-grid-col", id: value },
                react_1.default.createElement("div", { className: "card-grid-item" },
                    react_1.default.createElement(LinksConso, { config: params, onClick: function (code) { return removeDisplay(code); }, disabled: config.disabled }))));
        }
    }
    function inputChangedHandler(val, key) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { value: val.target.value })); });
        return onChanged ? onChanged(val) : false;
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
            config.label,
            config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
        react_1.default.createElement("div", { className: "em-selectwithlink" },
            react_1.default.createElement(SelectWithDisplay_1.default, { config: state, onChanged: function (val) { return inputChangedHandler(val, "selectWithProfile"); } })),
        config.value && config.value.constructor === Array && config.value.length > 0 ? (config.value.map(function (item, idx) { return (react_1.default.createElement(react_1.Fragment, { key: idx }, selectDisplay(item))); })) : null));
};
exports.default = SelectWithLinks;
