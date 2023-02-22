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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("../scss/styles.scss");
var Assets_1 = require("../assets/Assets");
var Popover = function (_a) {
    var open = _a.open, origin = _a.origin, children = _a.children, onClick = _a.onClick;
    return (react_1.default.createElement(react_1.Fragment, null, open &&
        react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: "em-overlay", onClick: function (e) { return onClick(e); } }),
            react_1.default.createElement("div", { className: "em-popover", style: origin !== undefined && origin === "right" ? { right: 200 + 'px' } : { left: 0 + 'px' } }, children))));
};
var SelectWithDisplay = function (_a) {
    var config = _a.config, customClass = _a.customClass, onChanged = _a.onChanged;
    var disabled = config.disabled, options = config.options, type = config.type, value = config.value, placeholder = config.placeholder, id = config.id, isEmployeeSelection = config.isEmployeeSelection, hideClearIcon = config.hideClearIcon, isMultiple = config.isMultiple;
    customClass = customClass ? customClass : '';
    // React Hook
    var _b = (0, react_1.useState)(false), dropdownPopover = _b[0], setDropdownPopover = _b[1];
    var _c = (0, react_1.useState)(options ? options : []), optionsArray = _c[0], setOptionsArray = _c[1];
    var _d = (0, react_1.useState)(""), selectTemporaryValue = _d[0], setSelectTemporaryValue = _d[1];
    var _e = (0, react_1.useState)(null), keyOption = _e[0], setKeyOption = _e[1];
    var _f = (0, react_1.useState)(null), objectKeyOption = _f[0], setObjectKeyOption = _f[1];
    // Dropdown Config Variable
    var dropdownClass = disabled && disabled.constructor === Boolean ? 'em-input-field input-disabled' : 'em-input-field';
    var multiSelectValue = type === 'multi-select' ? (value && value.constructor === Array && value.length > 0 ? (getSelectInputValue(value)) : '') : '';
    var selectedValue = value && (value.constructor === String || value.constructor === Number) && value !== "" ? (getSelectInputValue(value)) : value && value.constructor === Array && value.length > 0 ? (getSelectInputValue(value)) : placeholder && placeholder.constructor === String ? placeholder : '-';
    /**
    * popoverRequestHandler
    * hide and show the options popover
    * @param {*} e - event
    * @param {*} action - it can be either on-focus or on-blur
    */
    function popoverRequestHandler(e, action) {
        if (action === 'on-focus') {
            type === 'select' ? setOptionsArray(options) : filterOptions(selectTemporaryValue, value);
            setDropdownPopover(e.currentTarget);
            setKeyOption(null);
            setObjectKeyOption(null);
        }
        else {
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
    function optionSelectionHandler(e, opt) {
        if (type && type === 'select') {
            popoverRequestHandler(e, 'on-blur');
            return onChanged ? onChanged(e, opt.value) : false;
        }
        else if (type && type === 'multi-select') {
            var valueCopy_1 = [];
            if (isMultiple) {
                valueCopy_1 = selectedOptions(__spreadArray([], value, true));
                if (opt === 'select-all') {
                    var notSelectedOptions = [];
                    if (optionsArray.constructor === Array) {
                        notSelectedOptions = optionsArray.filter(function (item) {
                            return valueCopy_1.indexOf(item) < 0;
                        });
                        if (notSelectedOptions.length > 0) {
                            valueCopy_1 = __spreadArray(__spreadArray([], valueCopy_1, true), notSelectedOptions, true);
                        }
                        else {
                            valueCopy_1 = optionsArray.filter(function (item) {
                                return valueCopy_1.indexOf(item) < -1;
                            });
                        }
                    }
                    else if (optionsArray.constructor === Object) {
                        var mergeOptions_1 = [];
                        Object.values(options).map(function (optval) {
                            mergeOptions_1 = __spreadArray(__spreadArray([], mergeOptions_1, true), optval.options, true);
                            return optval;
                        });
                        notSelectedOptions = mergeOptions_1.filter(function (item) {
                            return valueCopy_1.indexOf(item) < 0;
                        });
                        if (notSelectedOptions.length > 0) {
                            valueCopy_1 = __spreadArray(__spreadArray([], valueCopy_1, true), notSelectedOptions, true);
                        }
                        else {
                            valueCopy_1 = mergeOptions_1.filter(function (item) {
                                return valueCopy_1.indexOf(item) < -1;
                            });
                        }
                    }
                }
                else {
                    var optIdx = valueCopy_1.indexOf(opt);
                    if (optIdx >= 0) {
                        valueCopy_1.splice(optIdx, 1);
                    }
                    else {
                        valueCopy_1 = __spreadArray(__spreadArray([], valueCopy_1, true), [opt], false);
                    }
                }
                valueCopy_1 = valueCopy_1.map(function (item) {
                    return item.value;
                });
                var filteredOptions = __spreadArray([], optionsArray, true).filter(function (item) { return (!valueCopy_1.includes(item.value)); });
                if (filteredOptions.length === 0) {
                    popoverRequestHandler(e, 'on-blur');
                }
            }
            else {
                valueCopy_1.push(opt.value);
                popoverRequestHandler(e, 'on-blur');
            }
            filterOptions(selectTemporaryValue, valueCopy_1);
            return onChanged ? onChanged(valueCopy_1) : false;
        }
    }
    /**
    * inputChangedHandler
    * get the current value from the input text field
    * @param {*} e - event which will be used to get the changed value
    */
    function inputChangedHandler(e) {
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
    function getSelectInputValue(val) {
        if (type === 'multi-select' && val.constructor === Array) {
            var selectedLabels = selectedOptions(val);
            if (val.length < 6) {
                selectedLabels = selectedLabels.map(function (item) {
                    return item.label;
                });
            }
            else {
                selectedLabels = [val.length + (isEmployeeSelection ? ' employees' : ' Selected Item(s)')];
            }
            return selectedLabels.join(', ');
        }
        else if (type === 'select' && (val.constructor === String || val.constructor === Number)) {
            var optArray = selectedOptions(val);
            return optArray.length > 0 ? optArray[0].label : val.toString();
        }
        else {
            return '';
        }
    }
    /**
    * selectedOptions
    * get the selected options from the values given
    * @param {*} val - values selected
    * return String - converted values into string
    */
    function selectedOptions(val) {
        var selectedOptionValue = [];
        if (options && options.constructor === Array) {
            selectedOptionValue = options.filter(function (item) {
                return (val && val.constructor === Array && val.indexOf(item.value) > -1) || item.value === val;
            });
        }
        else if (options && options.constructor === Object) {
            var mergeOptions_2 = [];
            Object.values(options).map(function (optval) {
                mergeOptions_2 = __spreadArray(__spreadArray([], mergeOptions_2, true), optval.options, true);
                return optval;
            });
            selectedOptionValue = mergeOptions_2.filter(function (item) {
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
    function filterOptions(search, values) {
        if (type === 'multi-select') {
            if (optionsArray && optionsArray.constructor === Array) {
                var selectedOptionsVariable = selectedOptions(values);
                optionsArray = options.filter(function (item) {
                    return values.indexOf(item.value) < 0 && item.label.toLowerCase().search(search.toLowerCase()) > -1;
                });
                values = selectedOptionsVariable.filter(function (item) {
                    return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                });
                setOptionsArray(__spreadArray([], optionsArray, true));
            }
            else if (optionsArray && optionsArray.constructor === Object) {
                var optionsArrayCopy_1 = {};
                var selectedOptionsVariable = selectedOptions(values);
                if (selectedOptionsVariable.length > 0) {
                    selectedOptionsVariable = selectedOptionsVariable.filter(function (item) {
                        return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                    });
                    if (selectedOptionsVariable.length > 0) {
                        optionsArrayCopy_1['selected-values'] = { label: 'Selected', options: selectedOptionsVariable };
                    }
                }
                Object.keys(options).map(function (optgroup) {
                    var filterOptionsArray = [];
                    if (options[optgroup].label.toLowerCase().search(search.toLowerCase()) > -1) {
                        filterOptionsArray = options[optgroup].options.filter(function (item) {
                            return values.indexOf(item.value) < 0;
                        });
                    }
                    else {
                        filterOptionsArray = options[optgroup].options.filter(function (item) {
                            return values.indexOf(item.value) < 0 && item.label.toLowerCase().search(search.toLowerCase()) > -1;
                        });
                    }
                    if (filterOptionsArray.length > 0) {
                        optionsArrayCopy_1[optgroup] = { label: options[optgroup].label, options: filterOptionsArray };
                    }
                    return optgroup;
                });
                setOptionsArray(optionsArrayCopy_1);
            }
        }
        else {
            if (optionsArray && optionsArray.constructor === Array) {
                optionsArray = options.filter(function (item) {
                    return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                });
                setOptionsArray(__spreadArray([], optionsArray, true));
            }
            else if (optionsArray && optionsArray.constructor === Object) {
                var optionsArrayCopy_2 = {};
                Object.keys(options).map(function (optgroup) {
                    if (options[optgroup].label.toLowerCase().search(search.toLowerCase()) > -1) {
                        optionsArrayCopy_2[optgroup] = __assign({}, options[optgroup]);
                    }
                    else {
                        var filterOptionsArray = options[optgroup].options.filter(function (item) {
                            return item.label.toLowerCase().search(search.toLowerCase()) > -1;
                        });
                        if (filterOptionsArray.length > 0) {
                            optionsArrayCopy_2[optgroup] = { label: options[optgroup].label, options: filterOptionsArray };
                        }
                    }
                    return optgroup;
                });
                setOptionsArray(optionsArrayCopy_2);
            }
        }
    }
    /**
    * handleCheckedOptions
    * determine if the item from the options were selected
    * @param {*} opt - item from the options
    * return Boolean - selected/not
    */
    function handleCheckedOptions(opt) {
        if (opt === 'select-all') {
            var notSelectedOptions = null;
            if (value && value.constructor === Array) {
                if (optionsArray.constructor === Array) {
                    notSelectedOptions = optionsArray.filter(function (item) {
                        return value.indexOf(item.value) < 0;
                    });
                }
                else if (optionsArray.constructor === Object) {
                    var mergeOptions_3 = [];
                    Object.values(optionsArray).map(function (optval) {
                        mergeOptions_3 = __spreadArray(__spreadArray([], mergeOptions_3, true), optval.options, true);
                        return optval;
                    });
                    notSelectedOptions = mergeOptions_3.filter(function (item) {
                        return value.indexOf(item.value) < 0;
                    });
                }
            }
            return notSelectedOptions && notSelectedOptions.length === 0 ? true : false;
        }
        else {
            return value && value.constructor === Array && value.filter(function (val) { return (opt.value === val); }).length > 0 ? true : false;
        }
    }
    function handleKeyPress(event) {
        if (Boolean(dropdownPopover)) {
            if (optionsArray && optionsArray.constructor === Array && optionsArray.length > 0) {
                if (event.key === 'ArrowDown') {
                    if (keyOption === null) {
                        setKeyOption(0);
                    }
                    else {
                        var updatedKey = (keyOption + 1) >= optionsArray.length ? (optionsArray.length - 1) : keyOption + 1;
                        setKeyOption(updatedKey);
                    }
                }
                else if (event.key === 'ArrowUp') {
                    if (keyOption === null) {
                        setKeyOption(0);
                    }
                    else {
                        var updatedKey = keyOption > 0 ? (keyOption - 1) : 0;
                        setKeyOption(updatedKey);
                    }
                }
                else if (event.key === 'Enter') {
                    if (keyOption !== null && optionsArray[keyOption]) {
                        optionSelectionHandler(event, optionsArray[keyOption]);
                    }
                }
            }
            else if (optionsArray && optionsArray.constructor === Object && Object.keys(optionsArray).length > 0) {
                var optionsKeyArray = Object.keys(optionsArray);
                if (event.key === 'ArrowDown') {
                    if (keyOption === null || objectKeyOption === null) {
                        setKeyOption(0);
                        setObjectKeyOption(0);
                    }
                    else {
                        if (optionsArray[optionsKeyArray[objectKeyOption]].options.length <= keyOption + 1) {
                            if (objectKeyOption + 1 < optionsKeyArray.length) {
                                setKeyOption(0);
                                setObjectKeyOption(objectKeyOption + 1);
                            }
                        }
                        else {
                            setKeyOption(keyOption + 1);
                        }
                    }
                }
                else if (event.key === 'ArrowUp') {
                    if (keyOption === null || objectKeyOption === null) {
                        setKeyOption(0);
                        setObjectKeyOption(0);
                    }
                    else {
                        if (keyOption > 0) {
                            setKeyOption(keyOption - 1);
                        }
                        else {
                            if (objectKeyOption > 0) {
                                var updatedKey = optionsArray[optionsKeyArray[objectKeyOption - 1]].options.length - 1;
                                setKeyOption(updatedKey);
                                setObjectKeyOption(objectKeyOption - 1);
                            }
                        }
                    }
                }
                else if (event.key === 'Enter') {
                    if (keyOption !== null && objectKeyOption !== null && optionsArray[optionsKeyArray[objectKeyOption]].options[keyOption]) {
                        optionSelectionHandler(event, optionsArray[optionsKeyArray[objectKeyOption]].options[keyOption]);
                    }
                }
            }
        }
        else {
            if (event.key === 'Enter' || event.key === 'ArrowDown') {
                popoverRequestHandler(event, 'on-focus');
            }
        }
    }
    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    var clearValuesHandler = function (event) {
        event && event.preventDefault();
        return onChanged && onChanged(event);
    };
    return (react_1.default.createElement("div", { className: 'em-select ' + customClass },
        react_1.default.createElement("div", { className: dropdownClass, id: id && id.constructor === String ? id : 'select-default-id', "data-testid": id && id.constructor === String ? id : 'select-default-id' },
            react_1.default.createElement("div", { className: "em-input-title" }, config.label && config.label != '' && react_1.default.createElement("label", { className: "em-input-label" },
                config.label,
                config.hasOwnProperty('required') && config.required == true && react_1.default.createElement("span", { className: "text-danger" }, "*"))),
            type === 'select' ? (react_1.default.createElement("input", { className: "em-select-input", "data-testid": id && id.constructor === String ? "select-input-".concat(id) : 'select-input-default-id', id: id && id.constructor === String ? "".concat(id, "-select-input-default-id") : "select-input-default-id", type: "text", onFocus: function (event) { return popoverRequestHandler(event, 'on-focus'); }, onClick: function (event) { return popoverRequestHandler(event, 'on-focus'); }, onChange: function (event) { return inputChangedHandler(event); }, value: selectTemporaryValue, placeholder: selectedValue, autoComplete: 'off', disabled: disabled ? disabled : false, onKeyDown: function (event) { return handleKeyPress(event); } })) : (react_1.default.createElement("input", { className: "em-select-input", "data-testid": id && id.constructor === String ? "".concat(id, "-multi-select-input") : "multi-select-input-default-id", id: id && id.constructor === String ? "".concat(id, "-multi-select-input-default-id") : "multi-select-input-default-id", type: "text", autoComplete: 'off', onClick: function (event) { return popoverRequestHandler(event, 'on-focus'); }, placeholder: placeholder, value: "", disabled: disabled ? disabled : false, readOnly: true })),
            type === 'select' ? (disabled ? (react_1.default.createElement("div", { "data-testid": 'dropdown-icon', className: "em-input-icon" }, Assets_1.SVG_ARROWDOWN)) : (value && value !== "" && !hideClearIcon ? (react_1.default.createElement("div", { "data-testid": 'clear-icon', onClick: function (event) { return clearValuesHandler(event); }, className: 'em-field-icon' }, Assets_1.SVG_CLOSE_GRAY)) : (react_1.default.createElement("div", { "data-testid": 'dropdown-icon', className: "em-field-icon", onClick: function (event) { return popoverRequestHandler(event, 'on-focus'); } }, Assets_1.SVG_CLOSE_GRAY)))) : null),
        react_1.default.createElement(Popover, { id: "select-popover", className: Boolean(dropdownPopover) ? 'open-popover' : '', open: Boolean(dropdownPopover), onClick: function (event) { return popoverRequestHandler(event, 'on-blur'); } },
            react_1.default.createElement("div", { className: "em-select-popover" },
                type === 'multi-select' ? (react_1.default.createElement("div", { className: "em-select-search  e-input" },
                    react_1.default.createElement("input", { id: "multi-select-input-search", type: "text", autoComplete: 'off', onFocus: function (event) { return popoverRequestHandler(event, 'on-focus'); }, onChange: function (event) { return inputChangedHandler(event); }, placeholder: "Search", value: selectTemporaryValue, disabled: disabled ? disabled : false }))) : null,
                optionsArray && optionsArray.constructor === Array && optionsArray.length > 0 ? (
                // Default array display of options
                react_1.default.createElement(react_1.Fragment, null, type === 'select' ? (optionsArray.map(function (opt, idx) { return (react_1.default.createElement("option", { className: keyOption === idx ? 'is-highlighted' : '', key: idx, onClick: function (event) { return optionSelectionHandler(event, opt); } }, opt.label)); })) : type === 'multi-select' ? (react_1.default.createElement(react_1.Fragment, null,
                    react_1.default.createElement("div", { className: "em-select-checklist" }, optionsArray.map(function (opt, idx) { return (react_1.default.createElement("div", { className: "em-checklist-item", id: 'option-div', "data-testid": "multi-select-option-div", key: idx, onClick: function (event) { return optionSelectionHandler(event, opt); } },
                        react_1.default.createElement("label", { htmlFor: "" }),
                        react_1.default.createElement("span", null, opt.label))); })))) : react_1.default.createElement("span", null, "No options"))) : optionsArray && optionsArray.constructor === Object && Object.keys(optionsArray).length > 0 ? (
                // Display of options when grouped (*its only applicable on select type)
                react_1.default.createElement(react_1.Fragment, null, type === 'select' ? (Object.keys(optionsArray).map(function (id, grpIdx) { return (react_1.default.createElement("optgroup", { key: id, label: optionsArray[id].label ? optionsArray[id].label : 'Invalid Group Label' }, optionsArray[id].options && optionsArray[id].options.constructor === Array && optionsArray[id].options.length > 0 ? (optionsArray[id].options.map(function (opt, idx) { return (react_1.default.createElement("option", { key: idx, className: (grpIdx === objectKeyOption && keyOption === idx) ? 'is-highlighted' : '', onClick: function (event) { return optionSelectionHandler(event, opt); } }, opt.label)); })) : null)); })) : type === 'multi-select' ? (react_1.default.createElement(react_1.Fragment, null,
                    react_1.default.createElement("div", { className: "em-select-all" }, Object.keys(optionsArray).length > 1 || (Object.keys(optionsArray).length === 1 && optionsArray[Object.keys(optionsArray)[0]].options && optionsArray[Object.keys(optionsArray)[0]].options.constructor === Array && optionsArray[Object.keys(optionsArray)[0]].options.length > 1) ? (react_1.default.createElement("div", { key: 'select-all', onClick: function (event) { return optionSelectionHandler(event, 'select-all'); } },
                        react_1.default.createElement("input", { type: "checkbox", checked: handleCheckedOptions('select-all'), id: 'select-all', readOnly: true }),
                        react_1.default.createElement("span", null, "Select All"))) : null),
                    Object.keys(optionsArray).map(function (id) { return (react_1.default.createElement(react_1.Fragment, { key: id },
                        react_1.default.createElement("div", { className: "em-select-checklist" },
                            id !== 'selected-values' ? (react_1.default.createElement("optgroup", { label: optionsArray[id].label ? optionsArray[id].label : 'Invalid Group Label' })) : null,
                            optionsArray[id].options && optionsArray[id].options.constructor === Array && optionsArray[id].options.length > 0 ? (optionsArray[id].options.map(function (opt, idx) { return (react_1.default.createElement("div", { id: 'option-div', key: idx, onClick: function (event) { return optionSelectionHandler(event, opt); } },
                                react_1.default.createElement("input", { type: "checkbox", checked: handleCheckedOptions(opt), id: opt.value, readOnly: true }),
                                react_1.default.createElement("span", null, opt.label))); })) : react_1.default.createElement("span", { className: "em-noresult" }, "No options")))); }))) : react_1.default.createElement("span", { className: "em-noresult" }, "No options"))) : react_1.default.createElement("div", { className: "em-noresult" }, "No options")))));
};
exports.default = SelectWithDisplay;
