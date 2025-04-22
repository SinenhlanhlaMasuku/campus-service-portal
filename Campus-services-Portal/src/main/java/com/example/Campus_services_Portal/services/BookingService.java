// package com.example.Campus_services_Portal.services;

// import org.springframework.stereotype.Service;

// import com.example.Campus_services_Portal.model.*;

// import com.example.Campus_services_Portal.repository.*;

// @Service
// @RequiredArgsConstructor
// public class BookingService {
//     private final BookingRepository bookingRepository;
//     private final UserRepository userRepository;
//     private final RoomRepository roomRepository;

//     public Booking createBooking(BookingRequest request) {
//         // Validation logic
//         User user = userRepository.findById(request.getUserId())
//                 .orElseThrow(() -> new ResourceNotFoundException("User not found"));

//         Room room = roomRepository.findById(request.getRoomId())
//                 .orElseThrow(() -> new ResourceNotFoundException("Room not found"));

//         // Check for overlapping bookings
//         if (bookingRepository.existsByRoomAndTimeRange(
//                 room.getId(), request.getStartTime(), request.getEndTime())) {
//             throw new ConflictException("Room already booked for this time");
//         }

//         Booking booking = new Booking();
//         // Map request to entity
//         return bookingRepository.save(booking);
//     }

//     // Other service methods
// }
