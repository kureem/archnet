package framework.builder.editors;

import framework.builder.Selector;
import framework.builder.data.File;
import framework.design.Designable;
import framework.lightning.DockedComposer;

public class StructureDockedComposer extends DockedComposer{

	
	private Structure structure;
	public StructureDockedComposer(String name, Designable root, File f, Selector selector) {
		super(name);
		getTitle().setHtml("Structure");
		
		//BeanFactory bf = BeanFactory.getInstance();
		structure = new Structure("strcy", root,f,selector);
		//bf.addBean(Structure.class, structure);
		
		getBody().addChild(structure);
		
	}
	
	public Structure getStructure(){
		return structure;
	}

}
