package framework.lightning.table;

import framework.JSContainer;
import framework.Renderable;
import framework.lightning.CheckBox;

public class DefaultTableCellRenderer implements TableCellRenderer{

	@Override 
	public Renderable getComponent(Table table, Object value, int row, int column) {
		
		if(value != null && value instanceof Boolean){
			CheckBox ch = new CheckBox("");
			ch.setValue((Boolean)value);
			return ch;
		}
		
		JSContainer truncate = new JSContainer("div").addClass("slds-truncate");
		String s = "";
		if(value != null){
			s = value.toString();
		}
		
		truncate.setHtml(s).setAttribute("title", s);
		return truncate;
	}

}
