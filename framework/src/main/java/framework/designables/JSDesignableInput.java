package framework.designables;

import static def.dom.Globals.alert;

import java.util.LinkedList;
import java.util.List;

import framework.JSInput;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.ValueParameter;

public class JSDesignableInput extends JSInput implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableInput(String name) {
		super(name);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
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
		
		AttributeParameter type = new AttributeParameter("type", "Type", "Basic");
		type.options.add(new Option("text", "text"));
		type.options.add(new Option("date", "date"));
		type.options.add(new Option("datetime", "datetime"));
		type.options.add(new Option("tel", "tel"));
		type.options.add(new Option("color", "color"));
		type.options.add(new Option("checkbox", "checkbox"));
		type.options.add(new Option("password", "password"));
		type.options.add(new Option("hidden", "hidden"));
		type.options.add(new Option("radio", "radio"));
		type.options.add(new Option("email", "email"));
		type.options.add(new Option("file", "file"));
		type.options.add(new Option("image", "image"));
		type.options.add(new Option("month", "month"));
		type.options.add(new Option("number", "number"));
		type.options.add(new Option("range", "range"));
		type.options.add(new Option("reset", "reset"));
		type.options.add(new Option("button", "button"));
		type.options.add(new Option("submit", "submit"));
		type.options.add(new Option("time", "time"));
		type.options.add(new Option("url", "url"));
		type.options.add(new Option("week", "week"));		
		
		parameters.add(type);
		return parameters;
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
