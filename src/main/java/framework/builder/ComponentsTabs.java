package framework.builder;

import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;

public class ComponentsTabs extends Tabs {

	public ComponentsTabs(String name) {
		super(name);
		addClass("slds-tabs_compact");
		
	}
	
	public ComponentsTabs addItem(String label,ComponentsLibrary list){
		TabBody body = new TabBody("body");
		body.addChild(list);
		TabItem item = new TabItem("TabItem",body);
		item.setTitle(label);
		addItem(item);
		return this;
	}
	
	public ComponentsTabs addComponentList(String label,Component...components){
		TabBody body = new TabBody("body");
		ComponentsLibrary list = new ComponentsLibrary("list");
		list.addComponents(components);
		body.addChild(list);
		TabItem item = new TabItem("TabItem",body);
		item.setTitle(label);
		addItem(item);
		return this;
	}

}
