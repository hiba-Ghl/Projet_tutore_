import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  userType: string = ''; // Propriété pour stocker le statut sélectionné

  constructor(private router: Router) {}

  // Méthode pour gérer la redirection
  navigateToNext() {
    if (!this.userType) {
      alert('Veuillez sélectionner un statut avant de continuer.');
      return;
    }

    switch (this.userType) {
      case 'patient':
        this.router.navigate(['/inscription-patient']);
        break;
      case 'donneur':
        this.router.navigate(['/inscription-donneur']);
        break;
      case 'kine':
        this.router.navigate(['/kine-sign-up']);
        break;
      default:
        alert('Statut non valide.');
    }
  }
}
