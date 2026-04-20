import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../core/services/user';
import { Offer } from '../../core/models/model';
import { NavBar } from "../../component/shared/nav-bar/nav-bar";
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription, switchMap } from 'rxjs';
import { RatingComponent } from "../../features/rating/rating.component";

@Component({
  selector: 'app-Incoming-offers',
  templateUrl: './Incoming-offers.component.html',
  styleUrls: ['./Incoming-offers.component.css'],
  imports: [NavBar, RatingComponent]
})

export class IncomingOffersComponent implements OnInit, OnDestroy {

  private userService = inject(User);
  private route = inject(ActivatedRoute);

  offers: Offer[] = [];

  status: 'waiting' | 'no-offers' | 'has-offers' = 'waiting';

  private pollingSub!: Subscription;
  private timeoutId: any;

  ngOnInit() {
    const requestId = Number(this.route.snapshot.paramMap.get('id'));

    // polling كل 5 ثواني
    this.pollingSub = interval(5000)
      .pipe(switchMap(() => this.userService.getOffers(requestId)))
      .subscribe((res) => {
        this.offers = res.data;

        if (this.offers.length > 0) {
          this.status = 'has-offers';
        }
      });

    // timeout بعد 30 ثانية
    this.timeoutId = setTimeout(() => {
      if (this.offers.length === 0) {
        this.status = 'no-offers';

        //  ممكن الغي الطلب من هنا
        // this.userService.cancelRequest(requestId).subscribe();
      }
    }, 30000);
  }

  ngOnDestroy(): void {
    if (this.pollingSub) {
      this.pollingSub.unsubscribe();
    }
    clearTimeout(this.timeoutId);
  }
  isRateOpen = false;

// acceptOffer(): void {
//   // TODO: API call هنا
//   this.isRateOpen = true;
// }
}
