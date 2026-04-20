import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../core/services/user';
import { ConfirmWorkerRequest, Offer } from '../../core/models/model';
import { NavBar } from "../../component/shared/nav-bar/nav-bar";
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription, switchMap } from 'rxjs';
import { RatingComponent } from "../../features/rating/rating.component";
import { RequestFormComponent } from "../../component/shared/request-form/request-form.component";

@Component({
  selector: 'app-Incoming-offers',
  templateUrl: './Incoming-offers.component.html',
  styleUrls: ['./Incoming-offers.component.css'],
  imports: [NavBar, RatingComponent, RequestFormComponent]
})

export class IncomingOffersComponent implements OnInit{

 private userService = inject(User);
  private route = inject(ActivatedRoute);

  offers: Offer[] = [];
  status: 'waiting' | 'no-offers' | 'has-offers' = 'waiting';


  isRateOpen = false;
  selectedRequestId!: number;

  ngOnInit() {
    this.selectedRequestId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadOffers();
  }


  loadOffers() {
    this.userService.getOffers(this.selectedRequestId).subscribe({
      next: (res) => {
        this.offers = res.data;
        this.status = this.offers.length > 0 ? 'has-offers' : 'no-offers';
      },
      error: () => {
        this.status = 'no-offers';
      }
    });
  }


  confirmOffer(workerId: number) {
    const data: ConfirmWorkerRequest = { worker_id: workerId };

    this.userService.confirmWorker(this.selectedRequestId, data).subscribe({
      next: (res) => {
        console.log('تم قبول الفني بنجاح', res);
       
        this.isRateOpen = true;
      },
      error: (err) => {
        console.error('حدث خطأ أثناء القبول', err);
        alert('حدث خطأ، برجاء المحاولة مرة أخرى');
      }
    });
  }}
