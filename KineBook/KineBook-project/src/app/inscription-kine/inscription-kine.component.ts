import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-kine',
  standalone: true,
  imports: [],
  templateUrl: './inscription-kine.component.html',
  styleUrl: './inscription-kine.component.css'
})
export class InscriptionKineComponent {
  therapistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.therapistForm = this.fb.group({
      // Personal Information
      name: ['', Validators.required],
      gender: [''],
      birthDate: [''],

      // Contact Information
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],

      // Professional Information
      specialty: ['', Validators.required],
      experience: ['', [Validators.min(0)]],
      languages: [''],

      // Account Information
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.therapistForm.valid) {
      console.log('Formulaire soumis avec succès :', this.therapistForm.value);
      alert('Inscription réussie !');
      this.therapistForm.reset();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

}
