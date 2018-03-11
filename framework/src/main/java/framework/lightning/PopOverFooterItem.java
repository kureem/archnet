package framework.lightning;

import framework.designables.JSDesignableButton;

public class PopOverFooterItem extends JSDesignableButton{

	public PopOverFooterItem() {
		this("item");
	}

	public PopOverFooterItem(String name) {
		super(name);
		setAttribute("identifier", "lgt:popover-footer-item");
		applyParam("state", STATE_RESET);
		addClass("slds-p-vertical").addClass("xx-small slds-size_1-of-1");
		applyParam("label", "Footer Item");
	}
	
	

}
