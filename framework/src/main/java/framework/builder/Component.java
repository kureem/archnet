package framework.builder;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.JSContainer;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.ComponentFactory;
import framework.core.BeanFactory;
import framework.interactions.Draggable;

public class Component extends JSContainer implements Draggable{

	private JSContainer titleFigure = new JSContainer("div").addClass("slds-app-launcher__tile-figure");

	private JSContainer avatar = new JSContainer("span").addClass("slds-avatar slds-avatar_large");

	private JSContainer initial = new JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");

	private JSContainer title = new JSContainer("span").addClass("slds-app-launcher__title-label");

	
	private ComponentFactoryRegistry  componentFactoryRegistry = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class);
	 
	
	public Component(String identifier, String initial, String label) {
		super(identifier, "div");
		setAttribute("identifier", identifier);
		//addClass("slds-app-launcher__tile");
		addClass("designer-component");
		addChild(titleFigure.setAttribute("identifier", identifier));
		titleFigure.addChild(avatar.setAttribute("identifier", identifier));
		avatar.addChild(this.initial.setAttribute("identifier", identifier));
		this.initial.setAttribute("title", label);
		this.initial.setHtml(initial);
		titleFigure.addChild(title.setAttribute("identifier", identifier));
		title.setHtml(label);
	}
	
	public ComponentFactory getFactory(){
		return componentFactoryRegistry.getComponentFactory(getName());
	}

	@Override
	public DraggableOptions getDraggableOptions() {
		DraggableOptions opts = new DraggableOptions() {
		};
		opts.appendTo="body";
		opts.revert = true;
		opts.zIndex=1000;
		opts.helper = "clone";
		return opts;
	}


}
