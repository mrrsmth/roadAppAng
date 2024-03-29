import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email!: string;
  password!: string;
  token!: string;

  constructor(private apiService: ApiService) { }

  login() {
    this.apiService.login(this.email, this.password).pipe(
      tap((data) => {
        this.token = data.token;
        localStorage.setItem('token', this.token);
        console.log(this.token);
        console.log(localStorage.getItem('token'));
      })
    ).subscribe();
  }
}
