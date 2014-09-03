package com.sanjay.dvdrental.svc;

import java.util.LinkedList;

import org.springframework.stereotype.Service;

import com.sanjay.dvdrental.model.Group;
import com.sanjay.dvdrental.model.User;

@Service
public class UserService {
	public LinkedList<User> getAllUsers(){
		LinkedList<User> list =  new LinkedList<User>();
		list.add(buildUser());
		return list;
	}
	
	public User buildUser() {
		User user  = new User();
		return user;
		
	}

	public LinkedList<Group> getAllGroups() {
		LinkedList<Group> list =  new LinkedList<Group>();
		list.add(new Group());

		return list;
	}
}
