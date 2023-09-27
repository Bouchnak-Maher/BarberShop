package com.springboot.entities;

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
@Table(name = "Services")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class Services {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long service_id;
	private String service_description;
	private float service_price;
	private int service_duration;
	private int category_id;
	private String service_name;

}
