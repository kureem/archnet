package framework.builder;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.JSContainer;
import framework.builder.model.ComponentFactory;
import framework.interactions.Draggable;

public class Component extends JSContainer implements Draggable{

	private JSContainer titleFigure = new JSContainer("div").addClass("slds-app-launcher__tile-figure");

	private JSContainer avatar = new JSContainer("span").addClass("slds-avatar slds-avatar_large");

	private JSContainer initial = new JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");

	private JSContainer title = new JSContainer("span").addClass("slds-app-launcher__title-label");

	public Component(String name, String initial, String label, ComponentFactory factory) {
		super(name, "div");
		addClass("slds-app-launcher__tile");

		addChild(titleFigure);
		titleFigure.addChild(avatar);
		avatar.addChild(this.initial);
		this.initial.setAttribute("title", label);
		this.initial.setHtml(initial);
		titleFigure.addChild(title);
		title.setHtml(label);
		//addRenderer(new DraggableRenderer());
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
