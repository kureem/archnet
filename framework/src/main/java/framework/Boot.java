package framework;

import framework.builder.Builder;
import framework.builder.Selector;
import framework.builder.data.BasicDataEnvironment;
import framework.builder.data.DataEnvironment;
import framework.builder.libraries.AbstractComponentFactory;
import framework.builder.libraries.BasicComponentFactory;
import framework.builder.libraries.BasicComponentFactoryRegistry;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.libraries.TextComponentFactory;
import framework.core.BasicDecoratorRegistry;
import framework.core.BeanFactory;
import framework.core.DecoratorsRegistry;
import framework.design.Designable;
import framework.designables.JSDesignableButton;
import framework.designables.JSDesignableInput;
import framework.designables.JSDesignableTextArea;
import framework.interactions.InteractionsDecorator;

public class Boot {

	public static void main(String[] args) {

		//create beanfactory
		BeanFactory factory = BeanFactory.getInstance();

		//---register decorator registry with decorators---//
		DecoratorsRegistry decoratorRegistry = new BasicDecoratorRegistry();
		decoratorRegistry.registerDecorator(new InteractionsDecorator());
		factory.addBean(DecoratorsRegistry.class, decoratorRegistry);

		
		//--- register component factory registry ---//
		ComponentFactoryRegistry componentFactoryRegistry = new BasicComponentFactoryRegistry();

		String[] txtTags = new String[]{"h1", "h2", "h3", "h4", "h5", "span", "p", "label"};
		String[] txtTagsLabels = new String[]{"Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Normal Text", "paragraph", "Label"};
		
		String[] tags = new String[] { "div", "a", "img", "ol", "ul", "li",
				"form", "fieldset", "select", "button" };

		for(int i =0; i < txtTags.length;i++){
			String tag = txtTags[i];
			String defaultText = txtTagsLabels[i];
			componentFactoryRegistry.registerComponentFactory("html:" + tag, new TextComponentFactory(tag, defaultText));
		}
		
		for (String tag : tags) {
			componentFactoryRegistry.registerComponentFactory("html:" + tag, new BasicComponentFactory(tag));
		}
		
		componentFactoryRegistry.registerComponentFactory("html:input" , new AbstractComponentFactory("html:input") {
			
			@Override
			public Designable createInstance(boolean designMode) {
				JSDesignableInput input = new JSDesignableInput("Input");
				return input;
			}
		});
		
		
		componentFactoryRegistry.registerComponentFactory("html:textarea" , new AbstractComponentFactory("html:input") {
			
			@Override
			public Designable createInstance(boolean designMode) {
				//JSInput input = new JSInput("Input");
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
		
		
		//-- added singleton bean for Selector--//
		factory.addBean(Selector.class, new Selector());
		
		
		factory.addBean(DataEnvironment.class,new BasicDataEnvironment());

		new Builder("builder").render();

	}

}
