package framework.builder.editors;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;

public class TypeTreeItem extends TreeItem implements EventListener{
	jsweet.lang.Object dataType = new jsweet.lang.Object();

	private Structure structure;
	private File types; 
	
	
	public TypeTreeItem(File types ,jsweet.lang.Object dataType, Structure structure) {
		super((String)dataType.$get("name"), (String)dataType.$get("label"));
		this.dataType = dataType;
		this.types = types;
		this.structure = structure;
		addEventListener(this, "click");
	}
	
	
	public void click(JSContainer source, Event evt) {
		VisualEditor veditor = source.getAncestorWithClass("visual-editor");
		veditor.showFields(getName());

	}
	
	public void deleteMe(){
		@SuppressWarnings("unchecked")
		Array<jsweet.lang.Object> tys = (Array<jsweet.lang.Object>)JSON.parse(types.getData());
		Array<jsweet.lang.Object> res = new Array<jsweet.lang.Object>();
		for(jsweet.lang.Object o : tys){
			if(o.$get("name").equals(dataType.$get("name"))){
			}else{
				res.push(o);
			}
		}
		types.setData(JSON.stringify(res));
		BeanFactory.getInstance().getBeanOfType(ProjectService.class).saveFile(this, types, new RemoteDataListener<Object>() {

			@Override
			public void dataLoaded(Object data) {
				structure.reload("types");
				structure.render();
				
			}
		});
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		evt.stopPropagation();
		if(source.equals(this)){
			click(source,evt);
			return;
		}
		if (source.getName().equals("delete")) {
			//evt.$set("data", dataType);
			//fireListener("delete", evt);
			deleteMe();
		}
	}

}
