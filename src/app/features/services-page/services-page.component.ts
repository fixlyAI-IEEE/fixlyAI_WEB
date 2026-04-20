import { Component, OnInit } from '@angular/core';
import { Service } from '../../core/models/model';
import { ReusableCard } from "../../component/shared/reusable-card/reusable-card";
import { NavBar } from "../../component/shared/nav-bar/nav-bar";

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  // styleUrls: ['./services-page.component.css'],
  imports: [ReusableCard, NavBar]
})
export class ServicesPageComponent  {

  services: Service[] = [
     { id: 1, name: 'السباكة',  image: '/images/اعمال سباكة وصرف صحي دبي.jpg',  icon: 'plumbing' },
    { id: 2, name: 'الكهرباء', image: '/images/Professional_Electrical_Services_You_Can_Trust_–_ARA_M&E.jpg',  icon: 'electrical_services' },
    { id: 3, name: 'التكييف',  image: '/images/Heating Ventilation and Air Conditioning.jpg',        icon: 'ac_unit' },
    { id: 4, name: 'النجارة',  image: '/images/carpenter.jpg', icon: 'carpenter' },
    { id: 5, name: 'الدهانات', image: '/images/المحارة.jpg',  icon: 'format_paint' },
    { id: 6, name: 'التنظيف',  image: '/images/worker.jpg',  icon: 'cleaning_services' },
    { id: 7, name: 'الحدادة',  image: '/images/الحداد.jpg',   icon: 'construction' },
    { id: 8, name: 'البلاط',   image: '/images/البلاط.jpg',    icon: 'layers' },
  ];

}
