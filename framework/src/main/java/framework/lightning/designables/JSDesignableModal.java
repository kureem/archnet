package framework.lightning.designables;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.Modal;
import jsweet.lang.Array;

public class JSDesignableModal extends Modal implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public JSDesignableModal(String name) {
		super(name, "");
		applyParam("title", "Modal Title");
		applyParam("showFooter", "true");
		applyParam("showHeader", "true");
	}

	
	

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("title")){
			setTitle(value);
		}else if(key.equals("size")){
			setSize(value);
		}else if(key.equals("showFooter")){
			getFooter().setVisible("true".equals(value));
		}else if(key.equals("showHeader")){
			getHeader().setVisible("true".equals(value));
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		
		Array res = new Array();
		res.push(getContent(),getFooter());
		//Array arr = getContent().getChildren();
		return res;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();
		AttributeParameter title = new AttributeParameter("title", "Title", "Basic");
		
		AttributeParameter size = new AttributeParameter("size", "Size", "Basic");
		size.options.push(new Option("Normal", SIZE_NORMAL));
		size.options.push(new Option("Medium", SIZE_MEDIUM));
		size.options.push(new Option("Large", SIZE_LARGE));
		
		AttributeParameter showHeader = new AttributeParameter("showHeader", "Show Header", "Basic");
		showHeader.options.push(new Option("",""));
		
		AttributeParameter showFooter = new AttributeParameter("showFooter", "Show Footer", "Basic");
		showFooter.options.push(new Option("",""));
		
		params.push(title,size,showHeader,showFooter);
		
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		getContent().addChild((JSContainer)designable);
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		// TODO Auto-generated method stub
		
		getContent().removeChild(designable);
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}

}
