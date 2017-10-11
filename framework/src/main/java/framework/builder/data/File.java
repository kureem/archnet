package framework.builder.data;

import java.util.LinkedList;
import java.util.List;

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

	public List<File> getChildren() {
		List<File> result = new LinkedList<>();
		for (Object o : (Array<Object>) file.$get("children")) {
			result.add(new File(o));
		}
		return result;
	}

}
