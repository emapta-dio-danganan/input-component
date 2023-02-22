import React from "react";
import '../scss/styles.scss';
interface IProps {
    config: {
        id: string;
        type: string;
        placeholder?: string;
        label?: string;
        value: string;
        maxLength?: string;
        currency?: string;
        disabled?: boolean;
        readOnly?: boolean;
        required?: boolean;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>, data?: string) => void;
    keyPressed?: (event: React.KeyboardEvent<HTMLInputElement>, data?: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>, data?: string) => void;
}
declare const Currency: React.FC<IProps>;
export default Currency;
