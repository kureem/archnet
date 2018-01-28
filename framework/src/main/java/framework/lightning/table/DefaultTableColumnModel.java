package framework.lightning.table;

import jsweet.lang.Array;

public class DefaultTableColumnModel implements TableColumnModel {

	private Array<TableColumn> columns = new Array<>();


	public DefaultTableColumnModel() {
		super();
	}


	@Override
	public void addColumn(TableColumn aColumn) {
		columns.push(aColumn);

	}

	

	@Override
	public double getColumnCount() {
		return columns.length;
	}

	@Override
	public double getColumnIndex(Object columnIdentifier) {

		for (double i = 0; i < columns.length; i++) {
			if (columns.$get(i).getIdentifier().equals(columnIdentifier)) {
				return i;
			}
		}
		return -1;
	}

	@Override
	public TableColumn getColumn(int columnIndex) {
		return columns.$get(columnIndex);
	}

}
