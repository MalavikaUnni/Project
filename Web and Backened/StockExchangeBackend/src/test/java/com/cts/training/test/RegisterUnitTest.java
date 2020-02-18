package com.cts.training.test;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.cts.training.dao.RegisterDAO;
import com.cts.training.dao.impl.RegisterDAOImpl;
import com.cts.training.model.Register;

public class RegisterUnitTest {

	private static AnnotationConfigApplicationContext context;
	private static RegisterDAO registerDAO;
	private static Register register;
	
	@BeforeClass
	public static void init()
	{
		context=new AnnotationConfigApplicationContext();
		context.scan("com.cts.training");
		context.refresh();
		register=(Register) context.getBean("register");
		registerDAO=(RegisterDAO) context.getBean("registerDAO");
	}
	
	
//	@Test
//	public void testGetAllUsers() {
//	List<Register> users=registerDAO.getAllUsers();
//	assertEquals(2, users.size());
//	}

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
	
	@Test(expected=NullPointerException.class)
	public void test_delete_user_fail()
	{
		Register reg=registerDAO.getUserById(44);
		assertEquals("Krishna",reg.getName());
	}
	

	@Test
	public void test_Update_User() {
		Register reg=registerDAO.getUserById(101);
		reg.setUsername("Maalus");
		assertEquals(true, registerDAO.saveOrUpdateUser(reg));
		
	}
	
	@Test(expected=NullPointerException.class)
	public void test_get_user_byId_fail()
	{
		Register reg=registerDAO.getUserById(50);
		assertEquals("Krishna",reg.getName());
	}
	
	


	
}


