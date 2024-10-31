
# CommonLoadingContainer Component Guide

## Purpose

The `CommonLoadingContainer` component provides a flexible loading state with a spinner and status message display. It handles multiple 
scenarios: a loading spinner with a status message, an error state with a custom illustration, and the ability to center content both 
vertically and horizontally. This component is designed to enhance user experience by visually indicating loading or error states in 
Salesforce Lightning Web Components.

## Usage Instructions

To use the `CommonLoadingContainer` component within a parent component or application:

### 1. Include the Component in a Parent Component:

```html
<c-common-loading-container 
    condition-to-show={dataLoaded} 
    has-error={errorCondition} 
    status-text="Loading your data" 
    illustration-config={illustrationConfig} 
    center-illustration="true">
    <template slot="body">
        <!-- Content to display after loading completes -->
    </template>
</c-common-loading-container>
```

### 2. Customize Component Properties:

- **conditionToShow**: Controls when the slot content is displayed, typically set to true once data has loaded.
- **hasError**: If set to true, displays an error illustration instead of the loading spinner.
- **statusText**: Text to show beside the loading spinner, appended to "Loading...".
- **illustrationConfig**: Configures the illustration to display when in error state.
- **centerIllustration**: Centers the illustration on the screen.

### 3. Custom Styling:

The `statusMessageClasses` getter determines the status message's font size, depending on the `customStatusMessageClass` property.
