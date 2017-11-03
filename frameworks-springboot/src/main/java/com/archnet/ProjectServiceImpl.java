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

	@Override
	public Project createProject(String name, String title) {
		Project project = new Project();
		project.setName(name);
		project.setPath("/" + name);
		project.setTitle(title);
		fileRepository.save(project);
		
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
		data.setName("data");
		data.setTitle("Data");
		project.addFile(data);
		fileRepository.save(data);
		
		
		File templates = new File();
		templates.setName("templates");
		templates.setTitle("Templates");
		project.addFile(templates);
		fileRepository.save(templates);
		
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
	public void deleteFile(String path) {
		// TODO Auto-generated method stub
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
