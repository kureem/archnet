package framework.builder.editors;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.Builder;
import framework.builder.data.DataSourcesEditor;
import framework.builder.data.File;
import framework.builder.data.RemoteDataListener;
import framework.builder.libraries.DataComposer;
import jsweet.dom.Event;

public class FileTreeItem extends TreeItem implements EventListener {

	private Builder builder;

	private String type;

	private Structure structure;

	private File f;

	public FileTreeItem(File f, String type, Builder builder, Structure structure) {
		super(f.getName(), f.getTitle());
		this.builder = builder;
		this.type = type;
		this.structure = structure;
		this.f = f;
		addIcon("delete", "utility", this);

		//addIcon("copy", "utility", this);
		//addIcon("cut", "utility", this);
		//addIcon("paste", "utility", this);

		setData(f);
		addEventListener(this, "click");
		addClass("file-tree-item");
		addClass("type-" + type);
		if (f.getName().endsWith("html")) {
			setLeftIcon("work_type","standard");
			
		} else if (f.getName().endsWith("css")) {
			setLeftIcon( "topic","standard");
		} else if (f.getName().endsWith("js")) {
			setLeftIcon( "custom_notification","standard");
		} else if (f.getName().endsWith("dat")) {
			setLeftIcon("database","utility" );
			
		}else if(f.getName().endsWith(".cmp")){
			setLeftIcon("custom63", "custom");
		}else if(f.getName().endsWith(".ds")){
			setLeftIcon("custom63", "custom");
		}
		

	}

	public void click(JSContainer source, Event evt) {
		VisualEditor veditor = ((JSContainer) structure.getRootUINode()).getAncestorWithClass("visual-editor");
		File f = (File) source.getData();
		
		if (f.getName().endsWith("html")) {
			HTMLEditor editor = new HTMLEditor(f.getName(),veditor);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		} else if (f.getName().endsWith("css")) {
			CSSEditor editor = new CSSEditor(f.getName(),veditor);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		} else if (f.getName().endsWith("js")) {
			JavascriptEditor editor = new JavascriptEditor(f.getName(),veditor);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		} else if (f.getName().endsWith("dat")) {
			DataComposer editor = new DataComposer(f.getName(),veditor, structure);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		}else if(f.getName().endsWith(".cmp")){
			VisualEditor editor = new VisualEditor(f.getName());
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		}else if(f.getName().endsWith(".ds")){
			
			DataSourcesEditor editor = new DataSourcesEditor(f.getName(),veditor);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		}else if(f.getName().endsWith(".var")){
			
			ContextEditor editor = new ContextEditor(f.getName(),veditor);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		}else{
			DataComposer editor = new DataComposer(f.getName(),veditor, structure);
			builder.openEditor(f.getName(), editor);
			editor.open(f);
		}

	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		evt.stopPropagation();
		if(source.equals(this)){
			click(source,evt);
			return;
		}
		if (source.getName().equals("delete")) {
			String stype = type;
			builder.getProject().deleteFile(f.getName(), stype, new RemoteDataListener<java.lang.Object>() {

				@Override
				public void dataLoaded(Object data) {
					structure.reload();

					structure.getItem(stype).open();
					structure.render();
				}
			});

			builder.getProject().getChild(stype).removeFile(f);
		}
	}

}
