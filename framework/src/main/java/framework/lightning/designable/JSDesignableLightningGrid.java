package framework.lightning.designable;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.Grid;
import jsweet.lang.Array;

public class JSDesignableLightningGrid extends Grid implements Designable{

	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public JSDesignableLightningGrid(String name) {
		super(name, "div");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		boolean b = "true".equals(value);
		
		
		if(key.equals("align")){
			super.setAlignCenter(value.equals("alignCenter"));
			super.setAlignEnd(value.equals("alignEnd"));
			super.setAlignSpace(value.equals("alignSpace"));
			super.setAlignSpread(value.equals("alignSpread"));
			super.setReverse(value.equals("reverse"));
		}
		
		if(key.equals("frame"))
			super.setFrame(b);
		
		if(key.equals("pullPaddedSize"))
			super.setPullPaddedSize(value);
		
		if(key.equals("absoluteCenter"))
			super.setAbsoluteCenter(b);
		
		if(key.equals("borderBottom"))
			super.setBorderBottom(b);
		
		if(key.equals("borderLeft"))
			super.setBorderLeft(b);
		
		if(key.equals("borderRight"))
			super.setBorderRight(b);
		
		if(key.equals("borderTop"))
			super.setBorderTop(b);
		
		if(key.equals("float"))
			super.setFloat(value);
		
		if(key.equals("grow"))
			super.setGrow(b);
		
		
		
		if(key.equals("scrollableX"))
			super.setScrollableX(b);
		
		if(key.equals("scrollableY"))
			super.setScrollableY(b);
		
		if(key.equals("vertical"))
			super.setVertical(b);
		
		if(key.equals("valign")){
			super.setVerticalAlignCenter(value.equals("verticalAlignCenter"));
		
			super.setVerticalAlignEnd(value.equals("verticalAlignEnd"));
		
			super.setVerticalAlignStart(value.equals("verticalAlignStart"));
		
			super.setVerticalReverse(value.equals("verticalReverse"));
		
			super.setVerticalStretch(value.equals("verticalStretch"));
		}
		if(key.equals("wrap"))
			super.setWrap(b);
		
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Array<Designable> getDesignables() {
		Array children = getChildren();
		return children;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		
		AttributeParameter align = new AttributeParameter("align", "Align", "Advanced");
		align.options.push(new Option("None", "alignNone"));
		align.options.push(new Option("Center", "alignCenter"));
		align.options.push(new Option("End", "alignEnd"));
		align.options.push(new Option("Space", "alignSpace"));
		align.options.push(new Option("Spread", "alignSpread"));
		align.options.push(new Option("Reverse", "reverse"));
		parameters.push(align);
		
//		AttributeParameter vertical = new AttributeParameter("vertical", "Vertical", "Advanced");
//		parameters.push(vertical);
		
		AttributeParameter valign = new AttributeParameter("valign", "Vertical Align", "Advanced");
		valign.options.push(new Option("None", "alignNone"));
		valign.options.push(new Option("Center", "verticalAlignCenter"));
		valign.options.push(new Option("End", "verticalAlignEnd"));
		valign.options.push(new Option("Start", "verticalAlignStart"));
		valign.options.push(new Option("Stretch", "verticalAlignStretch"));
		valign.options.push(new Option("Reverse", "verticalReverse"));
		parameters.push(valign);
		
		
		
		String[] labels = new String[]{
				
				"Frame",
				"Absolute Center",
				"Border Bottom",
				"Border Left",
				"Border Right",
				"Border Top",
				"Grow",
				"Scrollable X",
				"Scrollable Y",
				"Wrap",
		};
		
		String[] keys = new String[]{
				"frame",
				"absoluteCenter",
				"borderBottom",
				"borderLeft",
				"borderRight",
				"borderTop",
				"grow",
				"scrollableX",
				"scrollableY",
				"wrap",	
		};
		for(int i = 0; i < labels.length; i++){
			boolean basic = labels[i].startsWith("Border") || labels[i].startsWith("Scrollable");
			AttributeParameter parameter = new AttributeParameter(keys[i], labels[i], basic?"Basic":"Advanced");
			parameters.push(parameter);
		}
		
		
		
		AttributeParameter pullPaddedSize = new AttributeParameter("pullPaddedSize", "Pull Padded Size", "Advanced");
		pullPaddedSize.options.push(new Option("None", Grid.PULL_PADDED_NONE));
		pullPaddedSize.options.push(new Option("XX Large", Grid.PULL_PADDED_XX_LARGE));
		pullPaddedSize.options.push(new Option("X Large", Grid.PULL_PADDED_X_LARGE));
		pullPaddedSize.options.push(new Option("Large", Grid.PULL_PADDED_LARGE));
		pullPaddedSize.options.push(new Option("Medium", Grid.PULL_PADDED_MEDIUM));
		pullPaddedSize.options.push(new Option("Small", Grid.PULL_PADDED_SMALL));
		pullPaddedSize.options.push(new Option("X Small", Grid.PULL_PADDED_X_SMALL));
		pullPaddedSize.options.push(new Option("XX Small", Grid.PULL_PADDED_XX_SMALL));
		pullPaddedSize.options.push(new Option("XXX Small", Grid.PULL_PADDED_XXX_SMALL));
		
		parameters.push(pullPaddedSize);
		
		AttributeParameter flt = new AttributeParameter("float", "Float", "Advanced");
		flt.options.push(new Option("None", Grid.FLOAT_NONE));
		flt.options.push(new Option("Left", Grid.FLOAT_LEFT));
		flt.options.push(new Option("Right", Grid.FLOAT_RIGHT));
		parameters.push(flt);
		
		
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		addChild((JSContainer)designable);
		
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
