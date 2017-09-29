package framework.builder.libraries;

import framework.JSContainer;
import framework.builder.AbstractComponentFactory;
import framework.builder.Component;
import framework.builder.ComponentsLibrary;
import framework.lightning.Button;

public class LightningComponentLibrary extends ComponentsLibrary{

	public LightningComponentLibrary() {
		super("Lightning");
		addComponents(
					new Component("lgt:btn", 	"BTN", 		"Button", new AbstractComponentFactory("lgt:btn") {
						
						@Override
						public JSContainer createInstance() {
							return new Button();
						}
					})
				);
	}

}
