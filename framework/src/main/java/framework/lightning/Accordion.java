package framework.lightning;

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
	
	public Accordion addItem(AccordionItem item){
		addDesignable(item);
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.setParameter(key, value, true);
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
		JSContainer li =new JSContainer("li").addClass("slds-accordion__list-item");
		addChild(li);
		if(designable instanceof AccordionItem){
			li.addChild((JSContainer)designable);
		}else{
			throw new RuntimeException("Can only add Component of type JSAccordionItem in an Accordion Container");
		}
	}

	
}
