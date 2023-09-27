package com.springboot.services;

import java.sql.Timestamp;
import java.util.List;

import com.springboot.dto.AppointmentsDTO;
import com.springboot.dto.ResponseDto;
import com.springboot.entities.Appointments;

public interface AppointmentsService {
	Appointments saveAppo(Appointments appo);

	Appointments getappo(Long userId);

	List<AppointmentsDTO> getAllAppointments();
	 public List<Timestamp> getStartTimesForDate(int year, int month, int day) ;
}