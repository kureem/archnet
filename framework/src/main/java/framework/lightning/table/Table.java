package framework.lightning.table;

import static def.dom.Globals.alert;

import java.util.LinkedList;
import java.util.List;

import framework.EventListener;
import framework.JSContainer;
import framework.Renderable;
import framework.lightning.Spinner;
import jsweet.dom.Event;

public class Table extends JSContainer {

	private JSContainer thead = new JSContainer("thead");

	
	private JSContainer tbody = new JSContainer("tbody");
	
	private JSContainer tfoot = new JSContainer("tfoot");

	private TableModel model;

	private TableCellRenderer tableCellRenderer = new DefaultTableCellRenderer();

	private TableColumnModel tableColumnModel = new DefaultTableColumnModel();
	
	private int currrentPage = 0;
	
	private int pageSize = 10;
	
	JSContainer ftr = new JSContainer("tr");
	
	JSContainer ftd = new JSContainer("td");
	
	private Paginator paginator = new Paginator("paginator");
	
	private boolean selectable = false;
	
	private boolean multiSelectable = false;
	
	
	private String selecteRowOn = "click";
	
	private String emptyTableMessage = "No data available";
	
	private List<TableRowsSelectionListener> rowsSelectionListeners = new LinkedList<>();
	
	private final static EventListener SELECT_ROW_EVT = new EventListener() {
		
		@Override
		public void performAction(JSContainer source, Event evt) {
			int index = source.getParent().getChildren().indexOf(source);
			alert("selected row index: " + index);
			
			Table table = (Table) source.getParent().getParent();
			int page = table.currrentPage;
			index = (page*table.pageSize) + index;
			table.fireRowsSelectionListeners(source, evt, index, index);
		}
	};

	public Table(String name) {
		super(name, "table");
		addClass("slds-table");
		addChild(thead);
		addChild(tbody);
		addChild(tfoot);
		tfoot.addChild(ftr.addChild(ftd));
		
		ftd.addChild(paginator);
		setBordered(true);
		tbody.setStyle("min-height", "250px");
		loading();
		
	}
	
	public void addRowsSelectionListener(TableRowsSelectionListener l){
		rowsSelectionListeners.add(l);
	}
	
	public void fireRowsSelectionListeners(JSContainer source, Event evt, int firstIndex, int lastIndex){
		for(TableRowsSelectionListener l : rowsSelectionListeners){
			l.onSelectRow(source, evt, this, firstIndex, lastIndex);
		}
	}
	
	
	public void setSelectRowOn(String on){
		this.selecteRowOn = on;
	}
	private JSContainer addEmptyRow(){
		tbody.getChildren().clear();
		JSContainer tr = new JSContainer("tr");
		JSContainer td = new JSContainer("td").setAttribute("colspan", "1000");
		tr.addChild(td);
		tr.addClass("empty-row");
		tbody.addChild(tr);
		return td;
	}
	
	private void loading(){
		addEmptyRow().addChild(new Spinner("spinner"));
	}
	
	private void emptyData(){
		addEmptyRow().addChild(new JSContainer("p").setHtml(emptyTableMessage));
	}
	
	
	

	public TableModel getModel() {
		return model;
	}

	public void setModel(TableModel model) {
		this.model = model;
		//this.pageSize = model.getPageSize();
	}

	public TableCellRenderer getTableCellRenderer() {
		return tableCellRenderer;
	}

	public void setTableCellRenderer(TableCellRenderer tableCellRenderer) {
		this.tableCellRenderer = tableCellRenderer;
	}

	public TableColumnModel getTableColumnModel() {
		return tableColumnModel;
	}

	public void setTableColumnModel(TableColumnModel tableColumnModel) {
		this.tableColumnModel = tableColumnModel;
	}

	public JSContainer getThead() {
		return thead;
	}

	public JSContainer getTbody() {
		return tbody;
	}
	
	
	public void setPage(int page){
		this.currrentPage = page;
		refreshData();
	}
	
	public int getPage(){
		return currrentPage;
	}
	
	
	public int getPageSize(){
		return pageSize;
	}
	
	public void setPageSize(int size){
		this.pageSize  = size;
		refreshData();
	}

	public void refreshData() {
		tbody.getChildren().clear();
		tbody.setRendered(false);
		int rows = model.getRowCount();
		int cols = tableColumnModel.getColumnCount();
		int iterSize = pageSize;
		if(rows < pageSize){
			iterSize = rows;
		}
		
		if(rows == 0){
			emptyData();
			
		}else{
			for (int row = 0; row < iterSize; row++) {
	
				int realRow = (currrentPage*pageSize) + row;
				
				if(realRow >= rows){
					break;
				}
				
				JSContainer tr = new JSContainer("tr");
				if(selectable){
					tr.addEventListener(SELECT_ROW_EVT, selecteRowOn);
				}
				tbody.addChild(tr.addClass("slds-hint-parent"));
	
				for (int col = 0; col < cols; col++) {
					Object value = model.getValueAt(realRow, col);
					Renderable cell = tableCellRenderer.getComponent(this, value, row, col);
					JSContainer td = new JSContainer("td").addClass("slds-cell-wrap").setAttribute("role", "gridcell");
					if(value != null && value instanceof Boolean){
						td.addClass("boolean-cell");
					}else if(value != null && value instanceof Number){
						td.addClass("numeric-cell");
					}
					
					td.addClass("col_" + col);
					tr.addChild(td);
					
					tr.addClass("row_" + row);
					td.addChild((JSContainer) cell);
	
				}
			}
		}
		
		paginator.setTable(this);
		tfoot.setAttribute("colspan",  cols + "");
		ftd.setAttribute("colspan",  cols + "");
		ftr.setAttribute("colspan",  cols + "");
	}
	
	public JSContainer getRow(int index){
		return tbody.getChildren().get(index);
	}
	
	public JSContainer getBody(){
		return tbody;
	}
	
	public void setSelectable(boolean b){
		selectable = b;
	}
	
	public boolean isSelectable(){
		return selectable;
	}
	
	public void setMultiSelectable(boolean b){
		multiSelectable = b;
	}
	
	public boolean isMultiSelectable(){
		return multiSelectable;
	}

	public void refreshColumns() {
		thead.getChildren().clear();
		thead.setRendered(false);
		JSContainer tr = new JSContainer("tr").addClass("slds-text-title_caps");
		thead.addChild(tr);
		for (int i = 0; i < tableColumnModel.getColumnCount(); i++) {
			TableColumn col = tableColumnModel.getColumn(i);
			tr.addChild(col);
		}
	}

	public Table setBordered(boolean b) {
		setFeature("slds-table_bordered", b);
		return this;
	}

	public Table setFixedLayout(boolean b) {
		setFeature("slds-table_fixed-layout", b);
		return this;
	}

	public Table setResizableCol(boolean b) {
		setFeature("slds-table_resizable-cols", b);
		return this;
	}

	protected void setFeature(String cls, boolean b) {
		if (b) {
			addClass(cls);
		} else {
			removeClass(cls);
		}
	}

	public Table setColBordered(boolean b) {
		setFeature("slds-table_col-bordered", b);
		return this;
	}

	public Table setCellBuffered(boolean b) {
		setFeature("slds-table_cell-buffer", b);
		return this;
	}

	public Table setHasTopMagnet(boolean b) {
		setFeature("slds-has-top-magnet", b);
		return this;
	}

	public Table setHasNoRowHover(boolean b) {
		setFeature("slds-no-row-hover", b);
		return this;
	}

	public Table setStriped(boolean b) {
		setFeature("slds-table_striped", b);
		return this;
	}

}
