import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Auth } from '../services/auth';
import { ResetPasswordResponse } from '../../../core/models/model';
@Component({
  selector: 'app-reset-pass',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './reset-pass.html',
  styleUrl: './reset-pass.css',
})
export class ResetPass implements OnInit {
  phone = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirm = false;
  isLoading = false;

  constructor(private Auth: Auth, private router: Router) {}

  ngOnInit() {
    const verified = sessionStorage.getItem('otp_verified');
    this.phone = sessionStorage.getItem('reset_phone') || '';

    if (!verified || !this.phone) {
      this.router.navigate(['/auth/forgot-password']);
    }
  }

  submit() {
    if (!this.password || !this.confirmPassword) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'أدخل كلمة المرور', confirmButtonText: 'حسناً' });
      return;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire({ icon: 'error', title: 'خطأ', text: 'كلمتا المرور غير متطابقتين', confirmButtonText: 'حسناً' });
      return;
    }

    if (this.password.length < 8) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'كلمة المرور 8 أحرف على الأقل', confirmButtonText: 'حسناً' });
      return;
    }

    this.isLoading = true;

    this.Auth.resetPassword({
      phone: this.phone,
      password: this.password,
      password_confirmation: this.confirmPassword
    }).subscribe({
      next: (res:ResetPasswordResponse) => {
        this.isLoading = false;
        sessionStorage.removeItem('reset_phone');
        sessionStorage.removeItem('otp_verified');

        Swal.fire({
          icon: 'success',
          title: 'تم بنجاح',
          text: 'تم تغيير كلمة المرور، سجل دخولك الآن',
          confirmButtonText: 'تسجيل الدخول'
        }).then(() => {
          this.router.navigate(['/auth/login']);
        });
      },
      error: () => {
        this.isLoading = false;
        Swal.fire({ icon: 'error', title: 'خطأ', text: 'حدث خطأ، حاول مرة أخرى', confirmButtonText: 'حسناً' });
      }
    });
  }
}