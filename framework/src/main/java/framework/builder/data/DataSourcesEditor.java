package framework.builder.data;

import def.js.JSON;
import framework.InputTypes;
import framework.JSInput;
import framework.JSTextArea;
import framework.builder.editors.AbstractEditor;
import framework.builder.editors.VisualEditor;
import framework.lightning.FormElement;
import framework.lightning.FormLayout;
import jsweet.lang.Object;

public class DataSourcesEditor extends AbstractEditor<DataSource<Object>> {

	// private Object

	// private Dynafo
//	Modal modal = new Modal("Datasource", "Datasource");
	JSInput url = new JSInput("url").setType(InputTypes.url);
	JSTextArea body = new JSTextArea("body");

	public DataSourcesEditor(String name,VisualEditor rootEditor) {
		super(name, "div", rootEditor);
	//	addChild(modal);
		FormLayout form = new FormLayout("form", "div");
		url.addClass("slds-input");
		body.addClass("slds-input");

		form.addFormElement(new FormElement("url", "div").setInput(url).setLabel("Url"));
		form.addFormElement(new FormElement("body", "div").setInput(body).setLabel("Body"));
		//modal.setBody(form);
		
		addChild(form);
	}

	@Override
	public String getMarshall() {

		Object o = new Object();
		o.$set("url", url.getValue());
		o.$set("body", body.getValue());
		return JSON.stringify(o);
	}

	@Override
	public DataSource<Object> createNew(File f) {

		return new RestDataSource();
	}

	@Override
	public DataSource<Object> unmarshall(File f) {

		RestDataSource rest = new RestDataSource();
		String data = f.getData();
		if (data != null && data.length() > 0) {
			rest.setConfig((Object) JSON.parse(data));
		}

		return rest;
	}

	@Override
	public void consume(DataSource<Object> data) {

		RestDataSource ss = (RestDataSource) data;
		Object config = ss.getConfig();
		if (config != null) {
			String surl = (String) config.$get("url");
			url.setValue(surl);
			String sbody = (String) config.$get("body");
			body.setValue(sbody);
		}
		

	}

}