import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableCard  } from '../../../component/shared/reusable-card/reusable-card';
import { Service } from '../../../core/models/model';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ReusableCard ],
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {

  readonly itemsPerPage = 4;
  currentPage = 0;

  services: Service[] = [
    { id: 1, name: 'النجارة',           image: '/images/carpenter.jpg',                                              icon: 'carpenter' },
    { id: 2, name: 'السباكة',           image: '/images/اعمال سباكة وصرف صحي دبي.jpg  ',                              icon: 'plumbing' },
    { id: 3, name: 'الكهرباء',          image: '/images/Professional_Electrical_Services_You_Can_Trust_–_ARA_M&E.jpg', icon: 'electrical_services' },
    { id: 4, name: 'الحدادة',           image: '/images/الحداد.jpg',                                                 icon: 'construction' },
    { id: 5, name: 'الخياطة',           image: '/images/الخياطة.jpg',                                                icon: 'styler' },
    { id: 6, name: 'إصلاح الموبايلات',  image: 'images/موبايلات.png',                                                                   icon: 'phone_android' },
    { id: 7, name: 'الميكانيكا',        image: 'images/أعمال-المراجعة-للصيانة-بداخل-مركز-صيانة-سيارات-بفيصل.jpg',                                                                   icon: 'car_repair' },
    { id: 8, name: 'الدهانات والتشطيب', image: '/images/المحارة.jpg',                                                icon: 'format_paint' },
    { id: 9, name: 'البلاط والسيراميك', image: '/images/البلاط.jpg',                                                 icon: 'layers' },
  ];
  get totalPages(): number {
    return Math.ceil(this.services.length / this.itemsPerPage);
  }

  get dots(): number[] {
    return Array(this.totalPages).fill(0);
  }

  get visibleServices(): Service[] {
    const start = this.currentPage * this.itemsPerPage;
    return this.services.slice(start, start + this.itemsPerPage);
  }

  next(): void {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }

  prev(): void {
    if (this.currentPage > 0) this.currentPage--;
  }

  goTo(index: number): void {
    this.currentPage = index;
  }
}
