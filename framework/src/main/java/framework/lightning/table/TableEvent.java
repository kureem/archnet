package framework.lightning.table;

import jsweet.dom.Event;

public class TableEvent extends Event {
	
	public double firstIndex;
	
	public double lastIndex;
	
	public Event srcEvent;
	
	
	public TableEvent (String type,Event evt,double first, double last){
		super(type);
		srcEvent = evt;
		firstIndex = first;
		lastIndex = last;
	}
	
	//public void onSelectRow(JSContainer source, Event event,Table table, double firstIndex, double lastIndex);

}
