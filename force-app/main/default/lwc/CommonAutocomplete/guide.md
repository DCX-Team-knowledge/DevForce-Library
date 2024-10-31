
# CommonAutocomplete Component Guide

## Purpose

The `CommonAutocomplete` component provides a customizable input field with autocomplete functionality for Salesforce applications. 
It displays suggestions from a specified list (`datalist`) as the user types, improving data entry accuracy and speed. The component 
supports placeholder text, required fields, and enables or disables input as needed.

## Usage Instructions

To use the `CommonAutocomplete` component within a parent component or application:

### 1. Include the Component in a Parent Component:

```html
<c-common-autocomplete
    name="myInputField"
    placeholder="Search options..."
    label="Choose an option:"
    options={optionsList}
    required="true"
    onchange={handleInputChange}
></c-common-autocomplete>
```

### 2. Customize Component Properties:

- **name**: Specifies a unique name for the input.
- **placeholder**: Placeholder text for the input field.
- **label**: Label text for the field, which includes an asterisk (*) if required.
- **options**: Accepts an array of options with `label` and `value` properties.
- **required**: Marks the field as mandatory (displays error if empty).
- **disabled**: Disables the input if set to true.

