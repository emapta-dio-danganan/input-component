import React from "react";
import '../scss/styles.scss';
interface IPropsDropDown {
    config: {
        id: string | keyof Object;
        type: string;
        value?: string | Array<string> | any;
        placeholder?: string;
        label?: string;
        readOnly?: boolean;
        disabled?: boolean;
        required?: boolean;
        options?: Array<string | object> | object | any;
        info?: any;
    };
    customClass?: string;
    hideClearIcon: boolean;
    isEmployeeSelection: boolean;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLInputElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined | any, val?: string | any) => void;
}
declare const Dropdown: React.FC<IPropsDropDown>;
export default Dropdown;
