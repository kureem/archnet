package framework.designables;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.lang.Array;

public class JSDesignable extends JSContainer implements Designable{

	protected DesignableDelegate delegate = new DesignableDelegate(this);
	protected Component component = new Component();
	
	public JSDesignable(String name, String tag) {
		super(name, tag);
	}

	
	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Component getComponent() {
		return component;
	}

	@Override
	public Array<Parameter> getParameters() {
		return delegate.getParameters();
	}


	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Array<Designable> getDesignables() {
		
		Array l = getChildren();
		return l;		
	}


	@Override
	public void addDesignable(Designable designable) {
		
		delegate.addDesignable(designable);
	}
	
	


	@Override
	public void removeDesignable(Designable designable) {
		
		delegate.removeDesignable(designable);
		
	}


	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}

}
