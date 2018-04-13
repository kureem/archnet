package framework.builder.properties;

import framework.JSContainer;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;

public class ProtertiesEditorTabs extends Tabs{

	
	
	public ProtertiesEditorTabs(String name) {
		super(name);
		addClass("slds-tabs_compact");
		
	}
	
	
	public TabItem addItem(String label, PropertiesEditor editor){
		TabBody body = new TabBody("edi");
		body.addChild((JSContainer)editor);
		TabItem item = new TabItem("tabItem_" + editor.getName(), body).setTitle(label);
		addItem(item);
		return item;
	}
	
	

}
