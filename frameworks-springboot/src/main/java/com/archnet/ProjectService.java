package com.archnet;

import java.util.List;

public interface ProjectService {
	
	public Project createProject(String name, String title);
	
	public void deleteFile(String path);
	
	public List<Project> getProjects();
	
	public File createNewFile(String name, String title, String directory);
	
	public File updateFile(String title,String data, String path);

}
