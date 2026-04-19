import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent  {
 @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  selectedService = 'السباكة';

  services = ['السباكة', 'النجارة', 'الكهرباء', 'التكييف', 'التكييف', 'الكهرباء', 'النجارة'];

  selectService(service: string) {
    this.selectedService = service;
  }

  close() {
    this.closed.emit();
  }

}
