package framework.renderer;

import framework.Renderable;
import jsweet.dom.HTMLElement;

public interface ExtendedRenderer<T extends Renderable> extends Renderer<T> {

	public void postRender(T c, HTMLElement root); 
}
