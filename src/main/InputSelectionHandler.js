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
var Input_1 = __importDefault(require("./Input"));
var Textarea_1 = __importDefault(require("./Textarea"));
var Select_1 = __importDefault(require("./Select"));
var ToggleButton_1 = __importDefault(require("./ToggleButton"));
var Checkbox_1 = __importDefault(require("./Checkbox"));
var Datepicker_1 = __importDefault(require("./Datepicker"));
var File_1 = __importDefault(require("./File"));
var Toggle_1 = __importDefault(require("./Toggle"));
var Currency_1 = __importDefault(require("./Currency"));
var Radio_1 = __importDefault(require("./Radio"));
var HoursMins_1 = __importDefault(require("./HoursMins"));
var Hours_1 = __importDefault(require("./Hours"));
var Minutes_1 = __importDefault(require("./Minutes"));
var DatetimePicker_1 = __importDefault(require("./DatetimePicker"));
var InputSelectionHandler = function (props) {
    var COMP = null;
    switch (props.config.type) {
        case "text":
        case "number":
        case "time":
        case "password":
            COMP = react_1.default.createElement(Input_1.default, __assign({}, props));
            break;
        case "textarea":
            COMP = react_1.default.createElement(Textarea_1.default, __assign({}, props));
            break;
        case "select":
        case "multi-select":
            COMP = react_1.default.createElement(Select_1.default, __assign({}, props));
            break;
        case "toggle-button":
            COMP = react_1.default.createElement(ToggleButton_1.default, __assign({}, props));
            break;
        case "checkbox":
            COMP = react_1.default.createElement(Checkbox_1.default, __assign({}, props));
            break;
        case "datepicker":
            COMP = react_1.default.createElement(Datepicker_1.default, __assign({}, props));
            break;
        case "file":
            COMP = react_1.default.createElement(File_1.default, __assign({}, props));
            break;
        case "toggle":
            COMP = react_1.default.createElement(Toggle_1.default, __assign({}, props));
            break;
        case "currency":
            COMP = react_1.default.createElement(Currency_1.default, __assign({}, props));
            break;
        case "radio":
            COMP = react_1.default.createElement(Radio_1.default, __assign({}, props));
            break;
        case "hours-mins":
            COMP = react_1.default.createElement(HoursMins_1.default, __assign({}, props));
            break;
        case "hours":
            COMP = react_1.default.createElement(Hours_1.default, __assign({}, props));
            break;
        case "minutes":
            COMP = react_1.default.createElement(Minutes_1.default, __assign({}, props));
            break;
        case "datetime":
            COMP = react_1.default.createElement(DatetimePicker_1.default, __assign({}, props));
            break;
        default:
            console.error("Invalid Input Type");
            return null;
    }
    return COMP;
};
exports.default = InputSelectionHandler;
