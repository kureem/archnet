package framework.interactions;

import static def.jquery.Globals.$;

import def.jqueryui.JQuery;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;

public class DroppableRenderer implements Renderer<Droppable>{

	@Override
	public void doRender(Droppable c, HTMLElement root) {
		def.jqueryui.JQuery jq = (JQuery)$("#" + c.getId());
		def.jqueryui.jqueryui.DroppableOptions opts = c.getDroppableOptions();
		if(opts == null)
			jq.droppable();
		else
			jq.droppable(opts);
		
	}

}
