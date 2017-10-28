package framework.builder.editors;

import static def.dom.Globals.alert;

import framework.JSContainer;
import framework.builder.Builder;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.libraries.LibrariesDockedComposer;
import framework.builder.marshalling.BuilderEvent;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.builder.marshalling.MarshallUtil;
import framework.builder.properties.PropertiesDockedComposer;
import framework.core.BeanFactory;
import framework.design.Designable;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;
import jsweet.util.StringTypes.b;

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
		propertiesDockedComposer.setStyle("left", "1017px");
		libraryDockedComposer.setStyle("left", "1017px").setStyle("top", "500px");
		
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
	
	private framework.builder.Component willAdd = null;
	
	public void setWillAddComponent(framework.builder.Component component){
		this.willAdd = component;
		if(component == null){
			removeClass("add-mode");
		}else{
			addClass("add-mode");
		}
		//setStyle("cursor", "")
	}
	
	public void addNewComponent(framework.builder.Component component, Designable designable){
		ComponentFactory factory = component.getFactory();
		Designable container = factory.build(new Component(), true);
		try {
			designable.addDesignable(container);
		} catch (Exception e) {
			alert(e.getMessage());
		}
		container.render();
		setWillAddComponent(null);
		BeanFactory.getInstance().getBeanOfType(Structure.class).reload(designable);
		BeanFactory.getInstance().getBeanOfType(Structure.class).render();

	}
	
	
	public framework.builder.Component getWillAddComponent(){
		return willAdd;
	}

	public Builder getBuilder() {
		return builder;
	}

	@Override
	public String getMarshall() {
		
		String marshall = JSON.stringify(MarshallUtil.extract(root));
		//alert(marshall);
		return marshall;
	}

	@Override
	public Component createNew(File f) {
		
		Component component = new Component();
		component.impl = "html:div";
		return component;
	}

	@Override
	public Component unmarshall(File f) {
		
		//alert(f.getData());
		
		jsweet.lang.Object c =(jsweet.lang.Object)JSON.parse(f.getData()); 
		
		Component cc = doUnMarsh(c);
		return cc;
		
		// TODO Auto-generated method stub
		//return null;
	}
	
	
	public Component doUnMarsh(Object o){
		Component cc = new Component();
		cc.impl = o.$get("impl").toString();
		cc.styles = (Object)o.$get("styles");
		cc.parameters =(Object)o.$get("parameters");
		Array<Object> events = (Array<Object>)o.$get("events");
		if(events != null && events.length > 0){
			Array<BuilderEvent> bevents = new Array<BuilderEvent>();
			for(Object e : events){
				BuilderEvent event = new BuilderEvent();
				event.source = e.$get("source").toString();
				event.type = e.$get("type").toString();
				bevents.push(event);
			}
			cc.events = bevents;
		}
		Array<Component> bchildren = new Array<Component>();
		Array<Object> children = (Array<Object>)o.$get("children");
		if(children != null && children.length > 0){
			for(Object c : children){
				bchildren.push(doUnMarsh(c));
			}
			cc.children = bchildren;
		}
		return cc;
	}
	
	public Designable cona(Component component){
		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory(component.impl).build(component, true);
		if(component.children != null){
			for(Component c : component.children){
				Designable child = cona(c);
				des.addDesignable(child);
			}
		}
		
		return des;
	}

	@Override
	public void consume(Component component) {
		root = cona(component); //BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory(component.impl).build(component, true);
		
		//root = rootComponent.getFactory().build(component, true);
		//root.setStyle("width", "100%");
		//root.setStyle("height", "200px");

		addChild((JSContainer) root);
		
		
		structureDockedComposer = new StructureDockedComposer("strucutru", root,builder);
		composers.addChild(structureDockedComposer);
		structureDockedComposer.setStyle("left", "0px");
	
		
	}

	

	

	

}
