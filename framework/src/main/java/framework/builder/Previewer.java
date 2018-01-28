package framework.builder;

import static def.dom.Globals.document;

import java.util.function.Function;

import def.dom.Event;
import def.dom.HTMLElement;
import def.dom.MessageEvent;
import def.dom.WebSocket;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.editors.Preview;
import jsweet.lang.JSON;

public class Previewer extends JSContainer{

	public static File project;
	
	
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
				
				HTMLElement templates = document.getElementById("templates");
				
				document.body.innerHTML="";
				document.body.appendChild(templates);
				Object o = JSON.parse(t.data.toString());
				HTMLElement template = document.createElement("div");
				template.style.display= "none";
				template.setAttribute("id", "templates");
				document.body.appendChild(template);
				File f = new File((jsweet.lang.Object)o);
				project = f;
			 	Preview preview = new Preview(f);
				for(File sc : f.getStylesheets()){
					HTMLElement elem = document.createElement("style");
					elem.textContent =sc.getData(); 
					document.body.appendChild(elem);
				}
				for(File sc : f.getScripts()){
					HTMLElement elem = document.createElement("script");
					elem.textContent =sc.getData(); 
					document.body.appendChild(elem);
				}
				
				for(File sc : f.getTemplates()){
					HTMLElement elem = document.createElement("div");
					elem.setAttribute("id", sc.getName().replace(".html", ""));
					elem.innerHTML = sc.getData();
					//elem.style.display = "none";
					template.appendChild(elem);
				}
				
				preview.render();
				return null;
			}
			
		};
	}

}
