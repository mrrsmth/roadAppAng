import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); 
    console.log('isAuthenticated', token);
    return token !== null;
  }
}
