package framework.lightning;

import framework.JSContainer;

public class SvgIcon extends JSContainer {

	public final static String SMALL = "slds-button_icon_small";

	public final static String EXTRA_SMALL = "slds-_icon_x-small";

	public final static String EXTRA_EXTRA_SMALL = "slds-button_icon_xx-small";

	public final static String LARGE = "slds-button_icon_large";

	public final static String TEXT_DEFAULT = "slds-icon-text-default";

	public final static String TEXT_WARNING = "slds-icon-text-warning";

	public final static String TEXT_ERROR = "slds-icon-text-error";

	public final static String TEXT_LIGHT = "slds-icon-text-light";

	private String assetsUrl = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";

	private String type = "utility";

	private String iconName = "settings";
	
	private String svgClass = "slds-icon";

	public SvgIcon(String name, String type, String iconName) {
		super(name, "div");
		this.type = type;
		this.iconName = iconName;
		refresh();

	}

	public SvgIcon(String name) {
		super(name, "div");
		refresh();
	}
	
	public void setSvgClass(String cls){
		this.svgClass = cls;
		refresh();
	}

	public void refresh() {
		String html = "<svg class='"+svgClass+"'><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\""+assetsUrl+"/"+type+"-sprite/svg/symbols.svg#"+iconName+"\"></use></svg>";
		setHtml(html);
	}

	public String getAssetsUrl() {
		return assetsUrl;
	}

	public void setAssetsUrl(String assetsUrl) {
		this.assetsUrl = assetsUrl;
		refresh();
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
		refresh();
	}

	public String getIconName() {
		return iconName;
	}

	public void setIconName(String name) {
		this.iconName = name;
		refresh();
	}

	public SvgIcon setSize(String size) {
		removeClass(EXTRA_EXTRA_SMALL).removeClass(EXTRA_SMALL).removeClass(LARGE).removeClass(SMALL);
		addClass(size);
		return this;
	}

	public SvgIcon setTextType(String type) {
		removeClass(TEXT_DEFAULT).removeClass(TEXT_ERROR).removeClass(TEXT_LIGHT).removeClass(TEXT_WARNING)
				.addClass(type);
		return this;
	}

}
