package framework.lightning;

import static def.dom.Globals.alert;

import java.util.LinkedList;
import java.util.List;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;

public class Accordion extends JSContainer implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	private List<Designable> designables = new LinkedList<>();

	public Accordion(String name) {
		super(name, "ul");
		addClass("slds-accordion");
	}

	public Accordion addItem(AccordionItem item) {
		addDesignable(item);
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public List<Designable> getDesignables() {
		return designables;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public List<Parameter> getParameters() {
		return delegate.getParameters();
	}

	@Override
	public void addDesignable(Designable designable) {
		if (designable instanceof AccordionItem) {
			JSContainer li = new JSContainer("li").addClass("slds-accordion__list-item");
			addChild(li);

			li.addChild((JSContainer) designable);
		} else {
			throw new RuntimeException("Can only add Component of type JSAccordionItem in an Accordion Container");
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		// TODO Auto-generated method stub
		getChildren().remove(designable.getParent());
		setRendered(false);
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		// TODO Auto-generated method stub
		alert("under construction");
	}
	
	

}
