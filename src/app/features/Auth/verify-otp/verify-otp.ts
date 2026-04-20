import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Auth } from '../services/auth';
import { VerifyOtpResponse } from '../../../core/models/model';
@Component({
  selector: 'app-verify-otp',
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp implements OnInit {
  phone = '';
  maskedPhone = '';
  otp: string[] = ['', '', '', '', '', ''];
  isLoading = false;

  constructor(private Auth: Auth, private router: Router) {}

  ngOnInit() {
    this.phone = sessionStorage.getItem('reset_phone') || '';
    if (!this.phone) { this.router.navigate(['/auth/forgot-password']); return; }
    this.maskedPhone = this.phone.slice(-4);
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '');
    input.value = val;
    this.otp[index] = val;

    if (val && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  }

  onKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  }

  submit() {
    const otpValue = this.otp.join('');
    if (otpValue.length < 6) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'أدخل الكود كامل', confirmButtonText: 'حسناً' });
      return;
    }

    this.isLoading = true;

    this.Auth.verifyOtp({ phone: this.phone, otp: otpValue }).subscribe({
      next: (res:VerifyOtpResponse) => {
        this.isLoading = false;
        sessionStorage.setItem('otp_verified', 'true');
        this.router.navigate(['/auth/reset-pass']);
      },
      error: (res:VerifyOtpResponse) => {
        this.isLoading = false;
        Swal.fire({ icon: 'error', title: 'كود خاطئ', text: res.message, confirmButtonText: 'حسناً' });
      }
    });
  }
}