package framework.salesforce;

import framework.ServiceCallback;
import framework.builder.data.SalesforceObjectService;
import framework.core.BeanFactory;
import framework.designables.JSDesignableCardLayoutItem;
import framework.lightning.designables.JSDesignableTable;
import framework.lightning.table.TableColumn;
import jsweet.lang.Array;

public class FieldsList extends JSDesignableCardLayoutItem implements ServiceCallback {

	private JSDesignableTable table = new JSDesignableTable("table");

	private SalesforceObjectService service = BeanFactory.getInstance().getBeanOfType(SalesforceObjectService.class);

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

	public JSDesignableTable getTable() {
		return table;
	}

	public void setType(String type) {
		service.describe(this, type, this);
	}

	@Override

	public boolean consume(Object response, double statusCode) {

		jsweet.lang.Object ob = (jsweet.lang.Object) response;
		@SuppressWarnings("unchecked")
		Array<jsweet.lang.Object> fields = (Array<jsweet.lang.Object>) ob.$get("fields");
		table.setTableData(fields);
		render();
		return true;
	}

}
