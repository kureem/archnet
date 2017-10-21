package cardiac;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


/**
 * Spring Boot Entry point application.
 * @author User
 *
 */
@SpringBootApplication
@Configuration
@EnableWebSocket
public class Boot extends WebMvcConfigurerAdapter implements WebSocketConfigurer {


	/**
	 * Websocket handler to dispatch sensor data from esp8266 to Mobile application
	 */
	@Autowired
	private CardiacHandler cardiacHandler;

	
	/**
	 * Registers a url ('/cardiac') and makes it accessible from any origin.
	 * This is the endpoint used by mobile application to listen to data and esp8266 to transmit data
	 */
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(cardiacHandler, "/cardiac").setAllowedOrigins("*");
	}

	/**
	 * Override cors mapping in order to enable connection from other client than a browser in same domain.
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry) {

		super.addCorsMappings(registry);
		registry.addMapping("/**/**").allowedHeaders("origin", "content-type", "accept", "x-requested-with")
				.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS").maxAge(31536000).allowedOrigins("*").allowCredentials(true);

	}

	public static void main(String[] args) {
		SpringApplication.run(Boot.class, args);
	}

}
