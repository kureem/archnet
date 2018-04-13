package framework.salesforce;

import static jsweet.dom.Globals.alert;
import static jsweet.dom.Globals.window;

import framework.EventListener;
import framework.JSContainer;
import framework.ServiceCallback;
import framework.builder.data.SalesforceObjectService;
import framework.builder.editors.VisualEditor;
import framework.core.BeanFactory;
import framework.designables.JSDesignableCardLayoutItem;
import framework.lightning.designables.JSDesignableTable;
import framework.lightning.table.TableColumn;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class ObjectList extends JSDesignableCardLayoutItem implements ServiceCallback{

	private JSDesignableTable table = new JSDesignableTable("table");
	
	private SalesforceObjectService service = BeanFactory.getInstance().getBeanOfType(SalesforceObjectService.class);
	
	public ObjectList(String name) {
		super(name, "div");
		table.clearColumns();
		table.setSelectable(true);
		table.addColumn(new TableColumn("label", "label", "Label", true));
		table.addColumn(new TableColumn("name", "name", "API Name"));
		table.addColumn(new TableColumn("description", "description", "Description"));
		table.addColumn(new TableColumn("custom", "custom", "Custom"));
		table.addColumn(new TableColumn("deployed", "deployed", "Deployed"));
		addChild(table);
		
		table.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				
				fireListener("showDetail", evt);
				// TODO Auto-generated method stub
				//String name = (String)((Object)evt.$get("row")).$get("name");
				//fields.setType(name);
				//cardLayout.activate(name);
			}
		}, "showDetail");
		service.types(this, this);
		
	}
	
	public Array<jsweet.lang.Object> getSelectedItems(){
		return table.getSelectedItems();
	}

	@Override
	public boolean consume(java.lang.Object response, double statusCode) {
		@SuppressWarnings("unchecked")
		Array<jsweet.lang.Object> lst = (Array<jsweet.lang.Object>)response;
		
		table.setTableData(lst);
		render();
		return true;
	}

	@Override
	public boolean error(Object err, double statusCode) {
		if (statusCode == 500) {
			alert("Please authenticate first and come back");
			
			VisualEditor editor = getAncestorWithClass("visual-editor");
			editor.save();
			//ProjectService service = BeanFactory.getInstance().getBeanOfType(ProjectService.class);
			
			window.location.href = "/connect/salesforce";
		}else{
			alert("An error occured while executiong this function: status code=" + statusCode);
		}
		return false;
	}

}
