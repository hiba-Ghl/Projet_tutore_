import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonneurFormComponent } from './donneur-form/donneur-form.component';
import { SidebarKineComponent } from './sidebar-kine/sidebar-kine.component';
import { SessionKineComponent } from './session-kine/session-kine.component';
import { OffreKineComponent } from './offre-kine/offre-kine.component';
import { CartesOffresComponent } from './cartes-offres/cartes-offres.component';
<<<<<<< HEAD

import { MesReservationPageComponent } from '../app/mes-reservation-page/mes-reservation-page.component';
import { OffreFormComponent } from '../app/offre-form/offre-form.component';
import { UserSignUpComponent } from '../app/user-sign-up/user-sign-up.component';
import { KineSignUpComponent } from '../app/kine-sign-up/kine-sign-up.component';

import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { FAQPageComponent } from './faq-page/faq-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionPatientComponent } from './inscription-patient/inscription-patient.component';
import { InscriptionDonneurComponent } from './inscription-donneur/inscription-donneur.component';
import { InscriptionKineComponent } from './inscription-kine/inscription-kine.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { EditProfilKineComponent } from './edit-profil-kine/edit-profil-kine.component';

=======
import { MesReservationPageComponent } from './mes-reservation-page/mes-reservation-page.component';
import { OffreFormComponent } from './offre-form/offre-form.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
>>>>>>> b29613dc7f1f27aed9dbed110185af2757e3685c

export const routes: Routes = [{path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent},
  { path: 'don-form', component: DonneurFormComponent },
  { path: 'sign-up', component: KineSignUpComponent},
  { path: 'sidebar', component: SidebarKineComponent},
  { path: 'session-Kine', component: SessionKineComponent},
  { path: 'offre', component: OffreKineComponent},
  { path: 'carte-offre', component: CartesOffresComponent},
<<<<<<< HEAD

=======
>>>>>>> b29613dc7f1f27aed9dbed110185af2757e3685c
  { path: 'kine-sign-up', component: KineSignUpComponent},
  { path: 'user-sign-up', component: UserSignUpComponent},
  { path: 'mes-reservation-page', component: MesReservationPageComponent},
  { path: 'offre-form', component: OffreFormComponent},

<<<<<<< HEAD

  { path: 'ajouter-offre', component:AjoutOffreComponent},
  { path: 'reservation-offre', component: MesReservationPageComponent},
  { path: 'FAQ', component:FAQPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'inscription',component:InscriptionComponent },
  { path: 'inscription-patient',component:InscriptionPatientComponent},
  { path: 'inscription-donneur',component:InscriptionDonneurComponent},
  { path: 'inscription-kine',component:InscriptionKineComponent},
  { path: 'reservation-patient',component:ShowReservationComponent},
  { path: 'profil-kine',component:EditProfilKineComponent},
=======
>>>>>>> b29613dc7f1f27aed9dbed110185af2757e3685c
];
