package framework.designables;

import static jsweet.lang.Globals.eval;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.NameParameter;
import framework.design.Parameter;
import jsweet.lang.Array;
import jsweet.lang.Object;

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
		String raw = value;
		component.parameters.$set(key, raw);
		
		String rendered = "";
		Object cxt = new Object();
		cxt.$set("firstName", "Kureem Rossaye");
		String js = "value = Mustache.render(value, cxt);";
		eval(js);
		
		
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
		}else if(key.equalsIgnoreCase("dhidden")){
			ui.setVisible(!"true".equals(value));
		}else if(key.equalsIgnoreCase("draggable")){
			ui.setAttribute("draggable", value);
		}else{
			if(value.length() < 200){
				ui.setAttribute(key, value);
			}
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

	public Array<Parameter> getParameters() {
		Array<Parameter> params = new Array<>();
		params.push(new NameParameter("Name", "Basic"));
		params.push(new AttributeParameter("class", "Style class", "Basic"));
		params.push(new AttributeParameter("style", "Style", "Basic"));
		params.push(new AttributeParameter("dhidden", "Hidden", "Basic"));
		params.push(new AttributeParameter("draggable", "Draggable", "Basic"));
		return params;
	}

	public void removeDesignable(Designable designable) {

		ui.removeChild(designable);
		ui.setRendered(false);

	}

	public void moveDesignable(Designable designable, int steps) {
		moveDesignable((JSContainer)designable, steps);
	}
	public void moveDesignable(JSContainer designable, int steps) {
		if (steps != 0) {
			double index = ui.getChildren().indexOf(designable);
			double nextIndex = index + steps;
			if (nextIndex < 0) {
				nextIndex = 0;

			} else if (nextIndex >= ui.getChildren().length - 1) {
				nextIndex = ui.getChildren().length - 2;
			}

			if (index != nextIndex) {
				ui.removeChild(designable);
				ui.addChildAt(nextIndex, designable);
				ui.setRendered(false);
			}
		}
	}

}
