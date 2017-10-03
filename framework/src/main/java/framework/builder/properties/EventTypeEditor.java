package framework.builder.properties;

import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class EventTypeEditor extends AbstractSelectPropertyEditor{

	public EventTypeEditor(String name) {
		super(name);
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		// TODO Auto-generated method stub
		System.out.println("dsfds");
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		
	}

}
