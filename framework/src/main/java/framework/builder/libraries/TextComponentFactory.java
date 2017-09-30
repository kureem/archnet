package framework.builder.libraries;

import framework.JSContainer;

public class TextComponentFactory extends BasicComponentFactory{

	private String defaultText;
	
	public TextComponentFactory(String tag, String defaultTxt) {
		super(tag);
		this.defaultText = defaultTxt;
	}

	@Override
	public JSContainer createInstance(boolean designMode) {
		// TODO Auto-generated method stub
		JSContainer instance= super.createInstance(designMode);
		instance.setHtml(defaultText);
		return instance;
		
		
	}
	
	

}
