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

import com.cts.training.dao.IPODAO;

import com.cts.training.model.IPOEntity;
import com.cts.training.model.Register;


@Controller
public class IpoController {

	@Autowired
	IPODAO ipoDAO;
	
	@GetMapping("/ipo-home")
	public String IPOPage(Model model)
	{
		model.addAttribute("ipo", new IPOEntity());//registe rwill work as a medel attribute in the form
		//Register user=new Register();
		List<IPOEntity> ipos=ipoDAO.getAllIPOs();
		model.addAttribute("ipolist", ipos);
		return "ipoOperations";
	}
	
	@PostMapping("/ipo/save")
	//@RequestMapping(value="/user/save",method=RequestMethod.POST)
	public String saveOrUpdateIpo(@ModelAttribute("ipo") IPOEntity ipo){
		
		ipoDAO.saveOrUpdateIPO(ipo);
		return "redirect:/ipo-home";
	}
	
	@GetMapping("/removeipo/{id}")
	public String deleteIPO(@PathVariable("id")int id)
	{
		IPOEntity ipo= ipoDAO.getIPOById(id);
		ipoDAO.deleteIPO(ipo);
		return "redirect:/ipo-home";
	}
	
	@GetMapping("/updateipo/{id}")
	public String updateUser(@PathVariable("id") int id, Model model)
	{
		IPOEntity ipo= ipoDAO.getIPOById(id);
		model.addAttribute("ipo",ipo);
		List<IPOEntity> ipos=ipoDAO.getAllIPOs();
		model.addAttribute("ipolist", ipos);
		return "ipoOperations";
	}
}
