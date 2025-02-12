import { Routes } from '@angular/router';
import { GiaPhaComponent } from './pages/gia-pha/gia-pha.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: 'gia-pha', component: GiaPhaComponent },
    { path: '', component: AppComponent }
];
