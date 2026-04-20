import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';
import { AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-verify-acc',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './verify-acc.html',
  styleUrl: './verify-acc.css',
})
export class VerifyAcc implements OnInit, AfterViewInit {

  phone = '';
  mode = 'register';

  otp: string[] = ['', '', '', '', '', ''];

  isLoading = false;
  isResending = false;

  constructor(
    private router: Router,
    private Auth: Auth
  ) { }

  ngOnInit(): void {
    this.phone = history.state?.phone ?? '';
    this.mode = history.state?.mode ?? 'register';

    if (!this.phone) this.router.navigate(['/auth/register']);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.focusInput(0), 0);
  }


  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(0, 1);

    input.value = value;
onInput(event: Event, index: number): void {
  const input = event.target as HTMLInputElement;
  const value = input.value.replace(/\D/g, '');

  // Handle paste or multiple chars
  if (value.length > 1) {
    input.value = ''; // clear before fill
    this.fillOtp(value);
    return;
  }

  // Always keep only the LAST typed digit (not old+new)
  const digit = value.slice(-1);
  this.otp[index] = digit;

  // Force the DOM input to show only 1 character
  input.value = digit;

  if (digit && index < 5) {
    this.focusInput(index + 1);
  }

  // Delay auto-verify so DOM settles first
  if (this.otpValue.length === 6) {
    setTimeout(() => this.verify(), 100);
  }
}
  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace') {
      if (this.otp[index]) {
        this.otp[index] = '';
      } else if (index > 0) {
        this.focusInput(index - 1);
      }
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasteData = event.clipboardData?.getData('text') || '';
    this.fillOtp(pasteData);
  }

  fillOtp(value: string): void {
    const digits = value.replace(/\D/g, '').slice(0, 6).split('');

    this.otp = this.otp.map((_, i) => digits[i] || '');

    setTimeout(() => {
      this.focusInput(Math.min(digits.length, 5));
    }, 0);
  }

  focusInput(index: number): void {
    const el = document.getElementById(`otp-${index}`) as HTMLInputElement;
    if (el) el.focus();
  }

  get otpValue(): string {
    return this.otp.join('');
  }

  get isComplete(): boolean {
    return this.otpValue.length === 6;
  }

  // ================= Verify =================

  verify(): void {
    if (!this.isComplete) return;

    this.isLoading = true;

    const body = { phone: this.phone, otp: this.otpValue };

    const request$ = this.mode === 'register'
      ? this.Auth.verifyAcc(body)
      : this.Auth.verifyOtp(body);

    request$.subscribe({
      next: () => {
        this.isLoading = false;

        if (this.mode === 'register') {
          Swal.fire({
            icon: 'success',
            title: 'تم التحقق!',
            text: 'تم تفعيل حسابك بنجاح',
            confirmButtonText: 'سجل الدخول'
          }).then(() => this.router.navigate(['/auth/login']));
        } else {
          this.router.navigate(['/auth/'], {
            state: { phone: this.phone, otp: this.otpValue }
          });
        }
      },
      error: (err) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'كود خاطئ',
          text: err?.error?.message || 'تأكد من الكود وحاول مرة تانية'
        });
      }
    });
  }

  // ================= Resend =================

  resend(): void {
    this.isResending = true;

    this.Auth.sendOtp({ phone: this.phone }).subscribe({
      next: () => {
        this.isResending = false;
        this.otp = ['', '', '', '', '', ''];

        Swal.fire({
          icon: 'success',
          title: 'تم إرسال كود جديد',
          timer: 2000,
          showConfirmButton: false
        });

        this.focusInput(0);
      },
      error: () => {
        this.isResending = false;

        Swal.fire({
          icon: 'error',
          title: 'حدث خطأ',
          text: 'حاول مرة تانية'
        });
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}