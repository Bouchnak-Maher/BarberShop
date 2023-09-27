package com.springboot.dto;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentsWithClientDTO {
	private Long appointment_id;
	private Timestamp date_created;
	private Timestamp start_time;
	private Timestamp end_time_expected;
	private int canceled;
	private String cancellation_reason;
	private String client_firstName; // Add a field for client name
	private String client_lastName;
	private String employee_firstName;
	private String employee_lastName;
	// Constructors, getters, setters
}
