/*
 * Copyright 2002-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package framework;

import static def.dom.Globals.console;
import static jsweet.dom.Globals.document;
import static jsweet.lang.Globals.parseInt;

import def.jqueryui.jqueryui.DroppableOptions;
import framework.builder.editors.DesignableEditor;
import framework.core.Global;
import framework.design.Designable;
import framework.interactions.Droppable;
import framework.renderer.ContainerRenderer;
import framework.renderer.ExtendedRenderer;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;
import jsweet.lang.Array;

/**
 * 
 * @author Kurreem
 *
 */
@SuppressWarnings("unchecked")
public class JSContainer implements Renderable, Droppable {

	
	private jsweet.lang.Object d = new jsweet.lang.Object();
	/**
	 * 
	 */
	
	
	public Renderable find(String path){
		String[] sectins = path.split("/");
		Renderable current = this;
		if(path.startsWith("/")){
			current =  ((DesignableEditor)getAncestorWithClass("visual-editor")).getRootItem();
		}
		for(String s : sectins){
			if(s.equals("..")){
				while(true){
					current = current.getParent();
					if(current == null)
						break;
					if(current.getAttribute("identifier") != null && current.getAttribute("identifier").length() > 0){
						break;
					}
				}
				
				if(current == null){
					console.error("Cannot find root component for path " + path);
					return null;
				}
			}else if(s.equals(".")){
				//do nothing
			}else if(s.equals("")){
				//do nothing
			}else{
				
				if(s.endsWith("]")){
					if(s.contains("[")){
						String[] ss = s.split("[");
						String index = ss[1];
						String onlyName =ss[0];
						if(index.contains("]")){
							
							index = index.replace("]", "");
							
							double iIndex = parseInt(index);
							current =  findDesignable((Designable)current,onlyName,iIndex);
							if(current == null){
								console.error("error parsing path at ..." + s + "..., Cannot find component '"+s+"' while searching in path:" + path + ". Please check path");
								return null;
							}
							
						}else{
							console.error("error parsing path at ..." + s + "...");
						}
					}else{
						console.error("error parsing path at ..." + s + "...");
					}
				}else{
					current =  findDesignable((Designable)current,s,0);
					if(current == null){
						console.error( "error parsing path at ..." + s + "...,Cannot find component '"+s+"' while searching in path:" + path + ". Please check path");
						return null;
					}
				}
			}
		}
		
		return current;
		//JSContainer root = getRoot();
	}
	
	private Renderable findDesignable(Designable des, String name, double index){
		Array<Designable> candidates = new Array<Designable>();
		for(Designable d : des.getDesignables()){
			if(d.getName().equals(name)){
				candidates.push(d);
			}
		}
		if(index < candidates.length){
			return candidates.$get(index);
		}else{
			console.error("Cannot find child item with name " + name + " and index " + index + " total number of children with name " + name + " is " + candidates.length);
		} 
		return null;
	}
	
	public Renderable getChild(String name){
		for(JSContainer child : getChildren()){
			if(child.getName().equals(name)){
				return child;
			}
		}
		return null;
	}
	
	

	//private DroppableOptions droppableOptions = null;

//	private final static Renderer<? extends JSContainer> DEFAULT_RENDERER = new ContainerRenderer();

	//@Optional
	//private Map<String, List<EventListener>> listeners = new HashMap<>();

//	@Optional
	//private String id;

	//@Optional
	//private Object data;

	//@Optional
	//private Map<String, String> attributes = new HashMap<>();

	//@Optional
	//private Map<String, String> styles = new HashMap<>();

	//@Optional
	//private JSContainer parent;

	//@Optional
	//private List<JSContainer> children = new LinkedList<>();

	//@Optional
	//private String html = "";

	//@Optional
	//private String tag = "";

	//@Optional
	//private String name = "";

	//@Optional
	//private boolean rendered = false;

	//@Optional
	//private List<Renderer<? extends Renderable>> renderers = new ArrayList<>();

