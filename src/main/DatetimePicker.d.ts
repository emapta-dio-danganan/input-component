import React from 'react';
interface IDatetimePickerProps {
    config: {
        id: string;
        type: string;
        value: string | Date;
        placeholder?: string;
        label?: string;
        readOnly?: boolean;
        disabled?: boolean;
        required?: boolean;
        maxHours: string;
        maxMins: string;
        disabledDates?: Array<string>;
        disabledDays?: Array<string>;
    };
    customClass?: string;
    onChanged?: (event: Date) => void;
}
declare const DatetimePicker: React.FunctionComponent<IDatetimePickerProps>;
export default DatetimePicker;
