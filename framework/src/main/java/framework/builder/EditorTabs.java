package framework.builder;

import framework.JSContainer;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;

public class EditorTabs extends Tabs{

	
	
	public EditorTabs(String name) {
		super(name);
		addClass("slds-tabs_compact");
		
	}
	
	
	public TabItem addItem(String label, Editor editor){
		TabBody body = new TabBody("edi");
		body.addChild((JSContainer)editor);
		TabItem item = new TabItem("tabItem_" + editor.getName(), body).setTitle(label);
		addItem(item);
		return item;
	}
	
	

}
