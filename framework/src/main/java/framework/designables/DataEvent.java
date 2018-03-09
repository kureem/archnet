package framework.designables;

import jsweet.dom.Event;
import jsweet.lang.Object;

public class DataEvent extends Event{


	public jsweet.lang.Object data;
	
	

	public DataEvent(String type, Object data) {
		super(type);
		this.data = data;
	}

}
