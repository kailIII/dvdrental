package com.sanjay.dvdrental.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.web.context.WebApplicationContext;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:test-servlet-context.xml", "classpath:root-context.xml"})
@WebAppConfiguration
public class UserControllerTest {

	@Autowired
	  private WebApplicationContext wac;

	  private MockMvc mockMvc;

	  @Before
	  public void setup() {
	    this.mockMvc = webAppContextSetup(this.wac).build();
	  }
	@Test
	public void testGetUsers() throws Exception {
		 this.mockMvc.perform(get("/security/users").accept("application/json"))
	        .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print())
	        .andExpect(content().contentType("application/json;charset=UTF-8"));
	}
	@Test
	public void testGetGroups() throws Exception {
		 this.mockMvc.perform(get("/security/groups").accept("application/json"))
	        .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print())
	        .andExpect(content().contentType("application/json;charset=UTF-8"));
	}
}
