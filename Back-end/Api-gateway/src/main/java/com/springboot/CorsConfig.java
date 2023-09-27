package com.springboot;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfig {
	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();

		// Allow requests from your Angular frontend
		config.addAllowedOrigin("http://localhost:4200"); // Replace with your frontend URL

		// Allow standard HTTP methods, including POST and DELETE
		config.addAllowedMethod("GET");
		config.addAllowedMethod("POST");
		config.addAllowedMethod("DELETE");

		// Allow standard headers
		config.addAllowedHeader("*");

		// Expose specific headers in response, if needed
		// config.addExposedHeader("Custom-Header");

		source.registerCorsConfiguration("/**", config);
		return new CorsFilter();
	}
}
