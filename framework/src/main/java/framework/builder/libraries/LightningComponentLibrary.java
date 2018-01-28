package framework.builder.libraries;

import framework.builder.Component;
import framework.builder.ComponentsLibrary;

public class LightningComponentLibrary extends ComponentsLibrary {

	public LightningComponentLibrary() {
		super("Lightning");
		addComponents(new Component("lgt:avatar", "AVTR", "Lightning Avatar"));
		addComponents(new Component("lgt:badge", "BDG", "Lightning Badge"));
		
		addComponents(new Component("lgt:bcr", "BRDC", "Lightning BreadCrumb"));
		addComponents(new Component("lgt:bcr-item", "BRDCI", "Lightning BreadCrumb Item"));
		
		
		addComponents(new Component("lgt:btn", "BTN", "Lightning Button"));
		addComponents(new Component("lgt:icon-btn", "ICO", "Lightning Icon Button"));
		addComponents(new Component("lgt:btn-grp", "GRP", "Lightning Button Group"));
		addComponents(new Component("lgt:frm", "FRM", "Lightning Form"));
		addComponents(new Component("lgt:input", "INP", "Lightning Input"));
		addComponents(new Component("lgt:grid", "GRID", "Lightning Grid"));
		
		addComponents(new Component("lgt:panel", "PANE", "Lightning Panel"));
		addComponents(new Component("lgt:panel-section", "SEC", "Lightning Panel Section"));
		
		
		addComponents(new Component("lgt:acc", "ACC", "Lightning Accordion"));
		addComponents(new Component("lgt:acc-item", "ACCI", "Lightning Accordion Item"));
		
	}
 
}
