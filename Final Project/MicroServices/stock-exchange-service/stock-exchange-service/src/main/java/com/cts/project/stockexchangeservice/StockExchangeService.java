package com.cts.project.stockexchangeservice;

import java.util.List;


public interface StockExchangeService {
	
public List<StockExchange> getAllStockExchanges();
	
	public StockExchange getStockExchangeById(int id);
	
	public StockExchange saveStockExchange(StockExchange stockExchange);
	
	public void deleteStockExchange(int id);
	
	public StockExchange updateStoxExchange(StockExchange stockExchange);	
	

}
