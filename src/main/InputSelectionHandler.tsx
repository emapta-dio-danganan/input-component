import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import ToggleButton from './ToggleButton';
import Checkbox from "./Checkbox";
import Datepicker from "./Datepicker";
import File from './File';
import Toggle from './Toggle';
import Currency from './Currency';
import Radio from "./Radio";
import HoursMins from './HoursMins';
import Hours from "./Hours"
import Minutes from './Minutes';
import DatetimePicker from './DatetimePicker';

const InputSelectionHandler = (props: any) => {
    let COMP = null
    switch (props.config.type) {
        case "text":
        case "number":
        case "time":
        case "password":
            COMP = <Input {...props} />;
            break;
        case "textarea":
            COMP = <Textarea {...props} />;
            break;
        case "select":
        case "multi-select":
            COMP = <Select {...props} />;
            break;
        case "toggle-button":
            COMP = <ToggleButton {...props} />;
            break;
        case "checkbox":
            COMP = <Checkbox {...props} />;
            break;
        case "datepicker":
            COMP = <Datepicker {...props} />;
            break;
        case "file":
            COMP = <File {...props} />;
            break;
        case "toggle":
            COMP = <Toggle {...props} />;
            break;
        case "currency":
            COMP = <Currency {...props} />;
            break;
        case "radio":
            COMP = <Radio {...props} />;
            break;
        case "hours-mins":
            COMP = <HoursMins {...props} />;
            break;
        case "hours":
            COMP = <Hours {...props} />;
            break;
        case "minutes":
            COMP = <Minutes {...props} />;
            break;

        case "datetime":
            COMP = <DatetimePicker {...props} />;
            break;

        default:
            console.error("Invalid Input Type");
            return null;
    }
    return COMP;

}
export default InputSelectionHandler;
