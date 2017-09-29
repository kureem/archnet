package framework.lightning;

import framework.JSContainer;

public class LTContainer extends JSContainer{
	
	public final static String FLOAT_LEFT = "slds-float_left";
	public final static String FLOAT_RIGHT = "slds-float_right";
	public final static String FLOAT_NONE = "slds-float_none";
	
	public LTContainer(String name,String tag) {
		super(name,tag);
	}

	
	public LTContainer setFloat(String sfloat){
		removeClass(FLOAT_LEFT).removeClass(FLOAT_RIGHT).removeClass(FLOAT_NONE);
		addClass(sfloat);
		return this;
	}
	
	protected LTContainer toggleClass(String cls, boolean b){
		if(b){
			addClass(cls);
		}else{
			removeClass(cls);
		}
		return this;
	}
	
	public LTContainer setBorderTop(boolean b){
		return toggleClass("slds-border_top", b);
	}

	public LTContainer setBorderBottom(boolean b){
		return toggleClass("slds-border_bottom", b);
	}
	
	public LTContainer setBorderLeft(boolean b){
		return toggleClass("slds-border_left", b);
	}
	
	public LTContainer setBorderRight(boolean b){
		return toggleClass("slds-border_right", b);
	}
	
	public LTContainer setGrow(boolean b){
		return toggleClass("slds-grow", b);
	}
	
	public LTContainer setScrollableY(boolean b){
		return toggleClass("slds-scrollable_y", b);
	}

	public LTContainer setScrollableX(boolean b){
		return toggleClass("slds-scrollable_x", b);
	}
	
	public LTContainer setAbsoluteCenter(boolean b){
		return toggleClass("slds-align_absolute-center", b);
	}
}
