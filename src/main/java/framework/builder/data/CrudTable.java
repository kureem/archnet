package framework.builder.data;

import framework.EventListener;
import framework.JSContainer;
import framework.Renderable;
import framework.lightning.Button;
import framework.lightning.Panel;
import framework.lightning.PanelSection;
import framework.lightning.table.Table;
import framework.lightning.table.TableCellRenderer;
import framework.lightning.table.TableColumn;
import framework.lightning.table.TableModel;
import jsweet.dom.Event;
import jsweet.lang.Array;

public abstract class CrudTable extends Panel implements TableModel, TableCellRenderer, EventListener{
		
	private jsweet.lang.Object configs = new jsweet.lang.Object(); 

	private Table list = new Table("list");
	
	private PanelSection buttons = new PanelSection("buttons", "div");
	
	private PanelSection listSection = new PanelSection("listSection", "div");
	
	private Button addNew = new Button("addNew").setLabel("Add New").setState(Button.STATE_BRAND);
	
	public CrudTable(String name) {
		super(name);
		addClass("CrudTable");
		addSection(buttons);
		addSection(listSection);
		
		buttons.addChild(addNew);
		listSection.addChild(list);
		
		addNew.addEventListener(this, "click");	
		
	}
	
	
	public void setFields(Array<jsweet.lang.Object> fields){
		configs.$set("fields", fields);
		
		
		
		
		for(jsweet.lang.Object field : fields){
			
		//	String type = (String)field.$get("type");
			String name = (String)field.$get("name");
			String label = (String)field.$get("label");
			//String style = (String)field.$get("style");
			//String sclass = (String)field.$get("class");
			
			TableColumn col = new TableColumn(name, name, label);
			list.getTableColumnModel().addColumn(col);
		}
		list.refreshColumns();
	}
	
	public void setData(Array<jsweet.lang.Object> data){
		configs.$set("data", data);
		list.setModel(this);
		list.refreshData();
	}
	
	@SuppressWarnings("unchecked")
	public Array<jsweet.lang.Object> getFields(){
		return (Array<jsweet.lang.Object>)configs.$get("fields");
				
	}

	@SuppressWarnings("unchecked")
	public Array<jsweet.lang.Object> getData(){
		return (Array<jsweet.lang.Object>)configs.$get("data");
				
	}
	@Override
	public Renderable getComponent(Table table, Object value, int row, int column) {
	
	//	jsweet.lang.Object field = getFields().$get(column);
		
	/*	String type = (String)field.$get("type");
		String name = (String)field.$get("name");
		String label = (String)field.$get("label");
		String style = (String)field.$get("style");
		String sclass = (String)field.$get("class");
	*/	
		//integer
		//long
		//date
		//currency
		//text
		//date time
		//reference
		//boolean
		
		JSContainer cell = new JSContainer("div");
		
		jsweet.lang.Object data = getData().$get(row);
		
		cell.setHtml(data.toString());
		
		return cell;
	}

	@Override
	public double getRowCount() {
		
		if(getData() != null){
			
			return getData().length;
			//return  ((Double)getData().length).intValue();
		}
		return 0;
	}

	@Override
	public boolean isCellEditable(int rowIndex, int columnIndex) {
		return false;
	}

	@Override
	public Object getValueAt(int rowIndex, int columnIndex) {
		if(getData() != null){
			jsweet.lang.Object line = getData().$get(rowIndex);
			if(getFields() != null){
				jsweet.lang.Object cell = getFields().$get(columnIndex);
				String field = (String)cell.$get("name");
				return line.$get(field);
			}
		}
		
		return null;
	}

	@Override
	public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
		String name =  (String)getFields().$get(columnIndex).$get("name");
		getData().$get(rowIndex).$set(name, aValue);
		
	}


	public abstract void showForm(JSContainer source, Event evt);
	
	@Override
	public void performAction(JSContainer source, Event evt) {
		showForm(source, evt);
	}

	
}
