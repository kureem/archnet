package framework.builder.properties;

import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class StyleEditor extends AbstractInputPropertyEditor{

	public StyleEditor() {
		super("styleEditor");
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String style = parameter.name;
		String value = getValue();
		designable.setStyle(style, value);
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
		
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		setValue(designable.getStyle(parameter.name));
	}

}
