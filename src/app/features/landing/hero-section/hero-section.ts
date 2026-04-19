import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-section',
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

  constructor(private router: Router) {}

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
}
