package com.java.web.JavaWebBackend.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.java.web.JavaWebBackend.Model.MailStructer;


@Service
public class MailService {

	 @Autowired
	    private JavaMailSender mailSender;

	    @Value("${spring.mail.username}")
	    private String fromEmail;

	    public void sendMail(MailStructer mailStructer) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setFrom(fromEmail);
	        message.setSubject(mailStructer.getSubject());
	        message.setText("Mail: " + mailStructer.getMail() + "\nPhone: " + mailStructer.getPhone() + "\n\n" + mailStructer.getWrite());

	        
	        message.setTo("karakusataberkay@gmail.com");

	        mailSender.send(message);
	    }
}
