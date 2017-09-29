package framework.lightning;

import framework.JSContainer;

public class Card extends JSContainer{

	private Grid header = new Grid("header", "div");
	
	
	private Media headerMedia = new Media("headerMedia");
	
	private JSContainer body = new JSContainer("div").addClass("slds-card__body");
	
	private JSContainer footer = new JSContainer("footer").addClass("slds-card__footer");
	
	public Card(String name, String tag) {
		super(name, tag);
		addClass("slds-card");
		header.addClass("slds-card__header");
		header.addChild(headerMedia);
		addChild(header);
		addChild(body);
		addChild(footer);
		
	}

	public Grid getHeader() {
		return header;
	}

	public Media getHeaderMedia() {
		return headerMedia;
	}

	public JSContainer getBody() {
		return body;
	}

	public JSContainer getFooter() {
		return footer;
	}
	
	
	
	

}
