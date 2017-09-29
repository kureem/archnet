package framework.lightning;

import framework.JSContainer;

public class Avatar extends JSContainer{

	
	private JSContainer image = new JSContainer("img");
	
	public final static String SMALL= "slds-avatar_small";
	
	public final static String X_SMALL= "slds-avatar_x-small";
	
	public final static String MEDIUM= "slds-avatar_medium";
	
	public final static String LARGE= "slds-avatar_large";
	
	
	
	public Avatar(String name) {
		super("span");
		addClass("slds-avatar");
		addChild(image);
	}
	
	public JSContainer getImage(){
		return image;
	}

	public Avatar setSize(String size){
		removeClass(LARGE).removeClass(MEDIUM).removeClass(SMALL).removeClass(X_SMALL);
		addClass(size);
		return this;
	}
	
	public Avatar setCircle(boolean b){
		if(b){
			addClass("slds-avatar_circle");
		}else{
			removeClass("slds-avatar_circle");
		}
		return this;
	}
}
