package framework.lightning.table;

public interface TableColumnModel {

	public void addColumn(TableColumn aColumn);

	public void removeColumn(TableColumn column);

	public int getColumnCount();

	public int getColumnIndex(Object columnIdentifier);

	public TableColumn getColumn(int columnIndex);

}
