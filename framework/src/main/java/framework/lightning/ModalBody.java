package framework.lightning;

import framework.designables.JSDesignable;

public class ModalBody extends JSDesignable{

	public ModalBody(String name) {
		super(name, "div");
		setAttribute("identifier", "lgt:modal-body");
		addClass("slds-modal__content");
	}

}
