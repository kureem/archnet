package framework.lightning;

import def.js.Array;
import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class TabItem extends JSContainer implements EventListener {

	private Array<TabActionListener> listeners = new Array<>();

	public TabBody body;
	private JSContainer title = new JSContainer("a").addClass("slds-tabs_default__link")
			.setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");

	private SvgIcon closeButton = new SvgIcon("close", "utility", "close");

	private boolean active = false;

	public TabItem(String name, TabBody body) {
		super(name, "li");
		this.body = body;
		body.setAttribute("aria-labelledby", getId());
		addChild(title);
		title.setAttribute("aria-controls", body.getId());
		addClass("slds-tabs_default__item");
		addChild(closeButton);
		closeButton.setSvgClass("slds-button__icon");
		closeButton.addClass("tab-close-button");
		closeButton.addEventListener(this, "click");
		title.addEventListener(this, "click");
		setActive(false);
		setClosable(false);
	}

	public TabItem setClosable(boolean b) {
		closeButton.setVisible(b);
		return this;
	}

	public void addTabActionListener(TabActionListener listene) {
		listeners.push(listene);
	}

	public TabItem close() {
		fireClose();
		active = false;
		body.getParent().removeChild(body);
		body.show(false);
		double currentIndex = this.getParent().getChildren().indexOf(this);
		this.getParent().removeChild(this);
		
		this.getParent().setRendered(false);
		body.getParent().setRendered(false);
		
		if(this.getParent().getChildren().length > 0){
			if(currentIndex >= this.getParent().getChildren().length){
				currentIndex = this.getParent().getChildren().length-1;
			}
			TabItem item = (TabItem)this.getParent().getChildren().$get(currentIndex);
			item.setActive(true);
		}

		return this;
	}

	public boolean isActive() {
		return active;
	}

	public void fireClose() {
		for (TabActionListener li : listeners) {
			li.onClose(this);
		}
	}

	public void fireActivate() {
		for (TabActionListener li : listeners) {
			li.onActivate(this);
		}
	}

	public void fireDeActivate() {
		for (TabActionListener li : listeners) {
			li.onDeactivate(this);
		}
	}

	public TabItem setActive(boolean b) {
		active = b;

		if (b) {
			addClass("slds-active");
			title.setAttribute("aria-selected", "true");
			fireActivate();

		} else {
			removeClass("slds-active");
			title.setAttribute("aria-selected", "false");
			fireDeActivate();
		}
		body.show(b);
		return this;
	}

	public TabBody getBody() {
		return body;
	}

	public TabItem setTitle(String title) {
		setAttribute("title", title);
		this.title.setHtml(title);
		return this;
		// <a class="slds-tabs_default__link" href="javascript:void(0);"
		// role="tab" tabindex="0" aria-selected="true"
		// aria-controls="tab-default-1" >

	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		if (source.equals(closeButton)) {

			close();
			return;
		}
		Tabs tabs = source.getAncestorWithClass("slds-tabs_default");
		tabs.setActive(this);
	}

}
