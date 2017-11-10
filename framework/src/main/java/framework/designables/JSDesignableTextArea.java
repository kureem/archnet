package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.JSTextArea;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.design.ValueParameter;

public class JSDesignableTextArea extends JSTextArea implements Designable {
	
	private DesignableDelegate delegate  = new DesignableDelegate(this);


	public JSDesignableTextArea(String name) {
		super(name);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> params = delegate.getParameters();//new LinkedList<>();

		params.add(new ValueParameter("value", "Value", "Basic"));
		return params;
	}

	@Override
	public List<Designable> getDesignables() {
		List<Designable> result = new LinkedList<>();
		return result;
	}
	
	@Override
	public void addDesignable(Designable designable) {
		
		throw new RuntimeException("Cannot add children to this component");
		
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
