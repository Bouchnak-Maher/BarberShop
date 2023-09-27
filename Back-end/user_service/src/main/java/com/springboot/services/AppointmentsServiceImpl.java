package com.springboot.services;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.dto.AppointmentsDTO;
import com.springboot.dto.ResponseDto;
import com.springboot.entities.Appointments;
import com.springboot.repositories.AppointmentsRepository;

@Service

public class AppointmentsServiceImpl implements AppointmentsService {

	@Autowired
	private AppointmentsRepository appointmentsRepository;

	@Override
	public Appointments getappo(Long userId) {

		return appointmentsRepository.findById(userId).get();
	}/*
		 * 
		 * @Autowired private RestTemplate restTemplate;
		 * 
		 * @Override public User saveUser(User user) { return userRepository.save(user);
		 * }
		 * 
		 * @Override public ResponseDto getUser(Long userId) {
		 * 
		 * ResponseDto responseDto = new ResponseDto(); User user =
		 * userRepository.findById(userId).get(); ServicesBookedDTO userDto = mapToUser(user);
		 * 
		 * ResponseEntity<DepartmentDto> responseEntity = restTemplate
		 * .getForEntity("http://localhost:8884/api/departments/" +
		 * user.getDepartmentId(), DepartmentDto.class);
		 * 
		 * DepartmentDto departmentDto = responseEntity.getBody();
		 * 
		 * System.out.println(responseEntity.getStatusCode());
		 * 
		 * responseDto.setUser(userDto); responseDto.setDepartment(departmentDto);
		 * 
		 * return responseDto; }
		 * 
		 * private ServicesBookedDTO mapToUser(User user) { ServicesBookedDTO userDto = new ServicesBookedDTO();
		 * userDto.setId(user.getId()); userDto.setFirstName(user.getFirstName());
		 * userDto.setLastName(user.getLastName()); userDto.setEmail(user.getEmail());
		 * return userDto; }
		 */

	@Override
	public Appointments saveAppo(Appointments appo) {
	
		return appointmentsRepository.save(appo);
	}

	@Override
	public List<AppointmentsDTO> getAllAppointments() {
	
		        List<Appointments> appointments = appointmentsRepository.findAll();
		        List<AppointmentsDTO> appointmentDTOs = new ArrayList<>();

		        for (Appointments appointment : appointments) {
		            AppointmentsDTO dto = convertToDTO(appointment);
		            appointmentDTOs.add(dto);
		        }

		        return appointmentDTOs;
		    }
	  public AppointmentsDTO convertToDTO(Appointments appointment) {
	        AppointmentsDTO dto = new AppointmentsDTO();
	        dto.setAppointment_id(appointment.getAppointment_id());
	        dto.setDate_created(appointment.getDate_created());
	        dto.setClient_id(appointment.getClient().getClient_id());
	        dto.setEmployee_id(appointment.getEmployee().getEmployee_id());
	        dto.setStart_time(appointment.getStart_time());
	        dto.setEnd_time_expected(appointment.getEnd_time_expected());
	        dto.setCanceled(appointment.getCanceled());
	        dto.setCancellation_reason(appointment.getCancellation_reason());
	        return dto;
	    }

	@Override
	 public List<Timestamp> getStartTimesForDate(int year, int month, int day) {
        // Construct the Date object for the target date
        Date targetDate = new Date(year - 1900, month - 1, day);

        // Use the custom query method to retrieve appointments for the specified date
        return appointmentsRepository.findStartTimesByDate(targetDate);
    }
	  
	
}