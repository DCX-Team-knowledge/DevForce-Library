
# EditModal Component Guide

## Purpose

The `EditModal` component provides a modal interface for editing a single item’s content. It displays an input field within a modal, 
allowing users to modify values inline. The component dynamically assigns labels and values based on the content property, making it 
adaptable for various data sources. The design focuses on simplicity, only supporting one item at a time, making it ideal for targeted 
editing actions.

## Usage Instructions

To use the `EditModal` component within a parent component or application:

### 1. Include the Component in a Parent Component:

```html
<c-edit-modal content={contentData} onclose={handleModalClose}></c-edit-modal>
```

### 2. Customize Component Properties:

- **content**: Pass an array with a single object representing the item to be edited. 
   - The object should contain `label` and `value` properties.
- **label**: Displays the label for the input field, automatically capitalized if provided.
- **value**: Prepopulates the input field with the provided value.

### 3. Event Handling:

The `handleContentChange` method updates the content in real-time. When the user presses "Enter," the modal closes, 
returning the updated content to the parent component.
