package framework.builder.data;

import static def.jquery.Globals.$;

import def.jquery.JQueryXHR;
import framework.JSContainer;
import jsweet.util.function.TriFunction;

public class HerokuProjectService implements ProjectService{

	public void createProject(JSContainer source,String name, String title, RemoteDataListener<java.lang.Object> listener) {

		jsweet.lang.Object data = new jsweet.lang.Object();
		data.$set("name", name);
		data.$set("title", title);
		$.get("/projects/create-project", data, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);
				return null;
			}
		}, "json");
	}
	
	
	
	
	public void getProjects(JSContainer source,RemoteDataListener<java.lang.Object> listener){
		$.get("/projects/get-projects", new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);
				return null;
			}
		});
	}
	
	public void saveFile(JSContainer source,File file, RemoteDataListener<java.lang.Object> listener){
		
		$.post("/projects/update-file", file.getNative(), new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				if(listener != null)
					listener.dataLoaded(t);
				return t;
			}
			
			
		});
	}
	
	public void createFile(JSContainer source,String name,String title, String dir, RemoteDataListener<java.lang.Object> listener){
		
		jsweet.lang.Object data = new jsweet.lang.Object();
		data.$set("name", name);
		data.$set("title", title);
		data.$set("dir", dir);
		
		$.post("/projects/create-file", data, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				if(listener != null)
					listener.dataLoaded(t);
				return t;
			}
			
			
		});
	}
	
	public void deleteFile(JSContainer source,String path, RemoteDataListener<java.lang.Object> listener){
		jsweet.lang.Object data = new jsweet.lang.Object();
		data.$set("path", path);
		
		$.get("/projects/delete-file", data, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				if(listener != null)
					listener.dataLoaded(t);
				return t;
			}
			
			
		});
		
	}
	
	
	public void getDataStructures(JSContainer source,RemoteDataListener<java.lang.Object> listener){
		$.get("/projects/structures", new Object(), new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				if(listener != null)
					listener.dataLoaded(t);
				return t;
			}
			
			
		});
	}
	
	public void getDataStructure(JSContainer source,RemoteDataListener<java.lang.Object> listener, String name){
		$.get("/projects/structures/" + name, new Object(), new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				if(listener != null)
					listener.dataLoaded(t);
				return t;
			}
			
			
		});
	}
	
}
