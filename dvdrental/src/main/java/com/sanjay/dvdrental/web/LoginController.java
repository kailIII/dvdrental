package com.sanjay.dvdrental.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sanjay.dvdrental.model.LoginResult;

@RestController
@RequestMapping(value="/auth")
public final class LoginController {
	Logger logger = LoggerFactory.getLogger(LoginController.class);
	@RequestMapping(value="/login")
	public LoginResult login(@RequestParam String user, @RequestParam String password){
		logger.info("User: "+user,"password: "+password);
		LoginResult result =  new LoginResult();
		result.setSuccess(true);
		result.setMsg("all set");
		try {
			Thread.sleep(500);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return result;
	}
	@RequestMapping(value="/logout")
	public LoginResult logout(){
		logger.info("logout");
		LoginResult result =  new LoginResult();
		result.setSuccess(true);
		result.setMsg("logout successful");
		return result;
	}
	@RequestMapping(value="/keepAlive")
	public LoginResult keppAlive(){
		logger.info("logout");
		LoginResult result =  new LoginResult();
		result.setSuccess(true);
		result.setMsg("ping successful");
		return result;
	}
}
