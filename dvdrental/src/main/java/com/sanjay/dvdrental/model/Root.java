package com.sanjay.dvdrental.model;

import java.util.LinkedList;
import java.util.List;

public class Root {
	List<Menu> items = new LinkedList<Menu>();

	public List<Menu> getItems() {
		return items;
	}

	public void setItems(List<Menu> items) {
		this.items = items;
	}
}
