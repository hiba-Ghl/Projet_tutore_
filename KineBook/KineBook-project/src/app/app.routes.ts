import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonneurFormComponent } from './donneur-form/donneur-form.component';
import { KineSignUpComponent } from './kine-sign-up/kine-sign-up.component';
import { SidebarKineComponent } from './sidebar-kine/sidebar-kine.component';
import { SessionKineComponent } from './session-kine/session-kine.component';
import { OffreKineComponent } from './offre-kine/offre-kine.component';
import { CartesOffresComponent } from './cartes-offres/cartes-offres.component';
import { MesReservationPageComponent } from './mes-reservation-page/mes-reservation-page.component';
import { OffreFormComponent } from './offre-form/offre-form.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

export const routes: Routes = [{path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'don-form', component: DonneurFormComponent },
  { path: 'sign-up', component: KineSignUpComponent},
  { path: 'sidebar', component: SidebarKineComponent},
  { path: 'session-Kine', component: SessionKineComponent},
  { path: 'offre', component: OffreKineComponent},
  { path: 'carte-offre', component: CartesOffresComponent},
  { path: 'kine-sign-up', component: KineSignUpComponent},
  { path: 'user-sign-up', component: UserSignUpComponent},
  { path: 'mes-reservation-page', component: MesReservationPageComponent},
  { path: 'offre-form', component: OffreFormComponent},

];
