package framework.lightning.designables;

import framework.JSInput;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.designables.JSDesignableInput;
import framework.lightning.FormElement;
import jsweet.lang.Array;

public class JSDesignableLightningInput extends FormElement implements Designable{

	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	private JSDesignableInput input= null;
	
	public JSDesignableLightningInput(String name) {
		super(name, "div");
		input = (JSDesignableInput)BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory("html:input").build(new Component(), true);
		input.addClass("slds-input");
		setInput(input);
		getInput().addClass("slds-input");
		setLabel("Label");
	}
	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equalsIgnoreCase("type")){
			((JSInput)getInput()). setType(value);
		}else if(key.equals("label")){
			setLabel(value);
		}else if(key.equalsIgnoreCase("disabled")){
			if("true".equalsIgnoreCase(value)){
				setDisabled(true);
			}else{
				setDisabled(false);
			}
		}
	}

	@Override
	public Array<Designable> getDesignables() {

		return new Array<>(input);
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		
		AttributeParameter label = new AttributeParameter("label", "Label", "Basic");
		parameters.push(label);
				
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		//throw new java.lang.RuntimeException("Cannot add children to this component");
	}

	@Override
	public void removeDesignable(Designable designable) {

		//delegate.removeDesignable(designable);

	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		//delegate.moveDesignable(designable, steps);
	}
	
	public void setDisabled(boolean b){
		if(b){
			getInput().setAttribute("disabled", "true");
		}else{
			getInput().setAttribute("disabled", null);
		}
		//return this;
	}




}
