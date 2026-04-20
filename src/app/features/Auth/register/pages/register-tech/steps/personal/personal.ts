import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  imports: [RouterLink,CommonModule],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal {

   @Input()  form!: FormGroup;
  @Output() next = new EventEmitter<void>();

  showPass        = false;
  showPassConfirm = false;

  constructor(private router: Router,private fb: FormBuilder) { }

  isInvalid(key: string): boolean {
    const ctrl = this.form.get(key);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  get passwordMismatch(): boolean {
    return this.form.hasError('mismatch') &&
           !!this.form.get('password_confirmation')?.touched;
  }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.form.get('profile_picture')?.setValue(file);
  }

  goToBusiness(){
    this.router.navigate(['/auth/register/tech/business']);
  }
}


