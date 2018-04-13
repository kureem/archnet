package framework.lightning;

import framework.JSContainer;

public class Box extends JSContainer{

	public final static String DEFAULT = "";
	
	public final static String SMALL = "slds-box_small";
	
	public final static String X_SMALL = "slds-box_x-small";
	
	public final static String XX_SMALL = "slds-box_xx-small";
	
	public Box(String name, String tag) {
		super(name, tag);
		addClass("slds-box");
	}

	public Box setSize(String size){
		return (Box)removeClass(DEFAULT).removeClass(SMALL).removeClass(XX_SMALL).removeClass(X_SMALL).addClass(size);
	}
}
