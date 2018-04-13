package framework.lightning;

import framework.DndAble;
import framework.MouseEventAble;
import framework.designables.JSDesignable;

public class ModalFooter extends JSDesignable  implements  MouseEventAble,DndAble{

	public ModalFooter(String name) {
		super(name, "footer");
		setAttribute("identifier", "lgt:modal-footer");
		addClass("slds-modal__footer");
	}

}
