package framework.designables;

import java.util.List;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;

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
	public List<Parameter> getParameters() {
		return delegate.getParameters();
	}


	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public List<Designable> getDesignables() {
		
		List l = getChildren();
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
