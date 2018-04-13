package framework.builder.libraries;

import framework.design.Designable;
import framework.designables.JSDesignableTextComponent;

public class TextComponentFactory extends BasicComponentFactory{

	private String defaultText;
	
	public TextComponentFactory(String tag, String defaultTxt) {
		super(tag);
		this.defaultText = defaultTxt;
	}

	@Override
	public Designable createInstance(boolean designMode) {
		// TODO Auto-generated method stub
		Designable instance=  new JSDesignableTextComponent(tag, tag); //super.createInstance(designMode);
		instance.setHtml(defaultText);
		return instance;
		
		
	}
	
	

}
