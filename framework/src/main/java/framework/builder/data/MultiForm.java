package framework.builder.data;

import framework.util.HashMap;
import framework.util.Map;

import framework.EventListener;
import framework.InputField;
import framework.JSContainer;
import framework.JSOption;
import framework.JSSelect;
import framework.lightning.FormElement;
import framework.lightning.Panel;
import framework.lightning.PanelSection;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class MultiForm extends Panel implements InputField<jsweet.lang.Object> {

	private FormElement rootElement;

	private PanelSection section0 = new PanelSection("secion0", "div");

	private Map<String, PanelSection> map = new HashMap<>();
	
	JSSelect select = new JSSelect("root");

	public MultiForm(String name) {
		super(name);
		addSection(section0);
		rootElement = new FormElement("root", "div");
		rootElement.setLabel("");
		section0.addChild(rootElement);
	}

	@SuppressWarnings("unchecked")
	public void setConfigs(Array<Object> fields) {
		
		int count = 0;
		for (Object opt : fields) {
			String name = (String) opt.$get("name");
			String label = (String) opt.$get("label");
			select.addOption(new JSOption(label, name));
			DynaForm form = new DynaForm(name);
			Array<Object> options = (Array<Object>) opt.$get("options");
			if(options == null){
				options = (Array<Object>) opt.$get("fields");
			}
			PanelSection s = new PanelSection("", "div");
			s.addChild(form);
			addSection(s);
			form.setFields(options);
			s.setVisible(count == 0);
			map.put(name, s);
			count++;
		}
		select.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				String value = select.getValue();
				for (String name : map.keySet()) {

					map.get(name).setVisible(name.equals(value));
				}
			}
		}, "change");
		rootElement.setLabel("Type");
		rootElement.setInput(select);
		select.addClass("slds-input");
	}

	@Override
	public Object getValue() {
		Object result = new Object();
		String type = select.getValue();
		result.$set("type", type);
		for (String name : map.keySet()) {
			if(name.equals(type)){
				DynaForm form = (DynaForm) map.get(name).getChildren().$get(0);
				result.$set(name, form.getValue());
				break;
			}
		}
		return result;
	}

	@Override
	public void setValue(Object val) {
		for (String name : map.keySet()) {
			if (val.$get(name) != null) {
				DynaForm form = (DynaForm) map.get(name).getChildren().$get(0);
				form.setValue((Object) val.$get(name));
			}
		}
		
		String type = (String)val.$get("type");
		select.setValue(type);
		
		for (String name : map.keySet()) {

			map.get(name).setVisible(name.equals(type));
		}
	}

	@Override
	public void setRawValue(String value) {

	}

}
