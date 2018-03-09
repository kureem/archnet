package com.archnet;

import java.util.LinkedList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Transactional
@Component
public class ProjectServiceImpl implements ProjectService{

	@Autowired
	private FileRepository fileRepository;
	
	private void addProjectStructure(File project){
		File stylesheets = new File();
		stylesheets.setName("stylesheets");
		stylesheets.setTitle("Stylesheets");
		project.addFile(stylesheets);
		fileRepository.save(stylesheets);
		
		
		File scripts = new File();
		scripts.setName("scripts");
		scripts.setTitle("Scripts");
		project.addFile(scripts);
		fileRepository.save(scripts);
		
		File ui = new File();
		ui.setName("ui");
		ui.setTitle("UI");
		project.addFile(ui);
		fileRepository.save(ui);
		
		
		File data = new File();
		data.setName("datasources");
		data.setTitle("Datasources");
		project.addFile(data);
		fileRepository.save(data);
		
		File variables = new File();
		variables.setName("variables");
		variables.setTitle("Variables");
		project.addFile(variables);
		fileRepository.save(variables);
		
		
		File types = new File();
		types.setName("types");
		types.setTitle("Types");
		project.addFile(types);
		fileRepository.save(types);
		
		
		File templates = new File();
		templates.setName("templates");
		templates.setTitle("Templates");
		project.addFile(templates);
		fileRepository.save(templates);
		
		
		File components = new File();
		components.setName("components");
		components.setTitle("Components");
		project.addFile(components);
		fileRepository.save(components);
		
	}

	@Override
	public Project createProject(String name, String title) {
		Project project = new Project();
		project.setName(name);
		project.setPath("/" + name);
		project.setTitle(title);
		fileRepository.save(project);
		
		addProjectStructure(project);
		fileRepository.save(project);
		
		return project;
	}

	@Override
	public File createNewFile( String name,String title, String directory) {
		
		File f = new File();
		f.setTitle(title);
		f.setName(name);
		File dir = fileRepository.findOne(directory);
		dir.addFile(f);
		fileRepository.save(f);
		fileRepository.save(dir);
		
		if(directory.endsWith("/components")){
			addProjectStructure(f);
		}
		fileRepository.save(f);
		
		
		return f;
	}

	@Override
	public File updateFile(String title,String data, String path) {
		
		File f = fileRepository.findOne(path);
		f.setTitle(title);
		f.setData(data);
		fileRepository.save(f);
		return f;
	}

	@Override
	public List<Project> getProjects() {
		 List<Project> result = new LinkedList<Project>();
		 for(File f : fileRepository.findByType(Project.class.getName())){
			 result.add((Project)f);
		 }
		 return result;
	}
	
	
	@Override
	public Project getProject(String name) {
		return (Project)fileRepository.findOneByTypeAndName(Project.class.getName(), name);
	}

	@Override
	public void deleteFile(String path) {
		File file = fileRepository.findOne(path);
		file.getParent().getChildren().remove(file);
		File parent = file.getParent();
		parent.getChildren().remove(file);
		file.setParent(null);
		fileRepository.save(parent);
		fileRepository.save(file);
		fileRepository.delete(file);
	}
	
}
