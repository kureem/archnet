package framework.builder.properties;

import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class TagEditor extends AbstractSelectPropertyEditor {

	public TagEditor(String name) {
		super(name);

	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		this.designable = designable;
		setValue(designable.getTag());
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		designable.applyParam("tag", (String)getValue());
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
	}

}
