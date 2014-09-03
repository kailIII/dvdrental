package com.sanjay.dvdrental.web;

import java.util.LinkedList;
import java.util.List;

import com.sanjay.dvdrental.model.Menu;

public class MenuResult {
	List<Menu> items = new LinkedList<Menu>();

	public List<Menu> getItems() {
		return items;
	}

	public void setItems(List<Menu> items) {
		this.items = items;
	}
}
