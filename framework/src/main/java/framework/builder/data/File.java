package framework.builder.data;

import static def.dom.Globals.alert;

import java.util.LinkedList;
import java.util.List;

import framework.core.BeanFactory;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class File {

	Object file;

	public File(Object file) {
		super();
		this.file = file;
	}
	
	public Object getNative(){
		return file;
	}
	
	public List<File> getStylesheets(){
		return getChild("stylesheets").getChildren();
	}
	
	public List<File> getScripts(){
		return getChild("scripts").getChildren();
	}
	
	public List<File> getTemplates(){
		return getChild("templates").getChildren();
		
	}
	
	public List<File> getDataEnvironment(){
		return getChild("data").getChildren();		
	}
	
	
	public File getFile(String name, String type){
		return getChild(type).getChild(name);
	}
	
	
	public void deleteFile(String name, String type, RemoteDataListener l){
		
		File f = getFile(name, type);
		BeanFactory.getInstance().getBeanOfType(ProjectService.class).deleteFile(f.getPath(), new RemoteDataListener() {
			

			@Override
			public void dataLoaded(java.lang.Object data) {
				//getChild(type).getChildren().remove(f);
				l.dataLoaded(data);
				alert("delete file");				
			}
		});
		
		
		
	}
	
	
	public File getChild(String name){
		for(File f : getChildren()){
			if(f.getName().equalsIgnoreCase(name)){
				return f;
			}
		}
		return null;
	}
	
	public void createCss(String name, RemoteDataListener listener){
		createFile(name, name, "stylesheets", listener);
	}
	
	public void createTemplate(String name, RemoteDataListener listener){
		createFile(name, name, "templates", listener);
	}
	
	public void createScript(String name, RemoteDataListener listener){
		createFile(name, name, "scripts", listener);
	}
	
	public void createFile(String name, String type, RemoteDataListener listener){
		createFile(name,name, type, listener);
	}
	
	public void createFile(String name, String title, String dir, RemoteDataListener listener){
		String path = getPath() + "/" + dir;
		BeanFactory.getInstance().getBeanOfType(ProjectService.class).createFile(name, title, path, new RemoteDataListener() {
			
			@Override
			public void dataLoaded(java.lang.Object data) {
				((Array<Object>)getChild(dir).getNative().$get("children")).push((Object)data);
				// TODO Auto-generated method stub
				
				listener.dataLoaded(data);
			}
		});
	}
	

	public String getName() {
		return (String) file.$get("name");
	}

	public String getPath() {
		return (String) file.$get("path");
	}

	public String getData() {
		return (String) file.$get("data");
	}
	
	public void setData(String data) {
		file.$set("data", data);
	}

	public Long getDateCreated() {
		return (Long) file.$get("dateCreated");
	}

	public Long getDateModified() {
		return (Long) file.$get("dateModified");
	}

	public String getAuthor() {
		return (String) file.$get("author");
	}

	public String getType() {
		return (String) file.$get("type");
	}
	
	public String getProjectType(){
		return (String) file.$get("projectType");
		
	}

	public String getTitle() {
		return (String) file.$get("title");
	}

	public void removeFile(File f){
		Array<Object> children = new Array<Object>();
		for (Object o : (Array<Object>) file.$get("children")) {
			if(!o.$get("name").equals(f.getName())){
				children.push(o);
			}
		}
		file.$set("children",children);
	}
	public List<File> getChildren() {
		List<File> result = new LinkedList<>();
		for (Object o : (Array<Object>) file.$get("children")) {
			result.add(new File(o));
		}
		return result;
	}

}
