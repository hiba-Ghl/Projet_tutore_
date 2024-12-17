import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css'
})
export class FAQPageComponent {
 // Liste des questions et réponses
 faq = [
  {
    question: "Comment réserver une séance avec un kinésithérapeute ?",
    response: "Vous pouvez réserver une séance en consultant les offres disponibles sur notre plateforme et en choisissant l’horaire qui vous convient.",
    isVisible: false // État de visibilité de la réponse
  },
  {
    question: "Comment les kinésithérapeutes sont-ils sélectionnés ?",
    response: "Tous les kinésithérapeutes présents sur notre plateforme sont vérifiés et validés pour garantir des services professionnels et fiables..",
    isVisible: false
  },
  {
    question: "Puis-je annuler ou modifier une réservation ?",
    response: "Oui, vous pouvez annuler ou modifier votre réservation jusqu’à 24 heures avant la séance directement depuis votre compte..",
    isVisible: false
  },
  {
    question: "Comment fonctionne la commission de l’application ?",
    response: "L’application prélève une commission sur chaque réservation effectuée avec un kinésithérapeute. Cette commission est incluse dans le montant total payé.",
    isVisible: false
  },
  {
    question: "Comment puis-je faire un don de matériel médical ?",
    response: "Pour faire un don, inscrivez-vous dans l’application et suivez les instructions pour renseigner les détails du matériel.",
    isVisible: false
  },
  {
    question: "L’application est-elle gratuite ?",
    response: "Oui, l’application est gratuite pour les utilisateurs. Seules les séances réservées sont payantes.",
    isVisible: false
  },
  {
    question: "Comment contacter le support en cas de problème ?",
    response: "Vous pouvez nous contacter via notre formulaire de support ou par email à KineBook &#64; gmail.com..",
    isVisible: false
  }
];

// Fonction pour basculer la visibilité
toggleResponse(item: any): void {
  item.isVisible = !item.isVisible;
}
}
