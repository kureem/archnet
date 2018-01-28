package framework.lightning.table;

import framework.JSContainer;
import jsweet.dom.Event;

public interface TableRowsSelectionListener {
	
	
	public void onSelectRow(JSContainer source, Event event,Table table, double firstIndex, double lastIndex);

}
