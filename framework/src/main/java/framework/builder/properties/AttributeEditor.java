package framework.builder.properties;

import framework.JSContainer;
import jsweet.dom.Event;

public class AttributeEditor extends AbstractInputPropertyEditor{

	public AttributeEditor() {
		super("attribute");
	}

	
	@Override
	public void performAction(JSContainer source, Event evt) {
		String attr = parameter.name;
		String value = getValue();
		designable.setAttribute(attr, value);
	}

}
