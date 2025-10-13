import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent, title: 'MD Shehab Hossin - Portfolio' },
  { path: '**', redirectTo: '' }
];
