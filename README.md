# Getting Started with Empower Inputs (typescript)

1. Input   
2. Input Numeric
3. Textarea
4. Textarea with special characters
5. Select
6. Select with Group Option
7. Multi-Select
8. Multi-Select with Group Option
9. Toggle Button
10. Checkbox
11. Datepicker (Single)
12. Datepicker (Multiple)
13. File Upload
14. File Upload Multiple
15. Toggle
16. Currency
17. Radio
18. Hours
19. Minutes
20. Hours-Minutes
21. Datetime
22. Select with display
23. Select with links
24. Select with profile

### Declaration
```js
import { InputSelectionHandler, SelectWithDisplay, SelectWithLinks, SelectWithProfile  } from 'empower-inputs';
```
### Interface
```json
interface IState {
    formElement: any 
  }
```

### Event Handler
```js
 const inputChangedHandler = (val: any, key: string): void => {
    switch (key) {
      case 'sampleCheckbox':
        formElement[key].value = val.target.checked;
        break;

      case 'sampleMultiSelect':
        formElement[key].value = val.selected;
        break;
        
      case 'sampleFile':
      case 'sampleFileMultiple':
        formElement[key].selected = val.selected;
        break;

      default:
         formElement[key].value = val.target.value;
        break;
    }
    setFormElement({ ...formElement, formElement });
 }
 
 
 const onBluredHandler = (val: any, key: string): void => {
    switch (key) {
      default:
        formElement[key].value = val ? val.target.value : null
        alert(val.target.value)
        break;
    }

    setFormElement({ ...formElement, formElement });
  }
 
```


