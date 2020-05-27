package com.hiresh.hazel;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

	@RequestMapping("/interview/{id}")
	public String redirectToInterviewSession(@PathVariable  String id) {
		System.out.println("redirection recieved");
	 return "newRoom";
	}
}
