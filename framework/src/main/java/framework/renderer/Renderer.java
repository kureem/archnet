package framework.renderer;

import framework.Renderable;
import jsweet.dom.HTMLElement;

public interface Renderer<T extends Renderable> {
	
	public void doRender(T c, HTMLElement root);

}
 