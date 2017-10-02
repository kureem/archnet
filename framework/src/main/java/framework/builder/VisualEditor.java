package framework.builder;

import framework.JSContainer;
import framework.builder.libraries.LibrariesDockedComposer;
import framework.builder.marshalling.Component;
import framework.builder.properties.PropertiesDockedComposer;
import framework.core.BeanFactory;
import framework.design.Designable;

public class VisualEditor extends JSContainer {

	private Builder builder;

	private JSContainer selectedItem;

	private Designable root;

	private Selector selector;
	
	private JSContainer composers = new JSContainer("composers", "div");
	
	private PropertiesDockedComposer propertiesDockedComposer = new PropertiesDockedComposer("properties");

	private LibrariesDockedComposer libraryDockedComposer = new LibrariesDockedComposer("library");


	public VisualEditor(Builder builder) {
		super("visualEditor", "div");
		addClass("visual-editor");
		
		addChild(composers);
		composers.addClass("composers");
		composers.addChild(propertiesDockedComposer);
		composers.addChild(libraryDockedComposer);
		
		this.builder = builder;

		selector = BeanFactory.getInstance().getBeanOfType(Selector.class);
		selector.setVisualEditor(this);
		addChild(selector);
	}

	public Designable newProject() {
		BasicComponent rootComponent = new BasicComponent("div", "div", "DIV");
		root = rootComponent.getFactory().build(new Component(), true);
		root.setStyle("width", "100%");
		root.setStyle("height", "200px");

		addChild((JSContainer) root);
	//	builder.select(root);
		return root;

	}

	public Designable getRootItem() {
		return root;
	}

	public JSContainer getSelectedItem() {
		return selectedItem;
	}

	public void selectItem(Designable designable) {
		//selector.select(designable);
		propertiesDockedComposer.selectComponent(designable);
	}

	public Builder getBuilder() {
		return builder;
	}

}
