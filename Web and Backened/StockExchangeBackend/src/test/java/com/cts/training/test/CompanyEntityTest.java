package com.cts.training.test;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.dao.impl.CompanyDAOImpl;
import com.cts.training.model.Company;

public class CompanyEntityTest {

	private static AnnotationConfigApplicationContext context;
	private static CompanyDAO companyDAO;
	private static Company company;
	
	@BeforeClass
	public static void init()
	{
		context=new AnnotationConfigApplicationContext();
		context.scan("com.cts.training");
		context.refresh();
		company=(Company) context.getBean("company");
		companyDAO=(CompanyDAO) context.getBean("companyDAO");
	}
	
	
	@Test
	public void testGetAllUsers() {
	List<Company> companys=companyDAO.getAllCompanies();
	assertEquals(1, companys.size());
	}

//	@Test
//	public void testAddUser() {
//		Register re= new Register(103,"arohi@gmail.com", "arohi",4982249,"paaaaaa", "aro");
//		assertEquals(true, registerDAO.saveUser(re));
//	}
	
	
//	@Test
//	public void test_delete_user() {
//		Register reg=registerDAO.getUserById(46);
//		assertEquals(true, registerDAO.deleteUser(reg));
//	}
	
//	@Test(expected=NullPointerException.class)
//	public void test_delete_user_fail()
//	{
//		Register reg=registerDAO.getUserById(44);
//		assertEquals("Krishna",reg.getName());
//	}
//	
//
//	@Test
//	public void test_Update_User() {
//		Register reg=registerDAO.getUserById(101);
//		reg.setUsername("Maalus");
//		assertEquals(true, registerDAO.updateUser(reg));
//		
//	}
	
	@Test(expected=NullPointerException.class)
	public void test_get_user_byId_fail()
	{
		Company com=companyDAO.getCompanyById(300);
		assertEquals("TCs",com.getName());
	}
	
	


	
}


