package com.sanjay.dvdrental.web;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

import org.springframework.web.context.WebApplicationContext;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:test-servlet-context.xml", "classpath:root-context.xml"})
@WebAppConfiguration
public class MenuControllerTest {

	@Autowired
	  private WebApplicationContext wac;

	  private MockMvc mockMvc;

	  @Before
	  public void setup() {
	    this.mockMvc = webAppContextSetup(this.wac).build();
	  }
	@Test
	public void testMainMenu() throws Exception {
		 this.mockMvc.perform(get("/menu/main").accept("application/json"))
	        .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print())
	        .andExpect(content().contentType("application/json;charset=UTF-8"));
	}

}
