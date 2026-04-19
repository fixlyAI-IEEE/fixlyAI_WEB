import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register-user',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser {
  form: FormGroup;
  showPassword = false;
  isLoading = false;

  isLocating = false;
  detectedCity = '';
  
 activeTab: 'user' | 'tech' = 'user';

    constructor(
    private fb: FormBuilder,
    private router: Router,
    private Auth: Auth
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  private readonly egyptianCities: Record<string, string> = {
    'sohag': 'Sohag', 'سوهاج': 'Sohag',
    'qena': 'Qena', 'قنا': 'Qena',
    'luxor': 'Luxor', 'الأقصر': 'Luxor',
    'aswan': 'Aswan', 'أسوان': 'Aswan',
  };

  getLocation() {
    if (!navigator.geolocation) {
      Swal.fire({
        icon: 'error',
        title: 'غير مدعوم',
        text: 'متصفحك لا يدعم تحديد الموقع',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    this.isLocating = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`,
          { headers: { 'Accept-Language': 'ar' } }
        )
          .then(res => res.json())
          .then(data => {
            const addr = data.address;

            const rawCity =
              addr.city ||
              addr.town ||
              addr.county ||
              addr.state_district ||
              addr.state ||
              '';

            const normalized = rawCity.toLowerCase().trim();
            const matchedKey = Object.keys(this.egyptianCities)
              .find(k => normalized.includes(k));

            const cityValue = matchedKey
              ? this.egyptianCities[matchedKey]
              : rawCity;

            this.detectedCity = rawCity;
            this.form.patchValue({ city: cityValue });
            this.isLocating = false;

            Swal.fire({
              icon: 'success',
              title: 'تم تحديد موقعك',
              text: `تم اختيار: ${rawCity}`,
              confirmButtonText: 'حسناً'
            });
          })
          .catch(() => {
            this.isLocating = false;
            this.showLocationError('تعذر تحديد المنطقة، حاول مرة أخرى');
          });
      },
      (error) => {
        this.isLocating = false;

        const messages: Record<number, string> = {
          1: 'رفضت الإذن بتحديد الموقع — فعّله من إعدادات المتصفح',
          2: 'تعذر تحديد موقعك — تأكد من تفعيل الـ GPS',
          3: 'انتهت مهلة التحديد — حاول مرة أخرى',
        };

        this.showLocationError(messages[error.code] || 'حدث خطأ غير متوقع');
      },
      {
        timeout: 10000,
        maximumAge: 60000,
        enableHighAccuracy: false
      }
    );
  }

  private showLocationError(msg: string) {
    Swal.fire({
      icon: 'error',
      title: 'خطأ في تحديد الموقع',
      text: msg,
      confirmButtonText: 'حسناً'
    });
  }


  goToTech() {
    this.router.navigate(['/auth/register/tech']);
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.isLoading = true;

    const requestBody = {
      name: this.form.value.fullName,
      phone: this.form.value.phone,
      password: this.form.value.password,
      password_confirmation: this.form.value.password,
      city: this.form.value.city
    };

    this.Auth.registerUser(requestBody).subscribe({
      next: (res) => {
        console.log(res);

        localStorage.setItem('token', res.data.token);

        this.router.navigate(['/landing']);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}

