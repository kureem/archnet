package framework.lightning;

import framework.JSContainer;

public class Backdrop extends JSContainer{

	public Backdrop(String name) {
		super(name, "div");
		
		addClass("slds-backdrop");
	}
	
	public Backdrop open(){
		addClass("slds-backdrop_open");
		return this;
	}
	
	public Backdrop close(){
		removeClass("slds-backdrop_open");
		return this;
	}
	
	

}
