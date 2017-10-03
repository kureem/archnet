package framework.builder.properties;

import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
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


	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		String attr = parameter.name;
		String value = designable.getAttribute(attr);
		setValue(value);
		
	}

}
