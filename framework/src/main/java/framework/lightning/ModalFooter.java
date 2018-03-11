package framework.lightning;

import framework.designables.JSDesignable;

public class ModalFooter extends JSDesignable{

	public ModalFooter(String name) {
		super(name, "footer");
		setAttribute("identifier", "lgt:modal-footer");
		addClass("slds-modal__footer");
	}

}
