package framework.builder.data;

import framework.InputField;
import framework.InputTypes;
import framework.JSInput;
import framework.JSOption;
import framework.JSSelect;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class DynaForm extends FormLayout implements InputField<Object> {

	//private Array<Object> fields = new Array<Object>();

	public DynaForm(String name) {
		super(name, "div");
	}

	@SuppressWarnings("unchecked")
	public void setFields(Array<Object> fields) {
	//	this.fields = fields;

		for (Object o : fields) {
			String name = (String) o.$get("name");
			String type = (String) o.$get("type");
			String label = (String) o.$get("label");

			FormElement element = new FormElement("elem_" + name, "div");
			element.setLabel(label);
			InputField<?> input = new JSInput(name);

			if (type == null || type.trim().equalsIgnoreCase("") || type.equalsIgnoreCase("string")
					|| type.equalsIgnoreCase("text")) {
				// element.setInput(new JSInput(name));
			} else if (type.equalsIgnoreCase("integer") || type.equalsIgnoreCase("numeric")) {
				input = new JSInput(name).setType(InputTypes.number);

			} else if (type.equalsIgnoreCase("select")) {
				Array<Object> options = (Array<Object>) o.$get("options");
				JSSelect select = new JSSelect(name);
				for (Object opt : options) {
					String text = (String) opt.$get("text");
					String value = (String) opt.$get("value");
					select.addOption(new JSOption(text, value));
				}
				input = select;
			} else if (type.equalsIgnoreCase("multi")) {
				MultiForm multi = new MultiForm(name);
				Array<Object> options = (Array<Object>)o.$get("options");
				multi.setConfigs(options);
				input = multi;
				
			}
			input.addClass("slds-input");
			element.setInput(input);
			addFormElement(element);
		}
	}

	@Override
	public Object getValue() {
		Object result = new Object();
		for(FormElement element : getElements()){
			java.lang.Object value = element.getInput().getValue();
			result.$set(element.getInput().getName(), value);
		}
		return result;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public void setValue(Object val) {
		for(FormElement element : getElements()){
			String name = element.getInput().getName();
			if(val.$get(name) != null){
				java.lang.Object o = val.$get(name);
				InputField in = (InputField)element.getInput();
				in.setValue(o);
			}
		}
	}

	@Override
	public void setRawValue(String value) {
	}

}
