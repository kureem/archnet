package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class Accordion extends JSContainer implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	private Array<Designable> designables = new Array<>();

	public Accordion(String name) {
		super(name, "ul");
		addClass("slds-accordion");
	}

	/**
	 * 
	 * @param item
	 * @return
	 */
	public Accordion addItem(AccordionItem item) {
		addDesignable(item);
		return this;
	}
	
	

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"open","close"};
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Array<Designable> getDesignables() {
		return designables;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		return delegate.getParameters();
	}

	@Override
	public void addDesignable(Designable designable) {
		if (designable instanceof AccordionItem) {
			JSContainer li = new JSContainer("li").addClass("slds-accordion__list-item");
			addChild(li);
			DesignableDelegate.guessName(getDesignables(), designable);
			li.addChild((JSContainer) designable);
			designables.push(designable);
		} else {
			//Error
			throw new jsweet.lang.Error("Can only add Component of type JSAccordionItem in an Accordion Container");
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		
		Array<Designable> result = new Array<Designable>();
		//delegate.removeDesignable(designable);
		
		for(Designable des : designables){
			if(des.equals(designable)){
				
			}else{
				result.push(des);
			}
		}
		this.designables = result;
		designable.getParent().removeChild(designable);
		setRendered(false);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}
	
	

}
