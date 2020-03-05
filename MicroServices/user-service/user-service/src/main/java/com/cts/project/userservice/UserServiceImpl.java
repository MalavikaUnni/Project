package com.cts.project.userservice;

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
		User users=userRepo.save(newUser);
		
		
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
		if(!user.isEnabled()) {
			user.setEnabled(true);
			userRepo.save(user);
			return true;
		}
		else
		return false;
	}

}
