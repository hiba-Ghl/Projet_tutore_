import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonneurFormComponent } from './donneur-form/donneur-form.component';  // Assurez-vous d'importer le bon composant
import { KineSignUpComponent } from './kine-sign-up/kine-sign-up.component';
import { SessionKineComponent } from './session-kine/session-kine.component';


export const routes: Routes = [{path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'don-form', component: DonneurFormComponent },
  { path: 'sign-up', component: KineSignUpComponent},
  { path: 'session-Kine', component: SessionKineComponent}
];
