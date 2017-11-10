package com.archnet;

import java.util.LinkedList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;



@Component
@Transactional
public class PreviewHandler extends TextWebSocketHandler{

	@Autowired
	private ProjectController service;
	
	/**
	 * Websocket session listening to the server
	 */
	private List<WebSocketSession> sessions = new LinkedList<>();
	
	private ObjectMapper mapper = new ObjectMapper();

	/**
	 * Handles a text message from esp8266.
	 * This method simply iterates over all websocket sessions and echoes the data
	 */
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		String payload = message.getPayload();
		if(!sessions.contains(session)){
			sessions.add(session);
		}
		if(payload.startsWith("open:")){
			String projec = payload.split(":")[1];
			for(Project p : service.getProjects()){
				if(p.getName().equalsIgnoreCase(projec)){
					String result = mapper.writeValueAsString(p);
					
					for(WebSocketSession s : sessions){
						if(s!=null)
							s.sendMessage(new TextMessage(result.getBytes()));
					}
				 	
				}
			}
			//service.getProjects()
		}
		
		
		
	}

	/**
	 * This method is invoked after a websocket connection is established by a client device (mobile app and esp8266)
	 */
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		super.afterConnectionEstablished(session);
		sessions.add(session);
	}

	/**
	 * This method is invoked whenever there is a connection problem
	 */
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		super.handleTransportError(session, exception);
		sessions.remove(session);
	}

	/**
	 * THis method is invoked after a connection has been closed
	 */
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		super.afterConnectionClosed(session, status);
		sessions.remove(session);
	}
	
	
	

}
