import React, { Fragment } from "react";
import { parse } from "url";
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
        maxHours?: string | undefined,
        maxMins?: string | undefined

    },

    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void,

}

const HoursMins: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    let { id, value, placeholder, disabled, readOnly, maxHours, maxMins } = { ...config };
    customClass = customClass ? customClass : ''

    if (!config.maxHours) {
        maxHours = '23';

    } else {
        maxHours = maxHours && parseInt(maxHours) < 23 ? maxHours : '23';
    }

    if (!config.maxMins) {
        maxMins = '59';

    }

    maxMins = maxMins && parseInt(maxMins) < 59 ? maxMins : '59';
    placeholder = placeholder ? placeholder : '';

    let hoursValue = '0';
    let minsValue = '0';


    if (value) {
        hoursValue = Math.trunc((parseInt(value) / 60)).toString();
        minsValue = (parseInt(value) % 60).toString();

        if (parseInt(hoursValue) < 10) {
            hoursValue = `0${hoursValue}`
        }
        if (parseInt(minsValue) < 10) {
            minsValue = `0${minsValue}`
        }
    } else {
        hoursValue = '00';
        minsValue = '00';
    }



    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>, type: string) {
        let hours = 0;
        let minutes = 0;
        if (event.target.value) {
            if (type === 'hours' && maxHours && parseInt(event.target.value) <= parseInt(maxHours)) {

                hours = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            } else if (type === 'minutes' && maxMins && parseInt(event.target.value) <= parseInt(maxMins)) {
                minutes = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            }
            hours = type === 'hours' && maxHours && parseInt(event.target.value) <= parseInt(maxHours) ? hours : parseInt(hoursValue);
            minutes = type === 'minutes' && maxMins && parseInt(event.target.value) <= parseInt(maxMins) ? minutes : parseInt(minsValue);
        } else {
            hours = type === 'hours' ? 0 : parseInt(hoursValue);
            minutes = type === 'minutes' ? 0 : parseInt(minsValue);
        }
        let totalMinutes = (hours * 60) + minutes;

        if (onChanged) {
            event.target.value = totalMinutes.toString();
            onChanged(event)
        }


    }

    return (
        <Fragment>
            <div
                className={disabled === true ?
                    'em-input-hoursmins field input-hours input-disabled em-input' + customClass
                    : 'em-input-hoursmins field input-hours em-input' + customClass
                }
                data-testid={id && id.constructor === String ? id : 'hoursMins-default-id'}
                id={id && id.constructor === String ? id : 'hoursMins-default-id'}
            >
                <div className="em-input-title"> 
                    {config.label && config.label != '' && <label className="em-input-label">{config.label}
                        {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                    </label>}
                </div>
                <div className="em-input-field">

                    <input
                        type="text"
                        placeholder={placeholder}
                        min={0}
                        max={maxHours}
                        value={hoursValue}
                        disabled={disabled ? true : false}
                        readOnly={readOnly ? true : false}
                        onChange={event => onChangeHandler(event, 'hours')}
                    />
                    <span>:</span>
                    <input
                        type="text"
                        placeholder={placeholder}
                        min={0}
                        max={maxHours}
                        value={minsValue}
                        disabled={disabled ? true : false}
                        readOnly={readOnly ? true : false}
                        onChange={event => onChangeHandler(event, 'minutes')}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default HoursMins;
