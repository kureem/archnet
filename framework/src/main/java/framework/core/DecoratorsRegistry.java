package framework.core;

import java.util.List;

public interface DecoratorsRegistry {
	
	public void registerDecorator(Decorator decorator);

	public List<Decorator> getDecorators();
}
