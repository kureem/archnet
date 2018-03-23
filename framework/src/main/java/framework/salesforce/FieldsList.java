package framework.salesforce;

import static jsweet.dom.Globals.alert;
import static jsweet.dom.Globals.window;

import framework.ServiceCallback;
import framework.builder.data.ProjectService;
import framework.builder.data.SalesforceObjectService;
import framework.builder.editors.VisualEditor;
import framework.core.BeanFactory;
import framework.designables.JSDesignableCardLayoutItem;
import framework.lightning.designables.JSDesignableTable;
import framework.lightning.table.TableColumn;
import jsweet.lang.Array;

public class FieldsList extends JSDesignableCardLayoutItem implements ServiceCallback {

	private JSDesignableTable table = new JSDesignableTable("table");

	private SalesforceObjectService service = BeanFactory.getInstance().getBeanOfType(SalesforceObjectService.class);
	
	private Array<jsweet.lang.Object> selectedItems = new Array<jsweet.lang.Object>();

	public FieldsList(String name) {
		super(name, "div");
		table.clearColumns();
		table.addColumn(new TableColumn("label", "label", "Label"));
		table.addColumn(new TableColumn("name", "name", "API Name"));
		table.addColumn(new TableColumn("type", "type", "Data Type"));
		table.refreshColumns();
		addChild(table);
		table.setIdField("name");
		setStyle("display", "none");

	}

	public void setSelectedItem(Array<jsweet.lang.Object> items) {
		table.setSelectedItems(items);
		this.selectedItems = items;
	}

	public JSDesignableTable getTable() {
		return table;
	}

	public void setType(String type) {
		service.describe(this, type, this);
	}

	@Override

	public boolean consume(Object response, double statusCode) {

		if (statusCode != 200) {
			if (statusCode == 500) {
				alert("Please authenticate first and come back");
				
				VisualEditor editor = getAncestorWithClass("visual-editor");
				editor.save();
				//ProjectService service = BeanFactory.getInstance().getBeanOfType(ProjectService.class);
				
				window.location.href = "/connect/salesforce";
			}
			// alert(response);
		} else {

			jsweet.lang.Object ob = (jsweet.lang.Object) response;
			@SuppressWarnings("unchecked")
			Array<jsweet.lang.Object> fields = (Array<jsweet.lang.Object>) ob.$get("fields");
			table.setTableData(fields);
			table.setSelectedItems(selectedItems);
			render();
		}
		return true;
	}

}
