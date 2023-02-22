import React, { Fragment, useEffect, useState } from 'react';
import HoursMins from './HoursMins';
import Datepicker from './Datepicker'


interface IDatetimePickerProps {

  config: {
    id: string,
    type: string,
    value: string | Date,
    placeholder?: string,
    label?: string,
    readOnly?: boolean,
    disabled?: boolean,
    required?: boolean,
    maxHours: string,
    maxMins: string
    disabledDates?: Array<string>,
    disabledDays?: Array<string>,

  },

  customClass?: string
  onChanged?: (event: Date) => void,
}

const DatetimePicker: React.FunctionComponent<IDatetimePickerProps> = ({ config, customClass, onChanged }) => {

  customClass = customClass ? customClass : ''
  interface stateType {
    date: null | { from: string, to: string }
    time: string
  }

  let [state, setStateData] = useState<stateType>({
    date: null,
    time: "0"
  })

  let { date, time } = { ...state };

  useEffect(() => {

    if (config.value) {
      const dT = new Date(config.value);

      // set date
      const sDate = dT.toISOString().substring(0, 10)
      state.date = { from: sDate, to: sDate }

      // set time
      const hours = dT.getHours();
      const minutes = dT.getMinutes();
      const totalMinutes = (hours * 60) + minutes;
      state.time = totalMinutes.toString();


      setStateData({ ...state })

    }


  }, [])


  const onChangeHandler = (e: any, type: string) => {

    switch (type) {
      case 'date':
        state.date = e.target.value;
        break;

      case 'time':
        state.time = e.target.value

        break;
    }

    if (state.date) {
      const d = state.date.from.replace('-', '/');
      const dt = new Date(d);
      const newDate = new Date(dt.setMinutes(parseInt(state.time)));
      if (onChanged) {
        return onChanged(newDate)
      }

    }

    setStateData({ ...state })

  }


  const View = () => {

    const datePicker = {
      id: config.id,
      type: 'datepicker',
      placeholder: config.placeholder,
      value: date,
      disabled: false,
      disabledDates: config.disabledDates,
      disabledDays: config.disabledDays,
    }

    const hoursMins = {
      id: config.id,
      type: 'hours-mins',
      value: time.toString(),
      readOnly: config.readOnly,
      disabled: config.disabled,
      maxHours: config.maxHours,
      maxMins: config.maxMins


    }

    return <Fragment>
      {config.label && config.label != '' && <label className="em-input-label">{config.label}
                {config.hasOwnProperty('required') && config.required == true && <span className="text-danger">*</span>}
            </label>}
      <div className={"em-datetime " + customClass}>
        <Datepicker config={datePicker} onChanged={e => onChangeHandler(e, 'date')} />
        <HoursMins config={hoursMins} onChanged={e => onChangeHandler(e, 'time')} />
      </div>
    </Fragment>


  }

  return View();
};

export default DatetimePicker;
