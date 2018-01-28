package framework.designables;

import framework.JSInput;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.ValueParameter;
import jsweet.lang.Array;

public class JSDesignableInput extends JSInput implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableInput(String name) {
		super(name);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equalsIgnoreCase("type")){
			setType(value);
		}
	}

	@Override
	public Array<Designable> getDesignables() {

		return new Array<>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		parameters.push(new ValueParameter("value", "Value", "Basic"));
		
		AttributeParameter type = new AttributeParameter("type", "Type", "Basic");
		type.options.push(new Option("text", "text"));
		type.options.push(new Option("date", "date"));
		type.options.push(new Option("datetime", "datetime"));
		type.options.push(new Option("tel", "tel"));
		type.options.push(new Option("color", "color"));
		type.options.push(new Option("checkbox", "checkbox"));
		type.options.push(new Option("password", "password"));
		type.options.push(new Option("hidden", "hidden"));
		type.options.push(new Option("radio", "radio"));
		type.options.push(new Option("email", "email"));
		type.options.push(new Option("file", "file"));
		type.options.push(new Option("image", "image"));
		type.options.push(new Option("month", "month"));
		type.options.push(new Option("number", "number"));
		type.options.push(new Option("range", "range"));
		type.options.push(new Option("reset", "reset"));
		type.options.push(new Option("button", "button"));
		type.options.push(new Option("submit", "submit"));
		type.options.push(new Option("time", "time"));
		type.options.push(new Option("url", "url"));
		type.options.push(new Option("week", "week"));		
		
		parameters.push(type);
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		//throw new java.lang.RuntimeException("Cannot add children to this component");
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
