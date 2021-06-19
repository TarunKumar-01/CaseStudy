package casestudy.security;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;

@EnableEurekaClient
@EnableZuulProxy
@SpringBootApplication
public class SpringSecurityApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityApiGatewayApplication.class, args);
	}

	@Bean

	@LoadBalanced
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
}
