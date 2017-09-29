package framework.builder;

import static jsweet.lang.Globals.eval;

import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class BuilderEventListener implements EventListener {

	private String jsSource;

	public BuilderEventListener(String jsSource) {
		super();
		this.jsSource = jsSource;
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		if (jsSource != null) {
			eval(jsSource);
		}
	}

}
