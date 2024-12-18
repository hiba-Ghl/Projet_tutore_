import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  // userType: string = '';
  // constructor(private router: Router) {}

  // navigateToNext() {
  //   if (!this.userType) {
  //     alert('Veuillez sélectionner un statut avant de continuer.');
  //     return;
  //   }

  //   switch (this.userType) {
  //     case 'patient':
  //       this.router.navigate(['/inscription-patient']);
  //       break;
  //     case 'donneur':
  //       this.router.navigate(['/inscription-donneur']);
  //       break;
  //     case 'kine':
  //       this.router.navigate(['kine-sign-up']);
  //       break;
  //     default:
  //       alert('Statut non valide.');
  //   }
  // }
}
