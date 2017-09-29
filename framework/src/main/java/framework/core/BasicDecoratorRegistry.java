package framework.core;

import java.util.ArrayList;
import java.util.List;

import framework.interactions.InteractionsDecorator;

public class BasicDecoratorRegistry implements DecoratorsRegistry ,Initializable{

	private List<Decorator> decorators = new ArrayList<>();
	
	@Override
	public void registerDecorator(Decorator decorator) {
		decorators.add(decorator);
	}

	@Override
	public List<Decorator> getDecorators() {
		return decorators;
	}

	@Override
	public void doInit() {
		registerDecorator(new InteractionsDecorator());
	}

}
