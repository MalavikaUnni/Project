package com.cts.training.middle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.model.Company;
import com.cts.training.model.Register;;
@Controller
public class CompanyController {

	@Autowired
	CompanyDAO companyDAO;
	
	@GetMapping("/company-home")
	public String CompanyPage(Model model)
	{
		model.addAttribute("company", new Company());
		//Register user=new Register();
		List<Company> company=companyDAO.getAllCompanies();
		model.addAttribute("companylist", company);
		return "companyOperations";
	}
	
	@PostMapping("/company/save")
	//@RequestMapping(value="/user/save",method=RequestMethod.POST)
	public String addCompany(@ModelAttribute("company") Company company){
		
		companyDAO.saveOrUpdateCompany(company);
		return "redirect:/company-home";
	}
	
	@GetMapping("/removecompany/{id}")
	public String deleteCompany(@PathVariable("id")int id)
	{
		Company company= companyDAO.getCompanyById(id);
		companyDAO.deleteCompany(company);
		return "redirect:/company-home";
	}
	
	@GetMapping("/updatecompany/{id}")
	public String updateCompany(@PathVariable("id") int id, Model model)
	{
		Company company= companyDAO.getCompanyById(id);
		model.addAttribute("company",company);
		List<Company> companys=companyDAO.getAllCompanies();
		model.addAttribute("companylist", companys);
		return "companyOperations";
	}
}
