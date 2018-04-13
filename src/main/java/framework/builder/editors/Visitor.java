package framework.builder.editors;

import framework.design.Designable;

public interface Visitor {

	public void doVisit(Designable host);
	
}
