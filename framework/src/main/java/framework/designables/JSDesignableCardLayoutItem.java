package framework.designables;

public class JSDesignableCardLayoutItem extends JSDesignable{

	public JSDesignableCardLayoutItem(String name, String tag) {
		super(name, tag);
	}

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"activate","deactivate"};
	}
	
	

}
