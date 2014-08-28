package com.sanjay.dvdrental.web;

import java.util.LinkedList;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

import com.sanjay.dvdrental.model.Menu;
import com.sanjay.dvdrental.model.Root;
import com.sanjay.dvdrental.svc.MenuService;


@RestController
public class MenuController {
	@Inject
	MenuService service;
	
	@RequestMapping(value="menu/main")
	public Root mainMenu(){
		String user="";
		Menu menu = service.getMainMenu(user);
		Root root = new Root();
		LinkedList<Menu> sub = new LinkedList<Menu>();
		sub.add(menu);
		root.setItems(sub);
		return root;
	}
}
