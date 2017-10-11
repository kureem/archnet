package framework.builder;

import framework.JSContainer;
import framework.JSInput;
import framework.lightning.Button;
import framework.lightning.FormElement;
import framework.lightning.Modal;
import framework.lightning.Section;

public class ItemSelector extends Modal {

	private JSInput input = new JSInput("input");

	private Button saveButton = new Button().setLabel("Save");

	private Section section = new Section("section", "All Files");

	private FilesList filesList = new FilesList("filesList");// .addClass("slds-grid
																// slds-grid_pull-padded
																// slds-wrap");

	public ItemSelector(String name, String stitle) {
		super(name, stitle);
		setTag("section");
		addClass("slds-modal_large slds-app-launcher");
		getHeader()
				.addClass("slds-app-launcher__header slds-grid slds-grid_align-spread slds-grid_vertical-align-center");
		getTitle().setAttribute("class", "slds-text-heading_small");
		getTitle().setTag("label");

		FormElement inputElement = new FormElement("inputElement", "div");
		inputElement.setLabel("");
		inputElement.setInput(input);
		input.addClass("slds-input");

		JSContainer headerInput = new JSContainer("div").addClass("slds-app-launcher__header-search");
		headerInput.addChild(inputElement);
		getHeader().addChild(headerInput);

		saveButton.setState(Button.STATE_NEUTRAL);
		getHeader().addChild(saveButton);

		getContent().addChild(section);
		getContent().addClass("slds-app-launcher__content slds-p-around_medium");

		section.getContent().addChild(filesList);
		
		setLarge(true);
		
		setStyle("width", "80%");

	}

	public JSInput getInput() {
		return input;
	}

	public Button getSaveButton() {
		return saveButton;
	}

	public Section getSection() {
		return section;
	}

	public FilesList getFilesList() {
		return filesList;
	}

}
