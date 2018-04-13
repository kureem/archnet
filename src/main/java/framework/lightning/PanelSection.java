package framework.lightning;

import framework.DndAble;
import framework.MouseEventAble;
import framework.designables.JSDesignable;

public class PanelSection extends JSDesignable implements  MouseEventAble,DndAble{

	public PanelSection(String name, String tag) {
		super(name, tag);
		addClass("slds-panel__section");
	}
	
}

