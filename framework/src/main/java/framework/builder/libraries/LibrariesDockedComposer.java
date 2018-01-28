package framework.builder.libraries;

import framework.builder.ComponentsTabs;
import framework.lightning.DockedComposer;

public class LibrariesDockedComposer extends DockedComposer {

	private BasicComponentLibrary basicComponentLib = new BasicComponentLibrary();
	private LightningComponentLibrary lightningComponentLib = new LightningComponentLibrary();

	private ComponentsTabs componentsTabs = new ComponentsTabs("componentsTabs");

	public LibrariesDockedComposer(String name) {
		super(name);
addClass("library-composer");
		getTitle().setHtml("Components Library");
		getBody().addChild(componentsTabs);
		componentsTabs.addItem("Basic", basicComponentLib);
		componentsTabs.addItem("Lightning", lightningComponentLib);
		componentsTabs.getItems().$get(0).setActive(true);

	}

}
