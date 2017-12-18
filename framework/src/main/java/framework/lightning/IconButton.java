package framework.lightning;

import framework.JSContainer;

public class IconButton extends JSContainer{

	private SvgIcon icon = new SvgIcon("icon");
	
	private final static String SMALL = "slds-button_icon-small";
	
	private final static String EXTRA_SMALL = "slds-button_icon-x-small";
	
	private final static String EXTRA_EXTRA_SMALL = "slds-button_icon-xx-small";
	
	
	public IconButton(String name) {
		super(name, "button");
		icon.setSvgClass("slds-button__icon");
		addChild(icon);
		addClass("slds-button").addClass("slds-button_icon");
	}
	
	public SvgIcon getIcon(){
		return icon;
	}
	
	public IconButton setIcon(SvgIcon icon){
		this.getChildren().remove(this.icon);
		this.icon = icon;
	    icon.setSvgClass("slds-button__icon");
		//icon.addClass("slds-button__icon");
		addChild(icon);
		setRendered(false);
		return this;
	}
	public IconButton toggleClass(String cls, boolean b){
		if(b){
			addClass(cls);
		}else{
			removeClass(cls);
		}
		return this;
	}
	
	public IconButton setContainer(boolean b){
		return toggleClass("slds-button_icon-container", b);
	}
	
	public IconButton setBorder(boolean b){
		return toggleClass("slds-button_icon-border", b);
	}
	
	public IconButton setBorderInverse(boolean b){
		return toggleClass("slds-button_icon-border-inverse", b);
	}
	
	public IconButton setBorderFilled(boolean b){
		return toggleClass("slds-button_icon-border-filled", b);
	}
	
	public IconButton setInverse(boolean b){
		return toggleClass("slds-button_icon-inverse", b);
	}
	
	public IconButton setError(boolean b){
		return toggleClass("slds-button_icon-error", b);
	}
	
	public IconButton setSize(String size){
		toggleClass(SMALL, false);
		toggleClass(EXTRA_SMALL, false).toggleClass(EXTRA_EXTRA_SMALL, false).toggleClass(size, true);
		return this;
	}
	
	
	public IconButton setMore(boolean b){
		return toggleClass("slds-button_icon-more", b);
	}
	
	public IconButton setSelected(boolean b){
		return toggleClass("slds-is-selected", b);
	}

}
