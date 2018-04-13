package framework.rtc;

import static def.dom.Globals.location;
import static jsweet.lang.Globals.eval;

import framework.util.HashMap;
import framework.util.Map;

import framework.JSContainer;
import framework.renderer.ExtendedRenderer;
import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLVideoElement;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class Conference extends JSContainer implements ExtendedRenderer<Conference>{

	private LocalVideoContainer localVideo = new LocalVideoContainer("local");

	private Map<String, VideoContainer> remoteVideos = new HashMap<>();

	private JSContainer remotes = new JSContainer("remotes", "div").addClass("remotes");
	
	
	private Object webrtc = null;
	
	public Conference(String name) {
		super(name, "div");
		addChild(localVideo);
		addChild(remotes);
		addRenderer(this);
		
		
	}
	
	
	public Object readyToCall(Object o){
		
		aler("readyToCall");
	 	Function fn = (Function)webrtc.$get("joinRoom");
		
	 	fn.call(this.webrtc, "myroom");
	 	
		//if (room) webrtc.joinRoom(room);
		return o;
	}
	
	public Object localStream(Object stream){
		aler("localStream");
		return stream;
	}
	
	public Object localMediaError(Object err){
		aler("localMediaError");
		return err;
	}
	
	public Object localScreenAdded(HTMLVideoElement video){
		aler("localScreenAdded");
		//this.localVideo.setVisible(true);
		//this.localVideo.setVideo(video);
		return video;
		
	}
	
	public Object localScreenRemoved(HTMLVideoElement video){
		aler("localScreenRemoved");
		this.localVideo.setVisible(false);
		return video;
		
	}
	
	
	public Object videoAdded(HTMLVideoElement video, Object peer){
		aler("videoAdded");
		String peerId = getIdentifier(peer); //(String)peer.$get("id");
		if(!remoteVideos.containsKey(peerId)){
			VideoContainer container = new VideoContainer(peerId);
			container.setTitle((String)peer.$get("nick"));
			remotes.addChild(container);
			remoteVideos.put(peerId, container);
			container.open();
			render();
			container.setVideo(video);
			return video;
		}else{
			remoteVideos.get(peerId).setVideo(video);
			remoteVideos.get(peerId).open();
			render();
			return video;
		}
		
	}
	
	public static String getIdentifier(Object peer){
		return (String)peer.$get("nick");
	}
	
	public Object videoRemoved(HTMLVideoElement video, Object peer){
		aler("removed");
		String peerId = getIdentifier(peer); //(String)peer.$get("id");
		if(!remoteVideos.containsKey(peerId)){
			return null;
		}else{
		 	VideoContainer cv = remoteVideos.get(peerId);
		 	cv.close();
			render();
			return video;
		}
	}
	
	public Object remoteVolumeChange(Object peer,String volume){
		VideoContainer vd = remoteVideos.get(getIdentifier(peer));
		if(vd != null){
			vd.setVolume(Integer.parseInt(volume));
		}
		return null;
	}
	
	public Object volumeChange(String volume, String threshold){
		if(localVideo != null){
			localVideo.setVolume(Integer.parseInt(volume));
		}
		return null;
	}
	
	public static void aler(String s){
	//	alert(s);
	}
	//localMediaError
	
	public Object configure(){
		//return null;
		//alert("sdfsd");
		Function on = (Function)webrtc.$get("on");
		java.util.function.Function<Object, Object> readyToCall = this::readyToCall;
		on.call(webrtc, "readyToCall", readyToCall);
		
		
		
		java.util.function.Function<Object, Object> localStream = this::localStream;
		java.util.function.Function<Object, Object> localMediaError = this::localMediaError;
		
		java.util.function.Function<HTMLVideoElement, Object> localScreenAdded = this::localScreenAdded;
		java.util.function.Function<HTMLVideoElement, Object> localScreenRemoved = this::localScreenRemoved;
		java.util.function.BiFunction<HTMLVideoElement,Object, Object> videoAdded = this::videoAdded;
		java.util.function.BiFunction<HTMLVideoElement,Object, Object> videoRemoved = this::videoRemoved;
		java.util.function.BiFunction<Object,String, Object> remoteVolumeChange = this::remoteVolumeChange;
		java.util.function.BiFunction<String,String, Object> volumeChange = this::volumeChange;
		
		
		//webrtc.on('volumeChange', function (volume, treshold) {
		//webrtc.on('remoteVolumeChange', function (peer, volume) {
		
		// local p2p/ice failure
		//webrtc.on('iceFailed', function (peer) {
		
		// remote p2p/ice failure
		//webrtc.on('connectivityError', function (peer) {
		
		
		//webrtc.on('videoRemoved', function (video, peer) {

		
		//videoRemoved
		
		on.call(webrtc, "localStream", localStream);
		on.call(webrtc, "localMediaError", localMediaError);
		on.call(webrtc, "localScreenAdded", localScreenAdded);
		on.call(webrtc, "localScreenRemoved", localScreenRemoved);
		on.call(webrtc, "videoAdded", videoAdded);
		on.call(webrtc, "videoRemoved", videoRemoved);
		on.call(webrtc, "remoteVolumeChange", remoteVolumeChange);
		on.call(webrtc, "volumeChange", volumeChange);
		
		return this.webrtc;
		
	}
	
	

	
	
	
	@Override
	public void doRender(Conference c, HTMLElement root) {
	}
	
	
	@Override
	public void postRender(Conference c, HTMLElement root) {
		
		if(webrtc != null){
			return;
		}
		
		Object x_data = new Object();
		x_data.$set("ident","kureem@gmail.com");
		x_data.$set("secret", "b2b95c52-fad8-11e7-a694-7a3d885581cf");
		x_data.$set("domain", "eucleed.com");
		x_data.$set("application", "default");
		x_data.$set("secure", 1);
	//	HTMLVideoElement v = (HTMLVideoElement)Globals.document.createElement("video");
		//localVideo.setVideo(v);
		
	//	$.post("https://service.xirsys.com/ice", x_data, new TriFunction<java.lang.Object, String, JQueryXHR, java.lang.Object>() {
			
		//	@Override
			//public java.lang.Object apply(java.lang.Object t, String u, JQueryXHR v) {
				
				
				Object config = new Object();
				config.$set("localVideoEl", localVideo.getVideo().getNative());
				config.$set("remoteVideosEl", "");
				config.$set("autoRequestMedia", true);
				config.$set("debug", false);
				config.$set("detectSpeakingEvents", true);
				config.$set("autoAdjustMic", false);
				config.$set("nick", location.href.split("#")[1]);
			//	aler(JSON.stringify(t));
				
				//config.$set("peerConnectionConfig", ((Object)t).$get("d"));
				webrtc = new Object();
				eval("this.webrtc = new SimpleWebRTC(config);");
				configure();
//				return true;
				
				// TODO Auto-generated method stub
		//		return null;
	//		}
		//});
		
		// TODO Auto-generated method stub
		
		//eval("setTimeout(new function(){ },1000);");
		
	}

}
