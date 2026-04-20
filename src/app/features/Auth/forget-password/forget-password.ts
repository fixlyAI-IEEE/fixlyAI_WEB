import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth } from '../services/auth';
import { SendOtpResponse } from '../../../core/models/model';
@Component({
  selector: 'app-forget-password',
  imports: [FormsModule, RouterLink,],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  phone = '';
  isLoading = false;

  constructor(private Auth: Auth, private router: Router) {}

  submit() {
    if (!this.phone) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'أدخل رقم الهاتف', confirmButtonText: 'حسناً' });
      return;
    }

    this.isLoading = true;

    this.Auth.sendOtp({ phone: this.phone }).subscribe({
      next: (res:SendOtpResponse) => {
        this.isLoading = false;
        sessionStorage.setItem('reset_phone', this.phone);
        this.router.navigate(['/auth/verify-otp']);
      },
      error: (res:SendOtpResponse) => {
        this.isLoading = false;
        Swal.fire({ icon: 'error', title: 'خطأ', text: res.message, confirmButtonText: 'حسناً' });
      }
    });
  }
}


