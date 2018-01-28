package framework.lightning;

import framework.designables.JSDesignable;

public class PanelSection extends JSDesignable{

	public PanelSection(String name, String tag) {
		super(name, tag);
		addClass("slds-panel__section");
	}
	
}