___
### 1) Input
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleInput: {
      id: 'sampleInput',
      type: 'text',
      label: 'Sample Input',
      value: '',
      placeholder: 'Input text',
      maxLength: 10,
      readOnly: false,
      disabled: false,
      required: true,
      info:{
        title: 'Info Title',
        info: {
          infoDetails: {
            companyPolicy: "<p><strong>Certifying Daily Time Records (DTR) </strong></p>\n<p>All Employees are expected to certify all DTRs covering a pay period as true, correct, accurate and final that will serve as basis to compute their pay.</p>\n<p><strong>Failure</strong> to certify DTRs shall result to an Auto-Certification at the end of the pay cutoff. Uncertified DTRs will be deemed true, correct, accurate and final, except for Absences incurred on the day of the cutoff itself, either on the 10th or 26th of the month.</p>\n<p>For these absences, either of the following will apply:</p>\n<p>1. The employee is given until the 12th or the 27th to amend the DTR and seek approval;</p>\n<p>2. The Timekeeping &amp; Benefits department will verify the details of the absence incurred and amend the DTR appropriately.</p>\n<p>The Company has two (2) pay cutoff periods:</p>\n<p>1. Payroll for the 15th -- 26th of the previous month to the 10th of the current month 2. Payroll for the 30th -- 11th to the 25th of the current month.</p>\n<p><strong>Clock In</strong></p>\n<p>When an employee clocks into work, the Company&rsquo;s online system shall provide the applicable status:</p>\n<p><strong> ON TIME</strong> - Clock In before the start of shift and/ or before the grace period (if any) ends</p>\n<p>TARDY - Clock In within the first four (4) hours after the shift has started</p>\n<p>ABSENT (1ST HALF and TARDY) - Clock In beyond the first four (4) hours after the shift has started will be tagged as Tardy. The first four (4) hours after the shift has started will be tagged as Absent - 1st Half.</p>\n<p><strong> Tardiness</strong></p>\n<p>1. Failure to come ON TIME six (6) times or accumulation of at least 60 minutes of TARDINESS (whichever comes first) within the 11th of the current month to the 10th of the following month, shall constitute an offense of TARDINESS.</p>\n<p>Employees are expected to time in upon arriving at their respective office. However, due to unforeseen circumstances preventing the employee to timely Clock In within the Company&rsquo;s online system, employees are allowed to amend their Clock In time, subject to the approval of their respective Department Head / Immediate Superior. Amendments to Clock In within the Company&rsquo;s online system can be done on or before the payroll cutoff.</p>\n<p>2. Employee reporting to work after the official start of the assigned work shift and, if any, after the grace period. Applicable only to Time-bounded Work Shifts.</p>\n<p>Tardiness computed in payroll is equivalent to length of time computed as the difference between the clock in time and the grace period. If no Grace Period allowed, it will be the difference between the clock in time and the start of the shift.</p>\n<p>Example:</p>\n<p>Start Time - 6:00 AM</p>\n<p>Grace Period - 6:10 AM (10 minutes from the start of the shift)</p>\n<p>Clock In - 6:15 AM</p>\n<p>Tardiness = 5 minutes (time in excess of the end of the Grace Period)</p>\n<p>Computed Tardiness will be the basis of payroll deductions.</p>\n<p><strong>Clock Out</strong></p>\n<p>When an employee clocks out of work, the Company&rsquo;s online system shall provide the applicable status:</p>\n<p><strong> SHIFT ENDED</strong> - Clock out on or beyond the end of shift will be tagged as Shift Ended</p>\n<p><strong>UNDERTIME</strong> - Clock out before the expected end of shift will tag the talent as Undertime</p>\n<p><strong>ABSENT (2ND HALF and Undertime)</strong> - Clock out within the first four (4) hours after the shift has started will be tagged as Undertime. The last four (4) hours before the shift ends will be tagged as Absent - 2nd Half.</p>\n<p><strong> Undertime </strong></p>\n<p>An employee leaving work earlier than the required end of a Work Shift. Undertime computed in payroll is equivalent to length of time computed as the difference between the end of shift and the clock out time.</p>\n<p>Example:</p>\n<p>End Time - 3:00 PM</p>\n<p>Clock In - 2:55 PM</p>\n<p>Undertime = 5 minutes (time out short of the end of the Grace Period)</p>\n<p>Computed Undertime will be the basis of payroll deductions.</p>",
            systemPolicy: "<p><strong>Certify </strong></p>\n<p>1. Certification of DTR can only be done<strong> within the cutoff. </strong></p>\n<p>2. You cannot certify an <strong>incomplete DTR, current day</strong> and <strong>an ongoing shift. </strong></p>\n<p>3. Failure to certify DTRs shall result to an Auto-Certification at the end of the pay cutoff.</p>\n<p><strong>What you can do:</strong></p>\n<p>1. If with time logged (whether complete or incomplete), allows <strong>DTR amendment</strong> or <strong>Certify</strong>.</p>\n<p>2. If registered Absent, allows DTR amendment, File a Leave or Certify.</p>\n<p><strong>Amendment can be done in the following ways: </strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / DTR amendment</p>\n<p>3. Express Button - Amendment</p>\n<p><strong>Filing of leave can be done in the following ways:</strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / File Leave</p>\n<p>3. Express Button - File Leave</p>\n<p><strong>Amend DTR</strong></p>\n<p>1. You cannot amend an<strong> Ongoing / Current Shift.</strong> Filing of DTR amendment is allowed the next day after you have Clocked In.</p>\n<p>2. Amendments are disallowed by the end of the cutoff (10th or 25th).</p>\n<p>3. You are expected to amend your DTR within <strong>twenty-four (24) hours upon return to work</strong> in the succeeding Work Shift.</p>\n<p>4. You can only adjust your CLOCK IN DATE one (1) day prior your Chosen Work Date.</p>\n<p><strong>E.g</strong></p>\n<p>Work Date: November 08, 2019 - 12:00am to 09:00am</p>\n<p>Clock in Date: November 07, 2019 Clock In Time:11:00pm</p>\n<p>Clock out Date: November 08, 2019 Clock out Time:09:00am</p>\n<p>5. You can only adjust your CLOCK OUT DATE one (1) day after your Chosen Work Date.</p>\n<p><strong>E.g</strong></p>\n<p>Work Date: November 08, 2019 - 8:00am to 05:00pm</p>\n<p>Clock in Date: November 08, 2019 Clock In Time:08:00am</p>\n<p>Clock out Date: November 09, 2019 Clock out Time:02:00am</p>\n<p>6. DTR amendment request can be canceled / edited provided the request is still pending.</p>\n<p>7. DTR amendment requests that have already passed or requests that have already been denied cannot be canceled.</p>\n<p>8. DTRs that have been previously certified <strong>CANNOT</strong> be amended.</p>\n<p><strong> File Leave </strong></p>\n<p>1. Filing of Sick / Emergency Leave is allowed the next day after you have Clocked In.</p>\n<p>2. You cannot file a backdated Vacation Leave.</p>\n<p>3. You cannot file a future - dated Sick / Emergency Leave.</p>\n<p>4. The employee is expected to file a Sick or Emergency Leave within the Company online system within <strong>twenty-four (24) hours upon return to work</strong> in the succeeding Work Shift.</p>\n<p>5. Leave request can be edited provided the request is still pending.</p>\n<p>6. Approved leave request can be canceled before the effectivity date.</p>\n<p>7. Reporting to work on a day with a pre-approved SIL.</p>\n<p>- Will cancel the leave</p>\n<p>- Credit back the approved SIL to the Leave balance</p>\n<p>- Record the DTR for the day</p>",
            instruction: "<p><strong>What you can do:</strong></p>\n<p>1. If with time logged (whether complete or incomplete), allows DTR amendment or Certify.</p>\n<p>2. If without time logged, allows DTR Amemdment.</p>\n<p>3. If registered Absent, allows DTR amendment, File a Leave or Certify.</p>\n<p><strong>Amendment can be done in the following ways:</strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / DTR amendment</p>\n<p>3. Express Button - Amendment</p>\n<p><strong>Filing of leave can be done in the following ways:</strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / File Leave</p>\n<p>3. Express Button - File Leave</p>"
          },
          listRow: [
            "COMPANY POLICY",
            "SYSTEM POLICY",
            "INSTRUCTION"
          ],
          "loaded": false,
          "cardIconDesc": false
        }
      }



    }
});
```



### Usage for Input
```html
<div>
    <h4>INPUT STRING</h4>
    <InputSelectionHandler
      config={formElement.sampleInput}
      allowedChar={{
        alphabet: true,
        numeric: false,
        space: false,
        allowedSymbols: ['&']

      }}
      customClass="string-custom-class em-input"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleInput')}
      onBlured={(e: any) => onBluredHandler(e, 'sampleInput')}
    />
