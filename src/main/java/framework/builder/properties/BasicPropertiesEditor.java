package framework.builder.properties;

import framework.design.Designable;
import framework.design.Parameter;

public class BasicPropertiesEditor extends BasePropertiesEditor {

	public BasicPropertiesEditor(String name) {
		super(name);
	}

	@Override
	public void setComponent(Designable designable) {
		super.setComponent(designable);
		clear();
		for (Parameter param : designable.getParameters()) {
			if (param.category.equals("Basic")) {
				addProperty(param, designable);
			}
		}
	}
}
