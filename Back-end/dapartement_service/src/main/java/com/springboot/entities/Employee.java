package com.springboot.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "barber_admin")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long adminid;
	@Column(name="admin_name", length=255)
	private String employeename;
	@Column(name="email", length=255)
	private String email;
	@Column(name="password", length=255)
	private String password;
	
	
	
	

}