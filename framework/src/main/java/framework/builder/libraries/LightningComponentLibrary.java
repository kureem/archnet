package framework.builder.libraries;

import framework.builder.Component;
import framework.builder.ComponentsLibrary;

public class LightningComponentLibrary extends ComponentsLibrary {

	public LightningComponentLibrary() {
		super("Lightning");
		addComponents(new Component("lgt:avatar", "AVTR", "Avatar"));
		addComponents(new Component("lgt:badge", "BDG", "Badge"));

		addComponents(new Component("lgt:txt", "TXT", "Text Element"));

		addComponents(new Component("lgt:btn", "BTN", "Button"));
		addComponents(new Component("lgt:icon-btn", "ICO", "Icon Button"));
		addComponents(new Component("lgt:btn-grp", "GRP", "Button Group"));
		addComponents(new Component("lgt:frm", "FRM", "Lightning Form"));
		addComponents(new Component("lgt:input", "INP", "Lightning Input"));

		addComponents(new Component("lgt:table", "TABLE", "Data Table"));
		
		addComponents(new Component("zs:iterator", "ITER", "Iterator"));

	}

}
