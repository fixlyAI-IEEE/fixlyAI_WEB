import { Component, OnInit } from '@angular/core';
import { Service } from '../../core/models/model';
import { ReusableCard } from "../../component/shared/reusable-card/reusable-card";
import { NavBar } from "../../component/shared/nav-bar/nav-bar";

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'],
  imports: [ReusableCard, NavBar]
})
export class ServicesPageComponent  {

  services: Service[] = [
    { id: 1, name: 'السباكة',  image: '/images/services/plumbing.jpg',  icon: '/images/icons/plumbing.svg' },
    { id: 2, name: 'الكهرباء', image: '/images/services/electric.jpg',  icon: '/images/icons/electric.svg' },
    { id: 3, name: 'التكييف',  image: '/images/services/ac.jpg',        icon: '/images/icons/ac.svg' },
    { id: 4, name: 'النجارة',  image: '/images/services/carpentry.jpg', icon: '/images/icons/carpentry.svg' },
    { id: 5, name: 'الدهانات', image: '/images/services/painting.jpg',  icon: '/images/icons/painting.svg' },
    { id: 6, name: 'التنظيف',  image: '/images/services/cleaning.jpg',  icon: '/images/icons/cleaning.svg' },
    { id: 7, name: 'الحدادة',  image: '/images/services/welding.jpg',   icon: '/images/icons/welding.svg' },
    { id: 8, name: 'البلاط',   image: '/images/services/tiling.jpg',    icon: '/images/icons/tiling.svg' },
  ];

}
