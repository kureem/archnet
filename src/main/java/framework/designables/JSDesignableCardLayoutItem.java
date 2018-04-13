package framework.designables;

import framework.DndAble;
import framework.MouseEventAble;

public class JSDesignableCardLayoutItem extends JSDesignable implements MouseEventAble,DndAble{

	public JSDesignableCardLayoutItem(String name, String tag) {
		super(name, tag);
	}

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"activate","deactivate"};
	}
	
	

}
