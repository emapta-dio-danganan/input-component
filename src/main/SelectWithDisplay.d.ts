import React from "react";
import '../scss/styles.scss';
interface ISelectWithDisplay {
    config: {
        id?: string;
        type?: string;
        value?: string | Array<string> | any;
        placeholder?: string;
        label?: string;
        readOnly?: boolean;
        disabled?: boolean;
        required?: boolean;
        options?: Array<string | object> | object | any;
        hideClearIcon?: boolean;
        isEmployeeSelection?: boolean;
        isMultiple?: boolean;
    };
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLInputElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined | any, val?: string | any) => void;
}
declare const SelectWithDisplay: React.FunctionComponent<ISelectWithDisplay>;
export default SelectWithDisplay;
