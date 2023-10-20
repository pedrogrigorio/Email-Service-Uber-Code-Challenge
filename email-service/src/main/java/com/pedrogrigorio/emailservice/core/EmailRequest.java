package com.pedrogrigorio.emailservice.core;

public record EmailRequest(String from, String to, String subject, String body) {
}
