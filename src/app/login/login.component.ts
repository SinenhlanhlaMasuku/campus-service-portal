import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { SmsService } from '../services/sms-service.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  userRoles = ['admin', 'lecturer', 'student'];
  showOtpField = false;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private smsService: SmsService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      role: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      otp: ['']
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    if (!this.showOtpField) {
      // First step: validate credentials and send OTP
      const { role, username, password } = this.loginForm.value;
      
      this.authService.validateCredentials(role, username, password).subscribe(
        (response: any) => {
          if (response.valid) {
            // Send SMS with OTP
            this.smsService.sendOtp(response.phoneNumber).subscribe(
              (smsResponse: any) => {
                this.isLoading = false;
                this.showOtpField = true;
              },
              (smsError: any) => {
                this.isLoading = false;
                this.errorMessage = 'Failed to send OTP. Please try again.';
              }
            );
          } else {
            this.isLoading = false;
            this.errorMessage = 'Invalid credentials. Please try again.';
          }
        },
        (error: any) => {
          this.isLoading = false;
          this.errorMessage = 'An error occurred. Please try again.';
        }
      );
    } else {
      // Second step: validate OTP
      const otp = this.loginForm.value.otp;
      
      this.smsService.verifyOtp(otp).subscribe(
        (otpResponse: any) => {
          if (otpResponse.valid) {
            // Complete login
            const { role, username } = this.loginForm.value;
            this.authService.login(role, username);
            
            // Navigate based on role
            switch(role) {
              case 'admin':
                this.router.navigate(['/admin-dashboard']);
                break;
              case 'lecturer':
                this.router.navigate(['/lecturer-dashboard']);
                break;
              case 'student':
                this.router.navigate(['/student-dashboard']);
                break;
              default:
                this.router.navigate(['/']);
            }
          } else {
            this.isLoading = false;
            this.errorMessage = 'Invalid OTP. Please try again.';
          }
        },
        (otpError: any) => {
          this.isLoading = false;
          this.errorMessage = 'OTP verification failed. Please try again.';
        }
      );
    }
  }
}
