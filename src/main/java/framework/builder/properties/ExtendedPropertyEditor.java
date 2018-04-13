package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
import framework.lightning.Button;
import jsweet.dom.Event;

public  class ExtendedPropertyEditor extends JSContainer implements PropertyEditor, EventListener{

	protected Designable designable;
	
	protected Parameter parameter;
	
	protected ExtendedPropertyEditorPrompt prompt;
	private Button button = new Button("btn");
	
	public ExtendedPropertyEditor(String name,ExtendedPropertyEditorPrompt prompt) {
		super(name);
		button.setLabel("....");
		this.prompt = prompt;
		addChild(button);
		addChild(prompt);
		button.addEventListener(this, "click");
	}

	
	@Override
	public void setProperty(Designable designable, Parameter parameter) {
		this.parameter = parameter;
		this.designable = designable;
		//initEditor(designable, parameter);
	}

	
	

	@Override
	public void performAction(JSContainer source, Event evt) {
		if(prompt.getAttribute("class").contains("slds-fade-in-open")){
			
		}else{
			prompt.setProperty(designable, parameter);
			prompt.open();
		}
		
	}

}
