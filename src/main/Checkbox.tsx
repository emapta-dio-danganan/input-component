import React from "react";
import '../scss/styles.scss';
// import '../scss/library/checkbox.scss';

interface IProps {
    config: {
        id: string,
        type: string,
        value: boolean,
        placeholder?: string,
        label?: string,
        readOnly?: boolean,
        disabled?: boolean,


    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void,

}




const Checkbox: React.FC<IProps> = ({ config, customClass, onChanged }) => {
    let { id, type, disabled, value, label } = { ...config };



    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChanged) {
            return onChanged(event);
        } else {
            console.error("No onChanged property");
        }
    }


    return (
        <div className={'em-check ' + customClass}>
            <div className="em-check-field">
                <div className="em-check-input">
                    <input
                        id={id ? id : 'standardCheckboxID'}
                        type={type}
                        checked={value}
                        disabled={disabled ? true : false}
                        onChange={event => onChangeHandler(event)} />
                    <label htmlFor={id ? id : 'standardCheckboxID'}></label>
                </div>
                <span>{label}</span>
            </div>
        </div>
    );
}

export default Checkbox;
