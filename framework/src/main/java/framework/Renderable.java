package framework;

import java.util.List;
import java.util.Map;
import java.util.Set;

import framework.JSContainer.JSCommand;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;

public interface Renderable {

	String[] getChangedAttributes();

	String[] getChangedStyles();

	public HTMLElement getNative();

	List<Renderer<? extends Renderable>> getRenderers();

	Renderable addRenderer(Renderer<? extends Renderable> renderer);

	String getId();

	String uid();

	Renderable addClass(String styleClass);

	Renderable removeClass(String cls);

	Renderable addChild(JSContainer container);

	Renderable addChildAt(int index, JSContainer child);

	Renderable setVisible(boolean b);

	Renderable addEventListener(EventListener listener, String type);

	String getTag();

	Renderable setTag(String tag);

	Renderable setStyle(String key, String value);

	String getStyle(String key);

	Renderable setAttribute(String key, String value);

	void exec(String name, jsweet.lang.Object parameter);

	void exec(String name, String variable);

	void exec(String name);

	Iterable<JSCommand> getCommands();

	String getAttribute(String key);

	String getName();

	void setName(String name);

	Renderable getParent();

	List<JSContainer> getChildren();

	Set<String> getStyleNames();

	Set<String> getAttributeNames();

	String getHtml();

	Renderable setHtml(String h);

	boolean isRendered();

	Renderable setRendered(boolean b);

	Map<String, List<EventListener>> getListeners();

	void render();
	
	void render(HTMLElement root);

	Object getData();

	void setData(Object data);


	/**
	 * 
	 * @param id
	 * @return
	 */
	Renderable getAncestorById(String id);

	Renderable getAncestorByName(String name);

	Renderable getRoot();


}