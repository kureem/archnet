package framework.lightning;

import framework.JSContainer;

public class LTContainer extends JSContainer {

	public final static String FLOAT_LEFT = "slds-float_left";
	public final static String FLOAT_RIGHT = "slds-float_right";
	public final static String FLOAT_NONE = "slds-float_none";

	public final static String[] SIZES = new String[] { "none", "xxx-small", "xx-small", "x-small", "small", "medium",
			"large", "x-large", "xx-large" };
	//private final static String[] Positions = new String[] { "top", "right", "bottom", "left", "around" };

	public final static String PADDING_SIZE_NONE = SIZES[0];
	public final static String PADDING_SIZE_XXX_SMALL = SIZES[1];
	public final static String PADDING_SIZE_XX_SMALL = SIZES[2];
	public final static String PADDING_SIZE_X_SMALL = SIZES[3];
	public final static String PADDING_SIZE_SMALL = SIZES[4];
	public final static String PADDING_SIZE_MEDIUM = SIZES[5];
	public final static String PADDING_SIZE_LARGE = SIZES[6];
	public final static String PADDING_SIZE_X_LARGE = SIZES[7];
	public final static String PADDING_SIZE_XX_LARGE = SIZES[8];
	
	public final static String PULL_PADDED_NONE="none";
	public final static String PULL_PADDED_XXX_SMALL="slds-grid_pull-padded-xxx-small";
	public final static String PULL_PADDED_XX_SMALL="slds-grid_pull-padded-xx-small";
	public final static String PULL_PADDED_X_SMALL="slds-grid_pull-padded-x-small";
	public final static String PULL_PADDED_SMALL="slds-grid_pull-padded-small";
	public final static String PULL_PADDED_MEDIUM="slds-grid_pull-padded-medium";
	public final static String PULL_PADDED_LARGE="slds-grid_pull-padded-large";
	public final static String PULL_PADDED_X_LARGE="slds-grid_pull-padded-x-large";
	public final static String PULL_PADDED_XX_LARGE="slds-grid_pull-padded-xx-large";
	
	
	public final static String MARGIN_SIZE_NONE = SIZES[0];
	public final static String MARGIN_SIZE_XXX_SMALL = SIZES[1];
	public final static String MARGIN_SIZE_XX_SMALL = SIZES[2];
	public final static String MARGIN_SIZE_X_SMALL = SIZES[3];
	public final static String MARGIN_SIZE_SMALL = SIZES[4];
	public final static String MARGIN_SIZE_MEDIUM = SIZES[5];
	public final static String MARGIN_SIZE_LARGE = SIZES[6];
	public final static String MARGIN_SIZE_X_LARGE = SIZES[7];
	public final static String MARGIN_SIZE_XX_LARGE = SIZES[8];
	
	
	public final static String POSITION_STATIC = "static";
	public final static String POSITION_FIXED = "fixed";
	public final static String POSITION_RELATIVE = "relative";
	public final static String POSITION_ABSOLUTE = "absolute";
	
	public final static String[] POSITIONS = new String[]{POSITION_STATIC,POSITION_FIXED,POSITION_RELATIVE,POSITION_ABSOLUTE};

	public LTContainer(String name, String tag) {
		super(name, tag);
	}
	
	public LTContainer setPosition(String position){
		for(String pos : POSITIONS){
			removeClass("slds-is-" + pos);
		}
		addClass("slds-is-" + position);
		return this;
	}

	public LTContainer setHasTopMagnet(boolean b){
		return toggleClass("slds-has-top-magnet", b);
	}
	
	public LTContainer setHasBottomMagnet(boolean b){
		return toggleClass("slds-has-bottom-magnet", b);
	}
	
	public LTContainer setMarginTop(String size) {

		return setSizeAndPosition("m",size, "top");

	}
	
	public LTContainer setMarginRight(String size) {

		return setSizeAndPosition("m",size, "right");

	}
	
	public LTContainer setMarginBottom(String size) {

		return setSizeAndPosition("m",size, "bottom");

	}

	public LTContainer setMarginLeft(String size) {

		return setSizeAndPosition("m",size, "left");

	}
	
	public LTContainer setPaddingTop(String size) {

		return setSizeAndPosition("p",size, "top");

	}
	
	public LTContainer setPaddingRight(String size) {

		return setSizeAndPosition("p",size, "right");

	}
	
	public LTContainer setPaddingBottom(String size) {

		return setSizeAndPosition("p",size, "bottom");

	}

	public LTContainer setPaddingLeft(String size) {

		return setSizeAndPosition("p",size, "left");

	}
	private LTContainer setSizeAndPosition(String pref,String size, String position) {
		for (String s : SIZES) {
			removeClass("slds-"+pref+"-" + position + "_" + s);
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

	public LTContainer setScrollableNone(boolean b) {
		if(b){
			setScrollableX(false);
			setScrollableY(false);
		}
		toggleClass("slds-scrollable_none", b);
		return this;
		
	}
	
	public LTContainer setScrollableAuto(boolean b) {
		if(b){
			setScrollableX(false);
			setScrollableY(false);
		}
		toggleClass("slds-scrollable_auto", b);
		return this;
		
	}
	
	public LTContainer setAbsoluteCenter(boolean b) {
		return toggleClass("slds-align_absolute-center", b);
	}
	
	public LTContainer setPullPadded(boolean b){
		return toggleClass("slds-grid_pull-padded", b);
	}
	
	public LTContainer setPullPaddedSize(String size){
		if(PULL_PADDED_NONE.equalsIgnoreCase(size)){
			setPullPadded(false);
			removeClass(PULL_PADDED_X_LARGE).removeClass(PULL_PADDED_XX_LARGE).
			removeClass(PULL_PADDED_LARGE).removeClass(PULL_PADDED_MEDIUM).removeClass(PULL_PADDED_SMALL)
			.removeClass(PULL_PADDED_X_SMALL).removeClass(PULL_PADDED_XX_SMALL).removeClass(PULL_PADDED_XXX_SMALL).addClass(size);
		}else{
			setPullPadded(true);
			removeClass(PULL_PADDED_X_LARGE).removeClass(PULL_PADDED_XX_LARGE).
			removeClass(PULL_PADDED_LARGE).removeClass(PULL_PADDED_MEDIUM).removeClass(PULL_PADDED_SMALL)
			.removeClass(PULL_PADDED_X_SMALL).removeClass(PULL_PADDED_XX_SMALL).removeClass(PULL_PADDED_XXX_SMALL).addClass(size);
		}
		return this;
	}
}
