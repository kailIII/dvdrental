package com.sanjay.dvdrental.svc;

import org.springframework.stereotype.Service;

import com.sanjay.dvdrental.model.Menu;

@Service
public class MenuService {
	public Menu getMainMenu(String user){
		Menu root = buildRootMenu();
		root.getItems().add(childMenu1(root));
		root.getItems().add(childMenu2(root));
		return root;
	}
	
	private Menu buildRootMenu(){
		Menu menu = new Menu();
		menu.setId(new Integer(1));
		menu.setText("menu1");
		menu.setIconCls("menu_admin");
		menu.setParent_id(null);
		menu.setClassName(null);
		menu.setLeaf(false);
		return menu;
	}
	private Menu childMenu2(Menu parent){
		Menu menu = new Menu();
		menu.setId(new Integer(3));
		menu.setText("menu12");
		menu.setIconCls("menu_users");
		menu.setParent_id(parent.getId());
		menu.setClassName("panel");
		menu.setLeaf(true);
		return menu;
	}
	
	private Menu childMenu1(Menu parent){
		Menu menu = new Menu();
		menu.setId(new Integer(2));
		menu.setText("menu11");
		menu.setIconCls("menu_groups");
		menu.setParent_id(parent.getId());
		menu.setClassName("panel");
		menu.setLeaf(true);
		return menu;
	}
}
