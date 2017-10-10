package framework.lightning.table;


public interface TableModel {

    public int getRowCount();

    public int getColumnCount();

    public String getColumnName(int columnIndex);

    public String getColumnType(int columnIndex);

    public boolean isCellEditable(int rowIndex, int columnIndex);
 
    public Object getValueAt(int rowIndex, int columnIndex);

    public void setValueAt(Object aValue, int rowIndex, int columnIndex);

}
