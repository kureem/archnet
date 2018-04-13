package framework.lightning;

import framework.JSContainer;

public class DropDownItem extends JSContainer {

	//private JSContainer label = new JSContainer("span").addClass("slds-truncate");
	
	private SvgIcon label = new SvgIcon("span");
	
	private JSContainer txt = new JSContainer("span");
	
	//<span class="slds-truncate" title="Menu Item One">
    //<svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
    //<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check" />
	//</svg>Menu Item One</span>
	public DropDownItem(String name, String label) {
		super(name, "a");
		setAttribute("role", "menuitem");
		this.label.addClass("slds-truncate");
		this.label.setTag("span");
		this.label.setSvgClass("slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small");
		addChild(this.label);
		this.label.addChild(txt.setStyle("margin-left", "0.5rem"));
		setLabel(label);
		
	}
	
	public void setIcon(String name, String type){
		label.setIconName(name);
		label.setType(type);
	}
	
	public void setLabel(String label){
		this.txt.setHtml(label);
	}

}
