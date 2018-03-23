package framework.lightning;

public class PageHeader extends LTContainer{

	private Media media = new Media("media");
	
	public PageHeader(String name) {
		super(name, "div");
		addClass("slds-page-header");
		addChild(media);
	}

}
