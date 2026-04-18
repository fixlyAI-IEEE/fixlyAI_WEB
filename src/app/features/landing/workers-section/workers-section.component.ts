import { Component, OnInit } from '@angular/core';
import { Worker } from '../../../core/models/model';

@Component({
  selector: 'app-workers-section',
  templateUrl: './workers-section.component.html',
  styleUrls: ['./workers-section.component.css']
})
export class WorkersSectionComponent  {

 workers: Worker[] = [
    { id: 1, name: 'أحمد محمد', specialty: 'سباك', location: 'القاهرة', rating: 4.9, image: '/images/worker.jpg' },
    { id: 2, name: 'محمد علي',  specialty: 'كهربائي', location: 'الجيزة', rating: 4.8, image: '/images/worker.jpg' },
    { id: 3, name: 'خالد أحمد', specialty: 'نجار', location: 'الإسكندرية', rating: 4.7, image: '/images/worker.jpg' },
    { id: 4, name: 'عمر حسن',   specialty: 'سباك', location: 'القاهرة', rating: 4.9, image: '/images/worker.jpg' },
  ];

}
