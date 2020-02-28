package com.cts.project.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cts.project.bean.User;
import com.cts.project.dao.UserDAO;
import com.cts.project.dto.UserDTO;
import com.cts.project.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	UserDAO userDao;
	
	@Autowired
	JavaMailSender jms;
	
	
	@Override
	public List<UserDTO> getAllUsers() {
		List<User> user=userDao.findAll();
		List<UserDTO> userDto=new ArrayList<UserDTO>();
		for(User userentity:user)
		{
			UserDTO usersDTO=new UserDTO();
			BeanUtils.copyProperties(userentity, usersDTO);
			userDto.add(usersDTO);
		}
		return userDto;
	}

	@Override
	public UserDTO getUserById(int id) {
		Optional<User> user=userDao.findById(id);
		UserDTO userDTO=new UserDTO();
		BeanUtils.copyProperties(user.orElse(null), userDTO);
		return userDTO;
	}

	@Override
	public UserDTO saveUser(UserDTO user) {
		User newUser=new User();
		BeanUtils.copyProperties(user, newUser);
		User users=userDao.save(newUser);
		
		
			try {
				MimeMessage mimeMessage=jms.createMimeMessage();
				MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,"utf-8");
				helper.setFrom("babymol.bobby@gmail.com");
				helper.setTo(users.getEmail());
				helper.setSubject("Thaank You for Joining StockCharts");
				helper.setText("Account created click on <a href='http://localhost:4200/activate?"+newUser.getEmail()+"'> Click </a>");
				jms.send(mimeMessage);			
				} 
		   catch (Exception e) {
				e.printStackTrace();
			}
		BeanUtils.copyProperties(users, user);
		return user;
	}

	@Override
	public void deleteUser(int id) {
		userDao.deleteById(id);
		
	}

	@Override
	public UserDTO updateUser(UserDTO user) {
		User newUser=new User();
		BeanUtils.copyProperties(user,newUser);
		BeanUtils.copyProperties(userDao.save(newUser), user);
		return user;
	}

	@Override
	public boolean activateUser(String email) {
		User user=userDao.findByEmail(email);
		if(!user.isEnabled()) {
			user.setEnabled(true);
			userDao.save(user);
			return true;
		}
		else
		return false;
	}

}
