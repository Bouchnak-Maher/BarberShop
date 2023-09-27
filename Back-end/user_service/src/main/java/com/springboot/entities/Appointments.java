package com.springboot.entities;

import java.sql.Date;
import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "appointments")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Appointments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long appointment_id;

	private Timestamp date_created; // Store current date and time
	@ManyToOne 
    @JoinColumn( name="client_id", nullable=false )
    private Client client;
	@ManyToOne 
    @JoinColumn( name="employee_id", nullable=false )
    private Employee employee;
	private Timestamp start_time;
	private Timestamp end_time_expected;
	private int canceled;
	private String cancellation_reason;
	
	

}
