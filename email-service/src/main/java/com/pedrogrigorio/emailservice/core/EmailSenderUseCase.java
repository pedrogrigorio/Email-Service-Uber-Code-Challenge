package com.pedrogrigorio.emailservice.core;

public interface EmailSenderUseCase {
    void sendEmail(String from, String to, String subject, String body);
}
