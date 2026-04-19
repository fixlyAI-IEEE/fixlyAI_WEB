import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../core/services/user';
import { Offer } from '../../core/models/model';
import { NavBar } from "../../component/shared/nav-bar/nav-bar";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Incoming-offers',
  templateUrl: './Incoming-offers.component.html',
  styleUrls: ['./Incoming-offers.component.css'],
  imports: [NavBar]
})
export class IncomingOffersComponent implements OnInit {
 private userService = inject(User);
 private route = inject(ActivatedRoute);
  offers: Offer[] = [];
  isLoading = true;

  ngOnInit() {
    const requestId = Number(this.route.snapshot.paramMap.get('id'));
   this.userService.getOffers(requestId).subscribe({
      next: (res) => {
        this.offers = res.data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

}
