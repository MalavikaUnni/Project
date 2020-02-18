package com.cts.training.middle.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.dao.IPODAO;
import com.cts.training.dao.RegisterDAO;
import com.cts.training.dao.SectorDAO;
import com.cts.training.dao.StockExchangeDAO;
import com.cts.training.model.Company;
import com.cts.training.model.IPOEntity;
import com.cts.training.model.Register;
import com.cts.training.model.SectorEntity;
import com.cts.training.model.StockExchangeEntity;

@Controller
public class HomeController {
	@Autowired
	private IPODAO ipoDAO;
	@Autowired
	private RegisterDAO registerDAO;
	@Autowired
	private CompanyDAO companyDAO;
	@Autowired
	private SectorDAO sectorDAO;
	@Autowired
	private StockExchangeDAO stockExchangeDAO;
	
	
	
	//@GetMapping("/") --- In spring 4.3 version and above
	@RequestMapping("/")
	public String indexPage(Model model) 
	{
		//model.addAttribute("message", "Welcome to Spring MVC");
	//	List<String> names=new ArrayList<String>();
		
		
	//addNames(names);
	//	model.addAttribute("list", names);
		return "index";
	}
	
	@RequestMapping("/ipo")
	public String ipoPage(Model model) 
	{
	
		
		
		return "ipo";
	}
	
	
	@RequestMapping("/company")
	public String companyPage(Model model) 
	{ 
	
		
		
		return "company";
	}
	
	
	
	@RequestMapping("/sector")
	public String sectorPage(Model model) 
	{
	
		List<SectorEntity> sector=sectorDAO.getAllSectors();
		model.addAttribute("sectorlist", sector);
		
		return "sector";
	}
	
	
	@RequestMapping("/stockExchange")
	public String StockExchangePage(Model model) 
	{
	
		List<StockExchangeEntity> stockExchanges=stockExchangeDAO.getAllStockExchanges();
		model.addAttribute("stockExchangelist", stockExchanges);
		
		return "stockExchange";
	}
	


//	private void addNames(List<String> names) {
//		names.add("Divya");
//		names.add("Hameemsha");
//		names.add("Sindhu");
//		names.add("Aneena");
//		
		
//	}

}
