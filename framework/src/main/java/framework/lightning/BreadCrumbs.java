package framework.lightning;

import static def.dom.Globals.console;

import framework.DndAble;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class BreadCrumbs extends JSContainer implements Designable  ,  MouseEventAble,DndAble{

	private HorizontalList breadcrumb = new HorizontalList("breadcrumb");
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public BreadCrumbs(String name) {
		super(name, "nav");
		setAttribute("role", "navigation");
		setAttribute("aria-label", "Breadcrumbs");
		breadcrumb.setTag("ol");
		breadcrumb.addClass("slds-wrap");
		addChild(breadcrumb);
	}
	
	
	public BreadCrumbs addItem(String name,String label){
		BreadCrumbItem item = new BreadCrumbItem(name,label);
		
		breadcrumb.addChild(item);
		return this;
	}
	
	


	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}


	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Array<Designable> getDesignables() {
		
		Array children = breadcrumb.getChildren();
		return children;
	}


	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}


	@Override
	public Array<Parameter> getParameters() {
		return delegate.getParameters();
	}


	@Override
	public void addDesignable(Designable designable) {
		
		if(designable instanceof BreadCrumbItem){
			breadcrumb.addChild((JSContainer)designable);
		}else{
			console.error("Only components of type BreadCrumbItem can be added to a BreadCrumb");
			throw new jsweet.lang.Error("Only components of type BreadCrumbItem can be added to a BreadCrumb");
		}
		
	}


	@Override
	public void removeDesignable(Designable designable) {
		
		breadcrumb.removeChild(designable);
		
	}


	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(breadcrumb, steps);
	}
	
	
	
	

}
