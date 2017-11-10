package framework;

import static jsweet.dom.Globals.document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import def.jqueryui.jqueryui.DroppableOptions;
import framework.core.Global;
import framework.interactions.Droppable;
import framework.renderer.ContainerRenderer;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;
import jsweet.lang.Optional;

/**
 * 
 * @author Kurreem
 *
 */
public class JSContainer implements Renderable, Droppable {

	/**
	 * 
	 */

	private DroppableOptions droppableOptions = null;

	private final static Renderer<? extends JSContainer> DEFAULT_RENDERER = new ContainerRenderer();

	@Optional
	private Map<String, List<EventListener>> listeners = new HashMap<>();

	@Optional
	private String id;

	@Optional
	private Object data;

	@Optional
	private Map<String, String> attributes = new HashMap<>();

	@Optional
	private Map<String, String> styles = new HashMap<>();

	@Optional
	private JSContainer parent;

	@Optional
	private List<JSContainer> children = new LinkedList<>();

	@Optional
	private String html = "";

	@Optional
	private String tag = "";

	@Optional
	private String name = "";

	@Optional
	private boolean rendered = false;

	@Optional
	private List<Renderer<? extends Renderable>> renderers = new ArrayList<>();

	@Optional
	private List<String> changedAttributes = new LinkedList<>();

	@Optional
	private List<String> changedStyles = new LinkedList<>();

	//@Optional
//	private List<JSCommand> commands = new LinkedList<>();

