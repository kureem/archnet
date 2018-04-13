package framework.lightning.table;


import static jsweet.dom.Globals.document;

import def.handsontable.Handsontable;
import def.handsontable.ht.Options;
import framework.JSContainer;
import framework.renderer.Renderer;

public class ExcelTable extends JSContainer implements Renderer<ExcelTable>{

	@SuppressWarnings("unused")
	private Handsontable table;
	
	private Options opt;
	
	public ExcelTable(String name) {
		super(name,"div");
		addClass("ExcelTable");
		addRenderer(this);
		
	}
	
	public void setOptions(Options options){
		this.opt = options;
	}

	@Override
	public void doRender(ExcelTable c, jsweet.dom.HTMLElement root) {
		if(!isRendered()){
			jsweet.dom.HTMLElement  element = document.getElementById(c.getId());
			if(opt == null){
				opt = new Options() {
				};
			}
			table = new Handsontable(element, opt);
	
		}
	}

}
