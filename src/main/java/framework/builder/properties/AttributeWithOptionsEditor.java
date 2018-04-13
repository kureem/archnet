package framework.builder.properties;

import framework.JSContainer;
import framework.JSOption;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import jsweet.dom.Event;

public class AttributeWithOptionsEditor extends AbstractSelectPropertyEditor{

	public AttributeWithOptionsEditor() {
		super("attribute");
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		String attr = parameter.name;
		String value = designable.getAttribute(attr);
		
		clearChildren();
		setRendered(false);
		for(Option opt : parameter.options){
			addOption(new JSOption(opt.text, opt.value));
		}
		setValue(value);
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String attr = parameter.name;
		String value = (String)getValue();
		designable.setAttribute(attr, value);
		designable.applyParam(attr, value);
		designable.setRendered(false);
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
	}

}
