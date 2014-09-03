package com.sanjay.dvdrental.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sanjay.dvdrental.svc.UserService;

@RestController
public class UserController {
	Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	UserService userService;
	@RequestMapping(value="security/users", method=RequestMethod.GET)	
	public UserResult getUsers() {
		logger.info("Calling getUsers");
		UserResult result =  new UserResult();
		result.setUsers(userService.getAllUsers());
		return result;
	}
	
	@RequestMapping(value="security/groups", method=RequestMethod.GET)	
	public GroupResult getGroups() {
		logger.info("Calling getGrpups");
		GroupResult result =  new GroupResult();
		result.setGroups(userService.getAllGroups());
		return result;
	}
}
