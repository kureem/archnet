package framework.lightning.designables;

import static jsweet.lang.Globals.parseInt;

import def.js.JSON;
import framework.JSContainer;
import framework.Renderable;
import framework.builder.marshalling.Component;
import framework.builder.properties.ExtPropertiesEditor;
import framework.builder.properties.KeyValueEditor;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.ExtDesignable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.CheckBox;
import framework.lightning.table.Table;
import framework.lightning.table.TableCellRenderer;
import framework.lightning.table.TableColumn;
import framework.lightning.table.TableColumnModel;
import framework.lightning.table.TableModel;
import jsweet.dom.CustomEvent;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSDesignableTable extends Table implements ExtDesignable, TableColumnModel, TableModel, TableCellRenderer{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	private Array<TableColumn> fields  = new Array<TableColumn>();
	
	private Array<Object> tableData = new Array<Object>();

	public JSDesignableTable(String name) {
		super(name);
		
		setTableCellRenderer(this);
		for(int i = 1; i <= 5; i++){
			addColumn(new TableColumn("field" + i, "field" + i, "Field " + i));
		}
		applyParam("PageSize", "10");
		setTableColumnModel(this);
		refreshColumns();
		setModel(this);
	}

	
	
	
	@Override
	public void refreshData() {
		// TODO Auto-generated method stub
		super.refreshData();
		CustomEvent evt =new CustomEvent("dataLoaded");
		//evt.srcElement = getNative();
		evt.$set("data", tableData);
		//fireListener("dataLoaded", evt);
	}




	@Override 
	public Renderable getComponent(Table table, java.lang.Object value, int row, int column) {
		
		if(value != null && value instanceof Boolean){
			CheckBox ch = new CheckBox("");
			ch.setValue((Boolean)value);
			return ch;
		}
		
		JSContainer truncate = new JSContainer("div").addClass("slds-truncate");
		String s = "";
		if(value != null){
			s = value.toString();
		}
		
		truncate.setHtml(s).setAttribute("title", s);
		return truncate;
	}
	
	@Override
	public void applyParam(String key, String value) {

		delegate.applyParameter(key, value, true);

		boolean b = "true".equals(value);
		if (key.equals("fields")) {
			fields = new Array<TableColumn>();
			if (value != null) {
				Object o = (Object) JSON.parse(value);
				for (String val : Object.keys(o)) {
					String txt = (String) o.$get(val);
					TableColumn col = new TableColumn(val, val, txt);
					fields.push(col);
				}
			}
			refreshColumns();
		}else if(key.equals("PageSize")){
		
			setPageSize((int)parseInt(value));
			
		}else if(key.equals("Bordered")){
			setBordered(b);
			
		}else if(key.equals("CellBuffered")){
			setCellBuffered(b);
			
		}else if(key.equals("ColBordered")){
			setColBordered(b);
			
		}else if(key.equals("FixedLayout")){
			setFixedLayout(b);
			
		}else if(key.equals("MultiSelectable")){
			setMultiSelectable(b);
			
		}else if(key.equals("NoRowHover")){
			setNoRowHover(b);
			
		}else if(key.equals("Striped")){
			setStriped(b);
			
		}else if(key.equals("Selectable")){
			
			setSelectable(b);
		}else if(key.equals("ResizableCol")){
			
			setResizableCol(b);
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();

		AttributeParameter options = new AttributeParameter("fields", "Fields", "Extended");
		params.push(options);

		String[] boolParams = new String[]{"Bordered",
				"CellBuffered",
				"ColBordered",
				"FixedLayout",
				"MultiSelectable",
				"NoRowHover",
				"Striped",
				"Selectable",
				"ResizableCol"};
		
		for(String param : boolParams){
			AttributeParameter parameter = new AttributeParameter(param,param, "Advanced");
			parameter.options.push(new Option("",""));
			params.push(parameter);
		}
		
		AttributeParameter parameter = new AttributeParameter("PageSize","Page Size", "Basic");
	
		parameter.options.push(new Option("5","5"));
		parameter.options.push(new Option("10","10"));
		parameter.options.push(new Option("15","15"));
		parameter.options.push(new Option("20","20"));
		parameter.options.push(new Option("30","30"));
		parameter.options.push(new Option("50","50"));
		params.push(parameter);
		
		AttributeParameter selectOn = new AttributeParameter("SelectRow","Select On", "Basic");
		selectOn.options.push(new Option("click","Click"));
		selectOn.options.push(new Option("dblclick","Double Click"));
		params.push(selectOn);
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {

	}

	@Override
	public void removeDesignable(Designable designable) {

	}

	@Override
	public void moveDesignable(Designable designable, int steps) {

	}


	@Override
	public void addColumn(TableColumn aColumn) {
		fields.push(aColumn);
		refreshColumns();
	}
	
	
	public void setTableData(Array<Object> data){
		
		this.tableData = data;
		refreshData();
		
		//super.setData(data);
	}


	@Override
	public double getColumnCount() {
		return fields.length;
	}


	
	
	@Override
	public double getColumnIndex(java.lang.Object columnIdentifier) {

		for (double i = 0; i < fields.length; i++) {
			if (fields.$get(i).getIdentifier().equals(columnIdentifier)) {
				return i;
			}
		}
		return -1;
	}

	@Override
	public TableColumn getColumn(int columnIndex) {
		return fields.$get(columnIndex);
	}


	@Override
	public ExtPropertiesEditor[] getExtEditors() {
		KeyValueEditor fields = new KeyValueEditor("fields"){

			@Override
			public void applyDataOnDesignable(Designable designable, Object data) {
				
				designable.applyParam("fields", JSON.stringify(data));
			}

			@Override
			public Object getDataFromDesignable(Designable designable) {
				String options = designable.getAttribute("fields");
				if(options != null && options.length() > 0){
					Object data = (Object)JSON.parse(options);
					if(data != null){
						return data;
					}
				}
				return new Object();
			}

			
			
		};
		fields.setKeyLabel("Name");
		fields.setValueLabel("Label");
		fields.setTabLabel("Fields");	
		
		return new ExtPropertiesEditor[]{ fields};

	}


	@Override
	public double getRowCount() {
		
		return tableData.length;
	}


	@Override
	public boolean isCellEditable(int rowIndex, int columnIndex) {
		return false;
	}


	@Override
	public java.lang.Object getValueAt(int rowIndex, int columnIndex) {
		
		if(tableData.length > rowIndex){
			Object line = tableData.$get(rowIndex);
			if(line != null){
				if(fields.length > columnIndex){
					TableColumn col = fields.$get(columnIndex);
					if(col != null){
						String key = (String)col.getIdentifier();
						return line.$get(key);
					}
				}
			}
		}
		return "";
	}


	@Override
	public void setValueAt(java.lang.Object aValue, int rowIndex, int columnIndex) {
		
		
	}
	
		

}