</div>
```
___
### 2) Input Numeric
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleInput: {
      id: 'sampleInput',
      type: 'text',
      label: 'Sample Input',
      value: '',
      placeholder: 'Input text',
      maxLength: 10,
      readOnly: false,
      disabled: false,
      required: true,
      info:{}   // same object as Info Sigle and Info Multiple 
                // ( https://www.npmjs.com/package/empower-display)
       
});
```



### Usage for Input Numeric
```html
<div>
    <h4>INPUT INTEGER</h4>
    <InputSelectionHandler
      config={formElement.sampleInputNumeric}
      customClass="integer-custom-class em-input"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleInputNumeric')}
    />
</div>
```

___

### 3) Textarea
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleTextarea: {
      id: 'sampleTextarea',
      type: 'textarea',
      value: '',
      maxLength: 100,
      placeholder: 'Input text',
      disabled: false,
      required: true,
      rows:10,
      cols:10


    }
});
```

### Usage for Textarea
```html
<div>
    <h4>TEXTAREA CHARACTER ONLY</h4>
    <InputSelectionHandler
      config={formElement.sampleTextarea}
      customClass="textarea-character-only-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleTextarea')}
      allowedChar={{
        alphabet: true,
        numeric: false,
        space: true
      }}
    />
</div>
```

### 4) Textarea with special characters
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleTextarea: {
      id: 'sampleTextarea',
      type: 'textarea',
      value: '',
      maxLength: 100,
      placeholder: 'Input text',
      disabled: false,

    }
});
```

