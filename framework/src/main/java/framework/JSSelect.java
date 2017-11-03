package framework;

public class JSSelect extends JSContainer implements InputField<String> {

	
	private String previousValue;
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
		previousValue = getValue();
		setAttribute("value", val);
		for (JSContainer opt : getChildren()) {
			if (opt.getAttribute("value").equals(val)) {
				((JSOption) opt).setSelected(true);
			}
		}
	}
	
	public String getPreviousValue(){
		return previousValue;
	}

	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}

}
