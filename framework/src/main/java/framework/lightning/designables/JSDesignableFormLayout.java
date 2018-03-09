package framework.lightning.designables;

import static def.dom.Globals.console;

import framework.InputField;
import framework.JSInput;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import jsweet.lang.Array;

public class JSDesignableFormLayout extends FormLayout implements Designable{
	
	public JSDesignableFormLayout() {
		super("Form", "div");
	}

	private DesignableDelegate delegate = new DesignableDelegate(this);

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("layout")){
			if(value.equals("horizontal")){
				setHorizontal(true);
			}else if(value.equals("stacked")){
				setStacked(true);
			}else if(value.equalsIgnoreCase("inline")){
				setInline(true);
			}else if(value.equals("compound")){
				setCompound(true);
			}else{
				setStacked(true);
			}
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		Array<Designable> designable = new Array<>();
		for(FormElement element : getElements()){
			if(element instanceof JSDesignableLightningInput)
				designable.push((Designable)element);
			else
				designable.push((Designable)element.getInput());
		}
		return designable;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		AttributeParameter parameter = new AttributeParameter("layout", "Layout", "Basic");
		parameter.options.push(new Option("Stacked", "stacked"));
		parameter.options.push(new Option("Horizontal", "horizontal"));
		parameter.options.push(new Option("inline", "inline"));
		parameter.options.push(new Option("Compound", "compound"));
		parameters.push(parameter);
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof FormElement){
			addFormElement((FormElement)designable);
		}else if(designable instanceof JSInput){
			FormElement element = new JSDesignableLightningInput(designable.getName());
			designable.addClass("slds-input");
			element.setInput((InputField<?>)designable);
			addFormElement(element);
		}else if(designable instanceof InputField<?>){
			
			FormElement element = new FormElement(designable.getName(), "div");
			//designable.addClass("slds-input");
			element.setInput((InputField<?>)designable);
			addFormElement(element);
			
		}else{
			console.error("Designable of type " + designable.getClass().getName() + " cannot be added to Form Layout");
		}
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		for(FormElement element : getElements()){
			boolean b = element instanceof JSDesignableLightningInput;
			if(b){
				if(element.getId().equals(designable.getId())){
					removeChild(element);
					setRendered(false);
					return;
				}
			}else{
				if(element.getInput().getId().equals(designable.getId())){
					removeChild(element);
					setRendered(false);
					return;
				}
			}
		}
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		for(FormElement element : getElements()){
			boolean b = element instanceof JSDesignableLightningInput;
			if(b){
				if(element.getId().equals(designable.getId())){
					delegate.moveDesignable(element, steps);
				}
			}else{
				if(element.getInput().getId().equals(designable.getId())){
					delegate.moveDesignable(element, steps);
				}
			}
		}
	}

}
