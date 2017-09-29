package framework;

public class JSSelect extends JSContainer implements InputField<String> {

	public JSSelect(String name) {
		super(name, "select");
	}

	public JSSelect addOption(JSOption option) {
		addChild(option);
		return this;
	}

	@Override
	public String getValue() {
		String val = getAttribute("value");
		for (JSContainer opt : getChildren()) {
			if (opt.getAttribute("value").equals(val)) {
				return ((JSOption) opt).getValue();
			}
		}
		return null;
	}

	@Override
	public void setValue(String val) {
		for (JSContainer opt : getChildren()) {
			if (opt.getAttribute("value").equals(val)) {
				((JSOption) opt).setSelected(true);
			}
		}
	}

	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}

}
