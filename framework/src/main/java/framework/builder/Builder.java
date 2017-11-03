package framework.builder;

import static def.dom.Globals.alert;

import def.dom.WebSocket;
import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.editors.Editor;
import framework.builder.editors.EventEditor;
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

	// private VisualEditor visualEditor;

	// private CSSEditor cssEditor;

	// private JavascriptEditor jsEditor = new JavascriptEditor("jsEditor");

	// private DataComposer dataComposer = new DataComposer("composer", "div");

	private IconButton saveButton = new IconButton("save");

	private NewFile newFileModal = new NewFile("newFile", this);

	private OpenProject openProjectModal = new OpenProject("openproject", this);

	private IconButton newFileButtn = new IconButton("newFile");

	private IconButton openProjectBtn = new IconButton("openProject");

	private IconButton previewBtn = new IconButton("preview");

	private Backdrop backdrop = new Backdrop("backdrop");

	private Editor<?> activeEditor = null;

	public static WebSocket websocket = new WebSocket("ws:localhost:8080/preview");

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
				if (activeEditor != null) {
					activeEditor.save();

				}
			}
		}, "click");
		addChild(saveButton);

		addChild(openProjectBtn);

		previewBtn.setIcon(new Icon("", "utility", "preview"));
		previewBtn.setBorderFilled(true);
		previewBtn.addClass("slds-button_icon-container");

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
		previewBtn.addClass("preview-btn");
		previewBtn.setTag("a").setAttribute("target", "_blank");
		addChild(previewBtn);
		addChild(editorTabs);
	}

	public void openProject(File file) {
		this.project = file;
		previewBtn.setAttribute("href", "/preview.html#" + getProject().getName());
		String editorName = "visualEditor";
		if(!isOpen(editorName)){
		
			VisualEditor editor = new VisualEditor(this);
			editor.open(file);
			
			
			openEditor(file.getName(), editor);
		}else{
			activateEditor(editorName);
		}
	}

	public File getProject() {
		return project;
	}

	public boolean isOpen(String editorName) {
		for (TabItem item : editorTabs.getItems()) {
			if (item.getName().equals("editor_" + editorName)) {
				return true;
			}
		}
		return false;
	}

	public Editor<?> activateEditor(String editorName) {
		// editor.setAttribute("title", title);
		for (TabItem item : editorTabs.getItems()) {
			if (item.getName().equals("editor_" + editorName)) {
				editorTabs.setActive(item);
				activeEditor = (Editor<?>) item.getBody().getChildren().get(0);
				
				return activeEditor;
			}
		}
		return null;
	}

	public Editor<?> openEditor(String title, Editor<?> editor) {
		
		if(isOpen(editor.getName())){
			return activateEditor(editor.getName());
		}
		
		editor.setAttribute("title", title);
		TabActionListener l = new TabActionListener() {

			@Override
			public void onClose(TabItem item) {
				//alert("close:" + item.getName());
				Editor<?> edi = (Editor<?>) item.getBody().getChildren().get(0);
				if (edi != null){
					//alert("close:" + edi.getName() + ":" + item.getName());
					edi.save();
					if(activeEditor != null && edi.equals(activeEditor)){
						activeEditor = null;
					}
				}
			}
 
			@Override
			public void onActivate(TabItem item) {
				
				activeEditor = (Editor<?>) item.getBody().getChildren().get(0);
				if(activeEditor instanceof EventEditor){
					alert("reactivate");
					((EventEditor)activeEditor).reactivate();
				}
				
				//alert("activate:" + activeEditor.getName() + ":" + item.getName());
			}

			@Override
			public void onDeactivate(TabItem item) {
				alert("deact:" + item.getName());
				Editor<?> edi = (Editor<?>) item.getBody().getChildren().get(0);
				if (edi != null) {
					//alert("deact:" + edi.getName() + ":" + item.getName());
					edi.save();
				}
			}
		};
		TabBody body = new TabBody("editorBody");
		body.addChild((JSContainer) editor);
		TabItem item = new TabItem("editor_" + editor.getName(), body);
		item.setTitle(title);
		item.setClosable(true);
		editorTabs.addItem(item);
		item.addTabActionListener(l);
		editorTabs.setActive(item);
		return editor;
	}
}