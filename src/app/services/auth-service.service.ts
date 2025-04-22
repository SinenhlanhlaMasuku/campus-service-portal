import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://your-api-url.com/api/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Make sure this returns an Observable
  validateCredentials(role: string, username: string, password: string): Observable<{valid: boolean, phoneNumber?: string}> {
    // In a real app, you would call your backend API:
    // return this.http.post<{valid: boolean, phoneNumber: string}>(`${this.API_URL}/validate`, { role, username, password });
    
    // Mock implementation for testing:
    const mockUsers = [
      { role: 'admin', username: 'admin1', password: 'admin123', phoneNumber: '+1234567890' },
      { role: 'lecturer', username: 'lecturer1', password: 'lecturer123', phoneNumber: '+1234567891' },
      { role: 'student', username: 'student1', password: 'student123', phoneNumber: '+1234567892' }
    ];

    const user = mockUsers.find(u => 
      u.role === role && 
      u.username === username && 
      u.password === password
    );

    return of({
      valid: !!user,
      phoneNumber: user?.phoneNumber
    });
  }

  login(role: string, username: string): void {
    // Store user in local storage or session
    localStorage.setItem('currentUser', JSON.stringify({ role, username }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}