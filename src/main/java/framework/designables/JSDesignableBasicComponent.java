package framework.designables;

import framework.DndAble;
import framework.KeyboardEventAble;
import framework.MouseEventAble;

public class JSDesignableBasicComponent extends JSDesignable implements DndAble, MouseEventAble, KeyboardEventAble{

	public JSDesignableBasicComponent(String name, String tag) {
		super(name, tag);
	}

	@Override
	public String[] advancedEventTypes() {
		if(getTag().equalsIgnoreCase("button"))
			return new String[]{"focus"};
		if(getTag().equalsIgnoreCase("form"))
			return new String[]{"submit"};
		
		return new String[]{};
	}
	
	

}
