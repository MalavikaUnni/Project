package com.cts.project.userservice;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
@SpringBootTest(classes=UserServiceApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
class IntegrationTesting {
	@LocalServerPort
	private int port;
	HttpHeaders headers = new HttpHeaders();
	TestRestTemplate restTemplate=new TestRestTemplate();
	@Test
	public void test()  throws Exception{
		String url="http://localhost:"+port+"/users";
		System.out.println("Port : :"+url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(null,headers);
		ResponseEntity<String> response= restTemplate.exchange(url,HttpMethod.GET,entity,String.class);
		String expected="{\"id\":12,\"username\":\"Libin\",\"password1\":\"tesla\"";
		System.out.println("TEST 1 :: Response Body :::: " + response.getBody());
		assertTrue(response.getBody().contains(expected));
	}
	@Test
	public void test1()  throws Exception{
		String url="http://localhost:"+port+"/users/1";
		System.out.println("Port : :"+url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(null,headers);
		ResponseEntity<String> response= restTemplate.exchange(url,HttpMethod.GET,entity,String.class);
		String expected="{\"id\":12,\"username\":\"Libin\",\"password1\":\"tesla\"";
		System.out.println("TEST 1 :: Response Body :::: " + response.getBody());
		assertTrue(response.getBody().contains(expected));
	}
	@Test
	public void addTest()  throws Exception{
		String url="http://localhost:"+port+"/users";
		System.out.println("Port : :"+url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(null,headers);
		ResponseEntity<String> response= restTemplate.exchange(url,HttpMethod.GET,entity,String.class);
		String expected="{\"id\":11,\"username\":\"abinjoshi\",\"password1\":\"telsuko\"";
		System.out.println("TEST 1 :: Response Body :::: " + response.getBody());
		assertTrue(response.getBody().contains(expected));
	}
}