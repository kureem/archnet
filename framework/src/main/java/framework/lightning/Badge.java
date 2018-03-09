package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.TextParameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class Badge extends JSContainer implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public Badge(String name, String tag) {
		super(name, tag);
		addClass("slds-badge");
	}

	
	public Badge setInverse(boolean b){
		if(b){
			addClass("slds-badge_inverse");
		}else{
			removeClass("slds-badge_inverse");
		}
		return this;
	}
	
	public Badge setLightest(boolean b){
		if(b){
			addClass("slds-badge_lightest");
		}else{
			removeClass("slds-badge_lightest");
		}
		return this;
	}
	
	
	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("inverse")){
			setInverse("true".equals(value));
		}
		if(key.equals("lightest")){
			setLightest("true".equals(value));
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		AttributeParameter inverse = new AttributeParameter("inverse", "Inverse", "Basic");
		inverse.options.push(new Option("",""));
		AttributeParameter lightest = new AttributeParameter("lightest", "Lightest","Basic");
		lightest.options.push(new Option("",""));
		TextParameter textParam = new TextParameter("text", "Html", "Basic");
		parameters.push(inverse,lightest,textParam);
		return parameters;
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
