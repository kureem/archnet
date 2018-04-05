package framework.lightning.table;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.NameParameter;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.SvgIcon;
import jsweet.lang.Array;

public class TableColumn extends JSContainer implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	protected Object identifier;

	// private JSContainer title = new
	// JSContainer("a").addClass("slds-th__action slds-text-link_reset")
	// .setAttribute("role", "button");

	private JSContainer title = new JSContainer("span").addClass("slds-truncate");

	private boolean detailLink = false;

	private SvgIcon icon = new SvgIcon("", "utility", "arrowdown");

	private JSContainer linkReset = new JSContainer("a").addClass("slds-th__action slds-text-link_reset")
			.setAttribute("href", "javascript:void(0);").setAttribute("role", "button").setAttribute("tabindex", "-1");

	// private JSContainer resizable = new
	// JSContainer("div").addClass("slds-resizable");

	// private JSContainer range = new JSContainer("input").setAttribute("type",
	// "range").setAttribute("min", "20")
	// .setAttribute("max", "1000").addClass("slds-resizable__input
	// slds-assistive-text");

	// private JSContainer resizableHandle = new
	// JSContainer("span").addClass("slds-resizable__handle")
	// .setHtml("<span class=\"slds-resizable__divider\"></span>");

	// private JSContainer checkBoxCtn = new
	// JSContainer("div").addClass("slds-th__action slds-th__action_form");
	// private JSContainer sldsCheckbox = new
	// JSContainer("span").addClass("slds-checkbox");
	// private JSCheckBox checkBox = new JSCheckBox("checkbox");
	// private JSContainer labelCheckBox = new
	// JSContainer("label").addClass("slds-checkbox__label").setHtml("<span
	// class=\"slds-checkbox_faux\"></span>");

	public TableColumn(String name, Object identifier, String label) {
		this(name, identifier, label, false);
		setAttribute("identifier", "lgt:table-column");
	}

	public TableColumn(String name, Object identifier, String label, boolean detailLnk) {
		super(name, "th");
		this.identifier = identifier;
		setAttribute("identifier", "lgt:table-column");
		// title.addChild(innerTitle);
		// title.addChild(icon);
		addChild(linkReset);
		linkReset.addChild(title);
		linkReset.addChild(icon);
		icon.addClass("slds-icon_container");
		icon.setSvgClass("slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon");

		// setLabel(label);
		applyParam("label", label);
		applyParam("capitalize", "true");
		applyParam("detailLink", "false");

		// setSortable(false);
		// setResizable(false);
		// setTitleCaps(true);
		setAttribute("scope", "col");
		this.detailLink = detailLnk;
	}

	public void setBinding(String binding) {
		this.identifier = binding;
	}

	public Object getIdentifier() {
		if (identifier != null)
			return identifier;
		return getName();
	}

	public TableColumn setWidth(String width) {
		title.setStyle("width", width);
		return this;
	}

	/*
	 * public void setCheckBox(boolean b){ if(b){ title.setStyle("display",
	 * "none"); resizableHandle.setStyle("display", "none");
	 * checkBoxCtn.setStyle("display", "block"); }else{
	 * title.setStyle("display", "block"); resizableHandle.setStyle("display",
	 * "block"); checkBoxCtn.setStyle("display", "none"); } }
	 */

	public TableColumn setLabel(String title) {
		this.title.setHtml(title);
		return this;
	}

	protected void setFeature(String cls, boolean b) {
		if (b) {
			addClass(cls);
		} else {
			removeClass(cls);
		}
	}

	public boolean isDetailLink() {
		return detailLink;
	}

	public void setDetailLink(boolean detailLink) {
		this.detailLink = detailLink;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if (key.equals("label")) {
			setLabel(value);
		} else if (key.equals("capitalized")) {
			setTitleCaps("true".equals(value));
		} else if (key.equals("detailLink")) {
			setDetailLink("true".equals(value));
		} else if (key.equals("alignRight")) {
			setAlignRight("true".equals(value));
		} else if (key.equals("sortable")) {
			setSortable("true".equals(value));
		} else if (key.equals("width")) {
			setWidth(value);
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
		
		Array<Parameter> params = new Array<>();
		params.push(new NameParameter("Name", "Basic"));
		params.push(new AttributeParameter("class", "Style class", "Basic"));
		params.push(new AttributeParameter("style", "Style", "Basic"));
		AttributeParameter exposeAs = new AttributeParameter("exposeAs", "Expose with var", "Basic");
		
		params.push(exposeAs);
		
		
		params.push(new AttributeParameter("label", "Label", "Basic"));
		params.push(new AttributeParameter("width", "Width", "Basic"));
		AttributeParameter capitalized = new AttributeParameter("capitalized", "Capitalised", "Basic");
		capitalized.options.push(new Option("", ""));

		AttributeParameter alignRight = new AttributeParameter("alignRight", "Align Right", "Basic");
		alignRight.options.push(new Option("", ""));
		
		AttributeParameter sortable = new AttributeParameter("sortable", "Sortable", "Basic");
		sortable.options.push(new Option("", ""));

		AttributeParameter detailLink = new AttributeParameter("detailLink", "Detail Link", "Basic");
		detailLink.options.push(new Option("", ""));

		params.push(sortable,capitalized, alignRight, detailLink);
		return params;
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

	public void setAlignRight(boolean b) {
		setFeature("slds-text-align_right", b);
	}

	/*
	 * public void setAlign(Alignment alignmen) { if
	 * (alignmen.equals(Alignment.LEFT)) { removeClass("slds-text-align_right");
	 * addClass("slds-text-align_left"); } else if
	 * (alignmen.equals(Alignment.RIGHT)) { addClass("slds-text-align_right");
	 * removeClass("slds-text-align_left"); } else {
	 * removeClass("slds-text-align_right");
	 * removeClass("slds-text-align_left"); } }
	 */

	/*
	 * public TableColumn setSortable(boolean b) {
	 * setFeature("slds-is-sortable", b); icon.setVisible(b); return this; }
	 */

	public TableColumn setTitleCaps(boolean b) {
		setFeature("slds-text-title_caps", b);
		return this;
	}

	public TableColumn setSortable(boolean b) {
		setFeature("slds-is-sortable", b);
		//resizable.setVisible(b);
		return this;
	}

}
