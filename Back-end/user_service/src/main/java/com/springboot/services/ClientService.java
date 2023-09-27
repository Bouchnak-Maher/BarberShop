package com.springboot.services;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springboot.entities.Client;

public interface ClientService {
	Client saveClient(Client client);
	 Long findBynumber(String number) ;
	 Long getLastClientId();
	
}