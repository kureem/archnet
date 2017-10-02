package framework.builder.properties;

import framework.JSContainer;
import jsweet.dom.Event;

public class TextEditor extends AbstractInputPropertyEditor{

	public TextEditor(String name) {
		super(name);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		
		String text = getValue();
		designable.setHtml(text);		
	}

}
