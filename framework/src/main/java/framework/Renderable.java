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

import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;
import jsweet.lang.Array;

public interface Renderable {

	Array<String> getChangedAttributes();

	Array<String> getChangedStyles();

	public HTMLElement getNative();
	
	public Renderable getChild(String name);
	
	public Renderable removeChild(Renderable r);
	
	public Renderable clearChildren();

	Array<Renderer<? extends Renderable>> getRenderers();

	Renderable addRenderer(Renderer<? extends Renderable> renderer);

	String getId();

	String uid();

	Renderable addClass(String styleClass);

	Renderable removeClass(String cls);

	Renderable addChild(JSContainer container);

	Renderable addChildAt(double index, JSContainer child);

	Renderable setVisible(boolean b);

	Renderable addEventListener(EventListener listener, String type);

	String getTag();

	Renderable setTag(String tag);

	Renderable setStyle(String key, String value);

	String getStyle(String key);

	Renderable setAttribute(String key, String value);

/*	void exec(String name, jsweet.lang.Object parameter);

	void exec(String name, String variable);

	void exec(String name);
*/

	String getAttribute(String key);

	String getName();

	void setName(String name);

	Renderable getParent();

	Array<JSContainer> getChildren();

	String[] getStyleNames();

	String[] getAttributeNames();

	String getHtml();

	Renderable setHtml(String h);

	boolean isRendered();

	Renderable setRendered(boolean b);

	jsweet.lang.Object getListeners();

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