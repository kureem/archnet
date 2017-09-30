package framework.builder.libraries;

import framework.builder.Component;
import framework.builder.ComponentsLibrary;

public class LightningComponentLibrary extends ComponentsLibrary {

	public LightningComponentLibrary() {
		super("Lightning");
		addComponents(new Component("lgt:btn", "BTN", "Button"));
	}

}
