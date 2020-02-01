package com.cts.project.controller;

import org.hibernate.cfg.Configuration;
import com.cts.project.dao.RegisterDAO;
import com.cts.project.dao.impl.RegisterDAOImpl;
import com.cts.project.model.Register;


public class RegisterController {

	public static void main(String[] args) {
		
		//Configuration cfg=new Configuration();
		
		Register register = new Register(101, "Malavika", "malavika@cts.com",56757567L,"malavika","password");

		RegisterDAO registerDAO = new RegisterDAOImpl();

		boolean status = registerDAO.saveUser(register);
		if (status) {
			System.out.println("user Saved Successfully");
		} else {
			System.out.println("Try Again");
		}

	}

}
