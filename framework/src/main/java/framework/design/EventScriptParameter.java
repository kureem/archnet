package framework.design;

import framework.builder.properties.EventScriptEditor;
import framework.builder.properties.EventTypeEditor;
import framework.builder.properties.PropertyEditor;

public class EventScriptParameter extends Parameter {

	EventTypeEditor eventTypeEditor;
	
	public EventScriptParameter(String name, String label, String category) {
		super(name, label, "textarea", category);
		// TODO Auto-generated constructor stub
	}
	
	public void setEventTypeEditor(EventTypeEditor editor){
		this.eventTypeEditor = editor;
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		
		EventScriptEditor editor = new EventScriptEditor("script", eventTypeEditor);
		editor.setProperty(this);
		editor.setDesignable(designable);
		return editor;
	}

}