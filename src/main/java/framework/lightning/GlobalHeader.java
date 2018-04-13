package framework.lightning;

import framework.JSContainer;

public class GlobalHeader  extends Grid{

	public GlobalHeader(String name) {
		super(name, "div");
		setAlignSpread(true); 
		addClass("slds-global-header");
	}
	
	
	public abstract class GlobalHeaderItem extends JSContainer{

		public GlobalHeaderItem(String name, String tag) {
			super(name, tag);
			addClass("slds-global-header__item");
		}
		 
	}
	
	
	public class SearchGlobalHeaderItem extends GlobalHeaderItem{

		public SearchGlobalHeaderItem(String name) {
			super(name, "div");
			addClass("slds-global-header__item_search");
		}
		
	}

}
