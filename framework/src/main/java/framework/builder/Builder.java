package framework.builder;

import framework.builder.libraries.LibrariesDockedComposer;
import framework.builder.properties.PropertiesDockedComposer;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.lightning.LTContainer;

public class Builder extends LTContainer {

	private TopMenu topMenu = new TopMenu("header");

	private PropertiesDockedComposer propertiesDockedComposer = new PropertiesDockedComposer("properties");

	private LibrariesDockedComposer libraryDockedComposer = new LibrariesDockedComposer("library");

	private VisualEditor visualEditor;

	private Selector selector;

	public Builder(String name) {
		super(name, "div");

		addClass("builder");

		addChild(topMenu);

		addChild(propertiesDockedComposer);

		addChild(libraryDockedComposer);

		selector = BeanFactory.getInstance().getBeanOfType(Selector.class);
		addChild(selector);

		visualEditor = new VisualEditor(this);
		addChild(visualEditor);
		select((Designable)visualEditor.newProject());

	}

	public Designable getSelectedItem() {
		return visualEditor.getSelectedItem();
	}

	public void select(Designable designable) {
		propertiesDockedComposer.selectComponent(designable);
		selector.select(designable);
	}
}
