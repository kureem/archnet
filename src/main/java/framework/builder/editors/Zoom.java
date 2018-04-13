package framework.builder.editors;

import static jsweet.lang.Globals.parseInt;

import framework.EventListener;
import framework.JSContainer;
import framework.JSInput;
import jsweet.dom.Event;

public class Zoom extends JSContainer {

	private JSInput value = new JSInput("value");
	
	public Zoom(String name, VisualEditor editor) {
		super(name, "div");
		addClass("zoom");
		
		value.setType("number").setAttribute("min", "1");
		value.setValue("100");
		addChild(value);
		value.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				String svalue = value.getValue();
				double zoom = parseInt(svalue);
				editor.zoom(zoom);
			}
		},"change" );
		
	}
	
	
	

}
