package com.cts.project.stockpriceservice;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.stockpriceservice.feign.CompanyServiceProxy;
//import com.cts.project.stockpriceservice.feign.StockExchangeServiceProxy;

@CrossOrigin(origins = "*")
@RestController
public class StockPriceRestController {
	Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	StockPriceService stockPriceService;

	@Autowired
	private CompanyServiceProxy companyproxy;
	
//	@Autowired
//	private StockExchangeServiceProxy stockExchangeproxy; 
//	
	

	@GetMapping("/stockPrice")
	public List<StockPrice> getAllStockPrice() {
		return stockPriceService.getAllStockPrices();
	}

	@GetMapping("/stockPrice/{id}")
	public StockPrice getStockPriceById(@PathVariable int id) {
		StockPrice price = stockPriceService.getStockPriceById(id);
		return price;
	}

	@PostMapping("/stockPrice")
	public StockPrice saveStockPrice(@RequestBody StockPrice stockPrice) {
		StockPrice price = stockPriceService.saveStockPrice(stockPrice);
		return price;
	}

	@DeleteMapping("stockPrice/{id}")
	public void deleteStockPrice(@PathVariable int id) {
		stockPriceService.deleteStockPrice(id);
	}

	@PutMapping("/stockPrice")
	public StockPrice updateStockPrice(@RequestBody StockPrice stockPrice) {
		StockPrice price = stockPriceService.updateStockPrice(stockPrice);
		return price;
	}

	@GetMapping("/stockPrice/company")
	public List<CompanyDTO> getAllCompanyByStockPrice() {
		logger.info("Get all Company...invoked?");
		List<CompanyDTO> companyDto=companyproxy.getAllCompany();
		logger.info("Information ---> {}",companyDto);
		return companyDto;

	}
	
//	@GetMapping("/stockPrice/stockExchange")
//	public List<StockExchangeDTO> getAllStockExchangeByStockPrice()
//	{
//		return stockExchangeproxy.getAllStockExchange();
//	}
}