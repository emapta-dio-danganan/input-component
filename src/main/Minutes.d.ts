import React from "react";
import '../scss/styles.scss';
interface IProps {
    config: {
        id: string;
        type: string;
        value: string;
        placeholder?: string;
        label?: string;
        readOnly?: boolean;
        disabled?: boolean;
        required?: boolean;
        maxMins: string;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Minutes: React.FC<IProps>;
export default Minutes;
