package framework.builder.properties;

import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class SingleOptionAttributeEditor extends AbstractCheckBoxPropertyEditor{

	public SingleOptionAttributeEditor() {
		super("attribute");
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		String attr = parameter.name;
		String value = designable.getAttribute(attr);
		if(value != null){
			setValue("true".equals(value));
		}
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String attr = parameter.name;
		Boolean value = getValue();
		if(value != null){
			designable.setAttribute(attr,value.toString());
			designable.applyParam(attr, value.toString());
			designable.setRendered(false);
			VisualEditor veditor = getAncestorWithClass("visual-editor");
			veditor.dirty();
		}
	}

}
