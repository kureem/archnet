package framework.designables;

import static def.dom.Globals.alert;

import java.util.LinkedList;
import java.util.List;

import def.dom.Event;
import def.jqueryui.jqueryui.DroppableEvent;
import def.jqueryui.jqueryui.DroppableEventUIParam;
import def.jqueryui.jqueryui.DroppableOptions;
import framework.JSContainer;
import framework.builder.editors.Structure;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.core.BeanFactory;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.NameParameter;
import framework.design.Parameter;

public class DesignableDelegate {

	private Designable ui;

	private Component component = new Component();


	public DesignableDelegate(Designable ui) {
		super();
		this.ui = ui;
	}

	public Designable getDesignable() {
		return ui;
	}

	public void setParameter(String key, String value, boolean designMode) {
		component.parameters.$set(key, value);
	}

	public Component getComponent() {
		return component;
	}

	public List<Parameter> getParameters() {
		List<Parameter> params = new LinkedList<>();
		params.add(new NameParameter("Name", "Basic"));
		params.add(new AttributeParameter("class", "Style class", "Basic"));
		return params;
	}

	public static void setDroppableOptions(Designable instance, boolean designMode) {
		if (designMode) {
			//instance.addClass("designing");
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
						instance.addDesignable(container);
					} catch (Exception e) {
						alert(e.getMessage());
					}
					container.render();

					BeanFactory.getInstance().getBeanOfType(Structure.class).reload();
					BeanFactory.getInstance().getBeanOfType(Structure.class).render();
					// container.getRoot().get

				}
			};
			((JSContainer) instance).setDroppableOptions(options);
		}
	}

}
