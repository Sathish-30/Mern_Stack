package org.example.login_form_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class LoginFormBackendApplication implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        ViewControllerRegistration r = registry.addViewController("/form");
        r.setViewName("forward:/index.html");
        r.setStatusCode(HttpStatus.GONE);
    }
    public static void main(String[] args) {
        SpringApplication.run(LoginFormBackendApplication.class, args);
    }
}
