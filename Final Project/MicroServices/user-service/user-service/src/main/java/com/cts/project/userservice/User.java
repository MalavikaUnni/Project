package com.cts.project.userservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name="StockUser")
//@XmlRootElement
public class User implements Serializable{
	
	
	private static final long serialVersionUID = 7317015361006830435L;
	
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String email;
	private long phone;
	private String username;
	private String password;
	private boolean enabled;
	private String userType="ROLE_USER";
	
//	@Transient
//    String regStatus;
	
	
	public User()
	{
		
	}


	public User(Integer id, String name, String email, long phone, String username, String password, boolean enabled,
			String userType) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.enabled = enabled;
		this.userType = userType;

	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public long getPhone() {
		return phone;
	}


	public void setPhone(long phone) {
		this.phone = phone;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public boolean isEnabled() {
		return enabled;
	}


	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}


	public String getUserType() {
		return userType;
	}


	public void setUserType(String userType) {
		this.userType = userType;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", username=" + username
				+ ", password=" + password + ", enabled=" + enabled + ", userType=" + userType + "]";
	}

	
	
	
}
