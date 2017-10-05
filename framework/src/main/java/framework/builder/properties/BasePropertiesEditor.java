package framework.builder.properties;

import framework.InputField;
import framework.JSInput;
import framework.design.Designable;
import framework.design.Parameter;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;

public class BasePropertiesEditor extends FormLayout implements PropertiesEditor {

	protected Designable component;

	public BasePropertiesEditor(String name) {
		super(name, "div");
		setHorizontal(true).addClass("slds-form_compact");

	}

	public void setComponent(Designable designable) {
		this.component = designable;
	}

	public BasePropertiesEditor addProperty(String label, JSInput input) {
		FormElement width = new FormElement("elem", "div");
		width.setLabel(label);
		input.addClass("slds-input");
		width.setInput(input);
		addFormElement(width);
		return this;
	}

	@SuppressWarnings("rawtypes")
	public BasePropertiesEditor addProperty(Parameter parameter, Designable designable) {
		// todo: delegate to ioc container to allow extension via simple
		// configurations.
		FormElement element = new FormElement("elem", "div");
		element.setLabel(parameter.label);
		PropertyEditor editor = parameter.getEditor(component);
		element.setInput((InputField) editor);
		addFormElement(element);
		return this;

	}

}
