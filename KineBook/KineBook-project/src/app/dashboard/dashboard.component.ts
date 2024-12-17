import { Component } from '@angular/core';
import { CartesOffresComponent } from "../cartes-offres/cartes-offres.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CartesOffresComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
