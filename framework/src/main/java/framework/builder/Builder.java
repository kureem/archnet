package framework.builder;

import static def.dom.Globals.alert;
import static def.dom.Globals.console;
import static def.dom.Globals.window;
import static def.jquery.Globals.$;

import java.util.function.Function;

import def.dom.WebSocket;
import def.jquery.JQueryKeyEventObject;
import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.editors.Editor;
import framework.builder.editors.EventEditor;
import framework.builder.editors.VisualEditor;
import framework.core.BeanFactory;
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

	private IconButton saveButton = new IconButton("save");

	private NewFile newFileModal = new NewFile("newFile", this);

	private OpenProject openProjectModal = new OpenProject("openproject", this);

	private IconButton newFileButtn = new IconButton("newFile");

	private IconButton openProjectBtn = new IconButton("openProject");

	private IconButton previewBtn = new IconButton("preview");

	private Backdrop backdrop = new Backdrop("backdrop");

	private Editor<?> activeEditor = null;

	public static WebSocket websocket = new WebSocket("ws:localhost:8080/preview");

	private boolean projectOpen = false;

	// private VisualEditor projectEditor;

	public Builder(String name) {
		super(name, "div");

		addChild(openProjectModal);
		editorTabs.addClass("editor-tabs");
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
				if (activeEditor != null) {
					newFileModal.init(activeEditor.getStructure());
				} else {
					newFileModal.init(null);
				}
				backdrop.open();
			}
		}, "click");
		addChild(newFileButtn);
		addChild(openProjectBtn);
		previewBtn.addClass("preview-btn");
		previewBtn.setTag("a").setAttribute("target", "_blank");
		addChild(previewBtn);
		addChild(editorTabs);
		BeanFactory.getInstance().addBean(Builder.class, this);

		$(window).keydown(new Function<JQueryKeyEventObject, Object>() {

			@Override
			public Object apply(JQueryKeyEventObject event) {

				if (event.ctrlKey || event.metaKey) {
					console.log(event.which);
					if (event.which == 83) {
						event.preventDefault();
						if(activeEditor != null){
							activeEditor.save();
						}
					}
				}

				return true;

			}
		});
	}

	public static Builder getInstance() {
		try {
			return BeanFactory.getInstance().getBeanOfType(Builder.class);
		} catch (Exception e) {
			return null;
		}
	}

	public boolean isProjectOpen() {
		return projectOpen;
	}

	public void openProject(File file) {
		this.project = file;
		this.projectOpen = true;
		previewBtn.setAttribute("href", "/preview.html#" + getProject().getName());
		String editorName = file.getName();
		if (!isOpen(editorName)) {

			VisualEditor projectEditor = new VisualEditor(editorName);
			projectEditor.open(file);

			openEditor(file.getName(), projectEditor);
		} else {
			activateEditor(editorName);
		}
	}

	public File getProject() {

		if (activeEditor == null) {
			return project;
		} else {
			return activeEditor.getRootEditor().getProject();
		}

		// return project;
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

		if (isOpen(editor.getName())) {
			return activateEditor(editor.getName());
		}

		editor.setAttribute("title", title);
		TabActionListener l = new TabActionListener() {

			@Override
			public void onClose(TabItem item) {
				// alert("close:" + item.getName());
				Editor<?> edi = (Editor<?>) item.getBody().getChildren().get(0);
				if (edi != null) {
					// alert("close:" + edi.getName() + ":" + item.getName());
					edi.save();
					if (activeEditor != null && edi.equals(activeEditor)) {
						activeEditor = null;
					}
				}
			}

			@Override
			public void onActivate(TabItem item) {

				activeEditor = (Editor<?>) item.getBody().getChildren().get(0);
				if (activeEditor instanceof EventEditor) {
					// alert("reactivate");
					((EventEditor) activeEditor).reactivate();
				}

				// alert("activate:" + activeEditor.getName() + ":" +
				// item.getName());
			}

			@Override
			public void onDeactivate(TabItem item) {
				// alert("deact:" + item.getName());
				Editor<?> edi = (Editor<?>) item.getBody().getChildren().get(0);
				if (edi != null) {
					// alert("deact:" + edi.getName() + ":" + item.getName());
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