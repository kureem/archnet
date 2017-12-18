package framework.lightning.table;

import def.js.Math;
import framework.EventListener;
import framework.JSContainer;
import framework.lightning.Button;
import framework.lightning.ButtonGroup;
import framework.lightning.IconButton;
import jsweet.dom.Event;

public class Paginator extends JSContainer implements EventListener{

	//private IconButton first = new IconButton("first");
	
	private IconButton previous = new IconButton("previous");
	
	//private IconButton last = new IconButton("last");
	
	public IconButton next = new IconButton("next");
	
	
	private JSContainer pages = new JSContainer("pages").addClass("pages");
	
	private double numPages;
	
	private Table  table;
	
	double maxItem = 8;
	
	public Paginator(String name) {
		super(name,"div");
		setVisible(false);
		addClass("table-paginator");
		ButtonGroup leftGrp  = new ButtonGroup("leftGrp");
		previous.getIcon().setIconName("left");
		previous.getIcon().setType("utility");
		
		next.getIcon().setIconName("right");
		next.getIcon().setType("utility");
		
		
		
		leftGrp.addButton(previous.setBorder(true)).addChild(pages);
		leftGrp.addButton(next.setBorder(true));
		addChild(leftGrp);
		
		previous.addEventListener(this, "click");
		next.addEventListener(this, "click");
	}
	
	
	public void setTable(Table table){
		this.table = table;
		pages.getChildren().clear();
		pages.setRendered(false);
		int pageSize = table.getPageSize();
		
		TableModel model = table.getModel();
		
		numPages = Math.round(model.getRowCount()/pageSize);
		if(numPages <=1){
			setVisible(false);
			return;
		}
		setVisible(true);
		
		
		if(numPages < maxItem){
			maxItem = numPages;
		}
		
		for(double i = 0; i < numPages;i++){
			Button btn = new Button(i + "");
			btn.addEventListener(this, "click");
			btn.setState(Button.STATE_NEUTRAL);
			btn.setLabel((i+1) + "");
			pages.addChild(btn);
			if(i >= maxItem){
				btn.setVisible(false);
			}
			if(i == 0){
				btn.addClass("slds-button_brand");
			}
		}
		
		pages.getChildren().get(0).setStyle("border-left", "none").setStyle("border-radius", "0");
		pages.getChildren().get(pages.getChildren().size()-1).setStyle("border-right", "none").setStyle("border-radius", "0");
		
		
		
	}

	private void redisplayBtns(int currentPage){
		if(currentPage >=maxItem){
			double rangeFrom = currentPage- maxItem;
			for(int i =0; i <pages.getChildren().size();i++){
				if(i <= rangeFrom){
					pages.getChildren().get(i).setVisible(false);
				}else if(i > currentPage){
					pages.getChildren().get(i).setVisible(false);
				}else{
					pages.getChildren().get(i).setVisible(true);
				}
				if(i == currentPage){
					pages.getChildren().get(i).addClass("slds-button_brand");
				}else{
					pages.getChildren().get(i).removeClass("slds-button_brand");
				}
			}
		}else{
			for(int i =0; i <pages.getChildren().size();i++){
				if(i == currentPage){
					pages.getChildren().get(i).addClass("slds-button_brand");
				}else{
					pages.getChildren().get(i).removeClass("slds-button_brand");
				}
			}
		}
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		int currentPage = 0;
		if(source.getName().equals("previous")){
			 currentPage = table.getPage();
			if(currentPage > 0){
				currentPage = currentPage -1;
				table.setPage(currentPage);;
			}
		}else if(source.getName().equals("next")){
			currentPage = table.getPage();
			if(currentPage < numPages-1){
				currentPage = currentPage +1;
				table.setPage(currentPage);
			}
		}else{
			currentPage = Integer.parseInt(source.getName());
			table.setPage(currentPage);
		}
		redisplayBtns(currentPage);
	}
	
	

}
