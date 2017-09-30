package framework.core;

import java.util.ArrayList;
import java.util.List;

public class BasicDecoratorRegistry implements DecoratorsRegistry {

	private List<Decorator> decorators = new ArrayList<>();
	
	@Override
	public void registerDecorator(Decorator decorator) {
		decorators.add(decorator);
	}

	@Override
	public List<Decorator> getDecorators() {
		return decorators;
	}

}
