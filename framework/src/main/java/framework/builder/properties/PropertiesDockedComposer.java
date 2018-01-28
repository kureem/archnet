package framework.builder.properties;

import framework.design.Designable;
import framework.lightning.DockedComposer;

public class PropertiesDockedComposer extends DockedComposer {

	private ProtertiesEditorTabs mainEditor = new ProtertiesEditorTabs("mainEditor");
	private PropertiesEditor basicEditorBody = new BasicPropertiesEditor("basic");
	private PropertiesEditor advancedPropertiesEditorBody = new AdvancedPropertiesEditor();
	//private PropertiesEditor eventEditor = new EventsPropertiesEditor();

	public PropertiesDockedComposer(String name) {
		super(name);
		getTitle().setHtml("Properties");

		addClass("properties-composer");
		mainEditor.addItem("Basic", basicEditorBody).setActive(true);
		mainEditor.addItem("Advanced", advancedPropertiesEditorBody);
		
		getBody().addChild(mainEditor);
		
	}

	public void selectComponent(Designable designable) {
	
		basicEditorBody.setComponent(designable);
		advancedPropertiesEditorBody.setComponent(designable);
		mainEditor.getItems().$get(0).setActive(true);
	}
}
