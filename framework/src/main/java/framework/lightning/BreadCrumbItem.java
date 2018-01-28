package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class BreadCrumbItem extends JSContainer implements Designable{

	JSContainer link = new JSContainer("link","a").setAttribute("href", "javascript:void(0);");
	
	private DesignableDelegate delagate = new DesignableDelegate(this);
	
	public BreadCrumbItem(String name, String label) {
		super(name,"li");
		
		
		link.setHtml(label);
		addChild(link);
		
		addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
	}
	
	
	public BreadCrumbItem setLabel(String label){
		link.setHtml(label);
		return this;
	}


	@Override
	public void applyParam(String key, String value) {
		delagate.applyParameter(key, value, true);
		if(key.equals("label")){
			setLabel(value);
		}
	}


	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();
	}


	@Override
	public Component getComponent() {
		return delagate.getComponent();
	}


	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> param = delagate.getParameters();
		AttributeParameter label = new AttributeParameter("label", "Label", "Basic");
		param.push(label);
		return param;
	}


	@Override
	public void addDesignable(Designable designable) {
		
	}


	@Override
	public void removeDesignable(Designable designable) {
		
	}


	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
	
	
	
}
