package framework.builder.properties;

import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class NameEditor extends AbstractInputPropertyEditor{

	public NameEditor() {
		super("NameEditor");
		// TODO Auto-generated constructor stub
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String name = getValue();
		designable.setParameter("name", name, true);
		designable.setName(name);
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		setValue(designable.getName());
		
	}

}
