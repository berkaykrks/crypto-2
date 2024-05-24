package com.java.web.JavaWebBackend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.java.web.JavaWebBackend.MailService.MailService;
import com.java.web.JavaWebBackend.Model.MailStructer;




@Controller
@RequestMapping("/submit-contact")
public class WebSiteController {
	
	    
	    @Autowired
	    private MailService mailService;
	    
	    @PostMapping
	    @ResponseBody
	    public String submitContactForm(@RequestParam("subject") String subject,
	                                    @RequestParam("mail") String mail,
	                                    @RequestParam("phone") String phone,
	                                    @RequestParam("write") String write) {
	        MailStructer mailStructer = new MailStructer();
	        mailStructer.setSubject(subject);
	        mailStructer.setMail(mail);
	        mailStructer.setPhone(phone);
	        mailStructer.setWrite(write);
	        
	        mailService.sendMail(mailStructer);    
	        return "Mail successfully sent!";
	    }
	    
}
