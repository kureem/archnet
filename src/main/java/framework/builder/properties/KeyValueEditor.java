package framework.builder.properties;

import static jsweet.lang.Globals.parseInt;

import framework.EventListener;
import framework.JSContainer;
import framework.design.Designable;
import framework.design.ExtDesignable;
import framework.lightning.Col;
import framework.lightning.Grid;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;
import jsweet.util.function.Consumer;

public abstract class KeyValueEditor extends Grid implements ExtPropertiesEditor, EventListener{
	
	private Col indexCol = new Col("indexCol");
	private Col keyCol = new Col("keyCol");
	private Col valueCol = new Col("valueCol");

	protected Object data = new Object();
	
	protected Designable designable;
	
	protected String tabLabel ="Custom";
	
	public KeyValueEditor(String name) {
		super(name, "div");
		addClass("key-value-editor");
		setWrap(true);
		
		addChild(indexCol.addClass("header"));
		addChild(keyCol.addClass("header"));
		addChild(valueCol.addClass("header"));
		
		keyCol.setSections("12");
		indexCol.setSpan("1");
		keyCol.setSections("12");
		keyCol.setSpan("5");
		valueCol.setSections("12");
		valueCol.setSpan("6");
		
		keyCol.setHtml("Key");
		valueCol.setHtml("Value");
		
		for(int i = 0; i < 11;i++)
			addEmptyRow();
	}
	
	public void setKeyLabel(String label){
		keyCol.setHtml(label);
	}
	
	public void setValueLabel(String label){
		valueCol.setHtml(label);
	}
	
	private void addEmptyRow(){
		double rows = getChildren().length/3;
		
		 
		
		Col index = new Col("index");
		index.setAttribute("index", rows + "");
		index.setSections("12");
		index.setSpan("1");
		//index.setHtml(rows + "");
		index.addClass("header");
		
		Col key = new Col("key");
		key.setAttribute("contentEditable", "true");
		key.setAttribute("index", rows + "");
		
		
		//key.addEventListener(this, "focus");
		
		
		
		Col value = new Col("value");
		value.setAttribute("contentEditable", "true");
		value.setAttribute("index", rows + "");
		
		key.setSections("12");
		key.setSpan("5");
		key.addClass("key");
		key.addEventListener(this, "blur");
		
		value.setSections("12");
		value.setSpan("6");
		value.addClass("value");
		value.addEventListener(this, "blur");
		
		addChild(index).addChild(key).addChild(value);
		
	}
	

	public void save(double index){
		iterate((t)->{
			String key = t[0].getNative().innerHTML;
			String value = t[1].getNative().innerHTML;
			t[0].setHtml(key);
			t[1].setHtml(value);
			t[0].setRendered(true);
			t[1].setRendered(true);
			if(key != null && key.trim().length() > 0)
				data.$set(key, value);
		});
		
		
		applyDataOnDesignable(designable, data);
		//designable.setData(data);
		
	}
	
	public abstract void applyDataOnDesignable(Designable designable, Object data);
	
	public void clearGrid(){
		data = new Object();
		iterate((t)->{
			t[0].setHtml("");
			t[1].setHtml("");
		});
	}
	
	private int index = 0;
	public void setValue(Object o){
		String[] keys = Object.keys(o);
		iterate((t)->{
			if(index < keys.length){
				t[0].setHtml(keys[index]);
				t[1].setHtml((String)o.$get(keys[index]));
			}
		});
	}
	
	public void iterate(Consumer<JSContainer[]> f){
		Array<JSContainer> children = getChildren();
		
		index = 0;
		for(double i = 3; i < children.length;i=i+3){
			f.accept(new JSContainer[]{children.$get(i + 1),children.$get(i + 2)});
			index++;
		}
		
		index = 0;
	}

	@Override
	public void setComponent(Designable designable) {
		this.designable = designable;
		clearGrid();
		data = getDataFromDesignable(designable);
		
		if(data == null){
			data = new Object();
			
		}
		setValue(data);
		setRendered(false);
		
	}
	
	public abstract Object getDataFromDesignable(Designable designable);

	@Override
	public void performAction(JSContainer source, Event evt) {
		double index = parseInt(source.getAttribute("index"));
		save(index-1);
		//source.getNative().contentEditable = "true";
		//source.getNative().focus();
	}
	
	public void setTabLabel(String s){
		this.tabLabel = s;
	}

	
	@Override
	public String getLabel(ExtDesignable me) {
		return tabLabel;
	}

}
