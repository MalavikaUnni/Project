package com.cts.project.stockpriceservice;

public class CompanyDTO {
	
	
	private Integer id;
	private String name;
	private String city;
	//private String sector;
	private String ceoName;
	private double turnOver;
	
	public CompanyDTO()
	{
		
	}

	public CompanyDTO(Integer id, String name, String city, String ceoName, double turnOver) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.ceoName = ceoName;
		this.turnOver = turnOver;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCeoName() {
		return ceoName;
	}

	public void setCeoName(String ceoName) {
		this.ceoName = ceoName;
	}

	public double getTurnOver() {
		return turnOver;
	}

	public void setTurnOver(double turnOver) {
		this.turnOver = turnOver;
	}

	@Override
	public String toString() {
		return "CompanyDTO [id=" + id + ", name=" + name + ", city=" + city + ", ceoName=" + ceoName + ", turnOver="
				+ turnOver + "]";
	}
	
	

}
