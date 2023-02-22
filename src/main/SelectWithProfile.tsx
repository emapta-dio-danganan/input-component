import React, { useState, useEffect, Fragment } from 'react';
import SelectWithDisplay from './SelectWithDisplay';
import { SVG_TRASH_RED } from '../assets/Assets.js';


interface IProfileConso {
    config: {
        employeeName?: string,
        initials?: string,
        employeePosition?: string,
        employeeEmail?: string,
        employeeCode?: string,
        bucketCode: string,
        img?: string
    },
    onClick: any
    disabled?: boolean
}

const ProfileConso: React.FC<IProfileConso> = ({ config, onClick, disabled }) => {
    const profImgURL = "https://storage.googleapis.com/hrispublicbucket/";
    const IMG_URL = profImgURL + config.employeeCode + '/' + config.bucketCode + '/PROFILE/' + config.img;
    const IMGE_PRFILE = config.img && config.img.constructor === String ? <img src={IMG_URL} alt='sample img' /> : config.initials;

    return (
        <React.Fragment>
            <div className="em-profile-item">
                <div className="em-thumb thumb-md" id="thumb-pic">{IMGE_PRFILE}</div>
                <div className="em-profile-name">
                    {
                        <h6 id='name-text'>{config.employeeName}</h6>
                    }
                    {
                        <span>{config.employeePosition}</span>
                    }
                    {
                        <span>{config.employeeEmail}</span>
                    }
                </div>
            </div>
            {
                !disabled ? (
                    <button
                        className="em-btn-delete"
                        onClick={() => onClick(config.employeeCode)}
                    >
                        {SVG_TRASH_RED}
                    </button>
                ) : null
            }
        </React.Fragment>
    );
}

interface ISelectWithProfile {
    config: {
        id?: number,
        options?: Array<string | object> | object | any
        label?: string,
        placeholder?: string,
        value?: string | Array<string> | any,
        disabled?: boolean
        required?: boolean
        type?: string,
        isMultiple?: boolean,
        customClass?: string,
        hideClearIcon: boolean,
        isEmployeeSelection: boolean
    }
    apiReturnOptions?: Array<string | object> | object | any,
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>, data?: string) => void,
}

const SelectWithProfile: React.FunctionComponent<ISelectWithProfile> = ({ config, onChanged }) => {
    const [state, setState] = useState<any>({
        id: config.id,
        options: [],
        placeholder: config.placeholder,
        value: config.value,
        disabled: config.disabled,
        required: config.required,
        type: config.type,
        isMultiple: config.isMultiple,
        customClass: config.customClass,
        hideClearIcon: config.hideClearIcon,
        isEmployeeSelection: config.isEmployeeSelection,
    })
    const [apiReturnOptions, setApiReturnOptions] = useState<any>(config.options);

    useEffect(() => {
        function initializeOptions() {
            const option = apiReturnOptions.map((info: any) => ({
                label: info.employee_name,
                value: info.employee_code
            }));

            setState((prevState: any) => ({ ...prevState, options: option }))
        }

        initializeOptions();
    }, [apiReturnOptions])

    function removeDisplay(val: any) {
        let value = config.value && config.value.constructor === Array && config.value.length > 0 ? (
            config.value.filter(item => (item !== val))
        ) : [];

        setState({ ...state, value })
        return onChanged && onChanged(val);
    }

    function selectDisplay(value: any) {
        if (apiReturnOptions && apiReturnOptions.constructor === Array && apiReturnOptions.length > 0) {
            let talent = apiReturnOptions.find((info) => info.employee_code === value);

            if (talent) {
                let profile = {
                    employeeName: talent.employee_name,
                    initials: '',
                    employeePosition: talent.employee_position,
                    employeeEmail: talent.employee_email,
                    employeeCode: talent.employee_code,
                    bucketCode: talent.employee_bucket_code,
                    img: talent.employee_profile_pic
                }
                return (
                    <div className="em-select-profile" id={value}>
                        <ProfileConso
                            config={profile}
                            onClick={(code: any) => removeDisplay(code)}
                            disabled={state.disabled}
                        />
                    </div>
                )
            }
        }
    }

    function inputChangedHandler(val: any, key: string) {
        if (state.type === 'multi-select') {
            return onChanged && onChanged(val)
        }
        setState((prevState: any) => ({ ...prevState, value: val.target.value }))
    }


    return (
        <div>
            <div className="em-input-title">                
              {config.label && config.label != '' && <label className="em-input-label">{config.label}
                {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                </label>}
            </div>
            <div className="em-selectwithprofile">
                <SelectWithDisplay
                    config={state}
                    onChanged={(val: any) => inputChangedHandler(val, "selectWithProfile")}
                />
            </div>
            {
                config.value && config.value.constructor === Array && config.value.length > 0 ? (
                    config.value.map((item, idx) => (
                        <Fragment key={idx}>
                            {selectDisplay(item)}
                        </Fragment>
                    ))
                ) : null
            }
        </div>

    )
};

export default SelectWithProfile;
