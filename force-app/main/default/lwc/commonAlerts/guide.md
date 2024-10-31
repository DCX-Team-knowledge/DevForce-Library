
# CommonAlerts Component Guide

## Purpose

The `CommonAlerts` component displays alert messages with customizable types and styles within a Salesforce Lightning Web Component. 
It processes an array of alert objects, each containing information about the alert type and message, and displays them with 
appropriate styles and icons based on their type. This component is useful for conveying different levels of notifications, 
such as warnings, info, or critical alerts.

## Usage Instructions

To use the `CommonAlerts` component within a parent component or application:

### 1. Include the Component in a Parent Component:

```html
<c-common-alerts alerts={alertList}></c-common-alerts>
```

### 2. Customize Component Properties:

- **alerts**: Pass an array of alert objects, each containing the following properties:
  - **alertType**: Defines the type of alert (e.g., "info", "warning", "critical"). This determines the style and icon used.
  - **message**: The alert message text.

The component will automatically apply relevant styles based on the alert type and generate an icon accordingly.
