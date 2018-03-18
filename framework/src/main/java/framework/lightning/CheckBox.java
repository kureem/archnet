package framework.lightning;

import framework.EventListener;
import framework.InputField;
import framework.JSCheckBox;
import framework.JSContainer;
import jsweet.dom.Event;

public class CheckBox extends JSContainer implements InputField<Boolean>, EventListener{

	private JSCheckBox checkbox = new JSCheckBox("checkbox");

	private JSContainer checkboxLabel = new JSContainer("checkboxLabel", "label");

	private JSContainer label = new JSContainer("span").addClass("slds-form-element__label");

	public CheckBox(String name) {
		super(name, "span");
		addClass("slds-checkbox");
		addChild(checkbox);
		checkbox.addClass("slds-assistive-text");
		checkboxLabel.addClass("slds-checkbox__label");
		addChild(checkboxLabel);
		checkboxLabel.addChild(new JSContainer("div").addClass("slds-checkbox_faux"));
		checkboxLabel.addChild(label);
		addEventListener(this, "click");
	}
	
	
	

	public CheckBox setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}

	@Override
	public Boolean getValue() {
		return checkbox.getValue();
		//return getAttribute("checked") != null;
		
	}

	@Override
	public void setValue(Boolean val) {
		checkbox.setValue(val);
	}


	
	public void toggle(){
		checkbox.setValue(!checkbox.getValue());
	}
	
	

	@Override
	public JSContainer addEventListener(EventListener listener, String type) {
		if(type.equalsIgnoreCase("change")){
			type = "click";
		}
		return super.addEventListener(listener, type);
	}




	@Override
	public void performAction(JSContainer source, Event evt) {
		
		toggle();
		// TODO Auto-generated method stub
		
	}

}
