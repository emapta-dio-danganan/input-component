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
var Assets_js_1 = require("../assets/Assets.js");
var ProfileConso = function (_a) {
    var config = _a.config, onClick = _a.onClick, disabled = _a.disabled;
    var profImgURL = "https://storage.googleapis.com/hrispublicbucket/";
    var IMG_URL = profImgURL + config.employeeCode + '/' + config.bucketCode + '/PROFILE/' + config.img;
    var IMGE_PRFILE = config.img && config.img.constructor === String ? react_1.default.createElement("img", { src: IMG_URL, alt: 'sample img' }) : config.initials;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "em-profile-item" },
            react_1.default.createElement("div", { className: "em-thumb thumb-md", id: "thumb-pic" }, IMGE_PRFILE),
            react_1.default.createElement("div", { className: "em-profile-name" },
                react_1.default.createElement("h6", { id: 'name-text' }, config.employeeName),
                react_1.default.createElement("span", null, config.employeePosition),
                react_1.default.createElement("span", null, config.employeeEmail))),
        !disabled ? (react_1.default.createElement("button", { className: "em-btn-delete", onClick: function () { return onClick(config.employeeCode); } }, Assets_js_1.SVG_TRASH_RED)) : null));
};
var SelectWithProfile = function (_a) {
    var config = _a.config, onChanged = _a.onChanged;
    var _b = (0, react_1.useState)({
        id: config.id,
        options: [],
        placeholder: config.placeholder,
        value: config.value,
        disabled: config.disabled,
        required: config.required,
        type: config.type,
        isMultiple: config.isMultiple,
        customClass: config.customClass,
        hideClearIcon: config.hideClearIcon,
        isEmployeeSelection: config.isEmployeeSelection,
    }), state = _b[0], setState = _b[1];
    var _c = (0, react_1.useState)(config.options), apiReturnOptions = _c[0], setApiReturnOptions = _c[1];
    (0, react_1.useEffect)(function () {
        function initializeOptions() {
            var option = apiReturnOptions.map(function (info) { return ({
                label: info.employee_name,
                value: info.employee_code
            }); });
            setState(function (prevState) { return (__assign(__assign({}, prevState), { options: option })); });
        }
        initializeOptions();
    }, [apiReturnOptions]);
    function removeDisplay(val) {
        var value = config.value && config.value.constructor === Array && config.value.length > 0 ? (config.value.filter(function (item) { return (item !== val); })) : [];
        setState(__assign(__assign({}, state), { value: value }));
        return onChanged && onChanged(val);
    }
    function selectDisplay(value) {
        if (apiReturnOptions && apiReturnOptions.constructor === Array && apiReturnOptions.length > 0) {
            var talent = apiReturnOptions.find(function (info) { return info.employee_code === value; });
            if (talent) {
                var profile = {
                    employeeName: talent.employee_name,
                    initials: '',
                    employeePosition: talent.employee_position,
                    employeeEmail: talent.employee_email,
                    employeeCode: talent.employee_code,
                    bucketCode: talent.employee_bucket_code,
                    img: talent.employee_profile_pic
                };
                return (react_1.default.createElement("div", { className: "em-select-profile", id: value },
                    react_1.default.createElement(ProfileConso, { config: profile, onClick: function (code) { return removeDisplay(code); }, disabled: state.disabled })));
            }
        }
    }
    function inputChangedHandler(val, key) {
        if (state.type === 'multi-select') {
            return onChanged && onChanged(val);
        }
        setState(function (prevState) { return (__assign(__assign({}, prevState), { value: val.target.value })); });
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
            config.label,
            config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
        react_1.default.createElement("div", { className: "em-selectwithprofile" },
            react_1.default.createElement(SelectWithDisplay_1.default, { config: state, onChanged: function (val) { return inputChangedHandler(val, "selectWithProfile"); } })),
        config.value && config.value.constructor === Array && config.value.length > 0 ? (config.value.map(function (item, idx) { return (react_1.default.createElement(react_1.Fragment, { key: idx }, selectDisplay(item))); })) : null));
};
exports.default = SelectWithProfile;
