import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/services/user';
import { ContactRequest } from '../../../core/models/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Contact-us.component.html',
  styleUrl: './Contact-us.component.css'
})
export class ContactUsComponent {
  private userService = inject(User);

  formData: ContactRequest = {
    name: '',
    phone: '',
    message: ''
  };

  isLoading = false;

  sendMessage() {
    if (!this.formData.name || !this.formData.phone || !this.formData.message) {
      Swal.fire({
        title: 'تأكد من البيانات',
        text: 'من فضلك املا كل الحقول',
        icon: 'warning',
        confirmButtonColor: '#10b981'
      });
      return;
    }

    this.isLoading = true;

    this.userService.sendMessage(this.formData).subscribe({
      next: () => {
        Swal.fire({
          title: 'تم الإرسال ✅',
          text: 'رسالتك وصلت، هنرد عليك في أقرب وقت!',
          icon: 'success',
          confirmButtonColor: '#10b981'
        });
        this.formData = { name: '', phone: '', message: '' };
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
