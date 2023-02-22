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
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<IProps>;
export default Checkbox;
