package framework.lightning.designables;

import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import jsweet.lang.Array;
import jsweet.lang.Error;

public class JSDesignableTabItem extends TabItem implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableTabItem(String name) {
		super(name, new JSDesignableTabBody("body"));
		setAttribute("identifier", "lgt:tab-item");
		applyParam("title", "New Tab");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, false);
		if(key.equals("title")){
			setTitle(value);
		}
	}

	@Override
	public Array<Designable> getDesignables() {

		Array res = new Array(body);
		return res;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();

		params.push(new AttributeParameter("title", "Title", "Basic"));

		return params;
	}

	@Override
	public void addDesignable(Designable designable) {

		if (designable instanceof TabBody) {

			JSDesignableTabs tabs = (JSDesignableTabs) getParent();
			tabs.replaceBodyItem((JSDesignableTabBody) body, (JSDesignableTabBody) designable);
			body = (JSDesignableTabBody) designable;

		} else {
			throw new jsweet.lang.Error("There is an internal error that has occured. The part of the app is corrupt since a component of type TabBody is expected");
		}

	}

	@Override
	public void removeDesignable(Designable designable) {
		throw new Error(
				"Cannot remove the body of this Tab Item. You should probably remove the whole Tab Item or remove the content of the body of this Tab Item");
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {

	}

}
