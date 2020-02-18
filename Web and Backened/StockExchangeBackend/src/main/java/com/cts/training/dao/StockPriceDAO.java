package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.StockPriceEntity;

public interface StockPriceDAO {

	public boolean addStockPrice(StockPriceEntity stockPrice);

	public boolean updateStockPrice(StockPriceEntity stockPrice);

	public boolean deleteStockPrice(StockPriceEntity stockPrice);

	public StockPriceEntity getStockPriceById(int id);

	public List<StockPriceEntity> getAllStockPrices();
	
}
