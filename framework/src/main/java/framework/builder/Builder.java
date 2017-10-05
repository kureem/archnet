package framework.builder;

import framework.JSContainer;
import framework.builder.editors.CSSEditor;
import framework.builder.editors.JavascriptEditor;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.lightning.LTContainer;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;

public class Builder extends LTContainer {

	private TopMenu topMenu = new TopMenu("header");
	
	private Tabs editorTabs = new Tabs("editorTabs");

	private VisualEditor visualEditor;
	
	private CSSEditor cssEditor;
	
	private JavascriptEditor jsEditor = new JavascriptEditor("jsEditor");

	public Builder(String name) {
		super(name, "div");

		addClass("builder");
		addChild(editorTabs);

		
				
		visualEditor = new VisualEditor(this);
		//addChild(visualEditor);
		visualEditor.newProject();
	 	TabItem item = openEditor("Visual", visualEditor);
		cssEditor = new CSSEditor("cssEditor");
		openEditor("CSS Editor", cssEditor);
		
		openEditor("JS Editor", jsEditor);
		
		editorTabs.setActive(item);
		
	}

	public Designable getSelectedItem() {
		return visualEditor.getSelectedItem();
	}
	
	
	public TabItem openEditor(String title,JSContainer editor){
		TabBody body = new TabBody("visualEditorBody");
		body.addChild(editor);
		TabItem item = new TabItem("visualEditor", body);
		item.setTitle(title);
		editorTabs.addItem(item);
		return item;
		//item.setActive(true);
		//editorTabs.setActive(item);

	}
}