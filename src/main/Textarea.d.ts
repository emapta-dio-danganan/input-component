import React from "react";
import '../scss/styles.scss';
interface IProps {
    config: {
        id: string;
        type: string;
        value: string | number;
        placeholder?: string;
        label?: string;
        maxLength?: number;
        readOnly?: boolean;
        required?: boolean;
        disabled?: boolean;
        rows?: number;
        cols?: number;
    };
    allowedChar?: {
        alphabet?: boolean;
        numeric?: boolean;
        space?: boolean;
        allowedSymbols?: Array<string>;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const Textarea: React.FC<IProps>;
export default Textarea;
