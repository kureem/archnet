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

import static def.dom.Globals.window;
import static jsweet.lang.Globals.eval;

import framework.builder.Builder;
import framework.builder.Previewer;
import framework.builder.data.BasicDataEnvironment;
import framework.builder.data.DataEnvironment;
import framework.builder.data.HerokuProjectService;
import framework.builder.data.ProjectService;
import framework.builder.libraries.AbstractComponentFactory;
import framework.builder.libraries.BasicComponentFactory;
import framework.builder.libraries.BasicComponentFactoryRegistry;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.core.BasicDecoratorRegistry;
import framework.core.BeanFactory;
import framework.core.DecoratorsRegistry;
import framework.design.Designable;
import framework.designables.JSDesignableBlockComponent;
import framework.designables.JSDesignableBuilderComponent;
import framework.designables.JSDesignableButton;
import framework.designables.JSDesignableHTTP;
import framework.designables.JSDesignableImage;
import framework.designables.JSDesignableInput;
import framework.designables.JSDesignableLink;
import framework.designables.JSDesignableList;
import framework.designables.JSDesignableSelect;
import framework.designables.JSDesignableService;
import framework.designables.JSDesignableTextArea;
import framework.designables.JSDesignableTextComponent;
import framework.interactions.InteractionsDecorator;
import framework.lightning.Accordion;
import framework.lightning.AccordionItem;
import framework.lightning.Avatar;
import framework.lightning.Badge;
import framework.lightning.BreadCrumbItem;
import framework.lightning.BreadCrumbs;
import framework.lightning.ButtonGroup;
import framework.lightning.Col;
import framework.lightning.IconButton;
import framework.lightning.LightningApplication;
import framework.lightning.Panel;
import framework.lightning.PanelSection;
import framework.lightning.Text;
import framework.lightning.designables.JSDesignableFormLayout;
import framework.lightning.designables.JSDesignableIterable;
import framework.lightning.designables.JSDesignableIterator;
import framework.lightning.designables.JSDesignableLightningGrid;
import framework.lightning.designables.JSDesignableLightningInput;
import framework.lightning.designables.JSDesignableModal;
import framework.lightning.designables.JSDesignableSOQL;
import framework.lightning.designables.JSDesignableTable;
import framework.rtc.Conference;

public class Boot {

