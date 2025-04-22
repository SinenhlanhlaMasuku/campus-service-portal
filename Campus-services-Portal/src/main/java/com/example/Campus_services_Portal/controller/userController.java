package com.example.Campus_services_Portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Campus_services_Portal.services.userService;

@RestController
@RequestMapping("/api/auth")
public class userController {

    @Autowired
    private userService UserService;

    @PostMapping("/login")
    public ResponseEntity<userService> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(UserService.authenticate(request));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestBody RefreshTokenRequest request) {
        return ResponseEntity.ok(UserService.refreshToken(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestBody RefreshTokenRequest request) {
        UserService.logout(request);
        return ResponseEntity.noContent().build();
    }
}

