package framework.builder;

import framework.lightning.Button;
import framework.lightning.ButtonGroup;
import framework.lightning.GlobalHeader;

public class TopMenu extends GlobalHeader {

	public TopMenu(String name) {
		super(name);
		ButtonGroup actions = new ButtonGroup("actions");
		actions.addButton(new Button("new").setLabel("New").setState(Button.STATE_NEUTRAL));
		actions.addButton(new Button("edit").setLabel("Edit").setState(Button.STATE_NEUTRAL));

		addChild(actions);
	}

}
