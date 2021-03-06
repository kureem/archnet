package framework.builder.properties;

import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class AttributeEditor extends AbstractInputPropertyEditor{

	public AttributeEditor() {
		super("attribute");
	}

	
	@Override
	public void performAction(JSContainer source, Event evt) {
		String attr = parameter.name;
		String value = getValue();
		designable.setAttribute(attr, value);
		designable.applyParam(attr, value);
		designable.setRendered(false);
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
		
		//designable.setParameter(attr, value, true);
	}


	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		String attr = parameter.name;
		String value = designable.getAttribute(attr);
		setValue(value);
		
	}

}
