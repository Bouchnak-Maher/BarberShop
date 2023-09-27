package com.springboot.controller;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.dto.AppointmentsDTO;
import com.springboot.dto.AppointmentsWithClientDTO;
import com.springboot.dto.ServicesBookedDTO;
import com.springboot.entities.Appointments;
import com.springboot.entities.Client;
import com.springboot.entities.Employee;
import com.springboot.entities.Employees_schedule;
import com.springboot.entities.Services;
import com.springboot.entities.Servicesbooked;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repositories.AppointmentsRepository;
import com.springboot.repositories.ClientRepository;
import com.springboot.repositories.EmployeeRepository;
import com.springboot.repositories.Employees_scheduleRepository;
import com.springboot.repositories.ServicesRepository;
import com.springboot.repositories.ServicesbookedRepository;
import com.springboot.services.AppointmentsService;
import com.springboot.services.ClientService;
import com.springboot.services.EmployeeService;
import com.springboot.services.ServicesService;
import com.springboot.services.ServicesbookedService;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("api/users")

public class UserController {
	@Autowired
	private ServicesService servicesService;
	@Autowired
	private ServicesbookedService servicesbookedService;
	@Autowired
	private AppointmentsService appointmentsService;
	@Autowired
	private AppointmentsRepository appointmentsRepository;
	@Autowired
	private ServicesRepository servicesRepository;
	@Autowired
	private ServicesbookedRepository servicesbookedRepository;
	@Autowired
	private ClientService clientService;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private Employees_scheduleRepository employees_scheduleRepository;
	@Autowired
	private EmployeeService employeeService;

	/****************** Clients ********************/

	@PostMapping("/clients")
	public ResponseEntity<Client> saveclient(@RequestBody Client client) {
		Client savedclient = clientService.saveClient(client);
		return new ResponseEntity<>(savedclient, HttpStatus.CREATED);
	}

	@GetMapping("/clients/{number}")
	public Long findByNumber(@PathVariable String number) {

		return clientService.findBynumber(number);
	}

