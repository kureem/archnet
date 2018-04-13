package framework.lightning;

import framework.InputField;
import framework.JSContainer;

public class FormElement extends Col {

	protected JSContainer label = new JSContainer("label", "label").addClass("slds-form-element__label");

	private JSContainer control = new JSContainer("div").addClass("slds-form-element__control");
	
	private JSContainer help = new JSContainer("div").addClass("slds-form-element__help");
	
	private JSContainer asterix = new JSContainer("abbr").addClass("slds-required").setAttribute("title", "Required").setHtml("*");

	public FormElement(String name, String tag) {
		super(name);
		
		addClass("slds-form-element");
		addChild(label);
		label.addChild(asterix);
		addChild(control);
		addChild(help);
		setAttribute("sections", "12");
		setAttribute("span", "12");
		refreshCls();
		clearError();
		setRequired(false);
	}
	
	public void setError(String msg){
		addClass("slds-has-error");
		help.setHtml(msg);
		help.setStyle("display", "block");
	}
	
	public void clearError(){
		removeClass("slds-has-error");
		help.setHtml("");	
		help.setStyle("display", "none");
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
	
	public void setRequired(boolean b){
		setAttribute("required", b + "");
		asterix.setVisible(b);
	}
	
	public InputField<?> getInput(){
		return (InputField<?>)control.getChildren().$get(0);
	}
	
	public JSContainer getControl(){
		return control;
	}
	
}
