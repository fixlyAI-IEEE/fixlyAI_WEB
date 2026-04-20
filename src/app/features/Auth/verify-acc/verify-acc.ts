import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';
@Component({
  selector: 'app-verify-acc',
  imports: [CommonModule],
  templateUrl: './verify-acc.html',
  styleUrl: './verify-acc.css',
})
export class VerifyAcc implements OnInit {
  phone       = '';
  mode        = 'register'; 
  otp         = ['', '', '', '', '', ''];
  isLoading   = false;
  isResending = false;

  constructor(
    private router: Router,
    private Auth: Auth
  ) {}

  ngOnInit(): void {
    this.phone = history.state?.phone ?? '';
    this.mode  = history.state?.mode  ?? 'register';

    if (!this.phone) this.router.navigate(['/auth/register']);
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const val   = input.value.replace(/\D/g, '').slice(-1);
    this.otp[index] = val;
    input.value = val;

    if (val && index < 5) {
      (document.getElementById(`otp-${index + 1}`) as HTMLInputElement)?.focus();
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
      (document.getElementById(`otp-${index - 1}`) as HTMLInputElement)?.focus();
    }
  }

  get otpValue(): string  { return this.otp.join(''); }
  get isComplete(): boolean { return this.otpValue.length === 6; }

  verify(): void {
    if (!this.isComplete) return;
    this.isLoading = true;

    const body = { phone: this.phone, otp: this.otpValue };

    // register → verifyAcc | forgot → verifyOtp
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
          this.router.navigate(['/auth/reset-password'], {
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

  // ---- Resend ----
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
      },
      error: () => {
        this.isResending = false;
        Swal.fire({ icon: 'error', title: 'حدث خطأ', text: 'حاول مرة تانية' });
      }
    });
  }
}