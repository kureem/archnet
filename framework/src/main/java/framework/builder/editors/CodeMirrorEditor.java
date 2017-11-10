package framework.builder.editors;

import static def.dom.Globals.console;

import java.util.function.Consumer;

import def.codemirror.codemirror.Editor;
import def.codemirror.codemirror.EditorConfiguration;
import framework.JSContainer;
import framework.JSTextArea;
import framework.builder.Builder;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import framework.lightning.TabBody;
import framework.lightning.TabItem;
import framework.lightning.Tabs;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;

public class CodeMirrorEditor extends JSTextArea
		implements Renderer<CodeMirrorEditor>, framework.builder.editors.Editor<String> {

	Editor editor = null;

	private EditorConfiguration config;

	private File file = null;

	private String value = "";

	private VisualEditor rootEditor;

	public CodeMirrorEditor(String name, VisualEditor rootEditor) {
		super(name);
		this.rootEditor = rootEditor;
		addRenderer(this);
		setStyle("position", "absolute");
	}

	public void setRootEditor(VisualEditor editor) {
		this.rootEditor = editor;
	}

	public void setConfig(EditorConfiguration config) {
		this.config = config;
	}

	@Override
	public void doRender(CodeMirrorEditor c, HTMLElement root) {
		this.value = value == null ? "" : value;
		if (editor == null) {
			editor = def.codemirror.Globals.CodeMirror(root, config);
			editor.setValue(value);
			editor.on("change", new Consumer<Editor>() {

				@Override
				public void accept(Editor t) {
					dirty();
				}
			});
		}
	}

	public void setValue(String s) {
		this.value = s;
	}

	public void destroy() {
		if (editor != null) {
			editor = null;
		}
	}

	public Editor getEditor() {
		return editor;
	}

	@Override
	public void save() {
		if (editor == null) {
			return;
		}
		String data = editor.getValue();
		this.value = data;
		file.setData(data);
		BeanFactory.getInstance().getBeanOfType(ProjectService.class).saveFile(file, new RemoteDataListener() {

			@Override
			public void dataLoaded(java.lang.Object data) {
				clean();
				String title = getAttribute("title");
				Builder.websocket.send("open:" + title);
			}
		});
	}

	@Override
	public JSContainer setRendered(boolean b) {
		if (!b) {
			destroy();
		}
		return super.setRendered(b);
	}

	@Override
	public void open(File f) {
		this.file = f;
		this.value = f.getData();
		setRendered(false);
	}

	@Override 
	public Structure getStructure() {
		return rootEditor.getStructure();
	}

	@Override
	public VisualEditor getRootEditor() {
		return rootEditor;
	}

	@Override
	public void dirty() {
		
		TabBody body = getAncestorWithClass("slds-tabs_default__content");
		Tabs tabs = getAncestorWithClass("editor-tabs");
		TabItem item = tabs.getTab(body);
		item.setStyle("color", "red");
		item.render();
		
		if(getRootEditor() != null){
			getRootEditor().dirty();
		}
	}

	@Override
	public void clean() {
		TabBody body = getAncestorWithClass("slds-tabs_default__content");
		Tabs tabs = getAncestorWithClass("editor-tabs");
		TabItem item = tabs.getTab(body);
		item.setStyle("color", "#16325c");
		item.render();
	}

}
