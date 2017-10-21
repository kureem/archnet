package framework.builder.editors;

import def.codemirror.codemirror.Editor;
import def.codemirror.codemirror.EditorConfiguration;
import framework.JSContainer;
import framework.JSTextArea;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;

public class CodeMirrorEditor extends JSTextArea implements Renderer<CodeMirrorEditor> , framework.builder.editors.Editor<String>{

	Editor editor = null;

	private EditorConfiguration config;
	
	private File file = null;
	
	private String value = "";

	public CodeMirrorEditor(String name) {
		super(name);
		addRenderer(this);
	}

	public void setConfig(EditorConfiguration config) {
		this.config = config;
	}

	@Override
	public void doRender(CodeMirrorEditor c, HTMLElement root) {
		this.value = value==null?"":value;
		if (editor == null) {
			editor = def.codemirror.Globals.CodeMirror(root, config);
			//setStyle("display", "none");
			editor.setValue(value);
		}
	}
	
	public void destroy(){
		if(editor != null){
			editor = null;
		}
	}
	
	public Editor getEditor(){
		return editor;
	}
	
	@Override
	public void save(){
		String data = editor.getValue();
		file.setData(data);
		BeanFactory.getInstance().getBeanOfType(ProjectService.class).saveFile(file, new RemoteDataListener() {
			
			@Override
			public void dataLoaded(java.lang.Object data) {
				// TODO Auto-generated method stub
				
			}
		});
	}

	
	
	
	
	@Override
	public JSContainer setRendered(boolean b) {
		// TODO Auto-generated method stub
		
		if(!b){
			destroy();
		}
		return super.setRendered(b);
	}

	@Override
	public void open(File f) {
		// TODO Auto-generated method stub
		this.file = f;
		this.value = f.getData();
		setRendered(false);
		/*if(file.getData() != null && file.getData().length() > 0){
			editor.setValue(file.getData());
		}else{
			editor.setValue("");
			//consume(createNew(file));
		}*/
	}

}
