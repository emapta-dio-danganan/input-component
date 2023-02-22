import React, { useEffect } from "react";
import '../scss/styles.scss';
// import '../scss/library/switch-toggle.scss';

interface IProps {
    config: {
        id: string,
        type: string,
        value: boolean,
        placeholder?: string,
        label?: string,
        readOnly?: boolean,
        disabled?: boolean,
        required?: boolean,


    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void,

}

const Toggle: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    let { id, disabled, value, label } = { ...config };

    useEffect(()=>{

    }, [value])

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    let onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChanged) {
            return onChanged(event);
        } else {
            console.error("No onChanged property");
        }
    }

    return (
        <div className={'em-switch-toggle ' + (customClass && customClass)}>

            <div className="em-input-title">
                {config.label && config.label != '' && <label className="em-input-label">{config.label}
                    {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                </label>}
            </div>
            <div className="em-switch-field">
                <div className="em-switch-input">

                    <input
                        id={id ? id : 'standardToggleID'}
                        type={"checkbox"}
                        value={''}
                        checked={value ? true : false}
                        disabled={disabled ? true : false}
                        onChange={event => onChangeHandler(event)} />
                    <span className="em-slider"></span>
                    <label htmlFor={id ? id : 'standardToggleID'}></label>
                </div>

            </div>
        </div>
    );
}

export default Toggle;
