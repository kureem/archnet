package framework.builder;

import framework.design.Designable;
import framework.lightning.LTContainer;

public class Builder extends LTContainer {

	private TopMenu topMenu = new TopMenu("header");

	
	private VisualEditor visualEditor;

	

	public Builder(String name) {
		super(name, "div");

		addClass("builder");

		visualEditor = new VisualEditor(this);
		addChild(visualEditor);
		visualEditor.newProject();

	}

	public Designable getSelectedItem() {
		return visualEditor.getSelectedItem();
	}

	
}
