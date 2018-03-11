package framework.lightning;

import framework.InputField;
import framework.JSContainer;

public class FormElement extends Col {

	protected JSContainer label = new JSContainer("label", "label").addClass("slds-form-element__label");

	private JSContainer control = new JSContainer("div").addClass("slds-form-element__control");

	public FormElement(String name, String tag) {
		super(name);
		
		addClass("slds-form-element");
		addChild(label);
		addChild(control);
		setAttribute("sections", "12");
		setAttribute("span", "12");
		refreshCls();
	}

	public FormElement setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public FormElement setInput(InputField<?> input){
		control.clearChildren();
		control.setRendered(false);
		control.addChild((JSContainer)input);
		return this;
	}
	
	public InputField<?> getInput(){
		return (InputField<?>)control.getChildren().$get(0);
	}
	
	public JSContainer getControl(){
		return control;
	}
	
}
