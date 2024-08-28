package com.ecommerce.api;

import com.ecommerce.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthAPI {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody UserCredentials credentials) {
        return authService.login(credentials.getUsername(), credentials.getPassword());
    }

    @PostMapping("/register")
    public String register(@RequestBody UserCredentials credentials) {
        return authService.register(credentials.getUsername(), credentials.getPassword());
    }}
