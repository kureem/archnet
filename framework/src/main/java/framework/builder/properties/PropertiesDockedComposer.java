package framework.builder.properties;

import framework.builder.AdvancedPropertiesEditorBody;
import framework.builder.BasicPropertiesEditorBody;
import framework.builder.Editor;
import framework.builder.EditorTabs;
import framework.builder.EventsEditor;
import framework.design.Designable;
import framework.lightning.DockedComposer;

public class PropertiesDockedComposer extends DockedComposer {

	private EditorTabs mainEditor = new EditorTabs("mainEditor");
	private Editor basicEditorBody = new BasicPropertiesEditorBody("basic");
	private Editor advancedPropertiesEditorBody = new AdvancedPropertiesEditorBody();
	private Editor eventEditor = new EventsEditor();

	public PropertiesDockedComposer(String name) {
		super(name);
		getTitle().setHtml("Properties");

		addClass("properties-composer");
		mainEditor.addItem("Basic", basicEditorBody).setActive(true);
		mainEditor.addItem("Advanced", advancedPropertiesEditorBody).setActive(false);
		mainEditor.addItem("Events", eventEditor).setActive(false);

		getBody().addChild(mainEditor);
	}

	public void selectComponent(Designable designable) {
		basicEditorBody.setComponent(designable);
		advancedPropertiesEditorBody.setComponent(designable);
		eventEditor.setComponent(designable);
	}
}
