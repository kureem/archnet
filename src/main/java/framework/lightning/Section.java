package framework.lightning;

import framework.JSContainer;

public class Section extends JSContainer{

	
	private JSContainer titleContainer = new JSContainer("h3").addClass("slds-section__title");
	
	private JSContainer title = new JSContainer("span").addClass("slds-truncate");
	
	private SvgIcon arrow = new SvgIcon("arrow", "utility", "switch");
	
	private JSContainer content = new JSContainer("div").addClass("slds-section__content");
	
	public Section(String name, String title) {
		super(name, "div");
		
		addClass("slds-section");
		addChild(titleContainer);
		arrow.setTag("button");
		arrow.setAttribute("class", "slds-button slds-section__title-action");
		arrow.setSvgClass("slds-section__title-action-icon slds-button__icon slds-button__icon_left");
		titleContainer.addChild(arrow);
		arrow.addChild(this.title.setHtml(title));
		
		addChild(content);
		open();
	}
	
	public Section open(){
		addClass("slds-is-open");
		return this;
	}
	
	public Section close(){
		removeClass("slds-is-open");
		return this;
	}
	
	
	
	public Section setTitle(String stitle){
		title.setHtml(stitle);
		return this;
	}
	
	public JSContainer getContent(){
		return content;
	}
	
	
	public JSContainer getTitleContainer(){
		return titleContainer;
	}
	

}
