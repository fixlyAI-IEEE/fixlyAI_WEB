import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { register_as_workerRequest, RegisterAsWorkerResponse } from '../../../../../core/models/model';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StepIndicator } from "../../components/step-indicator/step-indicator";
import { Personal } from "./steps/personal/personal";
import { Business } from "./steps/business/business";
@Component({
  selector: 'app-register-tech',
  imports: [CommonModule, ReactiveFormsModule, StepIndicator, Personal, Business],
  templateUrl: './register-tech.html',
  styleUrl: './register-tech.css',
})
export class RegisterTech implements OnInit {

  currentStep = 1;
  isLoading = false;
  @Input() form!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private Auth: Auth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
      profile_picture: [null],

      job_type_id: [null, Validators.required],
      city: ['', Validators.required],
      areas: ['', Validators.required],
      working_days: [[], Validators.required],
      avg_price: [null, [Validators.required, Validators.min(1)]],

    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirm = group.get('password_confirmation')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  nextStep(): void {
    const step1Controls = ['name', 'phone', 'password', 'password_confirmation'];
    step1Controls.forEach(key => this.form.get(key)?.markAsTouched());

    this.currentStep = 2;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const formData = new FormData();
    const v = this.form.value;

    formData.append('name', v.name);
    formData.append('phone', v.phone);
    formData.append('password', v.password);
    formData.append('password_confirmation', v.password_confirmation);
    formData.append('job_type_id', v.job_type_id);
    formData.append('city', v.city);
    formData.append('areas', v.areas);
    formData.append('avg_price', v.avg_price);
    v.working_days.forEach((day: string) => formData.append('working_days[]', day));
    if (v.profile_picture) {
      formData.append('profile_picture', v.profile_picture);
    }

    this.Auth.registerWorker(formData as any).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.router.navigate(['/auth/verify-acc'], {
          state: { phone: this.form.value.phone }
        });
      },
      error: (err) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'حدث خطأ',
          text: err?.error?.message || 'حاول مرة تانية',
        });
      }
    });
  }
  get f() { return this.form.controls; }
  isInvalid(key: string) { return this.f[key].invalid && this.f[key].touched; }
}
