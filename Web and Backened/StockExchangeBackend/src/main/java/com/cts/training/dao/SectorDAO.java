package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.SectorEntity;

public interface SectorDAO {

//	public boolean addSector(SectorEntity sector);
//
//	public boolean updateSector(SectorEntity sector);
	
	public boolean saveOrUpdateSector(SectorEntity sector);

	public boolean deleteSector(SectorEntity sector);

	public SectorEntity getSectorById(int id);

	public List<SectorEntity> getAllSectors();
}
