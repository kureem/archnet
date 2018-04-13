package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.JSSelect;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public abstract class AbstractSelectPropertyEditor extends JSSelect implements PropertyEditor, EventListener{

protected Designable designable;
	
	protected Parameter parameter;

	public AbstractSelectPropertyEditor(String name) {
		super(name);
		addEventListener(this, "change");
		addClass("slds-select");
		
	}

	

	@Override
	public void setProperty(Designable designable, Parameter parameter) {
		this.parameter = parameter;
		this.designable = designable;
		initEditor(designable, parameter);
	}

	public abstract void initEditor(Designable designable, Parameter parameter);
	@Override
	public abstract void performAction(JSContainer source, Event evt); 

}
