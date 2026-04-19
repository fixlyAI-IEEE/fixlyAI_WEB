import { Component, Input } from '@angular/core';
import { Service } from '../../../core/models/model';

@Component({
  selector: 'app-reusable-card',
  imports: [],
  templateUrl: './reusable-card.html',
  styleUrl: './reusable-card.css',
})
export class ReusableCard {
  @Input() service!: Service;
  isHovered: boolean = false;

}
