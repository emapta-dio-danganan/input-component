import React from "react";
import '../scss/styles.scss';
interface IProps {
    config: {
        id: string;
        type: string;
        value: boolean;
        placeholder?: string;
        label?: string;
        readOnly?: boolean;
        disabled?: boolean;
        required?: boolean;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Toggle: React.FC<IProps>;
export default Toggle;
