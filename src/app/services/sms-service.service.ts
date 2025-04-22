import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private lastOtp = '';

  constructor() {}

  // Make sure this returns an Observable
  sendOtp(phoneNumber: string): Observable<{success: boolean}> {
    // Generate a random 6-digit OTP
    this.lastOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    console.log(`Mock SMS sent to ${phoneNumber} with OTP: ${this.lastOtp}`);
    
    // Simulate API call delay
    return of({ success: true }).pipe(delay(1000));
  }

  // Make sure this returns an Observable
  verifyOtp(otp: string): Observable<{valid: boolean}> {
    const isValid = otp === this.lastOtp;
    return of({ valid: isValid }).pipe(delay(500));
  }
}