	public static void main(String[] args) {

	
		// create beanfactory
		BeanFactory factory = BeanFactory.getInstance();

		// ---register decorator registry with decorators---//
		DecoratorsRegistry decoratorRegistry = new BasicDecoratorRegistry();
		decoratorRegistry.registerDecorator(new InteractionsDecorator());
		factory.addBean(DecoratorsRegistry.class, decoratorRegistry);

		// --- register component factory registry ---//
		ComponentFactoryRegistry componentFactoryRegistry = new BasicComponentFactoryRegistry();

		String[] tags = new String[] { "form", "fieldset", "button" };

		componentFactoryRegistry.registerComponentFactory("html:html", new AbstractComponentFactory("html:html") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSHTMLFragment cmp = new JSHTMLFragment("html fragment", "#default");
				return cmp;
				//RuntimeException r = null;
			}
		});

		
		
		componentFactoryRegistry.registerComponentFactory("html:p", new AbstractComponentFactory("html:p") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableTextComponent cmp = new JSDesignableTextComponent("Text Item", "p");
				cmp.setHtml("Text Item");
				return cmp;
			}
		});

		componentFactoryRegistry.registerComponentFactory("html:cmp", new AbstractComponentFactory("html:cmp") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableBuilderComponent cmp = new JSDesignableBuilderComponent("component");
				
				return cmp;
			}
		});

		
		for (String tag : tags) {
			componentFactoryRegistry.registerComponentFactory("html:" + tag, new BasicComponentFactory(tag));
		}

		componentFactoryRegistry.registerComponentFactory("html:div", new AbstractComponentFactory("html:div") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableBlockComponent("panel", "div");
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("html:img", new AbstractComponentFactory("html:img") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableImage img = new JSDesignableImage("image");
				return img;
			}
		});

		componentFactoryRegistry.registerComponentFactory("html:a", new AbstractComponentFactory("html:a") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableLink link = new JSDesignableLink("link");
				link.setHtml("link");
				link.setAttribute("href", "#link");
				return link;
			}
		});

		componentFactoryRegistry.registerComponentFactory("html:ul", new AbstractComponentFactory("html:ul") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableList list = new JSDesignableList("list");
				return list;
			}
		});

		
		componentFactoryRegistry.registerComponentFactory("html:input", new AbstractComponentFactory("html:input") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableInput input = new JSDesignableInput("Input");
				return input;
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("html:select", new AbstractComponentFactory("html:select") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableSelect input = new JSDesignableSelect("Select");
				return input;
			}
		});


		componentFactoryRegistry.registerComponentFactory("html:textarea", new AbstractComponentFactory("html:textarea") {

			@Override
			public Designable createInstance(boolean designMode) {
				// JSInput input = new JSInput("Input");
				JSDesignableTextArea input = new JSDesignableTextArea("TextArea");
				return input;
			}
		});

		
		componentFactoryRegistry.registerComponentFactory("lgt:app", new AbstractComponentFactory("lgt:app") {

			@Override
			public Designable createInstance(boolean designMode) {
				LightningApplication app = new LightningApplication("lightning app", "div");
				//Text t = new Text("Text Item", "span");
				//t.setHtml("Text Item");
				return app;
			}
		});

		
		componentFactoryRegistry.registerComponentFactory("lgt:txt", new AbstractComponentFactory("lgt:txt") {

			@Override
			public Designable createInstance(boolean designMode) {
				Text t = new Text("Text Item", "span");
				t.setHtml("Text Item");
				return t;
			}
		});

		
		
		componentFactoryRegistry.registerComponentFactory("lgt:frm", new AbstractComponentFactory("lgt:frm") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableFormLayout btn = new JSDesignableFormLayout();
				return btn;
			}
		});

		componentFactoryRegistry.registerComponentFactory("lgt:input", new AbstractComponentFactory("lgt:input") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableLightningInput("Input Element");
			}
		});


		componentFactoryRegistry.registerComponentFactory("lgt:grid", new AbstractComponentFactory("lgt:grid") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableLightningGrid("Grid");
			}
		});


		componentFactoryRegistry.registerComponentFactory("lgt:col", new AbstractComponentFactory("lgt:col") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new Col("Col");
			}
		});

		
		
		componentFactoryRegistry.registerComponentFactory("lgt:avatar", new AbstractComponentFactory("lgt:avatar") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new Avatar("Avatar");
			}
		});

		componentFactoryRegistry.registerComponentFactory("lgt:acc", new AbstractComponentFactory("lgt:acc") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new Accordion("Accordion");
				//return btn;
			}
		});


		componentFactoryRegistry.registerComponentFactory("lgt:acc-item", new AbstractComponentFactory("lgt:acc-item") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new AccordionItem("Item", "Accordion Item");
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("lgt:modal", new AbstractComponentFactory("lgt:modal") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableModal("Modal");
			}
		});
		
		
		
		componentFactoryRegistry.registerComponentFactory("lgt:bcr", new AbstractComponentFactory("lgt:bcr") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new BreadCrumbs("BreadCrumb");
			}
		});


		componentFactoryRegistry.registerComponentFactory("lgt:bcr-item", new AbstractComponentFactory("lgt:bcr-item") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new BreadCrumbItem("Item", "Item");
			}
		});

		
		
		
		
		componentFactoryRegistry.registerComponentFactory("lgt:accitem", new AbstractComponentFactory("lgt:accitem") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new AccordionItem("Item", "Accordion Item");
			}
		});
		
		componentFactoryRegistry.registerComponentFactory("lgt:btn", new AbstractComponentFactory("lgt:btn") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableButton btn = new JSDesignableButton("Button");
				btn.setLabel("Button");
				return btn;
			}
		});
		
		componentFactoryRegistry.registerComponentFactory("lgt:icon-btn", new AbstractComponentFactory("lgt:icon-btn") {

			@Override
			public Designable createInstance(boolean designMode) {
				IconButton btn = new IconButton("Icon Button");
				return btn;
			}
		});

		
		componentFactoryRegistry.registerComponentFactory("lgt:btn-grp", new AbstractComponentFactory("lgt:btn-grp") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new ButtonGroup("Button Group");
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("lgt:badge", new AbstractComponentFactory("lgt:badge") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new Badge("Badge", "div");
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("lgt:panel", new AbstractComponentFactory("lgt:panel") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new Panel("Panel");
			}
		});

		componentFactoryRegistry.registerComponentFactory("lgt:panel-section", new AbstractComponentFactory("lgt:panel-section") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new PanelSection("Section", "div");
			}
		});

		componentFactoryRegistry.registerComponentFactory("lgt:table", new AbstractComponentFactory("lgt:table") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableTable("Table");
			}
		});
		
		componentFactoryRegistry.registerComponentFactory("zs:iterator", new AbstractComponentFactory("zs:iterator") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableIterator("Iterator");
			}
		});

		componentFactoryRegistry.registerComponentFactory("zs:iterable", new AbstractComponentFactory("zs:iterable") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableIterable("Iterable", "div");
			}
		});


		componentFactoryRegistry.registerComponentFactory("zs:http", new AbstractComponentFactory("zs:http") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableHTTP();
			}
		});
		componentFactoryRegistry.registerComponentFactory("zs:service", new AbstractComponentFactory("zs:service") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableService();
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("lgt:soql", new AbstractComponentFactory("lgt:soql") {

			@Override
			public Designable createInstance(boolean designMode) {
				return new JSDesignableSOQL("soql");
			}
		});

		factory.addBean(ComponentFactoryRegistry.class, componentFactoryRegistry);

		// -- added singleton bean for Selector--//
		//factory.addBean(Selector.class, new Selector());

		factory.addBean(DataEnvironment.class, new BasicDataEnvironment());

		factory.addBean(ProjectService.class, new HerokuProjectService());
		
		factory.addBean(Adaptor.class, new HerokuAdaptor());

		boolean lightning = false;
		//eval("lightning = true;");
		//--toremove 
		window.$set("lightning", lightning);
		if (window.location.href.contains("preview.html")) {

			String name = window.location.href.split("#")[1];
			new Previewer(name).render();
		}else if(window.location.href.contains("rtc.html")){
			new Conference("conference").render();
			
		}else if(lightning){
			
			eval("window.framework = framework");
		}else {
			new Builder("builder").render();
		}

	}

}
