package framework.builder.editors;

import static def.dom.Globals.console;

import framework.JSContainer;
import framework.builder.Builder;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;

public abstract class AbstractEditor<T> extends JSContainer implements Editor<T> {

	protected File file;

	private ProjectService projectService = BeanFactory.getInstance().getBeanOfType(ProjectService.class);

	private VisualEditor rootEditor;
	
	public AbstractEditor(String name, String tag, VisualEditor rootEditor) {
		super(name, tag);
		this.rootEditor = rootEditor;
	}
	
	public void setRootEditor(VisualEditor root){
		this.rootEditor = root;
	}
	
	public Structure getStructure(){
		
		return  rootEditor.getStructure();
	}
	 
	
	public void dirty(){
		TabBody body = getAncestorWithClass("slds-tabs_default__content");
		Tabs tabs = getAncestorWithClass("editor-tabs");
		TabItem item = tabs.getTab(body);
		item.setStyle("color", "red");
		item.render();
		if(getRootEditor() != null && !getRootEditor().getName().equals(this.getName())){
			getRootEditor().dirty();
		}
	}
	
	public void clean(){
		TabBody body = getAncestorWithClass("slds-tabs_default__content");
		Tabs tabs = getAncestorWithClass("editor-tabs");
		TabItem item = tabs.getTab(body);
		
		item.setStyle("color", "#16325c");
		item.render();
	}

	public VisualEditor getRootEditor(){
		return rootEditor;
	}
	
	public abstract String getMarshall();

	public void save() {
		String data = getMarshall();
		file.setData(data);
		projectService.saveFile(file, new RemoteDataListener() {

			@Override
			public void dataLoaded(Object data) {
				
				clean();
				String title = getAttribute("title");
				Builder.websocket.send("open:" + title);

				// alert(JSON.stringify(data));
			}
		});
	}

	public abstract T createNew(File f);

	public abstract T unmarshall(File f);

	public abstract void consume(T data);

	public void open(File f) {
		this.file = f;
		if (file.getData() != null && file.getData().length() > 0) {
			T unmarshaled = unmarshall(file);
			consume(unmarshaled);
		} else {
			consume(createNew(file));
		}
	}

}
