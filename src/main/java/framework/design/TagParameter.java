package framework.design;

import framework.JSOption;
import framework.builder.properties.PropertyEditor;
import framework.builder.properties.TagEditor;

public class TagParameter extends Parameter {

	public TagParameter() {
		super("tag", "Tag", "basic", "Basic");
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {

		TagEditor editor = new TagEditor("tagEditor");
		for(Option opt : options){
			editor.addOption(new JSOption(opt.text, opt.value));
		}
		editor.setProperty(designable, this);
		return editor;
	}

	@Override
	public String extractValue(Designable designable) {
		return designable.getTag();
	}

}
