package framework.builder;

import static def.jquery.Globals.$;

import def.jqueryui.JQuery;
import def.jqueryui.jqueryui.JQueryPositionOptions;
import framework.EventListener;
import framework.JSContainer;
import framework.design.Designable;
import jsweet.dom.Event;

public class Selector extends JSContainer  implements EventListener{

	private JSContainer selected = null;
	
	private VisualEditor visualEditor;

	public Selector() {
		super("selector", "div");
		addClass("designer-selector");
		addEventListener(this, "click");
	}
	
	public void setVisualEditor(VisualEditor editor){
		this.visualEditor = editor;
	}

	public JSContainer getSelected() {
		return selected;
	}

	public void select(Designable component) {
		try {
			def.jqueryui.JQuery jqSelector = (JQuery) $(getNative());
			def.jqueryui.JQuery jqComponent = (JQuery) $(component.getNative());
			
			jqSelector.width(jqComponent.outerWidth());
			jqSelector.height(jqComponent.outerHeight());
			
			JQueryPositionOptions options = new JQueryPositionOptions() {
			};

			options.my = "top left";
			options.at = "top left";

			
			
			options.of = jqComponent; 
			jqSelector.position(options);
			
			
			
			visualEditor.selectItem(component);
			
		} catch (Exception e) {
			//e.printStackTrace();
		}
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		source.setStyle("width", "0px");
		source.setStyle("height", "0px");
		
	}

}
