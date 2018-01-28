package framework.core;

import jsweet.lang.Array;

public class BasicDecoratorRegistry implements DecoratorsRegistry {

	private Array<Decorator> decorators = new Array<>();
	
	@Override
	public void registerDecorator(Decorator decorator) {
		decorators.push(decorator);
	}

	@Override
	public Array<Decorator> getDecorators() {
		return decorators;
	}

}
