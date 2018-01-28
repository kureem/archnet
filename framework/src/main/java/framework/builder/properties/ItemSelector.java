package framework.builder.properties;

import framework.JSContainer;
import framework.Renderable;
import framework.lightning.IconButton;
import framework.lightning.Modal;
import framework.lightning.SvgIcon;
import framework.lightning.table.DefaultTableCellRenderer;
import framework.lightning.table.DefaultTableColumnModel;
import framework.lightning.table.Table;
import framework.lightning.table.TableCellRenderer;
import framework.lightning.table.TableColumn;
import framework.lightning.table.TableModel;
import framework.lightning.table.TableRowsSelectionListener;
import jsweet.dom.Event;
import jsweet.lang.Array;

public abstract class ItemSelector<T> extends Modal implements TableCellRenderer {

	private Table dataTable = new Table("fields");

	private DefaultTableCellRenderer delegate = new DefaultTableCellRenderer();

	private DefaultTableColumnModel tableColumModel = new DefaultTableColumnModel();

	private Array<T> dataList;

	public ItemSelector(String name) {
		super(name, "div");
		addClass("data-item");

		getContent().addChild(this.dataTable);
	}

	public void addOnItemSeletedListener(ItemSelectedListener<T> l) {
		dataTable.addRowsSelectionListener(new TableRowsSelectionListener() {

			@Override
			public void onSelectRow(JSContainer source, Event event, Table table, double firstIndex, double lastIndex) {

				T field = dataList.$get(firstIndex);
				l.onItemSelected(field);
			}
		});
	}

	public void addColumn(TableColumn column) {
		tableColumModel.addColumn(column);
	}

	public void setDataList(Array<T> dataList) {
		this.dataList = dataList;
		dataTable.setTableCellRenderer(this);
		dataTable.setTableColumnModel(tableColumModel);
		dataTable.refreshColumns();

		this.dataTable.setModel(new TableModel() {

			@Override
			public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
			}

			@Override
			public boolean isCellEditable(int rowIndex, int columnIndex) {
				return false;
			}

			@Override
			public Object getValueAt(int rowIndex, int columnIndex) {
				return null;
			}

			@Override
			public double getRowCount() {
				return dataList.length;
			}

		});
		dataTable.refreshData();

	}

	public abstract boolean isActionColumn(Table table, Object value, int row, int column);

	@Override
	public Renderable getComponent(Table table, Object value, int row, int column) {
		if (isActionColumn(table, value, row, column)) {
			IconButton btn = new IconButton("sdfs");
			btn.setBorderFilled(true);
			btn.addClass("slds-button_icon-x-small");
			SvgIcon icon = new SvgIcon("edit");
			icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
			icon.setType("utility");
			icon.setIconName("right");
			btn.setIcon(icon);

			return btn;

		} else {
			return delegate.getComponent(table, value, row, column);
		}
	}

}
