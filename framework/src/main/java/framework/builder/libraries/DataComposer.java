package framework.builder.libraries;

import static def.dom.Globals.prompt;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.DataEnvironment;
import framework.builder.data.DataField;
import framework.builder.data.DataStructure;
import framework.builder.data.File;
import framework.builder.editors.AbstractEditor;
import framework.core.BeanFactory;
import framework.lightning.Button;
import framework.lightning.GlobalHeader;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;

public class DataComposer extends AbstractEditor<String> {
	
	//private JSHTMLFragment fragment = new JSHTMLFragment("card", "#card");
	
	private GlobalHeader header = new GlobalHeader("header");
	
	private Button addNew = new Button();
	
	
	private Array<DataStructure> structures = new Array<DataStructure>();
	
	//private DataEnvironment dataEnvironment;
	
	
	public DataComposer(String name) { 
		super(name, "div");
		
		//dataEnvironment = BeanFactory.getInstance().getBeanOfType(DataEnvironment.class);
		
		addNew.setLabel("Add New");
		header.addChild(addNew);
		addChild(header);
		
		addNew.setState(Button.STATE_BRAND);
		addNew.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				createNewFile();
			}
		}, "click");
		
		
	}

	
	public void createNewFile(){
		String name = prompt("Label of Data structure");
		createNewFile(name);
		
	}
	
	public void createNewFile(String name){
		DataStructure structure = new DataStructure();
		structure.name = name;
		structure.label = name;
		structures.push(structure);
		//dataEnvironment.saveStructure(structure);
		DataItem item = new DataItem(name, structure);
		addChild(item);
	}

	
	
	@Override
	public String getMarshall() {
		return JSON.stringify(structures);
		//return JSON.stringify(dataEnvironment.getDataStructures());
	}


	@Override
	public String createNew(File f) {
		
		//createNewFile(f.getName());
		return getMarshall();
	}


	@Override
	public String unmarshall(File f) {
		String data = f.getData();
		return data;
	}


	@Override
	public void consume(String data) {
		Array<jsweet.lang.Object> odata = (Array<jsweet.lang.Object>)JSON.parse(data);
		if(odata != null && odata.length > 0){
			for(jsweet.lang.Object oline : odata){
				DataStructure st = new DataStructure();
				st.label = oline.$get("label").toString();
				st.name = oline.$get("name").toString();
				Array<jsweet.lang.Object> ofields = (Array<jsweet.lang.Object>)oline.$get("fields");
				if(ofields != null && ofields.length > 0){
					for(jsweet.lang.Object ofield : ofields){
						DataField field = new DataField();
						field.format = (String)ofield.$get("format");
						field.label = (String)ofield.$get("label");
						field.name = (String)ofield.$get("name");
						field.primaryKey = (Boolean)ofield.$get("primaryKey");
						field.type = (String)ofield.$get("type");
						st.fields.push(field);
					}
				}
				structures.push(st);
				DataItem item = new DataItem(st.name, st);
				//dataEnvironment.saveStructure(st);
			}
			
			
			
		}
	}

}
