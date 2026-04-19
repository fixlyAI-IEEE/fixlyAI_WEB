import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-business',
  imports: [],
  templateUrl: './business.html',
  styleUrl: './business.css',
})
export class Business {

  @Input() form!: FormGroup;
  @Input() isLoading = false;
  @Output() back = new EventEmitter<void>();


  jobTypes = [
    { id: 1, name: 'النجارة' },
    { id: 2, name: 'السباكة' },
    { id: 3, name: 'الكهرباء' },
    { id: 4, name: 'الحدادة' },
    { id: 5, name: 'الخياطة' },
    { id: 6, name: 'الميكانيكا' },
    { id: 7, name: 'الدهانات والتشطيب' },
    { id: 8, name: 'البلاط والسيراميك' }
  ];
  cities = ['سوهاج', 'الأقصر', 'أسوان', 'قنا'];
  areas = [] = [];
  loadingData = true;
  daysOptions = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

  isInvalid(key: string): boolean {
    const ctrl = this.form.get(key);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  toggleDay(day: string): void {
    const ctrl = this.form.get('working_days');
    const days: string[] = ctrl?.value ?? [];
    const idx = days.indexOf(day);
    if (idx > -1) {
      days.splice(idx, 1);
    } else {
      days.push(day);
    }
    ctrl?.setValue([...days]);
    ctrl?.markAsTouched();
  }

  isDaySelected(day: string): boolean {
    return this.form.get('working_days')?.value?.includes(day);
  }
}


