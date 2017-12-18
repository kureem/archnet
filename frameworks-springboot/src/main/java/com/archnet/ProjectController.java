package com.archnet;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.archnet.salesforce.Force;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@Autowired
	private Force force;

	@RequestMapping("/accounts")
	public List<Force.Account> accounts(OAuth2Authentication principal) {
		return force.accounts(principal);
	}
	
	@RequestMapping("/structures")
	public Map<Object,Object> types(OAuth2Authentication principal) {
		return force.types(principal);
	}
	
	
	@RequestMapping("/structures/{type}")
	public Map<Object,Object> describe(OAuth2Authentication principal, @PathVariable("type") String type) {
		return force.describe(principal,type);
	}
	
	

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
