import React from 'react';
interface IProps {
    config: {
        id: string;
        type: string;
        placeholder?: string;
        value: null | {
            from: string;
            to: string;
        };
        disabled?: boolean;
        disabledDates?: Array<string>;
        disabledDays?: Array<string>;
        multiple?: boolean | undefined;
        minDate?: string;
        maxDate?: string;
        dateNow?: string | any;
        label?: string;
        withTime?: boolean;
        required?: boolean;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | any, val?: string) => void;
}
declare const Datepicker: React.FC<IProps>;
export default Datepicker;
