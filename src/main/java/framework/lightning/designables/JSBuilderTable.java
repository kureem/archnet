package framework.lightning.designables;

import static jsweet.lang.Globals.parseInt;

import framework.DndAble;
import framework.EventListener;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.Renderable;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.CheckBox;
import framework.lightning.table.Table;
import framework.lightning.table.TableCellRenderer;
import framework.lightning.table.TableColumn;
import framework.lightning.table.TableColumnModel;
import framework.lightning.table.TableModel;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSBuilderTable extends Table implements Designable,  TableColumnModel, TableModel, TableCellRenderer,   MouseEventAble,DndAble{

	private DesignableDelegate delegate = new DesignableDelegate(this);


	private Array<Object> tableData = new Array<Object>();
	
	
//	private Array<Object> selected = new Array<Object>();

	//private boolean selectable = false;
	


	public JSBuilderTable(String name) {
		super(name);

		addClass("slds-table_resizable-cols");
		setTableCellRenderer(this);
		/*for (int i = 1; i <= 5; i++) {
			addColumn(new TableColumn("field" + i, "field" + i, "Field " + i));
		}*/
		applyParam("PageSize", "10");
		setTableColumnModel(this);
		setModel(this);
		setIdField("Id");
	}
	
	
	


	public void setIdField(String field){
		applyParam("IdField", field);
	}
	
	public String getIdField(){
		return getAttribute("IdField");
	}

	

	public Array<Object> getSelectedItems() {
		Array<Object> result = new Array<Object>();
		for (Object o : tableData) {
			if (o.$get("selected") != null && ((Boolean) o.$get("selected") == true)) {
				result.push(o);
			}
		}
		//this.selected = result;
		return result;
	}
	
	
	public void setSelectedItems(Array<Object> items) {
		
		//this.selected = items;
		for(Object item : tableData){
			item.$set("selected", isSelected(item, items));
		}
		setTableData(tableData);
	}
	
	public boolean isSelected(Object item, Array<Object> items){
		String idField = getAttribute("IdField");
		for (Object o : items) {
			if(o.$get(idField).equals(item.$get(idField))){
				//o.$set("selected", true);
				return true;
			}
			
		}
		return false;
	}

	@Override
	public Renderable getComponent(Table table, java.lang.Object value, int row, int column) {
		
		
		

		if (value != null && value instanceof Boolean) {
			CheckBox ch = new CheckBox("");
			ch.setValue((Boolean) value);
			return ch;
		}

		JSContainer truncate = new JSContainer("div").addClass("slds-truncate");
		String s = "";
		if (value != null) {
			s = value.toString();
		}

		truncate.setHtml(s).setAttribute("title", s);
		TableColumn col = getColumn(column);
		if(col!= null && col.isDetailLink()){
			truncate.setTag("a");
			truncate.setAttribute("href", "javascript:void(0);");
			truncate.addEventListener(new EventListener() {
				
				@Override
				public void performAction(JSContainer source, Event evt) {
					evt.$set("row", tableData.$get(row));
					evt.$set("data", tableData.$get(row));
					//evt.$set("row", tableData.$get(row));
					fireListener("showDetail", evt);
				}
			}, "click");
		}
		return truncate;
	}

	@Override
	public void applyParam(String key, String value) {

		delegate.applyParameter(key, value, true);

		boolean b = "true".equals(value);
		if (key.equals("PageSize")) {

			setPageSize((int) parseInt(value));

		} else if (key.equals("Bordered")) {
			setBordered(b);

		} else if (key.equals("CellBuffered")) {
			setCellBuffered(b);

		} else if (key.equals("ColBordered")) {
			setColBordered(b);

		} else if (key.equals("FixedLayout")) {
			setFixedLayout(b);

		} else if (key.equals("MultiSelectable")) {
			setMultiSelectable(b);

		} else if (key.equals("NoRowHover")) {
			setNoRowHover(b);

		} else if (key.equals("Striped")) {
			setStriped(b);

		} else if (key.equals("ResizableCol")) {

			setResizableCol(b);
		}
	}

	public void clearColumns() {
		theadRow.clearChildren();
		theadRow.setRendered(false);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Array<Designable> getDesignables() {
		Array res = theadRow.getChildren();
		return res;
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

		String[] boolParams = new String[] { "Bordered", "CellBuffered", "ColBordered", "FixedLayout",
				 "NoRowHover", "Striped", "Selectable", "ResizableCol" };

		for (String param : boolParams) {
			AttributeParameter parameter = new AttributeParameter(param, param, "Advanced");
			parameter.options.push(new Option("", ""));
			params.push(parameter);
		}

		AttributeParameter parameter = new AttributeParameter("PageSize", "Page Size", "Basic");

		parameter.options.push(new Option("5", "5"));
		parameter.options.push(new Option("10", "10"));
		parameter.options.push(new Option("15", "15"));
		parameter.options.push(new Option("20", "20"));
		parameter.options.push(new Option("30", "30"));
		parameter.options.push(new Option("50", "50"));
		params.push(parameter);

		AttributeParameter IdField = new AttributeParameter("IdField", "Id Field", "Basic");
		//selectOn.options.push(new Option("click", "Click"));
		//selectOn.options.push(new Option("dblclick", "Double Click"));
		params.push(IdField);
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof TableColumn){
			addColumn((TableColumn)designable);
		}else{
			throw new jsweet.lang.Error("Can only add component of type Table Column in a Table");
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		theadRow.removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {

	}

	@Override
	public void addColumn(TableColumn aColumn) {
		theadRow.addChild(aColumn);
	}

	public void setTableData(Array<Object> data) {

		this.tableData = data;
		refreshData();

		// super.setData(data);
	}

	@Override
	public double getColumnCount() {
		return theadRow.getChildren().length;
	}

	@Override
	public double getColumnIndex(java.lang.Object columnIdentifier) {
		
		return -1;
	}

	@Override
	public TableColumn getColumn(int columnIndex) {
		return (TableColumn)theadRow.getChildren().$get(columnIndex);
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
	public java.lang.Object getValueAt(int rowIndex_, int columnIndex_) {
		int rowIndex = rowIndex_;
		//int columnIndex = columnIndex_;

		if (tableData.length > rowIndex) {
			Object line = tableData.$get(rowIndex);
			if (line != null) {
				

				
					TableColumn col = getColumn(columnIndex_);
					if (col != null) {
						String key = (String) col.getIdentifier();
						return line.$get(key);
					}
				
			}
		}
		return "";
	}

	@Override
	public void setValueAt(java.lang.Object aValue, int rowIndex, int columnIndex) {

	}





	

	
	
	
	

}
