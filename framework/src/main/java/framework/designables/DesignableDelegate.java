package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.NameParameter;
import framework.design.Parameter;

public class DesignableDelegate {

	private Designable ui;

	private Component component = new Component();

	public DesignableDelegate(Designable ui) {
		super();
		this.ui = ui;
	}

	public Designable getDesignable() {
		return ui;
	}

	public void applyParameter(String key, String value, boolean designMode) {
		component.parameters.$set(key, value);
		if (key.equalsIgnoreCase("text") || key.equalsIgnoreCase("html")) {
			ui.setHtml(value);
		} else if (key.equalsIgnoreCase("name")) {
			ui.setName(value);
		} else if (key.equalsIgnoreCase("tag")) {
			ui.setTag(value);
		} else if (key.equalsIgnoreCase("href")) {
			ui.setAttribute("href", value);
		} else if (key.equalsIgnoreCase("target")) {
			ui.setAttribute("target", value);
		} else if (key.equalsIgnoreCase("src")) {
			ui.setAttribute("src", value);
		} else if (key.equalsIgnoreCase("style")) {
			ui.setAttribute("style", value);
		}else if(key.equalsIgnoreCase("class")){
			ui.setAttribute("class", value);
		}
	}

	private boolean containsName(String name){
		for(JSContainer c : ui.getChildren()){
			if(c.getName().equals(name)){
				return true;
			}
		}
		return false;
	}
	
	public void addDesignable(Designable designable){
		String name = designable.getName();
		
		int count = 0;
		while(containsName(name)){
			count++;
			name = designable.getName() + "_" + count;
		}
		designable.applyParam("name", name);
		ui.addChild((JSContainer) designable);
	}
	
	public Component getComponent() {
		return component;
	}

	public List<Parameter> getParameters() {
		List<Parameter> params = new LinkedList<>();
		params.add(new NameParameter("Name", "Basic"));
		params.add(new AttributeParameter("class", "Style class", "Basic"));
		params.add(new AttributeParameter("style", "Style", "Basic"));
		return params;
	}

	public void removeDesignable(Designable designable) {

		ui.getChildren().remove(designable);
		ui.setRendered(false);

	}

	public void moveDesignable(Designable designable, int steps) {
		moveDesignable((JSContainer)designable, steps);
	}
	public void moveDesignable(JSContainer designable, int steps) {
		if (steps != 0) {
			int index = ui.getChildren().indexOf(designable);
			int nextIndex = index + steps;
			if (nextIndex < 0) {
				nextIndex = 0;

			} else if (nextIndex >= ui.getChildren().size() - 1) {
				nextIndex = ui.getChildren().size() - 2;
			}

			if (index != nextIndex) {
				ui.getChildren().remove(designable);
				ui.getChildren().add(nextIndex, designable);
				ui.setRendered(false);
			}
		}
	}

}
