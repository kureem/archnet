package framework.lightning;

import framework.JSContainer;

public class DropDownItem extends JSContainer {

	private JSContainer label = new JSContainer("span").addClass("slds-truncate");
	public DropDownItem(String name, String label) {
		super(name, "a");
		setAttribute("role", "menuitem");
		addChild(this.label.setHtml(label));
		
	}
	
	public void setLabel(String label){
		this.label.setHtml(label);
	}

}
