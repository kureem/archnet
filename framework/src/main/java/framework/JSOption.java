package framework;

public class JSOption extends JSContainer {

	public JSOption(String text, String value) {
		super("option");
		setAttribute("value", value);
		setHtml(text);
	}

	public String getValue() {
		return getAttribute("value");
	}

	public void setValue(String value) {
		setAttribute("value", value);
	}

	public String getText() {
		return getHtml();
	}

	public void setText(String label) {
		setHtml(label);
	}
	
	public void setSelected(boolean b){
		if (b) {
			setAttribute("selected", "true");
		}else{
			setAttribute("selected", null);
		}
	}

}
