package framework.builder;

import framework.JSContainer;
import framework.JSHTMLFragment;

public class UIFile extends JSContainer {
	
	/**
	 * <div id="uiFile">
			<a href="javascript:void(0);" class="slds-app-launcher__tile slds-text-link_reset slds-is-draggable">
				<div class="slds-app-launcher__tile-figure">
					<span class="slds-avatar slds-avatar_large">
						<abbr class="slds-avatar__initials slds-icon-custom-27" title="{{title}}">{{abbr}}</abbr>
					</span>
					
				</div>
				<div class="slds-app-launcher__tile-body">
					<span class="slds-text-link">{{title}}</span>
					<p>
						{{help}}
					</p>
				</div>
			</a>
		</div>
	 * @param name
	 */

	private JSContainer figure = new JSContainer("div").setAttribute("class", "slds-app-launcher__tile-figure");
	
	private JSContainer body = new JSContainer("div").setAttribute("class", "slds-app-launcher__tile-body");
	
	private JSContainer uiTitle = new JSContainer("span").addClass("slds-text-link");
	
	private JSContainer uiHelp = new JSContainer("p");
	
	private JSContainer abbr = new JSContainer("abbr").setAttribute("class", "slds-avatar__initials slds-icon-custom-27");
	
	public UIFile(String name) {
		super(name, "a");
		setAttribute("href", "javascript:void(0);");
		setAttribute("class", "slds-app-launcher__tile slds-text-link_reset slds-is-draggable");
		addChild(figure.addChild(new JSContainer("span").addClass("slds-avatar slds-avatar_large").addChild(abbr)));
		addChild(body);
		body.addChild(uiTitle);
		body.addChild(uiHelp);
	}
	
	public UIFile setTitle(String title){
		uiTitle.setHtml(title);
		abbr.setAttribute("title", title);
		return this;
	}
	
	public UIFile setAbbr(String abbr){
		this.abbr.setHtml(abbr);
		return this;
	}
	
	public UIFile setHelp(String help){
		uiHelp.setHtml(help);
		return this;
	}

}
