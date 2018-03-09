package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.TagParameter;
import framework.design.TextParameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Text extends JSContainer implements Designable{
	
	
	
	
	private final static String LINK_NONE="none";
	private final static String LINK_RESET="slds-text-link_reset";
	private final static String LINK="slds-text-link";
	private final static String LINK_FAUX="slds-text-link_faux";
	
	private final static String NONE="none";
	private final static String BODY_REGULAR="slds-text-body_regular";
	private final static String BODY_SMALL="slds-text-body_small";
	private final static String HEADING_LARGE="slds-text-heading_large";
	private final static String HEADING_MEDIUM="slds-text-heading_medium";
	private final static String HEADING_SMALL="slds-text-heading_small";
	private final static String TITLE="slds-text-title";
	private final static String TILE_CAPS="slds-text-title_caps";
	
	private final static String COLOR_NONE="none";
	private final static String COLOR_DEFAULT="slds-text-color_default";
	private final static String COLOR_WEAK="slds-text-color_weak";
	private final static String COLOR_ERROR="slds-text-color_error";
	private final static String COLOR_SUCCESS="slds-text-color_success";
	private final static String COLOR_INVERSE_DEFAULT="slds-text-color_inverse";
	private final static String COLOR_INVERSE_WEAK="slds-text-color_inverse-weak";
	
	private final static String ALIGN_NONE="none";
	private final static String ALIGN_LEFT="slds-text-align_left";
	private final static String ALIGN_CENTER="slds-text-align_center";
	private final static String ALIGN_RIGHT="slds-text-align_right";
	
	private final static String LONG_FORM="slds-text-longform";
	
	
	private final static String[] TEXT_TYPES = new  String[]{
		NONE,BODY_REGULAR,BODY_SMALL,HEADING_LARGE,HEADING_MEDIUM,HEADING_SMALL,TITLE,TILE_CAPS
	};
	
	private final static String[] TEXT_TYPES_LABELS = new String[]{
			"None",  "Body Regular", "Body Small", "Heading Large", "Heading Medium", "Heading Small", "Title", "Title Caps"
	};
	
	private final static String[] COLORS = new String[]{
			COLOR_NONE,COLOR_DEFAULT,COLOR_WEAK,COLOR_ERROR,COLOR_SUCCESS,COLOR_INVERSE_DEFAULT,COLOR_INVERSE_WEAK
	};
	
	private final static String[] COLORS_LABELS = new String[]{
			"None", "Default", "Weak", "Error", "Success", "Inverse Default", "Inverse Inverse Weak"
	};
	
	private final static String[] ALIGNS = new String[]{
			ALIGN_NONE,ALIGN_LEFT,ALIGN_CENTER,ALIGN_RIGHT
	};
	
	private final static String [] ALIGNS_LABELS = new String[]{
			"None", "Align Left", "Align Center", "Align Right"
	};
	
	private final static String[] DECORATIONS = new String[]{
			LINK_NONE,LINK,LINK_RESET,LINK_FAUX
	};
	
	private final static String[] DECORATIONS_LABELS = new String[]{
			"None","Link", "Link Reset", "Link Faux"
	};
	
	private final static Object textTags = new Object();
	static {
		textTags.$set("h1", "Heading 1");
		textTags.$set("h2", "Heading 2");
		textTags.$set("h3", "Heading 3");
		textTags.$set("h4", "Heading 4");
		textTags.$set("h5", "Heading 5");
		textTags.$set("label", "Label");
		textTags.$set("paragraph", "Paragraph");
		textTags.$set("span", "Span");

	}
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public Text(String name, String tag) {
		super(name, tag);
	}
	
	
	public Text setAlign(String align){
		for(String s : ALIGNS){
			removeClass(s);
		}
		addClass(align);
		return this;
	}
	
	public Text setTextType(String type){
		for(String s : TEXT_TYPES){
			removeClass(s);
		}
		addClass(type);
		return this;
	}
	
	
	public Text setColor(String color){
		for(String s : COLORS){
			removeClass(s);
		}
		addClass(color);
		return this;
	}
	
	
	public Text setDecoration(String decoration){
		for(String s : DECORATIONS){
			removeClass(s);
		}
		addClass(decoration);
		return this;
	}
	
	
	public Text setLongForm(boolean b){
		toggleClass(LONG_FORM, b);
		return this;
	}
	
	private Text toggleClass(String cls, boolean b){
		if(b){
			this.addClass(cls);
		}else{
			this.removeClass(cls);
		}
		return this;
	}

	public Text setTruncate(boolean b){
		return toggleClass("slds-truncate", b);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("textColor")){
			setColor(value);
		}else if(key.equals("textAlign")){
			setAlign(value);
		}else if(key.equals("textDecoration")){
			setDecoration(value);
		}else if(key.equals("textType")){
			setTextType(value);
		}else if(key.equals("longForm")){
			setLongForm("true".equals(value));
		}else if(key.equals("truncate")){
			setTruncate(key.equals("true"));
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
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
		Array<Parameter> params = delegate.getParameters();
		
		TagParameter tagParam = new TagParameter();
		for (String key : Object.keys(textTags)) {
			tagParam.options.push(new Option((String)textTags.$get(key), key));
		}

//		params.push(tagParam);
		
		
		TextParameter textParam = new TextParameter("text", "Text", "Basic");
		
		AttributeParameter decorations = new AttributeParameter("textDecoration", "Decoration", "Advanced");
		for(int i = 0; i < DECORATIONS.length;i++){
			decorations.options.push(new Option(DECORATIONS_LABELS[i], DECORATIONS[i]));
		}
		
		AttributeParameter types = new AttributeParameter("textType", "Text Type", "Advanced");
		for(int i = 0; i < TEXT_TYPES.length;i++){
			types.options.push(new Option(TEXT_TYPES_LABELS[i], TEXT_TYPES[i]));
		}
		
		
		AttributeParameter colors = new AttributeParameter("textColor", "Color", "Advanced");
		for(int i = 0; i < COLORS.length;i++){
			colors.options.push(new Option(COLORS_LABELS[i], COLORS[i]));
		}
		
		AttributeParameter aligns = new AttributeParameter("textAlign", "Align", "Advanced");
		for(int i = 0; i < ALIGNS.length;i++){
			aligns.options.push(new Option(ALIGNS_LABELS[i], ALIGNS[i]));
		}
		
		
		AttributeParameter longForm = new AttributeParameter("longForm", "Long Form", "Advanced");
		longForm.options.push(new Option("",""));
		AttributeParameter truncate = new AttributeParameter("truncate", "Truncate", "Basic");
		truncate.options.push(new Option("",""));
		params.push(tagParam,textParam,truncate,decorations,types,colors,aligns, longForm);
		
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		addChild((JSContainer)designable);
	}

	@Override
	public void removeDesignable(Designable designable) {
		removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
	
	
	
	
}
