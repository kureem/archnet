package framework.core;

import jsweet.lang.Array;

public interface DecoratorsRegistry {
	
	public void registerDecorator(Decorator decorator);

	public Array<Decorator> getDecorators();
}
