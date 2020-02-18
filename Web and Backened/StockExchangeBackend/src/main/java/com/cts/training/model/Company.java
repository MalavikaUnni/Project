package com.cts.training.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Component
//@Table(name="company")
public class Company implements Serializable {

	private static final long serialVersionUID = -6721988738619310856L;
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String sector;
	private String ceoName;
	private double turnOver;
	
	public Company() {
	}

	public Company(int id, String name, String sector, String ceoName, double turnOver) {
		super();
		this.id = id;
		this.name = name;
		this.sector = sector;
		this.ceoName = ceoName;
		this.turnOver = turnOver;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
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
		return "Company [id=" + id + ", name=" + name + ", sector=" + sector + ", ceoName=" + ceoName + ", turnOver="
				+ turnOver + "]";
	}
	
	
	

}
