package framework.designables;

import static def.dom.Globals.document;

import java.util.LinkedList;
import java.util.List;

import def.dom.HTMLElement;
import framework.JSContainer;
import framework.builder.Builder;
import framework.builder.Previewer;
import framework.builder.data.File;
import framework.builder.marshalling.MarshallUtil;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;

public class JSDesignableBuilderComponent extends JSDesignable{

	private Designable content;
	
	public JSDesignableBuilderComponent(String name) {
		super(name,"div");
	}

	@Override
	public void applyParam(String key, String value) {
		super.applyParam(key, value);
		
		
		if(key.equals("component")){
			getChildren().clear();
			setRendered(false);
			File project = null;
			if(Builder.getInstance() != null){
				project = Builder.getInstance().getProject();
			}else{
				project = Previewer.project;
			}

			for(File f : project.getChild("components").getChildren()){
				if(f.getName().equals(value)){
					content = MarshallUtil.build(f.getData());
				
					addChild((JSContainer)content);
					
					for(File sc : f.getStylesheets()){
						HTMLElement elem = document.createElement("style");
						elem.textContent =sc.getData(); 
						document.body.appendChild(elem);
					}
					for(File sc : f.getScripts()){
						HTMLElement elem = document.createElement("script");
						elem.textContent =sc.getData(); 
						document.body.appendChild(elem);
					}
					
					for(File sc : f.getTemplates()){
						HTMLElement elem = document.createElement("div");
						elem.setAttribute("id", sc.getName());
						elem.innerHTML = sc.getData();
						elem.style.display = "none";
						document.body.appendChild(elem);
					}
					
					
				}
			}
		}
	}

	
	
	
	@Override
	public List<Designable> getDesignables() {
		return new LinkedList<>();
	}
	
	
	

	@Override
	public void removeDesignable(Designable designable) {
		//new DesignableDelegate(content).removeDesignable(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		//new DesignableDelegate(content).moveDesignable(designable, steps);
	}

	@Override
	public void addDesignable(Designable designable) {
	}

	@Override
	public List<Parameter> getParameters() {
		
		List<Parameter> parameters = super.getParameters();
		
		
		AttributeParameter component = new AttributeParameter("component", "Component Src", "Basic");
		File project =  Builder.getInstance().getProject();
		component.options.add(new Option("None", ""));
		for(File f : project.getChild("components").getChildren()){
			component.options.add(new Option(f.getName(), f.getName()));
		}
		
		parameters.add(component);
		return parameters;
	}

	
}
