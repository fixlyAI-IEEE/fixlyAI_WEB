import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { User } from '../../../core/services/user';
import { RequestServiceRequest } from '../../../core/models/model';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RequestFormComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  selectedService = 'السباكة';
  selectedJobTypeId = 1;
  city = '';
  description = '';
  isLoading = false;

  services = [
    { name: 'السباكة', id: 1 },
    { name: 'النجارة', id: 2 },
    { name: 'الكهرباء', id: 3 },
    { name: 'التكييف', id: 4 },
  ];

  private router = inject(Router);
  private userService = inject(User);

  selectService(name: string, id: number) {
    this.selectedService = name;
    this.selectedJobTypeId = id;
  }

  close() {
    this.closed.emit();
  }

  submitRequest() {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    if (!isLoggedIn) {
      Swal.fire({
        title: 'سجل دخولك الأول! 🔧',
        text: 'محتاج تسجل دخول عشان تطلب خدمة',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'سجل دخول دلوقتي',
        cancelButtonText: 'لاحقا',
        confirmButtonColor: '#10b981',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.close();
          this.router.navigate(['/auth/login']);
        }
      });
      return;
    }

    if (!this.city || !this.description) {
      Swal.fire({
        title: 'تأكد من البيانات',
        text: 'من فضلك املا كل الحقول',
        icon: 'warning',
        confirmButtonColor: '#10b981'
      });
      return;
    }

    this.isLoading = true;

    const data: RequestServiceRequest = {
      job_type_id: this.selectedJobTypeId,
      description: this.description,
      city: this.city
    };

    this.userService.createRequest(data).subscribe({
    next: (res) => {
  const requestId = res.data.id; 
  Swal.fire({
    title: 'تم إرسال الطلب ✅',
    text: 'هنتواصل معاكي في أقرب وقت!',
    icon: 'success',
    confirmButtonColor: '#10b981'
  }).then(() => {
    this.close();
    this.router.navigate(['/incoming-offers', requestId]); 
  });
},
      error: () => {
        Swal.fire({
          title: 'حصل مشكلة 😕',
          text: 'حاول تاني بعد شوية',
          icon: 'error',
          confirmButtonColor: '#dc2626'
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}