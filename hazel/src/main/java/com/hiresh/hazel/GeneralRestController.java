package com.hiresh.hazel;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeneralRestController {

	@GetMapping("/genRoomId")
	public String getNewRoomId() {
		return "XYZ";
	}
	
}
