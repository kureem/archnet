package framework;

import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLTextAreaElement;

public class JSTextArea extends JSContainer implements InputField<String>{

	private final static Renderer<JSTextArea> TEXT_AREA_RENDERER = new Renderer<JSTextArea>() {

		@Override
		public void doRender(JSTextArea c, HTMLElement root) {
			HTMLTextAreaElement elem = (HTMLTextAreaElement)root;
			elem.value = c.getValue();
		}
		
	};
	
	public JSTextArea(String name) {
		super(name, "textarea");
		addRenderer(TEXT_AREA_RENDERER);
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
