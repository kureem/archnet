package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.editors.VisualEditor;
import framework.lightning.Backdrop;
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
 
	//private VisualEditor visualEditor;
	
	//private CSSEditor cssEditor;
	
	//private JavascriptEditor jsEditor = new JavascriptEditor("jsEditor");
	
	//private DataComposer dataComposer = new DataComposer("composer", "div");

	private IconButton saveButton = new IconButton("save");
	
	private NewFile newFileModal = new NewFile("newFile",this);
	
	private IconButton newFileButtn = new IconButton("newFile");
	
	private Backdrop backdrop = new Backdrop("backdrop");
	 
	public Builder(String name) {
		super(name, "div");
		
		addChild(newFileModal);
		addChild(backdrop);
		newFileModal.setBackdrop(backdrop);
		addClass("builder");
		Icon icon = new Icon("as", "utility", "save");
		saveButton.setIcon(icon);
		saveButton.setBorderFilled(true);
		saveButton.addClass("slds-button_icon-container").addClass("save-button");
		saveButton.addEventListener(new EventListener() {
			@Override
			public void performAction(JSContainer source, Event evt) {
			}
		}, "click");
		addChild(saveButton);
		
		
		Icon iconNew = new Icon("as", "utility", "new");
		newFileButtn.setIcon(iconNew);
		newFileButtn.setBorderFilled(true);
		newFileButtn.addClass("slds-button_icon-container").addClass("new-button");
		newFileButtn.addEventListener(new EventListener() {
			@Override
			public void performAction(JSContainer source, Event evt) {
				newFileModal.open();
				backdrop.open();
			}
		}, "click");
		addChild(newFileButtn);
		
		 
		
		addChild(editorTabs);
		
		

		//visualEditor = new VisualEditor(this);
		//addChild(visualEditor);
		//visualEditor.newProject();
	 	//TabItem item = openEditor("Visual", visualEditor);
		//cssEditor = new CSSEditor("cssEditor");
		//openEditor("CSS Editor", cssEditor);
		
		//openEditor("JS Editor", jsEditor);
		
		//editorTabs.setActive(item);
		
		//openEditor("Data Composer", dataComposer);
	}
	
	public void openProject(File file){
		
		
		VisualEditor editor = new VisualEditor(this);
		editor.open(file);
		openEditor(file.getName(), editor);
	}

	/*public Designable getSelectedItem() {
		return visualEditor.getSelectedItem();
	}*/
	
	
	public TabItem openEditor(String title,JSContainer editor){
		TabBody body = new TabBody("visualEditorBody");
		body.addChild(editor);
		TabItem item = new TabItem("visualEditor", body);
		item.setTitle(title);
		editorTabs.addItem(item);
		return item;
	}
}