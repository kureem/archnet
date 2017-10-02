package framework.builder;

import static jsweet.dom.Globals.window;
import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class SelectComponentEvent implements EventListener {

	private Selector selector = null;

	public SelectComponentEvent(Selector selector) {
		super();
		this.selector = selector;
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		evt.stopPropagation();
		selector.select(source);
	}

}
