import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { User } from '../../core/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent  {
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

    // if (!this.selectedRating) return;
    // const data: RatingRequest = { rate: this.selectedRating, comment: '' };
    // this.userService.rateWorker(this.requestId, data).subscribe({
    //   next: () => { this.close(); this.router.navigate(['/']); },
    //   error: () => {}
    // });

    this.close();
    this.router.navigate(['/']);
  }
}
