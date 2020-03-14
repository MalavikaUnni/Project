package com.cts.project.stockpriceservice.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.cts.project.stockpriceservice.CompanyDTO;
import com.cts.project.stockpriceservice.StockExchangeDTO;

//@FeignClient("company-service")
@FeignClient("netflix-zuul-api-gateway-server")
public interface CompanyServiceProxy {
	
	@GetMapping("/company-service/company")
	public List<CompanyDTO> getAllCompany();
	
	
	

}
