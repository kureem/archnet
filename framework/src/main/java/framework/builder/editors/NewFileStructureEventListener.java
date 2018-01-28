package framework.builder.editors;

import static def.dom.Globals.prompt;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.data.RemoteDataListener;
import jsweet.dom.Event;

public class NewFileStructureEventListener implements EventListener {


	private String type;

	private File file;

	private Structure structure;

	public NewFileStructureEventListener(String type, File file, Structure structure) {
		super();
		this.type = type;
		this.file = file;
		this.structure = structure;
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		String name = prompt("Enter the name");

		if (type.equalsIgnoreCase("stylesheets")) {
			if (!name.endsWith(".css")) {
				name = name + ".css";
			}
		} else if (type.equalsIgnoreCase("scripts")) {

			if (!name.endsWith(".js")) {
				name = name + ".js";
			}

		} else if (type.equalsIgnoreCase("templates")) {
			if (!name.endsWith(".html")) {
				name = name + ".html";
			}
		} else if (type.equalsIgnoreCase("data")) {
			if (!name.endsWith(".dat")) {
				name = name + ".dat";
			}
		} else if (type.equalsIgnoreCase("components")) {
			if (!name.endsWith(".cmp")) {
				name = name + ".cmp";
			}
		} else if (type.equalsIgnoreCase("datasources")) {
			if (!name.endsWith(".ds")) {
				name = name + ".ds";
			}
		}else if (type.equalsIgnoreCase("variables")) {
			if (!name.endsWith(".var")) {
				name = name + ".var";
			}
		}

		// File project = builder.getProject();
		file.createFile(name, type, new RemoteDataListener<Object>() {

			@Override
			public void dataLoaded(Object data) {

				structure.reload(type);
				structure.render();

			}
		});

	}

}
