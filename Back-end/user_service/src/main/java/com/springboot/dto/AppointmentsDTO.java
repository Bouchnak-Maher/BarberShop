package com.springboot.dto;

import java.sql.Date;
import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentsDTO {
	private Long appointment_id;
	private Timestamp date_created;
	private Long client_id;
	private Long employee_id;
	private Timestamp start_time;
	private Timestamp end_time_expected;
	private int canceled;
	private String cancellation_reason;
	
}