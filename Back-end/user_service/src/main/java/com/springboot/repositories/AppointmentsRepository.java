package com.springboot.repositories;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.dto.AppointmentsWithClientDTO;
import com.springboot.entities.Appointments;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointments, Long> {

	@Query("SELECT new com.springboot.dto.AppointmentsWithClientDTO(a.appointment_id, a.date_created, a.start_time, a.end_time_expected, a.canceled, a.cancellation_reason, c.first_name,c.last_name ,e.firstName,e.lastName) FROM Appointments a JOIN a.client c JOIN a.employee e    ORDER BY a.start_time")
	List<AppointmentsWithClientDTO> findAllAppointmentsWithClientNames(@Param("currentDate") Date currentDate);
	@Query("SELECT new com.springboot.dto.AppointmentsWithClientDTO(a.appointment_id, a.date_created, a.start_time, a.end_time_expected, a.canceled, a.cancellation_reason, c.first_name,c.last_name ,e.firstName,e.lastName) FROM Appointments a JOIN a.client c JOIN a.employee e WHERE a.canceled=1")
	List<AppointmentsWithClientDTO> findAllAppointmentsWithCancled();
	 @Query("SELECT a.start_time FROM Appointments a WHERE DATE(a.start_time) = :targetDate and a.canceled=0")
	    List<Timestamp> findStartTimesByDate(Date targetDate);

}
