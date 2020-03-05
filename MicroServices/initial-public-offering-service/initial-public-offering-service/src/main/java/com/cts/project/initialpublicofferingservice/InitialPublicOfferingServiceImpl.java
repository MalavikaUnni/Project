package com.cts.project.initialpublicofferingservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InitialPublicOfferingServiceImpl implements InitialPublicOfferingService {

	
	@Autowired
	InitialPublicOfferingRepo ipoRepo;
	
	@Override
	public List<InitialPublicOffering> getAllInitialPublicOffering() {
		return ipoRepo.findAll();
	}
	@Override
	public InitialPublicOffering  getTnitialPublicOfferingById(int id) {
		Optional<InitialPublicOffering> ipoList = ipoRepo.findById(id);
		InitialPublicOffering ipo = ipoList.get();
		return ipo;
	}
	@Override
	public InitialPublicOffering saveInitialPublicOffering(InitialPublicOffering ipo) {
		InitialPublicOffering newIpo = ipoRepo.save(ipo);
		return newIpo;
	}
	@Override
	public void deleteInitialPublicOffering(int id) {
		ipoRepo.deleteById(id);
	}
	@Override
	public InitialPublicOffering updateInitialPublicOffering(InitialPublicOffering ipo) {
		InitialPublicOffering updateIpo = ipoRepo.save(ipo);
		return updateIpo;
	}
}
