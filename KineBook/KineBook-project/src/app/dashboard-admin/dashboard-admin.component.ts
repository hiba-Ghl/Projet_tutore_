import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent implements OnInit{
        // Informations utilisateur
        user = {
          username: 'Jean Dupont',
          photoUrl: 'images/istockphoto-1300845620-612x612.jpg' // Remplacez par un chemin valide
        };
      
        // Données des réservations
        reservations = [
          { kineName: 'Dr. Bernard', kineContact: 'bernard@mail.com', status: 'Confirmé' },
          { kineName: 'Dr. Pierre', kineContact: 'pierre@mail.com', status: 'En attente' },
          { kineName: 'Dr. Marie', kineContact: 'marie@mail.com', status: 'Annulé' },
        ];
      
        constructor() {}
      
        ngOnInit(): void {}

}
