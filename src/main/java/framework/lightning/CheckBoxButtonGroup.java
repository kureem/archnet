package framework.lightning;

import framework.JSContainer;

public class CheckBoxButtonGroup extends JSContainer {

	public CheckBoxButtonGroup(String name) {
		super(name, "div");
		addClass("slds-checkbox_button-group");
	}

	public CheckBoxButtonGroup addCheckBoxButton(CheckBox btn) {

		btn.setAttribute("class", "slds-button slds-checkbox_button");
		addChild(btn);
		return this;
	}

}
