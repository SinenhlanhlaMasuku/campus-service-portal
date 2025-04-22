package com.example.Campus_services_Portal.model;

import java.time.LocalDateTime;
import java.util.Random;

import com.example.Campus_services_Portal.enums.BookingStatus;

import jakarta.persistence.*;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Room room;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String purpose;
    private BookingStatus status;

    // Getters and setters
}


