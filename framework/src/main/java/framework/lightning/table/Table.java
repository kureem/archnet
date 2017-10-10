package framework.lightning.table;

import framework.JSContainer;
import framework.Renderable;

public class Table extends JSContainer {

	private JSContainer thead = new JSContainer("thead");

	
	private JSContainer tbody = new JSContainer("tbody");

	private TableModel model;

	private TableCellRenderer tableCellRenderer = new DefaultTableCellRenderer();

	private TableColumnModel tableColumnModel = new DefaultTableColumnModel();

	public Table(String name) {
		super(name, "table");
		addClass("slds-table");
		addChild(thead);
		addChild(tbody);
		setBordered(true);
	}

	public TableModel getModel() {
		return model;
	}

	public void setModel(TableModel model) {
		this.model = model;
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

	public void refreshData() {
		tbody.getChildren().clear();
		tbody.setRendered(false);
		int rows = model.getRowCount();
		int cols = model.getColumnCount();
		for (int row = 0; row < rows; row++) {

			JSContainer tr = new JSContainer("tr");
			tbody.addChild(tr.addClass("slds-hint-parent"));

			for (int col = 0; col < cols; col++) {
				Object value = model.getValueAt(row, col);
				Renderable cell = tableCellRenderer.getComponent(this, value, row, col);
				JSContainer td = new JSContainer("td").addClass("slds-cell-wrap").setAttribute("role", "gridcell");
				tr.addChild(td);
				td.addChild((JSContainer) cell);

			}
		}
	}
	
	public JSContainer getRow(int index){
		return tbody.getChildren().get(index);
	}
	
	public JSContainer getBody(){
		return tbody;
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
