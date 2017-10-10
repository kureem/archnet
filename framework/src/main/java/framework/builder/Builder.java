package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.editors.CSSEditor;
import framework.builder.editors.JavascriptEditor;
import framework.builder.editors.VisualEditor;
import framework.builder.libraries.DataComposer;
import framework.design.Designable;
import framework.lightning.Icon;
import framework.lightning.IconButton;
import framework.lightning.LTContainer;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;
import jsweet.dom.Event;

public class Builder extends LTContainer {

	private TopMenu topMenu = new TopMenu("header");
	
	private Tabs editorTabs = new Tabs("editorTabs");

	private VisualEditor visualEditor;
	
	private CSSEditor cssEditor;
	
	private JavascriptEditor jsEditor = new JavascriptEditor("jsEditor");
	
	private DataComposer dataComposer = new DataComposer("composer", "div");

	private IconButton saveButton = new IconButton("save");
	
	public Builder(String name) {
		super(name, "div");

		addClass("builder");
		Icon icon = new Icon("as", "utility", "save");
		saveButton.setIcon(icon);
		saveButton.setBorderFilled(true);
		saveButton.addClass("slds-button_icon-container").addClass("save-button");
		saveButton.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				// TODO Auto-generated method stub
				
			}
		}, "click");
		addChild(saveButton);
		addChild(editorTabs);
		
		

		visualEditor = new VisualEditor(this);
		//addChild(visualEditor);
		visualEditor.newProject();
	 	TabItem item = openEditor("Visual", visualEditor);
		cssEditor = new CSSEditor("cssEditor");
		openEditor("CSS Editor", cssEditor);
		
		openEditor("JS Editor", jsEditor);
		
		editorTabs.setActive(item);
		
		openEditor("Data Composer", dataComposer);
		
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