import React from "react";
import '../scss/styles.scss';
// import '../scss/library/textarea.scss';


interface IProps {
    config: {
        id: string,
        type: string,
        value: string | number,
        placeholder?: string,
        label?: string,
        maxLength?: number,
        readOnly?: boolean,
        required?: boolean,
        disabled?: boolean,
        rows?: number,
        cols?: number,


    },
    allowedChar?: {
        alphabet?: boolean,
        numeric?: boolean,
        space?: boolean,
        allowedSymbols?: Array<string>
    },

    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,

}


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
            pattern = /[0-9]/gi
            newTxt = newTxt.replace(pattern, "");

        }

        if (props.space === false) {
            pattern = /\s/gi
            newTxt = newTxt.replace(pattern, "");

        }

    }
    return newTxt;

}



const Textarea: React.FC<IProps> = ({ config, allowedChar, customClass, onChanged }) => {

    customClass = customClass ? customClass : ''

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    let onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        if (allowedChar && allowedChar.constructor === Object && Object.keys(allowedChar).length > 0) {
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




    return (
        <div className={'em-input ' + customClass}>
            <div
                className={config.disabled ? 'input-disabled' : ''}
                data-testid={config.id && config.id.constructor === String ? config.id : 'textarea-default-id'}
                id={config.id && config.id.constructor === String ? config.id : 'textarea-default-id'}>

                <div className="em-input-title">
                    {config.label && config.label != '' && <label className="em-input-label">{config.label}
                        {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                    </label>}
                </div>

                <textarea
                    className="em-textarea-field" {...config}
                    onChange={onChangeHandler} />
            </div>
        </div>
    );
}

export default Textarea;
