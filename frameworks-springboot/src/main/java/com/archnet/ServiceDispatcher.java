package com.archnet;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/service")
public class ServiceDispatcher {

	@Autowired
	private SObjectController objectController;

	@RequestMapping(path = "/types", method = RequestMethod.POST)
	public Object types() throws Exception {

		return objectController.describe();
	}

	@RequestMapping(path = "/describe", method = RequestMethod.POST)
	public Object describe(@RequestParam("type") String type) {

		return objectController.describe(type);

	}

	@RequestMapping(path = "/query", method = RequestMethod.POST)
	public Object query(@RequestParam(name = "q") String query,
			@RequestParam(name = "offset", required = false, defaultValue = "0") int offset,
			@RequestParam(name = "max", required = false, defaultValue = "10") int max) {

		return objectController.query(query);
	}

	@RequestMapping(path = "/create", method = RequestMethod.POST)
	public Object create(@RequestParam("name") String name, Map<String, Object> fields) {

		return objectController.create(name, fields);
	}

	@RequestMapping(path = "/update", method = RequestMethod.POST)
	public Object update(@RequestParam("objectType") String objectType,@RequestParam("Id") String Id,@RequestParam("fields") String fields) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Map mp =  mapper.readValue(fields, Map.class);
			//String id = (String)mp.remove("Id");
			objectController.update(objectType, Id, mp);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return fields;
		//return objectController.update("", "", fields);
	}

	@RequestMapping(path = "/delete", method = RequestMethod.POST)
	public Object delete(@RequestParam("name") String name, @RequestParam("id") String objectId) {
		return objectController.delete(name, objectId);
	}
}
