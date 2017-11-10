package framework;

import static def.dom.Globals.window;

import framework.builder.Builder;
import framework.builder.Previewer;
import framework.builder.data.BasicDataEnvironment;
import framework.builder.data.DataEnvironment;
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
import framework.designables.JSDesignableImage;
import framework.designables.JSDesignableInput;
import framework.designables.JSDesignableLink;
import framework.designables.JSDesignableList;
import framework.designables.JSDesignableTextArea;
import framework.designables.JSDesignableTextComponent;
import framework.interactions.InteractionsDecorator;

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

		String[] tags = new String[] { "form", "fieldset", "select", "button" };

		componentFactoryRegistry.registerComponentFactory("html:html", new AbstractComponentFactory("html:html") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSHTMLFragment cmp = new JSHTMLFragment("html fragment", "#default");
				return cmp;
			}
		});

		
		
		componentFactoryRegistry.registerComponentFactory("html:p", new AbstractComponentFactory("html:p") {

			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableTextComponent cmp = new JSDesignableTextComponent("txtItem", "p");
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

		componentFactoryRegistry.registerComponentFactory("html:textarea", new AbstractComponentFactory("html:input") {

			@Override
			public Designable createInstance(boolean designMode) {
				// JSInput input = new JSInput("Input");
				JSDesignableTextArea input = new JSDesignableTextArea("TextArea");
				return input;
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
		factory.addBean(ComponentFactoryRegistry.class, componentFactoryRegistry);

		// -- added singleton bean for Selector--//
		//factory.addBean(Selector.class, new Selector());

		factory.addBean(DataEnvironment.class, new BasicDataEnvironment());

		factory.addBean(ProjectService.class, new ProjectService());

		if (window.location.href.contains("preview.html")) {

			String name = window.location.href.split("#")[1];
			new Previewer(name).render();
		} else {
			new Builder("builder").render();
		}

	}

}
