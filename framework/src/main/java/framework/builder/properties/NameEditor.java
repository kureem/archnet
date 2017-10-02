package framework.builder.properties;

import framework.JSContainer;
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

}
