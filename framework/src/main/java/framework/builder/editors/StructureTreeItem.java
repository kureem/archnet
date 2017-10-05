package framework.builder.editors;

import framework.TreeItem;
import framework.builder.Selector;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.designables.DesignableDelegate;

public class StructureTreeItem extends TreeItem{

	private Designable designable;
	
	public StructureTreeItem(String name,Designable designable) {
		super(name, designable.getName());
		this.designable = designable;
		DesignableDelegate.setDroppableOptions(designable, true);
	}

	@Override
	public void select(boolean b) {
		// TODO Auto-generated method stub
		super.select(b);
		
		BeanFactory.getInstance().getBeanOfType(Selector.class).select(designable);
	}
	
	
	

}
