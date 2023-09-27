package com.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Client;
import com.springboot.repositories.ClientRepository;

@Service

public class ClientServiceImpl implements ClientService {

	@Autowired
	private ClientRepository clientRepository;

	@Override
	public Client saveClient(Client client) {
		return clientRepository.save(client);
	}

	

	public Long getLastClientId() {
		return clientRepository.findLastClientId();
	}

	@Override
	public Long findBynumber(String number) {
		return clientRepository.findBynumber(number);
	}



}