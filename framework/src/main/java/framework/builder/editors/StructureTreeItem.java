package framework.builder.editors;

import framework.TreeItem;
import framework.builder.Selector;
import framework.core.BeanFactory;
import framework.design.Designable;

public class StructureTreeItem extends TreeItem{

	private Designable designable;
	
	public StructureTreeItem(String name,Designable designable) {
		super(name, designable.getName());
		this.designable = designable;
		addClass("structure-tree-item");
	}
	
	
	public Designable getDesignable(){
		return designable;
	}

	@Override
	public void select(boolean b) {
		super.select(b);
		BeanFactory.getInstance().getBeanOfType(Selector.class).select(designable);
	}
	
	
	

}
