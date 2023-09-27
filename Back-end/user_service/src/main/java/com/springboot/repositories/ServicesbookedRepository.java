package com.springboot.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Servicesbooked;

@Repository
public interface ServicesbookedRepository extends JpaRepository<Servicesbooked, Integer> {
	@Query("SELECT sb.service.service_name FROM Servicesbooked sb JOIN sb.appointments a WHERE a.appointment_id = :appointmentId")
	List<String> findServiceNamesByAppointmentId(@Param("appointmentId") Long appointmentId);
}

