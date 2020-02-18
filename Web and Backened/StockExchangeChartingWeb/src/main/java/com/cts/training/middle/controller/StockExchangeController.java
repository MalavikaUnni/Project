package com.cts.training.middle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.cts.training.dao.StockExchangeDAO;
import com.cts.training.model.StockExchangeEntity;


@Controller
public class StockExchangeController {
	
	@Autowired
	StockExchangeDAO stockExchangeDAO;
	
	@GetMapping("/stockExchange-home")
	public String StockExchangePage(Model model)
	{
		
		//Register user=new Register();
		List<StockExchangeEntity> stockExchange=stockExchangeDAO.getAllStockExchanges();
		model.addAttribute("list", stockExchange);
		model.addAttribute("stockExchange", new StockExchangeEntity());//register will work as a model attribute in the form
		return "stockExchangeOperations";
	}
	
	@PostMapping("/stockExchange/save")
	//@RequestMapping(value="/user/save",method=RequestMethod.POST)
	public String addStockExchange(@ModelAttribute("stockExchange") StockExchangeEntity stockExchange){
		
		stockExchangeDAO.saveOrUpdateStockExchange(stockExchange);
		return "redirect:/stockExchange-home";
	}
	
	@GetMapping("/removestockExchange/{id}")
	public String deleteUser(@PathVariable("id")int id)
	{
		StockExchangeEntity stockExchange= stockExchangeDAO.getStockExchangeById(id);
		stockExchangeDAO.deleteStockExchange(stockExchange);
		return "redirect:/stockExchange-home";
	}
	
	@GetMapping("/updatestockExchange/{id}")
	public String updateUser(@PathVariable("id") int id, Model model)
	{
		StockExchangeEntity stockExchange= stockExchangeDAO.getStockExchangeById(id);
		model.addAttribute("stockExchange",stockExchange);
		List<StockExchangeEntity> stockExchange1= stockExchangeDAO.getAllStockExchanges();
		model.addAttribute("list", stockExchange1);
		return "stockExchangeOperations";
	}

}
