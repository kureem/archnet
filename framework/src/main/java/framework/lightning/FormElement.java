package framework.lightning;

import framework.InputField;
import framework.JSContainer;

public class FormElement extends JSContainer {

	private JSContainer label = new JSContainer("label", "label").addClass("slds-form-element__label");

	private JSContainer control = new JSContainer("div").addClass("slds-form-element__control");

	public FormElement(String name, String tag) {
		super(name, tag);
		addClass("slds-form-element");
		addChild(label);
		addChild(control);
	}

	public FormElement setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public FormElement setInput(InputField<?> input){
		control.addChild((JSContainer)input);
		return this;
	}
	
	public JSContainer getControl(){
		return control;
	}
	
}
