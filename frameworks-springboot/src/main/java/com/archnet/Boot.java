package com.archnet;

import org.activiti.engine.IdentityService;
import org.activiti.engine.identity.Group;
import org.activiti.engine.identity.User;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication()
@Configuration
@EnableWebSocket
@Import({SocialConfig.class})
//@EnableOAuth2Sso
public class Boot  implements WebSocketConfigurer {

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
	
	
	@Bean
	InitializingBean usersAndGroupsInitializer(final IdentityService identityService) {

	    return new InitializingBean() {
	        public void afterPropertiesSet() throws Exception {

	            Group group = identityService.newGroup("user");
	            group.setName("users");
	            group.setType("security-role");
	            identityService.saveGroup(group);

	            User admin = identityService.newUser("admin");
	            admin.setPassword("admin");
	            identityService.saveUser(admin);

	        }
	    };
	}
	
	
	
	
	@Configuration
	public class WebConfig extends WebMvcConfigurerAdapter {

		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
		}

	}
	
	@Component("resumeService")
	public class ResumeService {

	    public void storeResume() {
	        System.out.println("Storing resume ...");
	    }

	}

	public static void main(String[] args) {
		SpringApplication.run(Boot.class, args);
	}

}
