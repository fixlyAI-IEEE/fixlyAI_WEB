import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [FormsModule, RouterLink,],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  phone: string = '';
  submit() {
    console.log(this.phone);
  }

}
