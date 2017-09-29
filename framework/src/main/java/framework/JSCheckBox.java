package framework;

import framework.InputField;
import framework.InputTypes;
import framework.JSContainer;

public class JSCheckBox extends JSContainer implements InputField<Boolean> {

	public JSCheckBox(String name) {
		super(name, "input");
		setAttribute("type", InputTypes.checkbox);
	}

	public JSCheckBox setDisabled(boolean b) {
		if (b) {
			setAttribute("disabled", "true");
		} else {
			setAttribute("disabled", null);
		}
		return this;
	}

	@Override
	public Boolean getValue() {
		if (getAttribute("value") != null && "true".equalsIgnoreCase(getAttribute("value"))) {
			return true;
		}
		return false;
	}

	@Override
	public void setValue(Boolean b) {
		if (b) {
			setAttribute("value", "true");
			setAttribute("checked", "true");
		} else {
			setAttribute("value", "false");
			setAttribute("checked", null);
		}

	}

	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}

	public boolean isChecked() {
		return getValue();
	}

	public void setChecked(boolean b) {
		setValue(b);
	}

}
