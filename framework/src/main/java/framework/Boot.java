package framework;

import framework.builder.Builder;
import framework.builder.libraries.AbstractComponentFactory;
import framework.builder.libraries.BasicComponentFactory;
import framework.builder.libraries.BasicComponentFactoryRegistry;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.libraries.TextComponentFactory;
import framework.core.BasicDecoratorRegistry;
import framework.core.BeanFactory;
import framework.core.DecoratorsRegistry;
import framework.interactions.InteractionsDecorator;
import framework.lightning.Button;

public class Boot {

	public static void main(String[] args) {

		BeanFactory factory = BeanFactory.getInstance();

		DecoratorsRegistry decoratorRegistry = new BasicDecoratorRegistry();
		decoratorRegistry.registerDecorator(new InteractionsDecorator());
		factory.addBean(DecoratorsRegistry.class, decoratorRegistry);

		ComponentFactoryRegistry componentFactoryRegistry = new BasicComponentFactoryRegistry();

		String[] txtTags = new String[]{"h1", "h2", "h3", "h4", "h5", "span", "p", "label"};
		String[] txtTagsLabels = new String[]{"Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Normal Text", "paragraph", "Label"};
		
		String[] tags = new String[] { "div", "a", "img", "ol", "ul", "li",
				"form", "fieldset", "input", "select", "textarea", "button" };

		for(int i =0; i < txtTags.length;i++){
			String tag = txtTags[i];
			String defaultText = txtTagsLabels[i];
			componentFactoryRegistry.registerComponentFactory("html:" + tag, new TextComponentFactory(tag, defaultText));
		}
		
		for (String tag : tags) {
			componentFactoryRegistry.registerComponentFactory("html:" + tag, new BasicComponentFactory(tag));
		}

		componentFactoryRegistry.registerComponentFactory("lgt:btn", new AbstractComponentFactory("lgt:btn") {

			@Override
			public JSContainer createInstance(boolean designMode) {
				Button btn = new Button();
				btn.setLabel("Button");
				return btn;
			}
		});

		factory.addBean(ComponentFactoryRegistry.class, componentFactoryRegistry);

		new Builder("builder").render();

		// new TestApp().render();

		// new TestApp().render();

		/*
		 * setTimeout(function(()->{ c.render(document.getElementById("root"));
		 * }),5000);
		 */

	}

}
