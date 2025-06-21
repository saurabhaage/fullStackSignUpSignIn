package com.soft.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soft.iservice.Iempservice;
import com.soft.model.Employee;


@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/employees")
public class EmpController {
	
	@Autowired
	private Iempservice empservice;
	
	@PostMapping("/signUp")
	public ResponseEntity<Employee> create(@RequestBody Employee employee){
		return ResponseEntity.ok(empservice.create(employee));
	}
	
	@GetMapping("/signIn/{empEmail}/{empPass}")
	public ResponseEntity<Boolean> signIn(@PathVariable String empEmail,@PathVariable String empPass){
		
		return ResponseEntity.ok(empservice.signIn(empEmail, empPass));
		
	}

}
