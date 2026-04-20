import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../../core/services/user';
import { Router } from '@angular/router';
import { RatingRequest } from '../../core/models/model'; 

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() isOpen = false;
  @Input() requestId!: number;
  @Output() closed = new EventEmitter<void>();

  selectedRating = 0;
  stars = [1, 2, 3, 4, 5];

  private userService = inject(User);
  private router = inject(Router);

  setRating(value: number): void {
    this.selectedRating = value;
  }

  close(): void {
    this.closed.emit();
  }

  submit(): void {
    if (!this.selectedRating) {
      alert('من فضلك اختر تقييم أولاً');
      return;
    }

    const data: RatingRequest = {
      rate: this.selectedRating,
      comment: ''
    };

    this.userService.rateWorker(this.requestId, data).subscribe({
      next: (res) => {
        console.log('تم إرسال التقييم بنجاح', res);
        this.close();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('خطأ في إرسال التقييم', err);

        this.close();
        this.router.navigate(['/']);
      }
    });
  }
}
