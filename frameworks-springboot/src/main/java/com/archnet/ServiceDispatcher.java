package com.archnet;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class ServiceDispatcher {

	@Autowired
	private SObjectController objectController;

	@RequestMapping(path = "/types", method = RequestMethod.GET)
	public Object types() throws Exception {

		return objectController.describe();
	}

	@RequestMapping(path = "/describe", method = RequestMethod.GET)
	public Object describe(@RequestParam("type") String type) {

		return objectController.describe(type);

	}

	@RequestMapping(path = "/query", method = RequestMethod.GET)
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
	public Object update(@RequestParam("name") String name, @RequestParam("id") String objectId,
			Map<String, Object> fields) {
		return objectController.update(name, objectId, fields);
	}

	@RequestMapping(path = "/delete", method = RequestMethod.POST)
	public Object delete(@RequestParam("name") String name, @RequestParam("id") String objectId) {
		return objectController.delete(name, objectId);
	}
}
