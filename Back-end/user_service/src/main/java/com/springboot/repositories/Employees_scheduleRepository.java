package com.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Employees_schedule;

@Repository
public interface Employees_scheduleRepository extends JpaRepository<Employees_schedule, Long> {

}
