package framework.lightning.designables;

import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.DescriptionList;
import jsweet.lang.Array;

public class JSDesignableObjectType extends DescriptionList implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	private Array<Object> fields = new Array<Object>();

	public JSDesignableObjectType(String name) {
		super(name);
	}

	public Array<Object> getFields() {
		return fields;
	}

	public void setFields(Array<Object> fields) {
		this.fields = fields;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
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
		Array<Parameter> params = delegate.getParameters();
		AttributeParameter options = new AttributeParameter("fields", "Fields", "Extended");
		params.push(options);
		
		return params;
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
