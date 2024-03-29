import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api/public';

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, password: string) {
    const url = `${this.apiUrl}/signup`;
    const body = { name, email, password };

    return this.http.post(url, body).pipe(
      tap(response => {
        console.log('Ответ сервера:', response);
      })
    );
  }

  login(email: string, password: string) {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };

    return this.http.post(url, body).pipe(
      tap((response: any) => {
        console.log('Ответ сервера:', response);
        const token = response.Token;
        localStorage.setItem('token', token); // Сохраняем полученный токен в localStorage
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }
}
