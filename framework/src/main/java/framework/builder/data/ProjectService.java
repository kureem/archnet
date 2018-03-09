package framework.builder.data;

import framework.JSContainer;

public interface ProjectService {

	public void createProject(JSContainer source, String name, String title, RemoteDataListener<java.lang.Object> listener);

	public void getProjects(JSContainer source,RemoteDataListener<java.lang.Object> listener);

	public void saveFile(JSContainer source,File file, RemoteDataListener<java.lang.Object> listener);

	public void createFile(JSContainer source,String name, String title, String dir, RemoteDataListener<java.lang.Object> listener);

	public void deleteFile(JSContainer source,String path, RemoteDataListener<java.lang.Object> listener);

	public void getDataStructures(JSContainer source,RemoteDataListener<java.lang.Object> listener);

	public void getDataStructure(JSContainer source,RemoteDataListener<java.lang.Object> listener, String name);
}
