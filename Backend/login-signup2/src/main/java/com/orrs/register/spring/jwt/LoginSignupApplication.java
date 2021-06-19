package com.orrs.register.spring.jwt;

import java.util.Collections;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
@EnableSwagger2
@EnableEurekaClient
@SpringBootApplication
public class LoginSignupApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginSignupApplication.class, args);
	}
	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.ant("/*"))
				.apis(RequestHandlerSelectors.basePackage("com.orrs"))
				.build()
				.apiInfo(apiDetails());
		
	}
	private ApiInfo apiDetails() {
        return new ApiInfo("Product api",
                "Product description",
                "1.0",
                "Free to use",
                new springfox.documentation.service.Contact("Tarun Kumar", "http://casestudy.com", "tarunk17899@gmail.com"),
                "License",
                "http://casestudy.com",
                Collections.emptyList()
        );}}