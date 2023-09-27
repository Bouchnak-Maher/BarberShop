package com.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Services;
import com.springboot.entities.Servicesbooked;
import com.springboot.repositories.ServicesRepository;
import com.springboot.repositories.ServicesbookedRepository;

@Service

public class ServicesbookedServiceImpl implements ServicesbookedService {

	@Autowired
	private ServicesbookedRepository servicesbookedRepository;

	

	@Override
	public Servicesbooked saveservice(Servicesbooked servicebooked) {
		return servicesbookedRepository.save(servicebooked);
		
	}

}