package framework.lightning.designables;

import static def.dom.Globals.console;

import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import jsweet.lang.Array;

public class JSDesignableFormLayout extends FormLayout {
	
	public JSDesignableFormLayout() {
		super("Form Layout");
		applyParam("layout", "compound");
	}

	//private DesignableDelegate delegate = new DesignableDelegate(this);

	@Override
	public void applyParam(String key, String value) {
		super.applyParam(key, value);
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
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = super.getParameters();
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
		}else{
			console.error("Designable of type " + designable.getClass().getName() + " cannot be added to Form Layout");
		}
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		for(FormElement element : getElements()){
			boolean b = element instanceof JSDesignableFormElement;
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
			boolean b = element instanceof JSDesignableFormElement;
			if(b){
				if(element.getId().equals(designable.getId())){
					super.moveDesignable(element, steps);
				}
			}else{
				if(element.getInput().getId().equals(designable.getId())){
					super.moveDesignable(element, steps);
				}
			}
		}
	}

}