	@GetMapping("/clients")
	public ResponseEntity<Long> getLastClientId() {
		Long lastClientId = clientService.getLastClientId();
		if (lastClientId != null) {
			return ResponseEntity.ok(lastClientId);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	@GetMapping("/clients/find")
	public  List<Client> getclient( ) {

		return clientRepository.findAll();
	}

	/****************** Employee ********************/
	@PostMapping("/employee")
	public ResponseEntity<Employee> saveclient(@RequestBody Employee employee) {
		Employee savedclient = employeeRepository.save(employee);
		return new ResponseEntity<>(savedclient, HttpStatus.CREATED);
	}
	@GetMapping("/employee")
	public List<Employee> getAllemployee() {
		return employeeService.getemployee();
	}
	@RequestMapping(value = "employee/{id}", method = RequestMethod.DELETE, produces = {
			MimeTypeUtils.APPLICATION_JSON_VALUE })
	public ResponseEntity<Employee> deleteemployee(@PathVariable("id") Long id) {
		try {
			employeeRepository.deleteById(id);;
			return new ResponseEntity<Employee>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Employee>(HttpStatus.BAD_REQUEST);

		}
	}
/*mm*/
	/****************** ServicesBooked ********************/
	@RequestMapping(value = "/Servicesbooked", method = RequestMethod.POST, produces = {
			MimeTypeUtils.APPLICATION_JSON_VALUE })
	
	    public ResponseEntity<String> saveServicesBooked(@RequestBody ServicesBookedDTO servicesBookedDTO) {
	        try {
	            Servicesbooked servicesBooked = new Servicesbooked();
	            
	            Appointments appointments = new Appointments();
	            appointments.setAppointment_id(servicesBookedDTO.getAppointment_id()); // Set the appointment_id
	            
	            Services service = new Services();
	            service.setService_id(servicesBookedDTO.getService_id()); // Set the service_id
	            
	            servicesBooked.setAppointments(appointments);
	            servicesBooked.setService(service);
	            
	            // Save the Servicesbooked entity
	            servicesbookedRepository.save(servicesBooked);
	            
	            return ResponseEntity.ok("Services Booked successfully");
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while booking services");
	        }
	    }
	/*@PostMapping("/Servicesbooked")
	public ResponseEntity<Servicesbooked> saveservices(@RequestBody Servicesbooked servicesbooked) {
		Servicesbooked savedservices = servicesbookedService.saveservice(servicesbooked);
		return new ResponseEntity<>(savedservices, HttpStatus.CREATED);
	}*/
	@GetMapping("/Servicesbooked/{appointmentId}")
	public List<String> getAllServicesnames(@PathVariable("appointmentId") Long appointmentId) {
	    return servicesbookedRepository.findServiceNamesByAppointmentId(appointmentId);
	}
	/****************** employees_schedule ********************/
	@GetMapping("/employees_schedule")
	public List<Employees_schedule> getAllemployees_schedule() {
		return employees_scheduleRepository.findAll() ;
	}
	  @PostMapping("/employees_schedule/{id}")
	    public ResponseEntity<Employees_schedule> updateSchedule(
	            @PathVariable("id") Long id,
	            @RequestParam("from_hour") Time from_hour,
	            @RequestParam("to_hour") Time to_hour) {

	        Employees_schedule existingSchedule = employees_scheduleRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found with id: " + id));

	        // Update the schedule with new values
	        existingSchedule.setFrom_hour(from_hour);
	        existingSchedule.setTo_hour(to_hour);

	        Employees_schedule updatedSchedule = employees_scheduleRepository.save(existingSchedule);

	        return ResponseEntity.ok(updatedSchedule);
	    }
	
	
	/****************** Services ********************/
	    @PostMapping("/findservices")
		public ResponseEntity<Services> saveclient(@RequestBody Services service) {
			Services savedclient = servicesRepository.save(service);
			return new ResponseEntity<Services>(savedclient, HttpStatus.CREATED);
		}
	    
	    @GetMapping("/findservices")
	public List<Services> getAllServices() {
		return servicesRepository.findAll();
	} 
	@RequestMapping(value = "findservices/{id}", method = RequestMethod.DELETE, produces = {
			MimeTypeUtils.APPLICATION_JSON_VALUE })
	public ResponseEntity<Services> delete(@PathVariable("id") Long id) {
		try {
			servicesRepository.deleteById(id);;
			return new ResponseEntity<Services>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Services>(HttpStatus.BAD_REQUEST);

		}
	}


	@RequestMapping(value = "findservices/{id}", method = RequestMethod.GET, produces = {
			MimeTypeUtils.APPLICATION_JSON_VALUE })
	public ResponseEntity<Services> find(@PathVariable("id") Long id) {
		try {
			return new ResponseEntity<Services>(servicesService.getservice(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Services>(HttpStatus.BAD_REQUEST);

		}
	}

	/****************** Appointments ********************/
	@PostMapping("/appointments")

	public ResponseEntity<Appointments> createAppointment(@RequestBody AppointmentsDTO appointmentsDTO) {
		// Retrieve Client and Employee entities based on the IDs provided in the
		// request
		Client client = clientRepository.getClientById(Long.valueOf(appointmentsDTO.getClient_id()));
		Employee employee = employeeRepository.getEmployeeById(Long.valueOf(appointmentsDTO.getEmployee_id()));

		// Create an Appointment instance and set the retrieved Client and Employee
		Appointments appointment = new Appointments();
		appointment.setClient(client);
		appointment.setEmployee(employee);
		appointment.setDate_created(new Timestamp(System.currentTimeMillis()));
        appointment.setStart_time(appointmentsDTO.getStart_time());
        appointment.setEnd_time_expected(appointmentsDTO.getEnd_time_expected());
        appointment.setCanceled(appointmentsDTO.getCanceled());
        appointment.setCancellation_reason(appointmentsDTO.getCancellation_reason());
        
		// Set other properties based on the request

		// Save the Appointment
		Appointments savedAppointment = appointmentsService.saveAppo(appointment);

		return ResponseEntity.ok(savedAppointment);
	}
	  @GetMapping("/appointments/startTimes")
	    public List<Timestamp> getStartTimesForDate(
	            @RequestParam("year") int year,
	            @RequestParam("month") int month,
	            @RequestParam("day") int day) {
	        return appointmentsService.getStartTimesForDate(year, month, day);
	    }
	/*@GetMapping("/appointments")
	public List<String> getAllClientIds() {
	    List<Appointments> appointments = appointmentsRepository.findAll();
	    List<String> clientIds = new ArrayList<>();
	    
	    for (Appointments appointment : appointments) {
	        String clientId = appointment.getClient().getFirst_name();
	        clientIds.add(clientId);
	    }
	    
	    return clientIds;
	}

	@GetMapping("/appointments")
	public List<AppointmentsDTO> getAllAppointments() {
        List<AppointmentsDTO> appointmentDTOs = appointmentsService.getAllAppointments();
        return appointmentDTOs;
    }*/
	@GetMapping("/appointments")
	public List<Appointments> getAllEmployees() {
		return appointmentsRepository.findAll();
	}
	@GetMapping("/appointments/cancled")
	public List<AppointmentsWithClientDTO> getAllcancled() {
		return appointmentsRepository.findAllAppointmentsWithCancled();
	}
	 @GetMapping("/appointments/info")
	    public List<AppointmentsWithClientDTO> getAllAppointmentsWithClientNames() {
		  SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		  Date currentDate = new Date();
		  String strDate = dateFormat.format(currentDate);
		  try {
			    currentDate = dateFormat.parse(strDate); // Convert the string back to a Date
			} catch (ParseException e) {
			    // Handle the parse exception if needed
			    e.printStackTrace();
			}
	        return appointmentsRepository.findAllAppointmentsWithClientNames( currentDate);
	    }
	@RequestMapping(value = "/appointments/{id}", method = RequestMethod.GET, produces = {
			MimeTypeUtils.APPLICATION_JSON_VALUE })
	public ResponseEntity<Appointments> find1(@PathVariable("id") Long id) {
		try {
			return new ResponseEntity<Appointments>(appointmentsService.getappo(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Appointments>(HttpStatus.BAD_REQUEST);

		}
	}

	public static Timestamp addMinutes(Timestamp date, int numOfMinutes) {
		long milliSecInAMinute = 60 * 1000L;
		Timestamp newTS = new Timestamp(date.getTime());
		long milliSecToAdd = milliSecInAMinute * numOfMinutes;
		long newTimeMilliSec = newTS.getTime();
		newTS.setTime(newTimeMilliSec + milliSecToAdd);
		return newTS;
	}

	@PutMapping("/appointments")
	public ResponseEntity<List<Appointments>> updateAppointments(@RequestParam List<Long> ids,
			@RequestBody Appointments appointmentsDetails) { // Receive a single appointmentsDetails object
		List<Appointments> updatedAppointments = new ArrayList<>();
		int datestore = 0;
		Services services = new Services();
		Appointments appointments = appointmentsRepository.findById(appointmentsDetails.getAppointment_id())
				.orElseThrow(() -> new ResourceNotFoundException(
						"Appointment not exist with id: " + appointmentsDetails.getAppointment_id()));
		for (Long id : ids) {
			services = servicesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Services not exist with id: " + id));

			datestore = datestore + services.getService_duration();
			System.out.println(datestore);
		}

		Timestamp date = addMinutes(appointments.getStart_time(), datestore);

		appointments.setEnd_time_expected(date);

		Appointments updatedAppointment = appointmentsRepository.save(appointments);
		updatedAppointments.add(updatedAppointment);

		return ResponseEntity.ok(updatedAppointments);
	}
	 @PostMapping("/appointments/cancel")
	    public String cancelAppointment(@RequestParam("appointment_id") Long appointment_id, @RequestParam("cancellation_reason") String cancellation_reason) {
	        Appointments appointment = appointmentsRepository.findById(appointment_id).orElse(null);

	        if (appointment == null) {
	            return "Appointment not found";
	        }

	        // Update the appointment fields
	        appointment.setCanceled(1);
	        appointment.setCancellation_reason(cancellation_reason);

	        // Save the updated appointment
	        appointmentsRepository.save(appointment);

	        return "Appointment canceled successfully";
	    }
}/*
	 * 
	 * @GetMapping("{id}") public ResponseEntity<ResponseDto>
	 * getUser(@PathVariable("id") Long userId) { ResponseDto responseDto =
	 * userService.getUser(userId); return ResponseEntity.ok(responseDto); } }
	 */