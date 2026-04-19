import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { ServicesPageComponent } from './features/services-page/services-page.component';


export const routes: Routes = [
  { path: '', component: Landing },
 { path: 'services', component: ServicesPageComponent },

];
