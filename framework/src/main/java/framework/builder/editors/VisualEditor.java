package framework.builder.editors;

import static def.dom.Globals.alert;
import static def.dom.Globals.console;
import static def.dom.Globals.document;
import static def.jquery.Globals.$;

import framework.EventListener;
import framework.JSContainer;
import framework.JSTextArea;
import framework.builder.Builder;
import framework.builder.Ruler;
import framework.builder.SelectComponentEvent;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.libraries.LibrariesDockedComposer;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.builder.marshalling.MarshallUtil;
import framework.builder.properties.PropertiesDockedComposer;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.designables.DesignableDelegate;
import framework.designables.JSDesignableBuilderComponent;
import framework.lightning.Backdrop;
import framework.lightning.DockedComposer;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import framework.lightning.IconButton;
import framework.lightning.LightningApplication;
import framework.lightning.Modal;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;

public class VisualEditor extends AbstractEditor<Component> implements DesignableEditor {

	// private Builder builder;

	private Designable selectedItem;

	private LightningApplication root;
	
	private JSContainer workspace = new JSContainer("workspace", "div");

	private Selector selector;

	private JSContainer leftComposers = new JSContainer("leftComposers", "div");
	
	private JSContainer rightComposers = new JSContainer("rightComposers", "div");

	private PropertiesDockedComposer propertiesDockedComposer = new PropertiesDockedComposer("properties");

	private LibrariesDockedComposer libraryDockedComposer = new LibrariesDockedComposer("library");

	private StructureDockedComposer structureDockedComposer;

	private JSContainer templates = new JSContainer("div").setVisible(false);
	
	private boolean leftOpen = true;
	
	private boolean rightOpen = true;
	
	private JSContainer iframe = new JSContainer("iframe");
	
	private IconButton toggleOutline = new IconButton("toggleOutline");
	
	private IconButton toggleRuler = new IconButton("toggleRuler");
	
	private IconButton toggleDefinitions = new IconButton("toggleDefinitions");
	
	private Modal jsonDef = new Modal("jsonDef", "Definition");
	
	JSTextArea json = new JSTextArea("json");
	
	JSTextArea helper = new JSTextArea("helper");
	
	
	
	//private JSContainer foot = new JSContainer("foot", "div").addClass("slds-size_2-of-12").addClass(".slds-docked-composer__footer").setStyle("display", "flex");
	
	private Ruler hRule = new Ruler(false);
	private DockedComposer composer = new DockedComposer("composer"); 

	private Backdrop bd = new Backdrop("backdrop");
	
