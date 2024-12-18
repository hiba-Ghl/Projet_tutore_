import { Component } from '@angular/core';
import { CartesOffresComponent } from "../cartes-offres/cartes-offres.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CartesOffresComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
