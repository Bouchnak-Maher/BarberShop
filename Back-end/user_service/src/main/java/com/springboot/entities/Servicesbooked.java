package com.springboot.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "services_booked")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@IdClass(Servicebookedid.class)

public class Servicesbooked {
	@Id
	@ManyToOne
	@JoinColumn(name = "appointment_id", nullable = false)
	private Appointments appointments;

	@Id
	@ManyToOne
	@JoinColumn(name = "service_id", nullable = false)
	private Services service;

}
