import React from 'react';
interface ISelectWithLinks {
    config: {
        id?: number;
        type?: string;
        options?: Array<string | object> | object | any;
        placeholder?: string;
        label?: string;
        value?: string | Array<string> | any;
        disabled?: boolean;
        required?: boolean;
        isMultiple?: boolean;
        customClass?: string;
        hideClearIcon: boolean;
        isEmployeeSelection: boolean;
    };
    apiReturnOptions?: Array<string | object> | object | any;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>, data?: string) => void;
}
declare const SelectWithLinks: React.FunctionComponent<ISelectWithLinks>;
export default SelectWithLinks;
