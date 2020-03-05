package com.cts.project.initialpublicofferingservice;

import java.util.List;

public interface InitialPublicOfferingService {
	
	public List<InitialPublicOffering> getAllInitialPublicOffering();
	
	public InitialPublicOffering getTnitialPublicOfferingById(int id);
	
	public InitialPublicOffering saveInitialPublicOffering(InitialPublicOffering ipo);
	
	public void deleteInitialPublicOffering(int id);
	
	public InitialPublicOffering updateInitialPublicOffering(InitialPublicOffering ipo);
}
