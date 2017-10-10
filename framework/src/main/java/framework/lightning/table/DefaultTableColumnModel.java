package framework.lightning.table;

import java.util.LinkedList;
import java.util.List;

public class DefaultTableColumnModel implements TableColumnModel {

	private List<TableColumn> columns = new LinkedList<>();


	public DefaultTableColumnModel() {
		super();
	}


	@Override
	public void addColumn(TableColumn aColumn) {
		columns.add(aColumn);

	}

	@Override
	public void removeColumn(TableColumn column) {
		columns.remove(column);
	}

	@Override
	public int getColumnCount() {
		return columns.size();
	}

	@Override
	public int getColumnIndex(Object columnIdentifier) {

		for (int i = 0; i < columns.size(); i++) {
			if (columns.get(i).getIdentifier().equals(columnIdentifier)) {
				return i;
			}
		}
		// TODO Auto-generated method stub
		return -1;
	}

	@Override
	public TableColumn getColumn(int columnIndex) {
		return columns.get(columnIndex);
	}

}
