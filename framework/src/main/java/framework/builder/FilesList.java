package framework.builder;

import framework.JSContainer;

public class FilesList extends JSContainer{

	public FilesList(String name) {
		super(name, "ul");
		addClass("slds-grid slds-grid_pull-padded slds-wrap");
	}
	
	public FilesList addFile(UIFile file){
		JSContainer li = new JSContainer("li");
		li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3");
		addChild(li);
		li.addChild(file);
		return this;
	}
	
	

}
