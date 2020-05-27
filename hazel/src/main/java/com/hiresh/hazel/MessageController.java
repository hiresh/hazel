package com.hiresh.hazel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {
	
	@Autowired
	private SimpMessagingTemplate smt;
	
	 @MessageMapping("/hello/{id}")
	 public void greeting(@DestinationVariable String id,ClientMessage message) throws Exception {
	    smt.convertAndSend("/topic/sub/"+id,message);
	  }
}
