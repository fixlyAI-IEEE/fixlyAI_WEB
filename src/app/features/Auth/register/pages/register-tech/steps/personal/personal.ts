import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal {

   @Input()  form!: FormGroup;
  @Output() next = new EventEmitter<void>();

  showPass        = false;
  showPassConfirm = false;

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
}


