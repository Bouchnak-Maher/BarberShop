package com.springboot.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Employee;
import com.springboot.repositories.EmployeeRepo;
import com.springboot.response.LoginResponse;

import Dto.LoginDTO;

@Service
public class EmployeeServiceIMPL implements EmployeeService {

	@Autowired
	private EmployeeRepo employeeRepo;

	@Override
	public Employee addEmployee(Employee employee) {

		return employeeRepo.save(employee);
	}

	@Override
	public Employee getEmployee(int id) {
		return employeeRepo.findById(id).get();
	}

	@Override
	public LoginResponse loginEmploye(LoginDTO loginDTO) {
		String msg="";
		Employee employee1= employeeRepo.findByEmail(loginDTO.getEmail());
		if (employee1 != null) {
			String password =loginDTO.getPassword();
			String realpassword =employee1.getPassword();
			if(password.equals(realpassword)) {
				Optional<Employee> employee=employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(),loginDTO.getPassword());
				if(employee.isPresent()) {
				return new LoginResponse("Login Succes",true);
				}else {
				return new LoginResponse("Login Failed",false);
				}} else {
			return new LoginResponse("password Not Match",false);
			}}

	else {
			return new LoginResponse("Email not exist",false);}

			}
		
	}