	public VisualEditor(String name) {
		super(name, "div", null);
		addClass("visual-editor").addClass("slds-grid").addClass("slds-wrap");
		
		FormLayout frmjson = new FormLayout("frmjson", "div");
		frmjson.setStyle("margin", "8px");
		frmjson.addClass("defn-popup");
		FormElement js = new FormElement("js", "div");
		js.setLabel("Definition");
		js.setInput(json);
		
		FormElement frmhel = new FormElement("frmhel", "div");
		frmhel.setInput(helper);
		frmhel.setLabel("Helper");
		
		frmjson.addFormElement(js);
		frmjson.addFormElement(frmhel);
		jsonDef.getContent().addChild(frmjson);
		addChild(jsonDef);
		jsonDef.setBackdrop(bd);
		addChild(bd);
		helper.addClass("slds-textarea");
		json.addClass("slds-textarea");
		
		//addChild(new Ruler(true));
		
		setRootEditor(this);
		addChild(leftComposers.addClass("slds-size_2-of-12"));
		addChild(composer.addClass("slds-size_7-of-12"));
		composer.addClass("workspace");
		composer.getBody().addChild(hRule);
		composer.getBody().addChild(workspace);
		
		//addChild(iframe.addClass("slds-size_7-of-12"));
		iframe.setAttribute("src", "preview.html#lightning.prj");
		addChild(rightComposers.addClass("slds-size_3-of-12"));
		//addChild(foot);
		leftComposers.addClass("composers");
		rightComposers.addClass("composers");
		rightComposers.addChild(propertiesDockedComposer);
		rightComposers.addChild(libraryDockedComposer);
		
	

		selector = new Selector();// BeanFactory.getInstance().getBeanOfType(Selector.class);
		selector.setVisualEditor(this);
		addChild(selector);
		addChild(templates);
		composer.getTools().clearChildren();
		composer.getTools().addChild(new Zoom("zoom", this));
		composer.getTools().addChild(toggleOutline);
		composer.getTools().addChild(toggleRuler);
		composer.getTools().addChild(toggleDefinitions);
		
		toggleDefinitions.getIcon().setIconName("ad_set");
		toggleDefinitions.setStateful(true);
		toggleDefinitions.setSelected(true);
		
		toggleOutline.getIcon().setIconName("layout");
		toggleOutline.setStateful(true);
		toggleOutline.setSelected(true);
		
		toggleRuler.getIcon().setIconName("summarydetail");
		toggleRuler.setStateful(true);
		toggleRuler.setSelected(false);
		
		toggleDefinitions.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				toggleDefns();
			}
		}, "click");
		
		toggleRuler.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				boolean selected = toggleRuler.isSelected();
				if(selected){
					toggleRuler.setSelected(false);
					removeClass("show-ruler");
				}else{
					toggleRuler.setSelected(true);
					addClass("show-ruler");
				}
			}
		}, "click");
		
		addClass("show-outline");
		toggleOutline.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				boolean selected = toggleOutline.isSelected();
				if(selected){
					toggleOutline.setSelected(false);
					removeClass("show-outline");
				}else{
					toggleOutline.setSelected(true);
					addClass("show-outline");
				}
				
			}
		}, "click");
		
		
		document.onkeyup = (e)->{
			
			
			if(e.which == 27){ 
				//setWillAddComponent(null);
				escape();
				render();
			}
			return true;
		};
		//toggleOutline
	}
	
	
	private boolean showDef = false;
	public void toggleDefns(){
		
		$.get("/js/controller/" + getProject().getName(), (a,b,c)->{
			json.setValue(this.getProject().getData());
			helper.setValue((String)a);
			jsonDef.open();
			render();
			return true;
		});
		
		if(showDef){
			jsonDef.close();
		}else{
			
		}
		//showDef = !showDef;
	}
	
	public void escape(){
		setWillAddComponent(null,false);
		structureDockedComposer.getStructure().clearClipboard();
	}
	
	
	public void zoom(double percent){
		workspace.getChildren().$get(0).setStyle("zoom", (percent/100) + "");
		hRule.setStyle("zoom", (percent/100) + "");
	}
	
	public void closeLeft(){
		leftComposers.setAttribute("class", "slds-size_0-of-12 composers");
		leftOpen = false;
		resizeWorkspace(composer);
	}
	
	public void openLeft(){
		leftComposers.setAttribute("class", "slds-size_2-of-12 composers");
		leftOpen = true;
		resizeWorkspace(composer);
	}

	public void closeRight(){
		rightComposers.setAttribute("class", "slds-size_0-of-12 composers");
		rightOpen = false;
		resizeWorkspace(composer);
	}
	
	public void openRight(){
		rightComposers.setAttribute("class", "slds-size_3-of-12 composers");
		rightOpen = true;
		resizeWorkspace(composer);
	}
	
	private void resizeWorkspace(JSContainer work){
		
		if(leftOpen && rightOpen){
			work.addClass( "slds-size_7-of-12");
			work.setStyle("width", "58.3333333333%");
		}
		
		if(!leftOpen && rightOpen){
			work.removeClass( "slds-size_7-of-12");
			work.setStyle("width", "calc(75% - (42px))");
		}
		
		if(leftOpen && !rightOpen){
			work.removeClass( "slds-size_7-of-12");
			work.setStyle("width", "calc(83.3333333333% - (42px))");
		}
		
		if(!leftOpen && !rightOpen){
			work.removeClass( "slds-size_7-of-12");
			work.setStyle("width", "calc(100% - (84px))");
		}
	}
	
	

	@Override
	public void save() {

		
		String data = getMarshall();
		file.setData(data);
		
		projectService.saveFile(this,file, new RemoteDataListener<java.lang.Object>() {

			@Override
			public void dataLoaded(Object data) {
				
				clean();
				String title = getAttribute("title");
				Builder.websocket.send("open:" + title);

				// alert(JSON.stringify(data));
			}
		});

		if(!rootEditor.getId().equals(getId())){
			getRootEditor().getRootItem().getComponent().custom.$set(file.getName(), file.getData());
			rootEditor.libraryDockedComposer.refreshWithProject(rootEditor.root);
			//libraryDockedComposer.refreshWithProject(roo);
		}
		
		
	}

	public LightningApplication getRootItem() {
		return root;
	}

	public Designable getSelectedItem() {
		return selectedItem;
	}

	public void selectItem(Designable designable) {
		propertiesDockedComposer.selectComponent(designable);
	}

	public void visit(Visitor v){
		visit(v,root);
	}
	
	public void visit(Visitor v, Designable startAt){
		v.doVisit(startAt);
		for(Designable child : startAt.getDesignables()){
			visit(v,child);
		}
	}
	
	private framework.builder.Component willAdd = null;
	
	public boolean persist = false;

	public void setWillAddComponent(framework.builder.Component component, boolean persist) {
		this.persist = persist;
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

	public void saveAsComponent( Designable designable){
		designable.addClass("LightningActiveComponent");
		//LightningApplication app = new LightningApplication(name, tag)
		
		Component comp = MarshallUtil.extract(designable);
		Component component = new Component();
		component.impl = "lgt:app";
		component.parameters.$set("name", designable.getName() + "_comp");
		Designable par = MarshallUtil.toDesignable(component);
		Designable chi = MarshallUtil.toDesignable(comp);
		par.addDesignable(chi);
		
		//component = ;
		
		//component.children.push(comp);
		
		
		String marshall = JSON.stringify(
				MarshallUtil.extract(par)
				
				);
		
		
		
		File project = getProject();
		String name = designable.getName();
		root.getComponent().custom.$set(name, marshall);
		
		libraryDockedComposer.refreshWithProject(root);
		
		if (!name.endsWith(".cmp")) {
			name = name + ".cmp";
		}
		project.createFile(this,name, "components", new RemoteDataListener<java.lang.Object>() {

			@Override
			public void dataLoaded(Object data) {
				File fff = new File((jsweet.lang.Object) data);
				fff.setData(marshall);
				
				BeanFactory.getInstance().getBeanOfType(ProjectService.class).saveFile((JSContainer)designable,fff, new RemoteDataListener<java.lang.Object>() {

					@Override
					public void dataLoaded(Object data) {
						console.log(data);
					}
				});

				
				structureDockedComposer.getStructure().reload("components");
				structureDockedComposer.getStructure().render();

			}
		});

	}
	
	public void addNewComponent(framework.builder.Component component, Designable designable) {
		ComponentFactory factory = component.getFactory();
		Component c = new Component();
		Designable container = factory.build(c, true);
		if(container instanceof JSDesignableBuilderComponent){
			container.applyParam("src", component.getInital());
		}
		addNewComponent(container, designable);
	}

	public void addNewComponent(Designable container, Designable designable) {
		try {
			designable.addDesignable(container);
			
			container.addEventListener(new SelectComponentEvent(selector), "click");
		} catch (Exception e) {
			alert(e.getMessage());
		}
		
		if(!persist)
			setWillAddComponent(null,false);
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
		component.impl = "lgt:app";
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
		templates.clearChildren();
		templates.setRendered(false);
		for (File temp : file.getTemplates()) {
			JSTemplate t = new JSTemplate(temp);
			templates.addChild(t);
		}
		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
				.getComponentFactory(component.impl).build(component, true);
		des.addEventListener(new SelectComponentEvent(selector), "click");
		des.setData(component.data);
		if (component.children != null) {
			for (Component c : component.children) {
				Designable child = cona(c);
				des.addDesignable(child);
				String exp = child.getAttribute("exposeAs");
				if(exp != null && exp.length() > 0){
					
					new DesignableDelegate(child).exposeVariable(exp);
				}
			}
		}

		return des;
	}

	@Override
	public void consume(Component component) {

		root = (LightningApplication)cona(component);
		Array<File> components = file.getComponents();
		
		
		workspace.addChild((JSContainer) root);
		libraryDockedComposer.refreshWithProject(root);
		
		structureDockedComposer = new StructureDockedComposer("strucutru", root, file, selector);
		leftComposers.addChild(structureDockedComposer);

		libraryDockedComposer.refreshWithProject(root);
		
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
