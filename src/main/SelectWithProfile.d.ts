import React from 'react';
interface ISelectWithProfile {
    config: {
        id?: number;
        options?: Array<string | object> | object | any;
        label?: string;
        placeholder?: string;
        value?: string | Array<string> | any;
        disabled?: boolean;
        required?: boolean;
        type?: string;
        isMultiple?: boolean;
        customClass?: string;
        hideClearIcon: boolean;
        isEmployeeSelection: boolean;
    };
    apiReturnOptions?: Array<string | object> | object | any;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>, data?: string) => void;
}
declare const SelectWithProfile: React.FunctionComponent<ISelectWithProfile>;
export default SelectWithProfile;
