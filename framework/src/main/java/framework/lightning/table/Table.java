package framework.lightning.table;

import framework.JSContainer;

public class Table extends JSContainer {

	private JSContainer thead = new JSContainer("thead");

	private JSContainer tbody = new JSContainer("tbody");

	public Table(String name) {
		super(name, "table");
		addClass("slds-table");
		addChild(thead);
		addChild(tbody);

	}

	public Table setBordered(boolean b) {
		setFeature("slds-table_bordered", b);
		return this;
	}

	public Table setFixedLayout(boolean b) {
		setFeature("slds-table_fixed-layout", b);
		return this;
	}

	public Table setResizableCol(boolean b) {
		setFeature("slds-table_resizable-cols", b);
		return this;
	}

	protected void setFeature(String cls, boolean b) {
		if (b) {
			addClass(cls);
		} else {
			removeClass(cls);
		}
	}

}
