package framework.builder.editors;

public class EventTypes {

	public final static String[] events = new String[] {

			"onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate",
			"onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu",
			"oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter",
			"ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror",
			"onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata",
			"onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover",
			"onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause",
			"onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking",
			"onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange",
			"onwaiting" };
	
	
	
	public final static String[] mouseevents = new String[]{
			"onclick", "oncontextmenu","ondblclick","onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover",
			"onmouseup", "onmousewheel"
	};
	
	
	public final static String[] keyboardevents = new String[]{
			"onkeydown", "onkeypress", "onkeyup"
			
	};

	
	public final static String[] dndevents = new String[]{
			"ondrag", "ondragend", "ondragenter",
			"ondragleave", "ondragover", "ondragstart", "ondrop"
	};
}
