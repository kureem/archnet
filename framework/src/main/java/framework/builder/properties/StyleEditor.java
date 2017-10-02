package framework.builder.properties;

import framework.JSContainer;
import jsweet.dom.Event;

public class StyleEditor extends AbstractInputPropertyEditor{

	public StyleEditor() {
		super("styleEditor");
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String style = parameter.name;
		String value = getValue();
		designable.setStyle(style, value);
		
	}

}
