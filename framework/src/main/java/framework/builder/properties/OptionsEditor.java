package framework.builder.properties;

import framework.JSContainer;
import framework.JSOption;
import framework.JSSelect;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.dom.Event;

public class OptionsEditor extends AbstractTextAreaPropertyEditor{

	public OptionsEditor(String name) {
		super(name);
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		String value = "";
		JSSelect select = (JSSelect)designable;
		for(JSContainer c : select.getChildren()){
			JSOption opt = (JSOption)c;
			value = value + "\n" + opt.getText();
		}
		setValue(value);
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		
		String value = getValue();
		String[] options = value.split("\n");
		JSSelect select = (JSSelect)designable;
		select.getChildren().clear();
		select.setRendered(false);
		for(String opt : options){
			JSOption option = new JSOption(opt, opt);
			select.addOption(option);
		}
		VisualEditor veditor = getAncestorWithClass("visual-editor");
		veditor.dirty();
	}
}
