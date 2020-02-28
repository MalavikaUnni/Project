package com.cts.project.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.cts.project.dto.UserDTO;
import com.cts.project.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserDAOImpl {

	@Autowired
	UserService userService;
	
	/*
	 * @Autowired JavaMailSender jms;
	 */

	@GetMapping("/user")
	public List<UserDTO> getUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/user/{id}")
	public UserDTO getUserById(@PathVariable("id") int id) {
		//Optional<User> userList = userDao.findById(id);
		//User user = userList.get();
		return userService.getUserById(id);

	}

	@PostMapping("/user")
	public UserDTO saveUser(@RequestBody UserDTO userDTO) {
		return userService.saveUser(userDTO);
	}

	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
	}

	@PutMapping("/user")
	public UserDTO updateUser(@RequestBody UserDTO userDTO) {
		
		return userService.updateUser(userDTO);
	}
	
	
	
	@PutMapping(value="/activate")
	public boolean activateUser(@RequestBody String email) {
	
		return userService.activateUser(email);
	}

}
