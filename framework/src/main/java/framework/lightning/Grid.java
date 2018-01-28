package framework.lightning;

public class Grid extends LTContainer{

	public final static String PULL_PADDED_NONE="none";
	public final static String PULL_PADDED_XXX_SMALL="slds-grid_pull-padded-xxx-small";
	public final static String PULL_PADDED_XX_SMALL="slds-grid_pull-padded-xx-small";
	public final static String PULL_PADDED_X_SMALL="slds-grid_pull-padded-x-small";
	public final static String PULL_PADDED_SMALL="slds-grid_pull-padded-small";
	public final static String PULL_PADDED_MEDIUM="slds-grid_pull-padded-medium";
	public final static String PULL_PADDED_LARGE="slds-grid_pull-padded-large";
	public final static String PULL_PADDED_X_LARGE="slds-grid_pull-padded-x-large";
	public final static String PULL_PADDED_XX_LARGE="slds-grid_pull-padded-xx-large";
	
	
	
	public Grid(String name, String tag) {
		super(name, tag);
		addClass("slds-grid");
	}
	
	public Grid toggleClass(String cls, boolean b){
		if(b){
			addClass(cls);
		}else{
			removeClass(cls);
		}
		return this;
	}
	
	
	public Grid setFrame(boolean b){
		return toggleClass("slds-grid_frame", b);
	}

	
	public Grid setVertical(boolean b){
		return toggleClass("slds-grid_vertical", b);
	}
	
	public Grid setVerticalReverse(boolean b){
		setVertical(b);
		return toggleClass("slds-grid_vertical-reverse", b);
	}
	
	public Grid setReverse(boolean b){
		return toggleClass("slds-grid_reverse", b);
	}
	
	public Grid setPullPadded(boolean b){
		return toggleClass("slds-grid_pull-padded", b);
	}
	
	public Grid setPullPaddedSize(String size){
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
	
	public Grid setAlignCenter(boolean b){
		return toggleClass("slds-grid_align-center", b);
	}
	
	public Grid setAlignSpace(boolean b){
		return toggleClass("slds-grid_align-space", b);
	}
	
	public Grid setAlignSpread(boolean b){
		return toggleClass("slds-grid_align-spread", b);
	}
	
	public Grid setAlignEnd(boolean b){
		return toggleClass("slds-grid_align-end", b);
	}
	
	public Grid setVerticalAlignStart(boolean b){
		setVertical(b);
		return toggleClass("slds-grid_vertical-align-start", b);
	}
	
	public Grid setVerticalAlignCenter(boolean b){
		setVertical(b);
		return toggleClass("slds-grid_vertical-align-center", b);
	}
	
	public Grid setVerticalAlignEnd(boolean b){
		setVertical(b);
		return toggleClass("slds-grid_vertical-align-end", b);
	}
	
	public Grid setVerticalStretch(boolean b){
		setVertical(b);
		return toggleClass("slds-grid_vertical-stretch", b);
	}
	
	public Grid setNoWrap(boolean b){
		toggleClass("slds-nowrap", b);
		return toggleClass("slds-wrap", !b);
	}
	
	public Grid setWrap(boolean b){
		toggleClass("slds-wrap", b);
		return toggleClass("slds-nowrap", !b);
	}
	
}
