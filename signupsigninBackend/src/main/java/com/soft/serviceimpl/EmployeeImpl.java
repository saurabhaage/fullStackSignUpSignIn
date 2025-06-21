package com.soft.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soft.iservice.Iempservice;
import com.soft.model.Employee;
import com.soft.repository.EmployeeRepository;

@Service
public class EmployeeImpl implements Iempservice{
	
	@Autowired
	private EmployeeRepository emprepository;

	@Override
	public Employee create(Employee employee) {
		return emprepository.save(employee);
	}

	@Override
	public boolean signIn(String empEmail, String empPassword) {
		boolean flag = false;
		
		Employee employee =  emprepository.findByEmpemailAndEmpPassword(empEmail, empPassword);
		if(employee!=null) {
			flag=true;
		}
		return flag;
	}

}
