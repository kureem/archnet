package framework.builder.marshalling;

import jsweet.lang.Array;
import jsweet.lang.Object;

public class Component {
	
	public String impl;
	
	public Object parameters = new Object();
	
	public Array<Component> children = new Array<>();
	
	public Array<BuilderEvent> events = new Array<BuilderEvent>();
	
	public Object styles = new Object();
	
	

}
