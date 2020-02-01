package com.cts.project.dao.impl;


import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.project.dao.RegisterDAO;
import com.cts.project.hibernate.HibernateUtil;
import com.cts.project.model.Register;


public class RegisterDAOImpl implements RegisterDAO {

	SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	public boolean saveUser(Register register) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.save(register);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean updateUser(Register register) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.update(register);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean deleteUser(Register register) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.delete(register);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	public Register getUserById(int id) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			Register register = session.get(Register.class, id);

			tx.commit();
			session.close();
			return register;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

	public List<Register> getAllUsers() {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			List<Register> UserRegistration = session.createQuery("from Register").list();
			tx.commit();
			session.close();
			return UserRegistration;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}
}
