package com.cts.project.stockpriceservice;

public class StockExchangeDTO {
	
	private Integer id;
	private String exchangeName;
	private String contactAddress;
	private String brief;
	private String remarks;
	
	
	public StockExchangeDTO()
	{
		
	}


	public StockExchangeDTO(Integer id, String exchangeName, String contactAddress, String brief, String remarks) {
		super();
		this.id = id;
		this.exchangeName = exchangeName;
		this.contactAddress = contactAddress;
		this.brief = brief;
		this.remarks = remarks;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getExchangeName() {
		return exchangeName;
	}


	public void setExchangeName(String exchangeName) {
		this.exchangeName = exchangeName;
	}


	public String getContactAddress() {
		return contactAddress;
	}


	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}


	public String getBrief() {
		return brief;
	}


	public void setBrief(String brief) {
		this.brief = brief;
	}


	public String getRemarks() {
		return remarks;
	}


	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}


	@Override
	public String toString() {
		return "StockExchangeDTO [id=" + id + ", exchangeName=" + exchangeName + ", contactAddress=" + contactAddress
				+ ", brief=" + brief + ", remarks=" + remarks + "]";
	}

	

}
