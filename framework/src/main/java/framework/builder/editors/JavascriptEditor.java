package framework.builder.editors;

import def.codemirror.codemirror.Editor;
import def.codemirror.codemirror.EditorConfiguration;
import jsweet.lang.Object;

public class JavascriptEditor extends CodeMirrorEditor {

	Editor editor = null;

	public JavascriptEditor(String name) {
		super(name);

		EditorConfiguration config = new EditorConfiguration() {
		};

		config.autofocus = true;
		config.lineNumbers = true;

		Object keys = new Object();
		keys.$set("Ctrl-Space", "autocomplete");
		config.extraKeys = keys;// JSON.parse("{\"Ctrl-Space\":
								// \"autocomplete\"}");

		Object mode = new Object();
		mode.$set("name", "javascript");
		mode.$set("globalVars", true);
		config.mode = mode;

		setConfig(config);

	}

}
