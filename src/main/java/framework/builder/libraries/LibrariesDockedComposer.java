package framework.builder.libraries;

import framework.builder.Component;
import framework.builder.ComponentsTabs;
import framework.design.Designable;
import framework.lightning.DockedComposer;

public class LibrariesDockedComposer extends DockedComposer {

	private BasicComponentLibrary basicComponentLib = new BasicComponentLibrary();
	private LightningComponentLibrary lightningComponentLib = new LightningComponentLibrary();
	private LightningContainerComponentLibrary containerComponentLib = new LightningContainerComponentLibrary();

	private CustomComponentsLibrary customComponents = new CustomComponentsLibrary("custom");
	
	
	private ComponentsTabs componentsTabs = new ComponentsTabs("componentsTabs");

	public LibrariesDockedComposer(String name) {
		super(name);
		addClass("library-composer");
		getTitle().setHtml("Components Library");
		getBody().addChild(componentsTabs);
		componentsTabs.addItem("Basic", basicComponentLib);
		componentsTabs.addItem("Lightning", lightningComponentLib);
		componentsTabs.addItem("Containers",containerComponentLib);
		componentsTabs.addItem("Custom", customComponents);
		componentsTabs.getItems().$get(0).setActive(true);

	}
	
	
	public void refreshWithProject(Designable des){
		jsweet.lang.Object customs =  des.getComponent().custom;
		customComponents.clearComponent();
		for(String s : jsweet.lang.Object.keys(customs)){
			customComponents.addComponents(new Component("html:cmp", (String)customs.$get(s), s));
		}
	}

}
