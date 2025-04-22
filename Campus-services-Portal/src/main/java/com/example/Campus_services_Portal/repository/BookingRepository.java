package com.example.Campus_services_Portal.repository;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Campus_services_Portal.enums.BookingStatus;
import com.example.Campus_services_Portal.model.Booking;


    public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserId(Long userId);
    List<Booking> findByRoomId(Long roomId);
    List<Booking> findByStatus(BookingStatus status);
    List<Booking> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);
}

