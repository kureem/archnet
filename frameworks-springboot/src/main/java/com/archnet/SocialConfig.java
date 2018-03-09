package com.archnet;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.salesforce.connect.SalesforceConnectionFactory;;

@Configuration
@EnableSocial
public class SocialConfig implements SocialConfigurer
{
    @Override
    public void addConnectionFactories(ConnectionFactoryConfigurer connectionFactoryConfigurer, Environment environment)
    {
        connectionFactoryConfigurer.addConnectionFactory(new SalesforceConnectionFactory(environment.getProperty("security.oauth2.client.client-id"), environment.getProperty("security.oauth2.client.client-secret")));   
    }

    @Override
    public UserIdSource getUserIdSource()
    {
        //throw new UnsupportedOperationException();
        return null;
    }



    @Override
    public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator arg0)
    {
        //throw new UnsupportedOperationException();
        return null;
    }
    
}
