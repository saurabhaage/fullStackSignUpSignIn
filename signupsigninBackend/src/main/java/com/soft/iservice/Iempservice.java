package com.soft.iservice;

import com.soft.model.Employee;

public interface Iempservice {

	public Employee create(Employee employee);
	
	public boolean signIn(String empEmail , String empPassword);
}
