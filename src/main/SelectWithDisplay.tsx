import React, { useState, Fragment } from "react";
import '../scss/styles.scss';
import { SVG_CLOSE_GRAY, SVG_ARROWDOWN } from '../assets/Assets';

interface IPropsPopover{
    id:String,
    className:String
    open: Boolean,
    origin?:String,
    onClick:(event:React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}


const Popover: React.FC<IPropsPopover> = ({ open, origin,  children, onClick }) => {
    return (
        <Fragment>
            {
                open &&
                <Fragment>
                    <div className="em-overlay" onClick={e=>onClick(e)}>
                    </div>
                    <div className="em-popover" style={origin !== undefined && origin === "right" ? { right: 200 + 'px' } : { left: 0 + 'px' }}>
                        {children}
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

interface ISelectWithDisplay {
    config: {
        id?: string
        type?: string,
        value?: string | Array<string> | any,
        placeholder?: string,
        label?: string,
        readOnly?: boolean,
        disabled?: boolean,
        required?: boolean,
        options?: Array<string | object> | object | any
        hideClearIcon?: boolean,
        isEmployeeSelection?: boolean,
        isMultiple?: boolean
    },
    customClass?: string,
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> 
        | React.MouseEvent<HTMLDivElement, MouseEvent> 
        | React.MouseEvent<HTMLInputElement, MouseEvent> 
        | React.KeyboardEvent<HTMLInputElement>
        | undefined 
        | any, val?: string | any) => void,

}


const SelectWithDisplay: React.FunctionComponent<ISelectWithDisplay> = ({ config, customClass, onChanged }) => {
    let { disabled, options, type, value, placeholder, id, isEmployeeSelection, hideClearIcon, isMultiple } = config
    customClass = customClass ? customClass : ''

    // React Hook
    let [dropdownPopover, setDropdownPopover] = useState<Boolean>(false);
    let [optionsArray, setOptionsArray] = useState<any>(options ? options : []);
    let [selectTemporaryValue, setSelectTemporaryValue] = useState<string>("");
    let [keyOption, setKeyOption] = useState<any>(null);
    let [objectKeyOption, setObjectKeyOption] = useState<any>(null);
    

    // Dropdown Config Variable
    let dropdownClass = disabled && disabled.constructor === Boolean ? 'em-input-field input-disabled' : 'em-input-field';
   
    let multiSelectValue = type === 'multi-select' ? (
        value && value.constructor === Array && value.length > 0 ? (
            getSelectInputValue(value)
        ) : ''
    ) : '';

    const selectedValue = value && (value.constructor === String || value.constructor === Number) && value !== "" ? (
        getSelectInputValue(value)
    ) : value && value.constructor === Array && value.length > 0 ? (
        getSelectInputValue(value)
    ) : placeholder && placeholder.constructor === String ? placeholder : '-';

    

    /**
    * popoverRequestHandler
    * hide and show the options popover
    * @param {*} e - event
    * @param {*} action - it can be either on-focus or on-blur
    */
    function popoverRequestHandler(e: React.KeyboardEvent<HTMLInputElement> 
                                    | React.MouseEvent<HTMLOptionElement, MouseEvent> 
                                    | React.FocusEvent<HTMLInputElement, Element> 
                                    | React.MouseEvent<HTMLInputElement, MouseEvent> 
                                    | React.MouseEvent<HTMLOptionElement, MouseEvent> 
                                    | React.MouseEvent<HTMLDivElement, MouseEvent>
                                    | React.FocusEvent<HTMLInputElement, HTMLDivElement>
                                    | any, action: string) {
        if (action === 'on-focus') {
            type === 'select' ? setOptionsArray(options) : filterOptions(selectTemporaryValue, value);
            setDropdownPopover(e.currentTarget)
            setKeyOption(null);
            setObjectKeyOption(null);
        } else {
            setDropdownPopover(false);
            setSelectTemporaryValue("");
        }
    }

    /**
    * optionSelectionHandler
    * manipulate the selected options
    * @param {*} e - event
    * @param {*} opt - selected option from the list
    * return Object/Array - the selected manipulated values from the list
    */
    function optionSelectionHandler(e: React.MouseEvent<HTMLInputElement, MouseEvent> 
                                        | React.KeyboardEvent<HTMLInputElement> 
                                        | React.MouseEvent<HTMLDivElement, MouseEvent>
                                        | React.MouseEvent<HTMLOptionElement, MouseEvent>
                                        | any, opt: any) {
      

        if (type && type === 'select') {
            popoverRequestHandler(e, 'on-blur');
            return onChanged ? onChanged(e, opt.value) : false;
        } else if (type && type === 'multi-select') {
            let valueCopy:any = [];
            if(isMultiple){
                valueCopy = selectedOptions([...value]);
                if (opt === 'select-all') {
                    let notSelectedOptions = [];
                    if (optionsArray.constructor === Array) {
                        notSelectedOptions = optionsArray.filter(item => {
                            return valueCopy.indexOf(item) < 0;
                        });
                        if (notSelectedOptions.length > 0) {
                            valueCopy = [...valueCopy, ...notSelectedOptions];
                        } else {
                            valueCopy = optionsArray.filter(item => {
                                return valueCopy.indexOf(item) < -1;
                            });
                        }
                    } else if (optionsArray.constructor === Object) {
                        let mergeOptions:Array<object> = [];
                        Object.values(options).map((optval:any) => {
                            mergeOptions = [...mergeOptions, ...optval.options];
                            return optval;
                        });
                        notSelectedOptions = mergeOptions.filter(item => {
                            return valueCopy.indexOf(item) < 0;
                        });
                        if (notSelectedOptions.length > 0) {
                            valueCopy = [...valueCopy, ...notSelectedOptions];
                        } else {
                            valueCopy = mergeOptions.filter(item => {
                                return valueCopy.indexOf(item) < -1;
                            });
                        }
                    }
                } else {
                    let optIdx = valueCopy.indexOf(opt);
                    if (optIdx >= 0) {
                        valueCopy.splice(optIdx, 1);
                    } else {
                        valueCopy = [...valueCopy, opt];
                    }
                }
                valueCopy = valueCopy.map((item: any) => {
                    return item.value;
                });
                let filteredOptions = [...optionsArray].filter(item => (!valueCopy.includes(item.value)));
                if(filteredOptions.length === 0){
                    popoverRequestHandler(e, 'on-blur');
                }
            } else {
                valueCopy.push(opt.value);
                popoverRequestHandler(e, 'on-blur');
            }
            filterOptions(selectTemporaryValue, valueCopy);
            return onChanged ? onChanged(valueCopy) : false;
        }
    }

    /**
    * inputChangedHandler
    * get the current value from the input text field
    * @param {*} e - event which will be used to get the changed value
    */
    function inputChangedHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setKeyOption(null);
        setObjectKeyOption(null);
        setSelectTemporaryValue(e.target.value);
        filterOptions(e.target.value, value);
    }

    /**
    * getSelectInputValue
    * manipulate the selected multiple values into string
    * @param {*} val - multi-select selected value
    * return String - the converted string from multi-select array values
    */
    function getSelectInputValue (val: Array<string> | string[] | any){
        if (type === 'multi-select' && val.constructor === Array) {
            let selectedLabels = selectedOptions(val);
            if (val.length < 6) {
                selectedLabels = selectedLabels.map((item:any) => {
                    return item.label
                });
            } else {
                selectedLabels = [val.length + (isEmployeeSelection ? ' employees' : ' Selected Item(s)')];
            }

            return selectedLabels.join(', ');
        } else if (type === 'select' && (val.constructor === String || val.constructor === Number)) {
            let optArray= selectedOptions(val);
            return optArray.length > 0    ? (optArray[0] as any).label : val.toString();
        } else {
            return '';
        }
    }


    /**
    * selectedOptions
    * get the selected options from the values given
    * @param {*} val - values selected
    * return String - converted values into string
    */
    function selectedOptions (val: string[] | number| any) {
        var selectedOptionValue:Array<string | object> = [];
        if (options && options.constructor === Array) {
            selectedOptionValue = options.filter((item:any) => {
                return (val && val.constructor === Array && val.indexOf(item.value) > -1) || item.value === val;
            });
        } else if (options && options.constructor === Object) {
            let mergeOptions:Array<object> = [];
            Object.values(options).map((optval:any) => {
                mergeOptions = [...mergeOptions, ...optval.options];
                return optval;
            });
            selectedOptionValue = mergeOptions.filter((item:any) => {
                return (val && val.constructor === Array && val.indexOf(item.value) > -1) || item.value === val;
            });
        }
        return selectedOptionValue;
    }

    /**
    * filterOptions (for multi-select only)
    * filter the options to search specific values
    * @param {*} search - type value from the input text field
    * @param {*} values - selected values of multi-select
    */

     function filterOptions(search: string, values: any) {
        if (type === 'multi-select') {
            if (optionsArray && optionsArray.constructor === Array) {
                let selectedOptionsVariable = selectedOptions(values);
                optionsArray = options.filter((item:any) => {
                    return values.indexOf(item.value) < 0 && item.label.toLowerCase().search(search.toLowerCase()) > -1;
                });
                values = selectedOptionsVariable.filter((item:any) => {
                    return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                })
                setOptionsArray([...optionsArray]);
            } else if (optionsArray && optionsArray.constructor === Object) {
                let optionsArrayCopy:{[index: string]:any} = {};
                let selectedOptionsVariable = selectedOptions(values);
                if (selectedOptionsVariable.length > 0) {
                    selectedOptionsVariable = selectedOptionsVariable.filter((item:any) => {
                        return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                    })
                    if (selectedOptionsVariable.length > 0) {
                        optionsArrayCopy['selected-values'] = { label: 'Selected', options: selectedOptionsVariable }
                    }
                }
                Object.keys(options).map((optgroup:any) => {
                    let filterOptionsArray = [];
                    if (options[optgroup].label.toLowerCase().search(search.toLowerCase()) > -1) {
                        filterOptionsArray = options[optgroup].options.filter((item:any) => {
                            return values.indexOf(item.value) < 0;
                        });
                    } else {
                        filterOptionsArray = options[optgroup].options.filter((item:any) => {
                            return values.indexOf(item.value) < 0 && item.label.toLowerCase().search(search.toLowerCase()) > -1;
                        });
                    }
                    if (filterOptionsArray.length > 0) {
                        optionsArrayCopy[optgroup] = { label: options[optgroup].label, options: filterOptionsArray };
                    }
                    return optgroup
                });
                setOptionsArray(optionsArrayCopy);
            }
        } else {
            if (optionsArray && optionsArray.constructor === Array) {
                optionsArray = options.filter((item:any) => {
                    return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                });
                setOptionsArray([...optionsArray]);
            } else if (optionsArray && optionsArray.constructor === Object) {
                let optionsArrayCopy:{[index: string]:any} = {};
                Object.keys(options).map((optgroup:any) => {
                    if (options[optgroup].label.toLowerCase().search(search.toLowerCase()) > -1) {
                        optionsArrayCopy[optgroup] = { ...options[optgroup] };
                    } else {
                        let filterOptionsArray = options[optgroup].options.filter((item:any) => {
                            return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                        });
                        if (filterOptionsArray.length > 0) {
                            optionsArrayCopy[optgroup] = { label: options[optgroup].label, options: filterOptionsArray };
                        }
                    }
                    return optgroup
                });
                setOptionsArray(optionsArrayCopy);
            }
        }
    }

    /**
    * handleCheckedOptions
    * determine if the item from the options were selected
    * @param {*} opt - item from the options
    * return Boolean - selected/not
    */
    function handleCheckedOptions(opt: any): boolean {
        if (opt === 'select-all') {
            var notSelectedOptions = null;
            if (value && value.constructor === Array) {
                if (optionsArray.constructor === Array) {
                    notSelectedOptions = optionsArray.filter((item:any) => {
                        return value.indexOf(item.value) < 0;
                    });
                } else if (optionsArray.constructor === Object) {
                    let mergeOptions:Array<string> = [];
                    Object.values(optionsArray).map((optval:any) => {
                        mergeOptions = [...mergeOptions, ...optval.options];
                        return optval;
                    });
                    notSelectedOptions = mergeOptions.filter((item:any) => {
                        return value.indexOf(item.value) < 0;
                    });
                }
            }
            return notSelectedOptions && notSelectedOptions.length === 0 ? true : false;
        } else {
            return value && value.constructor === Array && value.filter((val:any) => (opt.value === val)).length > 0 ? true : false;
        }
    }


    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (Boolean(dropdownPopover)) {
            if (optionsArray && optionsArray.constructor === Array && optionsArray.length > 0) {
                if (event.key === 'ArrowDown') {
                    if (keyOption === null) {
                        setKeyOption(0);
                    } else {
                        let updatedKey = (keyOption + 1) >= optionsArray.length ? (optionsArray.length - 1) : keyOption + 1;
                        setKeyOption(updatedKey);
                    }
                } else if (event.key === 'ArrowUp') {
                    if (keyOption === null) {
                        setKeyOption(0);
                    } else {
                        let updatedKey = keyOption > 0 ? (keyOption - 1) : 0;
                        setKeyOption(updatedKey);
                    }
                } else if (event.key === 'Enter') {
                    if (keyOption !== null && optionsArray[keyOption]) {
                        optionSelectionHandler(event, optionsArray[keyOption]);
                    }
                }
            } else if (optionsArray && optionsArray.constructor === Object && Object.keys(optionsArray).length > 0) {
                let optionsKeyArray = Object.keys(optionsArray);
                if (event.key === 'ArrowDown') {
                    if (keyOption === null || objectKeyOption === null) {
                        setKeyOption(0);
                        setObjectKeyOption(0);
                    } else {
                        if (optionsArray[optionsKeyArray[objectKeyOption]].options.length <= keyOption + 1) {
                            if (objectKeyOption + 1 < optionsKeyArray.length) {
                                setKeyOption(0);
                                setObjectKeyOption(objectKeyOption + 1);
                            }
                        } else {
                            setKeyOption(keyOption + 1)
                        }
                    }
                } else if (event.key === 'ArrowUp') {
                    if (keyOption === null || objectKeyOption === null) {
                        setKeyOption(0);
                        setObjectKeyOption(0);
                    } else {
                        if (keyOption > 0) {
                            setKeyOption(keyOption - 1);
                        } else {
                            if (objectKeyOption > 0) {
                                let updatedKey = optionsArray[optionsKeyArray[objectKeyOption - 1]].options.length - 1;
                                setKeyOption(updatedKey);
                                setObjectKeyOption(objectKeyOption - 1);
                            }
                        }
                    }
                } else if (event.key === 'Enter') {
                    if (keyOption !== null && objectKeyOption !== null && optionsArray[optionsKeyArray[objectKeyOption]].options[keyOption]) {
                        optionSelectionHandler(event, optionsArray[optionsKeyArray[objectKeyOption]].options[keyOption]);
                    }
                }
            }
        } else {
            if (event.key === 'Enter' || event.key === 'ArrowDown') {
                popoverRequestHandler(event, 'on-focus')
            }
        }
    }

    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    const clearValuesHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>| any):any=> {
        event && event.preventDefault();
        return onChanged && onChanged(event);
    }

