package framework.lightning;

import framework.JSContainer;

public class Text extends JSContainer{

	public Text(String name, String tag) {
		super(name, tag);
	}
	
	public Text toggleClass(String cls, boolean b){
		if(b){
			this.addClass(cls);
		}else{
			this.removeClass(cls);
		}
		return this;
	}

	public Text setTruncate(boolean b){
		return toggleClass("slds-truncate", b);
	}
	
	
}
