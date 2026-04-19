import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { register_as_workerRequest, RegisterAsWorkerResponse } from '../../../../../core/models/model';

@Component({
  selector: 'app-register-tech',
  imports: [],
  templateUrl: './register-tech.html',
  styleUrl: './register-tech.css',
})
export class RegisterTech {
  currentStep = 1;
  showPass = false;
  showConfirm = false;
  isLoading = false;
  previewUrl: string | null = null;
  isLocating = false;
  detectedCity = '';

  jobTypes: { id: number; name: string }[] = [];

  readonly days = [
    { value: 'sat', label: 'السبت' },
    { value: 'sun', label: 'الأحد' },
    { value: 'mon', label: 'الاثنين' },
    { value: 'tue', label: 'الثلاثاء' },
    { value: 'wed', label: 'الأربعاء' },
    { value: 'thu', label: 'الخميس' },
    { value: 'fri', label: 'الجمعة' },
  ];

  readonly cities = [
    { value: 'Cairo', label: 'القاهرة' },
    { value: 'Alexandria', label: 'الإسكندرية' },
    { value: 'Giza', label: 'الجيزة' },
    { value: 'Qena', label: 'قنا' },
    { value: 'Luxor', label: 'الأقصر' },
    { value: 'Aswan', label: 'أسوان' },
    { value: 'Sohag', label: 'سوهاج' },
  ];

  form = {
    // Step 1
    name: '',
    phone: '',
    password: '',
    password_confirmation: '',
    profile_image: null as File | null,
    // Step 2
    job_type_id: null as number | null,
    city: '',
    areas: '',
    working_days: [] as string[],
    hourly_rate: null as number | null,
    agree: false,
  };

  constructor(
    private auth: Auth,
    private router: Router,
    private jobTypeService: JobTypeService
  ) {}

  ngOnInit() {
    this.jobTypeService.getAll().subscribe(res => {
      this.jobTypes = res.data;
    });
  }

  onImageSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.form.profile_image = file;
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result as string;
    reader.readAsDataURL(file);
  }

  toggleDay(day: string) {
    const idx = this.form.working_days.indexOf(day);
    idx === -1
      ? this.form.working_days.push(day)
      : this.form.working_days.splice(idx, 1);
  }

  isDaySelected(day: string): boolean {
    return this.form.working_days.includes(day);
  }

  nextStep() {
    if (!this.form.name || !this.form.phone || !this.form.password) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'من فضلك أكمل البيانات المطلوبة' });
      return;
    }
    if (this.form.password !== this.form.password_confirmation) {
      Swal.fire({ icon: 'error', title: 'خطأ', text: 'كلمتا المرور غير متطابقتان' });
      return;
    }
    this.currentStep = 2;
  }

  prevStep() {
    this.currentStep = 1;
  }

  submit() {
    if (!this.form.job_type_id || !this.form.city || !this.form.working_days.length) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'من فضلك أكمل بيانات العمل' });
      return;
    }
    if (!this.form.agree) {
      Swal.fire({ icon: 'warning', title: 'تنبيه', text: 'يرجى الموافقة على الشروط والأحكام' });
      return;
    }

    this.isLoading = true;

    const payload = {
      name: this.form.name,
      phone: this.form.phone,
      password: this.form.password,
      password_confirmation: this.form.password_confirmation,
      job_type_id: this.form.job_type_id!,
      city: this.form.city,
      areas: this.form.areas,
      working_days: this.form.working_days,
      hourly_rate: this.form.hourly_rate ?? undefined,
    };

    this.auth.registerWorker(payload).subscribe({
      next: (res:RegisterAsWorkerResponse) => {
        this.isLoading = false;
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        Swal.fire({
          icon: 'success',
          title: 'تم إنشاء الحساب بنجاح',
          text: `أهلاً ${res.data.user.name}!`,
          confirmButtonText: 'حسناً'
        }).then(() => this.router.navigate(['/']));
      },
      error: (err) => {
        this.isLoading = false;
        Swal.fire({ icon: 'error', title: 'خطأ', text: 'حدث خطأ، حاول مرة أخرى' });
      }
    });
  }
}