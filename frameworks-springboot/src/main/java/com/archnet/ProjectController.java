package com.archnet;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.activiti.engine.RuntimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.salesforce.api.SObjectDetail;
import org.springframework.social.salesforce.api.Salesforce;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	private Salesforce salesforce;
	@Autowired
	private ConnectionRepository connectionRepository;

	@Autowired
	private RuntimeService runtimeService;

	@RequestMapping(path = "/start", method = RequestMethod.GET)
	public Object start() throws Exception {
		Map<String, Object> variables = new HashMap<String, Object>();
		variables.put("applicantName", "John Doe");
		variables.put("email", "john.doe@activiti.com");
		variables.put("phoneNumber", "123456789");
		return runtimeService.startProcessInstanceByKey("hireProcess", variables);
	}

	@SuppressWarnings("unused")
	@RequestMapping(path = "/describe/{type}", method = RequestMethod.GET)
	public Object describe(@PathVariable("type") String type, HttpServletResponse response) throws Exception {

		Connection<Salesforce> connection = connectionRepository.findPrimaryConnection(Salesforce.class);

		if (connection == null) {
			response.sendRedirect("/connect/salesforce");
			return "redirect:/connect/salesforce";
		} else {
			salesforce = connection.getApi();
		}

		SObjectDetail detail = salesforce.sObjectsOperations().describeSObject(type);

		if (true) {
			// return "redirect:/index.html";

			return salesforce.sObjectsOperations().getSObjects();
			// return detail;
			// return detail;
		}
		return "index.html";
		/*
		 * Session s = ((HibernateEntityManager)sessionFactory).getSession();
		 * org.hibernate.Transaction tx = s.beginTransaction();
		 * 
		 * // Create a customer entity Map<String, Object>david = new
		 * HashMap<>(); david.put( "name","David" );
		 * 
		 * // Create an organization entity Map<String, String>foobar = new
		 * HashMap<>(); foobar.put( "name","Foobar Inc." );
		 * 
		 * // Link both david.put( "organization",foobar );
		 * 
		 * // Save both s.save( "Customer",david ); s.save(
		 * "Organization",foobar );
		 * 
		 * 
		 * 
		 * 
		 * tx.commit(); s.close(); return david;
		 */ }

	@RequestMapping(path = "/create-project", method = RequestMethod.GET)
	public Project createProject(@RequestParam("name") String name, @RequestParam("title") String title) {
		return projectService.createProject(title, name);
	}

	@RequestMapping(path = "/create-file", method = RequestMethod.POST)
	public File createFile(@RequestParam("name") String name, @RequestParam("title") String title,
			@RequestParam("dir") String directory) {
		return projectService.createNewFile(name, title, directory);
	}

	@RequestMapping(path = "/update-file", method = RequestMethod.POST)
	public File updateFile(@RequestParam("title") String title, @RequestParam("data") String data,
			@RequestParam("path") String path) {
		return projectService.updateFile(title, data, path);
	}

	@RequestMapping(path = "/get-projects", method = RequestMethod.GET)
	public List<Project> getProjects() {
		return projectService.getProjects();
	}

	@RequestMapping(path = "/get-projects/{name}", method = RequestMethod.GET)
	public Project getProject(@PathVariable("name") String name) {
		if (name.split(".").length > 0) {
			name = name.split(".")[0];
		}
		name = name + ".prj";
		return projectService.getProject(name);
	}

	@RequestMapping(path = "/delete-file", method = RequestMethod.GET)
	public void deleteFile(@RequestParam("path") String path) {
		projectService.deleteFile(path);
	}

}
