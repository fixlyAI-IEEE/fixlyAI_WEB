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
  // styleUrls: ['./request-form.component.css'],
  imports: [CommonModule, FormsModule],
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

  selectService(name: string, id: number): void {
    this.selectedService = name;
    this.selectedJobTypeId = id;
  }

  close(): void {
    this.closed.emit();
  }

  submitRequest(): void {
    if (!this.isAuthenticated()) {
      this.promptLogin();
      return;
    }

    if (!this.isFormValid()) {
      this.showValidationError();
      return;
    }

    this.sendRequest();
  }

  // ─── Private Helpers ──────────────────────────────

  private isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  private isFormValid(): boolean {
    return !!this.city && !!this.description;
  }

  private promptLogin(): void {
    Swal.fire({
      title: 'سجل دخولك الأول! 🔧',
      text: 'محتاج تسجل دخول عشان تطلب خدمة',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'سجل دخول دلوقتي',
      cancelButtonText: 'لاحقا',
      confirmButtonColor: '#10b981',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.close();
        this.router.navigate(['/auth/login']);
      }
    });
  }

  private showValidationError(): void {
    Swal.fire({
      title: 'تأكد من البيانات',
      text: 'من فضلك املا كل الحقول',
      icon: 'warning',
      confirmButtonColor: '#10b981',
    });
  }

  private sendRequest(): void {
    this.isLoading = true;

    const data: RequestServiceRequest = {
      job_type_id: this.selectedJobTypeId,
      description: this.description,
      city: this.city,
    };

    this.userService.createRequest(data).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'تم إرسال الطلب ✅',
          text: 'هنتواصل معاكي في أقرب وقت!',
          icon: 'success',
          confirmButtonColor: '#10b981',
        }).then(() => {
          this.close();
          this.router.navigate(['/incoming-offers', res.data.id]);
        });
      },
      error: () => {
        Swal.fire({
          title: 'حصل مشكلة 😕',
          text: 'حاول تاني بعد قليل',
          icon: 'error',
          confirmButtonColor: '#dc2626',
        });
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
