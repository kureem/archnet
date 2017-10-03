package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.JSTextArea;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public abstract class AbstractTextAreaPropertyEditor extends JSTextArea implements PropertyEditor, EventListener{

	protected Designable designable;

	protected Parameter parameter;
	

	public AbstractTextAreaPropertyEditor(String name) {
		super(name);
		addClass("slds-textarea");

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
