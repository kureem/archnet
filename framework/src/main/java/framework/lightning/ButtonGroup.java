package framework.lightning;

import framework.JSContainer;

public class ButtonGroup extends JSContainer {

	public ButtonGroup(String name) {
		super(name, "div");
		addClass("slds-button-group");
	}

	public ButtonGroup addButton(Button btn) {
		return addElement(btn, false);
	}

	public ButtonGroup addButton(Button btn, boolean isLast) {
		return addElement(btn, isLast);
	}

	public ButtonGroup addButton(IconButton btn) {
		return addElement(btn, false);
	}

	public ButtonGroup addButton(IconButton btn, boolean isLast) {
		return addElement(btn, isLast);

	}

	protected ButtonGroup addElement(JSContainer c, boolean isLast) {
		if (isLast) {
			c.addClass("slds-button_last");
		} else {
			c.removeClass("slds-button_last");
		}
		addChild(c);
		return this;
	}

}
