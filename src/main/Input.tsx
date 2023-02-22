import React, { Fragment } from "react";
import Info from './info'
import '../scss/styles.scss';
import { SVG_CLOCK, SVG_CLOSE_GRAY, SVG_ARROWDOWN } from '../assets/Assets';


type configInfo = {
    title: string,
    info: any,
    icon?: any
}
interface IProps {
    config: {
        id: string | keyof Object,
        type: string,
        value: string | number,
        placeholder?: string,
        label?: string,
        maxLength?: number,
        readOnly?: boolean,
        disabled?: boolean,
        required?: boolean,
        info?: configInfo | any,

    },
    allowedChar?: {
        alphabet?: boolean,
        numeric?: boolean,
        space?: boolean,
        allowedSymbols?: Array<string>
    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data?: string) => void,
    keyPressed?: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    onBlured?: (event: React.FocusEvent<HTMLInputElement, Element>) => void
    onClear?: () => void,

}


const Input: React.FC<IProps> = ({ config, allowedChar, customClass, onChanged, keyPressed, onBlured, onClear }) => {

    customClass = customClass ? customClass : ''
    let allowedTypes = [
        'text', 'number', 'password', 'submit', 'reset', 'radio', 'checkbox', 'button',
        'file', 'image', 'color', 'date', 'datetime-local', 'email', 'month', 'url', 'week',
        'search', 'tel']



    const sanitizeValue = (txt: string, props: IProps['allowedChar']) => {
        let pattern = null;
        let newTxt = txt;

        if (props && props.constructor === Object) {
            if (props.allowedSymbols && props.allowedSymbols.constructor === Array && props.allowedSymbols.length > 0) {
                pattern = `^a-zA-Z0-9`
                pattern = new RegExp(`[${pattern}${props.allowedSymbols.join('')} ]`, 'gi')
                newTxt = newTxt.replace(pattern, "");

            } else {
                pattern = `^a-zA-Z0-9`
                pattern = new RegExp(`[${pattern} ]`, 'gi')
                newTxt = newTxt.replace(pattern, "");

            }

            if (props.alphabet === false) {
                pattern = /[a-z]/gi
                newTxt = newTxt.replace(pattern, "");

            }

            if (props.numeric === false) {
                pattern = /[0-9]/
                newTxt = newTxt.replace(pattern, "");

            }

            if (props.space === false) {
                pattern = /\s/gi
                newTxt = newTxt.replace(pattern, "");

            }

        }
        return newTxt;

    }

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    let onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (config.type === 'text' && allowedChar && allowedChar.constructor === Object && Object.keys(allowedChar).length > 0) {
            event.target.value = sanitizeValue(event.target.value, allowedChar);
        }

        if (onChanged) {
            if (event.target.value && config.maxLength) {

                if (event.target.value.toString().length <= config.maxLength) {
                    return onChanged(event);
                }
            } else {
                return onChanged(event);
            }
        } else {
            console.error("No onChanged property");
        }
    }


    /**
   * onBlurHandler
   * get the event of field upon focus out
   * @param {*} event - event which will be used to get the changed value
   */
    let onBlurHandler = (event: React.FocusEvent<HTMLInputElement, Element>) => {

        if (onBlured) {
            return onBlured(event);
        } else {
            console.error("No onChanged property");
        }
    }


    /**
   * onKeypressHandler
   * get the current value from the input field
   * @param {*} event - event which will be used to get the changed value
   */
    let onKeypressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (keyPressed) {
                return keyPressed(event);
            }
        }
    }

    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    let clearValuesHandler = (event: React.MouseEvent<HTMLDivElement>): any => {

        if (event) {
            event.preventDefault();
            return onClear && onClear();
        }

    }



    return (
        <div className={"em-input " + (customClass && customClass)}>
            {
                config.type === 'time' ? (
                    <div className={'em-input-time ' + (config.disabled ? 'input-disabled' : "")} data-testid="component-input">
                        <div className="em-input-title">
                            {config.label && config.label !== '' && <label className="em-input-label">
                                {config.label}
                                {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                            </label>}
                            {config.hasOwnProperty('info') && <Info config={config.info} />}
                        </div>
                        <input
                            className="em-input-field"
                            {...config}
                            onChange={onChangeHandler}
                            onKeyPress={event => keyPressed ? onKeypressHandler(event) : null}
                        />
                        {
                            config.disabled || !config.value ? null : (
                                <div className="em-field-icon" onClick={clearValuesHandler}>
                                    {SVG_CLOSE_GRAY}
                                </div>
                            )
                        }
                        <div className="em-field-icon" onClick={clearValuesHandler}>
                            {SVG_ARROWDOWN}
                            {SVG_CLOCK}
                        </div>
                    </div>
                ) : allowedTypes.includes(config.type) ?
                    (
                        <Fragment>
                            <div className={'em-input-field ' + (config.disabled ? 'input-disabled' : "")} data-testid="component-input">
                                <div className="em-input-title">
                                    {config.label && config.label != '' && <label className="em-input-label">{config.label}
                                        {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                                    </label>}
                                    {config.hasOwnProperty('info') && <Info config={config.info} />}
                                </div>
                                <input
                                    {...config}
                                    data-testid="component-input"
                                    onChange={event => onChangeHandler(event)}
                                    onBlur={event => onBlurHandler(event)}
                                    onKeyPress={event => onKeypressHandler(event)}
                                />
                            </div>
                        </Fragment>
                    )

                    : null
            }
        </div >
    );

}

export default Input;
