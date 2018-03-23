package framework.lightning.designables;

import static def.dom.Globals.console;

import framework.InputField;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSDesignableFormLayout extends FormLayout {
	
	private Object data = new Object();
	
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
		}else if(key.equals("spacing")){
			setSpacing(value);
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void setData(Object data){
		this.data = data;
		for(String key : Object.keys(data)){
			Object o = (Object)data.$get(key);
			FormElement element = getElement(key);
			if(element != null){
				InputField f = element.getInput();
				f.setValue(o);
				//element.getInput().setValue(o);
			}
		}
	}
	
	
	protected void updateData(){
		for(FormElement element : getElements()){
			String key = element.getName();
			Object value = (Object)element.getInput().getValue();
			data.$set(key, value);
		}
	}
	
	public Object getData(){
		updateData();
		return data;
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = super.getParameters();
		AttributeParameter parameter = new AttributeParameter("layout", "Layout", "Basic");
		parameter.options.push(new Option("Stacked", "stacked"));
		parameter.options.push(new Option("Horizontal", "horizontal"));
		parameter.options.push(new Option("inline", "inline"));
		parameter.options.push(new Option("Compound", "compound"));
		
		
		AttributeParameter spacing = new AttributeParameter("spacing", "Spacing", "Basic");
		for(int i = 0; i < SPACINGS.length;i++){
			String label = SPACINGS[i];
			String value = SIZES[i];
			spacing.options.push(new Option(label,value));
		}
		
		parameters.push(parameter,spacing);
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
