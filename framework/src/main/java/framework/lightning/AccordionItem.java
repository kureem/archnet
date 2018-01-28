package framework.lightning;

import static def.jquery.Globals.$;

import java.util.function.Function;

import def.jquery.JQueryEventObject;
import framework.JSContainer;
import framework.JSHTMLFragment;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.designables.JSDesignable;
import jsweet.dom.HTMLElement;
import jsweet.lang.Array;

public class AccordionItem extends JSHTMLFragment implements Designable {

	private JSContainer accordionContent = (JSDesignable) new JSContainer("accordionContent", "div")
			.addClass("slds-accordion__content");

	private DesignableDelegate delegate = new DesignableDelegate(this);

	private boolean configured = false;

	public AccordionItem(String name, String title) {
		super(name, "#accordionSection");
		addChild(accordionContent);

		getContext().$set("openClass", "");
		getContext().$set("iconType", "utility");
		getContext().$set("iconsLocation", "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons");
		getContext().$set("iconName", "switch");
		getContext().$set("title", title);
	}

	public void open() {
		getContext().$set("openClass", "slds-is-open");
	}

	public void close() {
		getContext().$set("openClass", "");
	}

	public void setTitle(String title) {
		getContext().$set("title", title);
	}

	public void setIcon(String iconType, String iconName) {
		getContext().$set("iconType", "utility");
		getContext().$set("iconName", "switch");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);

		if(key.equals("title")){
			setTitle(value);
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Array<Designable> getDesignables() {
		Array l = accordionContent.getChildren();
		return l;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		AttributeParameter title = new AttributeParameter("title", "Title", "Basic");
		parameters.push(title);
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		accordionContent.addChild((JSContainer)designable);
	}

	public JSContainer getContent() {
		return accordionContent;
	}

	@Override
	public void render(HTMLElement parent) {
		super.render(parent);
		if (!configured) {
			$("#" + getId() + " .slds-accordion__summary").click(new Function<JQueryEventObject, Object>() {

				@Override
				public Object apply(JQueryEventObject t) {
					String cls = getContext().$get("openClass").toString();
					if (cls.length() > 0) {
						close();
					} else {
						open();
					}
					configured = false;
					setRendered(false);
					render();
					return null;
				}
			});
		}

		

		configured = true;

	}
	
	

	@Override
	public JSContainer setRendered(boolean b) {
		 super.setRendered(b);
		if(!b){
			configured = false;
		}
		
		return this;
	}

	@Override
	public void removeDesignable(Designable designable) {
	//	JSContainer parent = (JSContainer)designable.getParent();
		//parent.removeChild(designable);
		//delegate.removeDesignable(designable);
		
		accordionContent.removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(accordionContent, steps);
	}

}
