package framework.lightning;

import framework.JSContainer;

public class BreadcrumbItem extends JSContainer{

	public BreadcrumbItem(String name) {
		super("li");
		
		addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
	}
	
}
