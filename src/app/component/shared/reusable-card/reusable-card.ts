import { Component, Input } from '@angular/core';
import { Service } from '../../../core/models/model';
import { RequestFormComponent } from "../request-form/request-form.component";

@Component({
  selector: 'app-reusable-card',
  imports: [RequestFormComponent],
  templateUrl: './reusable-card.html',
  styleUrl: './reusable-card.css',
})
export class ReusableCard {
   @Input() service!: Service;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

}
