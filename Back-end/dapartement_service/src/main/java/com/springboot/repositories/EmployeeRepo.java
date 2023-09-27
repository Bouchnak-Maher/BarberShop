package com.springboot.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

	Optional<Employee> findOneByEmailAndPassword(String email, String password);

	Employee findByEmail(String email);
}
