package com.archnet.salesforce;

import org.springframework.social.oauth2.AbstractOAuth2ServiceProvider;
import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.social.salesforce.api.impl.SalesforceTemplate;
import org.springframework.social.salesforce.connect.SalesforceOAuth2Template;

public class MySF extends  AbstractOAuth2ServiceProvider<Salesforce>{

	 //Provider ID
    public final static String ID = "salesforce";
    
    public final static String PRODUCTION_GATEWAY_URL = "https://login.salesforce.com";
    public final static String SANDBOX_GATEWAY_URL    = "https://test.salesforce.com";
    
    public final static String TOKEN_PATH      = "/services/oauth2/token";
    public final static String AUTHORIZE_PATH  = "/services/oauth2/authorize";

    public MySF(String clientId, String clientSecret) {
        this(clientId, clientSecret,
                PRODUCTION_GATEWAY_URL + AUTHORIZE_PATH,
                PRODUCTION_GATEWAY_URL + TOKEN_PATH);
    }
    
    public MySF(String clientId, String clientSecret, boolean sandbox)
    {
        super(new MySFOperations(clientId, clientSecret, (sandbox ? SANDBOX_GATEWAY_URL : PRODUCTION_GATEWAY_URL) + AUTHORIZE_PATH, (sandbox ? SANDBOX_GATEWAY_URL : PRODUCTION_GATEWAY_URL) + TOKEN_PATH));
    }

    public MySF(String clientId, String clientSecret, String authorizeUrl, String tokenUrl) {
        super(new MySFOperations(clientId, clientSecret, authorizeUrl, tokenUrl));
    }


    public Salesforce getApi(String accessToken) {
        SalesforceTemplate template = new SalesforceTemplate(accessToken);

        // gets the returned instance url and sets to Salesforce template as base url.
        String instanceUrl = ((SalesforceOAuth2Template) getOAuthOperations()).getInstanceUrl();
        if (instanceUrl != null) {
            template.setInstanceUrl(instanceUrl);
        }

        return template;
    }

}
