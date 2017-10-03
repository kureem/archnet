package framework.builder.properties;

import framework.EventListener;
import framework.JSCheckBox;
import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public abstract class AbstractCheckBoxPropertyEditor extends JSCheckBox implements PropertyEditor , EventListener{

	protected Designable designable;

	protected Parameter parameter;

	public AbstractCheckBoxPropertyEditor(String name) {
		super(name);
		addEventListener(this, "change");
		
	}

	
	public void setProperty(Designable designable, Parameter parameter) {
		this.parameter = parameter;
		this.designable = designable;
		initEditor(designable, parameter);
	}
	
	public abstract void initEditor(Designable designable, Parameter parameter);

	@Override
	public abstract void performAction(JSContainer source, Event evt);

}
