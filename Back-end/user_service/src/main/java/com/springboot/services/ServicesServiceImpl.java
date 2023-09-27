package com.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Services;
import com.springboot.repositories.ServicesRepository;

@Service

public class ServicesServiceImpl implements ServicesService {

	@Autowired
	private ServicesRepository servicesRepository;

	@Override
	public Services getservice(Long serviceId) {
	return servicesRepository.findById(serviceId).get();
	}

}