	public JSContainer(String name, String tag) {
		super();
		this.tag = tag;
		this.name = name;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getChangedAttributes()
	 */
	@Override
	public String[] getChangedAttributes() {
		return changedAttributes.toArray(new String[changedAttributes.size()]);
	}

	public HTMLElement getNative() {
		HTMLElement elem = document.getElementById(getId());
		if (elem != null) {
			return elem;
		} else {
			throw new RuntimeException(
					"The component " + getId() + " has not been rendered yet. Cannot retrieve native dom");
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getChangedStyles()
	 */
	@Override
	public String[] getChangedStyles() {
		return changedStyles.toArray(new String[changedStyles.size()]);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#flush(java.lang.String)
	 */
	public void flush(String s) {
		if (s.equals("a28n12l10")) {
			changedAttributes.clear();
			changedStyles.clear();
		//	commands.clear();
		}
	}

	public JSContainer(String tag) {
		super();
		this.tag = tag;
		// addClass(this.getClass().getSimpleName());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getRenderers()
	 */
	@Override
	public List<Renderer<? extends Renderable>> getRenderers() {
		return renderers;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addRenderer(framework.renderer.Renderer)
	 */
	@Override
	public JSContainer addRenderer(Renderer<? extends Renderable> renderer) {
		if (!this.renderers.contains(renderer)) {
			renderers.add(renderer);
		}
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getId()
	 */
	@Override
	public String getId() {
		if (id == null) {
			id = uid();
		}

		return id;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#uid()
	 */
	@Override
	public String uid() {

		Global.idCount++;
		return Global.idCount + "";
		// String s= System.currentTimeMillis() + "_" + Math.random();
		// s = s.replace('.', '_');
		// return s;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addClass(java.lang.String)
	 */
	@Override
	public JSContainer addClass(String styleClass) {
		String styles = getAttribute("class");
		if (styles == null) {
			styles = "";
		}
		String[] aStyles = styles.split(" ");

		boolean add = true;
		for (String style : aStyles) {
			if (style.trim().equals(styleClass)) {
				add = false;
			}
		}
		if (add)
			setAttribute("class", styles.trim() + " " + styleClass);

		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#removeClass(java.lang.String)
	 */
	@Override
	public JSContainer removeClass(String cls) {
		String cl = getAttribute("class");
		if (cl != null && cl.length() > 0) {
			cl = cl.replace(cls, "");

			setAttribute("class", cl);
		}
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addChild(framework.JSContainer)
	 */
	@Override
	public JSContainer addChild(JSContainer container) {
		container.parent = this;
		children.add(container);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addChildAt(int, framework.JSContainer)
	 */
	@Override
	public JSContainer addChildAt(int index, JSContainer child) {
		child.parent = this;
		children.add(index, child);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setVisible(boolean)
	 */
	@Override
	public JSContainer setVisible(boolean b) {
		if (!b) {
			setStyle("display", "none");
		} else {
			styles.remove("display");
			setRendered(false);
		}
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addEventListener(framework.EventListener,
	 * java.lang.String)
	 */
	@Override
	public JSContainer addEventListener(EventListener listener, String type) {
		if (!listeners.containsKey(type)) {
			listeners.put(type, new ArrayList<>());
		}

		//if (!listeners.get(type).contains(listener)) {
			listeners.get(type).add(listener);
		//}
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getTag()
	 */
	@Override
	public String getTag() {
		return tag;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setTag(java.lang.String)
	 */
	@Override
	public JSContainer setTag(String tag) {
		this.tag = tag;
		setRendered(false);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setStyle(java.lang.String, java.lang.String)
	 */
	@Override
	public JSContainer setStyle(String key, String value) {
		changedStyles.add(key);
		styles.put(key, value);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getStyle(java.lang.String)
	 */
	@Override
	public String getStyle(String key) {
		return styles.get(key);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setAttribute(java.lang.String,
	 * java.lang.String)
	 */
	@Override
	public JSContainer setAttribute(String key, String value) {
		changedAttributes.add(key);
		attributes.put(key, value);
		
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#exec(java.lang.String, jsweet.lang.Object)
	 
	@Override
	public void exec(String name, jsweet.lang.Object parameter) {
		commands.add(new JSCommand(name, JSON.stringify(parameter)));
	}

	
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#exec(java.lang.String, java.lang.String)
	 
	@Override
	public void exec(String name, String variable) {
		commands.add(new JSCommand(name, variable));
	}

*//*	
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#exec(java.lang.String)
	 
	@Override
	public void exec(String name) {
		exec(name, (String) null);
	}
*/
	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getCommands()
	 
	@Override
	public Iterable<JSCommand> getCommands() {
		return commands;
	}
*/
	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAttribute(java.lang.String)
	 */
	@Override
	public String getAttribute(String key) {
		return attributes.get(key);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getName()
	 */
	@Override
	public String getName() {
		return name;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setName(java.lang.String)
	 */
	@Override
	public void setName(String name) {
		this.name = name;
		setAttribute("name", name);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getParent()
	 */
	@Override
	public JSContainer getParent() {
		return parent;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getChildren()
	 */
	@Override
	public List<JSContainer> getChildren() {
		return children;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getStyleNames()
	 */
	@Override
	public Set<String> getStyleNames() {
		return styles.keySet();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAttributeNames()
	 */
	@Override
	public Set<String> getAttributeNames() {
		return attributes.keySet();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getHtml()
	 */
	@Override
	public String getHtml() {
		return html;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setHtml(java.lang.String)
	 */
	@Override
	public JSContainer setHtml(String h) {
		this.html = h;
		setRendered(false);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#isRendered()
	 */
	@Override
	public boolean isRendered() {
		return rendered;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setRendered(boolean)
	 */
	@Override
	public JSContainer setRendered(boolean b) {
		this.rendered = b;
		if (!b) {
			for (JSContainer child : children) {
				child.setRendered(b);
			}
		}

		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getListeners()
	 */
	@Override
	public Map<String, List<EventListener>> getListeners() {
		return listeners;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#render()
	 */
	@Override
	public void render() {
		if (parent == null)
			render(null);
		else
			render(document.getElementById(parent.getId()));
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public void render(HTMLElement parent) {
		if (renderers.isEmpty()) {
			renderers.add(DEFAULT_RENDERER);
		}

		if (!renderers.contains(DEFAULT_RENDERER)) {
			renderers.add(0, DEFAULT_RENDERER);
		}
		for (Renderer renderer : renderers)
			renderer.doRender(this, parent);

		for (JSContainer child : getChildren()) {
			child.render();
		}
		rendered = true;

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getData()
	 */
	@Override
	public Object getData() {
		return data;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setData(java.lang.Object)
	 */
	@Override
	public void setData(Object data) {
		this.data = data;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAncestorOfType(java.lang.Class)
	 */
	@SuppressWarnings("unchecked")
	public <T extends JSContainer> T getAncestorWithClass(String cls) {

		if (parent == null) {
			return null;
		}
		String clsss = parent.getAttribute("class");
		if(clsss != null){
			for (String s : parent.getAttribute("class").split(" ")) {
				if (s.trim().equals(cls))
					return (T) parent;
			}
		}

		return ((JSContainer) parent).getAncestorWithClass(cls);

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAncestorById(java.lang.String)
	 */
	@Override
	public JSContainer getAncestorById(String id) {
		if (getId().equals(id))
			return (JSContainer) this;

		if (parent == null) {
			return null;
		}

		return parent.getAncestorById(id);

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAncestorByName(java.lang.String)
	 */
	@Override
	public JSContainer getAncestorByName(String name) {
		if (getName().equals(name))
			return this;

		if (parent == null) {
			return null;
		}

		return parent.getAncestorByName(name);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getRoot()
	 */
	@Override
	public JSContainer getRoot() {
		if (parent == null) {
			return this;
		} else {
			return parent.getRoot();
		}
	}

	
	@Override
	public DroppableOptions getDroppableOptions() {
		return droppableOptions;
	}

	public void setDroppableOptions(DroppableOptions options) {
		this.droppableOptions = options;
	}

	/*
	 * @Override public List<Parameter> getParameters() {
	 * 
	 * }
	 */

	// protected Parameter createParameter

}
