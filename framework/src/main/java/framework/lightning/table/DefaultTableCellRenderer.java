package framework.lightning.table;

import framework.JSContainer;
import framework.Renderable;

public class DefaultTableCellRenderer implements TableCellRenderer{

	@Override
	public Renderable getComponent(Table table, Object value, int row, int column) {
		JSContainer truncate = new JSContainer("div").addClass("slds-truncate");
		String s = "";
		if(value != null){
			s = value.toString();
		}
		
		truncate.setHtml(s).setAttribute("title", s);
		return truncate;
	}

}
