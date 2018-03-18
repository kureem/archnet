package framework.lightning;

import framework.designables.JSDesignableCardLayout;

public class WizardPrompt extends Prompt{
	
	private JSDesignableCardLayout wizardBody = new JSDesignableCardLayout("body", "div");

	public WizardPrompt(String name, String title) {
		super(name, title);
		getBody().addChild(wizardBody);
		addButton("next", "Next");
		addButton("previous", "Previous");
		addCancelButton("Cancel");
	}
	
	public JSDesignableCardLayout getWizardBody(){
		return wizardBody;
	}
	
	public WizardPrompt addStep(WizardStep ctn){
		
		wizardBody.addItem(ctn);
		return this;
		
	}

}
