package framework.builder.editors;

import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.MarshallUtil;
import framework.design.Designable;

public class Preview extends JSContainer implements DesignableEditor{

	private Designable root;
	
	

	public Preview(File file) {
		super("visualEditor", "div");
		addClass("visual-editor");
		consume(unmarshall(file));
	}
	
	public Preview(String file) {
		super("visualEditor", "div");
		addClass("visual-editor");
		consume(unmarshall(file));
	}
	
	public static Preview build(String s){
		return new Preview(s);
	}

	public Component unmarshall(File f) {

		return MarshallUtil.toComponent(f.getData());
	}

	public Component unmarshall(String f) {

		return MarshallUtil.toComponent(f);
	}

	
	public Designable build(Component component) {
		MarshallUtil.generateController(component);
		return MarshallUtil.toDesignable(component,false,null);
	}

	public void consume(Component component) {
		root = build(component); 
								
		addChild((JSContainer) root);

	}
	
	public Designable getRootItem(){
		return root;
	}

}
