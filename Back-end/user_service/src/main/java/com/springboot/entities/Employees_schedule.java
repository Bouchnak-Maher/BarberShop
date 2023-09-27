package com.springboot.entities;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employees_schedule")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Employees_schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;


	@ManyToOne
    @JoinColumn( name="employee_id", nullable=false )
	private Employee employee;

	private Time from_hour;
	private Time to_hour;
	private int day_id;
	
	

}
