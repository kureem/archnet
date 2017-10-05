package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.JSInput;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.design.ValueParameter;

public class JSDesignableInput extends JSInput implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableInput(String name) {
		super(name);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void setParameter(String key, String value, boolean designMode) {
		delegate.setParameter(key, value, designMode);
	}

	@Override
	public List<Designable> getDesignables() {

		return new LinkedList<>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public List<Parameter> getParameters() {

		List<Parameter> parameters = delegate.getParameters();
		parameters.add(new ValueParameter("value", "Value", "Basic"));
		return parameters;
	}
	
	@Override
	public void addDesignable(Designable designable) {
		
		throw new RuntimeException("Cannot add children to this component");
		// TODO Auto-generated method stub
		
	}

	// parameters.add(new ValueParameter("value", "Value", "Basic"));

}
