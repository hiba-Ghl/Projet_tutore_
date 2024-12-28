import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add authentication logic here
  }
}
