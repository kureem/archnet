package com.archnet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects") 
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	
	@RequestMapping(path="/create-project", method=RequestMethod.GET)
	public Project createProject(@RequestParam("name") String name, @RequestParam("title") String title){
		return projectService.createProject(title, name);
	}
	
	@RequestMapping(path="/create-file", method=RequestMethod.POST)
	public File createFile(@RequestParam("name") String name, @RequestParam("title") String title, @RequestParam("dir") String directory){
		return projectService.createNewFile(name, title, directory);
	}
	
	@RequestMapping(path="/update-file", method=RequestMethod.POST)
	public File updateFile(@RequestParam("title") String title,@RequestParam("data") String data, @RequestParam("path") String path){
		return projectService.updateFile(title, data, path);
	}
	
	@RequestMapping(path="/get-projects", method=RequestMethod.GET)
	public List<Project> getProjects(){
		return projectService.getProjects();
	}
	

}
