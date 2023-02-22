import React, { useState, Fragment } from "react";
import '../scss/styles.scss';


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
        options?: Array<object>


    },
    customClass?: string
    onChanged?: (event: React.FormEvent<HTMLDivElement> | React.FormEvent<HTMLSpanElement> | any) => void,

}

const Radio: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    let { id, options, type, disabled, value } = { ...config }


    /**
    * onChangeHandler
    * get the current value from the radio buttons
    * @param {*} event - event which will be used to get the changed value
    */
    function onChangeHandler(event: React.FormEvent<HTMLDivElement> | React.FormEvent<HTMLSpanElement>, key: string = '') {


        if (key === 'span') {
            const attr:string|null = event.currentTarget.getAttribute('data-value')
            let forceEvent = {target:{value:attr}}
            if (onChanged) {
                return onChanged(forceEvent);
            } else {
                console.error("No onChanged property");
            }

        }

        if (onChanged) {
            return onChanged(event);
        } else {
            console.error("No onChanged property");
        }
    }

    return (
        <Fragment>
            <div className={"em-radio " + (customClass && customClass)}  >            
                <div className="em-input-title"> 
                    {config.label && config.label != '' && <label className="em-input-label">{config.label}
                        {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                    </label>}
                </div>
                <div className="em-radio-wrapper">
                {
                    options && options.constructor === Array && options.length > 0 ? (
                        options.map((opt: any, idx) => (
                            <React.Fragment key={idx}  >
                                <div className="em-radio-field">
                                    <div className="em-radio-input">
                                        <input
                                            name={id}
                                            id={opt.value ? opt.value : ""}
                                            type={type}
                                            value={opt.value ? opt.value : ""}
                                            checked={opt.value === value}
                                            onChange={event => onChangeHandler(event)}
                                            disabled={disabled ? true : opt.disabled ? opt.disabled : false} />
                                        <span className="circle" data-value={opt.value ? opt.value : ""} onClick={event => onChangeHandler(event, 'span')}></span>
                                    </div>
                                    <label htmlFor={opt.value ? opt.value : ""}>{opt.label}</label>
                                </div>

                                {
                                    opt.hasOwnProperty('customContent') && opt.customContent != '' && <React.Fragment>{opt.customContent}</React.Fragment>

                                }
                            </React.Fragment>
                        ))
                    ) : null

                }
                </div>
            </div>
        </Fragment>
    );
}

export default Radio;