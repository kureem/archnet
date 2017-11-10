package framework.builder.editors;

import framework.JSContainer;
import framework.builder.data.File;

public class JSTemplate extends JSContainer{

	private String fileName;
	public JSTemplate(File f) {
		super("div");
		fileName = f.getName();
		setHtml(f.getData());
	}
	
	
	public String getId(){
		return fileName.replace(".html", "");
	}

}
