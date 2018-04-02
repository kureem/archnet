package framework.lightning;

import framework.DndAble;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.designables.JSDesignable;
import framework.designables.JSDesignableBasicComponent;

public class PopOver extends JSContainer implements MouseEventAble,DndAble{
	
	public static final String NUBIN_NONE = "slds-nubbin_none";
	
	public final static String NUBIN_BOTTOM_RIGHT = "slds-nubbin_bottom-right";
	
	public final static String NUBIN_BOTTOM_LEFT = "slds-nubbin_bottom-left";
	
public final static String NUBIN_TOP_RIGHT = "slds-nubbin_top-right";
	
	public final static String NUBIN_TOP_LEFT = "slds-nubbin_top-left";
	
	
	public final static String[] NUBIN_POSITIONS = new String[]{NUBIN_NONE,NUBIN_TOP_LEFT,NUBIN_TOP_RIGHT, NUBIN_BOTTOM_RIGHT, NUBIN_BOTTOM_RIGHT};
	
	private JSDesignable body = new JSDesignable("body", "div");
	
	private JSDesignable footer = new JSDesignableBasicComponent("footer", "footer");

	public PopOver(String name) {
		super(name, "section");
		setAttribute("role", "dialog");
		addClass("slds-popover");
		addClass("slds-dynamic-menu");
		body.addClass("slds-popover__body").addClass("slds-p-horizontal_none");
		footer.addClass("slds-popover__footer");
		addChild(body);
		addChild(footer);
		
		
	}
	
	public JSDesignable getFooter(){
		return footer;
	}
	
	public JSDesignable getBody(){
		return body;
	}
	
	public PopOver showFooter(boolean b){
		footer.setVisible(b);
		return this;
	}
	
	public PopOver showBody(boolean b){
		body.setVisible(b);
		return this;
	}
	
	public PopOver setNubin(String position){
		for(String s :NUBIN_POSITIONS){
			removeClass(s);
		}
		addClass(position);
		
		return this;
	}

}
