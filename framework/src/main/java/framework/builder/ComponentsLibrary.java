package framework.builder;

import framework.JSContainer;
import framework.lightning.Grid;

public class ComponentsLibrary extends Grid {

	public ComponentsLibrary(String name) {
		super(name, "ul");
		setWrap(true);
		setPullPadded(true);
		addClass(" slds-library");
	}

	public ComponentsLibrary addComponents(Component... components) {

		for (Component com : components) {
			JSContainer li = new JSContainer("li").addClass("slds-p-horizontal_small slds-size_1-of-3");

			addChild(li);
			li.addChild(com);
		}
		return this;
	}
	
	
}
