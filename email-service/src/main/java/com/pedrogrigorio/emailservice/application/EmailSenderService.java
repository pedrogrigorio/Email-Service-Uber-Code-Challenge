package com.pedrogrigorio.emailservice.application;

import com.pedrogrigorio.emailservice.adapters.EmailSenderGateway;
import com.pedrogrigorio.emailservice.core.EmailSenderUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService implements EmailSenderUseCase {

    private final EmailSenderGateway emailSenderGateway;

    @Autowired
    public EmailSenderService(EmailSenderGateway emailGateway) {
        this.emailSenderGateway = emailGateway;
    }

    @Override
    public void sendEmail(String from, String to, String subject, String body) {
        this.emailSenderGateway.sendEmail(from, to, subject, body);
    }
}
