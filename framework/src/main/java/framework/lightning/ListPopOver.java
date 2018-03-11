package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class ListPopOver extends PopOver implements Designable{
	
	private ListBox listBox;

	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public ListPopOver(String name) {
		super(name);
		listBox = new ListBox("list");
		getBody().addChild(listBox);
		setAttribute("identifier", "lgt:popover");
		applyParam("nubin", NUBIN_TOP_LEFT);
		applyParam("showBody", "true");
		applyParam("showFooter", "true");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		
		if(key.equals("nubin")){
			setNubin(value);
		}else if(key.equals("showBody")){
			super.showBody("true".equals(value));
		}else if(key.equals("showFooter")){
			super.showFooter("true".equals(value));
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		Array res = new Array();
		res.push(listBox);
		res.push(getFooter());
		return res;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		
		Array<Parameter> parameters = delegate.getParameters();
		AttributeParameter nubin = new AttributeParameter("nubin", "Nubin Position", "Basic");
		nubin.options.push(new Option("None",NUBIN_NONE));
		nubin.options.push(new Option("Top Left",NUBIN_TOP_LEFT));
		nubin.options.push(new Option("Top Right",NUBIN_TOP_RIGHT));
		nubin.options.push(new Option("Bottom Right",NUBIN_BOTTOM_RIGHT));
		nubin.options.push(new Option("Bottom Left",NUBIN_BOTTOM_LEFT));
		
		AttributeParameter showBody = new AttributeParameter("showBody", "Show Body", "Basic");
		showBody.options.push(new Option("",""));
		AttributeParameter showFooter = new AttributeParameter("showFooter", "Show Footer", "Basic");
		showFooter.options.push(new Option("",""));
		
		parameters.push(nubin,showBody,showFooter);
		
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof ListBox){
			ListBox lb = (ListBox)designable;
			this.listBox = lb;
			getBody().clearChildren();
			getBody().addChild(lb);
		}else{
			JSContainer fotter = getFooter();
			removeChild(fotter);
			addChild((JSContainer)designable);
		}
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		// TODO Auto-generated method stub
		
	}
	
	

}
