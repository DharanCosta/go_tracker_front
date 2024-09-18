import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `<div *ngIf="step">Content</div>`,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  step = 1;
  userData = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  trainerData = { 
    name: '', 
    birth_date: '', 
    level: '', 
    ign: '', 
    start_date: '', 
    initial_xp: '',
    initial_catch: '',
    country: '',
    state: '',
    phone_number: '',
    area_code: ''
  };

  constructor(private http: HttpClient) {}

  onSubmitUserForm() {
    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const email = this.userData.email;

    this.http.get('/user/username/${email}/verify').subscribe(
      (response) => {
        console.log('Email verification successful', response);
        this.step = 2;
      },
      (error) => {
        if (error.status === 400) {
          // Handle 400 error (bad request)
          alert('Invalid email');
        } else {
          alert('Something went wrong');
        }
      }
    );
  }

  onSubmitTrainerForm() {
    // Combine both userData and trainerData into a full registration request
    const fullRegistrationData = { ...this.userData, ...this.trainerData };
    this.http.post('/user/signup', fullRegistrationData).subscribe(
      (response) => {
        // Handle successful trainer registration
        alert('Trainer registered successfully!');
      },
      (error) => {
        if (error.status === 400) {
          // Handle 400 error (bad request)
          alert('Invalid email');
        } else {
          alert('Something went wrong');
        }
      }
    );
  }
}