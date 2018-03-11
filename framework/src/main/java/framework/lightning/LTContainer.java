package framework.lightning;

import framework.JSContainer;

public class LTContainer extends JSContainer {

	public final static String FLOAT_LEFT = "slds-float_left";
	public final static String FLOAT_RIGHT = "slds-float_right";
	public final static String FLOAT_NONE = "slds-float_none";

	private final static String[] Sizes = new String[] { "none", "xxx-small", "xx-small", "x-small", "small", "medium",
			"large", "x-large", "xx-large" };
	//private final static String[] Positions = new String[] { "top", "right", "bottom", "left", "around" };

	public final static String PADDING_SIZE_NONE = Sizes[0];
	public final static String PADDING_SIZE_XXX_SMALL = Sizes[1];
	public final static String PADDING_SIZE_XX_SMALL = Sizes[2];
	public final static String PADDING_SIZE_X_SMALL = Sizes[3];
	public final static String PADDING_SIZE_SMALL = Sizes[4];
	public final static String PADDING_SIZE_MEDIUM = Sizes[5];
	public final static String PADDING_SIZE_LARGE = Sizes[6];
	public final static String PADDING_SIZE_X_LARGE = Sizes[7];
	public final static String PADDING_SIZE_XX_LARGE = Sizes[8];

	public LTContainer(String name, String tag) {
		super(name, tag);
	}

	public LTContainer setPaddingTop(String size) {

		return setSizeAndPosition(size, "top");

	}
	
	public LTContainer setPaddingRight(String size) {

		return setSizeAndPosition(size, "right");

	}
	
	public LTContainer setPaddingBottom(String size) {

		return setSizeAndPosition(size, "bottom");

	}

	public LTContainer setPaddingLeft(String size) {

		return setSizeAndPosition(size, "left");

	}
	private LTContainer setSizeAndPosition(String size, String position) {
		for (String s : Sizes) {
			removeClass("slds-p-" + position + "_" + s);
		}
		addClass("slds-p-" + position + "_" + size);
		return this;
	}

	public LTContainer setFloat(String sfloat) {
		removeClass(FLOAT_LEFT).removeClass(FLOAT_RIGHT).removeClass(FLOAT_NONE);
		addClass(sfloat);
		return this;
	}

	protected LTContainer toggleClass(String cls, boolean b) {
		if (b) {
			addClass(cls);
		} else {
			removeClass(cls);
		}
		return this;
	}

	public LTContainer setBorderTop(boolean b) {
		return toggleClass("slds-border_top", b);
	}

	public LTContainer setBorderBottom(boolean b) {
		return toggleClass("slds-border_bottom", b);
	}

	public LTContainer setBorderLeft(boolean b) {
		return toggleClass("slds-border_left", b);
	}

	public LTContainer setBorderRight(boolean b) {
		return toggleClass("slds-border_right", b);
	}

	public LTContainer setGrow(boolean b) {
		return toggleClass("slds-grow", b);
	}

	public LTContainer setScrollableY(boolean b) {
		return toggleClass("slds-scrollable_y", b);
	}

	public LTContainer setScrollableX(boolean b) {
		return toggleClass("slds-scrollable_x", b);
	}

	public LTContainer setAbsoluteCenter(boolean b) {
		return toggleClass("slds-align_absolute-center", b);
	}
}