	//@Optional
	//private List<String> changedAttributes = new LinkedList<>();

	//@Optional
	//private List<String> changedStyles = new LinkedList<>();

	//@Optional
//	private List<JSCommand> commands = new LinkedList<>();

	

	public Renderable removeChild(Renderable r){
		Array<JSContainer> children = getChildren();
		Array<JSContainer> tmp = new Array<JSContainer>();
		for(JSContainer c : children){
			if(!c.equals(r)){
				tmp.push(c);
			}
		}
		d.$set("children", tmp);
		return this;
	}
	
	public Renderable clearChildren(){
		d.$set("children", new Array<>());
		return this;
	}
	
	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getChangedAttributes()
	 */
	
	@Override
	public Array<String> getChangedAttributes() {
		if(d.$get("changedAttributes") != null){
			Array<String> changed = (Array<String>)d.$get("changedAttributes");
			return changed;
			//return changed.sort();
		}else{
			d.$set("changedAttributes", new Array<>());
			return getChangedAttributes();
		}
		//return changedAttributes.toArray(new String[changedAttributes.size()]);
		//return new String[]{};
	}

	public HTMLElement getNative() {
		HTMLElement elem = document.getElementById(getId());
		if (elem != null) {
			return elem;
		} else {
			//throw new java.lang.RuntimeException(
				//	"The component " + getId() + " has not been rendered yet. Cannot retrieve native dom");
			return null;
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getChangedStyles()
	 */
	@Override
	public Array<String> getChangedStyles() {
		//return changedStyles.toArray(new String[changedStyles.size()]);
		if(d.$get("changedStyles") != null){
			Array<String> changed = (Array<String>)d.$get("changedStyles");
			return changed;
			//return changed.sort();
		}else{
			d.$set("changedStyles", new Array<>());
			return getChangedStyles();
		}
		//return changedAttributes.toArray(new String[changedAttributes.size()]);
		//return new Array<String>();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#flush(java.lang.String)
	 */
	public void flush(String s) {
		if (s.equals("a28n12l10")) {
			d.$delete("changedAttributes");
			d.$delete("changedStyles");
			//changedAttributes.clear();
			//changedStyles.clear();
		//	commands.clear();
		}
	}

	public JSContainer(String tag) {
		super();
		//this.tag = tag;
		// addClass(this.getClass().getSimpleName());
		setTag(tag);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getRenderers()
	 */
	@Override
	public Array<Renderer<? extends Renderable>> getRenderers() {
		
		
		Array<Renderer<? extends Renderable>> arr =  (Array<Renderer<? extends Renderable>>)d.$get("renderers");
		if(arr != null){
			return arr;
		}else{
			return new Array<Renderer<? extends Renderable>>();
		}
		/*List<Renderer<? extends Renderable>> l = new ArrayList<Renderer<? extends Renderable>>();
		if(arr != null){
			for(Renderer r : arr){
				l.add(r);
			}
		}
		return l;*/
		//return renderers;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addRenderer(framework.renderer.Renderer)
	 */
	@Override
	public JSContainer addRenderer(Renderer<? extends Renderable> renderer) {
		Array<Renderer<? extends Renderable>> arr =  (Array<Renderer<? extends Renderable>>)d.$get("renderers");
		if(arr == null){
			arr = new Array<Renderer<? extends Renderable>>();
			d.$set("renderers",arr);
		}
		arr.push(renderer);
		d.$set("renderers", arr);
		/*if (!this.renderers.contains(renderer)) {
			renderers.add(renderer);
		}*/
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getId()
	 */
	@Override
	public String getId() {
		String id = (String)d.$get("id");
		if (id == null) {
			id = uid();
			d.$set("id", id);
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
		container.d.$set("parent", this);
		//container.parent = this;
		getChildren().push(container);
		//children.add(container);
		return this;
	}
	
	

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#addChildAt(int, framework.JSContainer)
	 */
	@Override
	public JSContainer addChildAt(double index, JSContainer child) {
		//child.parent = this;
		child.d.$set("parent", this);
		Array<JSContainer> children = new Array<JSContainer>();
		double i = 0;
		for(JSContainer c : getChildren()){
			if(i == index){
				children.push(c);
			}
			children.push(c);
		}
		
		d.$set("children", children);
		//children.add(index, child);
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
			addClass("slds-hidden");
		} else {
			removeClass("slds-hidden");
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
		jsweet.lang.Object listeners =  getListeners();
		//o.ha
		if(listeners == null){
			listeners = new jsweet.lang.Object();
			d.$set("listeners", listeners);
		}
		if (!listeners.hasOwnProperty(type)) {
			listeners.$set(type, new Array<>());
		}

		 ((Array<EventListener>)listeners.$get(type)).push(listener);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getTag()
	 */
	@Override
	public String getTag() {
		return getString("tag");
		//return tag;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setTag(java.lang.String)
	 */
	@Override
	public JSContainer setTag(String tag) {
		setString("tag", tag);
		//this.tag = tag;
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
		getChangedStyles().push(key);
		//changedStyles.add(key);
		if(value != null){
			if(d.$get("styles") == null){
				d.$set("styles", new jsweet.lang.Object());
			}
			((jsweet.lang.Object)d.$get("styles")).$set(key, value);
		}
		else{
			if(d.$get("styles") != null){
				((jsweet.lang.Object)d.$get("styles")).$delete(key);
				setRendered(false);
			}
		}
		//styles.put(key, value);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getStyle(java.lang.String)
	 */
	@Override
	public String getStyle(String key) {
		if(d.$get("styles") != null){
		
			return (String)((jsweet.lang.Object)d.$get("styles")).$get(key);
		}
		return null;
		//return styles.get(key);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setAttribute(java.lang.String,
	 * java.lang.String)
	 */
	@Override
	public JSContainer setAttribute(String key, String value) {
		getChangedAttributes().push(key);
		
		
		if(value != null){
			if(d.$get("attributes") == null){
				d.$set("attributes", new jsweet.lang.Object());
			}
			((jsweet.lang.Object)d.$get("attributes")).$set(key, value);
		}
		else{
			if(d.$get("attributes") != null)
				((jsweet.lang.Object)d.$get("attributes")).$delete(key);
		}
		//styles.put(key, value);
		return this;
		//attributes.put(key, value);
		
		//return this;
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
		//return attributes.get(key);
		if(d.$get("attributes") != null){
			
			return (String)((jsweet.lang.Object)d.$get("attributes")).$get(key);
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getName()
	 */
	@Override
	public String getName() {
		String name = getAttribute("name");
		if(name == null){
			return "";
		}
		
		return name;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setName(java.lang.String)
	 */
	@Override
	public void setName(String name) {
		//this.name = name;
		//setAttribute("name", name);
		setAttribute("name", name);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getParent()
	 */
	@Override
	public JSContainer getParent() {
		return (JSContainer)d.$get("parent");
		//return parent;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getChildren()
	 */
	@Override
	public Array<JSContainer> getChildren() {
		
		
		Array<JSContainer> children = (Array<JSContainer>)d.$get("children");
		if(children != null){
			return children;
		}else{
			d.$set("children", new Array<>());
			return getChildren();
		}
		//return children;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getStyleNames()
	 */
	@Override
	public String[] getStyleNames() {
		jsweet.lang.Object styles = (jsweet.lang.Object)d.$get("styles");
		if(styles != null){
			return jsweet.lang.Object.keys(styles);
		}
		return new String[]{};
		//return styles.keySet();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAttributeNames()
	 */
	@Override
	public String[] getAttributeNames() {
		jsweet.lang.Object styles = (jsweet.lang.Object)d.$get("attributes");
		if(styles != null){
			return jsweet.lang.Object.keys(styles);
		}
		return new String[]{};
		//return attributes.keySet();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getHtml()
	 */
	@Override
	public String getHtml() {
		//return html;
		String html =  getString("html");
		if(html == null){
			return "";
		}
		return html;
	}
	
	private void setString(String key, String value){
		d.$set(key, value);
	}
	
	private String getString(String key){
		return (String)d.$get(key);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setHtml(java.lang.String)
	 */
	@Override
	public JSContainer setHtml(String h) {
		//this.html = h;
		setString("html", h);
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
		return (Boolean)d.$get("rendered");
		//return rendered;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setRendered(boolean)
	 */
	@Override
	public JSContainer setRendered(boolean b) {
		d.$set("rendered",b);
		//this.rendered = b;
		if (!b) {
			for (JSContainer child : getChildren()) {
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
	public jsweet.lang.Object getListeners() {
		
		jsweet.lang.Object l = (jsweet.lang.Object)d.$get("listeners");
		if(l == null){
			d.$set("listeners", new jsweet.lang.Object());
			return getListeners();
		}
		return l;
		//return listeners;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#render()
	 */
	@Override
	public void render() {
		if (getParent() == null)
			render(null);
		else
			render(document.getElementById(getParent().getId()));
	}
	
	public void postRender(HTMLElement root){
		
	}
	
	protected boolean contains(Array<?> lst, Object o){
		for(Object oo : lst){
			if(oo.equals(o)){
				return true;
			}
		}
		return false;
	}

	private static ContainerRenderer defaultRenderer = new ContainerRenderer();
	
	@SuppressWarnings({ "rawtypes" })
	@Override
	public void render(HTMLElement parent) {
		
		Array<Renderer<? extends Renderable>> renderers = getRenderers();
		if (renderers.length == 0) {
			//ContainerRenderer defaultRenderer = new ContainerRenderer();
			renderers.push(defaultRenderer);
		}

		
		if (!contains(renderers,defaultRenderer)) {
			
			Array<Renderer<? extends Renderable>> tmp = new Array<Renderer<? extends Renderable>>();
			tmp.push(defaultRenderer);
			for(Renderer<? extends Renderable> r : renderers){
				tmp.push(r);
			}
			//tmp.push(items)
			//tmp.push(renderers);
			renderers = tmp;
			//renderers.add(0, DEFAULT_RENDERER);
		}
		for (Renderer renderer : renderers)
			renderer.doRender(this, parent);

		for (JSContainer child : getChildren()) {
			child.render();
		}
		
		
		for (Renderer renderer : renderers){
			if(renderer instanceof ExtendedRenderer<?>)
			((ExtendedRenderer)renderer).postRender(this, parent);
		}
		
		setRendered(true);
		//rendered = true;

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getData()
	 */
	@Override
	public Object getData() {
		return d.$get("data");
		//return data;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#setData(java.lang.Object)
	 */
	@Override
	public void setData(Object data) {
		d.$set("data",data);
		//this.data = data;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see framework.JSContainer_#getAncestorOfType(java.lang.Class)
	 */
	public <T extends JSContainer> T getAncestorWithClass(String cls) {
		JSContainer parent = getParent();
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
		JSContainer parent = getParent();
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

		JSContainer parent = getParent();
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
		JSContainer parent = getParent();
		if (parent == null) {
			return this;
		} else {
			return parent.getRoot();
		}
	}

	
	@Override
	public DroppableOptions getDroppableOptions() {
		return (DroppableOptions)d.$get("droppableOptions");
		//return droppableOptions;
	}

	public void setDroppableOptions(DroppableOptions options) {
		d.$set("droppableOptions", options);
		//this.droppableOptions = options;
	}

	public JSContainer(String name, String tag) {
		super();
		setTag(tag);
		setName(name);
	}
	/*
	 * @Override public List<Parameter> getParameters() {
	 * 
	 * }
	 */

	// protected Parameter createParameter

}
