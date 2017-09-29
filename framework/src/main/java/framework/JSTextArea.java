package framework;

public class JSTextArea extends JSContainer implements InputField<String> {

	public JSTextArea(String name) {
		super(name, "textarea");
	}

	public JSTextArea setDisabled(boolean b) {
		if (b) {
			setAttribute("disabled", "true");
		} else {
			setAttribute("disabled", null);
		}
		return this;
	}

	@Override
	public String getValue() {
		return getAttribute("value");
	}

	@Override
	public void setValue(String val) {
		setAttribute("value", val);
	}

	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}

}