### Usage for Textarea with Special Characters

```html
<div>
    <h4>TEXTAREA ALLOW SPECIAL CHAR</h4>
    <InputSelectionHandler
      config={formElement.sampleTextareaSpecial}
      customClass="textarea-allow-special-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleTextareaSpecial')}
      allowedChar={{
        alphabet: true,
        numeric: true,
        space: true,
        allowedSymbols: ['&.,']
      }}
    />
</div>
```
___

### 5) Select
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
  sampleSelect: {
      id: 'sampleSelect',
      type: 'select',
      placeholder: 'Please select option',
      value: '',
      disabled: false,
      required: true,
      options: [
          {
            label: "Leave",
            value: "file-leave",       
          },
          {
            label: "Overtime",
            value: "file-overtime",       
          },
          {
            label: "DTR Amendment",
            value: "file-amendment",        
          },
          {
            label: "Change Shift",
            value: "view-shift-schedule",     
          }
        ]
    }
});
```

### Usage for Select
```html
<div>
    <h4>SELECT</h4>
    <InputSelectionHandler
      config={formElement.sampleSelect}
      customClass="select-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleSelect')}
    />
</div>
```
___


### 6) Select with Group Option
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
 sampleSelectGroupOption: {
      id: 'sampleSelectGroupOption',
      type: 'select',
      placeholder: 'Please select option',
      value: '',
      disabled: false,
      options: {
          'sample-group-1': {
            label: 'Sample Group 1',
            options: [
              {
                label: 'Option 1',
                value: 'option-1'
              },
              {
                label: 'Option 2',
                value: 'option-2'
              },
            ]
          },
          'sample-group-2': {
            label: 'Sample Group 2',
            options: [
              {
                label: 'Option 3',
                value: 'option-3'
              },
              {
                label: 'Option 4',
                value: 'option-4'
              },
            ]
          },
          'sample-group-3': {
            label: 'Sample Group 2',
            options: [
              {
                label: 'Option 5',
                value: 'option-5'
              },
              {
                label: 'Option 6',
                value: 'option-6'
              },
            ]
          }
        }
    }
});
```

### Usage for Select with Group Option
```html
<div>
    <h4>SELECT GROUP OPTIONS</h4>
    <InputSelectionHandler
      config={formElement.sampleSelectGroupOption}
      customClass="select-group-options-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleSelectGroupOption')}
    />
</div>
```
___

### 7) Multi-Select
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
 sampleMultiSelect: {
      id: 'sampleMultiSelect',
      type: 'multi-select',
      placeholder: 'Please select multiple option',
      value: [],
      disabled: false,
      options: [
          {
            label: "Leave",
            value: "file-leave",        
        
          },
          {
            label: "Overtime",
            value: "file-overtime",        
        
          },
          {
            label: "DTR Amendment",
            value: "file-amendment",        
        
          },
          {
            label: "Change Shift",
            value: "view-shift-schedule",     
          },
        ]
    }
});
```
### Usage for Select with Multi-Select
```html
<div>
    <h4>MULTI-SELECT</h4>
    <InputSelectionHandler
      config={formElement.sampleMultiSelect}
      customClass="multi-select-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleMultiSelect')}
    />
