package framework.builder.data;

import static def.jquery.Globals.$;

import def.jquery.JQueryXHR;
import jsweet.util.function.TriFunction;

public class ProjectService {

	public void createProject(String name, String title, RemoteDataListener listener) {

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
	
	
	
	
	public void getProjects(RemoteDataListener listener){
		$.get("/projects/get-projects", new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);
				return null;
			}
		});
	}
	
	public void saveFile(File file, RemoteDataListener listener){
		
		$.post("/projects/update-file", file.getNative(), new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				if(listener != null)
					listener.dataLoaded(t);
				return t;
			}
			
			
		});
	}
	
	public void createFile(String name,String title, String dir, RemoteDataListener listener){
		
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
	
	public void deleteFile(String path, RemoteDataListener listener){
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

}
