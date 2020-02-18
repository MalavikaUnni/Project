package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.StockExchangeEntity;

public interface StockExchangeDAO {

//	public boolean addStockExchange(StockExchangeEntity stockExchange);
//
//	public boolean updateStockExchange(StockExchangeEntity stockExchange);
	
	public boolean saveOrUpdateStockExchange(StockExchangeEntity stockExchange);

	public boolean deleteStockExchange(StockExchangeEntity stockExchange);

	public StockExchangeEntity getStockExchangeById(int id);

	public List<StockExchangeEntity> getAllStockExchanges();
}
