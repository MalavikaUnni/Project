package com.cts.project.userservice;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cts.project.userservice.User;
import com.cts.project.userservice.UserDTO;
import com.cts.project.userservice.UserRepo;
import com.cts.project.userservice.UserService;



@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	JavaMailSender jms;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Override
	public List<UserDTO> getAllUsers() {
		List<User> user=userRepo.findAll();
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
		Optional<User> user=userRepo.findById(id);
		UserDTO userDTO=new UserDTO();
		BeanUtils.copyProperties(user.orElse(null), userDTO);
		return userDTO;
	}

	@Override
	public UserDTO saveUser(UserDTO user) {
		User newUser=new User();
		BeanUtils.copyProperties(user, newUser);
		newUser.setUserType("ROLE_USER");
		newUser=userRepo.save(newUser);
		logger.info("Email to --> {}",newUser.getEmail());
		
		
			try {
				MimeMessage mimeMessage=jms.createMimeMessage();
				MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,"utf-8");
				helper.setFrom("babymol.bobby@gmail.com");
				helper.setTo(newUser.getEmail());
				helper.setSubject("Thaank You for Joining StockCharts");
				helper.setText("Account created click on <a href='http://localhost:4200/activate?"+newUser.getEmail()+"'> Click </a>");
				jms.send(mimeMessage);			
				} 
		   catch (Exception e) {
				e.printStackTrace();
			}
		BeanUtils.copyProperties(newUser, user);
		return user;
	}

	@Override
	public void deleteUser(int id) {
		userRepo.deleteById(id);
		
	}

	@Override
	public UserDTO updateUser(UserDTO user) {
		User newUser=new User();
		BeanUtils.copyProperties(user,newUser);
		BeanUtils.copyProperties(userRepo.save(newUser), user);
		return user;
	}

	@Override
	public boolean activateUser(String email) {
		User user=userRepo.findByEmail(email);
		logger.info("Email--> {}",email);;
		if(!user.isEnabled()) {
			user.setEnabled(true);
			userRepo.save(user);
			return true;
		}
		else
		return false;
	}

	@Override
	public UserDTO getUserByUsernameAndPassword(String username, String password) throws NoSuchElementException{

		User user = userRepo.findByUsernameAndPassword(username, password).get();
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(user, userDTO);
		return userDTO;
	
		
	}
	
	

}