    return (
        <div className={'em-select ' + customClass}>
            <div className={dropdownClass} id={id && id.constructor === String ? id : 'select-default-id'} data-testid={id && id.constructor === String ? id : 'select-default-id'}>
            
            <div className="em-input-title"> 
                {config.label && config.label != '' && <label className="em-input-label">{config.label}
                    {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
                </label>}
            </div>
            
            {
                    type === 'select' ? (
                        <input
                            className="em-select-input"
                            data-testid={id && id.constructor === String ? `select-input-${id}` : 'select-input-default-id'}
                            id={id && id.constructor === String ? `${id}-select-input-default-id` : "select-input-default-id"}
                            type="text"
                            onFocus={event => popoverRequestHandler(event, 'on-focus')}
                            onClick={event => popoverRequestHandler(event, 'on-focus')}
                            onChange={event => inputChangedHandler(event)}
                            value={selectTemporaryValue}
                            placeholder={selectedValue}
                            autoComplete={'off'}
                            disabled={disabled ? disabled : false}
                            onKeyDown={event => handleKeyPress(event)} />
                    ) : (
                            <input
                                className="em-select-input"
                                data-testid={id && id.constructor === String ? `${id}-multi-select-input` : "multi-select-input-default-id"}
                                id={id && id.constructor === String ? `${id}-multi-select-input-default-id` : "multi-select-input-default-id"}
                                type="text"
                                autoComplete={'off'}
                                onClick={event => popoverRequestHandler(event, 'on-focus')}
                                placeholder={placeholder}
                                value={""}
                                disabled={disabled ? disabled : false}
                                readOnly />
                        )

                }

                {
                    type === 'select' ? (
                        disabled ? (
                            <div data-testid={'dropdown-icon'} className="em-input-icon">
                                {SVG_ARROWDOWN}
                            </div>
                        ) : (
                                value && value !== "" && !hideClearIcon ? (
                                    <div data-testid={'clear-icon'} onClick={event => clearValuesHandler(event)} className='em-field-icon'>
                                        {SVG_CLOSE_GRAY}
                                    </div>                                    
                                ) : (
                                        <div data-testid={'dropdown-icon'} className="em-field-icon" onClick={event => popoverRequestHandler(event, 'on-focus')}>
                                            {SVG_CLOSE_GRAY}
                                        </div>
                                    )
                            )
                    ) : null
                }
            </div>
            <Popover 
                id="select-popover" 
                className={Boolean(dropdownPopover) ? 'open-popover' : ''}
                open={Boolean(dropdownPopover)} 
                onClick={event => popoverRequestHandler(event, 'on-blur')}
            >
                <div className="em-select-popover">
                    {
                        type === 'multi-select' ? (
                            <div className="em-select-search  e-input">
                                <input
                                    id="multi-select-input-search"
                                    type="text"
                                    autoComplete={'off'}
                                    onFocus={event => popoverRequestHandler(event, 'on-focus')}
                                    onChange={event => inputChangedHandler(event)}
                                    placeholder={"Search"}
                                    value={selectTemporaryValue}
                                    disabled={disabled ? disabled : false} />
                            </div>
                        ) : null
                    }
                    {
                        optionsArray && optionsArray.constructor === Array && optionsArray.length > 0 ? (
                            // Default array display of options
                            <Fragment>
                                {
                                    type === 'select' ? (
                                        optionsArray.map((opt, idx) => (
                                            <option className={keyOption === idx ? 'is-highlighted' : ''} key={idx} onClick={event => optionSelectionHandler(event, opt)}>
                                                {opt.label}
                                            </option>
                                        ))
                                    ) : type === 'multi-select' ? (
                                        <Fragment>
                                            <div className="em-select-checklist">
                                                {
                                                    optionsArray.map((opt, idx) => (
                                                        <div className="em-checklist-item" id='option-div' data-testid="multi-select-option-div" key={idx} onClick={event => optionSelectionHandler(event, opt)}>
                                                            {/* <input type="checkbox" checked={handleCheckedOptions(opt)} id={opt.value} readOnly /> */}
                                                            <label htmlFor=""></label>
                                                            <span>{opt.label}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </Fragment>
                                    ) : <span>No options</span>
                                }
                            </Fragment>
                        ) : optionsArray && optionsArray.constructor === Object && Object.keys(optionsArray).length > 0 ? (
                            // Display of options when grouped (*its only applicable on select type)
                            <Fragment>
                                {
                                    type === 'select' ? (
                                        Object.keys(optionsArray).map((id, grpIdx) => (
                                            <optgroup key={id} label={optionsArray[id].label ? optionsArray[id].label : 'Invalid Group Label'}>
                                                {
                                                    optionsArray[id].options && optionsArray[id].options.constructor === Array && optionsArray[id].options.length > 0 ? (
                                                        optionsArray[id].options.map((opt:any, idx:any) => (
                                                            <option key={idx} className={(grpIdx === objectKeyOption && keyOption === idx) ? 'is-highlighted' : ''} onClick={event => optionSelectionHandler(event, opt)}>
                                                                {opt.label}
                                                            </option>
                                                        ))
                                                    ) : null
                                                }
                                            </optgroup>
                                        ))
                                    ) : type === 'multi-select' ? (
                                        <Fragment>
                                            <div className="em-select-all">
                                                {
                                                    Object.keys(optionsArray).length > 1 || (
                                                        Object.keys(optionsArray).length === 1 && optionsArray[Object.keys(optionsArray)[0]].options && optionsArray[Object.keys(optionsArray)[0]].options.constructor === Array && optionsArray[Object.keys(optionsArray)[0]].options.length > 1) ? (
                                                            <div key='select-all' onClick={event => optionSelectionHandler(event, 'select-all')}>
                                                                <input type="checkbox" checked={handleCheckedOptions('select-all')} id='select-all' readOnly />
                                                                <span>Select All</span>
                                                            </div>
                                                        ) : null
                                                }
                                            </div>
                                            {
                                                Object.keys(optionsArray).map(id => (
                                                    <Fragment key={id}>
                                                        <div className="em-select-checklist">
                                                            {
                                                                id !== 'selected-values' ? (
                                                                    <optgroup label={optionsArray[id].label ? optionsArray[id].label : 'Invalid Group Label'} />
                                                                ) : null
                                                            }
                                                            {
                                                                optionsArray[id].options && optionsArray[id].options.constructor === Array && optionsArray[id].options.length > 0 ? (
                                                                    optionsArray[id].options.map((opt:any, idx:any) => (
                                                                        <div id='option-div' key={idx} onClick={event => optionSelectionHandler(event, opt)}>
                                                                            <input type="checkbox" checked={handleCheckedOptions(opt)} id={opt.value} readOnly />
                                                                            <span>{opt.label}</span>
                                                                        </div>
                                                                    ))
                                                                ) : <span className="em-noresult">No options</span>
                                                            }
                                                        </div>
                                                    </Fragment>
                                                ))
                                            }
                                        </Fragment>
                                    ) : <span className="em-noresult">No options</span>
                                }
                            </Fragment>
                        ) : <div className="em-noresult">No options</div>
                    }
                </div>
            </Popover>
        </div>
    )
}

export default SelectWithDisplay