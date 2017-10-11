package framework.builder.editors;

import framework.JSContainer;
import framework.builder.BasicComponent;
import framework.builder.Builder;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.libraries.LibrariesDockedComposer;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.builder.properties.PropertiesDockedComposer;
import framework.core.BeanFactory;
import framework.design.Designable;
import jsweet.lang.JSON;

public class VisualEditor extends AbstractEditor<Component> {

	private Builder builder;

	private Designable selectedItem;

	private Designable root;

	private Selector selector;
	
	private JSContainer composers = new JSContainer("composers", "div");
	
	private PropertiesDockedComposer propertiesDockedComposer = new PropertiesDockedComposer("properties");

	private LibrariesDockedComposer libraryDockedComposer = new LibrariesDockedComposer("library");


	private StructureDockedComposer structureDockedComposer;
	
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

	
	
	

	public Designable getRootItem() {
		return root;
	}

	public Designable getSelectedItem() {
		return selectedItem;
	}

	public void selectItem(Designable designable) {
		propertiesDockedComposer.selectComponent(designable);
	}

	public Builder getBuilder() {
		return builder;
	}

	@Override
	public String getMarshall() {
		return JSON.stringify(root.getComponent());
	}

	@Override
	public Component createNew(File f) {
		
		Component component = new Component();
		component.impl = "html:div";
		return component;
	}

	@Override
	public Component unmarshall(File f) {
		
		return (Component)JSON.parse(f.getData());
		
		// TODO Auto-generated method stub
		//return null;
	}

	@Override
	public void consume(Component component) {
		root = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory(component.impl).build(component, true);
		
		//root = rootComponent.getFactory().build(component, true);
		root.setStyle("width", "100%");
		root.setStyle("height", "200px");

		addChild((JSContainer) root);
		
		
		structureDockedComposer = new StructureDockedComposer("strucutru", root,builder);
		composers.addChild(structureDockedComposer);
	
		
	}

	

	

	

}
