package com.springboot.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springboot.entities.Employee;

public interface EmployeeService {

	List<Employee> getemployee();
	
}