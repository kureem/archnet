package framework.interactions;


import static def.jquery.Globals.$;

import def.jqueryui.JQuery;
import def.jqueryui.jqueryui.DraggableOptions;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;

public class DraggableRenderer implements Renderer<Draggable>{

	@Override
	public void doRender(Draggable c, HTMLElement root) {
		
		def.jqueryui.JQuery jq = (JQuery)$("#" + c.getId());
		DraggableOptions opts = c.getDraggableOptions();
		if(opts == null)
			jq.draggable();
		else
			jq.draggable(opts);
		 
		
		
	}

}
