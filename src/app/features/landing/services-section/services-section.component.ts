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
    { id: 1, name: 'السباكة',  image: '/images/services/plumbing.jpg',  icon: 'plumbing' },
  { id: 2, name: 'الكهرباء', image: '/images/services/electric.jpg',  icon: 'electrical_services' },
  { id: 3, name: 'التكييف',  image: '/images/services/ac.jpg',        icon: 'ac_unit' },
  { id: 4, name: 'النجارة',  image: '/images/services/carpentry.jpg', icon: 'carpenter' },
  { id: 5, name: 'الدهانات', image: '/images/services/painting.jpg',  icon: 'format_paint' },
  { id: 6, name: 'التنظيف',  image: '/images/services/cleaning.jpg',  icon: 'cleaning_services' },
  { id: 7, name: 'الحدادة',  image: '/images/services/welding.jpg',   icon: 'construction' },
  { id: 8, name: 'البلاط',   image: '/images/services/tiling.jpg',    icon: 'layers' },
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
