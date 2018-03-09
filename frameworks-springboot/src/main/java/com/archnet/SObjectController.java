package com.archnet;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.salesforce.api.QueryResult;
import org.springframework.social.salesforce.api.ResultItem;
import org.springframework.social.salesforce.api.SObjectDetail;
import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/objects")
public class SObjectController {

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

	@RequestMapping(path = "/describe",method = RequestMethod.GET)
	public Object describe() throws Exception {

		loadAPI();
		return salesforce.sObjectsOperations().getSObjects();
	}

	@RequestMapping(path = "/describe/{type}", method = RequestMethod.GET)
	public SObjectDetail describe(@PathVariable("type") String type) {

		loadAPI();
		return salesforce.sObjectsOperations().describeSObject(type);

	}

	@RequestMapping(path = "/query", method = RequestMethod.GET)
	public Object query(@RequestParam(name = "q") String query) {
		
		

		loadAPI();
		QueryResult result = salesforce.queryOperations().query(query);
		
		List<Object> ret = new ArrayList<>(result.getTotalSize());
		for(ResultItem item : result.getRecords()){
			ret.add(item.getAttributes());
		}
		
		return ret;
	}

	@RequestMapping(path = "/create", method = RequestMethod.POST)
	public Object create(@RequestParam("name") String name, Map<String, Object> fields) {

		loadAPI();
		return salesforce.sObjectsOperations().create(name, fields);
	}

	@RequestMapping(path = "/update", method = RequestMethod.POST)
	public Object update(@RequestParam("name") String name, @RequestParam("id") String objectId,
			Map<String, Object> fields) {
		loadAPI();
		return salesforce.sObjectsOperations().update(name, objectId, fields);
	}

	@RequestMapping(path = "/delete", method = RequestMethod.POST)
	public Object delete(@RequestParam("name") String name, @RequestParam("id") String objectId) {
		loadAPI();
		salesforce.sObjectsOperations().delete(name, objectId);
		return true;
	}

}
