"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var index_1 = require("../main/index");
var GROUP_OPTIONS_CONSTANT = {
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
};
var ARRAY_OPTIONS_CONSTANT = [
    {
        label: "Leave",
        value: "file-leave", // string optional
    },
    {
        label: "Overtime",
        value: "file-overtime", // string optional
    },
    {
        label: "DTR Amendment",
        value: "file-amendment", // string optional
    },
    {
        label: "Change Shift",
        value: "view-shift-schedule", // string optional
    },
];
var TOGGLE_OPTIONS_CONSTANT = [
    {
        label: "Approve",
        value: "APPROVED",
    },
    {
        label: "Reject",
        value: "REJECTED",
    }
];
var DUMMY_TALENT_RETURN = [
    {
        employee_code: '8WzFa_veynqMfD9h',
        employee_bucket_code: 'BCKT-00001',
        employee_name: "Annie Ruth Suficiencia",
        employee_profile_pic: "r8gbRpma2erKC0VZmhrsK8ko5TnDlLWZUOgOYM0DSOMz2BhoUXvdcTOB9KeIxTrj.jpg",
        employee_position: 'QA Analyst',
        employee_email: 'annie.suficiencia@empowerteams.io'
    },
    {
        employee_code: '20-0520',
        employee_bucket_code: 'BCKT-00001',
        employee_name: "Claro Abelardo Lagman",
        employee_profile_pic: "DLyv4BQMrGeNYLHWueWGjSe3mHXXlhT7mzYa9tzJgJ45BMdy04D5qwhOVk1hzoUd.jpeg",
        employee_position: 'Experience Manager',
        employee_email: 'claro.lagman@empowerteams.io'
    },
    {
        employee_code: '9shB7xW6Mm_tCFvP',
        employee_bucket_code: 'BCKT-00001',
        employee_name: "Cristopher John Barraba",
        employee_profile_pic: "MfYggj5oHGckWp9xo52X63PimoqZXYe2LfnMHWif5hq7hXtRXOiLMcjnHZafcbmk.jpg",
        employee_position: 'QA Analyst',
        employee_email: 'cristopher.barraba@empowerteams.io'
    },
    {
        employee_code: '19-1244',
        employee_bucket_code: 'BCKT-00001',
        employee_name: "Crystal Joy Mena",
        employee_profile_pic: "FBeHzK52TQrxgaJejCOFobiqvEOHAFc3Slz4Czx8b9nPjljvQRhAWIMNM3zdBuKp.jpg",
        employee_position: 'Sr. Business Analyst',
        employee_email: 'crystal.mena@empowerteams.io'
    },
];
var App = function () {
    var _a = (0, react_1.useState)({
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
            info: {
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
        },
        sampleInputNumeric: {
            id: 'sampleInputNumeric',
            type: 'number',
            value: '',
            label: "Sample Input Numeric",
            placeholder: 'Input number',
            maxLength: 10,
            readOnly: false,
            disabled: false,
            required: true,
            info: {
                title: 'Info Title',
                info: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
            }
        },
        sampleInputTime: {
            id: 'sampleInputTime',
            type: 'time',
            label: 'Sample Input Time',
            value: '',
            placeholder: 'Input text',
            maxLength: 10,
            readOnly: false,
            disabled: false,
            required: true,
        },
        sampleTextarea: {
            id: 'sampleTextarea',
            type: 'textarea',
            label: "Sample label",
            value: '',
            maxLength: 100,
            placeholder: 'Input text',
            rows: 10,
            cols: 10,
            disabled: false,
            required: true,
        },
        sampleTextareaSpecial: {
            id: 'sampleTextareaSpecial',
            type: 'textarea',
            label: "TextareaSpecial",
            value: '',
            maxLength: 100,
            placeholder: 'Input text',
            disabled: false,
        },
        sampleSelect: {
            id: 'sampleSelect',
            type: 'select',
            label: "Select",
            placeholder: 'Please select option',
            value: '',
            disabled: false,
            options: ARRAY_OPTIONS_CONSTANT,
            required: true,
            info: {
                title: 'Info Title',
                info: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
            }
        },
        sampleSelectGroupOption: {
            id: 'sampleSelectGroupOption',
            type: 'select',
            label: "Sample Select Group Option",
            placeholder: 'Please select option',
            value: '',
            disabled: false,
            options: GROUP_OPTIONS_CONSTANT
        },
        sampleMultiSelect: {
            id: 'sampleMultiSelect',
            type: 'multi-select',
            label: "Sample MultiSelect",
            placeholder: 'Please select multiple option',
            value: [],
            disabled: false,
            options: ARRAY_OPTIONS_CONSTANT,
            info: {
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
        },
        sampleMultiSelectGroupOption: {
            id: 'sampleMultiSelectGroupOption',
            type: 'multi-select',
            label: "Sample Multi Select Group Option",
            placeholder: 'Please select multiple option',
            value: [],
            disabled: false,
            options: GROUP_OPTIONS_CONSTANT
        },
        sampleToggleButton: {
            id: 'sampleToggleButton',
            type: 'toggle-button',
            label: "Sample Toggle Button",
            placeholder: 'Please select option',
            value: '',
            disabled: false,
            required: true,
            options: TOGGLE_OPTIONS_CONSTANT
        },
        sampleCheckbox: {
            id: "sampleCheckbox",
            type: 'checkbox',
            label: "Sample Checkbox",
            value: false,
            disabled: false
        },
        sampleDatepickerSingle: {
            id: "sampleDatepickerSingle",
            type: 'datepicker',
            label: "Sample Datepicker Single",
            placeholder: 'Select date',
            value: null,
            disabled: false,
            required: true,
            disabledDates: ["2020-07-22", "2020-07-23", "2020-07-24"],
            disabledDays: ["Sun", "Sat"],
        },
        sampleDateTimepickerSingle: {
            id: "sampleDatepickerSingle",
            type: 'datepicker',
            label: "Sample Datepicker Single with Time",
            placeholder: 'Select date',
            value: null,
            disabled: false,
            withTime: true,
            required: true,
            disabledDates: ["2020-07-22", "2020-07-23", "2020-07-24"],
            disabledDays: ["Sun", "Sat"],
        },
        sampleDatepickerMultiple: {
            id: "sampleDatepickerMultiple",
            type: 'datepicker',
            label: "Sample Datepicker Multiple",
            placeholder: 'Select date',
            value: null,
            multiple: true,
            disabled: false,
            required: true,
            minDate: "2020-07-06",
        },
        sampleDatepickerMultiple2: {
            id: "sampleDatepickerMultiple2",
            type: 'datepicker',
            label: "Sample Datepicker Multiple",
            placeholder: 'Select date',
            value: null,
            multiple: true,
            disabled: false,
            minDate: "2020-07-06",
        },
        sampleDatepickerMultiple3: {
            id: "sampleDatepickerMultiple3",
            type: 'datepicker',
            label: "Sample Datepicker Multiple",
            placeholder: 'Select date',
            value: null,
            multiple: true,
            disabled: false,
            minDate: "2020-07-06",
        },
        sampleFile: {
            id: "sampleFile",
            type: 'file',
            label: "Sample File",
            selected: [],
            accept: ".png,.pdf",
            disabled: false,
        },
        sampleFileMultiple: {
            id: "sampleFileMultiple",
            type: 'file',
            label: "Sample File Multiple",
            selected: [],
            accept: ".png,.pdf",
            disabled: false,
            multiple: true,
        },
        sampleToggle: {
            id: "sampleToggle",
            label: "Sample Toggle",
            type: 'toggle',
            value: false,
            required: true,
            disabled: false
        },
        sampleCurrency: {
            id: 'salary',
            type: 'currency',
            currency: 'PHP',
            label: "Sample Currency",
            value: '',
            placeholder: '-',
            maxLength: 100,
            readOnly: false,
            disabled: false,
            required: true,
        },
        sampleRadio: {
            id: 'sampleRadio',
            type: 'radio',
            label: "Sample Radio",
            value: '',
            readOnly: false,
            disabled: false,
            required: true,
            options: [
                {
                    label: "Part-Time",
                    value: "part-time",
                    disabled: false,
                },
                {
                    label: "Full-Time",
                    value: "full-time",
                    disabled: false,
                }
            ]
        },
        sampleHours: {
            id: 'sampleHours',
            type: 'hours',
            label: "Sample Hours",
            maxHours: '23',
            value: '',
            placeholder: '-',
            required: true,
            readOnly: false,
            disabled: false,
        },
        sampleMinutes: {
            id: 'sampleMinutes',
            type: 'minutes',
            label: "Sample Minutes",
            maxMins: '59',
            value: '',
            placeholder: '-',
            readOnly: false,
            required: true,
            disabled: false,
        },
        sampleHourMin: {
            id: 'sampleHourMin',
            type: 'hours-mins',
            label: "Sample HourMin",
            maxHours: '23',
            maxMins: '59',
            value: '',
            placeholder: '-',
            readOnly: false,
            required: true,
            disabled: false,
        },
        sampleSelectWithDisplay: {
            id: 1,
            type: 'select',
            value: '',
            label: 'Sample Select With Display',
            placeholder: 'Sample placeholder',
            readOnly: false,
            disabled: false,
            options: ARRAY_OPTIONS_CONSTANT,
            customClass: 'sample',
            hideClearIcon: false,
            isEmployeeSelection: false,
            isMultiple: false,
            required: true,
        },
        sampleSelectWithLinks: {
            title: 'LINK TO RELATED DEALS',
            id: 'link',
            type: 'select',
            label: "Sample Select With Links",
            placeholder: 'Search for deals',
            options: ARRAY_OPTIONS_CONSTANT,
            value: '',
            disabled: false,
            required: true,
            isMultiple: false,
            customClass: 'sample',
            hideClearIcon: false,
            isEmployeeSelection: false,
        },
        sampleSelectWithProfile: {
            id: 'selectTalent',
            type: 'multi-select',
            options: DUMMY_TALENT_RETURN,
            placeholder: 'Select employee',
            label: "Sample Select With Profile",
            value: [],
            disabled: false,
            required: true,
            isMultiple: false,
            customClass: 'sample',
            hideClearIcon: false,
            isEmployeeSelection: false,
        },
        sampleDatetime: {
            id: 'datetime',
            type: 'datetime',
            maxHours: '23',
            maxMins: '59',
            value: '',
            placeholder: '-',
            label: "Sample Datetime",
            readOnly: false,
            required: true,
            disabled: false,
        },
    }), formElement = _a[0], setFormElement = _a[1];
    var inputChangedHandler = function (val, key) {
        switch (key) {
            case 'sampleCheckbox':
                formElement[key].value = val.target.checked;
                break;
            case 'sampleToggle':
                console.log(val.target.checked, 'val.target.checked');
                formElement[key].value = val.target.checked;
                break;
            case 'sampleMultiSelect':
                formElement[key].value = val.selected;
                break;
            case 'sampleFile':
            case 'sampleFileMultiple':
                formElement[key].selected = val.selected;
                break;
            case 'sampleSelectWithProfile':
                formElement[key].value = val.constructor === Array || val.constructor === String ? val : val.target.value;
                break;
            case 'sampleDatetime':
                formElement[key].value = val;
                break;
            case 'sampleDatepickerSingle':
                console.log(val.target.value);
                formElement[key].value = val ? val.target.value : null;
                break;
            case 'sampleDateTimepickerSingle':
                console.log(val);
                formElement[key].value = val ? val : null;
                break;
            case 'sampleDatepickerMultiple':
            case 'sampleDatepickerMultiple2':
            case 'sampleDatepickerMultiple3':
                formElement[key].value = val ? val.target.value : null;
                break;
            default:
                console.log(val.target.value, 'val.target.value');
                formElement[key].value = val ? val.target.value : null;
                break;
        }
        setFormElement(__assign(__assign({}, formElement), { formElement: formElement }));
    };
    var onBluredHandler = function (val, key) {
        switch (key) {
            default:
                formElement[key].value = val ? val.target.value : null;
                console.log(val.target.value);
                break;
        }
        setFormElement(__assign(__assign({}, formElement), { formElement: formElement }));
    };
    return (react_1.default.createElement("div", { style: { padding: '20px' } },
        react_1.default.createElement("h3", null, "Empower Inputs"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleInput, allowedChar: {
                    alphabet: true,
                    numeric: false,
                    space: false,
                    allowedSymbols: ['&,ñ']
                }, onChanged: function (e) { return inputChangedHandler(e, 'sampleInput'); }, onBlured: function (e) { return onBluredHandler(e, 'sampleInput'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleInputNumeric, onChanged: function (e) { return inputChangedHandler(e, 'sampleInputNumeric'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleInputTime, onChanged: function (e) { return inputChangedHandler(e, 'sampleInputTime'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleTextarea, onChanged: function (e) { return inputChangedHandler(e, 'sampleTextarea'); }, allowedChar: {
                    alphabet: true,
                    numeric: false,
                    space: true
                } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleTextareaSpecial, onChanged: function (e) { return inputChangedHandler(e, 'sampleTextareaSpecial'); }, allowedChar: {
                    alphabet: true,
                    numeric: true,
                    space: true,
                    allowedSymbols: ['&.,']
                } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleSelect, onChanged: function (e) { return inputChangedHandler(e, 'sampleSelect'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleSelectGroupOption, onChanged: function (e) { return inputChangedHandler(e, 'sampleSelectGroupOption'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleMultiSelect, onChanged: function (e) { return inputChangedHandler(e, 'sampleMultiSelect'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleMultiSelectGroupOption, onChanged: function (e) { return inputChangedHandler(e, 'sampleMultiSelectGroupOption'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleToggleButton, onChanged: function (e) { return inputChangedHandler(e, 'sampleToggleButton'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleCheckbox, onChanged: function (e) { return inputChangedHandler(e, 'sampleCheckbox'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleDatepickerSingle, onChanged: function (e) { return inputChangedHandler(e, 'sampleDatepickerSingle'); } })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleDateTimepickerSingle, onChanged: function (e) { return inputChangedHandler(e, 'sampleDateTimepickerSingle'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleDatepickerMultiple, onChanged: function (e) { return inputChangedHandler(e, 'sampleDatepickerMultiple'); } })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleDatepickerMultiple2, onChanged: function (e) { return inputChangedHandler(e, 'sampleDatepickerMultiple2'); } })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleDatepickerMultiple3, onChanged: function (e) { return inputChangedHandler(e, 'sampleDatepickerMultiple3'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleFile, hasChips: true, onChanged: function (e) { return inputChangedHandler(e, 'sampleFile'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleFileMultiple, hasChips: true, onChanged: function (e) { return inputChangedHandler(e, 'sampleFileMultiple'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleToggle, onChanged: function (e) { return inputChangedHandler(e, 'sampleToggle'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleCurrency, onChanged: function (e) { return inputChangedHandler(e, 'sampleCurrency'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleRadio, onChanged: function (e) { return inputChangedHandler(e, 'sampleRadio'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleHours, onChanged: function (e) { return inputChangedHandler(e, 'sampleHours'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleMinutes, onChanged: function (e) { return inputChangedHandler(e, 'sampleMinutes'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleHourMin, onChanged: function (e) { return inputChangedHandler(e, 'sampleHourMin'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.InputSelectionHandler, { config: formElement.sampleDatetime, onChanged: function (e) { return inputChangedHandler(e, 'sampleDatetime'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.SelectWithDisplay, { config: formElement.sampleSelectWithDisplay, onChanged: function (e) { return inputChangedHandler(e, 'sampleSelectWithDisplay'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.SelectWithLinks, { config: formElement.sampleSelectWithLinks, onChanged: function (e) { return inputChangedHandler(e, 'sampleSelectWithLinks'); } })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.SelectWithProfile, { config: formElement.sampleSelectWithProfile, onChanged: function (e) { return inputChangedHandler(e, 'sampleSelectWithProfile'); } }))));
};
exports.default = App;
