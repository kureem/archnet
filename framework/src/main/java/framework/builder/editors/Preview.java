package framework.builder.editors;

import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.MarshallUtil;
import framework.design.Designable;

public class Preview extends JSContainer {

	private Designable root;

	public Preview(File file) {
		super("visualEditor", "div");
		addClass("visual-editor");
		consume(unmarshall(file));
	}

	public Component unmarshall(File f) {

		return MarshallUtil.toComponent(f.getData());
	}

	public Designable build(Component component) {
		return MarshallUtil.toDesignable(component);
	}

	public void consume(Component component) {
		root = build(component); 
								
		addChild((JSContainer) root);

	}

}
