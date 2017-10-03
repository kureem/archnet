package framework.builder.properties;

import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
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

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		setValue(designable.getHtml());
	}

}
