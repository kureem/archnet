package framework.builder.editors;

import static def.dom.Globals.prompt;
import static jsweet.dom.Globals.alert;

import def.js.JSON;
import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import framework.salesforce.ObjectListSelectModal;
import jsweet.dom.Event;

public class NewFileStructureEventListener implements EventListener {

	private String type;

	private File file;

	private Structure structure;

	private ObjectListSelectModal importTypes = null;

	public NewFileStructureEventListener(String type, File file, Structure structure) {
		super();
		this.type = type;
		this.file = file;
		this.structure = structure;

	}

	@Override
	public void performAction(JSContainer source, Event evt) {

		if (type.equalsIgnoreCase("types")) {
			importTypes();
			return;
		}

		String name = prompt("Enter the name");

		if (name != null && name.trim().length() > 0) {
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
			} else if (type.equalsIgnoreCase("variables")) {
				if (!name.endsWith(".var")) {
					name = name + ".var";
				}
			}
			
			

			// File project = builder.getProject();
			file.createFile(source, name, type, new RemoteDataListener<Object>() {

				@Override
				public void dataLoaded(Object data) {

					structure.reload(type);
					structure.render();

				}
			});
		}

	}

	private void importTypes() {
		VisualEditor editor = structure.getAncestorWithClass("visual-editor");
		if (editor.getChild("importTypes") == null) {
			importTypes =new ObjectListSelectModal("importTypes",
					"Select Object Types to work with");
			importTypes.addEventListener(new EventListener() {

				@Override
				public void performAction(JSContainer source, Event evt) {

					File types = file.getChild("types");
					types.setData(JSON.stringify(evt.$get("data")));
					
					BeanFactory.getInstance().getBeanOfType(ProjectService.class).saveFile(source, types, new RemoteDataListener<Object>() {

						@Override
						public void dataLoaded(Object data) {
							structure.reload(type);
							structure.render();
							
						}
					});
					
					alert(JSON.stringify(evt.$get("data")));
				}
			}, "selectItems");
			;
			editor.addChild(importTypes);
		}

		importTypes.open();
		// importTypes
	}

}
