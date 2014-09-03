package com.sanjay.dvdrental.web;

import java.util.LinkedList;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sanjay.dvdrental.model.User;

public class UserResult {
	boolean success=true;
	@JsonProperty(value="data")
	LinkedList<User> users;
	
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public LinkedList<User> getUsers() {
		return users;
	}
	public void setUsers(LinkedList<User> users) {
		this.users = users;
	}
}
