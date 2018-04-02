package framework.lightning.designables;

import framework.DndAble;
import framework.InputField;
import framework.MouseEventAble;
import framework.builder.editors.VisualEditor;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.Preparable;
import framework.designables.JSDesignableInput;
import framework.designables.JSDesignableSelect;
import framework.designables.JSDesignableTextArea;
import framework.lightning.CheckBox;
import framework.lightning.ComboBox;
import framework.lightning.FormElement;
import framework.salesforce.SalesforceLookup;
import jsweet.lang.Array;

public class JSDesignableFormElement extends FormElement implements Designable, Preparable,MouseEventAble,DndAble{

	//private DesignableDelegate delegate = new DesignableDelegate(this);
	
	private InputField<?> input= null;
	
	public JSDesignableFormElement(String name) {
		super(name, "div");
		String padding = PADDING_SIZE_XX_SMALL;
		setPaddingBottom(padding).setPaddingLeft(padding).setPaddingTop(padding).setPaddingRight(padding);
		input = (JSDesignableInput)BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory("html:input").build(new Component(), true);
		input.addClass("slds-input");
		setInput(input);
		getInput().addClass("slds-input");
		applyParam("label", "Label");
		setAttribute("identifier", "lgt:input");
	}
	@Override
	public void applyParam(String key, String value) {
		super.applyParam(key, value);
		
		if(key.equalsIgnoreCase("required")){
			setRequired("true".equals(value));
		}
		
		if(key.equalsIgnoreCase("type")){
			//Object curVal = getValue();
			if(value.equals("date") || value.equals("datetime") || value.equals("currency") || value.equals("number") || value.equals("email")
					|| value.equals("phone") || value.equals("password") || value.equals("text")  || value.equals("string")  || value.equals("int")  || value.equals("double")){
				
				JSDesignableInput des = new JSDesignableInput(input.getName());
				des.applyParam("type", value);
				addDesignable(des);
				//setInput(des);
				label.setVisible(true);
				setTag("div");
				input.addClass("slds-input");
			}else if(value.equals("checkbox")){
				
				CheckBox des = new CheckBox(input.getName());
				addDesignable((Designable)des);
				des.setLabel(label.getHtml());
				label.setVisible(false);
				setTag("fieldset");
			}else if(value.equals("picklist") || value.equals("multipicklist")){
				JSDesignableSelect des = new JSDesignableSelect(input.getName());
				label.setVisible(true);
				setTag("div");
				addDesignable(des);
				if(value.equals("multipicklist")){
					des.setMultiple(true);
					des.setSize(6);
				}
				des.addClass("slds-select");
			}else if(value.equals("textarea") || value.equals("richtext")){
				JSDesignableTextArea des = new JSDesignableTextArea(input.getName());
				label.setVisible(true);
				setTag("div");
				addDesignable(des);
				des.addClass("slds-textarea");
			}else if(value.equals("ext-lookup")){
				ComboBox des = new ComboBox(input.getName());
				label.setVisible(true);
				setTag("div");
				addDesignable(des);
				//des.addClass("slds-textarea");
			}else if(value.equals("reference")){
				SalesforceLookup des = new SalesforceLookup(input.getName());
				label.setVisible(true);
				setTag("div");
				addDesignable(des);
			}
				
			setRendered(false);
			
			VisualEditor editor = getAncestorWithClass("visual-editor");
			if(editor != null){
				editor.getStructure().reload(this);
			}
		}
		
		
		else if(key.equals("label")){
			setLabel(value);
		}else if(key.equalsIgnoreCase("disabled")){
			if("true".equalsIgnoreCase(value)){
				setDisabled(true);
			}else{
				setDisabled(false);
			}
		}
	}
	
	public Object getValue(){
		return input.getValue();
	}

	@Override
	public Array<Designable> getDesignables() {

		
		return new Array<Designable>((Designable)input);
	}

	@Override
	public Component getComponent() {
		return super.getComponent();
	}

	
	public boolean validate(){
		return true;
	}
	
	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = super.getParameters();
		
		AttributeParameter type = new AttributeParameter("type", "Type", "Basic");
		
		type.options.push(new Option("date", "date"));
		type.options.push(new Option("datetime", "datetime"));
		type.options.push(new Option("Currency", "currency"));
		type.options.push(new Option("Number", "number"));
		type.options.push(new Option("Double", "double"));
		type.options.push(new Option("Integer", "int"));
		type.options.push(new Option("Email", "email"));
		type.options.push(new Option("Phone", "phone"));
		type.options.push(new Option("Text", "string"));
		type.options.push(new Option("Password", "password"));
		type.options.push(new Option("Url", "url"));	
		
		
		type.options.push(new Option("Checkbox", "checkbox"));
		
		type.options.push(new Option("Lookup", "reference"));
		type.options.push(new Option("Ext Lookup", "ext-lookup"));
		
		
		type.options.push(new Option("Pick List", "picklist"));
		type.options.push(new Option("Multi Pick List", "multipicklist"));
		
		
		type.options.push(new Option("Long Text", "textarea"));
		type.options.push(new Option("Rich Text", "richtext"));
		
		AttributeParameter label = new AttributeParameter("label", "Label", "Basic");
		
		AttributeParameter required = new AttributeParameter("required", "Required", "Basic");
		required.options.push(new Option("",""));
		
		parameters.push(type,label,required);
				//reference,string,int,double
		return parameters;
	}

	@SuppressWarnings("rawtypes")
	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof InputField){
			this.input = (InputField)designable;
			setInput((InputField<?>)designable);
		}else{
			throw new jsweet.lang.Error("Can only add component of type Input");
		}
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
	@Override
	public void prepare() {
		
		
	}




}
