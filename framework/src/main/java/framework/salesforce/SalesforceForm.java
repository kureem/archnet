package framework.salesforce;

import def.js.JSON;
import framework.EventListener;
import framework.JSContainer;
import framework.JSOption;
import framework.builder.properties.ExtendedPropertyEditorPrompt;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.ExtAttributeParameter;
import framework.design.Parameter;
import framework.designables.JSDesignableSelect;
import framework.lightning.designables.JSDesignableFormElement;
import framework.lightning.designables.JSDesignableFormLayout;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class SalesforceForm extends JSDesignableFormLayout {

	public SalesforceForm() {
		super();
		setName("form");
		setAttribute("identifier", "lgt:crud-form");
	}

	private Array<Object> fields = new Array<Object>();

	@Override
	public void applyParam(String key, String value) {
		super.applyParam(key, value);
		if (key.equals("fields")) {
			@SuppressWarnings("unchecked")
			Array<Object> fields = (Array<Object>) JSON.parse(value);
			setFields(fields);
		}
	}

	public void setObjectType(String type) {
		applyParam("objectType", type);
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = super.getParameters();
		AttributeParameter objectType = new AttributeParameter("objectType", "Object Type", "Basic");

		ExtAttributeParameter fields = new ExtAttributeParameter("fields", "Fields", "Basic") {
			@Override
			public ExtendedPropertyEditorPrompt getPrompt(Designable designable) {

				ExtendedPropertyEditorPrompt prompt = new ExtendedPropertyEditorPrompt("prompt", "Select Columns") {

					@Override
					public void setProperty(Designable designable, Parameter parameter) {

						FieldsList list = null;
						if (getBody().getChildren().length > 0) {
							list = (FieldsList) getBody().getChildren().$get(0);
						} else {
							list = new FieldsList("list");
							list.setStyle("display", "block");
							list.getTable().setSelectable(true);
							getBody().addChild(list);
						}
						String type = designable.getAttribute("objectType");
						if (type == null || type.length() <= 0) {
							type = "Account";
						}
						list.setType(type);
					}
				};

				prompt.addButton("save", "Save").addCancelButton("Cancel");
				prompt.addEventListener(new EventListener() {

					@Override
					public void performAction(JSContainer source, Event evt) {
						FieldsList lis = (FieldsList) prompt.getBody().getChildren().$get(0);
						designable.applyParam("fields", JSON.stringify(lis.getTable().getSelectedItems()));

					}
				}, "save");
				return prompt;
			}
		};
		params.push(objectType, fields);

		return params;
	}

	@SuppressWarnings("unchecked")
	public void setFields(Array<Object> fields) {
		this.fields = fields;
		clear();
		for (Object field : fields) {
			String name = (String) field.$get("name");
			String type = (String) field.$get("type");
			String label = (String) field.$get("label");
			JSDesignableFormElement element = new JSDesignableFormElement(name);
			element.applyParam("span", "6");
			element.applyParam("type", type);
			element.applyParam("label", label);
			boolean nillable = (Boolean)field.$get("nillable");
			element.setRequired(!nillable);
			JSDesignableSelect select = (JSDesignableSelect) element.getInput();
			if (type.equals("picklist")) {
				Array<Object> picklists = (Array<Object>) field.$get("picklistValues");
				for (Object o : picklists) {
					boolean active = (Boolean) o.$get("active");
					if (active) {
						boolean defaultValue = (Boolean) o.$get("defaultValue");
						String plabel = (String) o.$get("label");
						String pvalue = (String) o.$get("value");

						JSOption opt = new JSOption(plabel, pvalue);
						opt.setSelected(defaultValue);
						select.addOption(new JSOption(plabel, pvalue));
					}

				}
			}
			addFormElement(element);
		}
	}

	public Array<Object> getFields() {
		return fields;
	}

}
