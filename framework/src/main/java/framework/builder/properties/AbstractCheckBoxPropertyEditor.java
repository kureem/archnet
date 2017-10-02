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
