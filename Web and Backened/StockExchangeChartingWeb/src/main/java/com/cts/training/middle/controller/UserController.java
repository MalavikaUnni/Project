package com.cts.training.middle.controller;

import java.util.List;

import javax.swing.text.html.FormSubmitEvent.MethodType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cts.training.dao.RegisterDAO;
import com.cts.training.model.Register;

@Controller
public class UserController {

	@Autowired
	RegisterDAO registerDAO;
	
	@GetMapping("/user-home")
	public String UserPage(Model model)
	{
		
		//Register user=new Register();
		List<Register> users= registerDAO.getAllUsers();
		model.addAttribute("list", users);
		model.addAttribute("user", new Register());//register will work as a model attribute in the form
		return "users";
	}
	
	@PostMapping("/user/save")
	//@RequestMapping(value="/user/save",method=RequestMethod.POST)
	public String addUser(@ModelAttribute("user") Register register){
		
		registerDAO.saveOrUpdateUser(register);
		return "redirect:/user-home";
	}
	
	@GetMapping("/remove/{id}")
	public String deleteUser(@PathVariable("id")int id)
	{
		Register register= registerDAO.getUserById(id);
		registerDAO.deleteUser(register);
		return "redirect:/user-home";
	}
	
	@GetMapping("/update/{id}")
	public String updateUser(@PathVariable("id") int id, Model model)
	{
		Register register= registerDAO.getUserById(id);
		model.addAttribute("user",register);
		List<Register> users= registerDAO.getAllUsers();
		model.addAttribute("list", users);
		return "users";
	}
}
