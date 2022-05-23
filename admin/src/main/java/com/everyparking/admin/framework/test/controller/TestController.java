package com.everyparking.admin.framework.test.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.everyparking.admin.framework.test.service.TestService;

@Controller
@RequestMapping("/test")
public class TestController {
	
	@Autowired
	private TestService testService;
	
	@RequestMapping("/test")
	public String DBTest(Model model) {	
		model.addAttribute("test", testService.DBTest());
		return "/test/test";
	}
	
}
