import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect, Fragment } from 'react';
import SelectWithDisplay from './SelectWithDisplay';


interface ILinksConso {
    config: {
        label?: string,
        link?: string
        value?: Array<string> | string | any,
        category?: string,
    }
    disabled?: boolean,
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

const LinksConso: React.FC<ILinksConso> = ({ config, disabled, onClick }) => {
    return (
        <Fragment>

            <div className="link-item">
                {
                    config && config.label && <div className="link-item-label">
                        <a href={config.link} rel='noreferrer' target="_blank">{config.label}</a>
                    </div>
                }
                {config && config.value && <div className="link-item-number">{config.value}</div>}
                {config && config.category && <div className="link-item-category">{config.category}</div>}

            </div>
            {
                !disabled ? (
                    <button className="button outline delete" onClick={() => onClick(config.value)}>SVG_TRASH_RED</button>
                ) : null
            }
        </Fragment>
    )
}


interface ISelectWithLinks {
    config: {
        id?: number,
        type?: string,
        options?: Array<string | object> | object | any
        placeholder?: string,
        label?: string,
        value?: string | Array<string> | any,
        disabled?: boolean,
        required?: boolean,
        isMultiple?: boolean,
        customClass?: string,
        hideClearIcon: boolean,
        isEmployeeSelection: boolean,
    }
    apiReturnOptions?: Array<string | object> | object | any,
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>, data?: string) => void,
}

const SelectWithLinks: React.FunctionComponent<ISelectWithLinks> = ({ config, onChanged }) => {
    const [state, setState] = useState<any>({
        id: config.id,
        type: config.type,
        options: config.options,
        placeholder: config.placeholder,
        value: config.value,
        disabled: config.disabled,
        required: config.required,
        isMultiple: config.isMultiple,
        customClass: config.customClass,
        hideClearIcon: config.hideClearIcon,
        isEmployeeSelection: config.isEmployeeSelection,
    })
    const [apiReturnOptions, setApiReturnOptions] = useState<any>(config.options);
    const [options, setOptions] = useState<any>([])


    useEffect(() => {
        function initializeOptions() {
            const option = apiReturnOptions.map((info: any) => ({
                label: info.label,
                value: info.value
            }));

            setOptions(option);
        }
        initializeOptions();
    }, [apiReturnOptions])



    function removeDisplay(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChanged) {
            let value = config.value && config.value.constructor === Array && config.value.length > 0 ? (
                config.value.filter(item => (item !== event.target.value))
            ) : [];

            setState({ ...state, value })
            return onChanged(event);
        }
    }

    function selectDisplay(value: any) {
        if (apiReturnOptions && apiReturnOptions.constructor === Array && apiReturnOptions.length > 0) {
            let params = apiReturnOptions.find((info) => info.value === value);

            return (
                <div className="card-grid-col" id={value}>
                    <div className="card-grid-item">
                        <LinksConso
                            config={params}
                            onClick={(code: any) => removeDisplay(code)}
                            disabled={config.disabled}
                        />
                    </div>
                </div>
            )
        }
    }

    function inputChangedHandler(val: any, key: string) {
        setState((prevState: any) => ({ ...prevState, value: val.target.value }))
        return onChanged ? onChanged(val) : false;
    }

    return (
        <div>
            <div className="em-input-title"> 
                {config.label && config.label != '' && <label className="em-input-label">{config.label}
                    {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                </label>}
            </div>
            <div className="em-selectwithlink">
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

export default SelectWithLinks;