import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth } from '../services/auth';
import { loginresponse } from '../../../core/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [CommonModule, FormsModule, RouterLink]
})
export class Login {
  loginForm: FormGroup;
  isLoading = false;
  phone: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth,
    
  ) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  submit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;

    const formData = this.loginForm.value;

    Swal.fire({
      title: 'جاري تسجيل الدخول...',
      text: 'استنى ثواني بنجهز حسابك 🔧',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.auth.login(formData).subscribe({
      next: (res: loginresponse) => {

        Swal.fire({
          title: 'أهلاً بيك 👋',
          text: 'تم تسجيل الدخول بنجاح، يلا نبدأ!',
          icon: 'success',
          confirmButtonText: 'ابدأ 🚀',
          confirmButtonColor: 'var(--primary)'
        }).then(() => {
          this.router.navigate(['/landing']);
        });

      },

      error: (err) => {
        Swal.fire({
          title: 'حصل مشكلة 😕',
          text: err.error?.message || 'تأكد من البيانات وحاول تاني',
          icon: 'error',
          confirmButtonText: 'حاول تاني',
          confirmButtonColor: '#dc2626'
        });
      },

      complete: () => {
        this.isLoading = false;
      }
    });
  }

  forgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  sendVerificationCode(phone: string) {
    Swal.fire({
      title: 'جاري إرسال الرمز... 📨',
      text: `جاري إرسال رمز التحقق إلى ${phone}`,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // TODO: Implement actual API call
    setTimeout(() => {
      Swal.fire({
        title: 'تم إرسال الرمز ✅',
        text: 'تم إرسال رمز التحقق إلى جوالك، يرجى إدخاله في الصفحة التالية',
        icon: 'success',
        confirmButtonText: 'الانتقال لصفحة التحقق',
        confirmButtonColor: 'var(--primary)'
      }).then(() => {
        // this.router.navigate(['/auth/verify'], { queryParams: { phone } });
        console.log('Verification code sent to:', phone);
      });
    }, 1500);
  }
}