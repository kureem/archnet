package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.JSTextArea;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class EventScriptEditor extends JSTextArea implements PropertyEditor, EventListener {

	protected Designable designable;

	protected Parameter parameter;
	
	private EventTypeEditor eventTypeEditor;

	public EventScriptEditor(String name, EventTypeEditor eventTypeEditor) {
		super(name);
		this.eventTypeEditor = eventTypeEditor;
		addClass("slds-textarea");

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
	public void performAction(JSContainer source, Event evt) {
		String script = getValue();
		String type = eventTypeEditor.getValue();
		designable.setParameter(type, script, true);
	}

}
