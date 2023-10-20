package com.pedrogrigorio.emailservice.adapters;

public interface EmailSenderGateway {
    void sendEmail(String from, String to, String subject, String body);
}
