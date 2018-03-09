package com.archnet.salesforce;

import java.util.Map;

import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.salesforce.connect.SalesforceOAuth2Template;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MySFOperations extends SalesforceOAuth2Template{

	 private String instanceUrl = null;
	
	public MySFOperations(String clientId, String clientSecret, String authorizeUrl, String authenticateUrl,
			String accessTokenUrl) {
		super(clientId, clientSecret, authorizeUrl, authenticateUrl, accessTokenUrl);
		// TODO Auto-generated constructor stub
	}

	public MySFOperations(String clientId, String clientSecret, String authorizeUrl, String accessTokenUrl) {
		super(clientId, clientSecret, authorizeUrl, accessTokenUrl);
		// TODO Auto-generated constructor stub
	}

	
    @Override
    protected AccessGrant createAccessGrant(String accessToken, String scope, String refreshToken, Long expiresIn, Map<String, Object> response) {
        this.instanceUrl = (String) response.get("instance_url");

        return super.createAccessGrant(accessToken, scope, refreshToken, expiresIn, response);
    }

    public String getInstanceUrl() {
        return instanceUrl;
    }
    
    
    /**
     * The default method from OAuth2Template is unable to handle the repsonse from Salesforce for an AccessGrant.  The Response is returned with a 
     * content type of application/octet-stream. Spring-social-core's OAuth2Template does not have a HttpMessageConverter registered that is able to
     * covert the response to a map even though it is Json but with a non-Json content type.
     */
    @Override
    protected AccessGrant postForAccessGrant(String accessTokenUrl, MultiValueMap<String, String> parameters) {
    	parameters.set("grant_type", "authorization_code");
        JsonNode response = getRestTemplate().postForObject(accessTokenUrl, parameters, JsonNode.class);
        
        ObjectMapper mapper = new ObjectMapper();
        @SuppressWarnings("unchecked")
        Map<String, Object> result = mapper.convertValue(response, Map.class);
        
        return this.createAccessGrant((String) result.get("access_token"), (String) result.get("scope"), (String) result.get("refresh_token"), getIntegerValue(result, "expires_in"), result);
    }
    
    
    // Retrieves object from map into an Integer, regardless of the object's actual type. Allows for flexibility in object type (eg, "3600" vs 3600).
    // Private Method from OAuth2Template
    private Long getIntegerValue(Map<String, Object> map, String key) {
        try {
            return Long.valueOf(String.valueOf(map.get(key))); // normalize to String before creating integer value;            
        } catch (NumberFormatException e) {
            return null;
        }
    }

}
