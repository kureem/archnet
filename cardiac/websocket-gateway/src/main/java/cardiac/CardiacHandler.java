package cardiac;


import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 * Websocket hander that transmits data from esp8266 micro-controller to mobile application.
 * This class contains all the logic to transmit data to the required destination
 * @author User
 *
 */
@Component
public class CardiacHandler extends TextWebSocketHandler{
	
	/**
	 * Websocket session listening to the server
	 */
	private List<WebSocketSession> sessions = new LinkedList<>();

	/**
	 * Handles a text message from esp8266.
	 * This method simply iterates over all websocket sessions and echoes the data
	 */
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		session.sendMessage(message);
		for(WebSocketSession s : sessions){
			if(!s.equals(session)  && s.isOpen()){
				s.sendMessage(message);
			}
			//s.sendMessage(new );
		}
		System.out.println(message.getPayload());
		
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
