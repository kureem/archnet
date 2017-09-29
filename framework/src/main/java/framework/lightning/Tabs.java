package framework.lightning;

import framework.JSContainer;

public class Tabs extends JSContainer {
 
	private JSContainer nav = new JSContainer("ul").addClass("slds-tabs_default__nav").setAttribute("role", "tablist");
	
	public Tabs(String name) {
		super(name,"div");
		addClass("slds-tabs_default");
		addChild(nav);
	}
	 
	public Tabs addItem(TabItem item){
		nav.addChild(item);
		addChild(item.body.show(false));
		return this;
	}
	
	public Tabs setActive(TabItem item){
		for(JSContainer c : nav.getChildren()){
			TabItem tab = (TabItem)c;
			tab.setActive(tab.equals(item));
		}
		item.setActive(true);
		return this;
	}
	
	
	
	
	
}
