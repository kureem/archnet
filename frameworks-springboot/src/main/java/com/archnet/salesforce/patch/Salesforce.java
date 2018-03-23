package com.archnet.salesforce.patch;

import org.springframework.social.salesforce.api.SObjectOperations;
import org.springframework.social.salesforce.api.impl.SalesforceTemplate;

public class Salesforce extends SalesforceTemplate {

	private SObjectOperations sObjectsOperations;

	public Salesforce() {
		super();
		initialise();
	}

	public Salesforce(String accessToken) {
		super(accessToken);
		initialise();
	}

	private void initialise() {
		sObjectsOperations = new ObjectTemplate(this, getRestTemplate());
	}

	@Override
	public SObjectOperations sObjectsOperations() {
		return sObjectsOperations;
	}

}
