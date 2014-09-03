package com.sanjay.dvdrental.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {

	Integer id = 1;
	String name = "Loiane Groner";
	String userName = "loiane";
	String email = "me@loiane.com";
	String picture = "FE03. png";
	
	@JsonProperty(value="Group_id")
	Integer groupId = 1;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	public Integer getGroupId() {
		return groupId;
	}

	public void setGroupId(Integer groupId) {
		this.groupId = groupId;
	}

}
