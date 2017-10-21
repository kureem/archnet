package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.editors.Editor;
import framework.builder.editors.VisualEditor;
import framework.lightning.Backdrop;
import framework.lightning.Icon;
import framework.lightning.IconButton;
import framework.lightning.LTContainer;
import framework.lightning.TabActionListener;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;
import jsweet.dom.Event;

public class Builder extends LTContainer {

	private TopMenu topMenu = new TopMenu("header");
	
	private Tabs editorTabs = new Tabs("editorTabs");
	
	private File project;
 
	//private VisualEditor visualEditor;
	
	//private CSSEditor cssEditor;
	
	//private JavascriptEditor jsEditor = new JavascriptEditor("jsEditor");
	
	//private DataComposer dataComposer = new DataComposer("composer", "div");

	private IconButton saveButton = new IconButton("save");
	
	private NewFile newFileModal = new NewFile("newFile",this);
	
	private OpenProject openProjectModal = new OpenProject("openproject", this);
	
	private IconButton newFileButtn = new IconButton("newFile");
	
	private IconButton openProjectBtn = new IconButton("openProject");
	
	private Backdrop backdrop = new Backdrop("backdrop");
	
	private Editor<?> activeEditor=null;
	 
	public Builder(String name) {
		super(name, "div");
		
		addChild(openProjectModal);
		addChild(newFileModal);
		addChild(backdrop);
		newFileModal.setBackdrop(backdrop);
		openProjectModal.setBackdrop(backdrop);
		addClass("builder");
		Icon icon = new Icon("as", "utility", "save");
		saveButton.setIcon(icon);
		saveButton.setBorderFilled(true);
		saveButton.addClass("slds-button_icon-container").addClass("save-button");
		saveButton.addEventListener(new EventListener() {
			@Override
			public void performAction(JSContainer source, Event evt) {
				if(activeEditor != null){
					activeEditor.save();
				}
			}
		}, "click");
		addChild(saveButton);
		
		addChild(openProjectBtn);
		openProjectBtn.setIcon(new Icon("", "utility", "open"));
		openProjectBtn.setBorderFilled(true);
		openProjectBtn.addClass("slds-button_icon-container").addClass("new-button").setStyle("right", "10%");
		openProjectBtn.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				openProjectModal.open();
				openProjectModal.init();
				backdrop.open();
			}
		}, "click");
		
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
		addChild(openProjectBtn);
		 
		
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
		this.project = file;
		
		VisualEditor editor = new VisualEditor(this);
		editor.open(file);
		openEditor(file.getName(), editor);
	}
	
	public File getProject(){
		return project;
	}

	/*public Designable getSelectedItem() {
		return visualEditor.getSelectedItem();
	}*/
	
	
	public TabItem openEditor(String title,Editor<?> editor){
		
		TabActionListener l = new TabActionListener() {
			
			@Override
			public void onClose(TabItem item) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void onActivate(TabItem item) {
				activeEditor.setRendered(false);
			}
		};
		TabBody body = new TabBody("editorBody");
		body.addChild((JSContainer)editor);
		TabItem item = new TabItem("visualEditor", body);
		item.setTitle(title);
		editorTabs.addItem(item);
		this.activeEditor = editor;
		item.addTabActionListener(l);
		//item.setActive(true);
		editorTabs.setActive(item);
		return item;
	}
}