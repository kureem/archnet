package framework.builder;

import framework.JSContainer;

public class WelcomeScreenItem extends JSContainer{

	private JSContainer titleFigure = new JSContainer("div").addClass("slds-app-launcher__tile-figure");
	
	private JSContainer avatar = new JSContainer("avatar").addClass("slds-avatar slds-avatar_large");
	
	private JSContainer abbr = new JSContainer("abbr").addClass("slds-avatar__initials");
	
	private JSContainer body = new JSContainer("body").addClass("slds-app-launcher__tile-body");
	
	private JSContainer title = new JSContainer("span").addClass("slds-text-link");
	
	private JSContainer description = new JSContainer("p");
	
	public WelcomeScreenItem(String name, String abbrev, String title, String text, int index) {
		super(name, "a");
		setAttribute("href", "javascript:void(0);");
		addClass("slds-app-launcher__tile slds-text-link_reset slds-is-draggable");
		addChild(titleFigure);
		titleFigure.addChild(avatar);
		abbr.addClass("slds-icon-custom-" + index);
		
		avatar.addChild(abbr);
		abbr.setHtml(abbrev);
		
		addChild(body);
		body.addChild(this.title);
		this.title.setHtml(title);
		body.addChild(description);
		description.setHtml(text);
		
	}

}
