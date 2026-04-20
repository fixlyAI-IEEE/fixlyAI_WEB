import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth } from '../../Auth/services/auth';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  stats = [
    { value: '98%', label: 'رضا العملاء' },
    { value: '+8K', label: 'طلب مكتمل' },
    { value: '+500', label: 'فني معتمد' },
  ];

  constructor(private router: Router, private auth: Auth) {}

  onRequestService() {
    const isLoggedIn = !!localStorage.getItem('token');

    if (!isLoggedIn) {
      Swal.fire({
        title: 'سجل دخولك الأول! 🔧',
        text: 'محتاج تسجل دخول عشان تطلب خدمة',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'سجل دخول دلوقتي',
        cancelButtonText: 'بعدين',
        confirmButtonColor: '#10b981',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/auth/login']);
        }
      });
    } else {
      this.router.navigate(['/request-form']);
    }
  }

  openChat() {
    if (this.auth.isLoggedIn()) {
      Swal.fire({
        title: 'أهلاً بيك 👋',
        text: 'أنا هنا للمساعدة 😄',
        icon: 'success',
        confirmButtonText: 'ابدأ المحادثة',
        confirmButtonColor: 'var(--primary)'
      }).then(() => {
        this.router.navigate(['/chat']);
      });
    } else {
      Swal.fire({
        title: 'أهلاً بيك 👋',
        text: 'يجب تسجيل الدخول أولاً',
        icon: 'warning',
        confirmButtonText: 'تسجيل الدخول',
        confirmButtonColor: 'var(--primary)'
      }).then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }
}