</div>
```
___

### 8) Multi-Select with Group Option
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
sampleMultiSelectGroupOption: {
      id: 'sampleMultiSelectGroupOption',
      type: 'multi-select',
      placeholder: 'Please select multiple option',
      value: [],
      disabled: false,
      options: {
          'sample-group-1': {
            label: 'Sample Group 1',
            options: [
              {
                label: 'Option 1',
                value: 'option-1'
              },
              {
                label: 'Option 2',
                value: 'option-2'
              },
            ]
          },
          'sample-group-2': {
            label: 'Sample Group 2',
            options: [
              {
                label: 'Option 3',
                value: 'option-3'
              },
              {
                label: 'Option 4',
                value: 'option-4'
              },
            ]
          },
          'sample-group-3': {
            label: 'Sample Group 2',
            options: [
              {
                label: 'Option 5',
                value: 'option-5'
              },
              {
                label: 'Option 6',
                value: 'option-6'
              },
            ]
          }
        }
    }
});
```
### Usage Multi-Select with Group Option
```html
<div>
    <h4>MULTI-SELECT GROUP OPTIONS</h4>
    <InputSelectionHandler
      config={formElement.sampleMultiSelectGroupOption}
      customClass="multi-select-group-options-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleMultiSelectGroupOption')}
    />
</div>
```
___

### 9) Toggle Button
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
sampleToggleButton: {
      id: 'sampleToggleButton',
      type: 'toggle-button',
      placeholder: 'Please select option',
      value: '',
      disabled: false,
      required: true,
      options: [
          {
            label: "Approve",
            value: "APPROVED",
          },
          {
            label: "Reject",
            value: "REJECTED",
          }
        ]
    }
    
});
```
### Usage forToggle Button
```html
<div>
    <h4>TOGGLE BUTTON</h4>
    <InputSelectionHandler
      config={formElement.sampleToggleButton}
      customClass="toggle-button-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleToggleButton')}
    />
</div>
  ```

___

### 10) Checkbox
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleCheckbox: {
      id: "sampleCheckbox",
      type: 'checkbox',
      label: "Sample label",
      value: false,
      disabled: false
    }
});
```

### Usage for Checkbox
```html
<div>
    <h4>CHECKBOX BUTTON</h4>
    <InputSelectionHandler
      config={formElement.sampleCheckbox}
      customClass="checkbox-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleCheckbox')}
    />
</div>
```
___

### 11) Datepicker (Single)
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleDatepickerSingle: {
      id: "sampleDatepickerSingle",
      type: 'datepicker',
      placeholder: 'Select date',
      value: null,
      disabled: false,
      disabledDates: ["2020-07-22", "2020-07-23", "2020-07-24"],
      disabledDays: ["Sun", "Sat"],
    }
});
```

### Usage for Datepicker (Single)
```html
<div>
    <h4>DATEPICKER SINGLE</h4>
    <InputSelectionHandler
      config={formElement.sampleDatepickerSingle}
      customClass="datepicker-single-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleDatepickerSingle')}
    />
</div>
```
___

### 12) Datepicker (Multiple)
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleDatepickerMultiple: {
      id: "sampleDatepickerMultiple",
      type: 'datepicker',
      placeholder: 'Select date',
      value: null,
      multiple: true,
      disabled: false,
      minDate: "2020-07-06",
    }
});
```
### Usage for Datepicker (Multiple)
```html
<div>
    <h4>DATEPICKER MULTIPLE</h4>
    <InputSelectionHandler
      config={formElement.sampleDatepickerMultiple}
      customClass="datepicker-multiple-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleDatepickerMultiple')}
    />
</div>
```
___

### 13) File Upload Single
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
     sampleFile: {
      id: "sampleFile",
      type: 'file',
      selected: [],
      accept: ".png,.pdf",
      disabled: false,
    }
});
```
### Usage for File Upload Single
```html
<div>
    <h4>FILE SINGLE</h4>
    <InputSelectionHandler
      config={formElement.sampleFile}
      customClass="file-custom-class"
      hasChips={true}
      onChanged={(e: any) => inputChangedHandler(e, 'sampleFile')}
    />
