package framework.builder.editors;

import def.codemirror.codemirror.Editor;
import def.codemirror.codemirror.EditorConfiguration;
import framework.JSTextArea;
import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;

public class CodeMirrorEditor extends JSTextArea implements Renderer<CodeMirrorEditor> {

	Editor editor = null;

	private EditorConfiguration config;

	public CodeMirrorEditor(String name) {
		super(name);
		addRenderer(this);
	}

	public void setConfig(EditorConfiguration config) {
		this.config = config;
	}

	@Override
	public void doRender(CodeMirrorEditor c, HTMLElement root) {
		if (editor == null) {
			editor = def.codemirror.Globals.CodeMirror(root, config);
			setStyle("display", "none");
		}
	}

}
