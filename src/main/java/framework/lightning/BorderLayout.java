package framework.lightning;

import framework.JSContainer;

public class BorderLayout extends Grid {

	private JSContainer top = new JSContainer("div");

	private JSContainer left = new JSContainer("div");

	private JSContainer center = new JSContainer("div");

	private JSContainer right = new JSContainer("div");

	private JSContainer bottom = new JSContainer("div");

	public BorderLayout(String name) {
		super(name, "div");
		addClass("slds-wrap");
		setPullPadded(true);
		top.addClass("slds-p-horizontal_small slds-size_1-of-1");
		addChild(top);

		left.addClass("slds-p-horizontal_small slds-size_3-of-12 slds-medium-size_3-of-12 slds-large-size_3-of-12");
		addChild(left);

		center.addClass("slds-p-horizontal_small slds-size_6-of-12 slds-medium-size_6-of-12 slds-large-size_6-of-12");
		addChild(center);

		right.addClass("slds-p-horizontal_small slds-size_3-of-12 slds-medium-size_3-of-12 slds-large-size_3-of-12");
		addChild(right);

		bottom.addClass("slds-p-horizontal_small slds-size_1-of-1");
		addChild(bottom);
	}

	public BorderLayout addChild(JSContainer child, String layoutData) {
		if (layoutData.equalsIgnoreCase("left")) {
			left.addChild(child);
		} else if (layoutData.equalsIgnoreCase("right")) {
			right.addChild(child);
		} else if (layoutData.equalsIgnoreCase("top")) {
			top.addChild(child);
		} else if (layoutData.equalsIgnoreCase("bottom")) {
			bottom.addChild(child);
		} else if (layoutData.equalsIgnoreCase("center")) {
			center.addChild(child);
		}

		return this;
	}

	public JSContainer getTop() {
		return top;
	}

	public JSContainer getLeft() {
		return left;
	}

	public JSContainer getCenter() {
		return center;
	}

	public JSContainer getRight() {
		return right;
	}

	public JSContainer getBottom() {
		return bottom;
	}

}
