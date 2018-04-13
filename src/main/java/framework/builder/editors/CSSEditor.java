package framework.builder.editors;

import def.codemirror.codemirror.Editor;
import def.codemirror.codemirror.EditorConfiguration;
import jsweet.lang.Object;

public class CSSEditor extends CodeMirrorEditor {

	Editor editor = null;

	public CSSEditor(String name, VisualEditor editor) {
		super(name,editor);

		EditorConfiguration config = new EditorConfiguration() {
		};

		config.autofocus = true;
		config.lineNumbers = true;
		Object keys = new Object();
		keys.$set("Ctrl-Space", "autocomplete"); 
		config.extraKeys = keys;
		config.mode = "text/css";

		setConfig(config);
	}

}
