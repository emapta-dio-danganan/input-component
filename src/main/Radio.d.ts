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
        options?: Array<object>;
    };
    customClass?: string;
    onChanged?: (event: React.FormEvent<HTMLDivElement> | React.FormEvent<HTMLSpanElement> | any) => void;
}
declare const Radio: React.FC<IProps>;
export default Radio;
