package framework.lightning;

import framework.JSContainer;

public class Breadcrumbs extends JSContainer{

	private HorizontalList breadcrumb = new HorizontalList("breadcrumb");
	
	public Breadcrumbs(String name) {
		super(name, "nav");
		setAttribute("role", "navigation");
		setAttribute("aria-label", "Breadcrumbs");
		breadcrumb.setTag("ol");
		breadcrumb.addClass("slds-wrap");
		addChild(breadcrumb);
	}
	
	
	public Breadcrumbs addItem(String name,String label){
		BreadcrumbItem item = new BreadcrumbItem("");
		JSContainer link = new JSContainer(name,"a");
		link.setAttribute("href", "javascript:void(0);");
		link.setHtml(label);
		item.addChild(link);
		breadcrumb.addChild(item);
		return this;
	}
	
	public Breadcrumbs addItem(JSContainer link){
		BreadcrumbItem item = new BreadcrumbItem("");
		breadcrumb.addChild(item);
		return this;
	}
	
	
	
	

}
