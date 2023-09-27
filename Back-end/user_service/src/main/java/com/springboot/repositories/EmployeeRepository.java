package com.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	 @Query("SELECT e FROM Employee e WHERE e.employee_id = :employee_id")
		Employee getEmployeeById(@Param("employee_id") Long employee_id);

}
