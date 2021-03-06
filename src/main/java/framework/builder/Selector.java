package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.editors.Visitor;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import jsweet.dom.Event;

public class Selector extends JSContainer  implements EventListener{

	private Designable selected = null;
	
	private VisualEditor visualEditor;

	public Selector() {
		super("selector", "div");
		addClass("designer-selector");
		addEventListener(this, "click");
	}
	
	public void setVisualEditor(VisualEditor editor){
		this.visualEditor = editor;
	}

	public Designable getSelected() {
		return selected;
	}

	
	public void select(Designable component) {
		if(selected == null || !component.equals(selected)){
			try {
				this.selected = component;
			/*	def.jqueryui.JQuery jqSelector = (JQuery) $(getNative());
				def.jqueryui.JQuery jqComponent = (JQuery) $(component.getNative());

				jqSelector.width(jqComponent.outerWidth());
				jqSelector.height(jqComponent.outerHeight());

				JQueryPositionOptions options = new JQueryPositionOptions() {
				};

				options.my = "top left";
				options.at = "top left";

				options.of = jqComponent;
				jqSelector.position(options);
*/
				 visualEditor.getStructure().select(component);

			} catch (Exception e) {
				// e.printStackTrace();
			}
			
			visualEditor.visit(new Visitor() {
				
				@Override
				public void doVisit(Designable host) {
					//host.removeClass("item-selelected");
					host.setAttribute("dssel", "false");
				}
			});
			component.setAttribute("dssel", "true");
			//component.addClass("item-selected");
			visualEditor.selectItem(component);
		}
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		source.setStyle("width", "0px");
		source.setStyle("height", "0px");
		selected = null;
		
	}

}
