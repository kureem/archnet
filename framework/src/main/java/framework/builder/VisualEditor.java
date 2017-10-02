package framework.builder;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;

public class VisualEditor extends JSContainer {

	private Builder builder;

	private JSContainer selectedItem;

	private Designable root;

	public VisualEditor(Builder builder) {
		super("visualEditor", "div");
		addClass("visual-editor");
		this.builder = builder;

	}

	public Designable newProject() {
		BasicComponent rootComponent = new BasicComponent("div", "div", "DIV");
		root = rootComponent.getFactory().build(new Component(), true);
		root.setStyle("width", "100%");
		root.setStyle("height", "200px");

		addChild((JSContainer) root);
		return root;

	}

	public Designable getRootItem() {
		return root;
	}

	public JSContainer getSelectedItem() {
		return selectedItem;
	}

	public Builder getBuilder() {
		return builder;
	}

}
