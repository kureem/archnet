package framework.builder.editors;

import static def.dom.Globals.alert;

import framework.JSContainer;
import framework.builder.SelectComponentEvent;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.libraries.LibrariesDockedComposer;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.builder.marshalling.MarshallUtil;
import framework.builder.properties.PropertiesDockedComposer;
import framework.core.BeanFactory;
import framework.design.Designable;
import jsweet.lang.JSON;

public class VisualEditor extends AbstractEditor<Component> {

	// private Builder builder;

	private Designable selectedItem;

	private Designable root;

	private Selector selector;

	private JSContainer composers = new JSContainer("composers", "div");

	private PropertiesDockedComposer propertiesDockedComposer = new PropertiesDockedComposer("properties");

	private LibrariesDockedComposer libraryDockedComposer = new LibrariesDockedComposer("library");

	private StructureDockedComposer structureDockedComposer;

	private JSContainer templates = new JSContainer("div").setVisible(false);

	public VisualEditor(String name) {
		super(name, "div", null);
		addClass("visual-editor");
		setRootEditor(this);
		addChild(composers);
		composers.addClass("composers");
		composers.addChild(propertiesDockedComposer);
		composers.addChild(libraryDockedComposer);
		propertiesDockedComposer.setStyle("left", "1064px");
		libraryDockedComposer.setStyle("left", "1040px").setStyle("top", "301px");

		// this.builder = builder;

		selector = new Selector();// BeanFactory.getInstance().getBeanOfType(Selector.class);
		selector.setVisualEditor(this);
		addChild(selector);
		addChild(templates);
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

	private framework.builder.Component willAdd = null;

	public void setWillAddComponent(framework.builder.Component component) {
		if (this.willAdd != null) {
			willAdd.removeClass("selected");
		}
		this.willAdd = component;

		if (component == null) {
			removeClass("add-mode");
			// willAdd.removeClass("selected");
		} else {
			willAdd.addClass("selected");
			addClass("add-mode");
		}
		// setStyle("cursor", "")
	}

	public void addNewComponent(framework.builder.Component component, Designable designable) {
		ComponentFactory factory = component.getFactory();
		Designable container = factory.build(new Component(), true);
		addNewComponent(container, designable);
	}

	public void addNewComponent(Designable container, Designable designable) {
		try {
			designable.addDesignable(container);
			container.addEventListener(new SelectComponentEvent(selector), "click");
		} catch (Exception e) {
			alert(e.getMessage());
		}
		setWillAddComponent(null);
		getStructure().reload(designable);
		getStructure().render();
	}

	public framework.builder.Component getWillAddComponent() {
		return willAdd;
	}

	public File getProject() {
		return file;
	}

	@Override
	public String getMarshall() {

		String marshall = JSON.stringify(MarshallUtil.extract(root));
		return marshall;
	}

	@Override
	public Component createNew(File f) {

		Component component = new Component();
		component.impl = "html:div";
		component.parameters.$set("name", f.getName());
		return component;
	}

	@Override
	public Component unmarshall(File f) {

		jsweet.lang.Object c = (jsweet.lang.Object) JSON.parse(f.getData());
		Component cc = MarshallUtil.toComponent(c);
		return cc;
	}

	public Designable cona(Component component) {
		templates.getChildren().clear();
		templates.setRendered(false);
		for (File temp : file.getTemplates()) {
			JSTemplate t = new JSTemplate(temp);
			templates.addChild(t);
		}
		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
				.getComponentFactory(component.impl).build(component, true);
		des.addEventListener(new SelectComponentEvent(selector), "click");
		if (component.children != null) {
			for (Component c : component.children) {
				Designable child = cona(c);
				des.addDesignable(child);
			}
		}

		return des;
	}

	@Override
	public void consume(Component component) {

		root = cona(component);
		addChild((JSContainer) root);

		structureDockedComposer = new StructureDockedComposer("strucutru", root, file, selector);
		composers.addChild(structureDockedComposer);
		structureDockedComposer.setStyle("left", "0px");

	}

	public Structure getStructure() {
		if (structureDockedComposer != null)
			return structureDockedComposer.getStructure();
		return null;
	}

	public Selector getSelector() {
		return selector;
	}

}
