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
var HoursMins_1 = __importDefault(require("./HoursMins"));
var Datepicker_1 = __importDefault(require("./Datepicker"));
var DatetimePicker = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    customClass = customClass ? customClass : '';
    var _b = (0, react_1.useState)({
        date: null,
        time: "0"
    }), state = _b[0], setStateData = _b[1];
    var _c = __assign({}, state), date = _c.date, time = _c.time;
    (0, react_1.useEffect)(function () {
        if (config.value) {
            var dT = new Date(config.value);
            // set date
            var sDate = dT.toISOString().substring(0, 10);
            state.date = { from: sDate, to: sDate };
            // set time
            var hours = dT.getHours();
            var minutes = dT.getMinutes();
            var totalMinutes = (hours * 60) + minutes;
            state.time = totalMinutes.toString();
            setStateData(__assign({}, state));
        }
    }, []);
    var onChangeHandler = function (e, type) {
        switch (type) {
            case 'date':
                state.date = e.target.value;
                break;
            case 'time':
                state.time = e.target.value;
                break;
        }
        if (state.date) {
            var d = state.date.from.replace('-', '/');
            var dt = new Date(d);
            var newDate = new Date(dt.setMinutes(parseInt(state.time)));
            if (onChanged) {
                return onChanged(newDate);
            }
        }
        setStateData(__assign({}, state));
    };
    var View = function () {
        var datePicker = {
            id: config.id,
            type: 'datepicker',
            placeholder: config.placeholder,
            value: date,
            disabled: false,
            disabledDates: config.disabledDates,
            disabledDays: config.disabledDays,
        };
        var hoursMins = {
            id: config.id,
            type: 'hours-mins',
            value: time.toString(),
            readOnly: config.readOnly,
            disabled: config.disabled,
            maxHours: config.maxHours,
            maxMins: config.maxMins
        };
        return react_1.default.createElement(react_1.Fragment, null,
            config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*")),
            react_1.default.createElement("div", { className: "em-datetime " + customClass },
                react_1.default.createElement(Datepicker_1.default, { config: datePicker, onChanged: function (e) { return onChangeHandler(e, 'date'); } }),
                react_1.default.createElement(HoursMins_1.default, { config: hoursMins, onChanged: function (e) { return onChangeHandler(e, 'time'); } })));
    };
    return View();
};
exports.default = DatetimePicker;
