package framework.design;

import framework.JSOption;
import framework.builder.properties.EventTypeEditor;
import framework.builder.properties.PropertyEditor;

public class EventTypeParameter extends Parameter{

	public EventTypeParameter(String name, String label, String category) {
		super(name, label, "select", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		EventTypeEditor editor = new EventTypeEditor("eventType");
		
		for (Option opt : options) {
			JSOption o = new JSOption(opt.text, opt.value);
			editor.addOption(o);
		}
		editor.setDesignable(designable);
		editor.setProperty(this);
		return editor;
	}

}
