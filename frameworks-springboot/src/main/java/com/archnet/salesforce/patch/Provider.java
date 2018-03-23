package com.archnet.salesforce.patch;

import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.social.salesforce.api.impl.SalesforceTemplate;
import org.springframework.social.salesforce.connect.SalesforceOAuth2Template;
import org.springframework.social.salesforce.connect.SalesforceServiceProvider;

public class Provider extends SalesforceServiceProvider {

	public Provider(String clientId, String clientSecret, boolean sandbox) {
		super(clientId, clientSecret, sandbox);
	}

	public Provider(String clientId, String clientSecret, String authorizeUrl, String tokenUrl) {
		super(clientId, clientSecret, authorizeUrl, tokenUrl);
	}

	public Provider(String clientId, String clientSecret) {
		super(clientId, clientSecret);
	}

	public Salesforce getApi(String accessToken) {
		SalesforceTemplate template = new com.archnet.salesforce.patch.Salesforce(accessToken);

		// gets the returned instance url and sets to Salesforce template as
		// base url.
		String instanceUrl = ((SalesforceOAuth2Template) getOAuthOperations()).getInstanceUrl();
		if (instanceUrl != null) {
			template.setInstanceUrl(instanceUrl);
		}

		return template;
	}

}
