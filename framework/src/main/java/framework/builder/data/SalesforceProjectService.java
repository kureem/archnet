package framework.builder.data;

import framework.JSContainer;
import framework.ServiceCallback;
import framework.core.BeanFactory;

import static jsweet.dom.Globals.alert;

import framework.Adaptor;

public class SalesforceProjectService implements ProjectService{

	@Override
	public void createProject(JSContainer source, String name, String title, RemoteDataListener<Object> listener) {
		jsweet.lang.Object request = new jsweet.lang.Object();
		request.$set("name", name);
		request.$set("title", title);
		request.$set("method", "createProject");
		
		BeanFactory.getInstance().getBeanOfType(Adaptor.class).Execute(source, "ProjectService", request, new ServiceCallback() {
			
			@Override
			public boolean error(Object err, double statusCode) {
				alert("Error occured while executing this service: status code = " + statusCode);
				return false;
			}
			
			@Override
			public boolean consume(Object a, double statusCode) {
				listener.dataLoaded(a);
				return true;
			}
		});
	}

	@Override
	public void getProjects(JSContainer source, RemoteDataListener<Object> listener) {
		jsweet.lang.Object request = new jsweet.lang.Object();
		request.$set("method", "getProjects");
		BeanFactory.getInstance().getBeanOfType(Adaptor.class).Execute(source, "ProjectService", request,new ServiceCallback() {
			
			@Override
			public boolean error(Object err, double statusCode) {
				alert("Error occured while executing this service: status code = " + statusCode);
				return false;
			}
			
			@Override
			public boolean consume(Object a, double statusCode) {
				listener.dataLoaded(a);
				return true;
			}
		});
	}

	@Override
	public void saveFile(JSContainer source, File file, RemoteDataListener<Object> listener) {
		// TODO Auto-generated method stub
		jsweet.lang.Object request = new jsweet.lang.Object();
		request.$set("file", file);
		request.$set("method", "saveFile");
		BeanFactory.getInstance().getBeanOfType(Adaptor.class).Execute(source, "ProjectService", request,new ServiceCallback() {
			
			@Override
			public boolean error(Object err, double statusCode) {
				alert("Error occured while executing this service: status code = " + statusCode);
				return false;
			}
			
			@Override
			public boolean consume(Object a, double statusCode) {
				listener.dataLoaded(a);
				return true;
			}
		});
	}

	@Override
	public void createFile(JSContainer source, String name, String title, String dir,
			RemoteDataListener<Object> listener) {
		jsweet.lang.Object request = new jsweet.lang.Object();
		request.$set("name", name);
		request.$set("title", title);
		request.$set("dir", dir);
		request.$set("method", "createFile");
		BeanFactory.getInstance().getBeanOfType(Adaptor.class).Execute(source, "ProjectService", request, new ServiceCallback() {
			
			@Override
			public boolean error(Object err, double statusCode) {
				alert("Error occured while executing this service: status code = " + statusCode);
				return false;
			}
			
			@Override
			public boolean consume(Object a, double statusCode) {
				listener.dataLoaded(a);
				return true;
			}
		});
	}

	@Override
	public void deleteFile(JSContainer source, String path, RemoteDataListener<Object> listener) {
		// TODO Auto-generated method stub
		jsweet.lang.Object request = new jsweet.lang.Object();
		request.$set("path", path);
		request.$set("method", "deleteFile");
		BeanFactory.getInstance().getBeanOfType(Adaptor.class).Execute(source, "ProjectService", request, new ServiceCallback() {
			
			@Override
			public boolean error(Object err, double statusCode) {
				alert("Error occured while executing this service: status code = " + statusCode);
				return false;
			}
			
			@Override
			public boolean consume(Object a, double statusCode) {
				listener.dataLoaded(a);
				return true;
			}
		});
	}

	@Override
	public void getDataStructures(JSContainer source, RemoteDataListener<Object> listener) {
		
	}

	@Override
	public void getDataStructure(JSContainer source, RemoteDataListener<Object> listener, String name) {
		
	}

	
}
