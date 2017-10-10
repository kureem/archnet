
package framework.lightning.table;

import framework.Renderable;

public interface TableCellRenderer {

	Renderable getComponent(Table table, Object value, int row, int column);
}
