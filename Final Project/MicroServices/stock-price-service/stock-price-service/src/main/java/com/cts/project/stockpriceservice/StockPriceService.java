package com.cts.project.stockpriceservice;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cts.project.stockpriceservice.model.StockPriceOnPeriod;

public interface StockPriceService {
	
	
	public List<StockPrice> getAllStockPrices();
	public StockPrice getStockPriceById(int id);
	public StockPrice saveStockPrice(StockPrice stockPrice);
	public void deleteStockPrice(int id);
	public StockPrice updateStockPrice(StockPrice stockPrice);
	public ImportSummary addStockPricesFromExcelSheet(MultipartFile file) throws Exception;
	List<StockPriceOnPeriod> getCompanyStockPriceBetween(String companyCode, String stockExchange, LocalDate startDate,
			LocalDate endDate);

}
