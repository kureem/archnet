package framework.builder.properties;

import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class TextEditor extends AbstractInputPropertyEditor {

	public TextEditor(String name) {
		super(name);
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String text = getValue();
		designable.applyParam("text", text);
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		setValue(designable.getHtml());
	}

}
