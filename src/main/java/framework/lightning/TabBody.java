package framework.lightning;

import framework.JSContainer;

public class TabBody extends JSContainer{

	public TabBody(String name) { 
		super(name,"div");
		addClass("slds-tabs_default__content");
		setAttribute("role", "tabpanel");
	}
	
	public TabBody show(boolean b){
		if(b){
			removeClass("slds-hide");
			addClass("slds-show");
		}else{
			removeClass("slds-show");
			addClass("slds-hide");
		}
		setVisible(b);
		return this;
	}
	
	public TabBody hide(boolean b){
		return show(!b);
	}
	
}

