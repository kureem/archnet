package framework.lightning.table;

public interface TableDataModel {

	public int getSize();

	public Object getValueAt(int col, int row);

	public void setValueAt(int col, int row, Object value);

	public void deleteRow(int row);

	public void addRow();

	public void addRowAt(int index);

	public void selectRow(int index);

}
