package com.archnet;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.salesforce.api.QueryResult;
import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class ServiceDispatcher {

	
	private Salesforce salesforce;
	@Autowired
	private ConnectionRepository connectionRepository;

	private void loadAPI() {
		Connection<Salesforce> connection = connectionRepository.findPrimaryConnection(Salesforce.class);

		if (connection == null) {
			throw new RuntimeException("please authenticate first");
		} else {
			salesforce = connection.getApi();
		}

	}

	@RequestMapping(path = "/types",method = RequestMethod.GET)
	public Object describe() throws Exception {

		try{
			loadAPI();
		}catch(Exception e){
			return "405";
		}
		return salesforce.sObjectsOperations().getSObjects();
	}

	@RequestMapping(path = "/describe", method = RequestMethod.GET)
	public Object describe(@RequestParam("type") String type) {

		try{
			loadAPI();
		}catch(Exception e){
			return "405";
		}
		return salesforce.sObjectsOperations().describeSObject(type);

	}

	@RequestMapping(path = "/query", method = RequestMethod.GET)
	public Object query(@RequestParam(name = "q") String query, @RequestParam(name="offset", required=false,defaultValue="0") int offset, @RequestParam(name="max", required=false,defaultValue="10")int max ) {

		try{
			loadAPI();
		}catch(Exception e){
			return "405";
		}
		QueryResult result = salesforce.queryOperations().query(query);

		return result;
	}

	@RequestMapping(path = "/create", method = RequestMethod.POST)
	public Object create(@RequestParam("name") String name, Map<String, Object> fields) {

		try{
			loadAPI();
		}catch(Exception e){
			return "405";
		}
		return salesforce.sObjectsOperations().create(name, fields);
	}

	@RequestMapping(path = "/update", method = RequestMethod.POST)
	public Object update(@RequestParam("name") String name, @RequestParam("id") String objectId,
			Map<String, Object> fields) {
		try{
			loadAPI();
		}catch(Exception e){
			return "405";
		}
		return salesforce.sObjectsOperations().update(name, objectId, fields);
	}

	@RequestMapping(path = "/delete", method = RequestMethod.POST)
	public Object delete(@RequestParam("name") String name, @RequestParam("id") String objectId) {
		try{
			loadAPI();
		}catch(Exception e){
			return "405";
		}
		salesforce.sObjectsOperations().delete(name, objectId);
		return true;
	}
}
