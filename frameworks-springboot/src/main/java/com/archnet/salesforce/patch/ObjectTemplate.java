package com.archnet.salesforce.patch;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.social.salesforce.api.impl.SObjectsTemplate;
import org.springframework.web.client.RestTemplate;

public class ObjectTemplate extends SObjectsTemplate {

	private RestTemplate restTemplate;
	
	public ObjectTemplate(Salesforce api, RestTemplate restTemplate) {
		super(api, restTemplate);
		this.restTemplate = restTemplate;
	}
	
	@Override
    public Map<String, Object> update(String sObjectName, String sObjectId, Map<String, Object> fields) {
        requireAuthorization();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, Object>> entity = new HttpEntity<Map<String,Object>>(fields, headers);
       
        Map<String, Object> result =  restTemplate.postForObject(api.getBaseUrl() + "/{version}/sobjects/{sObjectName}/{sObjectId}", 
                entity, Map.class, getVersion(), sObjectName, sObjectId);
        // SF returns an empty body on success, so mimic the same update you'd get from a create success for consistency
        if (result == null) {
            result = new HashMap<String, Object>();
            result.put("id", sObjectId);
            result.put("success", true);
            result.put("errors", new ArrayList<String>());
        }
        return result;
    }

}
