package framework.builder.properties;

import framework.InputField;
import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class ValuePropertyEditor extends AbstractInputPropertyEditor{

	public ValuePropertyEditor(String name) {
		super(name);
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		setValue( ((InputField)designable).getValue().toString()   );
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String value = getValue();
		((InputField)source).setValue(value);
		
	}

}