</div>
  ```
___


### 14) File Upload Multiple
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleFileMultiple: {
      id: "sampleFileMultiple",
      type: 'file',
      selected: [],
      accept: ".png,.pdf",
      disabled: false,
      multiple: true
    }
});
```
### Usage for File Upload Multiple
```html
<div>
    <h4>FILE MULTIPLE</h4>
    <InputSelectionHandler
      config={formElement.sampleFileMultiple}
      customClass="file-custom-class"
      hasChips={true}
      onChanged={(e: any) => inputChangedHandler(e, 'sampleFileMultiple')}
    />
</div>
```
___

### 15) Toggle
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleToggle: {
      id: "sampleToggle",
      label: "yes",
      type: 'toggle',
      value: false,
      disabled: false
    }
});
```

___
### Usage for Toggle
```html
<div>
    <h4>TOGGLE</h4>
    <InputSelectionHandler
      config={formElement.sampleToggle}
      customClass="toggle-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleToggle')}
    />
</div>
```

### 16) Currency
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleCurrency: {
      id: 'salary',
      type: 'currency',
      currency: 'PHP',
      value: '',
      placeholder: '-',
      maxLength: 100,
      readOnly: false,
      disabled: false,
  }
});
```
### Usage for Currency
```html
<div>
    <h4>CURRENCY</h4>
    <InputSelectionHandler
      config={formElement.sampleCurrency}
      customClass="toggle-custom-class"
      onChanged={(e: any) => inputChangedHandler(e, 'sampleCurrency')}
    />
</div>
```

### 17) Radio
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleRadio: {
      id: 'sampleHours',
      type: 'radio',
      value: '',
      readOnly: false,
      disabled: false,
      options: [
        {
          label: "Part-Time",
          value: "part-time",
          disabled: true,
        },
        {
          label: "Full-Time",
          value: "full-time",
          disabled: false,
        }
      ]
    }
});
```
### Usage for Radio
```html
<div>
  <h4>RADIO</h4>
  <InputSelectionHandler
    config={formElement.sampleRadio}
    onChanged={(e: any) => inputChangedHandler(e, 'sampleRadio')}
  />
</div>

```

### 18) Hours
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleHours: {
      id: 'sampleHours',
      type: 'hours',
      maxHours: '23',
      value: '',
      placeholder: '-',

      readOnly: false,
      disabled: false,
    }
});
```
### Usage for Hours
```html
<div>
  <h4>HOURS</h4>
  <InputSelectionHandler
    config={formElement.sampleHours}
    onChanged={(e: any) => inputChangedHandler(e, 'sampleHours')}
  />
</div>
```

### 19) Minutes
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleMinutes: {
      id: 'sampleMinutes',
      type: 'minutes',
      maxMins: '59',
      value: '',
      placeholder: '-',
      readOnly: false,
      disabled: false,
    }
});
```
### Usage for Minutes
```html
<div>
  <h4>MINUTES</h4>
  <InputSelectionHandler
    config={formElement.sampleMinutes}
    onChanged={(e: any) => inputChangedHandler(e, 'sampleMinutes')}
  />
</div>
```
### 20) Hours-Minutes
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleHourMin: {
      id: 'sampleHourMin',
      type: 'hours-mins',
      maxHours: '23',
      maxMins: '59',
      value: '',
      placeholder: '-',
      readOnly: false,
      disabled: false,
    }
});
```
### Usage for Hours-Minutes
```html
<div>
    <h4>HOURS-MINS</h4>
    <InputSelectionHandler
      config={formElement.sampleHourMin}
      onChanged={(e: any) => inputChangedHandler(e, 'sampleHourMin')}
    />
  </div>
</div>
```

### 21) Datetime
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleDatetime: {
      id: 'datetime',
      type: 'datetime',
      maxHours: '23',
      maxMins: '59',
      value: '',
      placeholder: '-',
      readOnly: false,
      disabled: false,
    },
});
```
### Usage for Datetime
```html
<div>
    <h4>DATETIME</h4>
    <InputSelectionHandler
      config={formElement.sampleDatetime}
      onChanged={(e: any) => inputChangedHandler(e, 'sampleDatetime')}
    />
  </div>
