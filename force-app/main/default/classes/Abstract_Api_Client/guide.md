
# Abstract_Api_Client Class Guide

## Purpose

The `Abstract_Api_Client` is an abstract Apex class that provides a standardized framework for API clients in Salesforce. 
It includes reusable methods and properties that handle HTTP request preparation, response processing, and error management. 
Subclasses can extend this class to interact with specific APIs while leveraging consistent HTTP request management and logging.

## Usage Instructions

To use the `Abstract_Api_Client` class:

### 1. Extend the Class:

Create a subclass that extends `Abstract_Api_Client` and implements the required abstract methods. 
Use this class as a foundation for specific API client implementations.

```apex
public class UserApi_Client extends Abstract_Api_Client {
    // Implement abstract methods here, such as getBaseURL, getBearerToken, etc.
}
```

### 2. Implement Abstract Methods:

Implement the following methods in the subclass to specify API details:

- **getBaseURL()**: Returns the base URL for the API endpoint.
- **getBearerToken()**: Returns the authorization token for secure requests.
- **getCertificateName()**: Returns the client certificate name if applicable.
- **getCompress()**: Specifies whether request compression is enabled.
- **getXAPIKey()**: Returns the X-API key if required.

### 3. Initialize the Request:

In the subclass constructor, call `init()` with necessary parameters (path, method, requestBody, and responseType) 
to set up the HTTP request. This prepares the request for the API client.

### 4. Send the Request:

Use `processRequest()` to prepare and send the HTTP request. Handle the response or errors as needed:

```apex
UserApi_Client client = new UserApi_Client();
Object response = client.processRequest();
```

This class framework ensures that your API clients follow a uniform process for setting headers, sending requests, 
and handling errors while allowing customization for each unique API interaction.
