package framework.builder;

import framework.JSContainer;
import framework.builder.libraries.BasicComponentLibrary;
import framework.builder.libraries.LightningComponentLibrary;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.lightning.BorderLayout;
import framework.lightning.Button;
import framework.lightning.ButtonGroup;
import framework.lightning.DockedComposer;
import framework.lightning.GlobalHeader;
import framework.lightning.LTContainer;

public class Builder extends LTContainer {

	// top toolbar
	private GlobalHeader globalHeader = new GlobalHeader("header");

	private DockedComposer propertiesDockedComposer = new DockedComposer("properties");

	private BorderLayout borderLayout = new BorderLayout("borderLayout");

	private EditorTabs mainEditor = new EditorTabs("mainEditor");
	private Editor basicEditorBody = new BasicPropertiesEditorBody("basic");
	private Editor advancedPropertiesEditorBody = new AdvancedPropertiesEditorBody();
	private Editor eventEditor = new EventsEditor();
	
	private DockedComposer libraryDockedComposer = new DockedComposer("library");
	private BasicComponentLibrary basicComponentLib = new BasicComponentLibrary();
	private LightningComponentLibrary lightningComponentLib = new LightningComponentLibrary();
	private ComponentsTabs componentsTabs = new ComponentsTabs("componentsTabs");
	
	private Designable selectedComponent;
	
	private Selector selector;
	
	public Builder(String name) {
		super(name, "div");
		addClass("builder");
		addChild(borderLayout);
		ButtonGroup actions = new ButtonGroup("actions");
		actions.addButton(new Button("new").setLabel("New").setState(Button.STATE_NEUTRAL));
		actions.addButton(new Button("edit").setLabel("Edit").setState(Button.STATE_NEUTRAL));
		borderLayout.addChild(globalHeader, "top");
		globalHeader.addChild(actions);

		borderLayout.addChild(propertiesDockedComposer, "left");
		propertiesDockedComposer.getTitle().setHtml("Properties");

		mainEditor.addItem("Basic", basicEditorBody).setActive(true);
		mainEditor.addItem("Advanced", advancedPropertiesEditorBody).setActive(false);
		mainEditor.addItem("Events", eventEditor).setActive(false);
		
		
		//put in workspace
		BasicComponent rootComponent = new BasicComponent("div", "div", "DIV");
		JSContainer root = rootComponent.getFactory().build(new Component(), true);
		root.setStyle("width", "100%");
		root.setStyle("height", "200px");
		
		//Button btn = new Button();
		//btn.setLabel("Click me");
		borderLayout.addChild(root, "center");
		

		selector =BeanFactory.getInstance().getBeanOfType(Selector.class);
		borderLayout.addChild(selector);
		
		select(root);
		
		
		propertiesDockedComposer.getBody().addChild(mainEditor);
		dockLeftPanel(true);
		
		
		this.libraryDockedComposer.getTitle().setHtml("Components Library");
		borderLayout.addChild(libraryDockedComposer,"right");
		libraryDockedComposer.getBody().addChild(componentsTabs);
		componentsTabs.addItem("Basic", basicComponentLib);
		componentsTabs.addItem("Lightning", lightningComponentLib);
		dockRightPanel(true);
		
		// composers.addChild(properties);
	}
	
	
	public Designable getSelected(){
		return selectedComponent;
	}
	public void select(Designable designable){
		this.selectedComponent = designable;
		basicEditorBody.setComponent(designable);
		advancedPropertiesEditorBody.setComponent(designable);
		eventEditor.setComponent(designable);
		selector.select(designable);
	}

	public void dockLeftPanel(boolean b) {
		if (b) {
			borderLayout.getLeft().addClass("slds-docked_container");
		} else {
			borderLayout.getLeft().removeClass("slds-docked_container");
		}
	}
	
	public void dockRightPanel(boolean b) {
		if (b) {
			borderLayout.getRight().addClass("slds-docked_container");
			borderLayout.getRight().setStyle("right", "380px");
		} else {
			borderLayout.getRight().removeClass("slds-docked_container");
		}
	}

}
