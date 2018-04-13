package framework.lightning;

import framework.JSContainer;

public class Spinner extends JSContainer{

	private String html = "<div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div>";
	public Spinner(String name) {
		super(name, "div");
		addClass("slds-spinner slds-spinner_medium");
		setAttribute("role", "status");
		setHtml(html);
	}
	
	

}
