package framework.builder.editors;

import def.codemirror.codemirror.EditorConfiguration;
import jsweet.lang.Object;

public class HTMLEditor extends CodeMirrorEditor {

	public HTMLEditor(String name) {
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
		mode.$set("name", "html");
		//mode.$set("globalVars", true);
		config.mode = mode;

		setConfig(config);

	}

}
