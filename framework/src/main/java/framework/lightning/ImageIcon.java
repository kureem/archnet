package framework.lightning;

import framework.JSContainer;

public class ImageIcon extends SvgIcon{

	JSContainer img = new JSContainer("img");
	public ImageIcon(String name, String url) {
		super(name);
		
		setHtml("");
		getChildren().clear();
		addChild(img);
		img.setAttribute("src", "http://www.powells.com/Portals/0/Images/powells_images/loading.gif");
		
	}
	
	
	
	

}
