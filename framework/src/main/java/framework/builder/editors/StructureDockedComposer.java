package framework.builder.editors;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.design.Designable;
import framework.lightning.DockedComposer;
import jsweet.dom.Event;

public class StructureDockedComposer extends DockedComposer{

	
	private Structure structure;
	public StructureDockedComposer(String name, Designable root, File f, Selector selector) {
		super(name);
		addClass("structure");
		getTitle().setHtml("Structure");
		
		//BeanFactory bf = BeanFactory.getInstance();
		structure = new Structure("strcy", root,f,selector);
		//bf.addBean(Structure.class, structure);
		
		getBody().addChild(structure);
		//setStyle("height", "calc()")
		
		
		minimize.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				VisualEditor editor = getAncestorWithClass("visual-editor");
				if(closed)
				editor.closeLeft();
				else
					editor.openLeft();
				
			}
		}, "click");
	}
	
	public Structure getStructure(){
		return structure;
	}

}
