package framework.builder.properties;

import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class NameEditor extends AbstractInputPropertyEditor{

	public NameEditor() {
		super("NameEditor");
		// TODO Auto-generated constructor stub
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String name = getValue();
		designable.applyParam("name", name);
		designable.setName(name);
		VisualEditor editor = getAncestorWithClass("visual-editor");
		editor.getStructure().reload(designable);
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		setValue(designable.getName());
		
	}

}
