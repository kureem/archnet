package framework.lightning;

import framework.JSContainer;

public class DropDown extends JSContainer{
	
	public final static String SMALL="slds-dropdown_small";
	public final static String XX_SMALL="slds-dropdown_xx-small";
	public final static String X_SMALL="slds-dropdown_x-small";
	public final static String MEDIUM="slds-dropdown_medium";
	public final static String LARGE="slds-dropdown_large";
	
	public final static String LEFT="slds-dropdown_left";
	public final static String RIGHT="slds-dropdown_right";
	public final static String BOTTOM="slds-dropdown_bottom";
	

	
	private JSContainer ul = new JSContainer("ul").addClass("slds-dropdown__list");
	public DropDown(String name) {
		super(name, "div");
		addClass("slds-dropdown");
		addChild(ul);
	}
	
	

	public DropDown addItem(DropDownItem item){
		JSContainer li = new JSContainer("li").addClass("slds-dropdown__item").setAttribute("role", "presentation");
		ul.addChild(li);
		li.addChild(item);
		return this;
	}
	
	
	public DropDown setSize(String size){
		removeClass(SMALL);
		removeClass(XX_SMALL);
		removeClass(X_SMALL);
		removeClass(MEDIUM);
		removeClass(LARGE);
		addClass(size);
		return this;
		
	}
	
	public DropDown setPosition(String position){
		removeClass(LEFT).removeClass(RIGHT).removeClass(BOTTOM).addClass(position);
		return this;
	}
}
