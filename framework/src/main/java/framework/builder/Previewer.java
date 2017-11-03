package framework.builder;

import static def.dom.Globals.alert;
import static def.dom.Globals.document;

import java.util.function.Function;

import def.dom.Event;
import def.dom.HTMLElement;
import def.dom.MessageEvent;
import def.dom.Node;
import def.dom.WebSocket;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.editors.Preview;
import jsweet.dom.CSSStyleDeclaration;
import jsweet.lang.JSON;

public class Previewer extends JSContainer{

	public Previewer(String name) {
		super("div");
		
		
		WebSocket websocket = new WebSocket("ws:localhost:8080/preview");
		websocket.onopen = new Function<Event, Object>() {
			
			@Override
			public Object apply(Event t) {
				//alert("open");
				
				websocket.send("open:" + name);
				return null;
			}
		};
		
		websocket.onmessage = new Function<MessageEvent, Object>() {

			@Override
			public Object apply(MessageEvent t) {
				//alert(JSON.stringify(t.data));
				//
				
				document.body.innerHTML="";
				Object o = JSON.parse(t.data.toString());
				File f = new File((jsweet.lang.Object)o);
			 	Preview preview = new Preview(f);
				for(File sc : f.getStylesheets()){
					HTMLElement elem = document.createElement("style");
					elem.textContent =sc.getData(); 
					document.body.appendChild(elem);
					//CSSStyleDeclaration dec = new CSSStyleDeclaration();
					
				//	preview.addChild( new JSContainer("style").setHtml(sc.getData()));
				}
				
				preview.render();;
				
				// TODO Auto-generated method stub
				return null;
			}
			
		};
	}

}
