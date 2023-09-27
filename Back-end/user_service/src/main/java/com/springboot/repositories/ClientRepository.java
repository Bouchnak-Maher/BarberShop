package com.springboot.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
	 @Query("SELECT c.client_id FROM Client c WHERE c.phone_number = :number")
	    Long findBynumber(@Param("number") String number);
	 
	 @Query("SELECT c.client_id FROM Client c ORDER BY c.client_id DESC LIMIT 1")
	    Long findLastClientId();
	 @Query("SELECT c FROM Client c WHERE c.client_id = :client_id")
	 Client getClientById(@Param("client_id") Long client_id);
}
