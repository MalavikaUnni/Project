package com.cts.project.userservice;

public class UserDTO {
	
	
	
	
	private Integer id;
	private String name;
	private String email;
	private long phone;
	private String username;
	private String password;
	private boolean enabled;
	
	
	public UserDTO()
	{
		
	}


	public UserDTO(Integer id, String name, String email, long phone, String username, String password,
			boolean enabled) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.enabled = enabled;
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


	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", username="
				+ username + ", password=" + password + ", enabled=" + enabled + "]";
	}
	
	

}
