package com.sanjay.dvdrental.web;

import java.util.LinkedList;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sanjay.dvdrental.model.Group;
import com.sanjay.dvdrental.model.User;

public class GroupResult {
	boolean success=true;
	@JsonProperty(value="data")
	LinkedList<Group> groups;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public LinkedList<Group> getGroups() {
		return groups;
	}
	public void setGroups(LinkedList<Group> groups) {
		this.groups = groups;
	}
}
