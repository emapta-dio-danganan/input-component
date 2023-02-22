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
        maxHours: string



    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void,

}

const Hours: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    let { id, type, placeholder, disabled, value, maxHours, readOnly } = { ...config }
    customClass = customClass ? customClass : ''



    try {

        maxHours = maxHours && parseInt(maxHours) < 23 ? maxHours : '23';
        placeholder = placeholder ? placeholder : '-';


        var hoursValue = '';
        if (value !== null && parseInt(value) >= 0) {
            //hoursValue = parseInt(value/60);
            if (parseInt(value) < 10) {
                hoursValue = `0${value}`
            }
            else {
                hoursValue = `${value}`
            }

        } else {
            hoursValue = '';
        }
    } catch (error) {
        console.log(error, 'error in Component Hours');
        return null;
    }

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        let hours = 0;
        if (event.target.value) {
            if (type === 'hours' && parseInt(event.target.value) <= parseInt(maxHours)) {
                hours = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
                hours = type === 'hours' && parseInt(event.target.value) <= parseInt(maxHours) ? hours : parseInt(hoursValue);
            } else {
                hours = type === 'hours' ? 0 : parseInt(hoursValue);
            }

            if (onChanged) {
                event.target.value = hours.toString();
                onChanged(event);
            }

        }
    }
    return <Fragment>
        <div className={"em-input-hours em-input " + (customClass && customClass)} data-testid="component-hours">

            <div className="em-input-field">
            {config.label && config.label != '' && <label className="em-input-label">{config.label}
                {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
            </label>}
                <input
                    type="text"
                    placeholder={placeholder}
                    min={0}
                    max={maxHours}
                    value={hoursValue}
                    readOnly={readOnly}
                    disabled={disabled ? true : false}
                    onChange={event => onChangeHandler(event)}
                />
            </div>
        </div>
    </Fragment>

}

export default Hours;
