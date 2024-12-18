import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonneurFormComponent } from './donneur-form/donneur-form.component';
import { SidebarKineComponent } from './sidebar-kine/sidebar-kine.component';
import { SessionKineComponent } from './session-kine/session-kine.component';
import { OffreKineComponent } from './offre-kine/offre-kine.component';
import { CartesOffresComponent } from './cartes-offres/cartes-offres.component';

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
import { SignInComponent } from './sign-in/sign-in.component';


export const routes: Routes = [{path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent},
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


  { path: 'ajouter-offre', component:AjoutOffreComponent},
  { path: 'reservation-offre', component: MesReservationPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'inscription',component:InscriptionComponent },
  { path: 'inscription-patient',component:InscriptionPatientComponent},
  { path: 'inscription-donneur',component:InscriptionDonneurComponent},
  { path: 'inscription-kine',component:InscriptionKineComponent},
  { path: 'reservation-patient',component:ShowReservationComponent},
<<<<<<< HEAD
  { path: 'profil-kine',component:EditProfilKineComponent},
=======
  { path: 'profil-kine',component:EditProfilKineComponent}, 
  { path: 'sign-in',component:SignInComponent},
>>>>>>> 0e1fe6438fbe555486752b6c584e808a08aed9b7
];
