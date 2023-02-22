import React, { Fragment } from "react";
import '../scss/styles.scss';


interface IProps {
    config: {
        id: string,
        type: string,
        value: string,
        placeholder?: string,
        label?: string,
        readOnly?: boolean,
        disabled?: boolean,
        required?: boolean,
        maxMins: string



    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void,

}

const Minutes: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    let { id, type, placeholder, disabled, value, maxMins, readOnly } = { ...config }
    let minsValue = '';
    customClass = customClass ? customClass : ''

    try {
        maxMins = maxMins && parseInt(maxMins) < 59 ? maxMins : '59';
        placeholder = placeholder ? placeholder : '-';


        if (value !== null && parseInt(value) >= 0) {
            //minsValue = value%60;
            if (parseInt(value) < 10) {
                minsValue = `0${value}`
            }
            else {
                minsValue = `${value}`
            }
        } else {
            minsValue = '';
        }

    } catch (error) {
        console.error(error, 'error in Component Minutes');
        return null;
    }

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        let minutes = 0;

        if (event.target.value) {
            if (parseInt(event.target.value) <= parseInt(maxMins)) {
                minutes = event.target.value ? parseInt(event.target.value) : 0;
            }
            minutes = parseInt(event.target.value) <= parseInt(maxMins) ? minutes : parseInt(minsValue);

        } else {
            minutes = type === 'minutes' ? 0 : parseInt(minsValue);
        }
        if (onChanged) {
            event.target.value = minutes.toString();
            return onChanged(event);
        }

    }

    return <Fragment>
        <div className={"e-input-minutes em-input" + customClass} data-testid="component-minutes">
            <div className="em-input-field">
                <div className="em-input-title"> 
                    {config.label && config.label != '' && <label className="em-input-label">{config.label}
                        {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                    </label>}
                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    min={0}
                    max={maxMins}
                    value={minsValue}
                    readOnly={readOnly}
                    disabled={disabled ? true : false}
                    onChange={event => onChangeHandler(event)}
                />
            </div>
        </div>
    </Fragment>

};

export default Minutes;
