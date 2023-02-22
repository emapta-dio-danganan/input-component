import React from "react";
import '../scss/styles.scss';
// import '../scss/library/toggle.scss';

interface IProps {
    config: {
        id: string,
        type: string,
        value: string | number,
        options:Array<object>
        placeholder?: string,
        label?: string,
        maxLength?: number,
        readOnly?: boolean,
        disabled?: boolean,
       

    },
    customClass?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void,
   
}




const ToggleButton: React.FC<IProps> = ({ config, customClass, onChanged })=> {
    let { id, disabled, value, options, placeholder } = { ...config };
    const expectedId = id && id.constructor === String ? id : '';
    customClass = customClass && customClass.constructor === String ? customClass : '';

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
        <div className={'em-toggle ' + customClass}>
            <div
                className={disabled === true ? 'em-toggle-field input-disabled' : 'em-toggle-field'}
                data-testid={id && id.constructor === String ? id : 'togglebutton-default-id'}
                id={id && id.constructor === String ? id : 'togglebutton-default-id'}
            >
                {options && options.constructor === Array && options.length > 0 ?
                    options.map((listItem:any, i:number) => (
                        <div key={i} className={disabled === true ? 'is-disabled' : ''}>
                            <input
                                placeholder={placeholder && placeholder.constructor === String ? placeholder : ''}
                                type="radio"
                                id={expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i)}
                                name={expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i)}
                                value={listItem.value && listItem.value.constructor === String ? listItem.value : ''}
                                checked={listItem.value === value}
                                disabled={listItem.disabled || disabled ? true : false}
                                onChange={event => onChangeHandler(event)}
                                className={listItem.value === value ? "is-active" : ""}>
                            </input>
                            <label htmlFor={expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i)}>{listItem.label}</label>
                        </div>
                    )) : null
                }
            </div>
        </div>
    );
}

export default ToggleButton;
