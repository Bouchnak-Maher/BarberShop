package com.springboot.services;

import com.springboot.entities.Employee;
import com.springboot.response.LoginResponse;

import Dto.LoginDTO;

public interface EmployeeService {

	Employee addEmployee(Employee employee);

	Employee getEmployee(int id);

	LoginResponse loginEmploye(LoginDTO loginDTO);

}
