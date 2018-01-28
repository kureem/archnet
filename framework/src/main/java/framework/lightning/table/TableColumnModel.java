package framework.lightning.table;

public interface TableColumnModel {

	public void addColumn(TableColumn aColumn);


	public double getColumnCount();

	public double getColumnIndex(Object columnIdentifier);

	public TableColumn getColumn(int columnIndex);

}
