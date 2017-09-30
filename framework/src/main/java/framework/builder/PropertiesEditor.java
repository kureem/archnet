package framework.builder;

import framework.EventListener;
import framework.InputField;
import framework.JSContainer;
import framework.JSInput;
import framework.JSOption;
import framework.JSSelect;
import framework.JSTextArea;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.lightning.CheckBox;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import jsweet.dom.Event;

public class PropertiesEditor extends FormLayout implements EventListener, Editor {

	protected Designable component;

	public PropertiesEditor(String name) {
		super(name, "div");
		setHorizontal(true).addClass("slds-form_compact");

	}

	public void setComponent(Designable designable) {
		this.component = designable;
	}

	public PropertiesEditor addProperty(String label, JSInput input) {
		FormElement width = new FormElement("elem", "div");
		width.setLabel(label);
		input.addClass("slds-input");
		width.setInput(input);
		addFormElement(width);
		return this;
	}

	public PropertiesEditor addProperty(Parameter parameter) {
		FormElement element = new FormElement("elem", "div");
		element.setLabel(parameter.label);
		if (parameter.type.equalsIgnoreCase("String")) {
			JSInput input = new JSInput(parameter.name);
			input.addEventListener(this, "change");
			input.addClass("slds-input");
			element.setInput(input);
		} else if (parameter.type.equalsIgnoreCase("Boolean")) {
			CheckBox cb = new CheckBox(parameter.name);
			cb.addEventListener(this, "change");
			element.setInput(cb);
		} else if (parameter.type.equalsIgnoreCase("select")) {
			JSSelect select = new JSSelect(parameter.name);
			for (Option opt : parameter.options) {
				JSOption o = new JSOption(opt.text, opt.value);
				select.addOption(o);
			}
			select.addClass("slds-select");
			element.setInput(select);
			select.addEventListener(this, "change");
		} else if (parameter.type.equalsIgnoreCase("textarea")) {
			JSTextArea cb = new JSTextArea(parameter.name);
			cb.addClass("slds-textarea");
			element.setInput(cb);
			cb.addEventListener(this, "change");
		}

		addFormElement(element);
		return this;

	}

	@SuppressWarnings("rawtypes")
	@Override
	public void performAction(JSContainer source, Event evt) {

		String value = ((InputField) source).getValue().toString();
		component.setParameter(source.getName(), value, true);
	}

}
