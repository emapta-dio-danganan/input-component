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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Assets_1 = require("../assets/Assets");
var index_1 = require("../main/index");
var SpanTag = function (_a) {
    var children = _a.children, _b = _a.elementType, ElementType = _b === void 0 ? 'span' : _b, value = _a.value, onClick = _a.onClick;
    return (react_1.default.createElement(ElementType, { value: value, onClick: onClick }, children));
};
var DAYS_NAME = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MONTHS_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var Popover = function (props) {
    return (react_1.default.createElement(react_1.Fragment, null, props.open &&
        react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: "em-overlay", onClick: props.onClose }),
            react_1.default.createElement("div", { className: "em-popover", style: props.origin !== undefined && props.origin === "right" ? { right: 200 + 'px' } : { left: 0 + 'px' } }, props.children))));
};
var YEAR_LIST = function () {
    var year = (new Date()).getFullYear();
    var arrayYear = [];
    for (var i = (year + 20); i > (year - 80); i--) {
        arrayYear = __spreadArray(__spreadArray([], arrayYear, true), [i], false);
    }
    return arrayYear;
};
var dateStandardFormat = function (day, month, year, monthCondition) {
    var returnDateString = "";
    if (monthCondition < 0) {
        if (month - 1 < 0) {
            returnDateString = year - 1 + "-12-" + ("0" + day).slice(-2);
        }
        else {
            returnDateString = year - 1 + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
        }
    }
    else if (monthCondition > 0) {
        if (month + 1 >= MONTHS_NAME.length) {
            returnDateString = year + 1 + "-01-" + ("0" + day).slice(-2);
        }
        else {
            returnDateString = year + 1 + "-" + ("0" + (month + 2)).slice(-2) + "-" + ("0" + day).slice(-2);
        }
    }
    else {
        returnDateString = year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("0" + day).slice(-2);
    }
    return returnDateString;
};
var getMonthDetails = function (month, year, isMultiple) {
    /**
    * getDayDetails
    * determine if the day from the calendar is from previous month or previous year
    * @param {*} args - the object element of the date from the calendar
    */
    function getDayDetails(args) {
        var date = args.index - args.firstDay;
        var day = args.index % 7;
        var prevMonth = args.month - 1;
        var prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        var prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
        var _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
        var month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        var completeDate = dateStandardFormat(_date, args.month, args.year, month);
        return {
            date: _date,
            completeDate: completeDate,
            day: day,
            month: month,
        };
    }
    /**
    * getNumberOfDays
    * determine the number of days in a month including the previous or next month that will overlap the selected month
    * @param {*} year - year
    * @param {*} month - month based on the array key
    */
    function getNumberOfDays(year, month) {
        return 40 - new Date(year, month, 40).getDate();
    }
    // Manipulate the first month data to populate all the days of the month with its details
    var firstDay = (new Date(year, month)).getDay();
    var numberOfDays = (40 - new Date(year, month, 40).getDate());
    var monthArray = [];
    var rows = 7;
    var currentDay = null;
    var index = 0;
    var cols = 6;
    // Inser the day into an Array
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            currentDay = getDayDetails({
                index: index,
                numberOfDays: numberOfDays,
                firstDay: firstDay,
                year: year,
                month: month
            });
            monthArray.push(currentDay);
            index++;
        }
    }
    var returnArray = [
        {
            label: MONTHS_NAME[month] + ' ' + year,
            days: monthArray
        }
    ];
    // if the selection is multiple it will display two months
    if (isMultiple) {
        // Manipulate the second month data to populate all the days of the month with its details
        var nextMonth = (month + 1 < MONTHS_NAME.length) ? (month + 1) : 0;
        var nextYear = (month + 1 < MONTHS_NAME.length) ? year : (year + 1);
        var nextFirstDay = (new Date(nextYear, nextMonth)).getDay();
        var nextNumberOfDays = (40 - new Date(nextYear, nextMonth, 40).getDate());
        var nextMonthArray = [];
        var nextRows = 7;
        var nextCurrentDay = null;
        var nextIndex = 0;
        var nextCols = 6;
        // Inser the day into an Array
        for (var nextRow = 0; nextRow < nextRows; nextRow++) {
            for (var nextCol = 0; nextCol < nextCols; nextCol++) {
                nextCurrentDay = getDayDetails({
                    index: nextIndex,
                    numberOfDays: nextNumberOfDays,
                    firstDay: nextFirstDay,
                    year: nextYear,
                    month: nextMonth
                });
                nextMonthArray.push(nextCurrentDay);
                nextIndex++;
            }
        }
        returnArray = __spreadArray(__spreadArray([], returnArray, true), [
            {
                label: MONTHS_NAME[nextMonth] + ' ' + nextYear,
                days: nextMonthArray
            }
        ], false);
    }
    return returnArray;
};
var descriptiveDateFormat = function (date, withTime) {
    return withTime ? datetimeFormatter(date, 'datetime') : datetimeFormatter(date, 'date');
};
var datetimeFormatter = function (timestamp, format) {
    if (format === void 0) { format = "datetime"; }
    try {
        if (timestamp && (timestamp.constructor === String || timestamp.constructor === Date)) {
            var date = null;
            var arrayDate = [];
            var iosDate = null;
            if (timestamp && timestamp.constructor === String) {
                timestamp = timestamp.replace('+00', ''); //removing unnecessary gmt from backend as the time is already in ph
                arrayDate = timestamp.split(/[- :.]/);
            }
            if (arrayDate.length === 3) {
                iosDate = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2], arrayDate[3]);
            }
            else if (arrayDate.length >= 5) {
                iosDate = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2], arrayDate[3], arrayDate[4], arrayDate[5]);
            }
            else {
                iosDate = new Date(timestamp);
            }
            var currentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            date = new Date(timestamp).toLocaleString('en-US', { timeZone: currentTz }); //making the date picked as the default gmt so that the new date wont adjust by timezone
            date = new Date(date);
            // for firefox
            if (isNaN(date)) {
                var splitTimeStampBySpace = timestamp.split(' ');
                if (splitTimeStampBySpace.length === 2) {
                    if (isNaN(parseInt(splitTimeStampBySpace[0])) && splitTimeStampBySpace[1]) {
                        date = new Date("".concat(splitTimeStampBySpace[0], " 01, ").concat(splitTimeStampBySpace[1]));
                    }
                }
            }
            if (date && date.toString() !== 'Invalid Date') {
                //get DATE
                var dayName = DAYS_NAME[isNaN(date.getDay()) ? iosDate.getDay() : date.getDay()];
                var dayDate = ("0" + (isNaN(date.getDate()) ? iosDate.getDate() : date.getDate())).slice(-2);
                var monthName = MONTHS_NAME[isNaN(date.getMonth()) ? iosDate.getMonth() : date.getMonth()];
                monthName = monthName ? monthName.slice(0, 3) : monthName;
                var year = isNaN(date.getFullYear()) ? iosDate.getFullYear() : date.getFullYear();
                var MonthNumeric = ("0" + (isNaN(date.getMonth()) ? (iosDate.getMonth() + 1) : (date.getMonth() + 1))).slice(-2);
                //get TIME
                var hours = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                var minutes = isNaN(date.getMinutes()) ? iosDate.getMinutes() : date.getMinutes();
                var seconds = isNaN(date.getSeconds()) ? iosDate.getSeconds() : date.getSeconds();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                switch (format) {
                    case "date-standard":
                        return year + "-" + MonthNumeric + "-" + dayDate;
                    case "date":
                        return dayName + ", " + dayDate + " " + monthName + " " + year;
                    case "datetime":
                        // Mon, 01 Jan 2020 12:00PM
                        return dayName + ", " + dayDate + " " + monthName + " " + year + " " + strTime;
                    case "time-standard":
                        var h = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                        var hour = h < 10 ? '0' + h : h;
                        // 15:30
                        return hour + ':' + minutes;
                    default:
                        return "";
                }
            }
            else {
                return "Invalid Date";
            }
        }
        else {
            return "Invalid Date";
        }
    }
    catch (error) {
        return "Invalid Date";
    }
};
var Datepicker = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    // Props variable data manipulation
    var _b = __assign({}, config), id = _b.id, placeholder = _b.placeholder, value = _b.value, multiple = _b.multiple, disabled = _b.disabled, disabledDates = _b.disabledDates, disabledDays = _b.disabledDays, minDate = _b.minDate, maxDate = _b.maxDate, dateNow = _b.dateNow, withTime = _b.withTime;
    placeholder = placeholder && placeholder.constructor === String ? placeholder : "-";
    customClass = customClass ? customClass : '';
    // React Hook and Declaration
    var dateToday = new Date();
    var _c = (0, react_1.useState)(false), datepickerPopover = _c[0], setDatepickerPopover = _c[1];
    var _d = (0, react_1.useState)(value && value.from && value.from.constructor === String ? (new Date(value.from)).getMonth() : dateToday.getMonth()), selectedMonth = _d[0], setSelectedMonth = _d[1];
    var _e = (0, react_1.useState)(value && value.from && value.from.constructor === String ? (new Date(value.from)).getFullYear() : dateToday.getFullYear()), selectedYear = _e[0], setSelectedYear = _e[1];
    var _f = (0, react_1.useState)([]), selectedDates = _f[0], setSelectedDates = _f[1];
    //STATES
    var _g = (0, react_1.useState)({
        id: 'sampleInputTime',
        type: 'time',
        label: 'time',
        readOnly: false,
        disabled: true,
    }), inputTime = _g[0], setInputTime = _g[1];
    var _h = (0, react_1.useState)(''), time = _h[0], setTime = _h[1];
    /**
    * popoverRequestHandler
    * hide and show the options popover
    * @param {*} event - event
    * @param {*} action - it can be either show or hide
    */
    function popoverRequestHandler(event, action) {
        // event.preventDefault();
        if (action === "show") {
            setDatepickerPopover(event.currentTarget);
        }
        else {
            setDatepickerPopover(null);
            manipulateReturnValues(event, selectedDates);
        }
    }
    /**
    * manipulateReturnValues
    * manipulate selected values from array into obj return
    * @param {*} selected - selected dates inserted in an array
    */
    function manipulateReturnValues(event, selected) {
        selected = withTime && value ? [value.from] : selected.sort(function (a, b) { return ((new Date(a).getTime()) - (new Date(b).getTime())); });
        time.length === 0 && setTime('00:00');
        var returnDate = null;
        if (selected.length > 0) {
            returnDate = {
                //APPEND TIME if withTime is declared
                from: withTime ? selected[0].split(' ')[0] + " " + (time.length > 0 ? time : '00:00') : selected[0],
                to: selected[1] ? selected[1] : withTime ? selected[0].split(' ')[0] + " " + (time.length > 0 ? time : '00:00') : selected[0],
            };
        }
        else {
            returnDate = value;
        }
        setSelectedDates([]);
        setSelectedMonth(returnDate && returnDate.from ? (new Date(returnDate.from)).getMonth() : dateToday.getMonth());
        setSelectedYear(returnDate && returnDate.from ? (new Date(returnDate.from)).getFullYear() : dateToday.getFullYear());
        if (event && event.target) {
            event.target.value = withTime ? time : returnDate;
            return onChanged && onChanged(withTime ? returnDate : event);
        }
    }
    /**
    * datepickerNavigationHandler
    * change the calendar display by selection of date and year
    * @param {*} event - event
    * @param {*} action - navigation action such as 'year', 'month', 'next' or 'previous'
    */
    function datepickerNavigationHandler(event, action) {
        if (action === 'month') {
            setSelectedMonth(parseInt(event.target.value));
        }
        else if (action === 'year') {
            setSelectedYear(parseInt(event.target.value));
        }
        else if (action === 'previous') {
            if (selectedMonth - 1 < 0 && selectedYear - 1 >= YEAR_LIST()[YEAR_LIST().length - 1]) {
                setSelectedMonth(MONTHS_NAME.length - 1);
                setSelectedYear(selectedYear - 1);
            }
            else if (selectedMonth - 1 >= 0 && selectedYear - 1 >= YEAR_LIST()[YEAR_LIST().length - 1]) {
                setSelectedMonth(selectedMonth - 1);
            }
        }
        else if (action === 'next') {
            if (selectedMonth + 1 >= MONTHS_NAME.length && selectedYear + 1 <= YEAR_LIST()[0]) {
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
            }
            else if (selectedMonth + 1 < MONTHS_NAME.length && selectedYear + 1 <= YEAR_LIST()[0]) {
                setSelectedMonth(selectedMonth + 1);
            }
        }
    }
    /**
    * onSelectDateHandler
    * insert the selected date into an array
    * @param {*} event - event
    * @param {*} date - the selected date
    */
    function onSelectDateHandler(event, date) {
        event.preventDefault();
        selectedDates = !withTime ? __spreadArray(__spreadArray([], selectedDates, true), [date], false) : [date];
        setSelectedDates(selectedDates);
        if (multiple) {
            if (selectedDates.length >= 2) {
                popoverRequestHandler(event, "hide");
            }
        }
        else {
            withTime && date && setInputTime(function (prev) { return (__assign(__assign({}, prev), { disabled: false })); });
            !withTime && popoverRequestHandler(event, "hide");
        }
    }
    /**
    * onSelectTime
    * Handles the change when the time is selected if withTime is enabled
    * @param {*} event - event
    */
    function onSelectTime(event) {
        setTime(event.target.value);
    }
    /**
    * getValueToString
    * manipute the value or selectedDates from standard format into declarative format
    * @param {*} event - event
    * @param {*} selected - the selected date
    */
    function getValueToString(value, selected) {
        var returnManipulatedValue = "";
        if (selected.length > 0) {
            if (selected[0] && selected[1] && selected[0] !== selected[1]) {
                selected = selected.sort(function (a, b) { return ((new Date(a).getTime()) - (new Date(b).getTime())); });
                returnManipulatedValue = descriptiveDateFormat(selected[0]) + ' - ' + descriptiveDateFormat(selected[1]);
            }
            else {
                returnManipulatedValue = descriptiveDateFormat(selected[0]);
            }
        }
        else if (value) {
            if (value.from !== value.to) {
                returnManipulatedValue = descriptiveDateFormat(value.from) + ' - ' + descriptiveDateFormat(value.to);
            }
            else {
                returnManipulatedValue = withTime ? descriptiveDateFormat(value.from, true) : descriptiveDateFormat(value.from);
            }
        }
        return returnManipulatedValue;
    }
    /**
    * isSelectedDate
    * determine if the days in the calendar is being select
    * @param {*} date - calendar date
    */
    function isSelectedDate(date) {
        var selected = selectedDates.sort(function (a, b) { return ((new Date(a).getTime()) - (new Date(b).getTime())); });
        var calendarDate = new Date(date);
        if (selected.length >= 2) {
            var selectedDate1 = new Date(selected[0]);
            var selectedDate2 = new Date(selected[1]);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate2.getTime();
        }
        else if (selected.length === 1) {
            var selectedDate1 = new Date(selected[0]);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate1.getTime();
        }
        else if (value && value.from && value.to) {
            var selectedDate1 = new Date((withTime ? value.from.split(' ')[0] : value.from));
            var selectedDate2 = new Date((withTime ? value.to.split(' ')[0] : value.to));
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate2.getTime();
        }
        else {
            return false;
        }
    }
    /**
    * isDisabledDate
    * determine if the days in the calendar is disabled
    * @param {*} data - calendar date data
    */
    function isDisabledDate(data) {
        if (data.month !== 0) {
            return true;
        }
        else {
            if (disabledDates && disabledDates.constructor === Array && disabledDates.length > 0 && disabledDates.includes(data.completeDate)) {
                return true;
            }
            else if (disabledDays && disabledDays.constructor === Array && disabledDays.length > 0 && disabledDays.map(function (d) { return d.toLowerCase(); }).includes(DAYS_NAME[data.day].toLowerCase())) {
                return true;
            }
            else if (minDate && minDate.constructor === String && (new Date(data.completeDate)).getTime() < (new Date(minDate)).getTime()) {
                return true;
            }
            else if (maxDate && maxDate.constructor === String && (new Date(data.completeDate)).getTime() > (new Date(maxDate)).getTime()) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    function isDateToday(data) {
        if (data.completeDate !== null) {
            var newDate = null;
            var dateNowNew = new Date();
            if (dateNow !== null && dateNow !== undefined) {
                if (typeof dateNow == "string") {
                    newDate = datetimeFormatter(dateNow, 'date-standard');
                }
                else {
                    newDate = datetimeFormatter(dateNow.toString(), 'date-standard');
                }
            }
            else {
                newDate = datetimeFormatter(dateNowNew.toString(), 'date-standard');
            }
            if (newDate === data.completeDate) {
                return true;
            }
        }
        else {
            return false;
        }
    }
    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    var clearValuesHandler = function (event) {
        if (event) {
            event.preventDefault();
            if (onChanged) {
                //RESET TIME AND DISABLE INPUT
                withTime && setTime('');
                withTime && setInputTime(function (prev) { return (__assign(__assign({}, prev), { disabled: true })); });
                return onChanged(null);
            }
        }
    };
    return (react_1.default.createElement("div", { className: 'em-datepicker ' + (customClass && customClass) },
        react_1.default.createElement("div", __assign({ className: 'em-datepicker-field ' + (disabled && disabled.constructor === Boolean ? 'disabled' : "") }, (disabled ? { onClick: function (event) { event.preventDefault(); } } : !value ? { onClick: function (event) { return popoverRequestHandler(event, 'show'); } } : { onClick: function (event) { event.preventDefault(); } })),
            config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*")),
            react_1.default.createElement("input", { id: id && id.constructor === String ? id : "datePickerStandardID", type: "text", placeholder: placeholder, value: getValueToString(value, selectedDates), readOnly: true, onClick: function (event) { return popoverRequestHandler(event, 'show'); }, disabled: disabled && disabled.constructor === Boolean ? true : false })),
        disabled && disabled.constructor === Boolean ? (react_1.default.createElement("div", { className: 'em-field-icon' }, Assets_1.SVG_ARROWDOWN)) : (getValueToString(value, selectedDates) && getValueToString(value, selectedDates) !== "" ? (react_1.default.createElement("div", { onClick: function (event) { return clearValuesHandler(event); }, className: 'em-field-icon' }, Assets_1.SVG_CLOSE_GRAY)) : (react_1.default.createElement("div", { className: 'em-field-icon' }, Assets_1.SVG_CALENDAR))),
        react_1.default.createElement(Popover, { id: "datepickerPopover", open: Boolean(datepickerPopover), anchorEl: datepickerPopover, onClose: function (event) { return popoverRequestHandler(event, 'hide'); }, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, keepMounted: true, transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
            } },
            react_1.default.createElement("div", { className: "em-datepicker-popover popover-input open-popover" },
                react_1.default.createElement("div", { className: "e-field" }, Boolean(datepickerPopover) ? (react_1.default.createElement("div", { className: multiple && multiple.constructor === Boolean ? "em-datepopover em-datepopover-large" : "em-datepopover" },
                    react_1.default.createElement("div", { className: "em-datepicker-header" },
                        react_1.default.createElement("button", { id: "button-prev-month", onClick: function (event) { return datepickerNavigationHandler(event, "previous"); } },
                            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.2071 4.79289C13.5976 5.18342 13.5976 5.81658 13.2071 6.20711L8.91421 10.5L13.2071 14.7929C13.5976 15.1834 13.5976 15.8166 13.2071 16.2071C12.8166 16.5976 12.1834 16.5976 11.7929 16.2071L6.79289 11.2071C6.40237 10.8166 6.40237 10.1834 6.79289 9.79289L11.7929 4.79289C12.1834 4.40237 12.8166 4.40237 13.2071 4.79289Z", fill: "white" }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("select", { id: "date-picker-select-month", value: selectedMonth, onChange: function (event) { return datepickerNavigationHandler(event, "month"); } }, MONTHS_NAME.map(function (item, idx) { return (react_1.default.createElement("option", { key: "opt" + idx, value: idx }, item)); })),
                            react_1.default.createElement("select", { id: "date-picker-select-year", value: selectedYear, onChange: function (event) { return datepickerNavigationHandler(event, "year"); } }, YEAR_LIST().map(function (item, idx) { return (react_1.default.createElement("option", { key: "opt" + idx, value: item }, item)); }))),
                        react_1.default.createElement("button", { id: "button-next-month", onClick: function (event) { return datepickerNavigationHandler(event, "next"); } },
                            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.79289 16.2071C7.40237 15.8166 7.40237 15.1834 7.79289 14.7929L12.0858 10.5L7.79289 6.20711C7.40237 5.81658 7.40237 5.18342 7.79289 4.79289C8.18342 4.40237 8.81658 4.40237 9.20711 4.79289L14.2071 9.79289C14.5976 10.1834 14.5976 10.8166 14.2071 11.2071L9.20711 16.2071C8.81658 16.5976 8.18342 16.5976 7.79289 16.2071Z", fill: "white" })))),
                    react_1.default.createElement(react_1.default.Fragment, null,
                        getMonthDetails(selectedMonth, selectedYear, multiple).map(function (monthDetails, monthIdx) { return (react_1.default.createElement("div", { className: multiple && multiple.constructor === Boolean ? "em-datepicker-content em-datepicker-content-multiple" : "em-datepicker-content", key: "month-" + monthIdx },
                            multiple && multiple.constructor === Boolean ? react_1.default.createElement("h5", null, monthDetails.label) : null,
                            react_1.default.createElement("div", { className: "em-datepicker-week" }, DAYS_NAME.map(function (item, idx) { return (react_1.default.createElement("div", { key: idx, className: "em-datepicker-day" }, item)); })),
                            react_1.default.createElement("div", { className: "em-datepicker-days" }, monthDetails.days.map(function (item, idx) { return (react_1.default.createElement("div", { key: idx, className: 'em-datepicker-day' + (isDisabledDate(item) ? ' disabled' : (isSelectedDate(item.completeDate) ? ' selected' : "")) + (isDateToday(item) ? ' em-date-today' : "") }, isDisabledDate(item) ? (react_1.default.createElement("span", null, item.date)) : (react_1.default.createElement(SpanTag, { value: item.date, onClick: function (event) { return onSelectDateHandler(event, item.completeDate); } }, item.date)))); })))); }),
                        //TIME
                        withTime && !multiple ?
                            react_1.default.createElement(index_1.InputSelectionHandler, { config: __assign(__assign({}, inputTime), { value: time }), onChanged: function (e) { return onSelectTime(e); }, keyPressed: function (e) { return popoverRequestHandler(e, 'hide'); }, onClear: function () { return setTime(''); } })
                            : null))) : null)))));
};
exports.default = Datepicker;
