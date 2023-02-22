import React, { Fragment, useState } from 'react';
import { SVG_CALENDAR, SVG_CLOSE_GRAY, SVG_ARROWDOWN } from '../assets/Assets';
import { InputSelectionHandler } from '../main/index';

// import '../scss/library/datepicker.scss';

interface IProps {
    config: {
        id: string,
        type: string,
        placeholder?: string,
        value: null | { from: string, to: string },
        disabled?: boolean,
        disabledDates?: Array<string>,
        disabledDays?: Array<string>,
        multiple?: boolean | undefined,
        minDate?: string,
        maxDate?: string,
        dateNow?: string | any
        label?: string
        withTime?: boolean
        required?: boolean

    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | any, val?: string) => void,

}

interface IPropsSpan {
    children: React.ReactNode;
    elementType?: keyof JSX.IntrinsicElements;
    value: any,
    onClick?: (event: React.MouseEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | any) => void,

}


const SpanTag = ({ children, elementType: ElementType = 'span', value, onClick }: IPropsSpan): JSX.Element => {
    return (
        <ElementType value={value} onClick={onClick}>{children}</ElementType>
    );
}







const DAYS_NAME = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Popover = (props: any) => {
    return (
        <Fragment>
            {
                props.open &&
                <Fragment>
                    <div className="em-overlay" onClick={props.onClose}>
                    </div>
                    <div className="em-popover" style={props.origin !== undefined && props.origin === "right" ? { right: 200 + 'px' } : { left: 0 + 'px' }}>
                        {props.children}
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

const YEAR_LIST = () => {
    let year = (new Date()).getFullYear();
    let arrayYear: Array<string | number> = [];

    for (var i = (year + 20); i > (year - 80); i--) {
        arrayYear = [...arrayYear, i];
    }

    return arrayYear;
}

const dateStandardFormat = (day: number, month: number, year: number, monthCondition: number) => {
    let returnDateString = "";
    if (monthCondition < 0) {
        if (month - 1 < 0) {
            returnDateString = year - 1 + "-12-" + ("0" + day).slice(-2);
        } else {
            returnDateString = year - 1 + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
        }
    } else if (monthCondition > 0) {
        if (month + 1 >= MONTHS_NAME.length) {
            returnDateString = year + 1 + "-01-" + ("0" + day).slice(-2);
        } else {
            returnDateString = year + 1 + "-" + ("0" + (month + 2)).slice(-2) + "-" + ("0" + day).slice(-2);
        }
    } else {
        returnDateString = year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("0" + day).slice(-2);
    }
    return returnDateString;
}

const getMonthDetails = (month: number, year: number, isMultiple?: boolean) => {

    /**
    * getDayDetails
    * determine if the day from the calendar is from previous month or previous year
    * @param {*} args - the object element of the date from the calendar
    */
    function getDayDetails(args: any) {
        let date = args.index - args.firstDay;
        let day = args.index % 7;
        let prevMonth = args.month - 1;
        let prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }

        let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let completeDate = dateStandardFormat(_date, args.month, args.year, month);

        return {
            date: _date,
            completeDate: completeDate,
            day,
            month,
        }
    }

    /**
    * getNumberOfDays
    * determine the number of days in a month including the previous or next month that will overlap the selected month
    * @param {*} year - year
    * @param {*} month - month based on the array key
    */
    function getNumberOfDays(year: number, month: number) {
        return 40 - new Date(year, month, 40).getDate();
    }

    // Manipulate the first month data to populate all the days of the month with its details
    let firstDay = (new Date(year, month)).getDay();
    let numberOfDays = (40 - new Date(year, month, 40).getDate());
    let monthArray = [];
    let rows = 7;
    let currentDay = null;
    let index = 0;
    let cols = 6;

    // Inser the day into an Array
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month

            });


            monthArray.push(currentDay);
            index++;
        }
    }

    let returnArray = [
        {
            label: MONTHS_NAME[month] + ' ' + year,
            days: monthArray
        }
    ];

    // if the selection is multiple it will display two months
    if (isMultiple) {
        // Manipulate the second month data to populate all the days of the month with its details
        let nextMonth = (month + 1 < MONTHS_NAME.length) ? (month + 1) : 0;
        let nextYear = (month + 1 < MONTHS_NAME.length) ? year : (year + 1);
        let nextFirstDay = (new Date(nextYear, nextMonth)).getDay();
        let nextNumberOfDays = (40 - new Date(nextYear, nextMonth, 40).getDate());
        let nextMonthArray = [];
        let nextRows = 7;
        let nextCurrentDay = null;
        let nextIndex = 0;
        let nextCols = 6;

        // Inser the day into an Array
        for (let nextRow = 0; nextRow < nextRows; nextRow++) {
            for (let nextCol = 0; nextCol < nextCols; nextCol++) {

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
        returnArray = [
            ...returnArray,
            {
                label: MONTHS_NAME[nextMonth] + ' ' + nextYear,
                days: nextMonthArray
            }
        ];
    }

    return returnArray
}

const descriptiveDateFormat = (date: string, withTime?: boolean) => {
    return withTime ? datetimeFormatter(date, 'datetime') : datetimeFormatter(date, 'date');
}

const datetimeFormatter = (timestamp: string, format = "datetime") => {
    try {
        if (timestamp && (timestamp.constructor === String || timestamp.constructor === Date)) {
            let date: any = null;
            let arrayDate: Array<any> = [];
            let iosDate = null;

            if (timestamp && timestamp.constructor === String) {
                timestamp = timestamp.replace('+00', ''); //removing unnecessary gmt from backend as the time is already in ph
                arrayDate = timestamp.split(/[- :.]/);
            }
            if (arrayDate.length === 3) {
                iosDate = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2], arrayDate[3]);
            } else if (arrayDate.length >= 5) {
                iosDate = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2], arrayDate[3], arrayDate[4], arrayDate[5]);
            } else {
                iosDate = new Date(timestamp);
            }
            let currentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            date = new Date(timestamp).toLocaleString('en-US', { timeZone: currentTz }); //making the date picked as the default gmt so that the new date wont adjust by timezone
            date = new Date(date);
            // for firefox
            if (isNaN(date)) {
                let splitTimeStampBySpace = timestamp.split(' ');
                if (splitTimeStampBySpace.length === 2) {
                    if (isNaN(parseInt(splitTimeStampBySpace[0])) && splitTimeStampBySpace[1]) {
                        date = new Date(`${splitTimeStampBySpace[0]} 01, ${splitTimeStampBySpace[1]}`);
                    }
                }
            }
            if (date && date.toString() !== 'Invalid Date') {

                //get DATE
                let dayName = DAYS_NAME[isNaN(date.getDay()) ? iosDate.getDay() : date.getDay()];
                let dayDate = ("0" + (isNaN(date.getDate()) ? iosDate.getDate() : date.getDate())).slice(-2);
                let monthName = MONTHS_NAME[isNaN(date.getMonth()) ? iosDate.getMonth() : date.getMonth()];
                monthName = monthName ? monthName.slice(0, 3) : monthName;
                let year = isNaN(date.getFullYear()) ? iosDate.getFullYear() : date.getFullYear();
                let MonthNumeric = ("0" + (isNaN(date.getMonth()) ? (iosDate.getMonth() + 1) : (date.getMonth() + 1))).slice(-2);

                //get TIME
                let hours = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                let minutes = isNaN(date.getMinutes()) ? iosDate.getMinutes() : date.getMinutes();
                let seconds = isNaN(date.getSeconds()) ? iosDate.getSeconds() : date.getSeconds();
                let ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                let strTime = hours + ':' + minutes + ' ' + ampm;

                switch (format) {
                    case "date-standard":
                        return year + "-" + MonthNumeric + "-" + dayDate;
                    case "date":
                        return dayName + ", " + dayDate + " " + monthName + " " + year;
                    case "datetime":
                        // Mon, 01 Jan 2020 12:00PM
                        return dayName + ", " + dayDate + " " + monthName + " " + year + " " + strTime;
                    case "time-standard":
                        let h = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                        let hour = h < 10 ? '0' + h : h;
                        // 15:30
                        return hour + ':' + minutes;

                    default:
                        return "";
                }
            } else {
                return "Invalid Date";
            }
        } else {
            return "Invalid Date";
        }
    } catch (error) {
        return "Invalid Date";
    }
}