</div>
```

### 22) Select with display
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleSelectWithDisplay: {
      id: 1,
      type: 'select',
      value: '',
      placeholder: 'Sample placeholder',
      readOnly: false,
      disabled:  false,
      options: [
        {
          label: "Leave",
          value: "file-leave",

        },
        {
          label: "Overtime",
          value: "file-overtime",

        },
        {
          label: "DTR Amendment",
          value: "file-amendment",

        },
        {
          label: "Change Shift",
          value: "view-shift-schedule",
        }
      ],
      customClass: 'sample',
      hideClearIcon: false,
      isEmployeeSelection: false,
      isMultiple: false
    }
});
```
### Usage for Select with display
```html
<div>
    <h4>SELECT WITH DISPLAY</h4>
    <SelectWithDisplay 
      config={formElement.sampleSelectWithDisplay} 
      onChanged={(e: any) => inputChangedHandler(e, 'sampleSelectWithDisplay')}
    />
  </div>
</div>
```

### 23) Select with links
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
   sampleSelectWithLinks: {
      title: 'LINK TO RELATED DEALS',
      id: 'link',
      type: 'select',
      placeholder: 'Search for deals',
      options: [
        {
          label: "Leave",
          value: "file-leave",

        },
        {
          label: "Overtime",
          value: "file-overtime",

        },
        {
          label: "DTR Amendment",
          value: "file-amendment",

        },
        {
          label: "Change Shift",
          value: "view-shift-schedule",
        }
      ],
      value: '',
      disabled: false,
      required: false,
      isMultiple: false,
      customClass: 'sample',
      hideClearIcon: false,
      isEmployeeSelection: false,
   }
});
```
### Usage for Select with links
```html
<div>
    <h4>SELECT WITH LINKS</h4>
     <SelectWithLinks 
        config={formElement.sampleSelectWithLinks}
        onChanged={(e: any) => inputChangedHandler(e, 'sampleSelectWithLinks')}
      />
  </div>
</div>
```

### 24) Select with profile
```js
let [formElement, setFormElement] = useState<IState['formElement']>({
    sampleSelectWithProfile: {
      id: 'selectTalent',
      type: 'multi-select',
      options: [
        {
              employee_code: '001',
              employee_bucket_code: '001',
              employee_name: "Albert Jandayan",
              employee_profile_pic: "sample.jpg",
              employee_position: "HR Cluster Lead",
              employee_email: "albert.jandaya@emapta.com"
        },
        {
              employee_code: '002',
              employee_bucket_code: '002',
              employee_name: "Analiza Manalastas",
              employee_profile_pic: "sample.jpg",
              employee_position: "HR Cluster Lead",
              employee_email: "analiza.manalastas@emapta.com"
        }
      ],
      placeholder: 'Select employee',
      value: [],
      disabled: false,
      required: true,
      isMultiple: false,
      customClass: 'sample',
      hideClearIcon: false,
      isEmployeeSelection: false,
    }
});
```
### Usage for Select with profile
```html
<div>
    <h4>SELECT WITH PROFILE</h4>
     <SelectWithLinks 
        config={formElement.sampleSelectWithProfile}
        onChanged={(e: any) => inputChangedHandler(e, 'sampleSelectWithProfile')}
      />
  </div>
</div>
```
### Changelog:
*  **0.1.29** - Added rows and cols to textarea
*  **0.1.28** - Fix numeric valudation for inputs and textarea
*  **0.1.27** - Added disabled class on inputs
*  **0.1.26** - Added focus out method (onBlured) on inputs
*  **0.1.25** - Fix inconsistent text in info
*  **0.1.24** - Fix popover lagging issues
*  **0.1.23** - Added required fields to all inputs
*  **0.1.22** - Added withTime prop in datepicker
*  **0.1.21** - Added required field
*  **0.1.20** - Added label info
*  **0.1.19** - Fixed radio button when clicking input
*  **0.1.18** - Initially select return as label fix return as value


