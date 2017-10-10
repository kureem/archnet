package framework.builder.editors;

import static def.dom.Globals.alert;

import def.dom.Event;
import def.jqueryui.jqueryui.DroppableEvent;
import def.jqueryui.jqueryui.DroppableEventUIParam;
import def.jqueryui.jqueryui.DroppableOptions;
import framework.TreeItem;
import framework.builder.Selector;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.designables.DesignableDelegate;

public class StructureTreeItem extends TreeItem{

	private Designable designable;
	
	public StructureTreeItem(String name,Designable designable) {
		super(name, designable.getName());
		this.designable = designable;
		DesignableDelegate.setDroppableOptions(designable, true);
		
		DroppableOptions options = new DroppableOptions() {
		};
		options.greedy = true;
		options.accept = ".designer-component";
		options.tolerance = "pointer";

		options.activeClass ="drop-active";
		
		options.drop = new DroppableEvent() {

			@Override
			public void $apply(Event event, DroppableEventUIParam param) {
				event.stopPropagation();

				String identifier = event.srcElement.getAttribute("identifier");
				ComponentFactory factory = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
						.getComponentFactory(identifier);
				Designable container = factory.build(new Component(), true);
				try {
					designable.addDesignable(container);
				} catch (Exception e) {
					alert(e.getMessage());
				}
				container.render();

				BeanFactory.getInstance().getBeanOfType(Structure.class).reload();
				BeanFactory.getInstance().getBeanOfType(Structure.class).render();
				// container.getRoot().get

			}
		};
		setDroppableOptions(options);

	}
	
	
	public Designable getDesignable(){
		return designable;
	}

	@Override
	public void select(boolean b) {
		// TODO Auto-generated method stub
		super.select(b);
		
		BeanFactory.getInstance().getBeanOfType(Selector.class).select(designable);
	}
	
	
	

}
