package com.cts.training.middle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.cts.training.dao.SectorDAO;
import com.cts.training.model.Register;
import com.cts.training.model.SectorEntity;;
@Controller
public class SectorController {
	@Autowired
	SectorDAO sectorDAO;
	
	@GetMapping("/sector-home")
	public String SectorPage(Model model)
	{
		model.addAttribute("sector", new SectorEntity());//registe rwill work as a medel attribute in the form
		//Register user=new Register();
		List<SectorEntity> sector=sectorDAO.getAllSectors();
		model.addAttribute("sectorlist", sector);
		return "sectorOperations";
	}
	
	@PostMapping("/sector/save")
	//@RequestMapping(value="/user/save",method=RequestMethod.POST)
	public String addSector(@ModelAttribute("sector") SectorEntity sector){
		
		sectorDAO.saveOrUpdateSector(sector);
		return "redirect:/sector-home";
	}
	
	@GetMapping("/removesector/{id}")
	public String deleteSector(@PathVariable("id")int id)
	{
		SectorEntity sector= sectorDAO.getSectorById(id);
		sectorDAO.deleteSector(sector);
		return "redirect:/sector-home";
	}

	@GetMapping("/updatesector/{id}")
	public String updateUser(@PathVariable("id") int id, Model model)
	{
		SectorEntity sector= sectorDAO.getSectorById(id);
		model.addAttribute("sector",sector);
		List<SectorEntity> sectors=sectorDAO.getAllSectors();
		model.addAttribute("sectorlist", sectors);
		return "sectorOperations";
	}
	
}
