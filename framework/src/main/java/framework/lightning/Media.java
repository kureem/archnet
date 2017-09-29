package framework.lightning;

import framework.JSContainer;

public class Media extends JSContainer{

	private JSContainer figure = new JSContainer("figure","div" ).addClass("slds-media__figure");
	
	private JSContainer body = new JSContainer("div").addClass("slds-media__body");

	public final static String SIZE_NORMAL = "";
	
	public final static String SIZE_LARGE = "slds-media_large";
	
	public final static String SIZE_SMALL = "slds-media_small";
	
	public Media(String name) {
		super(name, "div");
		addClass("slds-media");
		addChild(figure);
		addChild(body);
	}
	
	
	public Media addFigure(JSContainer figure){
		this.figure.addChild(figure);
		return this;
	}
	
	public JSContainer getFigureContainer(){
		return figure;
	}
	
	public JSContainer getBodyContainer(){
		return body;
	}
	
	public Media addBody(JSContainer body){
		this.body.addChild(body);
		return this;
	}
	
	public Media setSize(String size){
		 removeClass(SIZE_LARGE).removeClass(SIZE_SMALL).addClass(size);
		 return this;
	}
	
	public Media toggleClass(String cls, boolean b){
		return toggleClass(cls, b, this);
	}
	
	public Media toggleClass(String cls, boolean b, JSContainer target){
		if(b){
			target.addClass(cls);
		}else{
			target.removeClass(cls);
		}
		return this;
	}
	
	public Media setCentered(boolean b){
		return toggleClass("slds-media_center", b);
	}
	
	
	public Media setFigureReversed(boolean b){
		return toggleClass("slds-media__figure_reverse", b,figure);
	}
	
	public Media setResponseve(boolean b){
		return toggleClass("slds-media_responsive", b);
	}
	
	

}
