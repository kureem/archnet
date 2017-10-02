package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.JSInput;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public abstract class AbstractInputPropertyEditor extends JSInput implements PropertyEditor , EventListener{

	protected Designable designable;
	
	protected Parameter parameter;

	public AbstractInputPropertyEditor(String name) {
		super(name);
		addEventListener(this, "change");
		addClass("slds-input");
	}

	@Override
	public void setDesignable(Designable designable) {
		this.designable = designable;
	}

	@Override
	public void setProperty(Parameter parameter) {
		this.parameter = parameter;
	}

	@Override
	public abstract void performAction(JSContainer source, Event evt); 
	

}
