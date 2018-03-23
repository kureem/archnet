package com.archnet.salesforce.patch;

import org.springframework.social.connect.support.OAuth2ConnectionFactory;
import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.social.salesforce.connect.SalesforceAdapter;

public class ConnectionFactory extends OAuth2ConnectionFactory<Salesforce>{

	 public ConnectionFactory(String clientId, String clientSecret) {
	        super(Provider.ID, new Provider(clientId, clientSecret),
	                new SalesforceAdapter());
	    }
	    
	    public ConnectionFactory(String clientId, String clientSecret, boolean sandbox) {
	        super(Provider.ID, new Provider(clientId, clientSecret, sandbox),
	                sandbox ? new SalesforceAdapter(sandbox) : new SalesforceAdapter());
	    }

	    public ConnectionFactory(String clientId, String clientSecret, String instanceUrl) {
	        super(Provider.ID, new Provider(clientId, clientSecret),
	              new SalesforceAdapter(instanceUrl));
	    }
	    
	    public ConnectionFactory(String clientId, String clientSecret, String instanceUrl, boolean sandbox) {
	        super(Provider.ID, new Provider(clientId, clientSecret, sandbox),
	              sandbox ? new SalesforceAdapter(instanceUrl, sandbox) : new SalesforceAdapter(instanceUrl));
	    }

	    @Deprecated
	    public ConnectionFactory(String clientId, String clientSecret, String authorizeUrl, String tokenUrl) {
	        super(Provider.ID, new Provider(clientId, clientSecret,
	                authorizeUrl, tokenUrl), new SalesforceAdapter());
	    }

	    @Deprecated
	    public ConnectionFactory(String clientId, String clientSecret, String authorizeUrl, String tokenUrl, String instanceUrl) {
	        super(Provider.ID, new Provider(clientId, clientSecret,
	                                                          authorizeUrl, tokenUrl), new SalesforceAdapter(instanceUrl));
	    }
	    
	    @Deprecated
	    public ConnectionFactory(String clientId, String clientSecret, String authorizeUrl, String tokenUrl, String instanceUrl, String gatewayUrl) {
	        super("salesforce", new Provider(clientId, clientSecret,
	                                                          authorizeUrl, tokenUrl), new SalesforceAdapter(instanceUrl, gatewayUrl));
	    }
}
