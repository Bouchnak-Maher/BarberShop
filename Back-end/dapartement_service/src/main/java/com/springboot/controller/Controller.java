package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.entities.Employee;
import com.springboot.response.LoginResponse;
import com.springboot.services.EmployeeService;

import Dto.LoginDTO;

@RestController
@RequestMapping("/api/departments")

@CrossOrigin
public class Controller {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/save")
	public ResponseEntity<Employee> saveUser(@RequestBody Employee employee) {
		Employee savedUser = employeeService.addEmployee(employee);
		return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	}

	@RequestMapping(value = "find/{id}", method = RequestMethod.GET, produces = {
			MimeTypeUtils.APPLICATION_JSON_VALUE })
	public ResponseEntity<Employee> find1(@PathVariable("id") int id) {
		try {
			return new ResponseEntity<Employee>(employeeService.getEmployee(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Employee>(HttpStatus.BAD_REQUEST);

		}
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
		LoginResponse loginMessage = employeeService.loginEmploye(loginDTO);
		return ResponseEntity.ok(loginMessage);
	}

}
