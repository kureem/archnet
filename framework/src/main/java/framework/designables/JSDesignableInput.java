package framework.designables;

import framework.DndAble;
import framework.JSInput;
import framework.KeyboardEventAble;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.ValueParameter;
import jsweet.lang.Array;
import jsweet.lang.Error;

public class JSDesignableInput extends JSInput implements Designable,MouseEventAble,DndAble,KeyboardEventAble {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableInput(String name) {
		super(name);
		setAttribute("identifier", "html:input");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equalsIgnoreCase("type")){
			Object curVal = getValue();
			if(value.equals("date") || value.equals("datetime") || value.equals("currency") || value.equals("number") || value.equals("email")
					|| value.equals("phone") || value.equals("password") || value.equals("text")   || value.equals("string")  || value.equals("int")  || value.equals("double"))
				
			setTag("input");
			if(value.equals("currency")  || value.equals("int")  || value.equals("double")){
				setType("number");
			}else{
				if(value.equals("string"))
					value = "text";
				setType(value);
			}
			setValue((String)curVal);
		}
	}
	
	

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"change", "input", "blur", "focus","paste","copy", "focus", "error","beforepaste","beforecut","beforecopy"};
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
		
		type.options.push(new Option("date", "date"));
		type.options.push(new Option("datetime", "datetime"));
		type.options.push(new Option("Currency", "currency"));
		type.options.push(new Option("Number", "number"));
		type.options.push(new Option("Email", "email"));
		type.options.push(new Option("Phone", "phone"));
		type.options.push(new Option("Text", "text"));
		type.options.push(new Option("Password", "password"));
		type.options.push(new Option("Url", "url"));	
		
		
		
		
		
		
		parameters.push(type);
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		throw new Error("Cannot add children to this component");
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
