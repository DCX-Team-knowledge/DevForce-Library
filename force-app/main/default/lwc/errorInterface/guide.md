
# CrmCpErrorInterface Component Guide

## Purpose

The `CrmCpErrorInterface` component provides a Salesforce-style error illustration with customizable text. 
It's designed to alert users to issues (such as data retrieval errors) and display a user-friendly error message. 
This component integrates a default header and allows dynamic customization of the message content, making it 
suitable for various error scenarios within Salesforce CRM.

## Usage Instructions

To use the `CrmCpErrorInterface` component within a parent component or application:

### 1. Include the Component in a Parent Component:

```html
<c-crm-cp-error-interface error-message-body="Unable to load the requested information. Please try again later."></c-crm-cp-error-interface>
```

### 2. Customize the Error Message:

- The default error header is **"Error retrieving data."**
- You can set `errorMessageBody` dynamically from a parent component or application to customize the body text of the error message based on the error context.
