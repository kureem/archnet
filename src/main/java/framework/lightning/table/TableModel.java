package framework.lightning.table;

public interface TableModel {

	public double getRowCount();

	public boolean isCellEditable(int rowIndex, int columnIndex);

	public Object getValueAt(int rowIndex, int columnIndex);

	public void setValueAt(Object aValue, int rowIndex, int columnIndex);

}
