package com.archnet.marshall;

import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.archnet.Project;
import com.archnet.ProjectService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/js")
public class JSController {

	@Autowired
	private ProjectService projectService;

	@RequestMapping(path = "/controller/{project}")
	public String generateController(@PathVariable("project") String project)
			throws JsonParseException, JsonMappingException, IOException {
		Project p = projectService.getProject(project + ".prj");

		String data = p.getData();
		//data = data.replace("\\\"", "\"");
		ObjectMapper m = new ObjectMapper();

		Component c = m.readValue(data, Component.class);

		return generateController(c);

	}

	public static String generateController(Component component) {
		String s = "";
		List<String> start = new LinkedList<>();
		start.add(s);
		controller(component, start);
		return start.get(0);
	}

	public static void controller(Component component, List<String> lstart) {

		for (BuilderEvent event : component.events) {

			String name = event.name + "_" + event.type;
			String start = lstart.get(0);
			start = start + "\n" + name + ":function(source,event){\n" + event.source + "\n},";
			lstart.set(0, start);
		}
		if (component.children != null) {
			for (Component c : component.children) {
				controller(c, lstart);
			}
		}

	}

	@RequestMapping(path = "/data/{project}")
	public String generateData(@PathVariable("project") String project) throws IOException {
		Project p = projectService.getProject(project + ".prj");

		String data = p.getData();
		data = data.replace("\\\"", "\"");
		return data;
	}

	@RequestMapping(path = "/bundle")
	public String generateBundle() throws IOException {
		//Project p = projectService.getProject(project + ".prj");

		//String data = p.getData();
		//data = data.replace("\\\"", "\"");

		InputStream in = Thread.currentThread().getContextClassLoader()
				.getResourceAsStream("com/archnet/marshall/bundle.js");

		byte[] buf = new byte[in.available()];
		in.read(buf);

		String bundle = new String(buf);

		bundle = bundle.replace("eval(\"window.framework = framework\");", "window.framework = framework");
		bundle = bundle.replace("boolean lightning = false;", "boolean lightning=true;");
		bundle = bundle.replace("eval(\"myapp.helper.\" + fn + \"(source,evt);\");", "myapp.helper[fn](source,evt);");
		//bundle = bundle.replace(" var s = new Object();", "var s = " + data);

		return bundle;
		// ObjectMapper m = new ObjectMapper();
		// Component c = m.readValue(data , Component.class);
	}

}