const Datepicker: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    // Props variable data manipulation
    let { id, placeholder, value, multiple, disabled, disabledDates, disabledDays, minDate, maxDate, dateNow, withTime } = { ...config };
    placeholder = placeholder && placeholder.constructor === String ? placeholder : "-";
    customClass = customClass ? customClass : ''

    // React Hook and Declaration
    let dateToday = new Date();
    let [datepickerPopover, setDatepickerPopover] = useState<any>(false);
    let [selectedMonth, setSelectedMonth] = useState(value && value.from && value.from.constructor === String ? (new Date(value.from)).getMonth() : dateToday.getMonth());
    let [selectedYear, setSelectedYear] = useState(value && value.from && value.from.constructor === String ? (new Date(value.from)).getFullYear() : dateToday.getFullYear());
    let [selectedDates, setSelectedDates] = useState<Array<string>>([]);

    //STATES
    const [inputTime, setInputTime] = useState({
        id: 'sampleInputTime',
        type: 'time',
        label: 'time',
        readOnly: false,
        disabled: true,
    })

    const [time, setTime] = useState('')
    /**
    * popoverRequestHandler
    * hide and show the options popover
    * @param {*} event - event
    * @param {*} action - it can be either show or hide
    */
    function popoverRequestHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLInputElement, MouseEvent> | React.MouseEvent<HTMLSpanElement, MouseEvent> | any, action: string) {
        // event.preventDefault();
        if (action === "show") {
            setDatepickerPopover(event.currentTarget);
        } else {
            setDatepickerPopover(null);
            manipulateReturnValues(event, selectedDates);
        }
    }

    /**
    * manipulateReturnValues
    * manipulate selected values from array into obj return
    * @param {*} selected - selected dates inserted in an array
    */
    function manipulateReturnValues(event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLInputElement, MouseEvent> | any, selected: Array<string>) {
        selected = withTime && value ? [value.from] : selected.sort((a, b) => ((new Date(a).getTime()) - (new Date(b).getTime())));
        time.length === 0 && setTime('00:00')
        let returnDate = null;
        if (selected.length > 0) {
            returnDate = {
                //APPEND TIME if withTime is declared
                from: withTime ? selected[0].split(' ')[0] + " " + (time.length > 0 ? time : '00:00') : selected[0],
                to: selected[1] ? selected[1] : withTime ? selected[0].split(' ')[0] + " " + (time.length > 0 ? time : '00:00') : selected[0],
            }
        } else {
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
    function datepickerNavigationHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.ChangeEvent<HTMLSelectElement> | any, action: string) {
        if (action === 'month') {
            setSelectedMonth(parseInt(event.target.value))

        } else if (action === 'year') {
            setSelectedYear(parseInt(event.target.value))
        } else if (action === 'previous') {
            if (selectedMonth - 1 < 0 && selectedYear - 1 >= YEAR_LIST()[YEAR_LIST().length - 1]) {
                setSelectedMonth(MONTHS_NAME.length - 1);
                setSelectedYear(selectedYear - 1);
            } else if (selectedMonth - 1 >= 0 && selectedYear - 1 >= YEAR_LIST()[YEAR_LIST().length - 1]) {
                setSelectedMonth(selectedMonth - 1);
            }
        } else if (action === 'next') {
            if (selectedMonth + 1 >= MONTHS_NAME.length && selectedYear + 1 <= YEAR_LIST()[0]) {
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
            } else if (selectedMonth + 1 < MONTHS_NAME.length && selectedYear + 1 <= YEAR_LIST()[0]) {
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
    function onSelectDateHandler(event: React.MouseEvent<HTMLSpanElement, MouseEvent>, date: string) {

        event.preventDefault();
        selectedDates = !withTime ? [...selectedDates, date] : [date];
        setSelectedDates(selectedDates);
        if (multiple) {
            if (selectedDates.length >= 2) {
                popoverRequestHandler(event, "hide");
            }
        } else {
            withTime && date && setInputTime((prev: any) => ({ ...prev, disabled: false }))
            !withTime && popoverRequestHandler(event, "hide");
        }
    }

    /**
    * onSelectTime
    * Handles the change when the time is selected if withTime is enabled
    * @param {*} event - event
    */
    function onSelectTime(event: React.ChangeEvent<HTMLInputElement>) {
        setTime(event.target.value)
    }

    /**
    * getValueToString
    * manipute the value or selectedDates from standard format into declarative format
    * @param {*} event - event
    * @param {*} selected - the selected date
    */
    function getValueToString(value: any, selected: Array<string>) {
        let returnManipulatedValue = "";
        if (selected.length > 0) {
            if (selected[0] && selected[1] && selected[0] !== selected[1]) {
                selected = selected.sort((a, b) => ((new Date(a).getTime()) - (new Date(b).getTime())));
                returnManipulatedValue = descriptiveDateFormat(selected[0]) + ' - ' + descriptiveDateFormat(selected[1]);
            } else {
                returnManipulatedValue = descriptiveDateFormat(selected[0]);
            }
        } else if (value) {
            if (value.from !== value.to) {
                returnManipulatedValue = descriptiveDateFormat(value.from) + ' - ' + descriptiveDateFormat(value.to);
            } else {
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
    function isSelectedDate(date: string) {
        let selected = selectedDates.sort((a, b) => ((new Date(a).getTime()) - (new Date(b).getTime())));
        let calendarDate: any = new Date(date);
        if (selected.length >= 2) {
            let selectedDate1 = new Date(selected[0]);
            let selectedDate2 = new Date(selected[1]);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate2.getTime();
        } else if (selected.length === 1) {
            let selectedDate1 = new Date(selected[0]);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate1.getTime();
        } else if (value && value.from && value.to) {
            let selectedDate1 = new Date((withTime ? value.from.split(' ')[0] : value.from));
            let selectedDate2 = new Date((withTime ? value.to.split(' ')[0] : value.to));
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate2.getTime();
        } else {
            return false;
        }
    }

    /**
    * isDisabledDate
    * determine if the days in the calendar is disabled
    * @param {*} data - calendar date data
    */
    function isDisabledDate(data: any) {
        if (data.month !== 0) {
            return true;
        } else {
            if (disabledDates && disabledDates.constructor === Array && disabledDates.length > 0 && disabledDates.includes(data.completeDate)) {
                return true;
            } else if (disabledDays && disabledDays.constructor === Array && disabledDays.length > 0 && disabledDays.map(d => d.toLowerCase()).includes(DAYS_NAME[data.day].toLowerCase())) {
                return true;
            } else if (minDate && minDate.constructor === String && (new Date(data.completeDate)).getTime() < (new Date(minDate)).getTime()) {
                return true;
            } else if (maxDate && maxDate.constructor === String && (new Date(data.completeDate)).getTime() > (new Date(maxDate)).getTime()) {
                return true;
            } else {
                return false;
            }
        }
    }


    function isDateToday(data: any) {

        if (data.completeDate !== null) {
            let newDate = null;
            let dateNowNew = new Date();
            if (dateNow !== null && dateNow !== undefined) {
                if (typeof dateNow == "string") {
                    newDate = datetimeFormatter(dateNow, 'date-standard');
                } else {
                    newDate = datetimeFormatter(dateNow.toString(), 'date-standard');
                }
            } else {
                newDate = datetimeFormatter(dateNowNew.toString(), 'date-standard');
            }

            if (newDate === data.completeDate) {
                return true;
            }
        } else {
            return false;
        }
    }

    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    let clearValuesHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
        if (event) {
            event.preventDefault();
            if (onChanged) {
                //RESET TIME AND DISABLE INPUT
                withTime && setTime('')
                withTime && setInputTime((prev: any) => ({ ...prev, disabled: true }))
                return onChanged(null);
            }

        }
    }

    return (
        <div className={'em-datepicker ' + (customClass && customClass)}>
            <div
                className={'em-datepicker-field ' + (disabled && disabled.constructor === Boolean ? 'disabled' : "")}
                {...(disabled ? { onClick: event => { event.preventDefault() } } : !value ? { onClick: event => popoverRequestHandler(event, 'show') } : { onClick: event => { event.preventDefault() } })}
            >
                {config.label && config.label != '' && <label className="em-input-label">{config.label}
                    {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                </label>}
                
                <input
                    id={id && id.constructor === String ? id : "datePickerStandardID"}
                    type="text"
                    placeholder={placeholder}
                    value={getValueToString(value, selectedDates)}
                    readOnly
                    onClick={event => popoverRequestHandler(event, 'show')}
                    disabled={disabled && disabled.constructor === Boolean ? true : false}
                />
            </div>
            {
                disabled && disabled.constructor === Boolean ? (
                    <div className='em-field-icon'>
                        {SVG_ARROWDOWN}
                    </div>
                ) : (
                    getValueToString(value, selectedDates) && getValueToString(value, selectedDates) !== "" ? (
                        <div onClick={event => clearValuesHandler(event)} className='em-field-icon'>
                            {SVG_CLOSE_GRAY}
                        </div>
                    ) : (
                        <div className='em-field-icon'>
                            {SVG_CALENDAR}
                        </div>
                    )
                )
            }
            <Popover
                id="datepickerPopover"
                open={Boolean(datepickerPopover)}
                anchorEl={datepickerPopover}
                onClose={(event: any) => popoverRequestHandler(event, 'hide')}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div className="em-datepicker-popover popover-input open-popover">
                    <div className="e-field">
                        {
                            Boolean(datepickerPopover) ? (
                                <div className={multiple && multiple.constructor === Boolean ? "em-datepopover em-datepopover-large" : "em-datepopover"}>
                                    <div className="em-datepicker-header">
                                        <button id="button-prev-month" onClick={event => datepickerNavigationHandler(event, "previous")}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2071 4.79289C13.5976 5.18342 13.5976 5.81658 13.2071 6.20711L8.91421 10.5L13.2071 14.7929C13.5976 15.1834 13.5976 15.8166 13.2071 16.2071C12.8166 16.5976 12.1834 16.5976 11.7929 16.2071L6.79289 11.2071C6.40237 10.8166 6.40237 10.1834 6.79289 9.79289L11.7929 4.79289C12.1834 4.40237 12.8166 4.40237 13.2071 4.79289Z" fill="white" />
                                            </svg>

                                        </button>
                                        <div>
                                            <select id="date-picker-select-month" value={selectedMonth} onChange={event => datepickerNavigationHandler(event, "month")}>
                                                {
                                                    MONTHS_NAME.map((item, idx) => (
                                                        <option key={"opt" + idx} value={idx}>{item}</option>
                                                    ))
                                                }
                                            </select>
                                            <select id="date-picker-select-year" value={selectedYear} onChange={event => datepickerNavigationHandler(event, "year")}>
                                                {
                                                    YEAR_LIST().map((item, idx) => (
                                                        <option key={"opt" + idx} value={item}>{item}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <button id="button-next-month" onClick={event => datepickerNavigationHandler(event, "next")}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.79289 16.2071C7.40237 15.8166 7.40237 15.1834 7.79289 14.7929L12.0858 10.5L7.79289 6.20711C7.40237 5.81658 7.40237 5.18342 7.79289 4.79289C8.18342 4.40237 8.81658 4.40237 9.20711 4.79289L14.2071 9.79289C14.5976 10.1834 14.5976 10.8166 14.2071 11.2071L9.20711 16.2071C8.81658 16.5976 8.18342 16.5976 7.79289 16.2071Z" fill="white" />
                                            </svg>

                                        </button>
                                    </div>
                                    <React.Fragment>
                                        {
                                            getMonthDetails(selectedMonth, selectedYear, multiple).map((monthDetails, monthIdx) => (
                                                <div className={multiple && multiple.constructor === Boolean ? "em-datepicker-content em-datepicker-content-multiple" : "em-datepicker-content"} key={"month-" + monthIdx}>
                                                    {
                                                        multiple && multiple.constructor === Boolean ? <h5>{monthDetails.label}</h5> : null
                                                    }
                                                    <div className="em-datepicker-week">
                                                        {
                                                            DAYS_NAME.map((item, idx) => (
                                                                <div key={idx} className="em-datepicker-day">
                                                                    {item}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="em-datepicker-days">
                                                        {
                                                            monthDetails.days.map((item, idx) => (
                                                                <div key={idx} className={'em-datepicker-day' + (isDisabledDate(item) ? ' disabled' : (isSelectedDate(item.completeDate) ? ' selected' : "")) + (isDateToday(item) ? ' em-date-today' : "")}>
                                                                    {
                                                                        isDisabledDate(item) ? (
                                                                            <span>
                                                                                {item.date}
                                                                            </span>
                                                                        ) : (
                                                                            <SpanTag value={item.date} onClick={(event) => onSelectDateHandler(event, item.completeDate)}>
                                                                                {item.date}
                                                                            </SpanTag>
                                                                        )
                                                                    }
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {
                                            //TIME
                                            withTime && !multiple ?
                                                <InputSelectionHandler
                                                    config={{ ...inputTime, value: time }}
                                                    onChanged={(e: React.ChangeEvent<HTMLInputElement>) => onSelectTime(e)}
                                                    keyPressed={(e: React.ChangeEvent<HTMLInputElement>) => popoverRequestHandler(e, 'hide')}
                                                    onClear={() => setTime('')}
                                                />
                                                : null
                                        }
                                    </React.Fragment>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </Popover>
        </div>
    );
}

export default Datepicker;
