import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
 
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email with validation
      password: ['', Validators.required]                  // Password required
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Connexion réussie avec :', this.signInForm.value);
      alert('Connexion réussie !');
      this.signInForm.reset();
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}



