abstract public class Abstract_Api_Client {

	private static String AXIS_PRD_API_AUTHORIZATION = 'Authorization';
	private static String AXIS_PRD_API_BEARER = 'Bearer';  
	private static String AXIS_PRD_API_X_KEY = 'X-apikey';
    
    private String path;
    private String method;
    private String requestBody;
    private Type responseType;   
    private Map<string, string> headers = null; 
	private Integer responseCode;

    // We cannot inherit constructors -- call this from the constructor in the extending class
	public void init(String path, String method, String requestBody, Type responseType) {
        this.path = path;
        this.method = method;
        this.requestBody = requestBody;
        this.responseType = responseType;
	}	


	abstract private String getBaseURL();

	abstract private String getBearerToken();

	abstract private String getCertificateName();

	abstract private Boolean getCompress();

    abstract private String getXAPIKey();
	/*
		Internal Method to prepare the HttpRequest
	*/
    private HttpRequest prepareHttpRequest() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(getBaseURL() + path);
        Sys_Logger.debug('Path=' + path);  

		// If BearerToken exists create the Header
        if (getBearerToken() != null) {
            req.setHeader(AXIS_PRD_API_AUTHORIZATION, AXIS_PRD_API_BEARER + ' ' + getBearerToken());
        }

		// If certificate exists create the Header
        if (getCertificateName() != null) {
            req.setClientCertificateName(getCertificateName());
        }
        
        // If x api key exists create the Header
        if (getXAPIKey() != null) {
            req.setHeader(AXIS_PRD_API_X_KEY,getXAPIKey());
        }
        req.setHeader('Content-Type', 'application/json');        
        req.setCompressed(getCompress());
		req.setTimeout(60000); // 20000ms = 20s
        
        return req;
    }

    public virtual Object processRequest() {
		return (Object) processRequest(new Set<Integer> { 200 });
    }
    
	/*
		Method to prepare, call and handle result of call
	*/
    public virtual Object processRequest(Set<Integer> statusCodeSuccess) {
        HttpRequest req =  prepareHttpRequest();
        req.setMethod(method);
                
        if (requestBody != null) {
            req.setBody(requestBody);        
        }

        try {        	
            Http h = new Http();
            HttpResponse res = h.send(req);
            
            Sys_Logger.debug('Response: ' + res);
            
			// Check if response was successful
			responseCode = res.getStatusCode();
            if (!statusCodeSuccess.contains(responseCode)) {
                String message = 'Call to client failed. Path: ' + path +
                    ' StatusCode: ' + responseCode +
                    ' Response body: ' + res.getBody();
                Sys_Logger.warn(message);
                throw new Sys_AxisApiException(message);
            }
        	if (responseType == null) { 
        		return res.getBody();	// No Type return raw-body
        	}
            setHeaders(res);
        	Object responseObject;
        	String jsonString = res.getBody();
        	Sys_Logger.debug('Response body: ' + jsonString);
            responseObject = JSON.deserialize(jsonString, responseType);
        	Sys_Logger.debug('Deserialized:' + responseObject);
            return responseObject;
            
        } catch (Exception e) {
            String message = 'Call to client failed. Path: ' + path +
                ' Exception: ' + e;
            Sys_Logger.warn(message);
            throw new Sys_AxisApiException(message, e);
        }
    } 	

	public virtual Integer getResponseCode() {
		return responseCode;
	}

    public virtual Map<String, String> getHeaders() {
        return headers;
    }

    private void setHeaders(HttpResponse response) {
        headers = new Map<String, String>();
        for (String h : response.getHeaderKeys()) {
            if (String.isNotBlank(h)) {
                headers.put(h, response.getHeader(h));
            }
        }
    }

}
