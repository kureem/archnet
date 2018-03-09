package framework.lightning;

import framework.JSContainer;
import jsweet.lang.Array;

public class Tabs extends JSContainer {

	private JSContainer nav = new JSContainer("ul").addClass("slds-tabs_default__nav").setAttribute("role", "tablist");
	
	private JSContainer body = new JSContainer("div").addClass("slds-tabs_default__content");

	public Tabs(String name) {
		super(name, "div");
		addClass("slds-tabs_default");
		addChild(nav);
		addChild(body);
		body.setAttribute("role", "tabpanel");
	}

	public Tabs addItem(TabItem item) {
		nav.addChild(item);
		body.addChild(item.body.show(false));
		return this;
	}
	
	public Tabs clear(){
		nav.clearChildren();
		body.clearChildren();
		setRendered(false);
		return this;
	}

	public Tabs setActive(TabItem item) {
		for (TabItem tab : getItems()) {
			if (item.getId().equals(tab.getId())) {
				if (!tab.isActive()) {
					tab.setActive(true);
				}
			} else {
				if (tab.isActive()) {
					tab.setActive(false);
				}
			}
		}
		return this;
	}
	
	public TabItem getTab(TabBody body){
		for(TabItem c : getItems()){
			if(c.getBody().equals(body)){
				return c;
			}
		}
		return null;
	}
	
	public TabItem getActiveTab(){
		for(TabItem item : getItems()){
			if(item.isActive()){
				return item;
			}
		}
		return null;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Array<TabItem> getItems() {
		return (Array) nav.getChildren();
	}

}
