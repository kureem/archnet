package framework.lightning;

import framework.DndAble;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.lightning.designables.JSDesignableLightningGrid;

public class Panel extends JSDesignableLightningGrid implements Designable,   MouseEventAble,DndAble {



	public Panel(String name) {
		super(name);
		setNoWrap(true).setVertical(true);
		addClass("slds-panel");
	}

	public Panel addSection(PanelSection section) {
		addChild(section);
		return this;
	}

	

	

	@Override
	public void addDesignable(Designable designable) {
		if (designable instanceof PanelSection) {
			addChild((JSContainer) designable);
		} else {
			PanelSection section = (PanelSection)BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory("lgt:panel-section").build(new Component(), false);
			addChild(section);
			section.addChild((JSContainer) designable);
		}
	}

	

}
