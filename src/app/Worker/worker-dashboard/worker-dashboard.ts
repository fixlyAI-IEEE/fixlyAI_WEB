import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Worker } from '../services/worker';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-worker-dashboard',
  imports: [CommonModule],
  templateUrl: './worker-dashboard.html',
  styleUrl: './worker-dashboard.css',
})
export class WorkerDashboard implements OnInit, AfterViewInit {

  requests: any[] = [];
  loading = false;

  map: any;

  constructor(private workerService: Worker) { }

  ngOnInit(): void {
    this.getRequests();
  }



  ngAfterViewInit() {
    this.initMap();
  }

  getRequests() {
    this.loading = true;

    this.workerService.getRequests().subscribe({
      next: (res: any) => {
        this.requests = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  sendOffer(id: number) {
    this.workerService.sendOffer(id).subscribe({
      next: () => {

        this.requests = this.requests.map(req => {
          if (req.id === id) {
            return { ...req, pivot_status: 'offered' };
          }
          return req;
        });

      }
    });
  }


  initMap() {
    this.map = L.map('map').setView([26.1551, 32.7160], 13); // قنا

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    L.marker([26.1551, 32.7160])
      .addTo(this.map)
      .bindPopup('طلب هنا')
      .openPopup();
  }
}