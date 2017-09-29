package framework;

import framework.builder.Builder;
import framework.core.BasicDecoratorRegistry;
import framework.core.BeanFactory;
import framework.core.DecoratorsRegistry;

public class Main {

	public static void main(String[] args) {
		
		BeanFactory.getInstance().addBean(DecoratorsRegistry.class, new BasicDecoratorRegistry());
		new Builder("builder").render();
		
		
		
		//new TestApp().render();
		 
		//new TestApp().render();
		
		 
		
		/*setTimeout(function(()->{
			c.render(document.getElementById("root"));
		}),5000);*/ 
		

	}

}
