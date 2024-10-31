
# Salesforce Components Repository

This repository is a collection of Salesforce-inspired, ready-to-use components and classes designed to streamline development and offer implementation guidance. The current structure follows a standard Salesforce project setup, with the **force-app/main/default/** directory containing organized folders for **classes** and **Lightning Web Components (LWC)**. Additional Salesforce metadata may be added later.

## Repository Structure
Here’s a quick summary of the main components and classes in this repository:

### Apex Code [Classes](./force-app/main/default/classes/)

- **Abstract_Api_Client**: Provides a foundational structure for API clients with customizable HTTP request handling, error management, and secure header setting.

### Lightning Web Components [LWC](./force-app/main/default/lwc/)

- **CrmCpErrorInterface**: A Salesforce-style error illustration component to visually indicate issues with customizable messages.
- **CommonAutocomplete**: An input component with autocomplete functionality for streamlined data entry.
- **EditModal**: A modal interface to edit individual items, dynamically configuring fields and labels.
- **CommonAlerts**: Displays customizable alert messages, styled based on alert types (info, warning, critical).
- **CommonLoadingContainer**: Provides a loading spinner with status messages, handling loading and error states flexibly.

Each component and class includes a guide on its purpose and usage, helping you implement them quickly and effectively.

## Contributing

We welcome contributions! To contribute to this project, please ensure your additions align with the scope and purpose of the repository, focusing on **generic use cases** that benefit a wide group of Salesforce developers. Avoid including custom business logic to keep the repository universally applicable.

1. Fork the repository and create your branch: `git checkout -b feature/YourFeature`.
2. Make your changes and test them thoroughly.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request to the main branch.

For significant changes, please open an issue first to discuss what you would like to change.

Thank you for helping make this repository a valuable resource for Salesforce developers!

---

This repository aims to be a growing toolkit for Salesforce developers—making it easy to find, use, and extend components that add value to any Salesforce project.
