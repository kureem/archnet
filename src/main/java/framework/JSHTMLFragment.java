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

import static def.jquery.Globals.$;
import static jsweet.lang.Globals.eval;

import framework.builder.Builder;
import framework.builder.Previewer;
import framework.builder.data.File;
import framework.design.AttributeParameter;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.JSDesignable;
import jsweet.dom.HTMLElement;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSHTMLFragment extends JSDesignable implements MouseEventAble, KeyboardEventAble, DndAble {

	//private String template;

	public Object context = new Object();

	public JSHTMLFragment(String name, String template) {
		super(name, "div");
		//setAttribute(key, value)
		//this.template = template;
		setTemplate(template);
	}

	public String getTemplate() {
		return getAttribute("template");
	}

	public void setTemplate(String template) {
		setAttribute("template", template);
		setRendered(false);
	}

	public Object getContext() {
		return context;
	}
	
	
	

	@Override
	public void applyParam(String key, String value) {
		super.applyParam(key, value);
		if(key.equalsIgnoreCase("template")){
			setTemplate(value);
		}
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = super.getParameters();
		AttributeParameter templates = new AttributeParameter("template", "Template", "Basic");
		File project = null;
		if(Builder.getInstance() != null){
			project = Builder.getInstance().getProject();
		}else{
			project = Previewer.project;
		}
		templates.options.push(new Option("Default", "#default"));
		for(File f : project.getTemplates()){
			templates.options.push(new Option(f.getName(), "#" +f.getName().replace(".html", "")));
		}
		
		parameters.push(templates);
		return parameters;

	}

	@SuppressWarnings("unused")
	@Override
	public void render(HTMLElement parent) {

		if (!isRendered()) {
			
			String html = $(getTemplate()).html();
			if(html != null){
			Object cxt = context;
			String rendered = "";
			String js = "rendered = Mustache.render(html, cxt);";
			eval(js);
			setHtml(rendered);
			}else{
				setHtml("Cannot load template:" + getTemplate());
			}
			
		}
		super.render(parent);
	}

}
