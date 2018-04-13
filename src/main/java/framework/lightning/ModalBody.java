package framework.lightning;

import framework.DndAble;
import framework.MouseEventAble;
import framework.designables.JSDesignable;

public class ModalBody extends JSDesignable implements  MouseEventAble,DndAble {

	public ModalBody(String name) {
		super(name, "div");
		setAttribute("identifier", "lgt:modal-body");
		addClass("slds-modal__content");
	}

}
