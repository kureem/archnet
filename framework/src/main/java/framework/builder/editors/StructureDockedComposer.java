package framework.builder.editors;

import framework.core.BeanFactory;
import framework.design.Designable;
import framework.lightning.DockedComposer;

public class StructureDockedComposer extends DockedComposer{

	
	private Structure structure;
	public StructureDockedComposer(String name, Designable root) {
		super(name);
		getTitle().setHtml("Structure");
		
		BeanFactory bf = BeanFactory.getInstance();
		structure = new Structure("strcy", root);
		bf.addBean(Structure.class, structure);
		
		getBody().addChild(structure);
		
	}

}
