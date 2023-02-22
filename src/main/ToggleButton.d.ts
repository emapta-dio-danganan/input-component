import React from "react";
import '../scss/styles.scss';
interface IProps {
    config: {
        id: string;
        type: string;
        value: string | number;
        options: Array<object>;
        placeholder?: string;
        label?: string;
        maxLength?: number;
        readOnly?: boolean;
        disabled?: boolean;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const ToggleButton: React.FC<IProps>;
export default ToggleButton;
