package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class IconButton extends JSContainer implements Designable {

	private SvgIcon icon = new SvgIcon("icon");

	private final static String SMALL = "slds-button_icon-small";

	private final static String EXTRA_SMALL = "slds-button_icon-x-small";

	private final static String EXTRA_EXTRA_SMALL = "slds-button_icon-xx-small";

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public IconButton(String name) {
		super(name, "button");
		icon.setSvgClass("slds-button__icon");
		setAttribute("svgClass", "slds-button__icon");
		addChild(icon);
		addClass("slds-button").addClass("slds-button_icon");

		setAttribute("iconAssetUrl", icon.getAssetsUrl());
		setAttribute("iconType", icon.getType());
		setAttribute("iconName", icon.getIconName());
	}

	public SvgIcon getIcon() {
		return icon;
	}

	public IconButton setIcon(SvgIcon icon) {
		removeChild(this.icon);
		this.icon = icon;
		icon.setSvgClass("slds-button__icon");
		// icon.addClass("slds-button__icon");
		addChild(icon);
		setRendered(false);
		return this;
	}

	private IconButton toggleClass(String cls, boolean b) {
		if (b) {
			addClass(cls);
		} else {
			removeClass(cls);
		}
		return this;
	}

	public IconButton setContainer(boolean b) {
		return toggleClass("slds-button_icon-container", b);
	}

	public IconButton setBorder(boolean b) {
		return toggleClass("slds-button_icon-border", b);
	}

	public IconButton setBorderInverse(boolean b) {
		return toggleClass("slds-button_icon-border-inverse", b);
	}

	public IconButton setBorderFilled(boolean b) {
		return toggleClass("slds-button_icon-border-filled", b);
	}

	public IconButton setInverse(boolean b) {
		return toggleClass("slds-button_icon-inverse", b);
	}

	public IconButton setError(boolean b) {
		return toggleClass("slds-button_icon-error", b);
	}

	public IconButton setSize(String size) {
		toggleClass(SMALL, false);
		toggleClass(EXTRA_SMALL, false).toggleClass(EXTRA_EXTRA_SMALL, false).toggleClass(size, true);
		return this;
	}

	public IconButton setMore(boolean b) {
		return toggleClass("slds-button_icon-more", b);
	}

	public IconButton setSelected(boolean b) {
		return toggleClass("slds-is-selected", b);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		/*
		 * 
		 * "iconName", "iconType", "iconAssetUrl", "selected", "more", "error",
		 * "inverse", "container" , "border", "borderFilled", "borderInverse"
		 */

		if (key.equals("iconName")) {
			icon.setIconName(value);
		} else if (key.equals("iconType")) {
			icon.setType(value);
		} else if (key.equals("iconAssetUrl")) {
			icon.setAssetsUrl(value);
		} else if (key.equals("selected")) {
			setSelected("true".equals(value));
		} else if (key.equals("more")) {
			setMore("true".equals(value));
		} else if (key.equals("error")) {
			setError("true".equals(value));
		} else if (key.equals("inverse")) {
			setInverse("true".equals(value));
		} else if (key.equals("container")) {
			setContainer("true".equals(value));
		} else if (key.equals("border")) {
			setBorder("true".equals(value));
		} else if (key.equals("borderFilled")) {
			setBorderFilled("true".equals(value));
		} else if (key.equals("borderInverse")) {
			setBorderInverse("true".equals(value));
		} else if (key.equals("size")) {
			setSize(value);
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();

	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();

		String[] keys = new String[] { "iconName", "iconType", "iconAssetUrl", "selected", "more", "error", "inverse",
				"container", "border", "borderFilled", "borderInverse" };
		String[] labels = new String[] { "Icon Name", "Icon Type", "Icon Asset Url", "Selected", "Error", "Inverse",
				"Container", "Show Border", "Border Filled", "Border Inverse" };

		for (int i = 0; i < keys.length; i++) {
			AttributeParameter para = new AttributeParameter(keys[i], labels[i], "Basic");
			parameters.push(para);
		}

		AttributeParameter size = new AttributeParameter("size", "Size", "Basic");
		size.options.push(new Option("Normal", "Normal"));
		size.options.push(new Option("Small", IconButton.SMALL));
		size.options.push(new Option("X Small", IconButton.EXTRA_SMALL));
		size.options.push(new Option("XX Small", IconButton.EXTRA_EXTRA_SMALL));

		parameters.push(size);

		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {

	}

	@Override
	public void removeDesignable(Designable designable) {

	}

	@Override
	public void moveDesignable(Designable designable, int steps) {

	}

}
