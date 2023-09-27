package com.springboot.entities;

import java.io.Serializable;
import java.util.Objects;

public class Servicebookedid implements Serializable {
	private Appointments appointments;

	private Services service;

	public Servicebookedid(Appointments appointments, Services service) {
		super();
		this.appointments = appointments;
		this.service = service;
	}

	public Servicebookedid() {
		super();
	}

	@Override
	public int hashCode() {
		return Objects.hash(appointments, service);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Servicebookedid other = (Servicebookedid) obj;
		return Objects.equals(appointments, other.appointments) && Objects.equals(service, other.service);
	}

	

}