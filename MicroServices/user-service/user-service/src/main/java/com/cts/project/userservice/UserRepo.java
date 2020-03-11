package com.cts.project.userservice;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.userservice.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	User findByEmail(String email);

	Optional<User> findByUsernameAndPassword(String username, String password);

}
