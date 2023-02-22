import React from "react";
import '../scss/styles.scss';
declare type configInfo = {
    title: string;
    info: any;
    icon?: any;
};
interface IProps {
    config: {
        id: string | keyof Object;
        type: string;
        value: string | number;
        placeholder?: string;
        label?: string;
        maxLength?: number;
        readOnly?: boolean;
        disabled?: boolean;
        required?: boolean;
        info?: configInfo | any;
    };
    allowedChar?: {
        alphabet?: boolean;
        numeric?: boolean;
        space?: boolean;
        allowedSymbols?: Array<string>;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data?: string) => void;
    keyPressed?: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onBlured?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onClear?: () => void;
}
declare const Input: React.FC<IProps>;
export default Input;
