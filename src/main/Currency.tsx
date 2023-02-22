import React, { Fragment } from "react";
import '../scss/styles.scss';


interface IProps {
    config: {
        id: string,
        type: string,
        placeholder?: string,
        label?: string,
        value: string,
        maxLength?: string,
        currency?: string,
        disabled?: boolean,
        readOnly?: boolean,
        required?: boolean,

    },
    customClass?: string,

    onChanged?: (event: React.ChangeEvent<HTMLInputElement>, data?: string) => void,
    keyPressed?: (event: React.KeyboardEvent<HTMLInputElement>, data?: string) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>, data?: string) => void,


}

const Currency: React.FC<IProps> = ({ config, customClass, onChanged, keyPressed, onBlur }) => {
    let { value, maxLength, currency, placeholder, disabled, readOnly } = { ...config }
    customClass = customClass ? customClass : '';
    currency = currency ? currency : 'PHP';
    placeholder = placeholder ? placeholder : currency;
    disabled = disabled ? disabled : false;
    value = value ? value : '';
    if (value) {
        value = value.replace(/[^0-9.]/g, "");
        let numericArray = value.split('.');
        if (numericArray.length === 1) {
            value = parseFloat(numericArray[0]).toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else if (numericArray.length === 2) {
            let wholeNumber = numericArray[0] === '' ? numericArray[0] : parseFloat(numericArray[0]).toString();
            value = wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "." + numericArray[1];
        }
    } else {
        value = '';
    }

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChanged) {
            let changedValue = event.target.value
            let numericOnly = changedValue.replace(/[^0-9.]/g, "");
            let numericArray = numericOnly.split('.');
            if (numericArray.length === 1) {
                changedValue = numericArray[0];
                event.target.value = changedValue
                if (maxLength && numericArray[0].length <= parseInt(maxLength)) {
                    return onChanged(event);
                }
            } else if (numericArray.length === 2) {
                let decimalString = (numericArray.length > 1 ? numericArray[1] : '');
                changedValue = numericArray[0] + "." + decimalString.slice(0, 2)
                if (decimalString.length <= 2) {
                    if (maxLength && numericArray[0].length <= parseInt(maxLength)) {
                        event.target.value = changedValue;
                        return onChanged(event);
                    }
                }
            }
        } else {
            console.error("No onChanged property");
        }
    }

    /**
   * onKeypressHandler
   * get the current value from the input field
   * @param {*} event - event which will be used to get the changed value
   */
    function onKeypressHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            if (keyPressed) {
                return keyPressed(event);
            }
        }
    }
    /**
 * onfocusoutHandler
 * get the current value from the input field
 * @param {*} event - event which will be used to get the changed value
 */
    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
        if (onBlur) {
            return onBlur(event);
        }
    }



    return (
        <Fragment>
            <div className="em-input-currency em-input">
                <div className={'em-input-field ' + (config.disabled ? 'input-disabled' : "")} data-testid="component-input">
                    <div className="em-input-title">
                        {config.label && config.label != '' && <label className="em-input-label">{config.label}
                            {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                        </label>}
                    </div>
                    <span className="currency"> {currency} </span>
                    <div className="em-input">
                        <input
                            type="text"
                            value={value}
                            placeholder={placeholder}
                            disabled={disabled}
                            readOnly={readOnly}
                            onChange={event => onChangeHandler(event)}
                            onKeyPress={event => onKeypressHandler(event)}
                            onBlur={event => onBlurHandler(event)}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Currency;
