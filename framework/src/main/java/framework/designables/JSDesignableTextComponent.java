package framework.designables;

import framework.util.HashMap;
import framework.util.Map;

import framework.JSContainer;
import framework.TextComponent;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.TagParameter;
import framework.design.TextParameter;
import jsweet.lang.Array;

public class JSDesignableTextComponent extends TextComponent implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	private final static Map<String, String> textTags = new HashMap<>();

	static {
		textTags.put("h1", "Heading 1");
		textTags.put("h2", "Heading 2");
		textTags.put("h3", "Heading 3");
		textTags.put("h4", "Heading 4");
		textTags.put("h5", "Heading 5");
		textTags.put("label", "Label");
		textTags.put("paragraph", "Paragraph");
		textTags.put("span", "Span");

	}

	public JSDesignableTextComponent(String name, String tag) {
		super(name, tag);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Array<Designable> getDesignables() {
		Array l = getChildren();
		return l;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();
		TextParameter textParam = new TextParameter("text", "Text", "Basic");
		TagParameter tagParam = new TagParameter();
		for (String key : textTags.keySet()) {
			tagParam.options.push(new Option(textTags.get(key), key));
		}

		params.push(tagParam);
		params.push(textParam);
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {

		addChild((JSContainer) designable);

	}

	@Override
	public void removeDesignable(Designable designable) {

		delegate.removeDesignable(designable);

	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}

}
