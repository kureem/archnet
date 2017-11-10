package com.archnet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication()
@Configuration
@EnableWebSocket
@EnableOAuth2Sso
public class Boot extends WebMvcConfigurerAdapter implements WebSocketConfigurer {

	@Autowired
	private PreviewHandler previewHandler;

	/**
	 * Registers a url ('/cardiac') and makes it accessible from any origin.
	 * This is the endpoint used by mobile application to listen to data and
	 * esp8266 to transmit data
	 */
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(previewHandler, "/preview").setAllowedOrigins("*");
	}

	@Configuration
	public class WebConfig extends WebMvcConfigurerAdapter {

		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
		}

	}

	public static void main(String[] args) {
		SpringApplication.run(Boot.class, args);
	}

}
