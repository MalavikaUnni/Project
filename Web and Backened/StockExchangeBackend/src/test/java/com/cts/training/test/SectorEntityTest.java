package com.cts.training.test;

import static org.junit.Assert.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.dao.DataIntegrityViolationException;

import com.cts.training.dao.SectorDAO;
import com.cts.training.dao.impl.SectorDAOImpl;
import com.cts.training.model.SectorEntity;

public class SectorEntityTest {

	private static AnnotationConfigApplicationContext context;
	private static SectorDAO sectorDAO;
	private static SectorEntity sector;

	@BeforeClass
	public static void init() {
		context = new AnnotationConfigApplicationContext();
		context.scan("com.cts.training");
		context.refresh();
		sector = (SectorEntity) context.getBean("sectorEntity");
		sectorDAO = (SectorDAO) context.getBean("sectorDAO");
	}

	@Test
	public void testGetAllSectors() {
		List<SectorEntity> sectors = sectorDAO.getAllSectors();
		assertEquals(1, sectors.size());
	}

	@Test
	public void testGetSectorByIdSuccess() {
		SectorEntity sector = new SectorEntity(101, "jhgfdfgh", "bnm");
		assertEquals(sector.getName(), sectorDAO.getSectorById(1).getName());
	}

	@Test
	public void testGetSectorByIdFail() {
		assertEquals(null, sectorDAO.getSectorById(50));
	}

//	@Test
//	public void testUpdateSectorSuccess() {
//		SectorEntity sector = sectorDAO.getSectorById(1);
//		sector.setBrief("bnm");
//		assertEquals(true, sectorDAO.updateSector(sector));
//	}
//
//	@Test(expected = NullPointerException.class)
//	public void testUpdateSectorFail() {
//		SectorEntity sector = sectorDAO.getSectorById(90);
//		sector.setBrief("fvbgnm");
//		assertEquals(true, sectorDAO.updateSector(sector));
//	}
//
//	@Test
////	@Ignore
//	public void testAddSectorSuccess() {
//		SectorEntity sector = new SectorEntity(101, "jhgfdfgh", "bnm");
//		assertEquals(true, sectorDAO.addSector(sector));
//	}
//
//	@Test(expected = DataIntegrityViolationException.class)
//	@Ignore
//	public void testAddSectorFail() {
//		SectorEntity sector = new SectorEntity(101, "jhgfdfgh", "bnm");
//		assertEquals(true, sectorDAO.addSector(sector));
//	}
//
	@Test
	@Ignore
	public void testDeleteSectorSuccess() {
		SectorEntity sector = sectorDAO.getSectorById(101);
		assertEquals(true, sectorDAO.deleteSector(sector));
	}

	@Test(expected = IllegalArgumentException.class)
	@Ignore
	public void testDeleteSectorFail() {
		SectorEntity sector = sectorDAO.getSectorById(34);
		assertEquals(true, sectorDAO.deleteSector(sector));
	}
}
